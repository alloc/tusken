import type { Client } from 'tusken'
import nativeTypeMap from '../typescript/nativeTypeMap'
import { toTable } from '../utils/toTable'

export type NativeType = {
  id: number
  name: string
  arrayId: number
  jsType: string
}

export type NativeTypes = NativeType[] & {
  byName: Record<string, NativeType>
  byId: Record<number, NativeType>
  any: string[]
}

export async function extractNativeTypes(client: Client) {
  const anyTypes = [
    'anyarray',
    'anynonarray',
    'anyelement',
    'anycompatible',
    'anycompatiblearray',
    'anycompatiblenonarray',
  ]

  const nativeTypeNames = [
    ...Object.keys(nativeTypeMap),
    'any',
    'void',
    ...anyTypes,
  ]

  const response = await client.query<NativeType>(
    `select oid "id", typname "name", typarray "arrayId" from pg_type where typname like 'reg%' or (typname not like '\\_%' escape '\\' and typname = ANY ($1))`,
    [nativeTypeNames]
  )

  const nativeTypes = response.rows as NativeTypes

  nativeTypes.byName = toTable(nativeTypes, t => t.name)
  nativeTypes.byId = toTable(nativeTypes, t => t.id)

  for (const type of nativeTypes) {
    type.jsType = 't.' + type.name
    nativeTypes.byId[type.arrayId] = {
      ...type,
      name: type.name + '[]',
      jsType: `t.array<${type.jsType}>`,
    }
  }

  nativeTypes.any = anyTypes
  return nativeTypes
}
