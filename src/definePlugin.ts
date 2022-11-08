import type { Client, ConnectOptions } from './postgres/connection'
import type { Query } from './postgres/query'

/**
 * Control the client object that's responsible for talking to the
 * Postgres server.
 */
export interface ClientPlugin {
  create: (options: ConnectOptions) => Client
}

/**
 * Provide default connection options.
 */
export interface ConnectionPlugin {
  /**
   * Resolve the connection options for a query.
   *
   * Return `null` to use the default connection.
   */
  resolve?: (
    context: Query.Context
  ) => ({ key: string } & ConnectOptions) | null
  /**
   * Manipulate the default connection options.
   */
  defaults?: (options: ConnectOptions) => ConnectOptions
}

export function defineConnectionPlugin(plugin: ConnectionPlugin) {
  return plugin
}

export function defineClientPlugin(plugin: ClientPlugin) {
  return plugin
}
