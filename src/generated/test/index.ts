import { Database, Pool } from 'tusken'
import config from '../../../../../tusken.config'

export default new Database({
  reserved: ["user"],
  client: new Pool({
    ...config.connection,
    ...config.pool,
  })
})

export * as t from './types'
export * from './functions'