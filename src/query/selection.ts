import { Intersect } from '@alloc/types'
import { Value } from './base'
import { TableIds } from './table'

export interface Selection<
  Schema = any,
  Selected extends SelectArg<Schema>[] = any
> extends NominalSelection<Selected>,
    Value<ResolveSelection<Schema, Selected[number]>[]> {}

declare const kSelection: unique symbol

declare class NominalSelection<Selected> {
  private [kSelection]: Selected
}

/** Get the database schema from a selection query. */
export type SelectionSchema<T extends Selection> = T extends Selection<
  infer Schema
>
  ? Schema
  : never

/** Get the arguments of a selection query. */
export type SelectionArgs<T extends Selection> = T extends Selection<
  any,
  infer Args
>
  ? Args
  : never

export type SelectKey<Schema> = keyof Schema extends infer TableId
  ? TableId extends string
    ? Schema[TableId & keyof Schema] extends infer Table
      ? keyof Table extends infer Key
        ? Key extends string
          ? Key | `${TableId}.${Key}`
          : never
        : never
      : never
    : never
  : never

export type SelectArgs<Schema> = [SelectArg<Schema>, ...SelectArg<Schema>[]]

export type SelectArg<Schema> = SelectKey<Schema> extends infer Key
  ? Key extends string
    ? Key | { [P in Key]: string }
    : never
  : never

/**
 * Get the keys used in a selection.
 */
export type SelectedKeys<
  T extends Selection,
  Filter = any
> = T extends Selection<infer Schema, infer Args>
  ? Args[number] extends infer Arg
    ? (Arg extends string ? Arg : keyof Arg) extends infer Key
      ? Key extends SelectKey<Schema>
        ? ResolveSelection<Schema, Key> extends infer Value
          ? Value[keyof Value] extends Filter
            ? Key
            : never
          : never
        : never
      : never
    : never
  : never

/**
 * Get the property types of a selection's result.
 */
export type SelectedValues<
  T extends Selection,
  K extends SelectKey<SelectionSchema<T>> = SelectedKeys<T>
> = ResolveSelection<SelectionSchema<T>, K> extends infer Resolved
  ? Resolved[keyof Resolved]
  : never

/** Get tables with all of the selected keys */
export type EligibleTableIds<
  Schema,
  Selected extends SelectArg<Schema>
> = Selected extends string
  ? Selected extends `${infer TableId}.${string}`
    ? TableId & TableIds<Schema>
    : TableIds<Schema> extends infer TableId
    ? TableId extends keyof Schema
      ? Schema[TableId] extends { [P in Selected]: any }
        ? TableId & TableIds<Schema>
        : never
      : never
    : never
  : keyof Selected extends infer Ref
  ? Ref extends `${infer TableId}.${string}`
    ? TableId & TableIds<Schema>
    : never
  : never

export type ResolveSelection<
  Schema,
  Selected extends SelectArg<Schema>
> = {} & Intersect<
  Selected extends string
    ? Selected extends `${infer TableId}.${infer Key}`
      ? TableId extends keyof Schema
        ? Schema[TableId] extends infer Table
          ? Key extends keyof Table
            ? { [P in Key]: Table[Key] }
            : never
          : never
        : never
      : never
    : keyof Selected extends infer Ref
    ? Ref extends keyof Selected
      ? Ref extends `${infer TableId}.${infer Key}`
        ? TableId extends keyof Schema
          ? Schema[TableId] extends infer Table
            ? Key extends keyof Table
              ? { [P in string & Selected[Ref]]: Table[Key] }
              : never
            : never
          : never
        : never
      : never
    : never
>
