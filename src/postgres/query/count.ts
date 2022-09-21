import { SelectProps } from '../props/select'
import { Query, QueryResponse } from '../query'
import { Selectable } from '../selection'
import { SelectBase } from './base/select'
import { Where } from './where'

export class Count<From extends Selectable[]> extends SelectBase<From> {
  protected tokenize(props: SelectProps, ctx: Query.Context) {
    const tokens = super.tokenize(props, ctx)
    tokens[1] = 'COUNT(*)'
    return tokens
  }
  protected resolve(result: QueryResponse) {
    return result.rows[0].count
  }
}

export interface Count<From> extends PromiseLike<number> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Count<[...From, Joined]>
}
