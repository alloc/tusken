import * as pgArray from 'postgres-array'
import { isObject } from '../../../utils/isObject'
import { toArray } from '../../../utils/toArray'
import { makeColumnRef } from '../../column'
import { TokenArray } from '../../internal/token'
import {
  tokenizeColumn,
  tokenizeExpression,
  tokenizeJoinRef,
  tokenizeSelectables,
  tokenizeSetProps,
  tokenizeWhere,
} from '../../internal/tokenize'
import { getTupleParser } from '../../internal/tuple'
import { JoinRef } from '../../join'
import { SelectProps } from '../../props/select'
import { Query } from '../../query'
import {
  AliasMapping,
  RawColumnSelection,
  Selectable,
  Selection,
  SelectionSource,
  SelectionSources,
} from '../../selection'
import {
  kColumnName,
  kIdentityColumns,
  kRuntimeType,
  kSelectionArgs,
  kSelectionFrom,
  kTableCast,
  kTableColumns,
  kTableName,
} from '../../symbols'
import { TableRef, toTableName, toTableRef } from '../../table'
import { TableCast } from '../../tableCast'
import { RuntimeType } from '../../type'
import {
  isArrayType,
  isColumnRef,
  isSelection,
  isSetExpression,
  isTableCast,
} from '../../typeChecks'
import { buildWhereClause, FindWhere, Where } from '../where'
import { SetBase } from './set'

/**
 * For queries based on `SELECT` command, but may not return a record set.
 *
 * Note: You need to override `innerJoin` to provide a return type.
 * This can be done at the type-level with interface merging.
 */
export abstract class SelectBase<From extends Selectable[]> //
  extends SetBase<From, SelectProps>
{
  protected get sources(): SelectionSource[] {
    const { from, joins } = this.props
    const sources = [toSelectionSource(from)]
    joins?.forEach(join => {
      sources.push(toSelectionSource(join.from))
    })
    return sources
  }
  protected tokenize(props: SelectProps, ctx: Query.Context) {
    if (props.single) {
      ctx.single = true
    }

    const mainTable = toTableRef(props.from)!
    // Join aliases must not conflict.
    ctx.idents.add(mainTable[kTableName])
    // Columns can be referenced without a table prefix, so we should
    // avoid using the same name for a table alias.
    for (const column in mainTable[kTableColumns]) {
      ctx.idents.add(column)
    }

    const joins = props.joins ? [...props.joins] : []
    const selected = [props.from].concat(joins.map(join => join.from))
    const tableCasts = findTableCasts(props.from, joins, ctx)

    if (joins.length) {
      ctx.joins = joins
    }

    const tokens: TokenArray = [
      'SELECT',
      tokenizeSelectables(selected, ctx),
      'FROM',
      { id: toTableName(props.from) },
    ]
    if (joins.length) {
      tokens.push(joins.map(join => tokenizeJoinRef(join, ctx)))
    }
    if (props.where) {
      tokens.push(tokenizeWhere(props.where, ctx))
    }
    if (props.groupBy || tableCasts.length) {
      tokens.push('GROUP BY')
      if (props.groupBy) {
        tokens.push({
          list: props.groupBy.map(column => tokenizeExpression(column, ctx)),
        })
      } else {
        const table = toTableRef(props.from)
        if (table) {
          const pkColumns = table[kIdentityColumns] as string[]
          for (const pkColumn of pkColumns) {
            tokens.push(tokenizeColumn(pkColumn, table[kTableName]))
          }
        }
      }
    }
    tokens.push(tokenizeSetProps(props, ctx))
    return tokens
  }
  protected cloneProps() {
    const { joins, groupBy } = this.props
    return {
      ...this.props,
      joins: joins?.slice(),
      groupBy: groupBy?.slice(),
    }
  }

  // This method has to return `any` since we can't override
  // the type parameters of a superclass.
  innerJoin<Joined extends Selectable>(
    from: Joined,
    on: Where<[...From, Joined]>
  ): any {
    const self = this.clone()
    const join = new JoinRef('inner', from, null!)
    self.props.joins ||= []
    self.props.joins.push(join)
    join.where = buildWhereClause(self.props, on)
    return self
  }
}

