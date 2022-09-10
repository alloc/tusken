import { RuntimeType } from 'tusken'
import { callProp } from '../utils/callProp'
import { toArray } from '../utils/toArray'
import { Check, CheckBuilder } from './check'
import { BoolExpression, Expression } from './expression'
import { Query } from './query'
import { SortExpression, SortSelection } from './query/orderBy'
import { Selectable } from './query/select'
import type { AliasMapping, Selection } from './selection'
import {
  kExprProps,
  kExprTokens,
  kSelectionArgs,
  kTableName,
  kTypeTokenizer,
} from './symbols'
import type { Token, TokenArray } from './token'
import {
  isBoolExpression,
  isCallExpression,
  isExpression,
  isSelection,
  isTableRef,
} from './type'

/**
 * Safely coerce a user-defined value to a SQL token.
 */
export function tokenize(value: any, ctx: Query.Context): Token | TokenArray {
  if (value == null || typeof value !== 'object') {
    if (typeof value == 'number') {
      return String(value)
    }
    return { literal: value }
  }
  if (!Array.isArray(value) && !Buffer.isBuffer(value)) {
    if (isExpression(value)) {
      return tokenizeExpression(value, ctx)
    }
    if (value instanceof Query) {
      return { query: value }
    }
    if (value instanceof CheckBuilder) {
      return tokenize(value['left'], ctx)
    }
  }
  // Let node-postgres handle the serialization.
  return { value }
}

export function tokenizeTyped(
  value: any,
  type: RuntimeType,
  ctx: Query.Context
): Token | TokenArray {
  const tokens = type[kTypeTokenizer]?.(value)
  return tokens ?? tokenize(value, ctx)
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
      list: args.map(arg => {
        if (typeof arg == 'string') {
          return { id: arg }
        }
        if (isExpression(arg)) {
          return tokenizeExpression(arg, ctx)
        }
        return tokenizeAliasMapping(arg, ctx)
      }),
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
    tokens.push(isCallExpression(left) ? expr : { concat: ['(', expr, ')'] })
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
        list: selections.map(selection => {
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
      }
}

export function tokenizeWhere(where: BoolExpression, ctx: Query.Context) {
  return ['WHERE', tokenizeExpression(where, ctx)]
}

export function tokenizeOrderBy(orderBy: SortSelection, ctx: Query.Context) {
  const tokens: TokenArray = []
  const tokenizeColumn = (selected: SortExpression) =>
    typeof selected == 'string'
      ? { id: selected }
      : tokenizeExpression(selected, ctx)

  for (const selected of toArray(orderBy)) {
    if (typeof selected == 'string' || isExpression(selected)) {
      tokens.push(tokenizeColumn(selected))
    } else {
      const { asc, desc, nulls } = selected
      tokens.push([
        tokenizeColumn(asc || desc!),
        desc ? 'DESC' : '',
        nulls == (asc ? 'first' : 'last') ? 'NULLS ' + nulls.toUpperCase() : '',
      ])
    }
  }
  return ['ORDER BY', { list: tokens }]
}
