import { Any, Intersect, Pick } from '@alloc/types'
import { FunctionCall } from './function'
import {
  kColumnFrom,
  kColumnName,
  kSelectionArgs,
  kSelectionFrom,
  kSelectionType,
} from './symbols'
import { TableType } from './table'
import { NativeType, Type, UnwrapType } from './type'

export class Selection<T extends object = any, From extends TableType = any> {
  /** Exists for type inference. */
  protected [kSelectionType]!: T
  protected [kSelectionArgs]: RawSelection
  protected [kSelectionFrom]: From

  constructor(args: RawSelection, from: From) {
    this[kSelectionArgs] = args
    this[kSelectionFrom] = from
  }
}

export type AliasMapping = {
  [alias: string]: ColumnRef | FunctionCall
}

export type RawSelection = AliasMapping | (ColumnRef | AliasMapping)[]

export type ResolveAliasMapping<T> = T extends AliasMapping
  ? {
      [P in keyof T]: T[P] extends FunctionCall<infer ReturnType>
        ? ReturnType
        : T[P] extends ColumnRef<any, infer ColumnType>
        ? ColumnType
        : never
    }
  : Extract<T, object>

export type ResolveColumnSelection<T> = T extends ColumnRef<
  infer Column,
  infer ColumnType
>
  ? { [P in Column]: ColumnType }
  : ResolveAliasMapping<T>

export type ResolveSelection<T> = Intersect<
  T extends (infer Element)[]
    ? Element extends ColumnRef
      ? ResolveColumnSelection<Element>
      : ResolveAliasMapping<Element>
    : ResolveAliasMapping<T>
> extends infer U
  ? Pick<U, keyof U>
  : never

export class ColumnRef<Name extends string = any, T extends Type = any> {
  protected [kColumnFrom]: TableType
  protected [kColumnName]: Name

  constructor(from: TableType, name: Name) {
    this[kColumnFrom] = from
    this[kColumnName] = name
  }
}

export interface ColumnRef<Name extends string = any, T extends Type = any>
  extends Type<NativeType<T>, UnwrapType<T>> {}

export type ColumnRefs<T> = [T] extends [Any]
  ? any
  : {
      [Column in keyof T]-?: T[Column] extends infer ColumnType
        ? ColumnRef<Extract<Column, string>, Extract<ColumnType, Type>>
        : never
    }
