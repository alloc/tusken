import { ColumnRef, Selection } from '../selection'
import { kPrimaryKey } from '../symbols'
import { PrimaryKey, TableRef, toTableRef, ValuesOf } from '../table'
import { CheckBuilder, CheckList, is } from './check'
import { JoinProps } from './join'

export function where<From extends (TableRef | Selection)[]>(
  props: {
    from: TableRef | Selection
    joins?: JoinProps[]
    where?: CheckList
  },
  compose: Where<From>
) {
  const tables = [props.from]
    .concat(props.joins?.map(join => join.from) || [])
    .map(from => {
      const table = toTableRef(from)
      return new Proxy(table, {
        get: (_, column: string | typeof kPrimaryKey) =>
          is(
            new ColumnRef(table, column == kPrimaryKey ? table[column] : column)
          ),
      }) as any
    }) as WhereRefs<From>

  props.where = compose(...tables)
}

export type Where<From extends (TableRef | Selection)[]> = (
  ...tables: WhereRefs<From>
) => CheckList

export type WhereRefs<From extends (TableRef | Selection)[]> = {
  [P in keyof From]: [From[P]] extends [Any]
    ? Record<string | typeof kPrimaryKey, CheckBuilder<any>>
    : ValuesOf<From[P]> extends infer Values
    ? {
        [K in keyof Values]: CheckBuilder<Values[K]>
      } & {
        [kPrimaryKey]: CheckBuilder<PrimaryKey<From[P]>>
      }
    : unknown
}
