import { Any, Intersect } from '@alloc/types'
import { Query } from '../query'
import { Selection } from '../selection'
import { TableRef, toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenizeSelected, tokenizeWhere } from '../tokenize'
import { Type } from '../type'
import { CheckList } from './check'
import { JoinProps } from './join'
import { Where, where } from './where'

export interface SelectProps {
  from: TableRef | Selection
  joins?: JoinProps[]
  where?: CheckList
  limit?: number
}

declare const kSelectFrom: unique symbol

export class Select<
  From extends (TableRef | Selection)[] = any
> extends Query<SelectProps> {
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
      tokens.push('WHERE', tokenizeWhere(props.where, ctx))
    }
    return tokens
  }

  innerJoin<Joined extends TableRef | Selection>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]> {
    const join = { type: 'inner', from } as JoinProps
    where(join, on)
    this.props.joins ||= []
    this.props.joins.push(join)
    return this as any
  }

  limit(n: number) {
    this.props.limit = n
    return this
  }

  where(compose: Where<From>) {
    where(this.props, compose)
    return this
  }
}

export interface Select<From extends (TableRef | Selection)[]>
  extends Type<'setof', SelectedRow<From[number]>> {}

export type SelectedRow<T> = [T] extends [Any]
  ? Record<string, any>
  : Intersect<
      T extends TableRef<infer Row>
        ? Row
        : T extends Selection<infer Row>
        ? Row
        : unknown
    > extends infer Row
  ? {
      [P in keyof Row]: Row[P] extends Type<any, infer ColumnType>
        ? ColumnType
        : Row[P]
    }
  : never
