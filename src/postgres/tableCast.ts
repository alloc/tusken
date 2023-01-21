import { Any } from '@alloc/types'
import { toArray } from '../utils/toArray'
import { array } from './array'
import { ColumnRef } from './column'
import { RawColumnSelection, Selectable } from './selection'
import { kSelectionArgs, kTableCast } from './symbols'
import { IdentityColumns, RowType } from './table'
import { isSelection } from './typeChecks'

type TableKeyType<T extends Selectable> = [
  IdentityColumns<T>,
  RowType<T>
] extends [infer Keys, infer Values]
  ? Keys extends []
    ? never
    : Keys extends [keyof Values]
    ? Values[Keys[0]]
    : Keys extends (keyof Values)[]
    ? never // FIXME: composite keys not yet supported
    : never
  : never

/** Can reference one or multiple foreign keys */
export type ForeignKeyRef<T extends Selectable> = [T] extends [Any]
  ? ColumnRef
  : ColumnRef<TableKeyType<T> | array<TableKeyType<T>>>

interface Props<T extends Selectable, PK extends ForeignKeyRef<T>> {
  pk: PK
  from: T
  selected?: RawColumnSelection[]
}

export class TableCast<
  T extends Selectable = any,
  PK extends ForeignKeyRef<T> = ForeignKeyRef<any>
> {
  protected [kTableCast]: Props<T, PK>
  constructor(pk: PK, from: T) {
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
