import { Any, Intersect } from '@alloc/types'
import { BoolExpression } from '../expression'
import { JoinProps } from '../join'
import { Query } from '../query'
import { Selection, SelectionSource } from '../selection'
import { kDatabaseQueryStream } from '../symbols'
import { toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenizeSelected, tokenizeWhere } from '../tokenize'
import { QueryStreamConfig, SetType, Type } from '../type'
import { Where, where } from './where'

export interface SelectProps {
  from: Selectable
  joins?: JoinProps[]
  where?: BoolExpression
  limit?: number
}

const kSelectFrom = Symbol()

/** Object types compatible with `db.select` */
export type Selectable = SelectionSource | Selection

export class Select<From extends Selectable[] = any> //
  extends Query<SelectProps, 'select'>
{
  protected declare [kSelectFrom]: From
  protected tokens(props: SelectProps, ctx: Query.Context) {
    ctx.select = props

    const selected = [props.from]
    const joined = props.joins?.map(join => {
      selected.push(join.from)
      return [
        'INNER JOIN',
        { id: toTableName(join.from) },
        'ON',
        tokenizeWhere(join.where, ctx),
      ]
    })

    const tokens: TokenArray = [
      'SELECT',
      tokenizeSelected(selected, ctx),
      'FROM',
      { id: toTableName(props.from) },
    ]
    if (joined) {
      tokens.push(joined)
    }
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    return tokens
  }

  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]> {
    const join = { type: 'inner', from } as JoinProps
    this.props.joins ||= []
    this.props.joins.push(join)
    join.where = where(this.props, on)
    return this as any
  }

  limit(n: number) {
    this.props.limit = n
    return this
  }

  where(compose: Where<From>) {
    this.props.where = where(this.props, compose)
    return this
  }

  stream(config?: QueryStreamConfig | null): NodeJS.ReadableStream {
    const db = this.context.db!
    const QueryStream = db[kDatabaseQueryStream]
    if (!QueryStream)
      throw Error(
        'pg-query-stream not installed or the generated client is outdated'
      )

    const query = this.render()
    const cursor = new QueryStream(query, undefined, config || undefined)
    return db.client.query(cursor as any) as any
  }
}

export interface Select<From> extends SetType<SelectedRow<From[number]>> {}

/** Note that `T` must be a union, not an array type. */
export type SelectedRow<T> = unknown &
  ([T] extends [Any]
    ? Record<string, any>
    : Intersect<T extends SetType<infer Row> ? Row : never> extends infer Row
    ? Materialize<Row>
    : never)

type Materialize<T> = {
  [P in keyof T]: T[P] extends Type<any, infer Value> ? Value : T[P]
}
