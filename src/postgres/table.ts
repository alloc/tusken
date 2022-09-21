import { LoosePick, Omit, Remap } from '@alloc/types'
import { Narrow } from '../utils/Narrow'
import { ColumnInput, ColumnRefs, ColumnType } from './column'
import {
  RawSelection,
  ResolveSelection,
  Selectable,
  Selection,
} from './selection'
import { makeSelector } from './selector'
import {
  kNullableColumns,
  kPrimaryKey,
  kSelectionFrom,
  kTableColumns,
  kTableName,
} from './symbols'
import {
  isSelection,
  isTableRef,
  QueryInput,
  RuntimeType,
  SetType,
  Type,
} from './type'

export type PrimaryKey<T> = RowType<T> extends infer Values
  ? QueryInput<Values[PrimaryKeyOf<T> & keyof Values]>
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
          ? [Extract<T, Type<'json' | 'jsonb'>>] extends [never]
            ? ColumnInput<T>
            : any
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
  const type = new (TableRef as new (
    name: TableName,
    pkColumn: PrimaryKey,
    columns: Record<string, RuntimeType>
  ) => TableRef)(name, pkColumn, columns)
  return makeSelector(type)
}

export abstract class TableRef<
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

export interface TableRef<
  T extends object,
  TableName extends string,
  PrimaryKey extends string,
  NullableColumn extends string
> extends SetType<T> {
  /**
   * Define a selection clause.
   */
  <Selected extends RawSelection>(
    selector: (row: ColumnRefs<T, PrimaryKey>) => Narrow<Selected>
  ): Selection<
    ResolveSelection<Selected>,
    TableRef<T, TableName, PrimaryKey, NullableColumn>
  >

  /**
   * Exclude specific columns from the result set.
   */
  omit<Omitted extends (string & keyof T)[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, this>
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

export function getColumnType(table: TableRef, column: string) {
  return table[kTableColumns][column]
}

/**
 * The callback type used for selecting columns from a table.
 *
 * Use this to wrap a `db.select` call while still allowing a
 * custom selector to be used.
 */
export type TableSelector<
  Selected extends RawSelection,
  From extends TableRef
> = (
  row: From extends TableRef<infer T, any, infer PK> ? ColumnRefs<T, PK> : never
) => Narrow<Selected>
