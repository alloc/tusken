import { LoosePick, Omit, Remap } from '@alloc/types'
import { F } from 'ts-toolbelt'
import {
  ColumnRef,
  ColumnRefs,
  RawSelection,
  ResolveSelection,
  Selection
} from './selection'
import {
  kPrimaryKey,
  kSelectionFrom,
  kTableColumns,
  kTableName,
  kTableOptions
} from './symbols'
import { Input, Type } from './type'

export type PrimaryKey<T> = ValuesOf<T> extends infer Values
  ? Values[PrimaryKeyOf<T> & keyof Values]
  : never

export type PrimaryKeyOf<T> = T extends TableType<any, infer PrimaryKey>
  ? PrimaryKey
  : T extends Selection<any, TableRef<any, infer PrimaryKey>>
  ? PrimaryKey
  : never

export type ColumnOf<T> = string & keyof ValuesOf<T>

export type ValuesOf<T> = T extends Type<any, infer Values>
  ? Values
  : T extends Selection<any, TableRef<infer Values>>
  ? Values
  : never

type RowInput<T extends TableType> = ValuesOf<T> extends infer Values
  ? { [P in keyof Values]: Input<Extract<Values[P], Type>> }
  : never

export type RowInsertion<T extends TableType> = (
  T extends TableType<any, any, infer Option>
    ? Remap<Omit<RowInput<T>, Option> & Partial<LoosePick<RowInput<T>, Option>>>
    : never
) extends infer Props
  ? Props
  : never

export type RowUpdate<T extends TableType> = Partial<RowInput<T>>

export type TableRef<
  T = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
> = unknown &
  TableType<T, PrimaryKey, Option> & {
    <Selected extends RawSelection>(
      compose: (row: ColumnRefs<T>) => F.Narrow<Selected>
    ): Selection<ResolveSelection<Selected>, TableRef<T, PrimaryKey>>
  }

export function makeTableRef<
  T = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
>(
  name: string,
  columns: string[],
  pkColumn: PrimaryKey
): TableRef<T, PrimaryKey, Option> {
  const type = new TableType(name, columns, pkColumn)
  const columnRefs: any = Object.create(null)
  for (const column of columns) {
    Object.defineProperty(columnRefs, column, {
      get: () => new ColumnRef(ref, column),
    })
  }
  const ref = ((compose: any): any =>
    new Selection(compose(columnRefs), ref)) as TableRef
  return Object.setPrototypeOf(ref, type)
}

export class TableType<
  T = any,
  PrimaryKey extends string = any,
  Option extends keyof T | '' = any
> {
  /** Exists for type inference. */
  protected declare [kTableOptions]: Option
  /** The unique table name */
  protected [kTableName]: string
  /** The column names that exist in this table. */
  protected [kTableColumns]: string[]
  /** The primary key of this table. */
  protected [kPrimaryKey]: PrimaryKey

  constructor(name: string, columns: string[], pkColumn: PrimaryKey) {
    this[kTableName] = name
    this[kTableColumns] = columns
    this[kPrimaryKey] = pkColumn
  }

  omit<Omitted extends ColumnOf<T>[]>(
    ...omitted: Omitted
  ): Selection<Omit<T, Omitted[number]>, this> {
    return new Selection(
      this[kTableColumns].filter(name => !omitted.includes(name as any)),
      this
    )
  }
}

export interface TableType<T> extends Type<'setof', T> {}

export function isTableRef(val: any): val is TableRef {
  return kTableName in val
}

export function toTableRef(arg: TableRef | Selection): TableRef {
  return isTableRef(arg) ? arg : arg[kSelectionFrom]
}

export function toTableName(arg: TableRef | Selection): string {
  return toTableRef(arg)[kTableName]
}
