import type { Any, CombineObjects, Intersect, Pick } from '@alloc/types'
import type { ColumnExpression, ColumnRef } from './column'
import type { CallExpression } from './function'
import type { JoinRef } from './join'
import type { SetExpression } from './set'
import { kSelectionArgs, kSelectionFrom, kSelectionType } from './symbols'
import type { TableRef } from './table'
import type { TableCast } from './tableCast'
import type { RowResult, SetType, Type } from './type'

/** Selection sources have a default selection of all columns. */
export type SelectionSource = SetExpression | TableRef | JoinRef

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

export interface Selection<T extends object> extends SetType<T> {}

/**
 * Get the sources of one or more selection types.
 */
export type SelectionSources<T> = T extends readonly any[]
  ? { [I in keyof T]: SelectionSources<T[I]> }
  : T extends Selection<any, infer From>
  ? From
  : Extract<T, SelectionSource>

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
    ? RowResult<Extract<Row, object>>
    : never)

export type AliasMapping = {
  [alias: string]: ColumnExpression | CallExpression | TableCast
}

export type RawSelection = string[] | RawColumnSelection | RawColumnSelection[]

export type RawColumnSelection =
  | AliasMapping
  | ColumnExpression
  | CallExpression
  | TableCast

/** Coerce a `RawSelection` into an object type. */
export type ResolveSelection<T extends RawSelection> = T extends (infer U)[]
  ? ResolveSingleSelection<Extract<U, RawColumnSelection>>
  : ResolveSingleSelection<T>

/**
 * Unlike the `ResolveSelection` type, this type avoids separating the `T` union,
 * in case there are multiple `ColumnExpression` with the same name that need to
 * be merged.
 */
type ResolveSingleSelection<T extends RawSelection> = Intersect<
  | ResolveColumns<T>
  | (T extends CallExpression<infer ReturnType, infer Callee>
      ? { [P in Callee]: ReturnType }
      : T extends (infer E)[]
      ? ResolveAliasMapping<E> | ResolveColumns<E> | ResolveTableCast<E>
      : ResolveAliasMapping<T> | ResolveTableCast<T>)
> extends infer Resolved
  ? Pick<Resolved, keyof Resolved>
  : never

type ResolveAliasMapping<T> = T extends AliasMapping
  ? { [P in keyof T]: ResolveAliasedValue<T[P]> }
  : never

type ResolveAliasedValue<T> = T extends CallExpression<infer ReturnType>
  ? ReturnType
  : T extends ColumnExpression<infer ColumnValue>
  ? ColumnValue
  : T extends TableCast<Selection<infer Values> | TableRef<infer Values>>
  ? Values
  : never

type ResolveTableCast<T> = T extends TableCast<
  Selection<infer Values> | TableRef<infer Values>,
  ColumnRef<Type<any, infer ClientType>, infer Key>
>
  ? { [P in Key]: ClientType extends any[] ? Values[] : Values }
  : never

/**
 * Convert a union of column refs into an object type.
 *
 * This is used when a selector returns an array that
 * includes at least one column ref.
 */
type ResolveColumns<T> = unknown &
  ([Extract<T, ColumnExpression>] extends [ColumnExpression<any, infer Column>]
    ? Column extends string
      ? CombineObjects<
          T extends ColumnExpression<infer ColumnValue, Column>
            ? { [P in Column]: ColumnValue }
            : never
        >
      : never
    : never)
