import { renderQuery } from '../internal/query'
import { Selectable, SelectResult, SelectResults } from '../selection'
import { QueryStreamConfig } from '../stream'
import { kDatabaseQueryStream } from '../symbols'
import { SetType } from '../type'
import { AbstractSelect, SelectProps } from './abstract/select'
import { orderBy, SortSelection, SortSelector } from './orderBy'
import { Where } from './where'

export class Select<From extends Selectable[] = any> //
  extends AbstractSelect<From, 'select'>
{
  /**
   * Resolve with a single row at the given offset.
   * - Negative offset is treated as zero.
   * - Multiple calls are not supported.
   * - Does nothing on a subquery.
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
    this.props.orderBy = orderBy(this.props, selector)
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

export interface Select<From>
  extends SetType<SelectResult<From>>,
    PromiseLike<SelectResults<From>> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]>
}
