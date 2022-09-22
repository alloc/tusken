import { LoosePick, Remap } from '@alloc/types'
import { ColumnInput, ColumnRefs, ColumnType, makeColumnRef } from './column'
import { SelectionSource } from './selection'
import { kPrimaryKey, kSelectionFrom } from './symbols'
import { PrimaryKeyOf, RowRef, RowType, TableRef } from './table'
import { Type } from './type'

export abstract class RowSelection<From extends SelectionSource = any> {
  protected declare [kSelectionFrom]: From
}

export function makeRowRef<From extends SelectionSource>(
  from: From
): RowRef<From> {
  const pkColumn: string = (from as any)[kPrimaryKey]
  return new Proxy(Object.create(RowSelection.prototype), {
    get: (_, column: string | typeof kPrimaryKey | typeof kSelectionFrom) =>
      column == kSelectionFrom
        ? from
        : column == kPrimaryKey
        ? pkColumn
          ? makeColumnRef(from, pkColumn)
          : undefined
        : makeColumnRef(from, column),
  })
}

export type RowRef<T extends SelectionSource> = RowSelection<T> &
  ColumnRefs<RowType<T>, PrimaryKeyOf<T>>

type RowInput<T extends TableRef> = RowType<T> extends infer Row
  ? Row extends object
    ? {
        [Column in keyof Row]: ColumnType<Row, Column> extends infer T
          ? [Extract<T, Type<'json' | 'jsonb'>>] extends [never]
            ? ColumnInput<T>
            : any
          : never
      }
    : never
  : never

export type RowInsertion<T extends TableRef> = (
  T extends TableRef<any, any, any, infer Option>
    ? Omit<RowInput<T>, Option> & Partial<LoosePick<RowInput<T>, Option>>
    : never
) extends infer Props
  ? Remap<Props>
  : never

export type RowUpdate<T extends TableRef> = Partial<RowInput<T>>
