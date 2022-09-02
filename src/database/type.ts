import { CallExpression } from './function'
import type {
  BoolExpression,
  Expression,
  SetExpression,
} from './query/expression'
import type { ColumnRef, Selection } from './selection'
import type { SetRef } from './set'
import { kColumnFrom, kExprProps, kSelectionFrom, kTableName } from './symbols'
import type { TableRef } from './table'

const kNativeType = Symbol()
const kDataType = Symbol()
const kColumnCast = Symbol()
const kAggregate = Symbol()

/** Postgres data type */
export declare class Type<Native extends string = any, T = any, ColumnT = any> {
  protected declare [kNativeType]: Native
  protected declare [kDataType]: T
  /** This type is compatible with these column types. */
  protected declare [kColumnCast]: ColumnT
}

/** Allow both the Postgres type and its JavaScript type */
export type Input<T> = T extends Type<any, infer Value> ? Value | T : T

export type Output<
  T extends Type,
  Callee extends string = any
> = T extends SetType<infer Row>
  ? SetRef<Row, Callee>
  : CallExpression<T, Callee>

/** Convert a Postgres type to a JavaScript type */
export type Value<T> = T extends Type<any, infer V> ? V : T

export type NullType = Type<'null', undefined>
export type BoolType = Type<'bool', boolean>

export abstract class SetType<T extends Type = any> //
  extends Type<`setof<${NativeType<T>}>`, UnwrapType<T>, UnwrapColumnType<T>> {}

/**
 * Aggregate columns cannot be selected alongside normal columns.
 *
 * You must use `GROUP BY` on the normal columns.
 */
export abstract class Aggregate<
  T extends Type = any,
  Callee extends string = any
> extends CallExpression<T, Callee> {
  protected declare [kAggregate]: true
}

/**
 * Get the native Postgres type of a column.
 *
 * Optional columns have `NullType` included.
 */
export type ColumnType<Row = any, Column = any> = unknown &
  (Row[Column & keyof Row] extends infer Value
    ? Extract<Value, Type> | (undefined extends Value ? NullType : never)
    : never)

export type NativeType<T extends Type> = T extends Type<infer Native>
  ? Native
  : never

export type UnwrapType<T extends Type> = T extends Type<any, infer T>
  ? T
  : never

export type UnwrapColumnType<T extends Type> = T extends Type<any, any, infer T>
  ? T
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
