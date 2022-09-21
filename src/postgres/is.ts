import { Variadic } from '../utils/Variadic'
import { CheckList } from './check'
import { Expression } from './expression'
import { t } from './type-builtin'

export function is(left: Variadic<Expression<t.bool>>): CheckList<t.bool>

export function is(
  left: Variadic<Expression<t.bool | t.null>>
): CheckList<t.bool | t.null>

export function is(left: Variadic<Expression<t.bool | t.null>>) {
  return new CheckList(left)
}
