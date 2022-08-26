/**
 * An unresolved PostgreSQL value.
 *
 * The `U` type parameter is what this value resolves to. Most of
 * the time, you shouldn't define `U` explicitly.
 */
export declare abstract class Value<T = any, U = Unwrap<T>>
  implements PromiseLike<U>
{
  /** Exists for type nominality. */
  private sql: T

  /** The command type used to resolve this value. */
  readonly type: string

  pipe<In extends any[], Out>(
    proc: (value: Value<T>, ...args: In) => Value<Out>
  ): Value<Out>

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: U) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2>
}

/** Get the unresolved type of a `Value` instance. */
export type ValueType<T extends Value> = T extends Value<infer U> ? U : never

/** Either a plain JS value or a `Value` instance. */
export type Input<T> = T | Value<T>

/**
 * Reduce the type to its basic shape, instead of having type
 * names like `ResolveSelection` obscuring the shape from the
 * developer.
 */
type Unwrap<T> = T extends readonly any[]
  ? any[] extends T
    ? Unwrap<T[number]>[]
    : { [P in keyof T]: Unwrap<T[P]> }
  : { [P in keyof T]: Unwrap<T[P]> }
