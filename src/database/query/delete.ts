import { Query } from '../query'
import { kTableName } from '../symbols'
import { TableRef } from '../table'
import { TokenArray } from '../token'
import { tokenizeWhere } from '../tokenize'
import { where, Where, WhereExpression } from './where'

type Props = {
  from: TableRef
  where?: WhereExpression
}

export class Delete<From extends TableRef, Return = number>
  extends Query<Props, 'delete'>
  implements PromiseLike<Return>
{
  protected tokens(props: Props, ctx: Query.Context) {
    const tokens: TokenArray = ['DELETE FROM', { id: props.from[kTableName] }]
    if (props.where) {
      tokens.push('WHERE', tokenizeWhere(props.where, ctx))
    }
    return tokens
  }

  where(compose: Where<[From]>) {
    where(this.props, compose)
    return this
  }

  using(): never {
    throw Error('not implemented')
  }

  returning(): never {
    throw Error('not implemented')
  }
}
