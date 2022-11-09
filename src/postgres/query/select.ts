import { renderQuery } from '../internal/query'
import { Query } from '../query'
import { Selectable, SelectResult, SelectResults } from '../selection'
import { QueryStream, QueryStreamConfig } from '../stream'
import { SetType } from '../type'
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

  stream(config?: QueryStreamConfig): QueryStream<SelectResult<From>> {
    const ctx: Query.Context = {
      query: this as any,
      values: [],
      resolvers: [],
      mutators: [],
    }

    // TODO: apply mutators to stream
    const query = renderQuery(ctx)
    const client = this.db['getClient'](ctx)
    if (client.stream) {
      return client.stream(query, ctx.values, config)
    }
    throw Error('Streaming not supported by your Postgres client')
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<SelectResult<From>> {
    const stream = this.stream()
    stream.resume()
    return stream[Symbol.asyncIterator]()
  }
}

export interface Select<From>
  extends SetType<SelectResult<From>>,
    PromiseLike<SelectResults<From>> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]>
}
