import assert from 'assert'
import path from 'path'
import type { ClientConfig } from 'pg'
import type { Config } from 'tusken/config'
import escalade from './escalade/sync'

const defaultConnection = {
  host: process.env.PGHOST || 'localhost',
  port: +(process.env.PGPORT || 5432),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || ' ',
  database: process.env.PGDATABASE || process.env.USER!,
}

export type LoadedConfig = Config & {
  connection: ClientConfig & typeof defaultConnection
  schemaDir: string
  dataDir: string
}

export function loadConfig(configPath?: string, database?: string) {
  let cwd = process.cwd()
  let config: Config
  configPath ||= escalade(cwd, (dir, files) => {
    const file = files.find(f => /^tusken\.config\.[jt]s$/.test(f))
    if (file) {
      return path.join(dir, file)
    }
  })
  if (configPath) {
    const jiti = require('jiti') as typeof import('jiti').default
    const load = jiti(__filename, { interopDefault: true, esmResolve: true })
    config = load(path.resolve(configPath))
    if (config) {
      config.connection = { ...defaultConnection, ...config.connection }
      cwd = path.dirname(configPath)
    }
  }
  config ||= {
    connection: { ...defaultConnection },
  }
  assert(config.connection)
  if (database) {
    config.connection.database = database
  } else if (!config.connection.database) {
    console.error('The --database option is required')
    process.exit(1)
  }
  config.schemaDir = path.resolve(config.schemaDir || './src/generated')
  config.dataDir = path.resolve(config.dataDir || './postgres')
  return [config as LoadedConfig, configPath] as const
}
