import { Client } from 'pg'
import { NativeTypes } from './extractTypes'

export type NativeCast = {
  id: number
  source: number
  target: number
  /**
   * `e` = explicit only
   * `i` = implicit anywhere
   * `a` = implicit in column assignment
   */
  context: 'a' | 'i' | 'e'
}

export async function extractTypeCasts(client: Client, types: NativeTypes) {
  const { rows: nativeCasts } = await client.query<NativeCast>(
    `select oid "id", castsource "source", casttarget "target", castcontext "context" from pg_cast where castsource = ANY ($1) and casttarget = ANY ($1)`,
    [types.map(t => [t.id, t.arrayId])]
  )

  return nativeCasts
}
