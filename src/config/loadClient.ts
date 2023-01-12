import type { ClientPlugin, ConnectionPlugin } from '../definePlugin'
import type { Client, ConnectOptions } from '../postgres/connection'
import { TuskenProject } from './config'
import { loadModule } from './loadModule'

export function loadClient(
  project: TuskenProject,
  options?: ConnectOptions
): [Client, ConnectOptions] {
  const { config } = project

  const connectionPluginPath = config.connectionPlugin.modulePath
  const connectionPlugin = loadModule(connectionPluginPath).exports
    .default as ConnectionPlugin

  const shouldUseProjectDefaults =
    !options ||
    (onlyKeys(options, ['database', 'password']) &&
      !options.database?.startsWith('postgres://'))

  if (shouldUseProjectDefaults) {
    options = { ...config.connection, ...options }
  } else {
    options = { ...options }
  }

  const connection = connectionPlugin.defaults?.(options) || options

  if (connection.connectionString) {
    const url = new URL(connection.connectionString)
    if (!options.database) {
      // Needs to be defined for `tusken generate` command.
      connection.database ||= url.pathname.slice(1)
    }
    // Override the database path if necessary.
    else if (options.database != connection.database) {
      url.pathname = '/' + options.database
      connection.connectionString = url.toString()
    }
  }

  const clientPluginPath = config.clientPlugin.modulePath
  const clientPlugin = loadModule(clientPluginPath).exports
    .default as ClientPlugin

  return [clientPlugin.create(connection), connection]
}

function onlyKeys(obj: any, allowedKeys: string[]) {
  return Object.keys(obj).every(key => allowedKeys.includes(key))
}
