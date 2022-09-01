import { Any } from '@alloc/types'
import { FunctionCall } from '../function'
import { ColumnRef, Selection } from '../selection'
import { kPrimaryKey } from '../symbols'
import { PrimaryKeyOf, TableRef, toTableRef, ValuesOf } from '../table'
import { BoolType, Type } from '../type'
import { CheckBuilder, CheckList, is } from './check'
import { JoinProps } from './join'

export function where<From extends (TableRef | Selection)[]>(
  props: {
    from: TableRef | Selection
    joins?: JoinProps[]
    where?: WhereExpression
  },
  compose: Where<From>
): void {
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

export type WhereExpression = CheckList | FunctionCall<BoolType>

export type Where<From extends (TableRef | Selection)[]> = (
  ...tables: WhereRefs<From>
) => WhereExpression

export type WhereRefs<From extends (TableRef | Selection)[]> = {
  [P in keyof From]: [From[P]] extends [Any]
    ? Record<string | typeof kPrimaryKey, WhereBuilder<any, any>>
    : ValuesOf<From[P]> extends infer Values
    ? {
        [K in string & keyof Values]: WhereBuilder<Values, K>
      } & {
        [kPrimaryKey]: PrimaryKeyOf<From[P]> extends infer PK
          ? WhereBuilder<Values, PK & keyof Values>
          : never
      }
    : unknown
}

export type WhereBuilder<Values, Column extends keyof Values> = unknown &
  ColumnRef<Extract<Column, string>, Extract<Values[Column], Type>> &
  CheckBuilder<Values[Column]>
