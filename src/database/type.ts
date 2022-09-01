import type { Database } from './database'
import type { FunctionCall } from './function'
import type { ColumnRef } from './selection'
import {
  kColumnFrom,
  kDatabaseReserved,
  kFunctionName,
  kTableName,
} from './symbols'
import type { TableRef } from './table'

declare const kNativeType: unique symbol
declare const kDataType: unique symbol

/** Postgres data type */
export declare class Type<Native extends string = any, T = any> {
  protected declare [kNativeType]: Native
  protected declare [kDataType]: T
}

/** Allow both the Postgres type and its JavaScript type */
export type Input<T> = T extends Type<any, infer Value> ? Value | T : T

/** Convert a Postgres type to a JavaScript type */
export type Value<T> = T extends Type<any, infer V> ? V : T

export type BoolType = Type<'bool', boolean>

export type NativeType<T extends Type> = T extends Type<infer Native>
  ? Native
  : never

export type UnwrapType<T extends Type> = T extends Type<any, infer T>
  ? T
  : never

export function isDatabase(val: any): val is Database {
  return kDatabaseReserved in val
}

export function isFunctionCall(val: any): val is FunctionCall {
  return kFunctionName in val
}

export function isTableRef(val: any): val is TableRef {
  return kTableName in val
}

export function isColumnRef(val: any): val is ColumnRef {
  return kColumnFrom in val
}
