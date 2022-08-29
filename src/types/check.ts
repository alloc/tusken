import { Input, Value } from './base'

export interface Check extends Value<boolean> {
  type: 'check'
  and: Negatable<CheckFunction>
  or: Negatable<CheckFunction>
}

export type Negatable<T> = T & { not: T }

export type Comparable<T, Op extends Comparator> = Op extends SameComparator
  ? [T] extends [undefined]
    ? null
    : Exclude<T, undefined> | Value<T>
  : Op extends InComparator
  ? Value<T[]> | Input<T>[]
  : Op extends SizeComparator
  ? T extends Sizeable
    ? Input<T>
    : never
  : never

export type Comparator =
  | InComparator
  | RangeComparator
  | SameComparator
  | SizeComparator

export type InComparator = 'in' | 'not in'
export type RangeComparator = 'between' | 'not between'
export type SameComparator = '=' | '==' | '!='
export type SizeComparator = '<' | '<=' | '>' | '>='

export type Sizeable = number | string | Date | Sizeable[]

export interface CheckFunction {
  <T, Op extends Exclude<Comparator, RangeComparator>>(
    left: Value<T>,
    op: Op,
    right: Comparable<T, Op>
  ): Check

  <T>(value: Value<T>, op: RangeComparator, min: Input<T>, max: Input<T>): Check
}
