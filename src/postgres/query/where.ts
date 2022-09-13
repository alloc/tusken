import { Any, Intersect } from '@alloc/types'
import { CheckBuilder } from '../check'
import { ColumnRef, ColumnType, makeColumnRef } from '../column'
import { BoolExpression, Expression } from '../expression'
import { CallExpression } from '../function'
import { is } from '../is'
import { JoinProps } from '../join'
import { Selectable, Selection } from '../selection'
import { getSetAlias, SetRef } from '../set'
import { kPrimaryKey, kTableName } from '../symbols'
import { PrimaryKeyOf, RowType, TableRef, toTableRef } from '../table'
import { Type } from '../type'
import { t } from '../type-builtin'

export function where<From extends Selectable[]>(
  props: {
    from: Selectable
    joins?: JoinProps[]
  },
  filter: Where<From>
): BoolExpression {
  const joined = props.joins?.map(join => join.from)
  const sources = [props.from].concat(joined || [])

  const refs = {} as WhereRefs<From>
  sources.forEach(from => {
    const setAlias = getSetAlias(from)
    if (setAlias) {
      refs[setAlias] = makeColumnRef(from as SetRef, setAlias)
    } else {
      const table = toTableRef(from)
      if (table) {
        refs[table[kTableName]] = new Proxy(from, {
          get: (_, column: string | typeof kPrimaryKey) =>
            column == kPrimaryKey
              ? table && table[column] !== ''
                ? is(makeColumnRef(from, table[column]))
                : undefined
              : is(makeColumnRef(from, column)),
        }) as any
      }
    }
  })

  return filter(joined ? refs : Object.values(refs)[0])
}

export type Where<From extends Selectable[]> = (
  refs: WhereRefs<From>
) => Expression<t.bool | t.null>

export type WhereRefs<From extends Selectable[]> = [From] extends [Any]
  ? Record<string, any>
  : From extends [Selectable]
  ? WhereRef<From[0]>
  : Intersect<WhereRefsObject<From>>

type WhereRefsObject<From extends Selectable[]> =
  From[number] extends infer Source
    ? Source extends Selection<any, infer From>
      ? WhereRefsObject<[From]>
      : Source extends Selectable
      ? { [P in SourceRefId<Source>]: WhereRef<Source> }
      : never
    : never

export type SourceRefId<Source> = Source extends SetRef<any, infer Alias>
  ? Alias
  : Source extends CallExpression<any, infer Callee>
  ? Callee
  : Source extends TableRef<any, infer Name>
  ? Name
  : never

type WhereRef<From extends Selectable> = [From] extends [Any]
  ? WhereRef<TableRef>
  : From extends SetRef<infer T, infer Alias>
  ? WhereBuilder<T, Alias>
  : RowType<From> extends infer Values
  ? Values extends object
    ? {
        [K in string & keyof Values]-?: WhereBuilder<ColumnType<Values, K>, K>
      } & {
        [kPrimaryKey]: PrimaryKeyOf<From> extends infer PK
          ? PK extends ''
            ? never
            : PK extends string
            ? WhereBuilder<ColumnType<Values, PK>, PK>
            : never
          : never
      }
    : never
  : never

export type WhereBuilder<T extends Type, Column extends string> = unknown &
  ColumnRef<T, Column> &
  CheckBuilder<T>
