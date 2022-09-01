import { Query } from '../query'
import { kPrimaryKey } from '../symbols'
import { TableRef } from '../table'
import { TokenArray } from '../token'
import { tokenize } from '../tokenize'

type Props<T extends TableRef> = {
  table: T
  values: any
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>> {
  protected tokens(props: Props<T>, ctx: Query.Context) {
    const { table, values, pk = values[table[kPrimaryKey]] } = props
    const insertion: TokenArray = [
      'INSERT INTO',
      { id: table.name },
      { tuple: Object.keys(values) },
      'VALUES',
      { tuple: Object.values(values).map(value => tokenize(value, ctx)) },
    ]
    if (pk) {
      insertion.push(
        'ON CONFLICT',
        { tuple: [table[kPrimaryKey]] },
        'DO UPDATE SET',
        {
          join: Object.keys(values).map(k => [
            { id: k },
            '=',
            { id: ['excluded', k] },
          ]),
          with: ', ',
        }
      )
    }
    return insertion
  }

  returning(arg: any) {
    throw Error('not implemented')
  }
}
