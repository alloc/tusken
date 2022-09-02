import { BoolExpression } from './expression'
import { Selectable } from './select'

export type JoinProps = {
  type: 'inner'
  from: Selectable
  where: BoolExpression
}
