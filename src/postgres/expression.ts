import { Any } from '@alloc/types'
import type { TokenProducer } from './internal/token'
import { kUnknownType } from './internal/type'
import { kExprProps, kExprTokens, kRuntimeType } from './symbols'
import { RuntimeType, SetType, Type } from './type'
import { t } from './type-builtin'

const emptyProps: any = Object.freeze({})

export class Expression<T extends Type = any, Props extends object = {}> {
  protected [kExprProps]: Props
  protected [kExprTokens]: TokenProducer
  protected get props(): Props {
    return this[kExprProps]
  }
  constructor(
    type: RuntimeType<T> | null,
    props: ([Props] extends [Any] ? Record<string, any> : Props) | null,
    tokens: TokenProducer
  ) {
    this[kExprProps] = props || emptyProps
    this[kExprTokens] = tokens
    this[kRuntimeType] = type || kUnknownType
  }
}

export interface Expression<T>
  extends Type<
    T extends Type<infer U> ? (string extends U ? any : U) : never,
    T extends Type<any, infer U> ? (unknown extends U ? any : U) : never,
    T extends Type<any, any, infer U> ? (unknown extends U ? any : U) : never
  > {}

export type BoolExpression = Expression<t.bool, any>
export type SetExpression<T extends object = any> = Expression<SetType<T>>
