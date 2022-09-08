import { Database, TableRef } from '@tusken/core'
import { Count } from '../core/count'

/**
 * Count the number of rows in a selection. You can use the
 * `where` and `innerJoin` methods to be more specific.
 *
 * You need to use `pg.count` instead if you want to check
 * a specific column for `NULL` before counting a row.
 */
export function count<From extends TableRef>(this: Database, from: From) {
  return this.query({
    type: 'count',
    query: new Count<[From]>(this),
    props: { from },
  })
}
