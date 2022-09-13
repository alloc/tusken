import { Intersect, Remap } from '@alloc/types'
import type { ColumnRef } from './column'
import type { BoolExpression, Expression } from './expression'
import type { CallExpression } from './function'
import type { Token, TokenArray } from './internal/token'
import type { Selection } from './selection'
import {
  kColumnFrom,
  kExprProps,
  kRuntimeType,
  kSelectionFrom,
  kTableName,
  kTypeArrayId,
  kTypeId,
  kTypeName,
  kTypeTokenizer,
} from './symbols'
import type { TableRef } from './table'

const kJsonType = Symbol()
const kDownCasts = Symbol()

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
  protected [kTypeTokenizer]: ValueTokenizer | undefined
  /** Exists for type inference */
  protected declare compilerType: T
}

export type ValueTokenizer = (value: any) => Token | TokenArray | undefined

export const defineType = <T extends Type>(
  id: number,
  name: string,
  arrayId?: number,
  tokenizer?: ValueTokenizer
): RuntimeType<T> =>
  ({
    [kTypeId]: id,
    [kTypeArrayId]: arrayId,
    [kTypeName]: name,
    [kTypeTokenizer]: tokenizer,
  } as any)

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
  const exprType = isExpression(val) && val[kExprProps].type
  return !!exprType && exprType[kTypeName] == 'bool'
}

export function isCallExpression(
  val: any,
  callee?: string
): val is CallExpression {
  const props = isExpression(val) && val[kExprProps]
  return props ? !callee || (props as any).callee == callee : false
}

export function isArrayType(val: any): val is Type {
  return kTypeName in val && val[kTypeName].endsWith('[]')
}
