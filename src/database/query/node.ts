import type { Database } from '../database'
import type { CheckList } from './check'
import type { Put } from './put'
import type { Select, SelectProps } from './select'
import { renderToken, Token, TokenArray } from './token'

declare const kQueryCommand: unique symbol

export type ValidQuery<T> = Query & PromiseLike<T>

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

  /**
   * Pass this query object as a function's first argument.
   *
   * Useful if you like reading calls in order.
   */
  chain<In extends any[], Out>(
    call: (value: this, ...args: In) => Out,
    ...args: In
  ): Out {
    return call(this, ...args)
  }

  toSql() {
    const tokens = this.toTokens()
    const sql: string[] = []
    tokens.forEach(token => {
      const rendered = renderToken.call(this.context, token)
      if (rendered) {
        sql.push(rendered)
      }
    })
    return sql.join(' ')
  }

  toTokens(): Token[] {
    const { nodes } = this.context

    let i = nodes.length
    while (--i >= 0) {
      const { query, props } = nodes[i]
      if (query.inject) {
        query.inject(props, this.context)
      }
    }

    return (
      nodes.map(({ query, props }) => {
        return query.tokens(props, this.context)
      }) as Token[][]
    ).flat(Infinity as 1)
  }

  then(
    onfulfilled?: (value: any) => any,
    onrejected?: (e: any) => any
  ): Promise<any> {
    const { db } = this.context
    if (!db) {
      throw Error('Query not associated with a database')
    }
    let promise = db.client.query(this.toSql())
    if (this.resolve) {
      promise = this.resolve(promise)
    }
    return promise.then(onfulfilled, onrejected)
  }

  /**
   * Modify the query promise before the caller receives it.
   */
  protected resolve?(promise: Promise<any>): Promise<any>

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
    return node
  }
}

export namespace Query {
  export interface Context {
    db: Database | null
    nodes: Node<Query>[]
    select?: SelectProps
  }
}

export type Node<T extends Query = any, Type extends string = any> = {
  readonly type: Type
  readonly query: T
  readonly props: T extends Query<infer Props> ? Props : never
}

export type AnyNodeType = AnyNode extends { type: infer Type } ? Type : never
export type AnyNode =
  | Node<CheckList, 'is'>
  | Node<Put, 'put'>
  | Node<Select, 'select'>
