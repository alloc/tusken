import { FunctionFlags as f } from '../constants'
import { isObject } from '../utils/isObject'
import { Expression, ExpressionProps } from './expression'
import { kUnknownType } from './internal/type'
import type { Query } from './query'
import { kExprProps } from './symbols'
import { TokenArray } from './token'
import { tokenize } from './tokenize'
import type { Type } from './type'
import { isCallExpression } from './type'

export const defineFunction =
  (callee: string, flags = 0, returnType = kUnknownType): any =>
  (...args: any[]) =>
    new CallExpression({
      callee,
      args: flags & f.omitArgs ? undefined : args,
      type: returnType,
      isAggregate: (flags & f.isAggregate) !== 0,
    })

interface Props<Callee extends string = any> extends ExpressionProps {
  alias?: string
  args?: any[]
  callee: Callee
  isAggregate?: boolean
}

export class CallExpression<
  T extends Type = any,
  Callee extends string = any
> extends Expression<T, Props<Callee>> {
  constructor(props: Props<Callee>) {
    super(props, tokenizeCallExpression)

    props.isAggregate ||= props.args?.some(
      arg => isObject(arg) && isCallExpression(arg) && arg.props.isAggregate
    )
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
