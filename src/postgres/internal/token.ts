import { Exclusive } from '@alloc/types'
import { Query } from '../query'
import { kDatabaseReserved } from '../symbols'
import { renderQuery, toQueryInternal } from './query'

/** Coerce into a string, buffer, or null */
type Value = { value: any }

/** Format with `%I` like sprintf */
type Identifier = { id: any }

/** Format with `%L` like sprintf */
type Literal = { literal: any }

/** Coerce into a number, throw if `NaN` */
type Numeric = { number: any }

/** Join tokens with an empty string */
type Concat = { concat: TokenArray }

/** A comma-separated list */
type List = { list: TokenArray }

/** A comma-separated list with parentheses around it */
type Tuple = { tuple: TokenArray }

type Call = { callee: string; args?: TokenArray }

type SubQuery = { query: Query }

export type Token =
  | string
  | Exclusive<
      | Value
      | Identifier
      | Literal
      | Numeric
      | Concat
      | List
      | Tuple
      | Call
      | SubQuery
    >

export type TokenArray = (Token | TokenArray)[]
export type TokenProducer<Props extends object | null = any> = (
  props: Props,
  ctx: Query.Context
) => Token | TokenArray

export function renderTokens(
  tokens: TokenArray,
  ctx: Query.Context,
  sql: string[] = []
): string[] {
  for (const token of tokens) {
    if (Array.isArray(token)) {
      renderTokens(token, ctx, sql)
    } else {
      const rendered = renderToken(token, ctx)
      if (rendered) {
        sql.push(rendered)
      }
    }
  }
  return sql
}

function renderToken(token: Token, ctx: Query.Context): string {
  return typeof token == 'string'
    ? token
    : 'value' in token
    ? '$' + ctx.values.push(token.value)
    : 'id' in token
    ? Array.isArray(token.id)
      ? token.id.map(mapStringToIdentifier, ctx).join('.')
      : toIdentifier(token.id, ctx)
    : 'callee' in token
    ? toIdentifier(token.callee, ctx) +
      (token.args ? `(${renderTokens(token.args, ctx).join(', ')})` : ``)
    : 'literal' in token
    ? toLiteral(token.literal)
    : 'number' in token
    ? toNumber(token.number)
    : token.query
    ? `(${renderQuery(toQueryInternal(token.query).context)})`
    : renderList(token, ctx)
}

function renderList(
  token: Exclusive<List | Concat | Tuple>,
  ctx: Query.Context
): string {
  const tokens = (token.list || token.concat || token.tuple).map(
    mapTokensToSql,
    ctx
  )
  const sql = tokens.join(token.concat ? '' : ', ')
  return token.tuple ? `(${sql || 'NULL'})` : sql
}

function mapTokensToSql(this: Query.Context, arg: Token | TokenArray) {
  return Array.isArray(arg)
    ? renderTokens(arg, this).join(' ')
    : renderToken(arg, this)
}

function mapStringToIdentifier(this: Query.Context, arg: any) {
  return toIdentifier(arg, this)
}

// https://github.com/segmentio/pg-escape/blob/780350b461f4f2ab50ca8b5aafcbb57433835f6b/index.js
function toLiteral(val: any): string {
  if (val == null) {
    return 'NULL'
  }
  if (Array.isArray(val)) {
    const vals = val.map(toLiteral)
    return '(' + vals.join(', ') + ')'
  }
  val = String(val)
  return (
    (val.includes('\\') ? 'E' : '') +
    "'" +
    val.replace(/'/g, "''").replace(/\\/g, '\\\\') +
    "'"
  )
}

const capitalOrSpace = /[A-Z\s]/

function toIdentifier(val: any, { db }: Query.Context): string {
  val = String(val).replace(/"/g, '""')
  return capitalOrSpace.test(val) || db[kDatabaseReserved].includes(val)
    ? `"${val}"`
    : val
}

function toNumber(val: any) {
  const type = typeof val
  if (type !== 'number' || isNaN(val) || !isFinite(val)) {
    throw Error(
      `Expected a number, got ${
        type == 'number'
          ? val
          : type == 'object'
          ? Object.prototype.toString.call(val)
          : type
      }`
    )
  }
  return String(val)
}
