import { renderQuery } from '../../internal/query'
import { Query } from '../../query'
import type { Selectable, SelectionSource, SelectResult } from '../../selection'
import type { QueryStreamConfig } from '../../stream'
import { kDatabaseQueryStream } from '../../symbols'

const kSelectFrom = Symbol()

export abstract class SetBase<From extends Selectable[] = any> extends Query {
  protected declare [kSelectFrom]: From
  protected declare sources: SelectionSource[]
  protected limit?: number
  protected offset?: number
  protected single?: boolean

  stream(config?: QueryStreamConfig) {
    const QueryStream = this.db[kDatabaseQueryStream]
    if (!QueryStream)
      throw Error(
        'pg-query-stream not installed or the generated client is outdated'
      )

    const ctx: Query.Context = {
      query: this as any,
      values: [],
      resolvers: [],
      mutators: [],
    }

    // TODO: apply mutators to stream
    const query = renderQuery(ctx)
    const stream = new QueryStream<SelectResult<From>>(
      query,
      ctx.values,
      config
    )

    this.db.client.query(stream)
    return stream
  }

  [Symbol.asyncIterator]() {
    const stream = this.stream()
    stream.resume()
    return stream[Symbol.asyncIterator]()
  }
}
