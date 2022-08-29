declare const kType: unique symbol

/** Postgres type */
export class Type<Native extends string = any, T = any> {
  protected [kType]!: T
  constructor(readonly name: Native) {}
}

/** JavaScript type or Postgres type */
export type Input<T extends Type> = Value<T> | T

/** JavaScript type from Postgres type */
export type Value<T extends Type> = T extends Type<any, infer V> ? V : never
