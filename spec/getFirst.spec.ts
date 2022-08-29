import { db, t } from './db'

describe('db.getFirst', () => {
  db.getFirst(t.user)
})
