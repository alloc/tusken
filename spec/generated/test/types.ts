import { makeTableRef, TableRef, Type } from 'tusken'

export const user: TableRef<user, "id", "id"> = makeTableRef("user", ["id", "name"], "id")

export type user = {
  id: int4
  name?: text
}
export type elementof<T> = T extends array<infer E> ? E : anyelement
export type anynonarray = bit | bool | box | bpchar | bytea | char | cidr | circle | date | daterange | float4 | float8 | inet | int2 | int4 | int4range | int8 | int8range | interval | json | jsonb | line | lseg | macaddr | money | name | numeric | numrange | oid | path | point | polygon | text | time | timestamp | timestamptz | timetz | tsquery | tsrange | tstzrange | tsvector | uuid | varbit | varchar | xml
export type anyelement = anynonarray | anyarray
export type anyarray = array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>
export type anycompatiblearray = anyarray
export type anyint = int2 | int4 | int8
export type { pg_any as any }
type pg_any = anynonarray | anyarray
export type { pg_null as null }
type pg_null = Type<"null", undefined>
export type { pg_void as void }
type pg_void = Type<"void", void>
export type array<Element extends Type> = Element extends Type<infer Native, infer T>  ? Type<`${Native & string}[]`, T[]>  : never
export type array2d<Element extends Type> = array<array<Element>>
export type array3d<Element extends Type> = array<array2d<Element>>
export type bit = Type<"bit", number>
export type bool = Type<"bool", boolean>
export type box = Type<"box", [[x1: number, y1: number], [x2: number, y2: number]]>
export type bpchar = Type<"bpchar", string>
export type bytea = Type<"bytea", Buffer>
export type char = Type<"char", string>
export type cidr = Type<"cidr", string>
export type circle = Type<"circle", [radius: number, x: number, y: number]>
export type date = Type<"date", Date>
export type daterange = Type<"daterange", string>
export type float4 = Type<"float4", number>
export type float8 = Type<"float8", number>
export type inet = Type<"inet", string>
export type int2 = Type<"int2", number>
export type int4 = Type<"int4", number>
export type int4range = Type<"int4range", string>
export type int8 = Type<"int8", string>
export type int8range = Type<"int8range", string>
export type interval = Type<"interval", string>
export type json = Type<"json", any>
export type jsonb = Type<"jsonb", any>
export type line = Type<"line", any>
export type lseg = Type<"lseg", any>
export type macaddr = Type<"macaddr", string>
export type money = Type<"money", string>
export type name = Type<"name", string>
export type numeric = Type<"numeric", string>
export type numrange = Type<"numrange", string>
export type oid = Type<"oid", number>
export type path = Type<"path", any>
export type point = Type<"point", [x: number, y: number]>
export type polygon = Type<"polygon", any>
export type text = Type<"text", string>
export type time = Type<"time", string>
export type timestamp = Type<"timestamp", string>
export type timestamptz = Type<"timestamptz", string>
export type timetz = Type<"timetz", string>
export type tsquery = Type<"tsquery", any>
export type tsrange = Type<"tsrange", string>
export type tstzrange = Type<"tstzrange", string>
export type tsvector = Type<"tsvector", string>
export type uuid = Type<"uuid", string>
export type varbit = Type<"varbit", number>
export type varchar = Type<"varchar", string>
export type xml = Type<"xml", string>