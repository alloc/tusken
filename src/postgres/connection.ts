import { ClientConfig } from 'pg'
import { QueryResult } from './query'
import { QueryStream } from './stream'

export type Client = Connection | ConnectionPool

export type ConnectionPool = {
  query: QueryFn
  connect: () => Promise<PooledConnection>
  end: () => Promise<void>
}

export type PooledConnection = {
  query: QueryFn
  release: () => Promise<void>
}

export type Connection = {
  query: QueryFn
  end: () => Promise<void>
}

export type QueryFn = {
  (query: string, values: any[]): Promise<QueryResult>
  <T>(stream: QueryStream<T>): QueryStream<T>
}

export type ConnectOptions = ClientConfig
export type ConnectFn = (opts: ConnectOptions) => Client
