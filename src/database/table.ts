import { LoosePick, Omit, Remap } from '@alloc/types'
import { Narrow } from '../utils/Narrow'
import { ColumnInput, ColumnOf, ColumnRefs, ColumnType } from './column'
import { Selectable } from './query/select'
import {
  RawSelection,
  ResolveSelection,
  Selection,
  SelectionSource,
} from './selection'
import { makeSelector } from './selector'
import {
  kNullableColumns,
  kPrimaryKey,
  kSelectionFrom,
  kTableColumns,
  kTableName,
} from './symbols'
import { Input, isSelection, isTableRef, SetType } from './type'

export type PrimaryKey<T> = RowType<T> extends infer Values
  ? Input<Values[PrimaryKeyOf<T> & keyof Values]>
  : never

export type PrimaryKeyOf<T> = T extends TableRef<any, any, infer PrimaryKey>
  ? PrimaryKey
  : T extends Selection<any, TableRef<any, any, infer PrimaryKey>>
  ? PrimaryKey
  : never

/** Get the `SELECT *` row type. */
export type RowType<T> = T extends Selection<any, infer From>
  ? From extends SetType<infer Values>
    ? Values
    : never
  : T extends SetType<infer Values>
  ? Values
  : never

type RowInput<T extends TableRef> = RowType<T> extends infer Row
  ? { [Column in keyof Row]: ColumnInput<ColumnType<Row, Column>> }
  : never

export type RowInsertion<T extends TableRef> = (
  T extends TableRef<any, any, any, infer Option>
    ? Omit<RowInput<T>, Option> & Partial<LoosePick<RowInput<T>, Option>>
    : never
) extends infer Props
  ? Remap<Props>
  : never

export type RowUpdate<T extends TableRef> = Partial<RowInput<T>>

export interface TableRef<
  T extends object = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  NullableColumn extends string = any
> extends TableType<T, TableName, PrimaryKey, NullableColumn>,
    TableSelect<T, PrimaryKey> {}

type TableSelect<T, PrimaryKey extends string> = {
  <Selected extends RawSelection>(
    selector: (row: ColumnRefs<T, PrimaryKey>) => Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, TableRef<T, PrimaryKey>>
}

export function makeTableRef<
  T extends object = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  NullableColumn extends string = any
>(
  name: TableName,
  columns: string[],
  pkColumn: PrimaryKey
): TableRef<T, TableName, PrimaryKey, NullableColumn> {
  const type = new TableType(name, columns, pkColumn)
  return makeSelector(type)
}

class TableType<
  T extends object = any,
  TableName extends string = any,
  PrimaryKey extends string = any,
  NullableColumn extends string = any
> {
  /** The unique table name */
  protected [kTableName]: TableName
  /** The column names that exist in this table. */
  protected [kTableColumns]: string[]
  /** The primary key of this table. */
  protected [kPrimaryKey]: PrimaryKey
  /** Exists for type inference. */
  protected declare [kNullableColumns]: NullableColumn[]

  constructor(name: TableName, columns: string[], pkColumn: PrimaryKey) {
    this[kTableName] = name
    this[kTableColumns] = columns
    this[kPrimaryKey] = pkColumn
  }

  omit<Omitted extends ColumnOf<T>[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, Extract<this, SelectionSource>> {
    return new Selection<any, Extract<this, SelectionSource>>(
      this[kTableColumns].filter(name => !omitted.includes(name as any)),
      this as any
    )
  }
}

interface TableType<T extends object> extends SetType<T> {}

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
