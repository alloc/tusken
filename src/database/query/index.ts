import { Exclusive } from '@alloc/types'
import { isAlias } from '../alias'
import type { Database } from '../database'
import {
  kAliasName,
  kColumnName,
  kDatabaseReserved,
  kFunctionArgs,
  kFunctionName,
  kTableName,
} from '../symbols'
import { ColumnRef, isColumnRef, isTableRef, TableRef } from '../table'
import { FunctionCall, isFunctionCall } from './function'

/** Format like %I */
export type Identifier = { id: any }

/** Format like %L */
export type Literal = { literal: any }

/** Format like %s */
export type Stringify = { string: any }

/** Join token list with commas */
export type StringJoin = { join: any[]; with: string }

export type StringDescription = Exclusive<
  Identifier | Literal | Stringify | StringJoin
>

export type Token =
  | string
  | FunctionCall
  | ColumnRef
  | TableRef
  | Query
  | QueryDescription
  | StringDescription

export type TokenArray = (Token | TokenArray)[]

/** Metadata set by various query types. */
export interface QueryMetadata {
  /** The columns to select. */
  columns: string[]
}

export type BeforeTokensHook = (
  chain: QueryDescription[],
  meta: QueryMetadata
) => void
export type TokensHook = (
  props: Record<string, any> | null,
  meta: QueryMetadata
) => TokenArray
export type BeforeRenderHook = (tokens: TokenArray, meta: QueryMetadata) => void
export type BeforeResolvedHook = (result: any) => any

/** The result of a `query.clone` call */
export type QueryDescription = {
  db: Database
  depth: number
  parent: QueryDescription | undefined
  props: Record<string, any> | null
  tokens: TokensHook
  beforeTokens?: BeforeTokensHook
  beforeRender?: BeforeRenderHook
  beforeResolve?: BeforeResolvedHook
  toSql: () => string
}

export class Query<T = any, Props extends object | null = any>
  implements PromiseLike<T>
{
  protected db: Database
  protected depth: number
  protected parent?: QueryDescription

  /** Transform the query chain. */
  protected beforeTokens?: BeforeTokensHook
  /** Transform the query tokens. */
  protected beforeRender?: BeforeRenderHook
  /** Transform the query result. */
  protected beforeResolve?: BeforeResolvedHook

  constructor(
    parent: Database | Query | QueryDescription,
    protected props: Props,
    protected tokens: (props: Props, meta: QueryMetadata) => TokenArray
  ) {
    if (isQuery(parent)) {
      parent = unprotectQuery(parent)
      this.db = parent.db
      this.depth = parent.depth + 1
      this.parent = parent
    } else {
      this.db = parent
      this.depth = 1
    }
  }

  /**
   * Pass this query object as a function's first argument.
   *
   * Useful for turning ugly `call(chains(like(this)))` expressions
   * into `this.pipe(like).pipe(chains).pipe(call)` expressions.
   */
  pipe<In extends any[], Out>(
    transform: (value: Query<T>, ...args: In) => Query<Out>,
    ...args: In
  ): Query<Out> {
    return transform(this, ...args)
  }

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2> {
    const promise: Promise<T> = this.db.client.query(this.toSql()) as any
    return promise.then(onfulfilled, onrejected)
  }

  /**
   * Get a PostgreSQL string from a `Query` object.
   */
  toSql(): string {
    const chain: QueryDescription[] = []
    const chainHooks: BeforeTokensHook[] = []
    const renderHooks: BeforeRenderHook[] = []

    let parent: QueryDescription | undefined = this as any
    for (; parent; parent = parent.parent) {
      chain[parent.depth - 1] = parent
      if (parent.beforeTokens) {
        chainHooks.push(parent.beforeTokens)
      }
      if (parent.beforeRender) {
        renderHooks[parent.depth - 1] = parent.beforeRender
      }
    }

    const meta: QueryMetadata = {
      columns: [],
    }

    chainHooks.forEach(hook => hook(chain, meta))
    const tokens: Token[] = (
      chain.map(query => {
        return query.tokens(query.props, meta)
      }) as any[]
    ).flat(Infinity)
    renderHooks.forEach(hook => hook(tokens, meta))

    const { db } = this
    const renderToken = (token: Token): string => {
      return typeof token == 'string'
        ? token
        : isColumnRef(token)
        ? toIdentifier(token[kColumnName], db)
        : isTableRef(token)
        ? toIdentifier(token[kTableName], db)
        : isAlias(token)
        ? toIdentifier(token[kAliasName], db)
        : isFunctionCall(token)
        ? `${token[kFunctionName]}(${token[kFunctionArgs]
            .map(renderToken)
            .join(', ')})`
        : isQuery(token)
        ? `(${token.toSql()})`
        : token.id
        ? toIdentifier(token.id, db)
        : token.literal
        ? toLiteral(token.literal)
        : token.string
        ? toString(token.string)
        : token.join
        ? token.join.map(renderToken).join(token.with)
        : ''
    }

    const sql: string[] = []
    tokens.forEach(token => {
      const rendered = renderToken(token)
      if (rendered) {
        sql.push(rendered)
      }
    })
    return sql.join(' ')
  }
}

const isQuery = (val: any): val is Query | QueryDescription =>
  val instanceof Query

const unprotectQuery = <T>(q: T): Exclude<T, Query> => q as any

// https://github.com/segmentio/pg-escape/blob/780350b461f4f2ab50ca8b5aafcbb57433835f6b/index.js
const toLiteral = (val: any): string => {
  if (val == null) {
    return 'NULL'
  }
  if (Array.isArray(val)) {
    const vals = val.map(toLiteral)
    return '(' + vals.join(', ') + ')'
  }
  val = String(val)
  const backslash = ~val.indexOf('\\')
  const prefix = backslash ? 'E' : ''
  return prefix + "'" + val.replace(/'/g, "''").replace(/\\/g, '\\\\') + "'"
}

const toIdentifier = (val: any, db: Database): string => {
  val = String(val).replace(/"/g, '""')
  return db[kDatabaseReserved].includes(val) ? '"' + val + '"' : val
}

const toString = (val: any) => {
  return val == null ? '' : String(val)
}
