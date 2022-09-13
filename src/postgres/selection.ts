import type { Any, CombineObjects, Intersect, Pick } from '@alloc/types'
import type { ColumnRef } from './column'
import type { CallExpression } from './function'
import type { SetRef } from './set'
import { kSelectionArgs, kSelectionFrom, kSelectionType } from './symbols'
import type { TableRef } from './table'
import type { SetType, Values } from './type'

/** Selection sources have a default selection of all columns. */
export type SelectionSource = SetRef | TableRef

export class Selection<
  T extends object = any,
  From extends SelectionSource = any
> {
  protected declare [kSelectionType]: T
  protected [kSelectionArgs]: RawSelection
  protected [kSelectionFrom]: From

  constructor(args: RawSelection, from: From) {
    this[kSelectionArgs] = args
    this[kSelectionFrom] = from
  }
}

export interface Selection<T> extends SetType<T> {}

/** Object types compatible with `SELECT` command */
export type Selectable = SelectionSource | Selection

export type SelectResult<From extends Selectable[]> = SelectedRow<
  From[number]
> extends infer Result
  ? Extract<Result, object>
  : never

export type SelectResults<From extends Selectable[]> =
  SelectResult<From>[] extends infer Result ? Extract<Result, object[]> : never

/** Note that `T` must be a union, not an array type. */
export type SelectedRow<T> = unknown &
  ([T] extends [Any]
    ? Record<string, any>
    : Intersect<T extends SetType<infer Row> ? Row : never> extends infer Row
    ? Values<Extract<Row, object>>
    : never)

export type AliasMapping = {
  [alias: string]: ColumnRef | CallExpression
}

export type RawSelection =
  | string[]
  | SetRef
  | RawColumnSelection
  | RawColumnSelection[]

type RawColumnSelection = ColumnRef | CallExpression | AliasMapping

/** Coerce a `RawSelection` into an object type. */
export type ResolveSelection<T extends RawSelection> = T extends (infer U)[]
  ? ResolveSelection<Extract<U, RawColumnSelection>>
  : Intersect<
      | ResolveColumnRefs<T>
      | (T extends CallExpression<infer ReturnType, infer Callee>
          ? { [P in Callee]: ReturnType }
          : T extends (infer E)[]
          ? ResolveAliasMapping<E> | ResolveColumnRefs<E>
          : ResolveAliasMapping<T>)
    > extends infer Resolved
  ? Pick<Resolved, keyof Resolved>
  : never

type ResolveAliasMapping<T> = T extends AliasMapping
  ? { [P in keyof T]: ResolveAliasedValue<T[P]> }
  : never

type ResolveAliasedValue<T> = T extends CallExpression<infer ReturnType>
  ? ReturnType
  : T extends ColumnRef<infer ColumnValue>
  ? ColumnValue
  : never

/**
 * Convert a union of column refs into an object type.
 *
 * This is used when a selector returns an array that
 * includes at least one column ref.
 */
type ResolveColumnRefs<T> = unknown &
  ([Extract<T, ColumnRef>] extends [ColumnRef<any, infer Column>]
    ? Column extends string
      ? CombineObjects<
          T extends ColumnRef<infer ColumnValue, Column>
            ? { [P in Column]: ColumnValue }
            : never
        >
      : never
    : never)
