import { LoosePick, Omit, Remap } from '@alloc/types'
import { F } from 'ts-toolbelt'
import { Selectable } from './query/select'
import {
  ColumnRefs,
  makeSelector,
  RawSelection,
  ResolveSelection,
  Selection,
} from './selection'
import {
  kPrimaryKey,
  kSelectionFrom,
  kTableColumns,
  kTableName,
  kTableOptions,
} from './symbols'
import {
  ColumnType,
  Input,
  isSelection,
  isTableRef,
  SetType,
  Type,
} from './type'

export type PrimaryKey<T> = ValuesOf<T> extends infer Values
  ? Input<Values[PrimaryKeyOf<T> & keyof Values]>
  : never

export type PrimaryKeyOf<T> = T extends TableRef<any, any, infer PrimaryKey>
  ? PrimaryKey
  : T extends Selection<any, TableRef<any, any, infer PrimaryKey>>
  ? PrimaryKey
  : never

export type ColumnOf<T> = string & keyof ValuesOf<T>

export type ValuesOf<T> = T extends Type<any, infer Values>
  ? Values
  : T extends Selection<any, TableRef<infer Values>>
  ? Values
  : never

type RowInput<T extends Table> = ValuesOf<T> extends infer Row
  ? { [Column in keyof Row]: Input<ColumnType<Row, Column>> }
  : never

export type RowInsertion<T extends Table> = (
  T extends Table<any, any, infer Option>
    ? Remap<Omit<RowInput<T>, Option> & Partial<LoosePick<RowInput<T>, Option>>>
    : never
) extends infer Props
  ? Props
  : never

export type RowUpdate<T extends Table> = Partial<RowInput<T>>

export interface TableRef<
  T = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
> extends SetType<T>,
    Table<T, TableName, PrimaryKey, Option>,
    TableSelect<T, PrimaryKey> {}

type TableSelect<T, PrimaryKey extends string> = {
  <Selected extends RawSelection>(
    selector: (row: ColumnRefs<T, PrimaryKey>) => F.Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, TableRef<T, PrimaryKey>>
}

export function makeTableRef<
  T = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
>(
  name: TableName,
  columns: string[],
  pkColumn: PrimaryKey
): TableRef<T, TableName, PrimaryKey, Option> {
  const type = new Table(name, columns, pkColumn)
  return makeSelector(type)
}

class Table<
  T = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
> {
  /** Exists for type inference. */
  protected declare [kTableOptions]: Option
  /** The unique table name */
  protected [kTableName]: TableName
  /** The column names that exist in this table. */
  protected [kTableColumns]: string[]
  /** The primary key of this table. */
  protected [kPrimaryKey]: PrimaryKey

  constructor(name: TableName, columns: string[], pkColumn: PrimaryKey) {
    this[kTableName] = name
    this[kTableColumns] = columns
    this[kPrimaryKey] = pkColumn
  }

  omit<Omitted extends ColumnOf<T>[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, Extract<this, Selectable>> {
    return new Selection<any, Extract<this, Selectable>>(
      this[kTableColumns].filter(name => !omitted.includes(name as any)),
      this as any
    )
  }
}

export function toTableRef(arg: TableRef | Selection<any, TableRef>): TableRef
export function toTableRef(arg: Selectable): TableRef | undefined
export function toTableRef(arg: Selectable) {
  return isTableRef(arg)
    ? arg
    : isSelection(arg)
    ? toTableRef(arg[kSelectionFrom])
    : undefined
}

export function toTableName(arg: TableRef | Selection<any, TableRef>): string
export function toTableName(arg: Selectable): string | undefined
export function toTableName(arg: Selectable) {
  const tableRef = toTableRef(arg)
  return tableRef ? tableRef[kTableName] : undefined
}
