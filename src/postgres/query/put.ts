import { isObject } from '../../utils/isObject'
import { toArray } from '../../utils/toArray'
import { Token, TokenArray } from '../internal/token'
import { tokenizeTyped } from '../internal/tokenize'
import { Query } from '../query'
import { kIdentityColumns, kTableColumns } from '../symbols'
import { getColumnType, TableRef, toTableName } from '../table'
import { RuntimeType } from '../type'

type Props<T extends TableRef> = {
  table: T
  data: Record<string, any> | readonly Record<string, any>[]
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>> {
  protected tokenize(props: Props<T>, ctx: Query.Context) {
    let { table, data, pk } = props

    const [columns, rows, nulls] = tokenizeRows(data, table, ctx)
    if (!rows.length) {
      throw Error('no rows to insert')
    }

    const pkColumns = table[kIdentityColumns] as string[]
    const pkValues: Record<string, any> = isObject(pk)
      ? pk
      : { [pkColumns[0]]: pk }

    /**
     * These columns are not defined in the `data` object.
     *
     * If this is empty, we are either inserting new rows or updating
     * the primary key of existing rows.
     */
    const pkUnusedColumns = pkColumns.filter(
      column => !columns.includes(column)
    )

    /**
     * An `UPDATE` query is needed if a specific row is being targeted
     * and the given `data` is missing required columns.
     */
    const isUpdate =
      pk !== undefined ||
      Object.entries(table[kTableColumns]).some(
        ([column, type]) => !type.isOptional && !columns.includes(column)
      )

    const mayConflict = !isUpdate && !pkUnusedColumns.length

    if (isUpdate && pkUnusedColumns.length) {
      for (const pkColumn of pkUnusedColumns) {
        const key = pkValues[pkColumn]
        if (key === undefined) {
          throw Error(`Missing primary key column "${pkColumn}"`)
        }
        columns.unshift(pkColumn)
        rows[0].tuple.unshift(
          tokenizeTyped(key, getColumnType(table, pkColumn), ctx)
        )
      }
    }

    const targetId = toTableName(table)
    const target = { id: targetId }

    const tokens: TokenArray = [
      isUpdate ? 'UPDATE' : 'INSERT INTO',
      mayConflict && nulls.size ? [target, 'this'] : target,
    ]

    const valuesList = ['VALUES', { list: rows }]

    if (isUpdate) {
      const assignments: TokenArray = []

      /** Used to reference a row from the `valuesList` */
      const valuesId = 'new'

      /** When true, a single row is having its primary key updated. */
      const isPkUpdate = pk !== undefined && !pkUnusedColumns.length
      columns.forEach((column, i) => {
        if (!isPkUpdate && pkColumns.includes(column)) {
          return
        }
        if (rows.length == 1) {
          assignments.push([{ id: column }, '=', rows[0].tuple[i]])
        } else {
          assignments.push([{ id: column }, '=', { id: [valuesId, column] }])
        }
      })

      tokens.push('SET', { list: assignments })
      if (rows.length > 1) {
        tokens.push(
          'FROM',
          { concat: ['(', valuesList, ')'] },
          'AS',
          valuesId,
          { tuple: columns.map(id => ({ id })) }
        )
      }
      tokens.push('WHERE', {
        list: pkColumns.map(pkColumn => [
          { id: [targetId, pkColumn] },
          '=',
          rows.length == 1
            ? { value: pkValues[pkColumn] }
            : { id: [valuesId, pkColumn] },
        ]),
      })
    } else {
      tokens.push({ tuple: columns.map(id => ({ id })) }, valuesList)
      if (mayConflict) {
        tokens.push(
          'ON CONFLICT',
          { tuple: pkColumns.map(id => ({ id })) },
          'DO UPDATE SET',
          {
            list: columns
              .filter(column => !pkColumns.includes(column))
              .map(column => {
                let value: Token = { id: ['excluded', column] }
                if (nulls.has(column)) {
                  value = {
                    callee: 'coalesce',
                    args: [value, { id: ['this', column] }],
                  }
                }
                return [{ id: column }, '=', value]
              }),
          }
        )
      }
    }

    ctx.impure = true
    ctx.resolvers.push(result => result.rowCount)
    return tokens
  }
}

export interface Put<T> extends PromiseLike<number> {}

function tokenizeRows(
  data: Props<any>['data'],
  table: TableRef,
  ctx: Query.Context
) {
  const rows: { tuple: TokenArray }[] = []

  // This tracks which columns may have a NULL value
  // for this specific INSERT command.
  const nulls = new Set<string>()

  let columns!: string[]
  for (const row of toArray(data)) {
    const values: TokenArray = []
    if (columns) {
      const newColumns = new Set(columns.concat(Object.keys(row)))
      for (const column of newColumns) {
        if (column in row) {
          const type = getColumnType(table, column)
          values.push(tokenizeColumnValue(row[column], type, ctx))
        } else {
          // Use NULL to indicate this column should be left alone.
          values.push('NULL')
          nulls.add(column)
        }
      }
      let i = columns.length
      if (i < newColumns.size) {
        columns = [...newColumns]
        do {
          // Each tuple's length must match the column count.
          for (const row of rows) {
            row.tuple.push('NULL')
          }
          nulls.add(columns[i])
        } while (++i < newColumns.size)
      }
    } else {
      for (const column of (columns = Object.keys(row))) {
        const type = getColumnType(table, column)
        values.push(tokenizeColumnValue(row[column], type, ctx))
      }
    }
    rows.push({
      tuple: values,
    })
  }

  return [columns, rows, nulls] as const
}

function tokenizeColumnValue(
  value: any,
  type: RuntimeType,
  ctx: Query.Context
): Token | TokenArray {
  // For null and undefined values, use DEFAULT instead of NULL
  // so that NULL can represent a preserved value.
  return value == null ? 'DEFAULT' : tokenizeTyped(value, type, ctx)
}
