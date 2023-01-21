import type { Query } from '../query'
import { renderTokens, TokenArray } from './token'

/** @ts-ignore */
export type QueryInternal = Pick<
  Query,
  // @ts-expect-error
  'db' | 'position' | 'nodes' | 'tokenize' | 'trace'
>

export type Node<T extends Query = any, Type extends string = any> = {
  readonly type: Type
  readonly query: T
  readonly props: T extends Query<infer Props> ? Props : never
}

export const createQueryContext = (
  query: Query | QueryInternal,
  init?: Omit<Partial<Query.Context>, 'query'>
): Query.Context => ({
  query: query as any,
  values: init?.values || [],
  resolvers: init?.resolvers || [],
  mutators: init?.mutators || [],
  idents: init?.idents || new Set(),
})

/** Render a SQL string. */
export function renderQuery(ctx: Query.Context): string {
  const tokens = tokenizeQuery(ctx)
  const rendered = renderTokens(tokens, ctx)
  return rendered.join(' ')
}

/** Convert the tree of query nodes into SQL tokens. */
export function tokenizeQuery(ctx: Query.Context): TokenArray {
  const { query } = ctx
  const nodes =
    query.position < query.nodes.length - 1
      ? query.nodes.slice(0, query.position + 1)
      : query.nodes

  return nodes.map(node => {
    return toQueryInternal(node.query).tokenize(node.props, ctx)
  })
}

/** TypeScript helper for accessing private members */
export function toQueryInternal(query: Query): QueryInternal {
  return query as any
}
