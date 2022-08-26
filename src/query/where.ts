import { Input, Value, ValueType } from './base'
import { Comparable, Comparator, Negatable, RangeComparator } from './check'
import { SelectedKeys, SelectedValues } from './selection'
import { TableSelection } from './table'

export interface WhereFunction<From extends TableSelection> {
  <
    K extends SelectedKeys<From>,
    Op extends Exclude<Comparator, RangeComparator>
  >(
    key: K,
    op: Op,
    right: Comparable<SelectedValues<From, K>, Op>
  ): WhereFilter<From>

  <K extends SelectedKeys<From>>(
    key: K,
    op: RangeComparator,
    min: Input<SelectedValues<From, K>>,
    max: Input<SelectedValues<From, K>>
  ): WhereFilter<From>
}

export interface WhereFilter<From extends TableSelection>
  extends Value<ValueType<From>> {
  type: 'where'
  and: Negatable<WhereFunction<From>>
  or: Negatable<WhereFunction<From>>
}
