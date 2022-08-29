import { Function as F } from 'ts-toolbelt'
import { Select } from './select'
import { SelectArgs } from './selection'
import { Table, TableIds } from './table'

export interface Database<Schema> {
  select<Selected extends SelectArgs<Schema>>(
    ...keys: F.Narrow<Selected>
  ): Select<Schema, Selected>
  table<Id extends TableIds<Schema>>(id: Id): Table<Schema, Id>
}

export type Query<Schema = any> = Select<Schema> | Table<Schema>

export type { Select, Table }
