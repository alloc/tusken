import fs from 'fs'
import path from 'path'
import * as pgMem from 'pg-mem'
import type { Database } from 'tusken'

export const memDb = pgMem.newDb()

const db: Database = (await import('./generated/test/index.js')).default as any
const { Client } = memDb.adapters.createPg()

db.client = new Client()
await db.client.query(loadSchema(), [])

export { pg, t } from './generated/test'
export { db }

function loadSchema() {
  const file = path.resolve(__dirname, './generated/test/schema.sql')
  const schema = fs.readFileSync(file, 'utf8').split(';\n')
  return schema.filter(stmt => !stmt.includes('OWNER TO')).join(';\n')
}
