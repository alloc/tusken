import type { Intersect, Pick } from '@alloc/types'
import type { ColumnRef } from './column'
import type { CallExpression } from './function'
import type { SetRef } from './set'
import { kSelectionArgs, kSelectionFrom, kSelectionType } from './symbols'
import type { TableRef } from './table'
import type { SetType } from './type'

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

export type AliasMapping = {
  [alias: string]: ColumnRef | CallExpression
}

export type RawSelection =
  | string[]
  | SetRef
  | ColumnRef
  | CallExpression
  | AliasMapping
  | (ColumnRef | AliasMapping)[]

export type ResolveAliasMapping<T> = T extends AliasMapping
  ? {
      [P in keyof T]: T[P] extends CallExpression<infer ReturnType>
        ? ReturnType
        : T[P] extends ColumnRef<infer Value>
        ? Value
        : never
    }
  : Extract<T, object>

/** Coerce a `RawSelection` into an object type. */
export type ResolveSelection<T extends RawSelection> = Intersect<
  T extends ColumnRef<infer Value, infer Column>
    ? { [P in Column]: Value }
    : T extends CallExpression<infer ReturnType, infer Callee>
    ? { [P in Callee]: ReturnType }
    : T extends (infer E)[]
    ? E extends ColumnRef<infer Value, infer Column>
      ? { [P in Column]: Value }
      : ResolveAliasMapping<E>
    : ResolveAliasMapping<T>
> extends infer U
  ? Pick<U, keyof U>
  : never
