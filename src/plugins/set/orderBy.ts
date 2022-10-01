import { SetBase } from '../../core/query/base/set'
import { Selectable } from '../../core/selection'
import { registerPlugin } from '../../registerPlugin'
import { orderBy, SortSelection, SortSelector } from '../orderBy'

registerPlugin(
  class OrderBy extends SetBase {
    orderBy(selector: SortSelection | SortSelector) {
      this.order = orderBy(this.sources, selector)
    }
  }
)

declare class Props {
  protected order?: SortSelection
}

declare module '../../core/query/base/set' {
  export interface SetBase<From extends Selectable[] = any> extends Props {
    orderBy(selector: SortSelection<From> | SortSelector<From>): this
  }
}
