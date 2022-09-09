import { Query } from './query'
import { QueryStream } from './stream'
import { kDatabaseQueryStream, kDatabaseReserved } from './symbols'

export type ClientResult = { rows: any[]; rowCount?: number }
export type Client = {
  query: {
    (query: string, values: any[]): Promise<ClientResult>
    <T>(stream: QueryStream<T>): QueryStream<T>
  }
  end: () => Promise<void>
}

export interface DatabaseConfig {
  client: Client
  reserved: string[]
  QueryStream?: typeof QueryStream
}

export class Database {
  protected [kDatabaseReserved]: string[]
  protected [kDatabaseQueryStream]?: typeof QueryStream
  client: Client

  constructor(config: DatabaseConfig) {
    this[kDatabaseReserved] = config.reserved
    this[kDatabaseQueryStream] = config.QueryStream
    this.client = config.client
  }

  protected query<T extends Query>(node: {
    type: T extends Query<any, infer Command> ? Command : never
    props: T extends Query<infer Props> ? Props : never
    query: T
  }): T

  protected query(node: any) {
    node.query.context.nodes.push(node)
    return node.query
  }
}
