import type { ColumnRef } from '../column'
import type { Expression } from '../expression'
import type { Selectable } from '../selection'
import { t } from '../typesBuiltin'
import { JoinProps } from './join'
import { SetProps } from './set'

export interface SelectProps extends SetProps {
  from: Selectable
  joins?: JoinProps[]
  where?: Expression<t.bool | t.null>
  groupBy?: ColumnRef[]
}
