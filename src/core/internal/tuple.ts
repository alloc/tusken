import * as pg from 'pg'
import { kTypeId } from '../symbols'
import { RuntimeType } from '../type'

/** Provided by the `pg-types` package */
type PostgresTypes = {
  getTypeParser: (typeId: number) => (input: string) => any
}

export function getTupleParser(typeForIndex: (i: number) => RuntimeType) {
  // Taken from https://github.com/vitaly-t/pg-tuple/blob/350d256b8d9cfdc6899479c7f402a7ac0b2d4668/lib/single.js
  return (input: string) => {
    let i = 1
    let quotes = 0
    let startIdx = 1
    let values: any[] = []
    while (i < input.length) {
      let a = input[i]
      if ((a === ',' || i === input.length - 1) && !(quotes % 2)) {
        let s = input
          .substr(startIdx, i - startIdx)
          .replace(/^"|"$/g, '')
          .replace(/"{2}/g, '"')
          .replace(/\\{4}/g, '\\')

        let type = typeForIndex(values.length)
        let value = pg.types.getTypeParser(type[kTypeId])(s)

        values.push(value)
        startIdx = i + 1
        quotes = 0
      }
      if (a === '"') {
        quotes++
      }
      i++
    }
    return values
  }
}
