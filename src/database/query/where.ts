import { Any, Intersect } from '@alloc/types'
import { CallExpression } from '../function'
import { is } from '../is'
import { ColumnRef, Selection } from '../selection'
import { getSetAlias, SetRef } from '../set'
import { kPrimaryKey, kTableName } from '../symbols'
import { PrimaryKeyOf, TableRef, toTableRef, ValuesOf } from '../table'
import { Type } from '../type'
import { CheckBuilder } from './check'
import { BoolExpression } from './expression'
import { JoinProps } from './join'
import { Selectable } from './select'

export function where<From extends Selectable[]>(
  props: {
    from: Selectable
    joins?: JoinProps[]
  },
  compose: Where<From>
): BoolExpression {
  const sources = [props.from].concat(props.joins?.map(join => join.from) || [])

  const refs = {} as WhereRefs<From>
  sources.forEach(from => {
    const setAlias = getSetAlias(from)
    if (setAlias) {
      refs[setAlias] = new ColumnRef(from as SetRef, setAlias)
    } else {
      const table = toTableRef(from)
      if (table) {
        refs[table[kTableName]] = new Proxy(from, {
          get: (_, column: string | typeof kPrimaryKey) =>
            column == kPrimaryKey
              ? table && table[column] !== ''
                ? is(new ColumnRef(from, table[column]))
                : undefined
              : is(new ColumnRef(from, column)),
        }) as any
      }
    }
  })

  return compose(refs)
}

export type Where<From extends Selectable[]> = (
  refs: WhereRefs<From>
) => BoolExpression

type SourceIdent<Source> = Source extends SetRef<any, infer Alias>
  ? Alias
  : Source extends CallExpression<any, infer Callee>
  ? Callee
  : Source extends TableRef<any, infer Name>
  ? Name
  : never

type WhereRef<From extends Selectable> = [From] extends [Any]
  ? any
  : From extends SetRef<infer T, infer Alias>
  ? WhereBuilder<T, Alias>
  : ValuesOf<From> extends infer Values
  ? {
      [K in string & keyof Values]-?: WhereBuilder<ColumnType<Values, K>, K>
    } & {
      [kPrimaryKey]: PrimaryKeyOf<From> extends infer PK
        ? PK extends ''
          ? never
          : WhereBuilder<ColumnType<Values, PK>, PK>
        : never
    }
  : unknown

export type WhereRefs<From extends Selectable[]> = Intersect<
  From[number] extends infer Source
    ? Source extends Selection<any, infer From>
      ? WhereRefs<[From]>
      : Source extends Selectable
      ? { [P in SourceIdent<Source>]: WhereRef<Source> }
      : never
    : never
>

export type WhereBuilder<T extends Type, Column extends string> = unknown &
  ColumnRef<T, Column> &
  CheckBuilder<T>
