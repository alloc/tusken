import type { CombineObjects, Intersect, Pick } from '@alloc/types'
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

/** Coerce a `RawSelection` into an object type. */
export type ResolveSelection<T extends RawSelection> = Intersect<
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

type ResolveAliasedValue<T> =
  | (T extends CallExpression<infer ReturnType> ? ReturnType : never)
  | ResolveColumnRefs<T>

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
