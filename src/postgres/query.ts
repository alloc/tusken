import type { Database } from './database'
import {
  createQueryContext,
  Node,
  QueryInternal,
  renderQuery,
  tokenizeQuery,
} from './internal/query'
import { renderTokens, Token, TokenArray } from './internal/token'
import { JoinRef } from './join'

export type QueryPromise<T = any> = Query & PromiseLike<T>

export type QueryResponse<T extends object = Record<string, any>> = {
  rows: T[]
  rowCount?: number
}

export abstract class Query<Props extends object | null = any> {
  protected db: Database
  protected nodes: Node<Query>[]
  protected position: number
  protected trace = Error().stack!.slice(6)

  constructor(parent: Query | Database) {
    if (parent instanceof Query) {
      if (parent.position < parent.nodes.length - 1) {
        parent.reuse()
      }
      this.db = parent.db
      this.nodes = parent.isReused ? [...parent.nodes] : parent.nodes
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
    if (!this.isReused) {
      this.reuse()
    }
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

  protected get isReused() {
    return Object.isFrozen(this.nodes)
  }

  /**
   * To reuse a query, its node list must be sliced (so the query is last)
   * and then frozen.
   */
  protected reuse(): Node[] {
    return (this.nodes = Object.freeze(
      this.nodes.slice(0, this.position + 1)
    ) as any)
  }

  protected clone() {
    const clone = Object.create(this.constructor.prototype)
    Object.defineProperties(clone, Object.getOwnPropertyDescriptors(this))
    clone.nodes = this.nodes.slice(0, this.position + 1)
    clone.nodes[this.position] = {
      ...clone.nodes[this.position],
      props: this.cloneProps(),
    }
    return clone as this
  }

  /**
   * By default, only a shallow clone is made.
   */
  protected cloneProps() {
    return { ...this.props }
  }
}

// Using defineProperty for Query#then lets subclasses easily
// define their promise type without any TypeScript gymnastics.
// And of course, they still inherit this default implementation.
// As a bonus, any Query subclass that doesn't extend the PromiseLike
// interface will not be awaitable, thus avoiding incomplete queries.
Object.defineProperty(Query.prototype, 'then', {
  value: function then(this: Query, onfulfilled?: any, onrejected?: any) {
    const ctx = createQueryContext(this)

    const execute = (sql: string): Promise<any> =>
      client
        .query(sql, ctx.values)
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

    const onError = (e: any) => {
      if (
        process.env.NODE_ENV !== 'production' &&
        e.message.includes('administrator command')
      ) {
        // Repeat the query if terminated by admin command in
        // development, since it was likely a timeout caused by a
        // breakpoint.
        return execute(sql)
      }
      throw Object.assign(e, {
        stack: e.stack + '\n    ––––– Query origin –––––' + ctx.query.trace,
        context: ctx,
        sql,
      })
    }

    try {
      var sql = renderQuery(ctx)
      var client = this.db['getClient'](ctx)
      return execute(sql)
    } catch (e: any) {
      onError(e)
    }
  },
})

export namespace Query {
  export interface Context {
    query: QueryInternal
    /**
     * The identifiers that represent something in this query.
     * This is used to prevent naming conflicts.
     */
    idents: Set<string>
    /**
     * When true, the query should never be sent to a read-only replica.
     */
    impure?: boolean
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
    joins?: JoinRef[]
    currentJoin?: JoinRef
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
export function inspectQuery(query: Query) {
  const ctx = createQueryContext(query)
  const tokens = tokenizeQuery(ctx)
  const rendered = renderTokens(tokens, ctx)
  return {
    sql: rendered.join(' '),
    tokens,
    context: ctx,
  }
}
