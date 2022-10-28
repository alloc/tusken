import { FunctionFlags as f } from '../constants'
import { isObject } from '../utils/isObject'
import { ExpressionRef } from './expression'
import { Token, TokenArray } from './internal/token'
import { tokenize } from './internal/tokenize'
import { kUnknownType } from './internal/type'
import type { Query } from './query'
import { kExprProps } from './symbols'
import type { RuntimeType, Type } from './type'
import { isCallExpression } from './typeChecks'

export const defineFunction =
  (callee: string, flags = 0, returnType = kUnknownType): any =>
  (...args: any[]) =>
    new CallExpression(returnType, {
      callee,
      args: flags & f.omitArgs ? undefined : args,
      isAggregate: (flags & f.isAggregate) !== 0,
    })

/**
 * Functions with unique syntax requirements can use this.
 */
export const defineTemplate = (
  callee: string,
  template: string,
  returnType = kUnknownType
): any => {
  const tokenize = parseTemplate(template, callee)
  return (...args: any[]) =>
    new CallExpression(returnType, {
      callee,
      args,
      tokenize,
    })
}

function parseTemplate(template: string, callee: string) {
  return (args: Token[], ctx: Query.Context) => {
    const tokens: TokenArray = [callee]
    const lexer = /(\$\d+)(?:\/([^/]+)\/)?/gi
    let match: RegExpExecArray | null
    let lastIndex = 0
    while ((match = lexer.exec(template))) {
      if (match.index > lastIndex) {
        tokens.push(template.slice(lastIndex, match.index))
      }
      lastIndex = match.index + match[0].length
      if (match[1]) {
        // The number after the $ is the 1-based argument index.
        const argIndex = Number(match[1].slice(1)) - 1
        if (args[argIndex]) {
          const arg = args[argIndex]
          // The 2nd capture group is a regular expression.
          if (match[2]) {
            const literal: unknown = Array.isArray(arg)
              ? undefined
              : typeof arg == 'string'
              ? arg
              : arg.literal ?? arg.number ?? arg.value

            if (literal === undefined || typeof literal == 'object') {
              throw Error(
                `Argument ${argIndex} for function "${callee}" could not be validated. Try using a literal value.`
              )
            }

            const validator = new RegExp('^(' + match[2] + ')$', 'i')
            if (!validator.test(String(literal))) {
              throw new Error(
                `Argument ${argIndex} for function "${callee}" must match ${validator}`
              )
            }
            tokens.push(
              typeof literal == 'number'
                ? { number: literal }
                : typeof literal == 'string'
                ? literal
                : { value: literal }
            )
          } else {
            tokens.push(arg)
          }
        }
      }
    }
    if (lastIndex < template.length) {
      tokens.push(template.slice(lastIndex))
    }
    return { concat: tokens }
  }
}

interface Props<Callee extends string = any> {
  alias?: string
  args?: any[]
  callee: Callee
  tokenize?: (args: any[], ctx: Query.Context) => Token
  isAggregate?: boolean
}

export class CallExpression<
  T extends Type = any,
  Callee extends string = any
> extends ExpressionRef<T, Props<Callee>> {
  constructor(returnType: RuntimeType<T>, props: Props<Callee>) {
    super(returnType, props, tokenizeCallExpression)

    props.isAggregate ||= props.args?.some(
      arg => isObject(arg) && isCallExpression(arg) && arg.props.isAggregate
    )
  }
}

function tokenizeCallExpression(props: Props, ctx: Query.Context): TokenArray {
  const args = props.args?.map(arg => tokenize(arg, ctx))
  return [
    props.tokenize
      ? props.tokenize(args!, ctx)
      : {
          callee: props.callee,
          args,
        },
    props.alias ? ['AS', { id: props.alias }] : '',
  ]
}

export function getCallee(val: CallExpression): string
export function getCallee(val: any): string | undefined
export function getCallee(val: any) {
  return val instanceof CallExpression ? val[kExprProps].callee : undefined
}
