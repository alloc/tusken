import { Intersect, Remap } from '@alloc/types'
import type { ColumnRef } from './column'
import type { Expression, ExpressionType } from './expression'
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
import { t } from './type-builtin'

const kClientType = Symbol()
const kColumnInput = Symbol()

/** Postgres data type */
export abstract class Type<
  TypeName extends string = any,
  ClientType = any,
  ColumnInput = any
> {
  protected declare [kTypeName]: TypeName
  protected declare [kClientType]: ClientType
  protected declare [kColumnInput]: ColumnInput
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

/** Convert a Postgres row to a JavaScript object */
export type RowResult<T extends object> = Intersect<
  keyof T extends infer Column
    ? Column extends keyof T
      ? T[Column] extends Type<any, infer ColumnValue>
        ? { [P in Column]: ColumnValue }
        : never
      : never
    : never
> extends infer Values
  ? Remap<Values>
  : never

/** Allow both the Postgres type and its JavaScript type */
export type QueryInput<T> =
  | (T extends Type<any, infer Value> ? Value : never)
  | Expression<Extract<T, Type>> extends infer Result
  ? Result
  : never

/** Returns the Postgres `NULL` type if `T` is ever nullable */
export type ExtractNull<T> = T extends Type<infer TypeName>
  ? 'null' extends TypeName
    ? t.null
    : never
  : never

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
  return kRuntimeType in val
}

/** Is this an expression that can tokenize itself? */
export function isExpressionType(val: any): val is ExpressionType {
  return kExprProps in val
}

export function isBoolExpression(val: any): val is Expression<t.bool> {
  const exprType = isExpression(val) && val[kRuntimeType]
  return !!exprType && exprType[kTypeName] == 'bool'
}

export function isCallExpression(
  val: any,
  callee?: string
): val is CallExpression {
  const props = isExpressionType(val) && val[kExprProps]
  return props ? !callee || (props as any).callee == callee : false
}

export function isArrayType(val: any): val is Type {
  return kTypeName in val && val[kTypeName].endsWith('[]')
}
