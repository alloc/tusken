import { ClientResult } from '../database'
import { Query } from '../query'
import { Select, SelectProps } from './select'

export class Count extends Select {
  protected tokens(props: SelectProps, ctx: Query.Context) {
    const tokens = super.tokens(props, ctx)
    tokens[1] = ['COUNT(*)']
    return tokens
  }
  protected resolve(result: ClientResult) {
    return result.rows[0].count
  }
}
