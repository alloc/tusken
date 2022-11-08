import type { Client } from 'tusken'
import { NativeTypes } from './extractTypes'

export type NativeFunc = {
  name: string
  args: string[] | null
  argTypes: string[]
  isVariadic: 1 | 0
  optionalArgCount: number
  returnSet: boolean
  returnType: string
  kind: 'a' | 'f' | 'p' | 'w'
  strict: boolean
  typeParams?: string
}

export async function extractNativeFuncs(client: Client, types: NativeTypes) {
  const { rows: nativeFuncs } = await client.query<NativeFunc>(
    `select proname "name", proargnames "args", proargtypes "argTypes", provariadic "isVariadic", pronargdefaults "optionalArgCount", prorettype "returnType", proretset "returnSet", prokind "kind", proisstrict "strict" from pg_proc where proname not like '\\_%' escape '\\' and prorettype = ANY ($1)`,
    [types.map(t => [t.id, t.arrayId])]
  )

  // TODO: need special implementations for these functions
  const hypotheticalSetFuncs = [
    'cume_dist',
    'dense_rank',
    'percent_rank',
    'rank',
  ]
  const orderedSetFuncs = ['mode', 'percentile_cont', 'percentile_disc']
  const ignoredFuncs = [...hypotheticalSetFuncs, ...orderedSetFuncs]

  const anyArrayTypes = ['anyarray', 'anycompatiblearray']
  const elementTypes = ['anyelement', 'anycompatible']

  return nativeFuncs.filter(fn => {
    if (fn.kind == 'w' || ignoredFuncs.includes(fn.name)) {
      return
    }

    const argTypes = fn.argTypes
      ? ((fn as any).argTypes as string)
          .trim()
          .split(' ')
          .map(t => types.byId[+t])
      : []

    // Just need to check argTypes, since returnType is checked
    // in the SQL query above.
    if (argTypes.some(t => t == null)) {
      return
    }

    fn.argTypes = argTypes.map(t => t.jsType)
    const returnType = types.byId[+fn.returnType]
    fn.returnType = returnType.jsType

    const hasGenericReturn = types.any.includes(returnType.name)
    const genericArrayArg = argTypes.find(argType =>
      anyArrayTypes.includes(argType.name)
    )

    const newArgTypes = [...fn.argTypes]
    const genericArgTypes = argTypes.filter((argType, i) => {
      if (types.any.includes(argType.name)) {
        newArgTypes[i] = elementTypes.includes(argType.name)
          ? genericArrayArg
            ? 't.elementof<T>'
            : 'T'
          : 'T'

        return true
      }
    })

    const needsTypeParam =
      genericArgTypes.length > 1 ||
      (genericArgTypes.length == 1 && hasGenericReturn)

    if (needsTypeParam) {
      fn.argTypes = newArgTypes
      if (genericArrayArg) {
        fn.typeParams = `<T extends ${genericArrayArg.jsType}>`
        if (hasGenericReturn) {
          fn.returnType = elementTypes.includes(fn.returnType)
            ? 't.elementof<T>'
            : 'T'
        }
      } else {
        fn.typeParams = '<T extends t.any>'
        if (hasGenericReturn) {
          fn.returnType = elementTypes.includes(fn.returnType)
            ? 'T'
            : 't.array<T>'
        }
      }
    }

    return true
  })
}
