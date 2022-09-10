import { Intersect, Remap } from '@alloc/types'
import type { ColumnRef } from './column'
import type { BoolExpression, Expression } from './expression'
import { CallExpression } from './function'
import type { Selection } from './selection'
import {
  kColumnFrom,
  kExprProps,
  kSelectionFrom,
  kTableName,
  kTypeArrayId,
  kTypeId,
  kTypeName,
} from './symbols'
import type { TableRef } from './table'

const kJsonType = Symbol()
const kDownCasts = Symbol()
const kRuntimeType = Symbol()

/** Postgres data type */
export abstract class Type<
  TypeName extends string = any,
  JsonType = any,
  DownCasts = any
> {
  protected declare [kTypeName]: TypeName
  protected declare [kJsonType]: JsonType
  protected declare [kDownCasts]: DownCasts
  protected declare [kRuntimeType]: RuntimeType
}

/**
 * Runtime types are plain objects with hidden properties
 * that describe the type of an expression.
 */
export declare class RuntimeType<T extends Type = any> {
  protected [kTypeId]: number
  protected [kTypeArrayId]: number | undefined
  protected [kTypeName]: string
  protected declare type: T
}

export const defineType = <T extends Type>(
  id: number,
  name: string,
  arrayId?: number
): RuntimeType<T> =>
  ({
    [kTypeId]: id,
    [kTypeArrayId]: arrayId,
    [kTypeName]: name,
  } as any)

/**
 * Expressions use this to set their runtime type metadata
 * without subclassing the `Type` class.
 */
export function setType(self: Type, type: RuntimeType) {
  self[kRuntimeType] = type
}

export let boolType: RuntimeType<Type<'bool', boolean>>

export function injectBoolType(type: RuntimeType) {
  boolType = type
}

/** Convert a Postgres type to a JavaScript type */
export type Value<T> = T extends any
  ? T extends Type<any, infer V>
    ? V
    : T
  : never

/** Convert a Postgres row to a JavaScript object */
export type Values<T extends object> = Intersect<
  keyof T extends infer Column
    ? Column extends keyof T
      ? Value<T[Column]> extends infer ColumnValue
        ? undefined extends ColumnValue
          ? { [P in Column]?: ColumnValue }
          : { [P in Column]: ColumnValue }
        : never
      : never
    : never
> extends infer Values
  ? Remap<Values>
  : never

/** Allow both the Postgres type and its JavaScript type */
export type Input<T> = T extends Type<any, infer Value> ? Value | T : T

export abstract class SetType<T extends object = any> //
  extends Type<`setof<record>`, T[], T[]> {}

export type Json = string | number | boolean | null | JsonObject | JsonArray

export interface JsonObject {
  [property: string]: Json | undefined
}

export interface JsonArray extends Array<Json> {}

export function isTableRef(val: any): val is TableRef {
  return kTableName in val
}

export function isColumnRef(val: any): val is ColumnRef {
  return kColumnFrom in val
}

export function isSelection(val: any): val is Selection {
  return kSelectionFrom in val
}

export function isExpression(val: any): val is Expression {
  return kExprProps in val
}

export function isBoolExpression(val: any): val is BoolExpression {
  return isExpression(val) && val[kExprProps].type == boolType
}

export function isCallExpression(
  val: any,
  callee?: string
): val is CallExpression {
  const props = isExpression(val) && val[kExprProps]
  return props ? !callee || props.callee == callee : false
}

export function isArrayType(val: any): val is Type {
  return kTypeName in val && val[kTypeName].endsWith('[]')
}
