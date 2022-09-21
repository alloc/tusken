import type { Database } from './database'
import { renderQuery, tokenizeQuery } from './internal/query'
import { renderTokens, TokenArray } from './internal/token'
import type { SelectProps } from './query/select'

export type ValidQuery<T = any, Command extends string = any> = unknown &
  Query<any, Command> &
  PromiseLike<T>

const kQueryCommand = Symbol()

export type QueryResponse = { rows: Record<string, any>[]; rowCount?: number }

export abstract class Query<
  Props extends object | null = any,
  Command extends string = any
> {
  protected declare [kQueryCommand]: Command
  protected position: number
  protected context: Query.Context
  protected get props(): Props {
    return this.context.nodes[this.position].props as any
  }

  constructor(parent: Query | Database) {
    if (parent instanceof Query) {
      // Assume our node will be added next.
      this.position = parent.context.nodes.length
      this.context = parent.context
    } else {
      this.position = 0
      this.context = {
        db: parent,
        nodes: [],
        values: [],
        trace: Error(),
      }
    }
  }

  /**
   * Modify the query promise before the caller receives it.
   */
  protected resolve?(result: QueryResponse): any

  /**
   * Modify the context before tokens are generated. The `context` phase
   * runs any hooks in reverse order, so earlier nodes will see changes
   * from later nodes.
   */
  protected inject?(props: Props, ctx: Query.Context): void

  /**
   * Generate tokens for this node. The `tokens` phase runs any hooks
   * in order, so later nodes will see context changes from earlier nodes.
   */
  protected abstract tokens(props: Props, ctx: Query.Context): TokenArray

  protected query<T extends Query>(node: {
    type: T extends Query<any, infer Command> ? Command : never
    props: T extends Query<infer Props> ? Props : never
    query: T
  }): T

  protected query(node: any) {
    node.query.context.nodes.push(node)
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
    const { db, values, trace } = this.context
    const onError = (error: any) => {
      trace.message = error.message
      throw Object.assign(trace, { query, values, ...error })
    }
    try {
      var query = renderQuery(this.context)
      return db.client
        .query(query, values)
        .then(
          this.resolve ||
            (result =>
              this.context.single ? result.rows[0] || null : result.rows),
          onError
        )
        .then(onfulfilled, onrejected)
    } catch (e: any) {
      onError(e)
    }
  },
})

export namespace Query {
  export interface Context {
    db: Database
    nodes: Node<Query>[]
    trace: Error
    /**
     * Any values that cannot be stringified without the
     * help of node-postgres (aka `pg`).
     *
     * Empty until the query is rendered.
     */
    values: any[]
    /**
     * Exists when a `SELECT` command starts this query.
     *
     * If tokenizing a column expression, this property is
     * used to detect when joins are present, which means
     * explicit table names must be included.
     */
    select?: SelectProps
    /**
     * Equals true when the query promise should resolve
     * with a single result, even if multiple rows are returned
     * from the query.
     */
    single?: boolean
  }
}

export type Node<T extends Query = any, Type extends string = any> = {
  readonly type: Type
  readonly query: T
  readonly props: T extends Query<infer Props> ? Props : never
}

/** Inspect the context, tokens, and SQL of a query */
export function inspectQuery(q: any) {
  const ctx = { ...q.context }
  ctx.nodes = [...ctx.nodes]
  ctx.values = []

  const tokens = tokenizeQuery(ctx)
  const rendered = renderTokens(tokens, ctx)
  return {
    sql: rendered.join(' '),
    tokens,
    context: ctx,
  }
}
