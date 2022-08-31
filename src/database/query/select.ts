import { FunctionCall, isFunctionCall } from '../function'
import { AliasMapping, ColumnRef, isColumnRef, Selection } from '../selection'
import {
  kColumnFrom,
  kColumnName,
  kFunctionArgs,
  kFunctionName,
  kSelectionArgs,
  kSelectionFrom,
  kTableName,
} from '../symbols'
import { isTableRef, TableRef, TableType, toTableName } from '../table'
import { CheckList } from './check'
import { renderExpression } from './expression'
import { Query } from './node'
import { RowSet } from './rowSet'
import { Token, TokenArray } from './token'
import { Where, where } from './where'

export interface SelectProps extends RowSet.Props {
  from: TableRef | Selection
  where?: CheckList
}

declare const kSelectFrom: unique symbol

export class Select<From extends (TableRef | Selection)[] = any> //
  extends RowSet<From, SelectProps>
{
  protected declare [kSelectFrom]: From
  protected tokens(props: SelectProps, ctx: Query.Context) {
    const selected = [props.from]
    const joins = props.joins.map(join => {
      selected.push(join.from)
      return ['INNER JOIN', { id: toTableName(join.from) }]
    })
    const tokens: TokenArray = [
      'SELECT',
      renderSelected(selected),
      'FROM',
      { id: toTableName(props.from) },
      joins,
    ]
    if (props.where) {
      tokens.push('WHERE', renderExpression(props.where, ctx))
    }
    return tokens
  }

  where(compose: Where<From>) {
    where(this.props, compose)
    return this
  }
}

function renderSelected(selections: (TableRef | Selection)[]) {
  return selections.length == 1
    ? isTableRef(selections[0])
      ? '*'
      : {
          join: renderColumns(selections[0]),
          with: ', ',
        }
    : {
        join: selections.map(selection => {
          if (isTableRef(selection)) {
            return selection[kTableName] + '.*'
          }
          return renderColumns(selection, true)
        }),
        with: ', ',
      }
}

function renderColumns(
  selection: Selection<any, TableType>,
  addTablePrefix = false
): TokenArray {
  const args = selection[kSelectionArgs]
  if (Array.isArray(args)) {
    const tableName = addTablePrefix && selection[kSelectionFrom][kTableName]
    return args.map(arg => {
      if (typeof arg == 'string') {
        return renderColumn(arg, tableName)
      }
      if (isColumnRef(arg)) {
        return renderColumnRef(arg, addTablePrefix)
      }
      return renderAliasMapping(arg, addTablePrefix)
    })
  }
  return renderAliasMapping(args, addTablePrefix)
}

function renderColumn(column: string, table: string | false): Token {
  return table ? { id: [table, column] } : { id: column }
}

function renderColumnRef(ref: ColumnRef, addTablePrefix = false): Token {
  return renderColumn(
    ref[kColumnName],
    addTablePrefix && ref[kColumnFrom][kTableName]
  )
}

function renderAliasMapping(
  mapping: AliasMapping,
  addTablePrefix?: boolean
): TokenArray {
  const [alias, value] = Object.entries(mapping)[0]
  return [
    isFunctionCall(value)
      ? renderFunctionCall(value, addTablePrefix)
      : renderColumnRef(value, addTablePrefix),
    { id: alias },
  ]
}

function renderFunctionCall(
  call: FunctionCall,
  addTablePrefix?: boolean
): Token {
  return {
    call: call[kFunctionName],
    args: call[kFunctionArgs].map(arg =>
      isFunctionCall(arg)
        ? renderFunctionCall(arg, addTablePrefix)
        : renderColumnRef(arg, addTablePrefix)
    ),
  }
}
