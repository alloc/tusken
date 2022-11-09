import { Selectable, SelectResult, SelectResults } from '../selection'
import { SetExpression } from '../set'
import { QueryStream, QueryStreamConfig } from '../stream'
import { SelectBase } from './base/select'
import { Union } from './union'
import { Where } from './where'

export class Select<From extends Selectable[] = any> //
  extends SelectBase<From>
{
  union(query: Select<From>): Union<From> {
    return this.query({
      type: 'union',
      props: { selects: [this, query] },
      query: new Union(this.db),
    })
  }
}

export interface Select<From>
  extends SetExpression<SelectResult<From>>,
    PromiseLike<SelectResults<From>> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]>

  stream(config?: QueryStreamConfig): QueryStream<SelectResult<From>>

  [Symbol.asyncIterator](): AsyncIterableIterator<SelectResult<From>>
}
