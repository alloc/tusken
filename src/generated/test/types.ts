import { makeTableRef, TableRef, Type, Value } from 'tusken'

export type user = {
  id: int4
  name?: text
}

export const user: TableRef<user, any, "id"> = makeTableRef("user", ["id", "name"], "undefined")

export type array<Element extends Type> = Element extends Type<infer Native, infer T>
  ? Type<`${Native & string}[]`, T[]>
  : never
export type bit = Type<"bit", number>
export type bool = Type<"bool", boolean>
export type box = Type<"box", [[x1: number, y1: number], [x2: number, y2: number]]>
export type bpchar = Type<"bpchar", string>
export type bytea = Type<"bytea", Buffer>
export type char = Type<"char", string>
export type cidr = Type<"cidr", string>
export type circle = Type<"circle", [radius: number, x: number, y: number]>
export type date = Type<"date", Date>
export type daterange = Type<"daterange", any>
export type float4 = Type<"float4", number>
export type float8 = Type<"float8", number>
export type inet = Type<"inet", string>
export type int2 = Type<"int2", number>
export type int4 = Type<"int4", number>
export type int4range = Type<"int4range", any>
export type int8 = Type<"int8", string>
export type int8range = Type<"int8range", any>
export type interval = Type<"interval", string>
export type json = Type<"json", object>
export type jsonb = Type<"jsonb", object>
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
export type tsrange = Type<"tsrange", any>
export type tstzrange = Type<"tstzrange", any>
export type tsvector = Type<"tsvector", string>
export type uuid = Type<"uuid", string>
export type varbit = Type<"varbit", number>
export type varchar = Type<"varchar", string>
export type xml = Type<"xml", string>

export const array = <Element extends Type>(element: Element) => new Type<any>(element.name + "[]") as array<Element>
export const bit: bit = new Type("bit")
export const bool: bool = new Type("bool")
export const box: box = new Type("box")
export const bpchar: bpchar = new Type("bpchar")
export const bytea: bytea = new Type("bytea")
export const char: char = new Type("char")
export const cidr: cidr = new Type("cidr")
export const circle: circle = new Type("circle")
export const date: date = new Type("date")
export const daterange: daterange = new Type("daterange")
export const float4: float4 = new Type("float4")
export const float8: float8 = new Type("float8")
export const inet: inet = new Type("inet")
export const int2: int2 = new Type("int2")
export const int4: int4 = new Type("int4")
export const int4range: int4range = new Type("int4range")
export const int8: int8 = new Type("int8")
export const int8range: int8range = new Type("int8range")
export const interval: interval = new Type("interval")
export const json: json = new Type("json")
export const jsonb: jsonb = new Type("jsonb")
export const line: line = new Type("line")
export const lseg: lseg = new Type("lseg")
export const macaddr: macaddr = new Type("macaddr")
export const money: money = new Type("money")
export const name: name = new Type("name")
export const numeric: numeric = new Type("numeric")
export const numrange: numrange = new Type("numrange")
export const oid: oid = new Type("oid")
export const path: path = new Type("path")
export const point: point = new Type("point")
export const polygon: polygon = new Type("polygon")
export const text: text = new Type("text")
export const time: time = new Type("time")
export const timestamp: timestamp = new Type("timestamp")
export const timestamptz: timestamptz = new Type("timestamptz")
export const timetz: timetz = new Type("timetz")
export const tsquery: tsquery = new Type("tsquery")
export const tsrange: tsrange = new Type("tsrange")
export const tstzrange: tstzrange = new Type("tstzrange")
export const tsvector: tsvector = new Type("tsvector")
export const uuid: uuid = new Type("uuid")
export const varbit: varbit = new Type("varbit")
export const varchar: varchar = new Type("varchar")
export const xml: xml = new Type("xml")