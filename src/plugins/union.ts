import { tokenizeSetProps } from '../core/internal/tokenize'
import type { Selectable, SelectionSource } from '../core/selection'
import { TokenArray } from '../internal/token'
import { UnionProps } from '../props/union'
import type { Query } from '../query'
import { registerPlugin } from '../registerPlugin'
import { Select } from './select'

registerPlugin(
  class extends Select {
    union(query: Select<From>): Union<From> {
      return new Union([this, query])
      return this.query({
        type: 'union',
        props: { selects: [this, query] },
        query: new Union(this.db),
      })
    }
  }
)

export class Union<From extends Selectable[] = any> //
  extends SetBase<From, UnionProps>
{
  protected get sources(): SelectionSource[] {
    return this.props.selects[0]['sources']
  }
  protected tokenize(props: UnionProps, ctx: Query.Context): TokenArray {
    return [
      { join: props.selects.map(query => ({ query })), with: ' UNION ' },
      tokenizeSetProps(props, ctx),
    ]
  }

  union(query: Select<From>) {
    this.props.selects.push(query)
    return this
  }
}
