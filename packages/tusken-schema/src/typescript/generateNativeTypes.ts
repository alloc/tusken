import nativeTypeMap from './nativeTypeMap'

// TODO: include user-defined enum/composite types
export function generateNativeTypes() {
  const types: string[] = []
  for (let [nativeType, mappedType] of nativeTypeMap) {
    types.push(`type ${nativeType} = Type<"${nativeType}", ${mappedType}>`)
  }

  const arrayTypes = [
    'type array<Element extends Type> = Element extends Type<infer Native, infer T>' +
      '  ? Type<`${Native & string}[]`, T[]>' +
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
    pg_null: 'Type<"null", undefined>',
    pg_void: 'Type<"void", void>',
  }).map(
    ([name, union]) =>
      (name.startsWith('pg_')
        ? `type { ${name} as ${name.replace('pg_', '')} }\n`
        : '') + `type ${name} = ${union}`
  )

  return [
    'type elementof<T> = T extends array<infer E> ? E : anyelement',
    ...pseudoTypes,
    ...arrayTypes,
    ...types,
  ]
}
