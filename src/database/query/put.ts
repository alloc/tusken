import { ClientResult } from '../database'
import { Query } from '../query'
import { kPrimaryKey } from '../symbols'
import { TableRef, toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenize } from '../tokenize'

type Props<T extends TableRef> = {
  table: T
  data: Record<string, any> | readonly Record<string, any>[]
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>, 'put'> {
  protected tokens(props: Props<T>, ctx: Query.Context) {
    let { table, data, pk } = props

    const [columns, rows] = tokenizeRows(data, ctx)
    if (!rows.length) {
      throw Error('no rows to insert')
    }

    const pkColumn = table[kPrimaryKey]
    if (pk) {
      columns.unshift(pkColumn)
      rows[0].tuple.unshift(tokenize(pk, ctx))
    }

    const insertion: TokenArray = [
      'INSERT INTO',
      { id: toTableName(table) },
      { tuple: columns },
      'VALUES',
      { list: rows },
    ]

    if (pk || columns.includes(pkColumn)) {
      insertion.push(
        'ON CONFLICT',
        { tuple: [table[kPrimaryKey]] },
        'DO UPDATE SET',
        {
          list: columns
            .filter(column => column !== pkColumn)
            .map(k => [{ id: k }, '=', { id: ['excluded', k] }]),
        }
      )
    }

    return insertion
  }

  returning(arg: any) {
    throw Error('not implemented')
  }

  protected resolve(result: ClientResult) {
    return result.rowCount
  }
}

export interface Put<T> extends PromiseLike<number> {}

function tokenizeRows(data: Props<any>['data'], ctx: Query.Context) {
  let columns!: string[]
  const rows: { tuple: TokenArray }[] = []
  for (const row of Array.isArray(data) ? data : [data]) {
    const values: TokenArray = []
    if (columns) {
      const newColumns = new Set(columns.concat(Object.keys(row)))
      for (const column of newColumns) {
        values.push(tokenize(row[column], ctx))
      }
      if (newColumns.size > columns.length) {
        columns = [...newColumns]
      }
    } else {
      for (const column of (columns = Object.keys(row))) {
        values.push(tokenize(row[column], ctx))
      }
    }
    rows.push({
      tuple: values,
    })
  }
  return [columns, rows] as const
}
