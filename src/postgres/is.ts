import { Variadic } from '../utils/Variadic'
import { CheckBuilder, CheckList } from './check'
import { BoolExpression, Expression } from './expression'
import { isBoolExpression, Type } from './type'
import { t } from './type-builtin'

export function is(left: Variadic<BoolExpression>): CheckList<t.bool>
export function is(
  left: Variadic<Expression<t.bool | t.null, any>>
): CheckList<t.bool | t.null>
export function is(left: Expression<any, any>): never
export function is<T extends Type>(left: T): CheckBuilder<T>
export function is<T>(left: T): CheckBuilder<Type<any, T>>
export function is(left: any): any {
  if (Array.isArray(left)) {
    let expr = new CheckList(left[0])
    for (const cond of left) {
      expr = expr.and(cond)
    }
    return expr
  }
  if (isBoolExpression(left)) {
    return new CheckList(left)
  }
  return new CheckBuilder(check => {
    return new CheckList(check)
  }, left)
}
