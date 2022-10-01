import { Where } from '../query/where'
import { Selectable } from '../selection'

export default class
  // This method has to return `any` since we can't override
  // the type parameters of a superclass.
  export function innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): any {
    const self = this.cloneIfReused()
    const join = { type: 'inner', from } as JoinProps
    self.props.joins ||= []
    self.props.joins.push(join)
    join.where = buildWhereClause(self.props, on)
    return self
  }