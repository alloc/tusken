import endent from 'endent'
import nativeTypeMap from './nativeTypeMap'

// TODO: include user-defined enum/composite types
export function generateNativeTypes() {
  const types: string[] = []
  const exports: string[] = []

  for (let [nativeType, mappedType] of nativeTypeMap) {
    types.push(
      `type ${nativeType} = ${mappedType} | Value<Type<"${nativeType}", ${mappedType}>>`
    )
    exports.push(
      `const ${nativeType}: ${nativeType} = new Type("${nativeType}")`
    )
  }

  return {
    types: [
      endent`
        type array<Element extends Type> = Element extends Type<infer Native, infer T>
          ? Type<\`\${Native & string}[]\`, T[]>
          : never
      `,
      ...types,
    ],
    exports: [
      `const array = <Element extends Type>(element: Element) => new Type<any>(element.name + "[]") as array<Element>`,
      ...exports,
    ],
  }
}
