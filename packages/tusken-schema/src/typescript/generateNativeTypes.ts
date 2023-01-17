import endent from 'endent'
import { NativeCast } from '../extract/extractCasts'
import { NativeTypes } from '../extract/extractTypes'
import { ImportDescriptorMap } from '../utils/imports'
import { __PURE__ } from '../utils/syntax'
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
    }
  }

  const castTypes = endent`
    // Inject rules for implicit type coercion.
    declare module 'tusken' {
      export interface ImplicitTypeCoercion {
        ${Object.entries(implicitCastMap)
          .map(([source, targets]) => {
            return endent`
              "${source}": ${targets.join(' | ')}
            `
          })
          .join('\n')}
      }
    }
  
    /** Some implicit casts only take place during column assignment. */
    type ColumnCast<T extends string> = ImplicitCast<T> |
      (${renderCastLogic(columnCastMap, '  ')}
        : never)
  `

  const JSON_TYPES = ['json', 'jsonb']

  const types: string[] = []
  const runtimeTypes: string[] = ['const option = defineOptionalType']

  for (const [nativeType, mappedType] of Object.entries(nativeTypeMap)) {
    types.push(
      `type ${nativeType} = Type<"${nativeType}", ${mappedType}, ColumnCast<"${nativeType}">>`
    )
    const { id, arrayId } = nativeTypes.byName[nativeType]
    const runtimeArgs = [`${id}, "${nativeType}", ${arrayId}`]
    if (JSON_TYPES.includes(nativeType)) {
      runtimeArgs.push('tokenizeJson')
    }
    runtimeTypes.push(
      `const ${nativeType} = ${__PURE__} defineType<${nativeType}>(${runtimeArgs.join(
        ', '
      )})`
    )
  }

  // These pseudo types are conflicting with TypeScript reserved keywords.
  const pseudoConflicts = {
    ANY: 'anynonarray | anyarray',
    NULL: 'Type<"null", null, null>',
    VOID: 'Type<"void", void, void>',
  }

  const pseudoTypes = Object.entries({
    ...pseudoConflicts,
    anyarray:
      'array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>',
    anycompatiblearray: 'anyarray',
    anynonarray: Object.keys(nativeTypeMap).join(' | '),
    anyelement: 'anynonarray | anyarray',
  }).map(([name, type]) => `type ${name} = ${type}`)

  const specialTypes = [
    'type elementof<T extends Type> = T extends array<infer E> ? E : anyelement',
    'type param<T extends Type> = QueryParam<T>',
    'type aggParam<T extends Type> = AggregateParam<T>',
    'type record = Type<"record", { [key: string]: any }, never>',
    'type typeLike<T> = Type<any, T>',
    'type numberLike = typeLike<number>',
    'type stringLike = typeLike<string>',
    'type dateLike = typeLike<Date>',
  ]

  return {
    imports: {
      [tuskenId]: [
        'defineOptionalType',
        'defineType',
        'tokenizeJson',
        'AggregateParam',
        'ImplicitCast',
        'Interval',
        'Json',
        'QueryParam',
        'Range',
        'Type',
      ],
      [tuskenId + '/array']: ['array', 'array2d', 'array3d'],
    },
    lines: [
      '// Primitive types',
      ...types.map(toExport),
      '',
      ...runtimeTypes.map(toExport),
      '\n// Array types',
      'export { array, array2d, array3d }',
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
