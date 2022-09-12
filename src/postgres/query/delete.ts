import { BoolExpression } from '../expression'
import { TokenArray } from '../internal/token'
import { tokenizeWhere } from '../internal/tokenize'
import { Query, QueryResult } from '../query'
import { kTableName } from '../symbols'
import { TableRef } from '../table'
import { where, Where } from './where'

type Props = {
  from: TableRef
  where?: BoolExpression
}

export class Delete<From extends TableRef = any> extends Query<
  Props,
  'delete'
> {
  protected tokens(props: Props, ctx: Query.Context) {
    const tokens: TokenArray = ['DELETE FROM', { id: props.from[kTableName] }]
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    return tokens
  }

  where(filter: Where<[From]>) {
    this.props.where = where(this.props, filter)
    return this
  }

  protected resolve(result: QueryResult) {
    return result.rowCount
  }
}

export interface Delete<From> extends PromiseLike<number> {}
