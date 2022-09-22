export type Variadic<T> = T | readonly T[]
export type RecursiveVariadic<T> = T | readonly RecursiveVariadic<T>[]
