export const toArray = <T>(
  arg: T
): (T extends readonly (infer U)[] ? U : T)[] =>
  Array.isArray(arg) ? arg : ([arg] as any)
