import type { Database, DatabaseConfig } from './database'
import type { Node } from './node'
import type { Query } from './query'

export type Plugin = PluginClass & {
  prototype: any
  test?: (value: any) => boolean
}

export const plugins: Plugin[] = []

type PluginClass = QueryClass | DatabaseClass
// | ExpressionClass

export type QueryClass = new (db: Database, node: Node) => Query
export type DatabaseClass = new (config: DatabaseConfig) => Database
// export type ExpressionClass = new (...args: any[]) => ExpressionRef
