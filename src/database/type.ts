import type { ColumnRef } from './column'
import type { BoolExpression, Expression, SetExpression } from './expression'
import type { Selection } from './selection'
import { kColumnFrom, kExprProps, kSelectionFrom, kTableName } from './symbols'
import type { TableRef } from './table'
import * as t from './type-builtin'

export type { t }

const kTypeName = Symbol()
const kRuntimeType = Symbol()
const kDownCasts = Symbol()

/** Postgres data type */
export abstract class Type<
  TypeName extends string = any,
  RuntimeType = any,
  DownCasts = any
> {
  protected declare [kTypeName]: TypeName
  protected declare [kRuntimeType]: RuntimeType
  protected declare [kDownCasts]: DownCasts
}

/** Convert a Postgres type to a JavaScript type */
export type Value<T> = T extends Type<any, infer V> ? V : T

/** Allow both the Postgres type and its JavaScript type */
export type Input<T> = T extends Type<any, infer Value> ? Value | T : T

export abstract class SetType<T extends object = any> //
  extends Type<`setof<record>`, T[], T[]> {}

export type Json = string | number | boolean | null | JsonObject | JsonArray

export interface JsonObject {
  [property: string]: Json | undefined
}

export interface JsonArray extends Array<Json> {}

export type toTypeName<T extends Type> = T extends Type<infer U>
  ? string extends U
    ? any
    : U
  : never

export type toRuntimeType<T extends Type> = T extends Type<any, infer U>
  ? unknown extends U
    ? any
    : U
  : never

export type toDownCasts<T extends Type> = T extends Type<any, any, infer U>
  ? unknown extends U
    ? any
    : U
  : never

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
  return isExpression(val) && val[kExprProps].type == 'bool'
}

export function isSetExpression(val: any): val is SetExpression {
  return isExpression(val) && val[kExprProps].type == 'setof'
}
