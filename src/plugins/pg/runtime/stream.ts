import QueryStream from 'pg-query-stream'
import { TuskenPool } from '../pool'

TuskenPool.prototype.stream = function (query, values, config) {
  const stream = new QueryStream(query, values as any[], config)
  this.query(stream)
  return stream
}

declare module 'tusken' {
  export interface QueryStreamConfig
    extends Exclude<ConstructorParameters<typeof QueryStream>[2], void> {}
}

// To ensure the `declare module` statement above is merged into the
// "tusken" package, we have to export something.
export default QueryStream
