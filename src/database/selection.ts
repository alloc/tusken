import type { Any, Intersect, Pick } from '@alloc/types'
import type { CallExpression } from './function'
import { Expression } from './query/expression'
import { Selectable } from './query/select'
import type { SetRef } from './set'
import {
  kColumnFrom,
  kColumnName,
  kPrimaryKey,
  kSelectionArgs,
  kSelectionFrom,
  kSelectionType,
} from './symbols'
import { toTableName } from './table'
import { tokenizeColumn } from './tokenize'
import { ColumnType, SetType, Type } from './type'

export function makeSelector<T extends Selectable>(
  type: SetType,
  onlyColumn?: () => string
): T {
  const from = onlyColumn
    ? (((select: any): any => {
        const column = new ColumnRef(from, onlyColumn())
        return new Selection(select(column), from)
      }) as T)
    : (((selector: any): any => {
        const pkColumn: string = (type as any)[kPrimaryKey]
        const columns: any = new Proxy(type, {
          get: (_, column: string | typeof kPrimaryKey) =>
            column == kPrimaryKey
              ? pkColumn !== ''
                ? new ColumnRef(from, pkColumn)
                : undefined
              : new ColumnRef(from, column),
        })
        return new Selection(selector(columns), from)
      }) as T)

  return Object.setPrototypeOf(from, type)
}

export class Selection<T extends object = any, From extends Selectable = any> {
  protected declare [kSelectionType]: T
  protected [kSelectionArgs]: RawSelection
  protected [kSelectionFrom]: From

  constructor(args: RawSelection, from: From) {
    this[kSelectionArgs] = args
    this[kSelectionFrom] = from
  }
}

export interface Selection<T extends object> extends SetType<T> {}

export type AliasMapping = {
  [alias: string]: ColumnRef | CallExpression
}

export type RawSelection =
  | string[]
  | SetRef
  | AliasMapping
  | (ColumnRef | AliasMapping)[]

export type ResolveAliasMapping<T> = T extends AliasMapping
  ? {
      [P in keyof T]: T[P] extends CallExpression<infer ReturnType>
        ? ReturnType
        : T[P] extends ColumnRef<infer ColumnType>
        ? ColumnType
        : never
    }
  : Extract<T, object>

export type ResolveColumnSelection<T> = T extends ColumnRef<
  infer ColumnType,
  infer Column
>
  ? { [P in Column]: ColumnType }
  : ResolveAliasMapping<T>

export type ResolveSelection<T> = Intersect<
  T extends (infer Element)[]
    ? Element extends ColumnRef
      ? ResolveColumnSelection<Element>
      : ResolveAliasMapping<Element>
    : ResolveAliasMapping<T>
> extends infer U
  ? Pick<U, keyof U>
  : never

export class ColumnRef<
  T extends Type = any,
  Name extends string = any
> extends Expression<T> {
  protected [kColumnFrom]: Selectable
  protected [kColumnName]: Name

  constructor(from: Selectable, name: Name) {
    super({}, (_, ctx) => [
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

export type ColumnRefs<T, PrimaryKey extends string> = [T] extends [Any]
  ? any
  : {
      [Column in string & keyof T]-?: ColumnRef<ColumnType<T, Column>, Column>
    } & {
      [kPrimaryKey]: PrimaryKey extends ''
        ? never
        : ColumnRef<ColumnType<T, PrimaryKey>, PrimaryKey>
    }
