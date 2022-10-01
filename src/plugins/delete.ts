import { Expression } from '../expression'
import { TokenArray } from '../internal/token'
import { tokenizeWhere } from '../internal/tokenize'
import { Query } from '../query'
import { kTableName } from '../symbols'
import { TableRef } from '../table'
import { t } from '../typesBuiltin'
import { buildWhereClause, Where } from './where'

type Props = {
  from: TableRef
  where?: Expression<t.bool | t.null>
}

export class Delete<From extends TableRef = any> extends Query<Props> {
  protected tokenize(props: Props, ctx: Query.Context) {
    const tokens: TokenArray = ['DELETE FROM', { id: props.from[kTableName] }]
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    ctx.resolvers.push(result => result.rowCount)
    return tokens
  }

  where(filter: Where<[From]>) {
    this.props.where = buildWhereClause(this.props, filter)
    return this
  }
}

export interface Delete<From> extends PromiseLike<number> {}
