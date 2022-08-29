import { Query } from '.'
import QueryStream = require('pg-query-stream')

interface QueryStreamConfig {
  batchSize?: number
  highWaterMark?: number
  rowMode?: 'array'
  types?: any
}

export class Stream<T> extends Query<
  ReadableStream<T[]>,
  { query: Query; config?: QueryStreamConfig }
> {
  constructor(query: Query, config?: QueryStreamConfig) {
    super(query, { query, config }, props => [props.query.toSql()])
  }
}
