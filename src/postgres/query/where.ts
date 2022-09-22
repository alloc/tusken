import { Any, Intersect } from '@alloc/types'
import { isArray } from '../../utils/isArray'
import { RecursiveVariadic } from '../../utils/Variadic'
import { ColumnRef, ColumnType, makeColumnRef } from '../column'
import { Expression } from '../expression'
import { CallExpression } from '../function'
import { is } from '../is'
import { JoinProps } from '../props/join'
import { Selectable, Selection } from '../selection'
import { getSetAlias, SetRef } from '../set'
import { kPrimaryKey, kTableName } from '../symbols'
import { PrimaryKeyOf, RowType, TableRef, toTableRef } from '../table'
import { t } from '../typesBuiltin'

export function where<From extends Selectable[]>(
  props: {
    from: Selectable
    joins?: JoinProps[]
  },
  filter: Where<From>,
  where?: Expression<t.bool | t.null>
) {
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
                ? makeColumnRef(from, table[column])
                : undefined
              : makeColumnRef(from, column),
        }) as any
      }
    }
  })

  const cond = filter(joined ? refs : Object.values(refs)[0])
  return reduceCondition(where ? [where, cond] : cond)
}

function reduceCondition(
  cond: RecursiveVariadic<Expression<t.bool | t.null>>
): Expression<t.bool | t.null> {
  return isArray(cond) ? is(cond.map(reduceCondition)) : cond
}

export type Where<From extends Selectable[]> = (
  refs: WhereRefs<From>
) => RecursiveVariadic<Expression<t.bool | t.null>>

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
  ? ColumnRef<T, Alias>
  : RowType<From> extends infer Values
  ? Values extends object
    ? {
        [K in string & keyof Values]-?: ColumnRef<ColumnType<Values, K>, K>
      } & {
        [kPrimaryKey]: PrimaryKeyOf<From> extends infer PK
          ? PK extends ''
            ? never
            : PK extends string
            ? ColumnRef<ColumnType<Values, PK>, PK>
            : never
          : never
      }
    : never
  : never
