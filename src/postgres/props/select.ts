import type { ColumnRef } from '../column'
import type { Expression } from '../expression'
import type { JoinRef } from '../join'
import type { Selectable } from '../selection'
import { t } from '../typesBuiltin'
import type { SetProps } from './set'

export interface SelectProps extends SetProps {
  from: Selectable
  joins?: JoinRef[]
  where?: Expression<t.bool | t.null> | null
  groupBy?: ColumnRef[]
}
