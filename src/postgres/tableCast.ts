import { toArray } from '../utils/toArray'
import { Expression } from './expression'
import { RawColumnSelection, Selectable } from './selection'
import { kSelectionArgs, kTableCast } from './symbols'
import { isSelection } from './typeChecks'

type RowRef = string | Expression

interface Props<T extends Selectable> {
  pk: RowRef | RowRef[]
  from: T
  selected?: RawColumnSelection[]
}

export class TableCast<T extends Selectable = any> {
  protected [kTableCast]: Props<T>
  constructor(pk: RowRef | RowRef[], from: T) {
    this[kTableCast] = {
      pk,
      from,
      // Returning a SetRef or an array of column names from
      // the selector is not supported.
      selected: isSelection(from)
        ? (toArray(from[kSelectionArgs]) as RawColumnSelection[])
        : undefined,
    }
  }
}
