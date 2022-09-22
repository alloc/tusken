import { Exclusive } from '@alloc/types'
import type { Query } from '../query'
import { kDatabaseReserved } from '../symbols'
import { renderQuery } from './query'
import { tokenize } from './tokenize'

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

/** Postgres array literal */
type ArrayLiteral = { array: any[] }

/** A comma-separated list */
type List = { list: TokenArray }

/** Join tokens with another token */
type Join = { join: TokenArray; with: Token }

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
      | ArrayLiteral
      | Concat
      | List
      | Join
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
    ? `(${renderQuery({
        query: token.query as any,
        values: ctx.values,
        resolvers: [],
        mutators: [],
      })})`
    : token.array
    ? `'${renderArrayLiteral(token.array, ctx)}'`
    : renderList(token, ctx)
}

function renderArrayLiteral(values: any[], ctx: Query.Context): string {
  const sql = values.map(value =>
    Array.isArray(value)
      ? renderArrayLiteral(value, ctx)
      : mapTokensToSql.call(ctx, tokenize(value, ctx))
  )
  return `{${sql.join(', ')}}`
}

function renderList(
  token: Exclusive<List | Concat | Tuple | Join>,
  ctx: Query.Context
): string {
  const list = token.list || token.concat || token.tuple || token.join
  const sql = list.length
    ? list
        .map(mapTokensToSql, ctx)
        .join(
          token.concat ? '' : token.join ? renderToken(token.with, ctx) : ', '
        )
    : 'NULL'

  return token.tuple ? `(${sql})` : sql
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

function toIdentifier(val: any, { query: { db } }: Query.Context): string {
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
