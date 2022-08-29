import { Mock } from 'vitest'
import { ClientResult, Database } from '../src/tusken'

export let db: Database
export let query: Mock<[string], Promise<ClientResult>>

beforeEach(() => {
  query = vi.fn(
    async (sql: string): Promise<ClientResult> => ({ rowCount: 0, rows: [] })
  )
  db = new Database({
    reserved: [],
    client: { query },
  }) as any
})

export * as t from './types'
