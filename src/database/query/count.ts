import { ClientResult } from '../database'
import { Query } from '../query'
import { AbstractSelect, Selectable, SelectProps } from './abstract/select'
import { Where } from './where'

export class Count<From extends Selectable[]> //
  extends AbstractSelect<From, 'count'>
{
  protected tokens(props: SelectProps, ctx: Query.Context) {
    const tokens = super.tokens(props, ctx)
    tokens[1] = 'COUNT(*)'
    return tokens
  }
  protected resolve(result: ClientResult) {
    return result.rows[0].count
  }
}

export interface Count<From> extends PromiseLike<number> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Count<[...From, Joined]>
}
