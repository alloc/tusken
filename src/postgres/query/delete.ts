import { Expression } from '../expression'
import { TokenArray } from '../internal/token'
import { tokenizeWhere } from '../internal/tokenize'
import { Query, QueryResponse } from '../query'
import { kTableName } from '../symbols'
import { TableRef } from '../table'
import { t } from '../typesBuiltin'
import { where, Where } from './where'

type Props = {
  from: TableRef
  where?: Expression<t.bool | t.null>
}

export class Delete<From extends TableRef = any> extends Query<
  Props,
  'delete'
> {
  protected tokenize(props: Props, ctx: Query.Context) {
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

  protected resolve(result: QueryResponse) {
    return result.rowCount
  }
}

export interface Delete<From> extends PromiseLike<number> {}
