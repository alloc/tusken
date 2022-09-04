import type { BoolExpression } from './expression'
import type { Selectable } from './query/select'

export type JoinProps = {
  type: 'inner'
  from: Selectable
  where: BoolExpression
}
