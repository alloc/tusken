import { Exclude } from './query/exclude'
import { Include } from './query/include'
import {
  kColumnAlias,
  kColumnFrom,
  kColumnName,
  kTableAlias,
  kTableColumns,
  kTableName,
  kTableRef,
} from './symbols'
import { Type } from './type'

declare const kPrimaryKey: unique symbol

export type PrimaryKeyOf<T> = T extends TableType<any, infer PrimaryKey>
  ? PrimaryKey
  : never

export type ColumnOf<T extends TableType> = string & keyof ValuesOf<T>

export type ValuesOf<T extends TableType> = T extends Type<any, infer Values>
  ? Values
  : never

export class ColumnRef<
  T extends TableType = any,
  Column extends ColumnOf<T> = any,
  Alias extends string = string
> {
  protected [kColumnFrom]: T
  protected [kColumnName]: Column
  protected [kColumnAlias]: Alias | undefined

  constructor(from: T, name: Column) {
    this[kColumnFrom] = from
    this[kColumnName] = name
  }

  as<A extends Alias>(alias: A): ColumnRef<T, Column, A> {
    this[kColumnAlias] = alias
    return this as any
  }
}

export class JsonColumnRef<
  T extends TableType = any,
  Column extends ColumnOf<T> = any,
  Alias extends string = string
> extends ColumnRef<T, Column, Alias> {}

export type ColumnRefs<T extends TableType> = {
  // TODO: nested access for jsonb & composite types?
  [Column in ColumnOf<T>]: Pick<ValuesOf<T>, Column> extends Type<infer Native>
    ? Native extends 'jsonb'
      ? JsonColumnRef<T, Column>
      : ColumnRef<T, Column>
    : ColumnRef<T, Column>
}

export type TableRef<T = any, PrimaryKey extends string = any> = unknown &
  TableType<T, PrimaryKey> &
  ColumnRefs<TableType<T, PrimaryKey>>

export class TableType<T = any, PrimaryKey extends string = any> //
  extends Type<'table', T>
{
  /** Exists for type inference. */
  protected [kPrimaryKey]!: PrimaryKey
  /** The unique table name */
  protected [kTableName]: string
  /** The column names that exist in this table. */
  protected [kTableColumns]: string[]

  constructor(name: string, columns: string[]) {
    super('table')
    this[kTableName] = name
    this[kTableColumns] = columns

    columns.forEach(name => {
      Object.defineProperty(this, name, {
        get: () => new ColumnRef(this, name as any),
      })
    })
  }

  /** Select only some columns from each row. */
  include<Columns extends (keyof T | ColumnRef)[]>(...columns: Column[]) {
    return new Include<this, Columns>(this, columns)
  }

  /** Select all but these columns from each row. */
  exclude<Columns extends (keyof T | ColumnRef)[]>(...columns: Columns) {
    return new Exclude<this, Columns>(this, columns)
  }
}

export class TableAlias<Ref extends TableRef = any, To extends string = any> {
  protected [kTableRef]: Ref
  protected [kTableAlias]: To

  constructor(ref: Ref, to: To) {
    this[kTableRef] = ref
    this[kTableAlias] = to
  }
}

export function isColumnRef(val: any): val is ColumnRef {
  return kColumnName in val
}

export function isTableRef(val: any): val is TableRef {
  return kTableName in val
}

export function isTableAlias(val: any): val is TableAlias {
  return kTableAlias in val
}
