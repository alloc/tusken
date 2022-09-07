import { ClientResult } from '../database'
import { Query } from '../query'
import { kPrimaryKey } from '../symbols'
import { TableRef, toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenize } from '../tokenize'

type Props<T extends TableRef> = {
  table: T
  row: Record<string, any>
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>, 'put'> {
  protected tokens(props: Props<T>, ctx: Query.Context) {
    let { table, row, pk } = props
    const columns = Object.keys(row)
    const values = Object.values(row)
    if (pk) {
      columns.unshift(table[kPrimaryKey])
      values.unshift(pk)
    } else {
      pk = row[table[kPrimaryKey]]
    }
    const insertion: TokenArray = [
      'INSERT INTO',
      { id: toTableName(table) },
      { tuple: columns },
      'VALUES',
      { tuple: values.map(value => tokenize(value, ctx)) },
    ]
    if (pk) {
      insertion.push(
        'ON CONFLICT',
        { tuple: [table[kPrimaryKey]] },
        'DO UPDATE SET',
        {
          list: Object.keys(row).map(k => [
            { id: k },
            '=',
            { id: ['excluded', k] },
          ]),
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
