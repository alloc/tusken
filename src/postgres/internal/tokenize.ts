import { callProp } from '../../utils/callProp'
import { isObject } from '../../utils/isObject'
import { toArray } from '../../utils/toArray'
import { Check } from '../check'
import type { Expression } from '../expression'
import { JoinProps } from '../props/join'
import { SetProps } from '../props/set'
import { Query } from '../query'
import type { SortExpression, SortSelection } from '../query/orderBy'
import {
  AliasMapping,
  RawColumnSelection,
  RawSelection,
  Selectable,
  Selection,
} from '../selection'
import {
  kColumnName,
  kExprProps,
  kExprTokens,
  kRuntimeType,
  kSelectionArgs,
  kTableCast,
  kTableName,
  kTypeTokenizer,
} from '../symbols'
import { toTableName } from '../table'
import type { TableCast } from '../tableCast'
import type { RuntimeType } from '../type'
import {
  isArrayExpression,
  isCheckBuilder,
  isColumnRef,
  isExpression,
  isExpressionRef,
  isSelection,
  isTableCast,
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
      return { number: value }
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
  if (value === null) {
    return 'NULL'
  }
  const tokens = type[kTypeTokenizer]?.(value)
  return tokens ?? tokenize(value, ctx)
}

export function tokenizeExpression(expr: Expression, ctx: Query.Context) {
  return isExpressionRef(expr)
    ? expr[kExprTokens](expr[kExprProps], ctx)
    : tokenizeTyped(expr, expr[kRuntimeType], ctx)
}

export function tokenizeSelectedColumns(
  selection: Selection,
  ctx: Query.Context
): Token | TokenArray {
  const selected = selection[kSelectionArgs]
  if (Array.isArray(selected)) {
    return {
      list: tokenizeColumnList(selected, ctx),
    }
  }
  return tokenizeSelectedColumn(selected, ctx)
}

function tokenizeSelectedColumn(
  column: RawColumnSelection,
  ctx: Query.Context
) {
  if (isExpression(column)) {
    return tokenizeExpression(column, ctx)
  }
  if (isTableCast<any>(column)) {
    return tokenizeTableCast(column, ctx)
  }
  return tokenizeAliasMapping(column, ctx)
}

function tokenizeColumnList(
  list: Extract<RawSelection, any[]>,
  ctx: Query.Context
): TokenArray {
  return list.map(arg => {
    if (typeof arg == 'string') {
      return { id: arg }
    }
    return tokenizeSelectedColumn(arg, ctx)
  })
}

export function tokenizeAliasMapping(
  mapping: AliasMapping,
  ctx: Query.Context
): Token {
  return {
    list: Object.entries(mapping).map(([alias, value]) => {
      return isTableCast<any>(value)
        ? tokenizeTableCast(value, ctx, alias)
        : [tokenizeExpression(value, ctx), ctx.inTuple ? '' : { id: alias }]
    }),
  }
}

export function tokenizeColumn(column: string, table?: string | false): Token {
  return table ? { id: [table, column] } : { id: column }
}

const negatedChecks: Record<string, string> = {
  '=': '!=',
  '>': '<=',
  '>=': '<',
  '<': '>=',
  '<=': '>',
  IS: 'IS NOT',
}

export function tokenizeCheck(
  { left, op, right, isNot }: Check,
  ctx: Query.Context
): TokenArray {
  let tokens: TokenArray = []

  left = callProp(left)
  right = callProp(right)

  if (left instanceof Check) {
    tokens.push(tokenizeCheck(left, ctx))
  } else {
    tokens.push(tokenize(left, ctx))
  }

  const type =
    op == 'IN'
      ? 'tuple'
      : op == 'BETWEEN'
      ? 'range'
      : op == 'AND' || op == 'OR'
      ? 'logical'
      : Array.isArray(right) || (isObject(right) && isArrayExpression(right))
      ? 'any'
      : ''

  const is = { [type]: true } as { [P in typeof type]?: true }

  if (!is.any) {
    if (right === null && op == '=') {
      op = 'IS'
    }
    if (isNot) {
      op = negatedChecks[op] || `NOT ${op}`
    }
  }
  tokens.push(op)

  if (is.any) {
    tokens.push({
      concat: [
        'ANY(',
        // An explicit cast is required if a placeholder is used,
        // so we have to serialize JS arrays as Postgres arrays manually.
        Array.isArray(right) ? { array: right } : tokenize(right, ctx),
        ')',
      ],
    })
    if (isNot) {
      tokens = ['NOT', '(', tokens, ')']
    }
  } else if (Array.isArray(right) && (is.range || is.tuple)) {
    if (is.range) {
      tokens.push(tokenize(right[0], ctx), 'AND', tokenize(right[1], ctx))
    } else {
      tokens.push({
        tuple: right.map(value => tokenize(value, ctx)),
      })
    }
  } else {
    tokens.push(tokenize(right, ctx))
  }

  return tokens
}

export function tokenizeLogicalAnd(
  list: readonly Expression[],
  ctx: Query.Context
): Token {
  return {
    join: list.map(expr => tokenizeExpression(expr, ctx)),
    with: ' AND ',
  }
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
          if (isTableCast<any>(selection)) {
            return tokenizeTableCast(selection, ctx)
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

/**
 * Note: This doesn't include the `GROUP BY` clause that's
 * required for a table cast to work in many cases.
 */
export function tokenizeTableCast(
  cast: TableCast<Selectable>,
  ctx: Query.Context,
  alias?: string | null
) {
  const { pk, from, selected } = cast[kTableCast]
  const tableName = toTableName(from)
  alias ??= isColumnRef(pk) ? pk[kColumnName] : null

  let args: TokenArray
  if (selected) {
    ctx.inTuple = true
    args = [{ tuple: tokenizeColumnList(selected, ctx) }]
    ctx.inTuple = false
  } else {
    args = [{ id: tableName }]
  }

  return [{ callee: 'array_agg', args }, { id: alias ?? tableName }]
}

export function tokenizeInnerJoin(join: JoinProps, ctx: Query.Context) {
  return [
    'INNER JOIN',
    { id: toTableName(join.from) },
    'ON',
    tokenizeExpression(join.where, ctx),
  ]
}

export function wrapInParens(token: Token) {
  return { concat: ['(', token, ')'] }
}
