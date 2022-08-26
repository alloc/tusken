import { LoosePick } from '@alloc/types'
import { Negatable } from './check'
import { NominalInnerJoin, NominalJoinCondition } from './nominal'
import {
  SelectArg,
  SelectedKeys,
  Selection,
  SelectKeyAbsolute,
} from './selection'
import { ExtractTable, Table, TableId, TableIds, TableSelection } from './table'

export interface InnerJoinFunction<
  Schema,
  Left extends Joinable,
  Selected extends SelectArg[]
> {
  <TableId extends TableIds<Schema>>(
    tableId: TableId,
    on:
      | JoinConditionObject<Schema, Left, TableId>
      | JoinCondition<Schema, Left, TableId>
  ): InnerJoin<
    Schema,
    Left | Table<Schema, TableId>,
    Selected | SelectedKeys<Table<Schema, TableId>>
  >

  <T extends TableSelection>(
    table: T,
    on:
      | JoinConditionObject<Schema, Left, TableId<T>>
      | JoinCondition<Schema, Left, TableId<T>>
  ): InnerJoin<Schema, Left | T, JoinSelected<Left | T>>
}

export interface InnerJoin<
  Schema = any,
  Joined = any,
  Selected extends SelectArg[] = JoinSelected<Joined>
> extends NominalInnerJoin<Joined>,
    Selection<Schema, Selected> {
  type: 'inner join'
  innerJoin: InnerJoinFunction<Schema, this, Selected>
}

export type Joinable = TableSelection<any, any, any> | InnerJoin<any, any, any>

/**
 * Join two or more `SelectArg` arrays.
 */
export type JoinSelected<Joined> = Extract<
  Joined extends TableSelection<any, any, infer Selected>
    ? Selected[number]
    : Joined extends InnerJoin<any, any, infer Selected>
    ? Selected[number]
    : never,
  SelectArg
>[]

/**
 * Get the keys that are eligible for joining.
 */
export type JoinKey<Schema, T, Filter = any> = unknown &
  (T extends TableSelection<Schema, infer Id, any>
    ? SelectKeyAbsolute<LoosePick<Schema, Id>, Filter>
    : T extends InnerJoin<Schema, infer U, any>
    ? JoinKey<Schema, U, Filter>
    : never)

export type JoinConditionObject<
  Schema,
  Left extends Joinable,
  TableId
> = TableId extends string
  ? ExtractTable<Schema, TableId> extends infer T
    ? keyof T extends infer Column
      ? Column extends keyof T
        ? {
            [P in Column]: JoinKey<Schema, Left, T[Column]>
          }
        : never
      : never
    : never
  : never

/** Used to declare a condition required to join two tables. */
export interface OnFunction<Schema> {
  <Left extends Joinable = any, Id extends TableIds<Schema> = TableIds<Schema>>(
    condition: JoinConditionObject<Schema, Left, Id>
  ): JoinCondition<Schema, Left, Id>
}

export interface JoinCondition<
  Schema,
  Left extends Joinable,
  Right extends TableIds<Schema>
> extends NominalJoinCondition<Left, Right> {
  and: Negatable<OnFunction<Schema>>
  or: Negatable<OnFunction<Schema>>
}
