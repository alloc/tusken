import { LoosePick, Remap } from '@alloc/types'
import { SelectArg, Selection } from './selection'
import { WhereFunction } from './where'

export interface Table<Schema = any, Id extends TableIds<Schema> = any>
  extends NominalTable<Id>,
    TableSelection<Schema, Id> {
  type: 'table'
}

/** Get the table IDs from a database schema. */
export type TableIds<Schema> = string & keyof Remap<Schema>

/** Get the table ID from a table query. */
export type TableId<T extends Table> = T extends Table<any, infer Id>
  ? Id
  : never

/** Get the database schema from a table schema. */
export type TableSchema<T extends Table> = T extends Table<infer Schema>
  ? Schema
  : never

/** Get the column names from a table schema. */
export type TableColumnIds<
  Schema,
  TableId extends string & keyof Schema
> = Schema[TableId] extends infer Table
  ? keyof Table extends infer Key
    ? Key extends string
      ? `${TableId}.${Key}`
      : never
    : never
  : never

export interface TableSelection<
  Schema = any,
  TableId extends TableIds<Schema> = any,
  Selected extends SelectArg<LoosePick<Schema, TableId>>[] = TableColumnIds<
    Schema,
    TableId
  >[]
> extends NominalTableSelection<Selected>,
    Selection<LoosePick<Schema, TableId>, Selected> {
  where: WhereFunction<this>
}

declare class NominalTable<Id> {
  private tableId: Id
}

declare const kTableSelection: unique symbol

declare class NominalTableSelection<Selected> {
  private [kTableSelection]: Selected
}
