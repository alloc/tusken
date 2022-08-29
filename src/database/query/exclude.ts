import { StringKeys } from '@alloc/types'
import { Query } from '.'
import { kColumnName } from '../symbols'
import type { ColumnRef } from '../table'

export class Exclude<
  T extends Query,
  Columns extends (StringKeys<T> | ColumnRef)[]
> extends Query<OmitColumns<Awaited<T>, Columns> > {
  constructor(parent: T, columns: Columns) {
    const query = parent.clone()
    query.meta.columns.push(...getColumnNames(columns))
    super(query, null, () => [query])
  }
}

function getColumnNames(columns: (string | ColumnRef)[]): string[] {
  return columns.map(column => typeof column === 'string' ? column : column[kColumnName])
}

type ToColumns<T> = T extends ColumnRef<any, infer Column, infer Alias>
  ? string extends Alias 
    ? Column
    : Alias
    : never

type OmitColumns<T, Columns extends (keyof any | ColumnRef)[]> =
  T extends (infer U)[] ? Omit<T, Columns>[] 
