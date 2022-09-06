import type { Any } from '@alloc/types'
import { Expression } from './expression'
import { CallExpression } from './function'
import { Selectable } from './query/select'
import { kColumnFrom, kColumnName, kPrimaryKey } from './symbols'
import { RowType, toTableName } from './table'
import { tokenizeColumn } from './tokenize'
import { Input, Type } from './type'
import { t } from './type-builtin'

export type ColumnOf<T> = string & keyof RowType<T>

export type ColumnInput<T> = T extends Type<any, infer Value, infer CastFrom>
  ? Value | T | Input<CastFrom>
  : T

/**
 * Get the native Postgres type of a column.
 *
 * Optional columns have `t.null` included.
 */
export type ColumnType<Row extends object = any, Column = any> = unknown &
  (Row[Column & keyof Row] extends infer Value
    ? Extract<Value, Type> | (undefined extends Value ? t.null : never)
    : never)

export type ColumnRefs<T extends object, PrimaryKey extends string> = unknown &
  ([T] extends [Any]
    ? any
    : {
        [Column in string & keyof T]-?: ColumnRef<ColumnType<T, Column>, Column>
      } & {
        [kPrimaryKey]: PrimaryKey extends ''
          ? never
          : ColumnRef<ColumnType<T, PrimaryKey>, PrimaryKey>
      })

export type ColumnRef<
  T extends Type = any,
  Name extends string = any
> = T extends any ? ColumnExpression<T, Name> : never

export function makeColumnRef(from: Selectable, name: string) {
  return new ColumnExpression(from, name)
}

class ColumnExpression<
  T extends Type = any,
  Name extends string = any
> extends Expression<T> {
  protected [kColumnFrom]: Selectable
  protected [kColumnName]: Name

  constructor(from: Selectable, name: Name) {
    super(null, (_, ctx) => [
      tokenizeColumn(
        this[kColumnName],
        // Omit the table name if no joins exist.
        ctx.select?.joins !== undefined && toTableName(this[kColumnFrom])
      ),
    ])
    this[kColumnFrom] = from
    this[kColumnName] = name
  }
}

const kAggregate = Symbol()

/**
 * Aggregate columns cannot be selected alongside normal columns.
 *
 * You must use `GROUP BY` on the normal columns.
 */
export abstract class Aggregate<
  T extends Type = any,
  Callee extends string = any
> extends CallExpression<T, Callee> {
  protected declare [kAggregate]: true
}
