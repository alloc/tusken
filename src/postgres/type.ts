import { Intersect, Remap } from '@alloc/types'
import type { Expression } from './expression'
import type { Token, TokenArray } from './internal/token'
import { kRuntimeType, kTypeArrayId, kTypeId, kTypeTokenizer } from './symbols'
import { TypeCast } from './typeCast'
import { t } from './typesBuiltin'

const kTypeName = Symbol()
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
  readonly name: string
  protected [kTypeId]: number
  protected [kTypeArrayId]: number | undefined
  protected [kTypeTokenizer]: ValueTokenizer | undefined
  /** Exists for type inference */
  protected declare compilerType: T
}

export interface RuntimeType<T extends Type> {
  (value: any): TypeCast<T>
}

export type ValueTokenizer = (value: any) => Token | TokenArray | undefined

export const defineType = <T extends Type>(
  id: number,
  name: string,
  arrayId?: number,
  tokenizer?: ValueTokenizer
): RuntimeType<T> => {
  const type: any = (value: any) => new TypeCast({ value, type })
  Object.defineProperty(type, 'name', { value: name })
  type[kTypeId] = id
  type[kTypeArrayId] = arrayId
  type[kTypeTokenizer] = tokenizer
  return type
}

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

export type StringInput<T> = Extract<QueryInput<T>, string | null>

export type ArrayInput<T> =
  | QueryInput<T>[]
  | (T extends Type<infer Name, infer Value>
      ? Type<`${Name}[]`, Value[]>
      : never)

export abstract class SetType<T extends object = any> //
  extends Type<`setof<record>`, T[], T[]> {}
