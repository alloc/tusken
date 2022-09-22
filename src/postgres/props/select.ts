import { Expression } from '../expression'
import { Selectable } from '../selection'
import { t } from '../typesBuiltin'
import { JoinProps } from './join'
import { SetProps } from './set'

export interface SelectProps extends SetProps {
  from: Selectable
  joins?: JoinProps[]
  where?: Expression<t.bool | t.null>
}
