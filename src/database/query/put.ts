import { kPrimaryKey } from '../symbols'
import { TableRef } from '../table'
import { Query } from './node'
import { TokenArray } from './token'

type Props<T extends TableRef> = {
  table: T
  values: any
  pk?: any
}

export class Put<T extends TableRef = any> extends Query<Props<T>> {
  protected tokens({
    table,
    values,
    pk = values[table[kPrimaryKey]],
  }: Props<T>) {
    const insertion: TokenArray = [
      'INSERT INTO',
      { id: table.name },
      { tuple: Object.keys(values) },
      'VALUES',
      { tuple: Object.values(values).map(value => ({ infer: value })) },
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
