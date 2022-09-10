import { LoosePick, Omit, Remap } from '@alloc/types'
import { Narrow } from '../utils/Narrow'
import { ColumnInput, ColumnRefs, ColumnType } from './column'
import { Selectable } from './query/select'
import { RawSelection, ResolveSelection, Selection } from './selection'
import { makeSelector } from './selector'
import {
  kNullableColumns,
  kPrimaryKey,
  kSelectionFrom,
  kTableColumns,
  kTableName,
} from './symbols'
import {
  Input,
  isSelection,
  isTableRef,
  RuntimeType,
  SetType,
  Type,
} from './type'

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
  ? Row extends object
    ? {
        [Column in keyof Row]: ColumnType<Row, Column> extends infer T
          ? T extends Type<'json' | 'jsonb'>
            ? any
            : ColumnInput<T>
          : never
      }
    : never
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
    TableSelector<T, PrimaryKey> {
  /**
   * Exclude specific columns from the result set.
   */
  omit<Omitted extends (string & keyof T)[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, this>
}

type TableSelector<T extends object, PrimaryKey extends string> = {
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
  pkColumn: PrimaryKey,
  columns: Record<string, RuntimeType>
): TableRef<T, TableName, PrimaryKey, NullableColumn> {
  const type = new TableType(name, pkColumn, columns)
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
  /** The primary key of this table. */
  protected [kPrimaryKey]: PrimaryKey
  /** The column names that exist in this table. */
  protected [kTableColumns]: Record<string, RuntimeType>
  /** Exists for type inference. */
  protected declare [kNullableColumns]: NullableColumn[]

  constructor(
    name: TableName,
    pkColumn: PrimaryKey,
    columns: Record<string, RuntimeType>
  ) {
    this[kTableName] = name
    this[kPrimaryKey] = pkColumn
    this[kTableColumns] = columns
  }

  omit(...omitted: string[]): Selection {
    return new Selection(
      Object.keys(this[kTableColumns]).filter(
        name => !omitted.includes(name as any)
      ),
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
