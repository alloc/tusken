import * as z from 'zod'

type JsonPrimitive = z.infer<typeof jsonPrimitive>

const jsonPrimitive = /*#__PURE__*/ z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
])

export type Json = JsonPrimitive | { [key: string]: Json } | Json[]

export const json: z.ZodType<Json> = /*#__PURE__*/ z.lazy(() =>
  z.union([jsonPrimitive, z.array(json), z.record(json)])
)

export type ZodTable =
  | z.ZodRecord
  | z.ZodObject<Record<string, any>>
  | z.ZodUnion<
      [z.ZodObject<Record<string, any>>, ...z.ZodObject<Record<string, any>>[]]
    >

export type ZodTableColumn<T> = T extends z.ZodRecord<infer Key>
  ? Key
  : T extends z.ZodObject<Record<string, any>>
  ? ReturnType<T['keyof']>
  : T extends z.ZodUnion<infer U>
  ? z.ZodUnion<{ [P in keyof U]: ZodTableColumn<U[P]> }>
  : never


export type ZodWhereClause<T extends ZodTable> = z.ZodUnion<
  [
    z.ZodTuple<[ZodTableColumn<T>, typeof rangeOperator, z.ZodAny]>,
    z.ZodTuple<
      [ZodTableColumn<T>, z.ZodLiteral<'not'>, typeof rangeOperator, any]
    >,
    z.ZodTuple<[ZodWhereClause<T>, typeof logicOperator, ZodWhereClause<T>]>
  ]
>

export const tableColumn = <T extends ZodTable>(table: T): ZodTableColumn<T> =>
  table instanceof z.ZodRecord
    ? (table.keySchema as any)
    : table instanceof z.ZodObject
    ? table.keyof()
    : z.union(table.options.map(tableColumn) as any)

/** Postgres WHERE clause in serializable form. */
export const where = <T extends ZodTable = z.ZodRecord<z.ZodString, z.ZodAny>>(
  table = z.record(z.any()) as unknown as T
): ZodWhereClause<T> => {
  const self: any = z.lazy(() => {
    const column = tableColumn(table)
    return z.union([
      z.tuple([column, rangeOperator, z.any()]),
      z.tuple([column, z.literal('not'), rangeOperator, z.any()]),
      z.tuple([self, logicOperator, self]),
    ])
  })
  return self
}

export const rangeOperator = /*#__PURE__*/ z.enum([
  'eq',
  'gt',
  'gte',
  'lt',
  'lte',
  'like',
  'ilike',
  'in',
  'between',
])

export const logicOperator = /*#__PURE__*/ z.enum([
  'and',
  'or',
  'nand',
  'nor',
  'xor',
])
