import endent from 'endent'
import { NativeCast } from '../extract/extractCasts'
import { NativeTypes } from '../extract/extractTypes'
import { ImportDescriptorMap } from '../utils/imports'
import nativeTypeMap from './nativeTypeMap'

const toExport = (stmt: string) => `export ${stmt}`

export type GeneratedLines = {
  imports: ImportDescriptorMap
  lines: string[]
}

// TODO: include user-defined enum/composite types
export function generateNativeTypes(
  nativeTypes: NativeTypes,
  nativeCasts: NativeCast[],
  tuskenId: string
): GeneratedLines {
  const implicitCastMap: Record<string, string[]> = {}
  const explicitCastMap: Record<string, string[]> = {}
  const columnCastMap: Record<string, string[]> = {}
  for (const cast of nativeCasts) {
    const source = nativeTypes.byId[cast.source]
    const target = nativeTypes.byId[cast.target]
    if (source == target) {
      continue
    }
    if (cast.context == 'i') {
      implicitCastMap[source.name] ||= []
      implicitCastMap[source.name].push(target.name)
    } else if (cast.context == 'a') {
      columnCastMap[source.name] ||= []
      columnCastMap[source.name].push(target.name)
    } else {
      explicitCastMap[source.name] ||= []
      explicitCastMap[source.name].push(target.name)
    }
  }

  // TODO: add this once explicit casts are supported
  // const explicitCasts = Object.entries(columnCastMap).map(
  //   ([source, targets]) => endent`
  //     T extends ${source}
  //       ? ${targets.join(' | ')}
  //   `
  // ).join('\n: ')

  const castTypes = endent`
    type ImplicitCast<T extends string> = ${renderCastLogic(implicitCastMap)}
      : never
  
    /** Some implicit casts only take place during column assignment. */
    type ColumnCast<T extends string> = ImplicitCast<T> |
      (${renderCastLogic(columnCastMap, '  ')}
        : never)
  `

  const types: string[] = []
  for (const [nativeType, mappedType] of nativeTypeMap) {
    types.push(
      `type ${nativeType} = Type<"${nativeType}", ${mappedType}, ColumnCast<"${nativeType}">>`
    )
  }

  const arrayTypes = [
    'type array<Element extends Type> = Element extends Type<infer Native, infer T, infer ColumnT>' +
      '  ? Type<`${Native}[]`, T[], ColumnT[]>' +
      '  : never',
    'type array2d<Element extends Type> = array<array<Element>>',
    'type array3d<Element extends Type> = array<array2d<Element>>',
  ]

  const pseudoTypes = Object.entries({
    anynonarray: nativeTypeMap.map(t => t[0]).join(' | '),
    anyelement: 'anynonarray | anyarray',
    anyarray:
      'array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>',
    anycompatiblearray: 'anyarray',
    anyint: 'int2 | int4 | int8',
    pg_any: 'anynonarray | anyarray',
    pg_null: 'Type<"null", undefined, never>',
    pg_void: 'Type<"void", void, never>',
  }).map(
    ([name, union]) =>
      (name.startsWith('pg_')
        ? `type { ${name} as ${name.replace('pg_', '')} }\n`
        : '') + `type ${name} = ${union}`
  )

  const specialTypes = [
    'type elementof<T extends Type> = T extends array<infer E> ? E : anyelement',
    'type setof<T extends Type> = SetType<T>',
    'type param<T extends Type> = T extends Type<infer Native> ? Input<T | ImplicitCast<Native>> : never',
    'type aggParam<T extends Type> = T extends Type<infer Native> ? T | ImplicitCast<Native> | pg_null : never',
    'type record = Type<"record", { [key: string]: any }, never>',
    'type regtype = oid',
  ]

  return {
    imports: {
      [tuskenId]: ['ColumnRef', 'Input', 'SetType', 'Type'],
    },
    lines: [
      '\n// Primitive types',
      ...types.map(toExport),
      '\n// Array types',
      ...arrayTypes.map(toExport),
      '\n// Pseudo types',
      ...pseudoTypes.map(toExport),
      '',
      ...specialTypes.map(toExport),
      '',
      castTypes,
    ],
  }
}

function renderCastLogic(castMap: Record<string, string[]>, indent = '') {
  return Object.entries(castMap)
    .map(
      ([source, targets]) =>
        `T extends "${source}"\n${indent}  ? ${targets.join(' | ')}`
    )
    .join('\n' + indent + '  : ')
}
