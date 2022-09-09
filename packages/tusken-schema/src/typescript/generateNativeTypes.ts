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
  const regTypes = new Set<string>()
  const implicitCastMap: Record<string, string[]> = {}
  const explicitCastMap: Record<string, string[]> = {}
  const columnCastMap: Record<string, string[]> = {}

  for (const cast of nativeCasts) {
    const source = nativeTypes.byId[cast.source]
    const target = nativeTypes.byId[cast.target]
    if (source == target || target.name.startsWith('reg')) {
      continue
    }
    if (source.name.startsWith('reg')) {
      regTypes.add(source.name)
      continue
    }
    if (cast.context == 'i') {
      implicitCastMap[target.name] ||= []
      implicitCastMap[target.name].push(source.name)
    } else if (cast.context == 'a') {
      columnCastMap[target.name] ||= []
      columnCastMap[target.name].push(source.name)
    } else {
      // explicitCastMap[target.name] ||= []
      // explicitCastMap[target.name].push(source.name)
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
    /** This maps a native type to all types that can be implicitly cast to it. */
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

  // These pseudo types are conflicting with TypeScript reserved keywords.
  const pseudoConflicts = {
    ANY: 'anynonarray | anyarray',
    NULL: 'Type<"null", undefined, undefined>',
    VOID: 'Type<"void", void, void>',
  }

  const pseudoTypes = Object.entries({
    ...pseudoConflicts,
    anyarray:
      'array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>',
    anycompatiblearray: 'anyarray',
    anynonarray: nativeTypeMap.map(t => t[0]).join(' | '),
    anyelement: 'anynonarray | anyarray',
  }).map(([name, type]) => `type ${name} = ${type}`)

  const specialTypes = [
    'type elementof<T extends Type> = T extends array<infer E> ? E : anyelement',
    'type param<T extends Type> = T extends Type<infer Native> ? Input<T | ImplicitCast<Native>> : never',
    'type aggParam<T extends Type> = T extends Type<infer Native> ? T | ImplicitCast<Native> | NULL : never',
    'type record = Type<"record", { [key: string]: any }, never>',
  ]

  return {
    imports: {
      [tuskenId]: ['Input', 'Interval', 'Json', 'Range', 'Type'],
    },
    lines: [
      '\n// Primitive types',
      ...types.map(toExport),
      '\n// Array types',
      ...arrayTypes.map(toExport),
      '\n// Pseudo types',
      ...pseudoTypes.map(toExport),
      toExport(
        'type { ' +
          Object.keys(pseudoConflicts)
            .map(name => `${name} as ${name.toLowerCase()}`)
            .join(', ') +
          ' }'
      ),
      '\n// Registry types',
      toExport(
        'type { ' + Array.from(regTypes, t => `oid as ${t}`).join(', ') + ' }'
      ),
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