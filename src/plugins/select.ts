import { Database } from '../core/database'
import { Query } from '../core/query'
import { Selectable, SelectResult, SelectResults } from '../core/selection'
import { SetType } from '../core/type'
import { registerPlugin } from '../registerPlugin'
import { Where } from './where'

registerPlugin(
  class extends Database {
    select<T extends Selectable>(from: T) {
      return new Select<[T]>([from])
    }
  }
)

export class Select<From extends Selectable[] = any> extends Query {
  constructor(protected from: From) {
    super()
  }
}

export interface Select<From>
  extends SetType<SelectResult<From>>,
    PromiseLike<SelectResults<From>> {
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): Select<[...From, Joined]>
}
