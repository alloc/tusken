import { Omit } from '@alloc/types'
import { Narrow } from '../utils/Narrow'
import { kUnknownType } from './internal/type'
import { RowRef } from './row'
import {
  RawSelection,
  ResolveSelection,
  Selectable,
  Selection,
} from './selection'
import { makeSelector } from './selector'
import { SetExpression } from './set'
import {
  kIdentityColumns,
  kNullableColumns,
  kSelectionFrom,
  kTableCast,
  kTableColumns,
  kTableName,
} from './symbols'
import { TableCast } from './tableCast'
import { ArrayParam, QueryParam, RuntimeType, SetType } from './type'
import { isSelection, isTableCast, isTableRef } from './typeChecks'

/**
 * For rows with a single-column primary key, this returns a query input
 * for that column.
 *
 * For rows with multiple-column primary keys, this returns an object
 * with a property (for each column) whose value is a query input.
 */
export type RowIdentity<T> = [IdentityColumns<T>, RowType<T>] extends [
  infer Keys,
  infer Values
]
  ? Keys extends []
    ? never
    : Keys extends [keyof Values]
    ? QueryParam<Values[Keys[0]]>
    : Keys extends (keyof Values)[]
    ? {
        [Key in Keys[number]]: QueryParam<Values[Key]>
      }
    : never
  : never

// Note: This does not support composite keys currently.
export type RowIdentityArray<T> = RowType<T> extends infer Values
  ? ArrayParam<Values[IdentityColumns<T>[0] & keyof Values]>
  : never

/**
 * Get the array of columns that represent the primary key (which may
 * be composite).
 */
export type IdentityColumns<T> = T extends TableRef<any, any, infer Columns>
  ? Columns
  : T extends Selection<any, TableRef<any, any, infer Columns>>
  ? Columns
  : []

/** Get the `SELECT *` row type. */
export type RowType<T> = T extends Selection<any, infer From>
  ? From extends SetExpression<infer Values> | TableRef<infer Values>
    ? Values
    : never
  : T extends SetExpression<infer Values> | TableRef<infer Values>
  ? Values
  : never

export function makeTableRef<
  T extends object = any,
  TableName extends string = any,
  IdentityColumns extends string[] = any,
  NullableColumn extends string = any
>(
  name: TableName,
  idColumns: IdentityColumns,
  columns: Record<string, RuntimeType>
): TableRef<T, TableName, IdentityColumns, NullableColumn> {
  const type = new (TableRef as new (
    name: TableName,
    idColumns: IdentityColumns,
    columns: Record<string, RuntimeType>
  ) => TableRef)(name, idColumns, columns)

  const select = makeSelector(type)
  const ref: any = (arg: any, selector?: (from: any) => RawSelection): any => {
    if (typeof arg == 'function') {
      return select(arg)
    }
    return new TableCast(arg, selector ? select(selector) : ref)
  }

  return Object.setPrototypeOf(ref, type)
}

export abstract class TableRef<
  T extends object = any,
  TableName extends string = any,
  IdentityColumns extends string[] = any,
  NullableColumn extends string = any
> {
  /** The unique table name */
  protected [kTableName]: TableName
  /** The primary key of this table. */
  protected [kIdentityColumns]: IdentityColumns
  /** The column names that exist in this table. */
  protected [kTableColumns]: Record<string, RuntimeType>
  /** Exists for type inference. */
  protected declare [kNullableColumns]: NullableColumn[]

  constructor(
    name: TableName,
    idColumns: IdentityColumns,
    columns: Record<string, RuntimeType>
  ) {
    this[kTableName] = name
    this[kIdentityColumns] = idColumns
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
  IdentityColumns extends string[],
  NullableColumn extends string
> extends SetType<T> {
  // Select from a table.
  <Selected extends RawSelection>(
    selector: (row: RowRef<this>) => Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, this>

  // Cast a row identifier to a "SELECT *" statement.
  (id: RowIdentity<this> | RowIdentityArray<this>): Selection<T, this>

  // Cast a row identifier to a table selection.
  <Selected extends RawSelection>(
    id: RowIdentity<this> | RowIdentityArray<this>,
    selector: (row: RowRef<this>) => Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, this>

  /**
   * Exclude specific columns from the result set.
   */
  omit<Omitted extends (string & keyof T)[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, this>
}

export function toTableRef(
  arg: TableRef | TableCast | Selection<any, TableRef>
): TableRef
export function toTableRef(arg: Selectable | TableCast): TableRef | undefined
export function toTableRef(arg: Selectable | TableCast) {
  return isTableRef(arg)
    ? arg
    : isSelection(arg)
    ? toTableRef(arg[kSelectionFrom])
    : isTableCast(arg)
    ? toTableRef(arg[kTableCast].from)
    : undefined
}

export function toTableName(
  arg: TableRef | TableCast | Selection<any, TableRef>
): string
export function toTableName(arg: Selectable | TableCast): string | undefined
export function toTableName(arg: Selectable | TableCast) {
  const tableRef = toTableRef(arg)
  return tableRef ? tableRef[kTableName] : undefined
}

export function getColumnType(table: TableRef | undefined, column: string) {
  return (table && table[kTableColumns][column]) || kUnknownType
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
> = (row: RowRef<From>) => Narrow<Selected>
