import { Any } from '@alloc/types'
import { kExprProps, kExprTokens } from './symbols'
import type { TokenProducer } from './token'
import type { RuntimeType, SetType, Type } from './type'
import { t } from './type-builtin'

const emptyProps: any = Object.freeze({})

export type ExpressionProps = {
  type?: RuntimeType
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
    props: ([Props] extends [Any] ? Record<string, any> : Props) | null,
    tokens: TokenProducer
  ) {
    this[kExprProps] = props || emptyProps
    this[kExprTokens] = tokens
  }
}

export interface Expression<T>
  extends Type<
    T extends Type<infer U> ? (string extends U ? any : U) : never,
    T extends Type<any, infer U> ? (unknown extends U ? any : U) : never,
    T extends Type<any, any, infer U> ? (unknown extends U ? any : U) : never
  > {}

export type BoolExpression = Expression<t.bool>
export type SetExpression<T extends object = any> = Expression<SetType<T>>

/** Extract `T` from `Expression<T>` */
export type ExpressionType<E extends Expression> = unknown &
  (E extends Expression<infer T> ? T : never)
