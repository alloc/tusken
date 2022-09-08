import { Submittable } from 'pg'

// pg-query-stream@4.2.4
export interface QueryStreamConfig {
  batchSize?: number
  highWaterMark?: number
  rowMode?: 'array'
  types?: any
}

export declare class QueryStream<T> {
  constructor(text: string, values?: any[], config?: QueryStreamConfig)
}

export interface QueryStream<T>
  extends Submittable,
    Omit<NodeJS.ReadableStream, typeof Symbol.asyncIterator> {
  [Symbol.asyncIterator](): AsyncIterableIterator<T>
}
