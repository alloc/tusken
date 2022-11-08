import { Query } from './query'

export interface QueryStreamConfig {}

export declare class QueryStream<T> {
  constructor(text: string, ctx: Query.Context, config?: QueryStreamConfig)
}

export interface QueryStream<T>
  extends Omit<NodeJS.ReadableStream, typeof Symbol.asyncIterator> {
  [Symbol.asyncIterator](): AsyncIterableIterator<T>
}
