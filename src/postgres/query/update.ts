import { TokenArray } from '../internal/token'
import { tokenizeWhere } from '../internal/tokenize'
import { UpdateProps } from '../props/update'
import { Query } from '../query'
import { TableRef, toTableName } from '../table'

export class Update<T extends TableRef> extends Query<UpdateProps<T>> {
  protected tokenize(props: UpdateProps<T>, ctx: Query.Context) {
    const tokens: TokenArray = ['UPDATE', { id: toTableName(props.from) }]
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    return tokens
  }
}
