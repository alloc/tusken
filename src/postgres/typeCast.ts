import { ExpressionType } from './expression'
import { tokenize } from './internal/tokenize'
import { Query } from './query'
import type { RuntimeType, Type } from './type'

type Props = { value: any; type: RuntimeType }

export class TypeCast<T extends Type> extends ExpressionType<T, Props> {
  constructor(props: Props) {
    super(props.type, props, tokenizeTypeCast)
  }
}

function tokenizeTypeCast(props: Props, ctx: Query.Context) {
  return { concat: [tokenize(props.value, ctx), '::' + props.type.name] }
}
