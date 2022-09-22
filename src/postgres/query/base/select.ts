import { TokenArray } from '../../internal/token'
import {
  tokenizeExpression,
  tokenizeSelected,
  tokenizeSetProps,
  tokenizeWhere,
} from '../../internal/tokenize'
import { JoinProps } from '../../props/join'
import { SelectProps } from '../../props/select'
import { Query } from '../../query'
import {
  Selectable,
  Selection,
  SelectionSource,
  SelectionSources,
} from '../../selection'
import { kSelectionFrom } from '../../symbols'
import { toTableName } from '../../table'
import { Where, where } from '../where'
import { SetBase } from './set'

/**
 * For queries based on `SELECT` command, but may not return a record set.
 *
 * Note: You need to override `innerJoin` to provide a return type.
 * This can be done at the type-level with interface merging.
 */
export abstract class SelectBase<From extends Selectable[]> //
  extends SetBase<From, SelectProps>
{
  protected get sources(): SelectionSource[] {
    const { from, joins } = this.props
    const sources = [toSelectionSource(from)]
    joins?.forEach(join => {
      sources.push(toSelectionSource(join.from))
    })
    return sources
  }
  protected tokenize(props: SelectProps, ctx: Query.Context) {
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
    tokens.push(tokenizeSetProps(props, ctx))
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

  where(filter: Where<SelectionSources<From>>) {
    this.props.where = where(this.props, filter, this.props.where)
    return this
  }
}

function toSelectionSource(s: Selectable) {
  while (s instanceof Selection) {
    s = s[kSelectionFrom]
  }
  return s
}
