import { makeColumnRef } from './column'
import { Selection, SelectionSource } from './selection'
import { kPrimaryKey } from './symbols'
import { SetType } from './type'

export function makeSelector<T extends SelectionSource>(
  type: SetType,
  onlyColumn?: () => string
): T {
  const from = onlyColumn
    ? (((select: any): any => {
        const column = makeColumnRef(from, onlyColumn())
        return new Selection(select(column), from)
      }) as T)
    : (((select: any): any => {
        const columns = makeColumnRefs(from)
        return new Selection(select(columns), from)
      }) as T)

  return Object.setPrototypeOf(from, type)
}

export function makeColumnRefs(from: SelectionSource): any {
  const pkColumn: string = (from as any)[kPrimaryKey]
  return new Proxy(from, {
    get: (_, column: string | typeof kPrimaryKey) =>
      column == kPrimaryKey
        ? pkColumn !== ''
          ? makeColumnRef(from, pkColumn)
          : undefined
        : makeColumnRef(from, column),
  })
}
