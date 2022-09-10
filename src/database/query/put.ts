import { toArray } from '../../utils/toArray'
import { Query, QueryResult } from '../query'
import { kPrimaryKey } from '../symbols'
import { TableRef, toTableName } from '../table'
import { Token, TokenArray } from '../token'
import { tokenize } from '../tokenize'

type Props<T extends TableRef> = {
  table: T
  data: Record<string, any> | readonly Record<string, any>[]
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>, 'put'> {
  protected tokens(props: Props<T>, ctx: Query.Context) {
    let { table, data, pk } = props

    const [columns, rows, nulls] = tokenizeRows(data, ctx)
    if (!rows.length) {
      throw Error('no rows to insert')
    }

    const pkColumn = table[kPrimaryKey]
    const mayConflict = pk !== undefined || columns.includes(pkColumn)

    if (pk !== undefined) {
      columns.unshift(pkColumn)
      rows[0].tuple.unshift(tokenize(pk, ctx))
    }

    const target = { id: toTableName(table) }
    const insertion: TokenArray = [
      'INSERT INTO',
      mayConflict && nulls.size ? [target, 'this'] : target,
      { tuple: columns.map(id => ({ id })) },
      'VALUES',
      { list: rows },
    ]

    if (mayConflict) {
      insertion.push(
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

    return insertion
  }

  returning(arg: any) {
    throw Error('not implemented')
  }

  protected resolve(result: QueryResult) {
    return result.rowCount
  }
}

export interface Put<T> extends PromiseLike<number> {}

function tokenizeRows(data: Props<any>['data'], ctx: Query.Context) {
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
          tokenizeColumnValue(values, row[column], ctx)
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
        tokenizeColumnValue(values, row[column], ctx)
      }
    }
    rows.push({
      tuple: values,
    })
  }

  return [columns, rows, nulls] as const
}

function tokenizeColumnValue(
  values: TokenArray,
  value: any,
  ctx: Query.Context
) {
  // For null and undefined values, use DEFAULT instead of NULL
  // so that NULL can have another meaning (see further down).
  values.push(value == null ? 'DEFAULT' : tokenize(value, ctx))
}
