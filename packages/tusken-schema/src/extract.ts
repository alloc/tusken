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
  strict: boolean
  typeParams?: string
}

export async function extractNativeFuncs(client: Client) {
  const anyTypes = [
    'anyarray',
    'anynonarray',
    'anyelement',
    'anycompatible',
    'anycompatiblearray',
    'anycompatiblenonarray',
  ]

  const nativeTypeNames = nativeTypeMap
    .map(t => t[0])
    .concat('any', 'void', anyTypes)

  type NativeType = {
    id: number
    name: string
    arrayId: number
  }

  const { rows: nativeTypes } = await client.query<NativeType>(
    `select oid "id", typname "name", typarray "arrayId" from pg_type where typname not like '\\_%' escape '\\' and typname = ANY ($1)`,
    [nativeTypeNames]
  )

  const { rows: nativeFuncs } = await client.query<NativeFunc>(
    `select proname "name", proargnames "args", proargtypes "argTypes", provariadic "isVariadic", pronargdefaults "optionalArgCount", prorettype "returnType", proretset "returnSet", proisstrict "strict" from pg_proc where proname not like '\\_%' escape '\\' and prorettype = ANY ($1)`,
    [nativeTypes.map(t => [t.id, t.arrayId])]
  )

  const nativeTypeNameById = Object.assign(
    toTable(
      nativeTypes,
      t => t.id,
      t => 't.' + t.name
    ),
    toTable(
      nativeTypes,
      t => t.arrayId,
      t => `t.array<t.${t.name}>`
    )
  )

  // TODO: special implementations for these functions
  const ignoredFuncs = [
    'first_value',
    'lag',
    'last_value',
    'lead',
    'mode',
    'nth_value',
    'percentile_disc',
  ]

  const genericTypes = anyTypes.map(type => 't.' + type)
  const elementTypes = ['t.anyelement', 't.anycompatible']

  return nativeFuncs.filter(p => {
    if (ignoredFuncs.includes(p.name)) {
      return false
    }

    p.returnType = nativeTypeNameById[+p.returnType]
    p.argTypes = p.argTypes
      ? ((p as any).argTypes as string)
          .trim()
          .split(' ')
          .map(t => nativeTypeNameById[+t])
      : []

    if (p.argTypes.some(t => t == null)) {
      return false
    }

    const newArgTypes = [...p.argTypes]
    const genericArgTypes = p.argTypes.filter((argType, i) => {
      if (genericTypes.includes(argType)) {
        newArgTypes[i] = elementTypes.includes(argType) ? 't.elementof<T>' : 'T'
        return true
      }
    })

    const hasGenericReturn = genericTypes.includes(p.returnType)
    const needsTypeParam =
      genericArgTypes.length > 1 ||
      (genericArgTypes.length == 1 && hasGenericReturn)

    if (needsTypeParam) {
      const constraint =
        genericArgTypes.find(t => !elementTypes.includes(t)) || p.returnType

      if (!elementTypes.includes(constraint)) {
        p.argTypes = newArgTypes
        p.typeParams = `<T extends ${constraint}>`
        if (hasGenericReturn) {
          p.returnType = elementTypes.includes(p.returnType)
            ? 't.elementof<T>'
            : 'T'
        }
      }
    }

    return true
  })
}
