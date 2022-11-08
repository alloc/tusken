import type { QueryResponse } from './query'
import type { QueryStream, QueryStreamConfig } from './stream'

export type Client = Connection | ConnectionPool

export type Connection = ConnectionLike & {
  end: () => Promise<void>
}

export type ConnectionPool = ConnectionLike & {
  connect: () => Promise<PooledConnection>
  end: () => Promise<void>
}

export type PooledConnection = ConnectionLike & {
  release: () => void
}

export type ConnectionLike = {
  query: <T extends object = Record<string, any>>(
    query: string,
    values?: readonly any[]
  ) => Promise<QueryResponse<T>>
  stream?: (
    query: string,
    values?: readonly any[],
    config?: QueryStreamConfig
  ) => QueryStream<any>
  on: (event: 'error', listener: (e: Error) => void) => any
}

export type ConnectOptions = {
  /**
   * The `key` allows reuse of an existing client object and the
   * creation of multiple clients for distinct Postgres servers.
   *
   * This is usually defined by a plugin.
   *
   * @default "default"
   */
  key?: string
  /**
   * If defined, the connection string will be the only option used when
   * connecting to the database.
   */
  connectionString?: string
  host?: string
  port?: number
  user?: string
  password?: string
  database?: string
  ssl?: boolean
}
