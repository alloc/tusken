import fs from 'fs'
import path from 'path'
import * as pgMem from 'pg-mem'
import { Database, inspectQuery, Query } from 'tusken'
import { expect } from 'vitest'

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

expect.addSnapshotSerializer({
  test: val => val instanceof Query,
  print: val => inspectQuery(val).sql,
})

expect.addSnapshotSerializer({
  test: val => Array.isArray(val) && val.length == 1 && val[0] instanceof Query,
  print: (val, print) => print(inspectQuery(val).tokens),
})
