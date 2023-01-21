import type { Expression } from './expression'
import type { Selectable } from './selection'
import { t } from './typesBuiltin'

export type JoinType = 'inner'

export class JoinRef {
  constructor(
    public type: JoinType,
    public from: Selectable,
    public where: Expression<t.bool | t.null>,
    /** Use this identifier to reference the join. */
    public alias?: string | null
  ) {}
}
