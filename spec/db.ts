import { Mock } from 'vitest'
import { ClientResult, Database } from '../src/tusken'

export { pg, t } from './generated/test'

export let db: Database
export let query: Mock<[string], Promise<ClientResult>>

beforeEach(() => {
  db.client.query = query = vi.fn(
    async (sql: string): Promise<ClientResult & { sql: string }> => ({
      sql,
      rows: [],
    })
  )
})
