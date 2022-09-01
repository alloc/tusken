import { callProp } from '../utils/callProp'
import type { FunctionCall } from './function'
import { Query } from './query'
import { Check, CheckBuilder, CheckList } from './query/check'
import { Expression } from './query/expression'
import { WhereExpression } from './query/where'
import type { AliasMapping, ColumnRef, Selection } from './selection'
import {
  kColumnFrom,
  kColumnName,
  kFunctionArgs,
  kFunctionName,
  kSelectionArgs,
  kTableName,
} from './symbols'
import { TableRef, TableType } from './table'
import type { Token, TokenArray } from './token'
import { isColumnRef, isFunctionCall, isTableRef } from './type'

/**
 * Safely coerce a user-defined value to a SQL token.
 */
export function tokenize(val: any, ctx: Query.Context): Token | TokenArray {
  if (val == null || typeof val !== 'object') {
    return { literal: val }
  }
  if (Array.isArray(val)) {
    return tokenizeArray(val, ctx)
  }
  if (isFunctionCall(val)) {
    return tokenizeFunctionCall(val, ctx)
  }
  if (isColumnRef(val)) {
    return tokenizeColumnRef(val, ctx)
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

export function tokenizeColumns(
  selection: Selection<any, TableType>,
  ctx: Query.Context
): TokenArray {
  const args = selection[kSelectionArgs]
  if (Array.isArray(args)) {
    return args.map(arg => {
      if (isColumnRef(arg)) {
        return tokenizeColumnRef(arg, ctx)
      }
      return tokenizeAliasMapping(arg, ctx)
    })
  }
  return tokenizeAliasMapping(args, ctx)
}

export function tokenizeAliasMapping(
  mapping: AliasMapping,
  ctx: Query.Context
): TokenArray {
  const [alias, value] = Object.entries(mapping)[0]
  return [
    isFunctionCall(value)
      ? tokenizeFunctionCall(value, ctx)
      : tokenizeColumnRef(value, ctx),
    { id: alias },
  ]
}

export function tokenizeColumn(column: string, table: string | false): Token {
  return table ? { id: [table, column] } : { id: column }
}

export function tokenizeColumnRef(ref: ColumnRef, ctx: Query.Context): Token {
  return tokenizeColumn(
    ref[kColumnName],
    // Omit the table name if no joins exist.
    ctx.select?.joins !== undefined && ref[kColumnFrom][kTableName]
  )
}

export function tokenizeFunctionCall(
  call: FunctionCall,
  ctx: Query.Context
): Token {
  return {
    call: call[kFunctionName],
    args: call[kFunctionArgs].map(arg => tokenize(arg, ctx)),
  }
}

export function tokenizeCheck(check: Check, ctx: Query.Context) {
  const tokens: TokenArray = []
  const left = callProp(check.left)
  const right = callProp(check.right)

  // This allows for overriding of operator precedence.
  if (left instanceof CheckList) {
    tokens.push('(', left.tokenize(), ')')
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
  selections: (TableRef | Selection)[],
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

export function tokenizeWhere(where: WhereExpression, ctx: Query.Context) {
  return [
    'WHERE',
    isFunctionCall(where) ? tokenizeFunctionCall(where, ctx) : where.tokenize(),
  ]
}
