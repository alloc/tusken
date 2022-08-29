import { Intersect, LoosePick } from '@alloc/types'
import { Input } from './base'
import { Comparable, Comparator, Negatable, RangeComparator } from './check'
import { InnerJoin, Joinable, JoinSelected } from './join'
import { RawSelectedKeys } from './select'
import {
  ResolveTableSelection,
  Selection,
  SelectKey,
  SelectKeyAbsolute,
} from './selection'
import { TableSelection } from './table'

export interface WhereFunction<Schema, From extends Joinable> {
  <K extends WhereKeys<From>, Op extends Exclude<Comparator, RangeComparator>>(
    key: K,
    op: Op,
    right: Comparable<WhereValues<From, K>, Op>
  ): WhereFilter<Schema, From>

  <K extends WhereKeys<From>>(
    key: K,
    op: RangeComparator,
    min: Input<WhereValues<From, K>>,
    max: Input<WhereValues<From, K>>
  ): WhereFilter<Schema, From>
}

export interface WhereFilter<Schema, From extends Joinable>
  extends Selection<Schema, JoinSelected<From>> {
  type: 'where'
  and: Negatable<WhereFunction<Schema, From>>
  or: Negatable<WhereFunction<Schema, From>>
}

/**
 * Get the absolute keys for a `where` clause involving joined tables.
 */
export type WhereAbsoluteKeys<From, K = string> = unknown &
  (From extends TableSelection<infer Schema, infer TableId, any>
    ? SelectKeyAbsolute<
        string extends K
          ? LoosePick<Schema, TableId>
          : WhereSchema<Schema, TableId, K>
      >
    : From extends InnerJoin<any, infer Joined, any>
    ? WhereAbsoluteKeys<Joined>
    : never)

/**
 * Get the keys for a `where` clause.
 */
export type WhereKeys<From> = From extends TableSelection<
  infer Schema,
  infer TableId,
  any
>
  ? SelectKey<LoosePick<Schema, TableId>>
  : From extends InnerJoin<any, infer Joined, any>
  ? WhereAbsoluteKeys<Joined>
  : never

/**
 * Get the value types of the columns used in a `where` clause.
 */
export type WhereValues<From extends Joinable, K> = From extends any
  ? WhereSelectedValues<From, K>
  : From extends InnerJoin<any, infer Joined, any>
  ? WhereJoinedValues<Joined, K>
  : never

type WhereSelectedValues<T, K> = unknown &
  (T extends TableSelection<infer Schema, infer TableId, any>
    ? ResolveTableSelection<Schema, TableId, K & string> extends infer S
      ? S[keyof S]
      : never
    : never)

type WhereJoinedValues<T, K> = T extends InnerJoin<any, infer Joined, any>
  ? Joined extends TableSelection
    ? WhereSelectedValues<Joined, K>
    : WhereJoinedValues<Joined, K>
  : never

/**
 * Generate a database schema containing only the
 * columns referenced by a `where` clause.
 */
type WhereSchema<Schema, TableId, K> = Intersect<
  TableId extends keyof Schema & string
    ? {
        [P in TableId]: LoosePick<
          Schema[TableId],
          RawSelectedKeys<K & string, TableId>
        >
      }
    : never
>
