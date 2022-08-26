import { Value } from './base'
import { CheckFunction } from './check'
import { Select } from './select'
import { SelectArgs } from './selection'
import { Table, TableIds } from './table'

export interface Database<Schema> {
  is: CheckFunction
  first<T>(query: Value<T[]>): Value<T>
  select<Selected extends SelectArgs<Schema>>(
    ...keys: Selected
  ): Select<Schema, Selected>
  table<Id extends TableIds<Schema>>(id: Id): Table<Schema, Id>
}

export type Query<Schema = any> = Select<Schema> | Table<Schema>

export type { Select, Table }
