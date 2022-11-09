import { kTypeArrayId } from './symbols'
import { defineType, RuntimeType, Type } from './type'

export const array = ((type: RuntimeType) => {
  const id = type[kTypeArrayId]
  if (id !== undefined) {
    return defineType(id, type.name + '[]', id)
  }
  throw Error('no array type is defined')
}) as {
  <Element extends RuntimeType<T>, T extends Type>(type: Element): RuntimeType<
    array<T>
  >
}

export type array<Element extends Type> = Element extends Type<
  infer HostType,
  infer ClientType,
  infer ColumnInput
>
  ? Type<`${HostType}[]`, ClientType[], ColumnInput[]>
  : never

export type array2d<Element extends Type> = array<array<Element>>
export type array3d<Element extends Type> = array<array2d<Element>>

export const array2d = <Element extends RuntimeType<T>, T extends Type>(
  element: Element
): RuntimeType<array2d<T>> => array(array(element) as any)

export const array3d = <Element extends RuntimeType<T>, T extends Type>(
  element: Element
): RuntimeType<array3d<T>> => array(array2d(element) as any)
