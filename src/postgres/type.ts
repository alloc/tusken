import { Intersect, Remap } from '@alloc/types'
import type { Expression } from './expression'
import type { Token, TokenArray } from './internal/token'
import { kRuntimeType, kTypeArrayId, kTypeId, kTypeTokenizer } from './symbols'
import { TypeCast } from './typeCast'
import { t } from './typesBuiltin'

const kHostType = Symbol()
const kClientType = Symbol()
const kColumnInput = Symbol()

/**
 * Used to map a Postgres type to the types it can be implicitly
 * down-casted to. The generated client adds to this interface.
 */
export interface ImplicitTypeCoercion {}

/** Postgres data type */
export abstract class Type<
  HostType extends string = any,
  ClientType = any,
  ColumnInput = any
> {
  protected declare [kHostType]: HostType
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
  readonly isOptional: boolean
  protected [kTypeId]: number
  protected [kTypeArrayId]: number | undefined
  protected [kTypeTokenizer]: ValueTokenizer | undefined
  /** Exists for type inference */
  protected declare compilerType: T
}

export interface RuntimeType<T extends Type> {
  <Input>(input: Input): TypeCast<
    Input extends null | undefined
      ? t.null
      : T | (Input extends Expression<infer T> ? ExtractNull<T> : never)
  >
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
  type.isOptional = false
  type[kTypeId] = id
  type[kTypeArrayId] = arrayId
  type[kTypeTokenizer] = tokenizer
  return type
}

/**
 * An optional type is not the same as a nullable type.  \
 * The former may be non-nullable but still be generated or set
 * to a default value if omitted from an insertion.
 */
export function defineOptionalType<T extends Type>(
  arg: RuntimeType<T>
): typeof arg {
  if (arg.isOptional) {
    return arg
  }
  const type: any = Object.assign(arg.bind(null), arg)
  Object.defineProperty(type, 'name', { value: arg.name })
  type.isOptional = true
  return type
}

/** Convert a Postgres row to a JavaScript object */
export type RowResult<T extends object> = Intersect<
  keyof T extends infer Column
    ? Column extends keyof T
      ? { [P in Column]: ColumnResult<T[Column]> }
      : never
    : never
> extends infer Values
  ? Remap<Values>
  : never

type ColumnResult<T> = T extends Type<any, infer Value>
  ? Value
  : T extends object
  ? T extends (infer Element)[]
    ? ColumnResult<Element>[]
    : { [P in keyof T]: ColumnResult<T[P]> }
  : never

/** Allow both the Postgres type and its JavaScript type */
export type QueryInput<T> =
  | (T extends Type<any, infer ClientType> ? ClientType : never)
  | Expression<Extract<T, Type>> extends infer Result
  ? Result
  : never

/** Cast a Postgres type name into its implicit coercion types */
export type ImplicitCast<HostType extends string> =
  HostType extends keyof ImplicitTypeCoercion
    ? ImplicitTypeCoercion[HostType]
    : never

/** Similar to `QueryInput` but implicit type coercion is allowed */
export type QueryParam<T> = QueryInput<
  T extends Type<infer HostType> ? T | ImplicitCast<HostType> : never
>

/**
 * Aggregate functions must be given Postgres expressions. For any
 * aggregate function, these expressions can evaluate to null, since
 * that merely results in an empty result set.
 */
export type AggregateParam<T extends Type> = Expression<
  T extends Type<infer HostType> ? T | ImplicitCast<HostType> | t.null : never
>

/** Returns the Postgres `NULL` type if `T` is ever nullable */
export type ExtractNull<T> = T extends Type<infer HostType>
  ? 'null' extends HostType
    ? t.null
    : never
  : never

export type StringInput<T> = Extract<QueryInput<T>, string | null>

export type ArrayInput<T> =
  | QueryInput<T>[]
  | (T extends Type<infer HostType, infer ClientType>
      ? QueryInput<Type<`${HostType}[]`, ClientType[]>>
      : never)

export type ArrayParam<T> = ArrayInput<
  T extends Type<infer HostType> ? T | ImplicitCast<HostType> : never
>

export abstract class SetType<T extends object = any> //
  extends Type<`setof<record>`, T[], T[]> {}
