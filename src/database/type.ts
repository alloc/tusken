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

export type NativeType<T extends Type> = T extends Type<infer Native>
  ? Native
  : never

export type UnwrapType<T extends Type> = T extends Type<any, infer T>
  ? T
  : never
