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
  return config
}
