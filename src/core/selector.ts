import { makeColumnRef } from './column'
import { makeRowRef } from './row'
import { Selection, SelectionSource } from './selection'

export function makeSelector<T extends SelectionSource>(
  from: T,
  onlyColumn?: () => string
): T {
  const selector = onlyColumn
    ? (select: any): any => {
        const column = makeColumnRef(from, onlyColumn())
        return new Selection(select(column), from)
      }
    : (select: any): any => {
        const row = makeRowRef(from)
        return new Selection(select(row), from)
      }

  return Object.setPrototypeOf(selector, from)
}
