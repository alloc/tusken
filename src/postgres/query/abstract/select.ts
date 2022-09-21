import { Expression } from '../../expression'
import { TokenArray } from '../../internal/token'
import {
  tokenizeExpression,
  tokenizeOrderBy,
  tokenizeSelected,
  tokenizeWhere,
} from '../../internal/tokenize'
import { JoinProps } from '../../join'
import { Query } from '../../query'
import { Selectable } from '../../selection'
import { toTableName } from '../../table'
import { t } from '../../type-builtin'
import { SortSelection } from '../orderBy'
import { Where, where } from '../where'

const kSelectFrom = Symbol()

export interface SelectProps {
  from: Selectable
  joins?: JoinProps[]
  where?: Expression<t.bool | t.null>
  limit?: number
  offset?: number
  orderBy?: SortSelection
}

/**
 * For queries based on `SELECT` command, but may not return a record set.
 *
 * Note: You need to override `innerJoin` to provide a return type.
 * This can be done at the type-level with interface merging.
 */
export abstract class AbstractSelect<
  From extends Selectable[],
  Command extends string
> extends Query<SelectProps, Command> {
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
        tokenizeExpression(join.where, ctx),
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
    if (props.orderBy) {
      tokens.push(tokenizeOrderBy(props.orderBy, ctx))
    }
    if (props.limit) {
      tokens.push('LIMIT', { number: props.limit })
    }
    if (props.offset) {
      tokens.push('OFFSET', { number: props.offset })
    }
    return tokens
  }

  // This method has to return `any` since we can't override
  // the type parameters of a superclass.
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): any {
    const join = { type: 'inner', from } as JoinProps
    this.props.joins ||= []
    this.props.joins.push(join)
    join.where = where(this.props, on)
    return this
  }

  where(filter: Where<From>) {
    this.props.where = where(this.props, filter)
    return this
  }
}
