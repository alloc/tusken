import { Exclusive } from '@alloc/types'
import type { Database } from './database'
import { Query } from './query'
import { kDatabaseReserved } from './symbols'

/** Format like %I */
export type Identifier = { id: any }

/** Format like %L */
export type Literal = { literal: any }

/** Format like %s */
export type Stringify = { string: any }

/** Join token list with a character */
export type StringJoin = { join: TokenArray; with: string }

/** Join token list with commas and wrap with parentheses */
export type Tuple = { tuple: TokenArray }

export type Call = { call: string; args: TokenArray }

export type SubQuery = { query: Query }

export type Token =
  | string
  | Exclusive<
      Identifier | Literal | Stringify | StringJoin | Tuple | Call | SubQuery
    >

export type TokenArray = (Token | TokenArray)[]

export function renderToken(token: Token, ctx: Query.Context): string {
  return typeof token == 'string'
    ? token
    : 'id' in token
    ? Array.isArray(token.id)
      ? token.id.map(mapToIdent, ctx.db).join('.')
      : toIdentifier(token.id, ctx.db!)
    : 'literal' in token
    ? toLiteral(token.literal)
    : 'string' in token
    ? toString(token.string)
    : token.join
    ? renderTokens(token.join, ctx).join(token.with)
    : token.args
    ? `${token.call}(${renderTokens(token.args, ctx).join(', ')})`
    : `(${
        token.query
          ? token.query.render()
          : renderTokens(token.tuple, ctx).join(', ')
      })`
}

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

function mapToIdent(this: Database, val: any) {
  return toIdentifier(val, this)
}

// https://github.com/segmentio/pg-escape/blob/780350b461f4f2ab50ca8b5aafcbb57433835f6b/index.js
export function toLiteral(val: any): string {
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

export function toIdentifier(val: any, db: Database): string {
  val = String(val).replace(/"/g, '""')
  return /[A-Z\s]/.test(val) || db[kDatabaseReserved].includes(val)
    ? '"' + val + '"'
    : val
}

export function toString(val: any) {
  return val == null ? '' : String(val)
}
