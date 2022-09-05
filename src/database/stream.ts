// pg-query-stream@4.2.4
export interface QueryStreamConfig {
  batchSize?: number
  highWaterMark?: number
  rowMode?: 'array'
  types?: any
}
export declare class QueryStream {
  constructor(text: string, values?: any[], config?: QueryStreamConfig)
}
