import { ColumnRef, Input, SetType, TableRef, Type, makeTableRef } from "tusken"

export const user: TableRef<user, "user", "id", "id" | "joinedAt"> = makeTableRef("user", ["id", "name", "joinedAt", "bio"], "id")
export const tweet: TableRef<tweet, "tweet", "id", "id"> = makeTableRef("tweet", ["id", "author", "text"], "id")
export const like: TableRef<like, "like", "id", "id"> = makeTableRef("like", ["id", "tweet", "author"], "id")
export const follow: TableRef<follow, "follow", "id", "id"> = makeTableRef("follow", ["id", "follower", "author"], "id")

export type user = {
  id: int4
  name: text
  joinedAt: timestamptz
  bio?: text
}
export type tweet = {
  id: int4
  author: int4
  text: text
}
export type like = {
  id: int4
  tweet: int4
  author: int4
}
export type follow = {
  id: int4
  follower: int4
  author: int4
}

// Primitive types
export type bit = Type<"bit", number, ColumnCast<"bit">>
export type bool = Type<"bool", boolean, ColumnCast<"bool">>
export type box = Type<"box", [[x1: number, y1: number], [x2: number, y2: number]], ColumnCast<"box">>
export type bpchar = Type<"bpchar", string, ColumnCast<"bpchar">>
export type bytea = Type<"bytea", Buffer, ColumnCast<"bytea">>
export type char = Type<"char", string, ColumnCast<"char">>
export type cidr = Type<"cidr", string, ColumnCast<"cidr">>
export type circle = Type<"circle", [radius: number, x: number, y: number], ColumnCast<"circle">>
export type date = Type<"date", Date, ColumnCast<"date">>
export type daterange = Type<"daterange", string, ColumnCast<"daterange">>
export type float4 = Type<"float4", number, ColumnCast<"float4">>
export type float8 = Type<"float8", number, ColumnCast<"float8">>
export type inet = Type<"inet", string, ColumnCast<"inet">>
export type int2 = Type<"int2", number, ColumnCast<"int2">>
export type int4 = Type<"int4", number, ColumnCast<"int4">>
export type int4range = Type<"int4range", string, ColumnCast<"int4range">>
export type int8 = Type<"int8", string, ColumnCast<"int8">>
export type int8range = Type<"int8range", string, ColumnCast<"int8range">>
export type interval = Type<"interval", string, ColumnCast<"interval">>
export type json = Type<"json", any, ColumnCast<"json">>
export type jsonb = Type<"jsonb", any, ColumnCast<"jsonb">>
export type line = Type<"line", any, ColumnCast<"line">>
export type lseg = Type<"lseg", any, ColumnCast<"lseg">>
export type macaddr = Type<"macaddr", string, ColumnCast<"macaddr">>
export type money = Type<"money", string, ColumnCast<"money">>
export type name = Type<"name", string, ColumnCast<"name">>
export type numeric = Type<"numeric", string, ColumnCast<"numeric">>
export type numrange = Type<"numrange", string, ColumnCast<"numrange">>
export type oid = Type<"oid", number, ColumnCast<"oid">>
export type path = Type<"path", any, ColumnCast<"path">>
export type point = Type<"point", [x: number, y: number], ColumnCast<"point">>
export type polygon = Type<"polygon", any, ColumnCast<"polygon">>
export type text = Type<"text", string, ColumnCast<"text">>
export type time = Type<"time", string, ColumnCast<"time">>
export type timestamp = Type<"timestamp", string, ColumnCast<"timestamp">>
export type timestamptz = Type<"timestamptz", string, ColumnCast<"timestamptz">>
export type timetz = Type<"timetz", string, ColumnCast<"timetz">>
export type tsquery = Type<"tsquery", any, ColumnCast<"tsquery">>
export type tsrange = Type<"tsrange", string, ColumnCast<"tsrange">>
export type tstzrange = Type<"tstzrange", string, ColumnCast<"tstzrange">>
export type tsvector = Type<"tsvector", string, ColumnCast<"tsvector">>
export type uuid = Type<"uuid", string, ColumnCast<"uuid">>
export type varbit = Type<"varbit", number, ColumnCast<"varbit">>
export type varchar = Type<"varchar", string, ColumnCast<"varchar">>
export type xml = Type<"xml", string, ColumnCast<"xml">>

