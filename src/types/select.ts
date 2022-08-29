import { NominalSelection } from './nominal'
import { SelectArg, SelectArgs } from './selection'
import { Table, TableId, TableIds, TableSelection } from './table'

export interface Select<Schema = any, Selected extends SelectArgs<Schema> = any>
  extends NominalSelection<Schema, Selected> {
  type: 'select'

  from<FromId extends EligibleTableIds<Schema, Selected[number]>>(
    tableId: FromId
  ): TableSelection<Schema, FromId, ResolveSelectArgs<Selected, FromId>>

  from<From extends EligibleTables<Schema, Selected>>(
    table: From
  ): TableSelection<
    Schema,
    TableId<From>,
    ResolveSelectArgs<Selected, TableId<From>>
  >
}

/**
 * Get a table query for every table that's compatible with the given
 * `select` argument.
 */
export type EligibleTables<
  Schema,
  Selected extends SelectArgs<Schema>
> = EligibleTableIds<Schema, Selected[number]> extends infer TableId
  ? TableId extends TableIds<Schema>
    ? Table<Schema, TableId>
    : never
  : never

/**
 * Get the ID of every table that's compatible with the given `select`
 * argument.
 */
export type EligibleTableIds<
  Schema,
  Selected extends SelectArg<Schema>
> = TableIds<Schema> extends infer TableId
  ? TableId extends keyof Schema & string
    ? RawSelectedKeys<Selected, TableId> extends keyof Schema[TableId]
      ? TableId & RawSelectedTables<Schema, Selected>
      : never
    : never
  : never

/** Turn any relative `select` arguments into absolute ones. */
export type ResolveSelectArgs<
  Selected extends SelectArg[],
  TableId extends string
> = ResolveSelectArg<Selected[number], TableId>[]

/** Turn a relative `select` argument into an absolute one. */
export type ResolveSelectArg<
  Selected extends SelectArg,
  TableId extends string
> = Selected extends string
  ? ResolveSelectKey<Selected, TableId>
  : {
      [P in ResolveSelectKey<
        keyof Selected & string,
        TableId
      >]: Selected[keyof Selected]
    }

/** Turn a relative `select` key into an absolute one. */
export type ResolveSelectKey<
  Key extends string,
  TableId extends string
> = Key extends `${string}.${string}` ? Key : `${TableId}.${Key}`

/**
 * Get the property names being selected, but without the
 * table prefix.
 *
 * Pass something like `SelectArg<Schema>` as `T`.
 *
 * The `TableId` parameter exists for joins, where keys are
 * absolute and may not all come from a single table. In that
 * case, the `TableId` allows ignoring any irrelevant keys.
 */
export type RawSelectedKeys<
  Selected extends SelectArg,
  TableId extends string = string
> = Selected extends `${infer Id}.${infer Prop}`
  ? Id extends TableId
    ? Prop
    : never
  : Selected extends string
  ? Selected
  : Selected extends object
  ? RawSelectedKeys<keyof Selected & string>
  : never

export type RawSelectedTables<
  Schema,
  Selected extends SelectArg
> = Selected extends `${infer TableId}.${string}`
  ? TableId & TableIds<Schema>
  : Selected extends string
  ? unknown
  : Selected extends object
  ? RawSelectedTables<Schema, keyof Selected & string>
  : never
