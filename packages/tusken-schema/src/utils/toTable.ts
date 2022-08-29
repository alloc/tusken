export function toTable<T = any, Id extends string | number = any>(
  list: readonly T[],
  identify: (item: T) => Id
): Record<Id, T>

export function toTable<T = any, U = any, Id extends string | number = any>(
  list: readonly T[],
  identify: (item: T) => Id,
  unwrap: (item: T) => U
): Record<Id, U>

export function toTable(
  list: readonly any[],
  identify: (item: any) => string | number,
  unwrap: (item: any) => any = item => item
) {
  const table: any = {}
  list.forEach(item => {
    const id = identify(item)
    table[id] = unwrap(item)
  })
  return table
}
