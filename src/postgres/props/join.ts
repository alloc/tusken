import type { Expression } from '../expression'
import type { Selectable } from '../selection'
import { t } from '../typesBuiltin'

export type JoinProps = {
  type: 'inner'
  from: Selectable
  where: Expression<t.bool | t.null>
}
