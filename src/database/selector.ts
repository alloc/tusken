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
    : (((selector: any): any => {
        const pkColumn: string = (type as any)[kPrimaryKey]
        const columns: any = new Proxy(type, {
          get: (_, column: string | typeof kPrimaryKey) =>
            column == kPrimaryKey
              ? pkColumn !== ''
                ? makeColumnRef(from, pkColumn)
                : undefined
              : makeColumnRef(from, column),
        })
        return new Selection(selector(columns), from)
      }) as T)

  return Object.setPrototypeOf(from, type)
}
