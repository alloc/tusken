import { Any } from '@alloc/types'
import { kExprProps, kExprTokens } from './symbols'
import type { TokenProducer } from './token'
import type {
  SetType,
  toDownCasts,
  toRuntimeType,
  toTypeName,
  Type,
} from './type'
import { t } from './type-builtin'

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
  protected [kExprTokens]: TokenProducer
  protected get props(): Props {
    return this[kExprProps]
  }
  constructor(
    props: [Props] extends [Any] ? Record<string, any> : Props,
    tokens: TokenProducer
  ) {
    this[kExprProps] = props as any
    this[kExprTokens] = tokens
  }
}

export interface Expression<T>
  extends Type<toTypeName<T>, toRuntimeType<T>, toDownCasts<T>> {}

export type BoolExpression = Expression<t.bool>
export type SetExpression<T extends object = any> = Expression<SetType<T>>

/** Extract `T` from `Expression<T>` */
export type ExpressionType<E extends Expression> = unknown &
  (E extends Expression<infer T> ? T : never)
