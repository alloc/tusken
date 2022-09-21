import { Any } from '@alloc/types'
import type { CheckBuilder } from './check'
import type { TokenProducer } from './internal/token'
import { kExprProps, kExprTokens, kRuntimeType } from './symbols'
import type { RuntimeType, Type } from './type'

const emptyProps: any = Object.freeze({})

/**
 * An expression is used to represent a value in a query.
 *
 * This type is recommended for use in function signatures (rather than
 * the `ExpressionType` class), since it allows for `T` to be a union
 * without breaking assignability.
 */
export declare abstract class Expression<T extends Type = any> {
  protected [kRuntimeType]: RuntimeType<T>
}

/**
 * An expression type contains runtime type information and it can
 * even tokenize itself.
 */
export class ExpressionType<T extends Type = any, Props extends object = {}> {
  protected [kExprProps]: Props
  protected [kExprTokens]: TokenProducer
  protected get props(): Props {
    return this[kExprProps]
  }
  constructor(
    type: RuntimeType<T>,
    props: ([Props] extends [Any] ? Record<string, any> : Props) | null,
    tokens: TokenProducer
  ) {
    this[kExprProps] = props || emptyProps
    this[kExprTokens] = tokens
    this[kRuntimeType] = type
  }
}

export interface ExpressionType<T extends Type> extends Expression<T> {
  is: CheckBuilder<T>
}
