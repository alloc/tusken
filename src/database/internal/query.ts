import { Query } from '../query'
import { renderTokens, TokenArray } from './token'

// @ts-ignore
type QueryInternal = Pick<Query, 'context' | 'inject' | 'tokens'>

/** Render a SQL string. */
export function renderQuery(ctx: Query.Context): string {
  const tokens = tokenizeQuery(ctx)
  const rendered = renderTokens(tokens, ctx)
  return rendered.join(' ')
}

/** Convert the tree of query nodes into SQL tokens. */
export function tokenizeQuery(ctx: Query.Context): TokenArray {
  ctx.nodes.forEach(({ query, props }) => {
    toQueryInternal(query).inject?.(props, ctx)
  })
  return ctx.nodes.map(({ query, props }) => {
    return toQueryInternal(query).tokens(props, ctx)
  })
}

/** TypeScript helper for accessing private members */
export function toQueryInternal(query: Query): QueryInternal {
  return query as any
}
