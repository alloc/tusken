import callsites from 'callsites'
import path from 'path'
import { ClientConfig, PoolConfig } from 'pg'

export interface Config {
  pool?: Omit<PoolConfig, keyof ClientConfig>
  connection?: ClientConfig
  /**
   * Where the generated Tusken schema is stored.
   * @default "./src/generated"
   */
  schemaDir?: string
  /**
   * Where the Postgres database is stored.
   * @default "./postgres"
   */
  dataDir?: string
}

export function defineConfig(config: Config) {
  let caller = callerPath()
  caller = caller ? path.dirname(caller) : ''
  config.dataDir ??= 'postgres'
  config.schemaDir ??= 'src/generated'
  resolve(config, 'dataDir', caller)
  resolve(config, 'schemaDir', caller)
  return config
}

function resolve(config: Config, key: keyof Config, cwd: string) {
  if (config[key]) {
    config[key] = path.resolve(cwd, config[key] as any)
  }
}

function callerPath(depth = 0) {
  depth += 2
  return (
    callsites()
      .map(callsite => callsite.getFileName())
      .filter(fileName => !!fileName && !fileName.startsWith('node:'))[depth] ||
    undefined
  )
}
