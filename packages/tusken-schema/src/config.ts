import { PoolConfig } from 'pg'

export type ClientConfig = PoolConfig & {
  host: string
  port: number
  database: string
  user: string
  password: string | (() => string | Promise<string>)
}
