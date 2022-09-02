import { CheckBuilder, CheckList } from './query/check'
import { BoolExpression, Expression } from './query/expression'
import { BoolType, isBoolExpression, NullType, Type } from './type'

export function is(left: BoolExpression): CheckList<BoolType>
export function is(
  left: Expression<BoolType | NullType>
): CheckList<BoolType | NullType>
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
