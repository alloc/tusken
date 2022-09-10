import { kTypeArrayId, kTypeName } from './symbols'
import { defineType, RuntimeType, Type } from './type'

const defineArrayType = ((type: RuntimeType) => {
  const id = type[kTypeArrayId]
  if (id !== undefined) {
    return defineType(id, type[kTypeName] + '[]', id)
  }
  throw Error('Cannot define array type for type without array ID')
}) as {
  <Element extends RuntimeType<T>, T extends Type>(type: Element): RuntimeType<
    array<T>
  >
}

export type array<Element extends Type> = Element extends Type<
  infer Native,
  infer T,
  infer ColumnT
>
  ? Type<`${Native}[]`, T[], ColumnT[]>
  : never

export type array2d<Element extends Type> = array<array<Element>>
export type array3d<Element extends Type> = array<array2d<Element>>

export { defineArrayType as array }

export const array2d = <Element extends RuntimeType<T>, T extends Type>(
  element: Element
): RuntimeType<array2d<T>> => defineArrayType(defineArrayType(element) as any)

export const array3d = <Element extends RuntimeType<T>, T extends Type>(
  element: Element
): RuntimeType<array3d<T>> => defineArrayType(array2d(element) as any)
