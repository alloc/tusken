import { Database, Pool } from 'tusken'
import config from '../tusken.config'
import QueryStream from "pg-query-stream"

export default new Database({
  reserved: ["like", "user"],
  client: process.env.NODE_ENV == 'test'
    ? null! // Set "db.client.query" in your test setup file.
    : new Pool({
        ...config.connection,
        ...config.pool,
      }),
  QueryStream,
})

export * as t from './types'
export * as pg from './functions'