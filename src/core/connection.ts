import { ClientConfig } from 'pg'
import { QueryResponse } from './query'
import { QueryStream } from './stream'

export type Client = Connection | ConnectionPool

export type Connection = ConnectionLike & {
  end: () => Promise<void>
}

export type ConnectionPool = ConnectionLike & {
  connect: () => Promise<PooledConnection>
  end: () => Promise<void>
}

export type PooledConnection = ConnectionLike & {
  release: () => Promise<void>
}

export type ConnectionLike = {
  query: QueryFn
  on: (event: 'error', listener: (e: Error) => void) => void
}

export type QueryFn = {
  (query: string, values?: any[]): Promise<QueryResponse>
  <T>(stream: QueryStream<T>): QueryStream<T>
}

export type ConnectOptions = ClientConfig
export type ConnectFn = (opts?: ConnectOptions) => Client
