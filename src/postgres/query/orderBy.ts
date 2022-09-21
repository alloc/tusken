import { Exclusive, Intersect } from '@alloc/types'
import type { ColumnRefs } from '../column'
import { Expression } from '../expression'
import {
  Selectable,
  SelectedRow,
  Selection,
  SelectionSource,
} from '../selection'
import { makeColumnRefs } from '../selector'
import { PrimaryKeyOf, RowType, TableRef, toTableName } from '../table'
import type { SourceRefId } from './where'

export function orderBy<From extends Selectable[]>(
  sources: SelectionSource[],
  selector: SortSelection<From> | SortSelector<From>
): SortSelection<From> {
  if (typeof selector !== 'function') {
    return selector
  }
  if (sources.length == 1) {
    return selector(makeColumnRefs(sources[0]))
  }
  const refs: any = {}
  for (const source of sources) {
    const table = toTableName(source)
    if (table) {
      refs[table] = makeColumnRefs(source)
    }
  }
  return selector(refs)
}

export type SortSelector<From extends Selectable[] = any> = (
  refs: [From] extends [[infer Source]]
    ? ColumnRefs<RowType<Source>, PrimaryKeyOf<Source>>
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
  keyof SelectedRow<From[number]>

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

export type SortRefs<From extends Selectable[]> = Intersect<
  SortRefsObject<From>
>

type SortRefsObject<From extends Selectable[]> =
  From[number] extends infer Source
    ? Source extends Selection<any, infer From>
      ? SortRefsObject<[From]>
      : Source extends Selectable
      ? {
          [P in SourceRefId<Source>]: Source extends TableRef
            ? ColumnRefs<RowType<Source>, PrimaryKeyOf<Source>>
            : any
        }
      : never
    : never
