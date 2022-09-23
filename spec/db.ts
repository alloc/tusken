import exec from '@cush/exec'
import path from 'path'
import { inspectQuery, Query } from 'tusken'
import { afterEach, beforeEach, expect } from 'vitest'
import client from './generated/e2e'

export { pg, t } from './generated/e2e'

let db = client
let shouldLogQueries = false

if (process.env.E2E) {
  db = client.connect({ database: 'e2e' })

  const { query } = db.client
  db.client.query = (...args: any): any => {
    if (shouldLogQueries && typeof args[0] == 'string') {
      console.log('query: ', args[0])
      console.log('params:', args[1])
    }
    return query.apply(db.client, args)
  }

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

export const enableQueryLogging = () => {
  console.log('Query logging enabled.')
  shouldLogQueries = true
}

afterEach(() => {
  shouldLogQueries = false
})

expect.addSnapshotSerializer({
  test: val => val instanceof Query,
  print: val => inspectQuery(val).sql,
})

expect.addSnapshotSerializer({
  test: val => Array.isArray(val) && val.length == 1 && val[0] instanceof Query,
  print: (val, print) => print(inspectQuery(val).tokens),
})
