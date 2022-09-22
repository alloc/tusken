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
  protected abstract sources: SelectionSource[]

  /**
   * Resolve with a single row at the given offset.
   * - Negative offset is treated as zero.
   * - Multiple calls are not supported.
   */
  at(offset: number) {
    if (offset > 0) {
      this.props.offset = offset
    }
    this.context.single = true
    return this.limit(1)
  }

  limit(n: number) {
    this.props.limit = n
    return this
  }

  orderBy(selector: SortSelection<From> | SortSelector<From>) {
    this.props.orderBy = orderBy(this.sources, selector)
    return this
  }

  stream(config?: QueryStreamConfig) {
    const { db, values } = this.context

    const QueryStream = db[kDatabaseQueryStream]
    if (!QueryStream)
      throw Error(
        'pg-query-stream not installed or the generated client is outdated'
      )

    const query = renderQuery(this.context)
    const stream = new QueryStream<SelectResult<From>>(query, values, config)
    db.client.query(stream)
    return stream
  }

  [Symbol.asyncIterator]() {
    const stream = this.stream()
    stream.resume()
    return stream[Symbol.asyncIterator]()
  }
}
