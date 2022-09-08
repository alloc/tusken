import {
  AbstractSelect,
  ClientResult,
  Query,
  Selectable,
  SelectProps,
  Where,
} from '@tusken/core'

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
