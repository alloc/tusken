import { callProp } from '../../utils/callProp'
import { toArray } from '../../utils/toArray'
import { Check } from '../check'
import type { Expression } from '../expression'
import { SetProps } from '../props/set'
import { Query } from '../query'
import type { SortExpression, SortSelection } from '../query/orderBy'
import type { AliasMapping, Selectable, Selection } from '../selection'
import {
  kExprProps,
  kExprTokens,
  kRuntimeType,
  kSelectionArgs,
  kTableName,
  kTypeTokenizer,
} from '../symbols'
import type { RuntimeType } from '../type'
import {
  isCheckBuilder,
  isExpression,
  isExpressionType,
  isSelection,
  isTableRef,
} from '../typeChecks'
import { t } from '../typesBuiltin'
import type { Token, TokenArray } from './token'

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
    if (isCheckBuilder(value)) {
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
  return isExpressionType(expr)
    ? expr[kExprTokens](expr[kExprProps], ctx)
    : tokenizeTyped(expr, expr[kRuntimeType], ctx)
}

export function tokenizeExpressionList(
  list: readonly Expression[],
  separator: Token,
  ctx: Query.Context
): Token {
  return {
    concat: [
      '(',
      {
        join: list.map(expr => tokenizeExpression(expr, ctx)),
        with: separator,
      },
      ')',
    ],
  }
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

export function tokenizeCheck(
  { left, op, right, isRange }: Check,
  ctx: Query.Context
): TokenArray {
  const tokens: TokenArray = []

  left = callProp(left)
  right = callProp(right)

  if (left instanceof Check) {
    tokens.push(tokenizeCheck(left, ctx))
  } else if (Array.isArray(left)) {
    tokens.push(tokenizeExpressionList(left, ' AND ', ctx))
  } else {
    tokens.push(tokenize(left, ctx))
  }

  tokens.push(
    right === null ? (op == '=' ? 'IS' : op == '!=' ? 'IS NOT' : op) : op
  )

  if (isRange) {
    tokens.push(tokenize(right[0], ctx), 'AND', tokenize(right[1], ctx))
  } else if (Array.isArray(right)) {
    tokens.push(
      op == 'AND' || op == 'OR'
        ? tokenizeExpressionList(right, ' AND ', ctx)
        : { tuple: right.map(value => tokenize(value, ctx)) }
    )
  } else {
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

export function tokenizeWhere(
  where: Expression<t.bool | t.null>,
  ctx: Query.Context
): TokenArray {
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

export function tokenizeSetProps(props: SetProps, ctx: Query.Context) {
  const tokens: TokenArray = []
  if (props.orderBy) {
    tokens.push(tokenizeOrderBy(props.orderBy, ctx))
  }
  if (props.limit) {
    tokens.push('LIMIT', { number: props.limit })
  }
  if (props.offset) {
    tokens.push('OFFSET', { number: props.offset })
  }
  return tokens
}
