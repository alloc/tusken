import exec from '@cush/exec'
import path from 'path'
import { inspectQuery, Query } from 'tusken'
import { expect } from 'vitest'
import client from './generated/e2e'

export { pg, t } from './generated/e2e'

let db = client
if (process.env.E2E) {
  db = client.connect({ database: 'e2e' })

  beforeEach(async () => {
    await db.client.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public')
    await exec('psql -d e2e -f', [
      path.resolve(__dirname, 'generated/test/schema.sql'),
    ])
    await exec('pg_restore -d e2e', [
      path.resolve(__dirname, 'generated/test/data.dump'),
    ])
  })
}

export default db

expect.addSnapshotSerializer({
  test: val => val instanceof Query,
  print: val => inspectQuery(val).sql,
})

expect.addSnapshotSerializer({
  test: val => Array.isArray(val) && val.length == 1 && val[0] instanceof Query,
  print: (val, print) => print(inspectQuery(val).tokens),
})
