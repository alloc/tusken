import { Expression, ExpressionProps, ExpressionTypeName } from './expression'
import type { Query } from './query'
import { kExprProps } from './symbols'
import { TokenArray } from './token'
import { tokenize } from './tokenize'
import type { Type } from './type'

interface FunctionConfig {
  type?: ExpressionTypeName
  args?: (args: any[]) => any[]
}

export const defineFunction =
  (callee: string, config?: FunctionConfig): any =>
  (...args: any[]) =>
    new CallExpression(callee, args, config)

interface Props<Callee extends string = any> extends ExpressionProps {
  alias?: string
  args: any[]
  callee: Callee
}

export class CallExpression<
  T extends Type = any,
  Callee extends string = any
> extends Expression<T, Props<Callee>> {
  constructor(callee: Callee, args: any[], config: FunctionConfig = {}) {
    if (config.args) {
      args = config.args(args)
    }
    super({ callee, args, type: config.type }, tokenizeCallExpression)
  }
}

function tokenizeCallExpression(props: Props, ctx: Query.Context) {
  const tokens: TokenArray = [
    {
      callee: props.callee,
      args:
        props.type !== 'var'
          ? props.args.map(arg => tokenize(arg, ctx))
          : undefined,
    },
  ]
  if (props.alias) {
    tokens.push('AS', { id: props.alias })
  }
  return tokens
}

export function getCallee(val: CallExpression): string
export function getCallee(val: any): string | undefined
export function getCallee(val: any) {
  return val instanceof CallExpression ? val[kExprProps].callee : undefined
}
