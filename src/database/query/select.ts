import { Any, Intersect } from '@alloc/types'
import { Query } from '../query'
import { Selection } from '../selection'
import { SetRef } from '../set'
import { TableRef, toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenizeSelected, tokenizeWhere } from '../tokenize'
import { SetType, Type } from '../type'
import { BoolExpression } from './expression'
import { JoinProps } from './join'
import { Where, where } from './where'

export interface SelectProps {
  from: Selectable
  joins?: JoinProps[]
  where?: BoolExpression
  limit?: number
}

const kSelectFrom = Symbol()

export type Selectable = SetRef | TableRef | Selection

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
}

export interface Select<From extends Selectable[]>
  extends SetType<SelectedRow<From[number]>> {}

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
