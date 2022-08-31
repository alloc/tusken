import { Any, Intersect, LoosePick } from '@alloc/types'
import { Countable } from './base'
import { NominalSelection } from './nominal'
import { ExtractRow, TableIds } from './table'

export interface Selection<Schema = any, Selected extends SelectArg[] = any>
  extends NominalSelection<Schema, Selected>,
    Countable<ResolveSelection<Schema, Selected[number]>> {}

/** Get the database schema from a selection query. */
export type SelectionSchema<T extends Selection> = Intersect<
  T extends Selection<infer Schema> ? Schema : never
>

/** Get the arguments of a selection query. */
export type SelectionArgs<T extends Selection> = unknown &
  (T extends Selection<any, infer Args> ? Args : never)

/**
 * Relative and absolute keys allowed in a `select` clause.
 */
export type SelectKey<Schema> = keyof Schema extends infer TableId
  ? TableId extends string
    ? Schema[TableId & keyof Schema] extends infer Table
      ? keyof Table extends infer Key
        ? Key extends string & keyof Table
          ? Key | `${TableId}.${Key}`
          : never
        : never
      : never
    : never
  : never

/**
 * Like `SelectKey` but only absolute keys are returned.
 */
export type SelectKeyAbsolute<
  Schema,
  Filter = any
> = keyof Schema extends infer TableId
  ? TableId extends string
    ? Schema[TableId & keyof Schema] extends infer Table
      ? keyof Table extends infer Key
        ? Key extends string & keyof Table
          ? Table[Key] extends Filter
            ? `${TableId}.${Key}`
            : never
          : never
        : never
      : never
    : never
  : never

export type SelectArgs<Values> = [SelectArg<Values>, ...SelectArg<Values>[]]

export type SelectArg<Values = any> = [Values] extends [Any]
  ? string | object
  : keyof Values extends infer Key
  ? Key extends string
    ? Key | { [alias: string]: Key }
    : never
  : never

/**
 * Get the keys used in a selection.
 */
export type SelectedKeys<T, Filter = any> = T extends Selection<
  infer Schema,
  infer Args
>
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
 * Resolve the value types for the given `select` arguments.
 */
export type SelectedValues<
  Schema,
  Selected extends SelectArg
> = ResolveSelection<Schema, Selected> extends infer Resolved
  ? Resolved[keyof Resolved]
  : never

export type ResolveSelection<Schema, Selected extends SelectArg> = Intersect<
  Selected extends string
    ? Selected extends `${infer TableId}.${infer Key}`
      ? TableId extends keyof Schema
        ? Schema[TableId] extends infer Table
          ? Key extends keyof Table
            ? { [P in Key]: Table[Key] }
            : never
          : never
        : never
      : TableIds<Schema> extends infer TableId
      ? LoosePick<ExtractRow<Schema, TableId>, Selected>
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

export type ResolveTableSelection<
  Schema,
  TableId,
  Selected extends SelectArg
> = Intersect<
  Selected extends string
    ? ResolveSelectKey<Schema, TableId, Selected>
    : Selected extends object
    ? ResolveSelectAlias<Schema, TableId, Selected>
    : never
>

/** ⚠️ This assumes `Selected` is not a union! */
type ResolveSelectKey<
  Schema,
  TableId,
  Selected extends string
> = Selected extends `${infer Id}.${infer Key}`
  ? Id extends TableId
    ? LoosePick<ExtractRow<Schema, TableId>, Key>
    : never
  : LoosePick<ExtractRow<Schema, TableId>, Selected>

/** ⚠️ This assumes `Selected` is not a union! */
type ResolveSelectAlias<Schema, TableId, Selected extends object> = {
  [P in Selected[keyof Selected] & string]: ResolveSelectKey<
    Schema,
    TableId,
    Selected & string
  >
}
