import * as pgMem from 'pg-mem'
import db from './generated/test'

export { default as db, pg, t } from './generated/test/index'

export const memDb = pgMem.newDb()
db.client = {
  query: text => Promise.resolve(memDb.public.query(text)),
}
