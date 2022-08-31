/**
 * Convert `arg` to an array and ensure the returned array
 * never contains `undefined` values.
 */
export const toArray = <T>(
  arg: T
): (T extends readonly (infer U)[] ? U : T)[] =>
  arg !== undefined ? (Array.isArray(arg) ? arg : ([arg] as any)) : []
