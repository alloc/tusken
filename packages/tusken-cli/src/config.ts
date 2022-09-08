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
  tuskenId: string
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
      // The connectionString option is overridden by the other options,
      // so we need to omit the defaultConnection in that case.
      if (!config.connection?.connectionString) {
        config.connection = { ...defaultConnection, ...config.connection }
      }
      cwd = path.dirname(configPath)
    }
  }

  config ||= {
    connection: { ...defaultConnection },
  }

  assertType<LoadedConfig>(config)

  if (database) {
    config.connection.database = database
  }

  config.schemaDir = config.schemaDir
    ? path.resolve(cwd, config.schemaDir)
    : path.resolve('./src/generated')

  config.dataDir = config.dataDir
    ? path.resolve(cwd, config.dataDir)
    : path.resolve('./postgres')

  config.tuskenId = path.join(
    path.relative(
      config.schemaDir,
      path.dirname(require.resolve('tusken/package.json'))
    ),
    'src/tusken'
  )

  return [config as LoadedConfig, configPath] as const
}

function assertType<T>(arg: any): asserts arg is T {}
