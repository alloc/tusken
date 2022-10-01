import { Select } from '../core/query/select'
import { Where } from '../core/query/where'
import { Selectable } from '../core/selection'
import { registerPlugin } from '../registerPlugin'

registerPlugin(
  class InnerJoin extends Select {
    // This method has to return `any` since we can't override
    // the type parameters of a superclass.
    innerJoin<Joined extends Selectable>(
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
  }
)