// Array types
export type array<Element extends Type> = Element extends Type<infer Native, infer T, infer ColumnT>  ? Type<`${Native}[]`, T[], ColumnT[]>  : never
export type array2d<Element extends Type> = array<array<Element>>
export type array3d<Element extends Type> = array<array2d<Element>>

// Pseudo types
export type anynonarray = bit | bool | box | bpchar | bytea | char | cidr | circle | date | daterange | float4 | float8 | inet | int2 | int4 | int4range | int8 | int8range | interval | json | jsonb | line | lseg | macaddr | money | name | numeric | numrange | oid | path | point | polygon | text | time | timestamp | timestamptz | timetz | tsquery | tsrange | tstzrange | tsvector | uuid | varbit | varchar | xml
export type anyelement = anynonarray | anyarray
export type anyarray = array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>
export type anycompatiblearray = anyarray
export type anyint = int2 | int4 | int8
export type { pg_any as any }
type pg_any = anynonarray | anyarray
export type { pg_null as null }
type pg_null = Type<"null", undefined, never>
export type { pg_void as void }
type pg_void = Type<"void", void, never>

export type elementof<T extends Type> = T extends array<infer E> ? E : anyelement
export type setof<T extends Type> = SetType<T>
export type param<T extends Type> = T extends Type<infer Native> ? Input<T | ImplicitCast<Native>> : never
export type aggParam<T extends Type> = T extends Type<infer Native> ? T | ImplicitCast<Native> | pg_null : never
export type record = Type<"record", { [key: string]: any }, never>
export type regtype = oid

type ImplicitCast<T extends string> = T extends "int8"
  ? float4 | float8 | numeric | oid | regtype
  : T extends "int2"
  ? int8 | int4 | float4 | float8 | numeric | oid | regtype
  : T extends "int4"
  ? int8 | float4 | float8 | numeric | oid | regtype
  : T extends "float4"
  ? float8
  : T extends "numeric"
  ? float4 | float8
  : T extends "oid"
  ? regtype
  : T extends "regtype"
  ? oid
  : T extends "text"
  ? bpchar | varchar | name
  : T extends "bpchar"
  ? text | varchar | name
  : T extends "varchar"
  ? text | bpchar | name
  : T extends "char"
  ? text
  : T extends "name"
  ? text
  : T extends "date"
  ? timestamp | timestamptz
  : T extends "time"
  ? interval | timetz
  : T extends "timestamp"
  ? timestamptz
  : T extends "cidr"
  ? inet
  : T extends "bit"
  ? varbit
  : T extends "varbit"
  ? bit
  : never

/** Some implicit casts only take place during column assignment. */
type ColumnCast<T extends string> = ImplicitCast<T> |
  (T extends "int8"
    ? int2 | int4 | money
    : T extends "int4"
    ? int2 | money
    : T extends "float4"
    ? int8 | int2 | int4 | numeric
    : T extends "float8"
    ? int8 | int2 | int4 | float4 | numeric
    : T extends "numeric"
    ? int8 | int2 | int4 | money
    : T extends "money"
    ? numeric
    : T extends "oid"
    ? int8 | int4
    : T extends "regtype"
    ? int8 | int4
    : T extends "char"
    ? bpchar | varchar
    : T extends "name"
    ? bpchar | varchar
    : T extends "text"
    ? char
    : T extends "bpchar"
    ? char
    : T extends "varchar"
    ? char
    : T extends "timestamp"
    ? date | time
    : T extends "timestamptz"
    ? date | time | timestamp | timetz
    : T extends "interval"
    ? time
    : T extends "timetz"
    ? time
    : T extends "point"
    ? box
    : T extends "path"
    ? polygon
    : T extends "box"
    ? polygon
    : T extends "polygon"
    ? path
    : T extends "inet"
    ? cidr | text | varchar | bpchar
    : T extends "cidr"
    ? text | varchar | bpchar
    : T extends "bool"
    ? text | varchar | bpchar
    : T extends "xml"
    ? text | varchar | bpchar
    : T extends "json"
    ? jsonb
    : T extends "jsonb"
    ? json
    : never)