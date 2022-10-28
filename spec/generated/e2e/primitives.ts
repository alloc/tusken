import { defineOptionalType, defineType, tokenizeJson, Expression, Interval, Json, QueryInput, Range, Type } from "tusken"
import { array, array2d, array3d } from "tusken/array"

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

export const option = defineOptionalType
export const bit = /*#__PURE__*/ defineType<bit>(1560, "bit", 1561)
export const bool = /*#__PURE__*/ defineType<bool>(16, "bool", 1000)
export const bpchar = /*#__PURE__*/ defineType<bpchar>(1042, "bpchar", 1014)
export const bytea = /*#__PURE__*/ defineType<bytea>(17, "bytea", 1001)
export const char = /*#__PURE__*/ defineType<char>(18, "char", 1002)
export const cidr = /*#__PURE__*/ defineType<cidr>(650, "cidr", 651)
export const circle = /*#__PURE__*/ defineType<circle>(718, "circle", 719)
export const date = /*#__PURE__*/ defineType<date>(1082, "date", 1182)
export const daterange = /*#__PURE__*/ defineType<daterange>(3912, "daterange", 3913)
export const float4 = /*#__PURE__*/ defineType<float4>(700, "float4", 1021)
export const float8 = /*#__PURE__*/ defineType<float8>(701, "float8", 1022)
export const inet = /*#__PURE__*/ defineType<inet>(869, "inet", 1041)
export const int2 = /*#__PURE__*/ defineType<int2>(21, "int2", 1005)
export const int4 = /*#__PURE__*/ defineType<int4>(23, "int4", 1007)
export const int4range = /*#__PURE__*/ defineType<int4range>(3904, "int4range", 3905)
export const int8 = /*#__PURE__*/ defineType<int8>(20, "int8", 1016)
export const int8range = /*#__PURE__*/ defineType<int8range>(3926, "int8range", 3927)
export const interval = /*#__PURE__*/ defineType<interval>(1186, "interval", 1187)
export const json = /*#__PURE__*/ defineType<json>(114, "json", 199, tokenizeJson)
export const jsonb = /*#__PURE__*/ defineType<jsonb>(3802, "jsonb", 3807, tokenizeJson)
export const macaddr = /*#__PURE__*/ defineType<macaddr>(829, "macaddr", 1040)
export const money = /*#__PURE__*/ defineType<money>(790, "money", 791)
export const name = /*#__PURE__*/ defineType<name>(19, "name", 1003)
export const numeric = /*#__PURE__*/ defineType<numeric>(1700, "numeric", 1231)
export const numrange = /*#__PURE__*/ defineType<numrange>(3906, "numrange", 3907)
export const oid = /*#__PURE__*/ defineType<oid>(26, "oid", 1028)
export const point = /*#__PURE__*/ defineType<point>(600, "point", 1017)
export const text = /*#__PURE__*/ defineType<text>(25, "text", 1009)
export const time = /*#__PURE__*/ defineType<time>(1083, "time", 1183)
export const timestamp = /*#__PURE__*/ defineType<timestamp>(1114, "timestamp", 1115)
export const timestamptz = /*#__PURE__*/ defineType<timestamptz>(1184, "timestamptz", 1185)
export const timetz = /*#__PURE__*/ defineType<timetz>(1266, "timetz", 1270)
export const tsrange = /*#__PURE__*/ defineType<tsrange>(3908, "tsrange", 3909)
export const tstzrange = /*#__PURE__*/ defineType<tstzrange>(3910, "tstzrange", 3911)
export const tsvector = /*#__PURE__*/ defineType<tsvector>(3614, "tsvector", 3643)
export const uuid = /*#__PURE__*/ defineType<uuid>(2950, "uuid", 2951)
export const varbit = /*#__PURE__*/ defineType<varbit>(1562, "varbit", 1563)
export const varchar = /*#__PURE__*/ defineType<varchar>(1043, "varchar", 1015)
export const xml = /*#__PURE__*/ defineType<xml>(142, "xml", 143)

// Array types
export { array, array2d, array3d }

// Pseudo types
export type ANY = anynonarray | anyarray
export type NULL = Type<"null", null, null>
export type VOID = Type<"void", void, void>
export type anyarray = array<anynonarray> | array2d<anynonarray> | array3d<anynonarray>
export type anycompatiblearray = anyarray
export type anynonarray = bit | bool | bpchar | bytea | char | cidr | circle | date | daterange | float4 | float8 | inet | int2 | int4 | int4range | int8 | int8range | interval | json | jsonb | macaddr | money | name | numeric | numrange | oid | point | text | time | timestamp | timestamptz | timetz | tsrange | tstzrange | tsvector | uuid | varbit | varchar | xml
export type anyelement = anynonarray | anyarray
export type { ANY as any, NULL as null, VOID as void }

// Registry types
export type { oid as regproc, oid as regprocedure, oid as regoper, oid as regoperator, oid as regclass, oid as regcollation, oid as regtype, oid as regconfig, oid as regdictionary, oid as regrole, oid as regnamespace }

export type elementof<T extends Type> = T extends array<infer E> ? E : anyelement
export type param<T extends Type> = QueryInput<T extends Type<infer Native> ? T | ImplicitCast<Native> : never>
export type aggParam<T extends Type> = Expression<T extends Type<infer Native> ? T | ImplicitCast<Native> | NULL : never>
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