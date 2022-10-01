import { Database } from '../core/database'
import { SelectProps } from '../core/props/select'
import { Query } from '../core/query'
import { Selectable } from '../core/selection'
import { TableRef } from '../core/table'
import { registerPlugin } from '../registerPlugin'
import { Where } from './where'

registerPlugin(
  class extends Database {
    /**
     * Count the number of rows in a selection. You can use the
     * `where` and `innerJoin` methods to be more specific.
     *
     * You need to use `pg.count` instead if you want to check
     * a specific column for `NULL` before counting a row.
     */
    count<From extends TableRef>(from: From) {
      return new Count(from)
    }
  }
)

export class Count<From extends Selectable[]> extends Query {
  constructor(protected from: From) {
    super()
  }
  protected tokenize(props: SelectProps, ctx: Query.Context) {
    const tokens = super.tokenize(props, ctx)
    tokens[1] = 'COUNT(*)'
    ctx.resolvers.push(result => result.rows[0].count)
    return tokens
  }
}

export interface Count<From> extends PromiseLike<number> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Count<[...From, Joined]>
}