export interface SelectBase<From extends Selectable[]> {
  where: From extends [infer From extends Selectable]
    ? (filter: FindWhere<SelectionSources<From>>) => this
    : (filter: Where<SelectionSources<From>>) => this
}

Object.defineProperty(SelectBase.prototype, 'where', {
  value: function where(this: SelectBase<any>, filter: any) {
    const self = this.clone()
    self.props.where = buildWhereClause(self.props, filter, self.props.where)
    return self
  },
})

function toSelectionSource(s: Selectable) {
  while (s instanceof Selection) {
    s = s[kSelectionFrom]
  }
  return s
}

function findTableCasts(
  from: Selectable,
  joins: JoinRef[],
  ctx: Query.Context
): TableCast[] {
  const tableCasts: TableCast[] = []
  if (isSelection(from) && !isSetExpression(from[kSelectionArgs])) {
    const selected = toArray(from[kSelectionArgs])
    const descend = (
      arg: string | RawColumnSelection,
      alias?: string | null
    ) => {
      if (typeof arg == 'string') return
      if (isTableCast(arg)) {
        const { pk, from, selected } = arg[kTableCast]
        const table = toTableRef(from)!

        const isColumn = isObject(pk) && isColumnRef(pk)
        const key = alias ?? (isColumn ? pk[kColumnName] : table[kTableName])

        const columns = selected
          ? getSelectedEntries(selected)
          : Object.entries(table[kTableColumns])

        const isArray = isColumn && isArrayType(pk[kRuntimeType])
        const parseTuple = getTupleParser(i => {
          return columns[i][1]
        })

        ctx.mutators.push(row => {
          let objects: any[]
          if (selected && columns.length == 1) {
            const column = columns[0][0]
            objects = row[key].map((value: any) => ({
              [column]: value,
            }))
          } else {
            objects = pgArray.parse(row[key], input => {
              const values = parseTuple(input)
              return Object.fromEntries(
                values.map((value, i) => [columns[i][0], value])
              )
            })
          }
          row[key] = isArray ? objects : objects[0]
        })

        const join = new JoinRef('left', toTableRef(arg), null!, alias)

        // Ensure the join alias is used by tokenizeTableCast.
        arg[kTableCast].from = join

        // TODO: support composite keys
        const pkColumn = makeColumnRef(join, table[kIdentityColumns][0])
        join.where = pkColumn.is.eq(pk)

        joins.push(join)
        tableCasts.push(arg)

        // Search for nested table casts.
        selected?.forEach(sel => descend(sel))
      } else if (isObject(arg)) {
        for (const key in arg) {
          descend((arg as AliasMapping)[key], key)
        }
      }
    }

    // Collect every table cast in the selection.
    selected.forEach(sel => descend(sel))

    // Ensure the join aliases are unique.
    for (const join of joins) {
      let alias: string
      const rawAlias = (alias =
        join.alias ?? (join.from as TableRef)[kTableName])
      for (let i = 2; ctx.idents.has(alias); i++) {
        alias = `${rawAlias}_${i}`
      }
      if (alias != rawAlias) {
        join.alias = alias
      }
      ctx.idents.add(alias)
    }
  }
  return tableCasts
}

function getSelectedEntries(
  selected: RawColumnSelection[]
): [string, RuntimeType][] {
  const entries: [string, RuntimeType][] = []
  for (const sel of selected) {
    if (isColumnRef(sel)) {
      entries.push([sel[kColumnName], sel[kRuntimeType]])
    } else if (isObject(sel)) {
      for (const alias in sel) {
        const value = (sel as AliasMapping)[alias]
        if (isColumnRef(value)) {
          entries.push([alias, value[kRuntimeType]])
        }
      }
    }
  }
  return entries
}
