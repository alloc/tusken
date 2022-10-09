import { toArray } from '../../utils/toArray'
import { Token, TokenArray } from '../internal/token'
import { tokenizeTyped } from '../internal/tokenize'
import { Query } from '../query'
import { kPrimaryKey, kTableColumns } from '../symbols'
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

    const pkColumn = table[kPrimaryKey]
    const isUpdate =
      pk !== undefined ||
      Object.entries(table[kTableColumns]).some(
        ([column, type]) => !type.isOptional && !columns.includes(column)
      )
    const isPkUpdate = pk !== undefined && columns.includes(pkColumn)
    const mayConflict = !isUpdate && columns.includes(pkColumn)

    if (isUpdate && !columns.includes(pkColumn)) {
      columns.unshift(pkColumn)
      rows[0].tuple.unshift(
        tokenizeTyped(pk, getColumnType(table, pkColumn), ctx)
      )
    }

    const targetId = toTableName(table)
    const target = { id: targetId }

    const tokens: TokenArray = [
      isUpdate ? 'UPDATE' : 'INSERT INTO',
      mayConflict && nulls.size ? [target, 'this'] : target,
    ]

    const valuesList = ['VALUES', { list: rows }]

    if (isUpdate) {
      const valuesId = 'new'
      tokens.push('SET', {
        list: (isPkUpdate ? columns : columns.slice(1)).map(
          rows.length == 1
            ? (id, i): TokenArray => [
                { id },
                '=',
                rows[0].tuple[isPkUpdate ? i : i + 1],
              ]
            : (id): TokenArray => [{ id }, '=', { id: [valuesId, id] }]
        ),
      })
      if (rows.length > 1) {
        tokens.push(
          'FROM',
          { concat: ['(', valuesList, ')'] },
          'AS',
          valuesId,
          { tuple: columns.map(id => ({ id })) }
        )
      }
      tokens.push(
        'WHERE',
        { id: [targetId, pkColumn] },
        '=',
        rows.length == 1 ? { value: pk } : { id: [valuesId, pkColumn] }
      )
    } else {
      tokens.push({ tuple: columns.map(id => ({ id })) }, valuesList)
      if (mayConflict) {
        tokens.push(
          'ON CONFLICT',
          { tuple: [{ id: table[kPrimaryKey] }] },
          'DO UPDATE SET',
          {
            list: columns
              .filter(column => column !== pkColumn)
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
