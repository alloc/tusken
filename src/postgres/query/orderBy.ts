import { Exclusive, Intersect } from '@alloc/types'
import type { ColumnRefs } from '../column'
import { Expression } from '../expression'
import { makeRowRef } from '../row'
import { Selectable, Selection, SelectionSource } from '../selection'
import { RowType, toTableName } from '../table'
import type { SourceRefId } from './where'

export function orderBy<From extends Selectable[]>(
  sources: SelectionSource[],
  selector: SortSelection<From> | SortSelector<From>
): SortSelection<From> {
  if (typeof selector !== 'function') {
    return selector
  }
  if (sources.length == 1) {
    return selector(makeRowRef<any>(sources[0]))
  }
  const refs: any = {}
  for (const source of sources) {
    const table = toTableName(source)
    if (table) {
      refs[table] = makeRowRef<any>(source)
    }
  }
  return selector(refs)
}

export type SortSelector<From extends Selectable[] = any> = (
  refs: [From] extends [[infer Source]]
    ? ColumnRefs<RowType<Source>>
    : SortRefs<From>
) => SortSelectorResult<From>

export type SortSelection<From extends Selectable[] = any> =
  | SortSelectorResult<From>
  | SortColumn<From>
  | SortOrder<SortColumn<From>>

export type SortSelectorResult<From extends Selectable[] = any> =
  | (SortExpression<From> | SortOrder<SortExpression<From>>)[]
  | SortOrder<SortExpression<From>>
  | SortExpression<From>

export type SortColumn<From extends Selectable[] = any> = string &
  keyof RowType<From[number]>

export type SortExpression<From extends Selectable[] = any> =
  | Expression
  | SortColumn<From>

export type SortOrder<T> = Exclusive<
  | {
      /** The row whose value is `>` will come first. */
      desc: T
      /**
       * The rows whose value is `NULL` may come first or last.
       * @default "first"
       */
      nulls?: 'first' | 'last'
    }
  | {
      /** The row whose value is `<` will come first. */
      asc: T
      /**
       * The rows whose value is `NULL` may come first or last.
       * @default "last"
       */
      nulls?: 'first' | 'last'
    }
>

export type SortRefs<T extends Selectable[]> = Intersect<
  T[number] extends infer From extends Selectable
    ? From extends Selection<any, infer Source>
      ? SortSource<Source>
      : SortSource<Extract<From, SelectionSource>>
    : never
>

type SortSource<T extends SelectionSource> = {
  [P in SourceRefId<T>]: ColumnRefs<RowType<T>>
}
