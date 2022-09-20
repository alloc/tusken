import fs from 'fs'
import path from 'path'
import type { ClientConfig } from 'pg'
import type { Config } from 'tusken/config'
import escalade from './escalade/sync'

const getDefaultConnection = () => ({
  host: process.env.PGHOST || 'localhost',
  port: +(process.env.PGPORT || 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'main',
})

export type LoadedConfig = Config & {
  connection: ClientConfig & ReturnType<typeof getDefaultConnection>
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

  const defaultConnection = getDefaultConnection()

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
      configPath = fs.realpathSync(configPath)
    } else {
      configPath = undefined
    }
  }

  config ||= {
    connection: defaultConnection,
  }

  assertType<LoadedConfig>(config)

  if (database) {
    config.connection.database = database
  }

  // Only needed if no config file exists.
  config.dataDir ??= path.resolve('postgres')
  config.schemaDir ??= path.resolve('src/generated')

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
