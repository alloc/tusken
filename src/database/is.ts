import { BoolExpression, Expression } from './expression'
import { CheckBuilder, CheckList } from './query/check'
import { isBoolExpression, t, Type } from './type'

export function is(left: BoolExpression): CheckList<t.bool>
export function is(
  left: Expression<t.bool | t.null>
): CheckList<t.bool | t.null>
export function is<T extends Type>(left: T): CheckBuilder<T>
export function is<T>(left: T): CheckBuilder<Type<any, T>>
export function is(left: any): any {
  if (isBoolExpression(left)) {
    return new CheckList(left)
  }
  return new CheckBuilder(check => {
    return new CheckList(check)
  }, left)
}
