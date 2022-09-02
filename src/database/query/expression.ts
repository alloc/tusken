import { Any } from '@alloc/types'
import { kExprProps, kExprTokens } from '../symbols'
import type { TokenFunction } from '../token'
import type { BoolType, NativeType, SetType, Type, UnwrapType } from '../type'

/**
 * This list is non-exhaustive. \
 * Only types needed at runtime are listed.
 */
export type ExpressionTypeName = 'bool' | 'setof' | 'var'

export type ExpressionProps = {
  type?: ExpressionTypeName
}

export class Expression<
  T extends Type = any,
  Props extends ExpressionProps = any
> {
  protected [kExprProps]: Props
  protected [kExprTokens]: TokenFunction
  protected get props(): Props {
    return this[kExprProps]
  }
  constructor(
    props: [Props] extends [Any] ? Record<string, any> : Props,
    tokens: TokenFunction
  ) {
    this[kExprProps] = props as any
    this[kExprTokens] = tokens
  }
}

export interface Expression<T extends Type = any>
  extends Type<NativeType<T>, UnwrapType<T>> {}

export type BoolExpression = Expression<BoolType>
export type SetExpression<T = any> = Expression<SetType<T>>

/** Extract `T` from `Expression<T>` */
export type ExpressionType<E extends Expression> = unknown &
  (E extends Expression<infer T> ? T : never)
