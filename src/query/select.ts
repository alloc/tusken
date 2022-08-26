import { EligibleTableIds, SelectArgs, Selection } from './selection'
import { Table, TableId, TableIds, TableSelection } from './table'

export interface Select<Schema = any, Selected extends SelectArgs<Schema> = any>
  extends Selection<Schema, Selected> {
  type: 'select'

  from<FromId extends EligibleTableIds<Schema, Selected[number]>>(
    tableId: FromId
  ): TableSelection<Schema, FromId>

  from<From extends EligibleTables<Schema, Selected>>(
    table: From
  ): TableSelection<Schema, TableId<From>>
}

export type EligibleTables<
  Schema,
  Selected extends SelectArgs<Schema>
> = EligibleTableIds<Schema, Selected[number]> extends infer TableId
  ? TableId extends TableIds<Schema>
    ? Table<Schema, TableId>
    : never
  : never
