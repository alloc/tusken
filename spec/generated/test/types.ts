import { Input, Interval, Json, Range, RowType, TableRef, Type, Values, makeTableRef } from "tusken"

export const follow: TableRef<{
  id: int4
  follower: int4
  author: int4
}, "follow", "id", "id"> = makeTableRef("follow", ["id", "follower", "author"], "id")

export const like: TableRef<{
  id: int4
  tweet: int4
  author: int4
}, "like", "id", "id"> = makeTableRef("like", ["id", "tweet", "author"], "id")

export const tweet: TableRef<{
  id: int4
  author: int4
  text: text
}, "tweet", "id", "id"> = makeTableRef("tweet", ["id", "author", "text"], "id")

export const user: TableRef<{
  id: int4
  name: text
  joinedAt: timestamptz
  bio?: text
}, "user", "id", "id" | "joinedAt"> = makeTableRef("user", ["id", "name", "joinedAt", "bio"], "id")

export interface follow extends Values<RowType<typeof follow>> {}
export interface like extends Values<RowType<typeof like>> {}
export interface tweet extends Values<RowType<typeof tweet>> {}
export interface user extends Values<RowType<typeof user>> {}

// Primitive types
export type bit = Type<"bit", number, ColumnCast<"bit">>
export type bool = Type<"bool", boolean, ColumnCast<"bool">>
export type bpchar = Type<"bpchar", string, ColumnCast<"bpchar">>
export type bytea = Type<"bytea", Buffer, ColumnCast<"bytea">>
export type char = Type<"char", string, ColumnCast<"char">>
export type cidr = Type<"cidr", string, ColumnCast<"cidr">>
export type circle = Type<"circle", { radius: number, x: number, y: number }, ColumnCast<"circle">>
export type date = Type<"date", string, ColumnCast<"date">>
export type daterange = Type<"daterange", Range<string>, ColumnCast<"daterange">>
export type float4 = Type<"float4", number, ColumnCast<"float4">>
export type float8 = Type<"float8", number, ColumnCast<"float8">>
export type inet = Type<"inet", string, ColumnCast<"inet">>
export type int2 = Type<"int2", number, ColumnCast<"int2">>
export type int4 = Type<"int4", number, ColumnCast<"int4">>
export type int4range = Type<"int4range", Range<number>, ColumnCast<"int4range">>
export type int8 = Type<"int8", string, ColumnCast<"int8">>
export type int8range = Type<"int8range", Range<string>, ColumnCast<"int8range">>
export type interval = Type<"interval", Interval, ColumnCast<"interval">>
export type json = Type<"json", Json, ColumnCast<"json">>
export type jsonb = Type<"jsonb", Json, ColumnCast<"jsonb">>
export type macaddr = Type<"macaddr", string, ColumnCast<"macaddr">>
export type money = Type<"money", string, ColumnCast<"money">>
export type name = Type<"name", string, ColumnCast<"name">>
export type numeric = Type<"numeric", string, ColumnCast<"numeric">>
export type numrange = Type<"numrange", Range<string>, ColumnCast<"numrange">>
export type oid = Type<"oid", number, ColumnCast<"oid">>
export type point = Type<"point", { x: number, y: number }, ColumnCast<"point">>
export type text = Type<"text", string, ColumnCast<"text">>
export type time = Type<"time", string, ColumnCast<"time">>
export type timestamp = Type<"timestamp", Date, ColumnCast<"timestamp">>
export type timestamptz = Type<"timestamptz", Date, ColumnCast<"timestamptz">>
export type timetz = Type<"timetz", string, ColumnCast<"timetz">>
export type tsrange = Type<"tsrange", Range<Date>, ColumnCast<"tsrange">>
export type tstzrange = Type<"tstzrange", Range<Date>, ColumnCast<"tstzrange">>
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
export type ANY = anynonarray | anyarray
export type NULL = Type<"null", undefined, undefined>
export type VOID = Type<"void", void, void>
export type anyarray = array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>
export type anycompatiblearray = anyarray
export type anynonarray = bit | bool | bpchar | bytea | char | cidr | circle | date | daterange | float4 | float8 | inet | int2 | int4 | int4range | int8 | int8range | interval | json | jsonb | macaddr | money | name | numeric | numrange | oid | point | text | time | timestamp | timestamptz | timetz | tsrange | tstzrange | tsvector | uuid | varbit | varchar | xml
export type anyelement = anynonarray | anyarray
export type { ANY as any, NULL as null, VOID as void }

// Registry types
export type { oid as regproc, oid as regprocedure, oid as regoper, oid as regoperator, oid as regclass, oid as regcollation, oid as regtype, oid as regconfig, oid as regdictionary, oid as regrole, oid as regnamespace }

export type elementof<T extends Type> = T extends array<infer E> ? E : anyelement
export type param<T extends Type> = T extends Type<infer Native> ? Input<T | ImplicitCast<Native>> : never
export type aggParam<T extends Type> = T extends Type<infer Native> ? T | ImplicitCast<Native> | NULL : never
export type record = Type<"record", { [key: string]: any }, never>

/** This maps a native type to all types that can be implicitly cast to it. */
type ImplicitCast<T extends string> = T extends "float4"
  ? int8 | int2 | int4 | numeric
  : T extends "float8"
  ? int8 | int2 | int4 | float4 | numeric
  : T extends "numeric"
  ? int8 | int2 | int4
  : T extends "int8"
  ? int2 | int4
  : T extends "int4"
  ? int2
  : T extends "oid"
  ? int8 | int2 | int4
  : T extends "bpchar"
  ? text | varchar
  : T extends "varchar"
  ? text | bpchar
  : T extends "text"
  ? bpchar | varchar | char | name
  : T extends "name"
  ? text | bpchar | varchar
  : T extends "timestamp"
  ? date
  : T extends "timestamptz"
  ? date | timestamp
  : T extends "interval"
  ? time
  : T extends "timetz"
  ? time
  : T extends "inet"
  ? cidr
  : T extends "varbit"
  ? bit
  : T extends "bit"
  ? varbit
  : never

/** Some implicit casts only take place during column assignment. */
type ColumnCast<T extends string> = ImplicitCast<T> |
  (T extends "int2"
    ? int8 | int4 | float4 | float8 | numeric
    : T extends "int4"
    ? int8 | float4 | float8 | numeric | oid
    : T extends "int8"
    ? float4 | float8 | numeric | oid
    : T extends "numeric"
    ? float4 | float8 | money
    : T extends "float4"
    ? float8
    : T extends "money"
    ? numeric | int4 | int8
    : T extends "bpchar"
    ? char | name | cidr | inet | bool | xml
    : T extends "varchar"
    ? char | name | cidr | inet | bool | xml
    : T extends "char"
    ? text | bpchar | varchar
    : T extends "date"
    ? timestamp | timestamptz
    : T extends "time"
    ? timestamp | timestamptz | interval | timetz
    : T extends "timestamp"
    ? timestamptz
    : T extends "timetz"
    ? timestamptz
    : T extends "cidr"
    ? inet
    : T extends "text"
    ? cidr | inet | bool | xml
    : T extends "jsonb"
    ? json
    : T extends "json"
    ? jsonb
    : never)