import { Exclusive } from '@alloc/types'
import type { Database } from '../database'
import { isFunctionCall } from '../function'
import { isColumnRef } from '../selection'
import { kDatabaseReserved, kExpression } from '../symbols'
import { Expression, isExpression } from './expression'
import { Query } from './node'

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

export type Infer = { infer: any }

export type Token =
  | string
  | Expression
  | Exclusive<
      | Identifier
      | Literal
      | Stringify
      | StringJoin
      | Tuple
      | Call
      | SubQuery
      | Infer
    >

export type TokenArray = (Token | TokenArray)[]

export function inferToken(val: any, ctx: Query.Context): Token {
  if (isExpression(val)) {
    return val
  }
  if (isColumnRef(val)) {
    return toIdentifier(val, ctx.db)
  }
  if (isFunctionCall(val)) {
    // TODO
  }
  return { literal: val }
}

export function renderToken(this: Query.Context, token: Token): string {
  return typeof token == 'string'
    ? token
    : isExpression(token)
    ? renderTokens(token[kExpression], this).join(' ')
    : 'id' in token
    ? Array.isArray(token.id)
      ? token.id.map(mapToIdent, this.db).join('.')
      : toIdentifier(token.id, this.db)
    : 'literal' in token
    ? toLiteral(token.literal)
    : 'string' in token
    ? toString(token.string)
    : 'infer' in token
    ? renderToken.call(this, inferToken(token.infer, this))
    : token.join
    ? renderTokens(token.join, this).join(token.with)
    : token.args
    ? `${token.call}(${renderTokens(token.args, this).join(', ')})`
    : `(${
        token.query
          ? token.query.toSql()
          : renderTokens(token.tuple, this).join(', ')
      })`
}

export function renderTokens(tokens: TokenArray, ctx: Query.Context) {
  return (tokens as Token[]).flat(Infinity).map(renderToken, ctx)
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
