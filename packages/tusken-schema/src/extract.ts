import { Client } from 'pg'
import nativeTypeMap from './typescript/nativeTypeMap'
import { toTable } from './utils/toTable'

export type NativeFunc = {
  name: string
  args: string[] | null
  argTypes: string[]
  isVariadic: 1 | 0
  optionalArgCount: number
  returnSet: boolean
  returnType: string
}

export async function extractNativeFuncs(client: Client) {
  const nativeTypeNames = nativeTypeMap.map(t => t[0])
  const { rows: nativeTypes } = await client.query(
    `select oid, typname "name" from pg_type where typname not like 'pg\\_%' and typname not like '\\_%' escape '\\' and typname = ANY ($1)`,
    [nativeTypeNames]
  )

  const { rows: nativeFuncs } = await client.query<NativeFunc>(
    `select proname "name", proargnames "args", proargtypes "argTypes", provariadic "isVariadic", pronargdefaults "optionalArgCount", prorettype "returnType", proretset "returnSet" from pg_proc where proname not like '\\_%' escape '\\' and prorettype = ANY ($1)`,
    [nativeTypes.map(t => t.oid)]
  )

  const nativeTypeNameById: Record<number, string> = toTable(
    nativeTypes,
    t => t.oid,
    t => t.name
  )

  return nativeFuncs.filter(p => {
    p.returnType = nativeTypeNameById[+p.returnType]
    p.argTypes = ((p as any).argTypes as string)
      .split(' ')
      .map(t => nativeTypeNameById[+t])

    return p.argTypes.every(t => t !== undefined)
  })
}
