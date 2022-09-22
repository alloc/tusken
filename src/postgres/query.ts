import type { Database } from './database'
import {
  Node,
  QueryInternal,
  renderQuery,
  tokenizeQuery,
} from './internal/query'
import { renderTokens, Token, TokenArray } from './internal/token'
import { JoinProps } from './props/join'

export type QueryPromise<T = any> = Query & PromiseLike<T>

const kQueryCommand = Symbol()

export type QueryResponse = { rows: Record<string, any>[]; rowCount?: number }

export abstract class Query<Props extends object | null = any> {
  protected db: Database
  protected nodes: Node<Query>[]
  protected position: number
  protected trace = Error().stack!.slice(6)

  constructor(parent: Query | Database) {
    if (parent instanceof Query) {
      this.db = parent.db

      // Reuse the node list if our parent is the last node.
      let { nodes } = parent
      if (parent.position < nodes.length - 1) {
        // Otherwise, convert the parent into a reusable node with a frozen
        // node list, so it won't hold onto disposable queries that use it.
        nodes = parent.nodes = Object.freeze(
          nodes.slice(0, parent.position + 1)
        ) as any
      }
      this.nodes = Object.isFrozen(nodes) ? [...nodes] : nodes
    } else {
      this.db = parent
      this.nodes = []
    }
    // Assume this query's node will be added next.
    this.position = this.nodes.length
  }

  /**
   * Acquire a variable within the given `wrapper` that points
   * to this query, allowing easy duplication.
   *
   * One use case is creating a union of two `select` queries
   * without repeating the selection manually.
   */
  wrap<Result extends Query>(wrapper: (query: this) => Result) {
    return wrapper(this)
  }

  protected get props(): Props {
    return this.nodes[this.position].props
  }

  /**
   * Generate tokens for this node. The `tokenize` phase runs any hooks
   * in order, so later nodes will see context changes from earlier nodes.
   */
  protected abstract tokenize(
    props: Props,
    ctx: Query.Context
  ): Token | TokenArray

  protected query<T extends Query>(node: {
    type: string
    query: T
    props: T extends Query<infer Props> ? Props : never
  }): T

  protected query(node: any) {
    node.query.nodes.push(node)
    return node.query
  }
}

// Using defineProperty for Query#then lets subclasses easily
// define their promise type without any TypeScript gymnastics.
// And of course, they still inherit this default implementation.
// As a bonus, any Query subclass that doesn't extend the PromiseLike
// interface will not be awaitable, thus avoiding incomplete queries.
Object.defineProperty(Query.prototype, 'then', {
  value: function then(this: Query, onfulfilled?: any, onrejected?: any) {
    const { db, trace } = this
    const ctx: Query.Context = {
      query: this as any,
      values: [],
      resolvers: [],
      mutators: [],
    }

    const onError = (error: any) => {
      throw Object.assign(error, {
        context: ctx,
        stack: error.stack + '\n' + trace,
      })
    }

    try {
      var query = renderQuery(ctx)
      return db.client
        .query(query, ctx.values)
        .then(async (response: QueryResponse) => {
          let result = response.rows
          if (ctx.mutators.length) {
            for (const row of response.rows) {
              for (const mutateRow of ctx.mutators) {
                mutateRow(row)
              }
            }
          }
          for (let i = 1; i <= ctx.resolvers.length; i++) {
            const resolver = ctx.resolvers.at(-i)!
            const replacement = await resolver(response)
            if (replacement !== undefined) {
              result = replacement
              break
            }
          }
          if (ctx.single && Array.isArray(result)) {
            return result[0] || null
          }
          return result
        }, onError)
        .then(onfulfilled, onrejected)
    } catch (e: any) {
      onError(e)
    }
  },
})

export namespace Query {
  export interface Context {
    query: QueryInternal
    /**
     * Any values that cannot be stringified without the
     * help of node-postgres (aka `pg`).
     */
    values: any[]
    /**
     * Functions called with the query result. Each resolver
     * may affect the query result, so they're called in order.
     */
    resolvers: ((response: QueryResponse) => any)[]
    mutators: ((row: Record<string, any>) => void)[]
    /**
     * Exists when there are joins.
     */
    joins?: JoinProps[]
    /**
     * Equals true when the query promise should resolve
     * with a single result, even if multiple rows are returned
     * from the query.
     */
    single?: boolean
    /**
     * Equals true when tokenizing a row tuple.
     *
     * If tokenizing a selection, aliases will be omitted
     * when this property is true.
     */
    inTuple?: boolean
  }
}

/** Inspect the context, tokens, and SQL of a query */
export function inspectQuery(query: any) {
  const ctx: Query.Context = { query, values: [], resolvers: [], mutators: [] }
  const tokens = tokenizeQuery(ctx)
  const rendered = renderTokens(tokens, ctx)
  return {
    sql: rendered.join(' '),
    tokens,
    context: ctx,
  }
}
