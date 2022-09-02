import { callProp } from '../utils/callProp'
import { Query } from './query'
import { Check, CheckBuilder } from './query/check'
import { BoolExpression, Expression } from './query/expression'
import { Selectable } from './query/select'
import type { AliasMapping, Selection } from './selection'
import { kExprProps, kExprTokens, kSelectionArgs, kTableName } from './symbols'
import type { Token, TokenArray } from './token'
import {
  isBoolExpression,
  isColumnRef,
  isExpression,
  isSetExpression,
  isTableRef,
} from './type'

/**
 * Safely coerce a user-defined value to a SQL token.
 */
export function tokenize(val: any, ctx: Query.Context): Token | TokenArray {
  if (val == null || typeof val !== 'object') {
    if (typeof val == 'number') {
      return String(val)
    }
    return { literal: val }
  }
  if (Array.isArray(val)) {
    return tokenizeArray(val, ctx)
  }
  if (isExpression(val)) {
    return tokenizeExpression(val, ctx)
  }
  if (val instanceof Query) {
    // Expressions inherit a query context, but subqueries don't.
    const isExpr = val instanceof Expression
    const tokens = val.tokenize(isExpr ? ctx : undefined)
    return isExpr ? tokens : ['(', tokens, ')']
  }
  if (val instanceof CheckBuilder) {
    return tokenize(val['left'], ctx)
  }
  throw Error('Value could not be tokenized: ' + val)
}

export function tokenizeArray(val: any[], ctx: Query.Context) {
  const { inArray } = ctx
  ctx.inArray = true
  const tokens: TokenArray = [
    inArray ? '[' : 'ARRAY[',
    val.map(elem => tokenize(elem, ctx)),
    ']',
  ]
  ctx.inArray = inArray
  return tokens
}

export function tokenizeExpression(expr: Expression, ctx: Query.Context) {
  return expr[kExprTokens](expr[kExprProps], ctx)
}

export function tokenizeColumns(
  selection: Selection,
  ctx: Query.Context
): TokenArray {
  const args = selection[kSelectionArgs]
  if (Array.isArray(args)) {
    return args.map(arg => {
      if (typeof arg == 'string') {
        return { id: arg }
      }
      if (isColumnRef(arg)) {
        return tokenizeExpression(arg, ctx)
      }
      return tokenizeAliasMapping(arg, ctx)
    })
  }
  if (isSetExpression(args)) {
    return tokenizeExpression(args, ctx)
  }
  return tokenizeAliasMapping(args, ctx)
}

export function tokenizeAliasMapping(
  mapping: AliasMapping,
  ctx: Query.Context
): TokenArray {
  const [alias, value] = Object.entries(mapping)[0]
  return [tokenizeExpression(value, ctx), { id: alias }]
}

export function tokenizeColumn(column: string, table?: string | false): Token {
  return table ? { id: [table, column] } : { id: column }
}

export function tokenizeCheck(check: Check, ctx: Query.Context) {
  const tokens: TokenArray = []
  const left = callProp(check.left)
  const right = callProp(check.right)

  // This allows for overriding of operator precedence.
  if (isBoolExpression(left)) {
    tokens.push('(', tokenizeExpression(left, ctx), ')')
  }
  // Some checks have a check as their left side. (eg AND, OR)
  else if (left instanceof Check) {
    tokens.push(tokenizeCheck(left, ctx))
  }
  // Infer the type of any other values.
  else {
    tokens.push(tokenize(left, ctx))
  }

  tokens.push(check.op)

  if (check.isRange) {
    tokens.push(tokenize(right[0], ctx), 'AND', tokenize(right[1], ctx))
  } else {
    tokens.push(tokenize(right, ctx))
  }

  return tokens
}

export function tokenizeSelected(
  selections: Selectable[],
  ctx: Query.Context
): Token {
  return selections.length == 1
    ? isTableRef(selections[0])
      ? '*'
      : {
          join: tokenizeColumns(selections[0], ctx),
          with: ', ',
        }
    : {
        join: selections.map(selection => {
          if (isTableRef(selection)) {
            return selection[kTableName] + '.*'
          }
          return tokenizeColumns(selection, ctx)
        }),
        with: ', ',
      }
}

export function tokenizeWhere(where: BoolExpression, ctx: Query.Context) {
  return ['WHERE', tokenizeExpression(where, ctx)]
}
