import type { BoolExpression } from './expression'
import type { Selectable } from './selection'

export type JoinProps = {
  type: 'inner'
  from: Selectable
  where: BoolExpression
}
