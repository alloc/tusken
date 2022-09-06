import { callProp } from '../utils/callProp'
import { Check, CheckBuilder } from './check'
import { BoolExpression, Expression } from './expression'
import { Query } from './query'
import { Selectable } from './query/select'
import type { AliasMapping, Selection } from './selection'
import { kExprProps, kExprTokens, kSelectionArgs, kTableName } from './symbols'
import type { Token, TokenArray } from './token'
import {
  isBoolExpression,
  isCallExpression,
  isColumnRef,
  isExpression,
  isSelection,
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

export function tokenizeSelectedColumns(
  selection: Selection,
  ctx: Query.Context
): Token | TokenArray {
  const args = selection[kSelectionArgs]
  if (Array.isArray(args)) {
    return {
      join: args.map(arg => {
        if (typeof arg == 'string') {
          return { id: arg }
        }
        if (isColumnRef(arg)) {
          return tokenizeExpression(arg, ctx)
        }
        return tokenizeAliasMapping(arg, ctx)
      }),
      with: ', ',
    }
  }
  if (isExpression(args)) {
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
    const expr = tokenizeExpression(left, ctx)
    tokens.push(
      isCallExpression(left)
        ? expr
        : {
            join: ['(', expr, ')'],
            with: '',
          }
    )
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

  // For range checks, the right side is an array.
  if (check.isRange) {
    tokens.push(tokenize(right[0], ctx), 'AND', tokenize(right[1], ctx))
  }
  // Some checks have a check as their right side. (eg AND, OR)
  else if (right instanceof Check) {
    tokens.push(tokenizeCheck(right, ctx))
  }
  // Infer the type of any other values.
  else {
    tokens.push(tokenize(right, ctx))
  }

  return tokens
}

export function tokenizeSelected(
  selections: Selectable[],
  ctx: Query.Context
): Token | TokenArray {
  return selections.every(isTableRef)
    ? '*'
    : {
        join: selections.map(selection => {
          if (isTableRef(selection)) {
            return {
              id: [selection[kTableName], '*'],
            }
          }
          if (isSelection(selection)) {
            return tokenizeSelectedColumns(selection, ctx)
          }
          return tokenizeExpression(selection, ctx)
        }),
        with: ', ',
      }
}

export function tokenizeWhere(where: BoolExpression, ctx: Query.Context) {
  return ['WHERE', tokenizeExpression(where, ctx)]
}
