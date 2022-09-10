import { Expression, ExpressionProps } from './expression'
import type { Query } from './query'
import { kExprProps } from './symbols'
import { TokenArray } from './token'
import { tokenize } from './tokenize'
import type { RuntimeType, Type } from './type'

export const defineFunction =
  (callee: string, returnType?: RuntimeType, omitArgs?: boolean): any =>
  (...args: any[]) =>
    new CallExpression(callee, omitArgs ? undefined : args, returnType)

interface Props<Callee extends string = any> extends ExpressionProps {
  alias?: string
  args?: any[]
  callee: Callee
}

export class CallExpression<
  T extends Type = any,
  Callee extends string = any
> extends Expression<T, Props<Callee>> {
  constructor(callee: Callee, args?: any[], type?: RuntimeType) {
    super({ callee, args, type }, tokenizeCallExpression)
  }
}

const tokenizeCallExpression = (
  props: Props,
  ctx: Query.Context
): TokenArray => [
  {
    callee: props.callee,
    args: props.args?.map(arg => tokenize(arg, ctx)),
  },
  props.alias ? ['AS', { id: props.alias }] : '',
]

export function getCallee(val: CallExpression): string
export function getCallee(val: any): string | undefined
export function getCallee(val: any) {
  return val instanceof CallExpression ? val[kExprProps].callee : undefined
}
