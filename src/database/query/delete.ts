import { ClientResult } from '../database'
import { BoolExpression } from '../expression'
import { Query } from '../query'
import { Selection } from '../selection'
import { kTableName } from '../symbols'
import { TableRef, toTableName } from '../table'
import { TokenArray } from '../token'
import { tokenizeWhere } from '../tokenize'
import { SetType } from '../type'
import { where, Where, WhereRefs } from './where'

type Props = {
  from: TableRef
  where?: BoolExpression
}

export class Delete<
  From extends TableRef,
  Return extends Selection = any
> extends Query<Props, 'delete'> {
  protected tokens(props: Props, ctx: Query.Context) {
    const tokens: TokenArray = ['DELETE FROM', { id: props.from[kTableName] }]
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    return tokens
  }

  where(compose: Where<[From]>) {
    const table = toTableName(this.props.from)
    this.props.where = where(this.props, refs =>
      compose(refs[table] as WhereRefs<[From]>)
    )
    return this
  }

  using(): never {
    throw Error('not implemented')
  }

  returning(): never {
    throw Error('not implemented')
  }

  protected resolve(result: ClientResult) {
    return result.rowCount
  }
}

export interface Delete<From, Return> extends SetType<Return> {}
