import type { ClientResult, Database } from './database'
import type { Delete } from './query/delete'
import type { Put } from './query/put'
import type { Select, SelectProps } from './query/select'
import { renderTokens, TokenArray } from './token'
import type { Type } from './type'

export type ValidQuery<T = any, Command extends string = any> = unknown &
  Query<any, Command> &
  PromiseLike<T>

export type QueryResult<T extends Query> = T extends Type<any, infer Result>
  ? Result
  : any

const kQueryCommand = Symbol()

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

  constructor(parent?: Query | Database | null) {
    if (parent instanceof Query) {
      // Assume our node will be added next.
      this.position = parent.context.nodes.length
      this.context = parent.context
    } else {
      this.position = 0
      this.context = {
        db: parent || null,
        nodes: [],
      }
    }
  }

  /** Render a SQL string. */
  render(): string {
    const tokens = this.tokenize()
    const rendered = renderTokens(tokens, this.context)
    return rendered.join(' ')
  }

  /** Convert the tree of query nodes into SQL tokens. */
  tokenize(ctx = this.context): TokenArray {
    // Always get the nodes from "this.context"
    const { nodes } = this.context
    nodes.forEach(({ query, props }) => {
      query.inject?.(props, ctx)
    })
    return nodes.map(({ query, props }) => {
      return query.tokens(props, ctx)
    })
  }

  then<TResult1 = QueryResult<this>, TResult2 = never>(
    onfulfilled?:
      | ((value: QueryResult<this>) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2> {
    const { db } = this.context
    if (!db) {
      throw Error('Query not associated with a database')
    }
    return db.client
      .query(this.render())
      .then(this.resolve || (result => result.rows))
      .then(onfulfilled as any, onrejected)
  }

  /**
   * Modify the query promise before the caller receives it.
   */
  protected resolve?(result: ClientResult): any

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

export namespace Query {
  export interface Context {
    db: Database | null
    nodes: Node<Query>[]
    select?: SelectProps
    inArray?: boolean
  }
}

export type Node<T extends Query = any, Type extends string = any> = {
  readonly type: Type
  readonly query: T
  readonly props: T extends Query<infer Props> ? Props : never
}

export type AnyNodeType = AnyNode extends { type: infer Type } ? Type : never
export type AnyNode =
  | Node<Put, 'put'>
  | Node<Select, 'select'>
  | Node<Delete, 'delete'>
