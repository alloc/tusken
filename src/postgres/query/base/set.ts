import { renderQuery } from '../../internal/query'
import { SetProps } from '../../props/set'
import { Query } from '../../query'
import type { Selectable, SelectionSource, SelectResult } from '../../selection'
import type { QueryStreamConfig } from '../../stream'
import { kDatabaseQueryStream } from '../../symbols'
import { orderBy, SortSelection, SortSelector } from '../orderBy'

const kSelectFrom = Symbol()

export abstract class SetBase<
  From extends Selectable[] = any,
  Props extends SetProps = any
> extends Query<Props> {
  protected declare [kSelectFrom]: From
  protected declare abstract sources: SelectionSource[]

  /**
   * Resolve with a single row at the given offset.
   * - Negative offset is treated as zero.
   * - Multiple calls are not supported.
   */
  at(offset: number) {
    const self = this.clone()
    self.props.single = true
    self.props.limit = 1
    self.props.offset = offset > 0 ? offset : undefined
    return self
  }

  limit(length: number, page?: number) {
    const self = this.clone()
    self.props.limit = length
    if (page && page > 1) {
      self.props.offset = length * (page - 1)
    }
    return self
  }

  orderBy(selector: SortSelection<From> | SortSelector<From>) {
    const self = this.clone()
    self.props.orderBy = orderBy(self.sources, selector)
    return self
  }

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
