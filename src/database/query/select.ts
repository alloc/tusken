import { Any, Intersect } from '@alloc/types'
import { QueryStreamConfig } from '../stream'
import { kDatabaseQueryStream } from '../symbols'
import { SetType, Values } from '../type'
import { AbstractSelect, Selectable, SelectProps } from './abstract/select'
import { Where } from './where'

export type { Selectable, SelectProps }

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

  stream(config?: QueryStreamConfig) {
    const { db, values } = this.context

    const QueryStream = db[kDatabaseQueryStream]
    if (!QueryStream)
      throw Error(
        'pg-query-stream not installed or the generated client is outdated'
      )

    const query = this.render()
    const queryStream = new QueryStream<any>(query, values, config)
    return db.client.query<SelectResult<From>>(queryStream)
  }

  [Symbol.asyncIterator]() {
    const stream = this.stream()
    stream.once('readable', () => stream.resume())
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

type SelectResult<From extends Selectable[]> = SelectedRow<From[number]>
type SelectResults<From extends Selectable[]> = SelectResult<From>[]

/** Note that `T` must be a union, not an array type. */
export type SelectedRow<T> = unknown &
  ([T] extends [Any]
    ? Record<string, any>
    : Intersect<T extends SetType<infer Row> ? Row : never> extends infer Row
    ? Values<Extract<Row, object>>
    : never)
