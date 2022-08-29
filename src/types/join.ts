import { LoosePick } from '@alloc/types'
import { Negatable } from './check'
import { NominalInnerJoin } from './nominal'
import {
  SelectArg,
  SelectedKeys,
  Selection,
  SelectKeyAbsolute,
} from './selection'
import { ExtractRow, Table, TableId, TableIds, TableSelection } from './table'

export interface InnerJoinFunction<
  Schema,
  Left extends Joinable,
  Selected extends SelectArg[]
> {
  <TableId extends TableIds<Schema>>(
    tableId: TableId,
    on: JoinRelationObject<Schema, Left, TableId>
  ): InnerJoin<
    Schema,
    Left,
    Table<Schema, TableId>,
    Selected | SelectedKeys<Table<Schema, TableId>>
  >

  <T extends TableSelection>(
    table: T,
    on: JoinRelationObject<Schema, Left, TableId<T>>
  ): InnerJoin<Schema, Left, T, JoinSelected<Left | T>>
}

export interface InnerJoin<
  Schema = any,
  Left = any,
  Right = any,
  Selected extends SelectArg[] = any
> extends NominalInnerJoin<Left | Right>,
    Selection<Schema, Selected> {
  type: 'inner join'
  innerJoin: InnerJoinFunction<Schema, this, Selected>
  and: Negatable<JoinRelationFn<Schema, this>>
  or: Negatable<JoinRelationFn<Schema, this>>
}

export type Joinable =
  | TableSelection<any, any, any>
  | InnerJoin<any, any, any, any>

/**
 * Combine two or more `SelectArg` arrays from a union
 * of `Joinable` types.
 */
export type JoinSelected<Joined> = Extract<
  Joined extends TableSelection<any, any, infer Selected>
    ? Selected[number]
    : Joined extends InnerJoin<any, any, any, infer Selected>
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
    : T extends InnerJoin<Schema, infer Left, infer Right, any>
    ? JoinKey<Schema, Left | Right, Filter>
    : never)

/** Used to declare a relation that joins two tables. */
export interface JoinRelationFn<Schema, T extends InnerJoin> {
  (condition: JoinRelationObject<Schema, LeftOf<T>, TableId<RightOf<T>>>): T
}

/** Get the left side of an `InnerJoin` type. */
export type LeftOf<T> = T extends InnerJoin<any, infer L> ? L : never

/** Get the right side of an `InnerJoin` type. */
export type RightOf<T> = T extends InnerJoin<any, any, infer R> ? R : never

export type JoinRelationObject<Schema, Left, TableId> = TableId extends string
  ? ExtractRow<Schema, TableId> extends infer T
    ? keyof T extends infer Column
      ? Column extends keyof T
        ? {
            [P in Column]: JoinKey<Schema, Left, T[Column]>
          }
        : never
      : never
    : never
  : never
