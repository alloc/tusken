import type { Any } from '@alloc/types'
import { Expression, ExpressionType } from './expression'
import { CallExpression } from './function'
import { tokenizeColumn } from './internal/tokenize'
import type { Selectable } from './selection'
import { kColumnFrom, kColumnName, kPrimaryKey } from './symbols'
import { getColumnType, RowType, toTableName, toTableRef } from './table'
import type { QueryInput, RuntimeType, Type } from './type'
import { t } from './typesBuiltin'

export type ColumnOf<T> = string & keyof RowType<T>

/**
 * Which values can be used (without an explicit cast) when
 * assigning to a column with type `T`.
 */
export type ColumnInput<T> =
  | QueryInput<T extends Type<any, any, infer U> ? T | U : never>
  | (T extends undefined ? undefined : never)

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

/**
 * An expression is used to represent a table column in a query.
 *
 * This type is recommended for use in function signatures (rather than
 * the `ColumnRef` class), since it allows for `T` to be a union
 * without breaking assignability.
 */
export declare abstract class ColumnExpression<
  T extends Type = any,
  Name extends string = any
> extends Expression<T> {
  protected [kColumnName]: Name
}

export function makeColumnRef<T extends Type, Name extends string>(
  from: Selectable,
  name: Name
): ColumnRef<T, Name> {
  const table = toTableRef(from)
  const type = getColumnType(table, name)
  return new (ColumnRef as new (
    from: Selectable,
    name: Name,
    type: RuntimeType<T>
  ) => any)(from, name, type) as any
}

export abstract class ColumnRef<
  T extends Type = any,
  Name extends string = any
> extends ExpressionType<T> {
  protected [kColumnFrom]: Selectable
  protected [kColumnName]: Name

  constructor(from: Selectable, name: Name, type: RuntimeType<T>) {
    super(type, null, (_, ctx) => [
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

export interface ColumnRef<T extends Type, Name extends string>
  extends ColumnExpression<T, Name> {}

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
