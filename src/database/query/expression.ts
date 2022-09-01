import type { Database } from '../database'
import { Query } from '../query'
import type { TokenArray } from '../token'
import { NativeType, Type, UnwrapType } from '../type'

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

export function renderExpression<Props extends object | null>(
  expr: Expression<any, Props>,
  ctx: Query.Context
): TokenArray {
  return expr['tokens'](expr['props'], ctx)
}
