import { Any, LoosePick, Remap } from '@alloc/types'
import { Countable } from './base'
import { InnerJoinFunction } from './join'
import { NominalTable } from './nominal'
import { SelectArg, Selection, SelectKeyAbsolute } from './selection'
import { WhereFunction } from './where'

export interface Table<Schema = any, Id extends TableIds<Schema> = any>
  extends NominalTable<Id>,
    TableSelection<Schema, Id>,
    Countable<ExtractRow<Schema, Id>> {
  type: 'table'
}

/** Get the table IDs from a database schema. */
export type TableIds<Schema> = string & keyof Remap<Schema>

/** Get the table ID from a table query. */
export type TableId<T> = T extends TableSelection<infer Schema, infer Id>
  ? ExtractTableId<Schema, Id>
  : never

/**
 * Appease the TypeScript gods by coercing a `TableId<T>`
 * to be assignable to `keyof Schema` type.
 */
export type ExtractTableId<Schema, T> = Extract<T, keyof Schema & string>

/**
 * A looser way of doing `Schema[K]` where `K` is not known
 * to be assignable to `keyof Schema` type.
 */
export type ExtractRow<Schema, K> = Schema[ExtractTableId<Schema, K>]

/** Get the database schema from a table query. */
export type TableSchema<T extends Table> = T extends Table<infer Schema>
  ? Schema
  : never

/** Get the table type from a table query. */
export type TableValues<T extends Table> = T extends Table<
  infer Schema,
  infer Id
>
  ? ExtractRow<Schema, Id>
  : never

/**
 * When a table query is awaited without an explicit selection,
 * this is the default selection (all columns in the table).
 */
export type TableDefaultSelect<Schema, TableId> = [Schema] extends [Any]
  ? any
  : SelectKeyAbsolute<LoosePick<Schema, TableId>>[]

export interface TableSelection<
  Schema = any,
  TableId = any,
  Selected extends SelectArg[] = TableDefaultSelect<Schema, TableId>
> extends Selection<Schema, Selected> {
  where: WhereFunction<Schema, TableSelection<Schema, TableId, Selected>>
  innerJoin: InnerJoinFunction<
    Schema,
    TableSelection<Schema, TableId, Selected>,
    Selected
  >
}
