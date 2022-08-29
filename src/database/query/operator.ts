import { Query } from '.'

export class BinaryOperator<In, Out> extends Query<Out> {
  constructor(left: Query<In>, op: string, right: Query<In>) {
    super(left, { op, right }, props => [props.op, right])
  }
}
