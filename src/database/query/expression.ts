import type { Database } from '../database'
import { kExpression } from '../symbols'
import { NativeType, Type, UnwrapType } from '../type'
import { Query } from './node'
import type { TokenArray } from './token'

export class Expression<
  T extends Type = any,
  Props extends object | null = any
> extends Query<Props> {
  constructor(
    parent: Query | Database | null,
    protected tokens: (props: Props, ctx: Query.Context) => TokenArray
  ) {
    super(parent)
  }
}

export interface Expression<T extends Type = any>
  extends Type<NativeType<T>, UnwrapType<T>> {}

export function isExpression(val: any): val is Expression {
  return kExpression in val
}

export function renderExpression<Props extends object | null>(
  expr: Expression<any, Props>,
  ctx: Query.Context
): TokenArray {
  return expr['tokens'](expr['props'], ctx)
}
