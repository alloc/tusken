import { defineFunction, defineSetFunction, Aggregate, CallExpression, SetRef } from 'tusken'
import * as t from './types'

export const abbrev: {
  (arg: t.param<t.inet | t.cidr>): CallExpression<t.text, "abbrev">
  (arg: t.param<t.inet | t.cidr | t.null>): CallExpression<t.text | t.null, "abbrev">
} = defineFunction("abbrev")

export const abs: {
  <T extends t.float4 | t.float8 | t.int8 | t.int4 | t.int2 | t.numeric | t.null>(arg: T): CallExpression<T, "abs">
} = defineFunction("abs")

export const acos: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "acos">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "acos">
} = defineFunction("acos")

export const acosd: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "acosd">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "acosd">
} = defineFunction("acosd")

export const acosh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "acosh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "acosh">
} = defineFunction("acosh")

export const age: {
  (arg1: t.param<t.timestamptz | t.timestamp>, arg2: t.param<t.timestamptz | t.timestamp>): CallExpression<t.interval, "age">
  (arg1: t.param<t.timestamptz | t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.timestamp | t.null>): CallExpression<t.interval | t.null, "age">
  (arg: t.param<t.timestamptz | t.timestamp>): CallExpression<t.interval, "age">
  (arg: t.param<t.timestamptz | t.timestamp | t.null>): CallExpression<t.interval | t.null, "age">
} = defineFunction("age")

export const amvalidate: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "amvalidate">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "amvalidate">
} = defineFunction("amvalidate", "bool")

export const anyarray_send: {
  (arg: t.param<t.anyarray>): CallExpression<t.bytea, "anyarray_send">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.bytea | t.null, "anyarray_send">
} = defineFunction("anyarray_send")

export const anycompatiblearray_send: {
  (arg: t.param<t.anycompatiblearray>): CallExpression<t.bytea, "anycompatiblearray_send">
  (arg: t.param<t.anycompatiblearray | t.null>): CallExpression<t.bytea | t.null, "anycompatiblearray_send">
} = defineFunction("anycompatiblearray_send")

export const anytextcat: {
  (arg1: t.param<t.anynonarray>, arg2: t.param<t.text>): CallExpression<t.text, "anytextcat">
  (arg1: t.param<t.anynonarray | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "anytextcat">
} = defineFunction("anytextcat")

export const area: {
  (arg: t.param<t.circle>): CallExpression<t.float8, "area">
  (arg: t.param<t.circle | t.null>): CallExpression<t.float8 | t.null, "area">
} = defineFunction("area")

/** 
 * A function which collects its input values into an array
 * 
 * @see https://pgpedia.info/a/array_agg.html
 */
export const array_agg: {
  /** 
   * A function which collects its input values into an array
   * 
   * @see https://pgpedia.info/a/array_agg.html
   */
  (arg: t.aggParam<t.anynonarray>): Aggregate<t.anyarray, "array_agg">
  (arg: t.aggParam<t.anyarray>): Aggregate<t.anyarray, "array_agg">
} = defineFunction("array_agg")

/** 
 * A function for appending to an array
 * 
 * @see https://pgpedia.info/a/array_append.html
 */
export const array_append: {
  /** 
   * A function for appending to an array
   * 
   * @see https://pgpedia.info/a/array_append.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>): CallExpression<t.anycompatiblearray, "array_append">
} = defineFunction("array_append")

/** 
 * A function for concatenating arrays
 * 
 * @see https://pgpedia.info/a/array_cat.html
 */
export const array_cat: {
  /** 
   * A function for concatenating arrays
   * 
   * @see https://pgpedia.info/a/array_cat.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.anycompatiblearray, "array_cat">
} = defineFunction("array_cat")

/** 
 * A function returning a text representation of an array's dimensions
 * 
 * @see https://pgpedia.info/a/array_dims.html
 */
export const array_dims: {
  /** 
   * A function returning a text representation of an array's dimensions
   * 
   * @see https://pgpedia.info/a/array_dims.html
   */
  (arg: t.param<t.anyarray>): CallExpression<t.text, "array_dims">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.text | t.null, "array_dims">
} = defineFunction("array_dims")

export const array_eq: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_eq">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_eq">
} = defineFunction("array_eq", "bool")

/** 
 * A function returning a pre-filled array
 * 
 * @see https://pgpedia.info/a/array_fill.html
 */
export const array_fill: {
  /** 
   * A function returning a pre-filled array
   * 
   * @see https://pgpedia.info/a/array_fill.html
   */
  (arg1: t.param<t.anyelement>, arg2: t.param<t.array<t.int4>>): CallExpression<t.anyarray, "array_fill">
  (arg1: t.param<t.anyelement>, arg2: t.param<t.array<t.int4>>, arg3: t.param<t.array<t.int4>>): CallExpression<t.anyarray, "array_fill">
} = defineFunction("array_fill")

export const array_ge: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_ge">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_ge">
} = defineFunction("array_ge", "bool")

export const array_gt: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_gt">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_gt">
} = defineFunction("array_gt", "bool")

export const array_larger: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.anyarray, "array_larger">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.anyarray | t.null, "array_larger">
} = defineFunction("array_larger")

export const array_le: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_le">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_le">
} = defineFunction("array_le", "bool")

/** 
 * A function returning the length of an array dimension
 * 
 * @see https://pgpedia.info/a/array_length.html
 */
export const array_length: {
  /** 
   * A function returning the length of an array dimension
   * 
   * @see https://pgpedia.info/a/array_length.html
   */
  (arg1: t.param<t.anyarray>, arg2: t.param<t.int4>): CallExpression<t.int4, "array_length">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "array_length">
} = defineFunction("array_length")

/** 
 * A function returning the lower bound of an requested array dimension
 * 
 * @see https://pgpedia.info/a/array_lower.html
 */
export const array_lower: {
  /** 
   * A function returning the lower bound of an requested array dimension
   * 
   * @see https://pgpedia.info/a/array_lower.html
   */
  (arg1: t.param<t.anyarray>, arg2: t.param<t.int4>): CallExpression<t.int4, "array_lower">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "array_lower">
} = defineFunction("array_lower")

export const array_lt: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_lt">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_lt">
} = defineFunction("array_lt", "bool")

/** 
 * A function returning the number of dimensions of an array
 * 
 * @see https://pgpedia.info/a/array_ndims.html
 */
export const array_ndims: {
  /** 
   * A function returning the number of dimensions of an array
   * 
   * @see https://pgpedia.info/a/array_ndims.html
   */
  (arg: t.param<t.anyarray>): CallExpression<t.int4, "array_ndims">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.int4 | t.null, "array_ndims">
} = defineFunction("array_ndims")

export const array_ne: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "array_ne">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "array_ne">
} = defineFunction("array_ne", "bool")

/** 
 * A function returning the first occurrence of a value in an array
 * 
 * @see https://pgpedia.info/a/array_position.html
 */
export const array_position: {
  /** 
   * A function returning the first occurrence of a value in an array
   * 
   * @see https://pgpedia.info/a/array_position.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>): CallExpression<t.int4, "array_position">
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>, arg3: t.param<t.int4>): CallExpression<t.int4, "array_position">
} = defineFunction("array_position")

/** 
 * A function returning each occurrence of a value in an array
 * 
 * @see https://pgpedia.info/a/array_positions.html
 */
export const array_positions: {
  /** 
   * A function returning each occurrence of a value in an array
   * 
   * @see https://pgpedia.info/a/array_positions.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>): CallExpression<t.array<t.int4>, "array_positions">
} = defineFunction("array_positions")

/** 
 * A function for prepending to an array
 * 
 * @see https://pgpedia.info/a/array_prepend.html
 */
export const array_prepend: {
  /** 
   * A function for prepending to an array
   * 
   * @see https://pgpedia.info/a/array_prepend.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<t.elementof<T>>, arg2: t.param<T>): CallExpression<t.anycompatiblearray, "array_prepend">
} = defineFunction("array_prepend")

/** 
 * A function for removing elements from an array
 * 
 * @see https://pgpedia.info/a/array_remove.html
 */
export const array_remove: {
  /** 
   * A function for removing elements from an array
   * 
   * @see https://pgpedia.info/a/array_remove.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>): CallExpression<t.anycompatiblearray, "array_remove">
} = defineFunction("array_remove")

/** 
 * A function for replacing elements in an array
 * 
 * @see https://pgpedia.info/a/array_replace.html
 */
export const array_replace: {
  /** 
   * A function for replacing elements in an array
   * 
   * @see https://pgpedia.info/a/array_replace.html
   */
  <T extends t.anycompatiblearray>(arg1: t.param<T>, arg2: t.param<t.elementof<T>>, arg3: t.param<t.elementof<T>>): CallExpression<t.anycompatiblearray, "array_replace">
} = defineFunction("array_replace")

export const array_send: {
  (arg: t.param<t.anyarray>): CallExpression<t.bytea, "array_send">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.bytea | t.null, "array_send">
} = defineFunction("array_send")

export const array_smaller: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.anyarray, "array_smaller">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.anyarray | t.null, "array_smaller">
} = defineFunction("array_smaller")

/** 
 * A function for converting an array to JSON
 * 
 * @see https://pgpedia.info/a/array_to_json.html
 */
export const array_to_json: {
  /** 
   * A function for converting an array to JSON
   * 
   * @see https://pgpedia.info/a/array_to_json.html
   */
  (arg: t.param<t.anyarray>): CallExpression<t.json, "array_to_json">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.json | t.null, "array_to_json">
  (arg1: t.param<t.anyarray>, arg2: t.param<t.bool>): CallExpression<t.json, "array_to_json">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.json | t.null, "array_to_json">
} = defineFunction("array_to_json")

/** 
 * A function converting an array to a string
 * 
 * @see https://pgpedia.info/a/array_to_string.html
 */
export const array_to_string: {
  /** 
   * A function converting an array to a string
   * 
   * @see https://pgpedia.info/a/array_to_string.html
   */
  (arg1: t.param<t.anyarray>, arg2: t.param<t.text>): CallExpression<t.text, "array_to_string">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "array_to_string">
  (arg1: t.param<t.anyarray>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.text, "array_to_string">
} = defineFunction("array_to_string")

/** 
 * A function for converting an array to a tsvector
 * 
 * @see https://pgpedia.info/a/array_to_tsvector.html
 */
export const array_to_tsvector: {
  /** 
   * A function for converting an array to a tsvector
   * 
   * @see https://pgpedia.info/a/array_to_tsvector.html
   */
  (arg: t.param<t.array<t.text>>): CallExpression<t.tsvector, "array_to_tsvector">
  (arg: t.param<t.array<t.text> | t.null>): CallExpression<t.tsvector | t.null, "array_to_tsvector">
} = defineFunction("array_to_tsvector")

/** 
 * A function returning the upper bound of an requested array dimension
 * 
 * @see https://pgpedia.info/a/array_upper.html
 */
export const array_upper: {
  /** 
   * A function returning the upper bound of an requested array dimension
   * 
   * @see https://pgpedia.info/a/array_upper.html
   */
  (arg1: t.param<t.anyarray>, arg2: t.param<t.int4>): CallExpression<t.int4, "array_upper">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "array_upper">
} = defineFunction("array_upper")

export const arraycontained: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "arraycontained">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "arraycontained">
} = defineFunction("arraycontained", "bool")

export const arraycontains: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "arraycontains">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "arraycontains">
} = defineFunction("arraycontains", "bool")

export const arrayoverlap: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.bool, "arrayoverlap">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.bool | t.null, "arrayoverlap">
} = defineFunction("arrayoverlap", "bool")

/** 
 * A function returning the numeric code of a character
 * 
 * @see https://pgpedia.info/a/ascii.html
 */
export const ascii: {
  /** 
   * A function returning the numeric code of a character
   * 
   * @see https://pgpedia.info/a/ascii.html
   */
  (arg: t.param<t.text>): CallExpression<t.int4, "ascii">
  (arg: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "ascii">
} = defineFunction("ascii")

export const asin: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "asin">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "asin">
} = defineFunction("asin")

export const asind: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "asind">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "asind">
} = defineFunction("asind")

export const asinh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "asinh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "asinh">
} = defineFunction("asinh")

export const atan: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "atan">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "atan">
} = defineFunction("atan")

export const atan2: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "atan2">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "atan2">
} = defineFunction("atan2")

export const atan2d: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "atan2d">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "atan2d">
} = defineFunction("atan2d")

export const atand: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "atand">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "atand">
} = defineFunction("atand")

export const atanh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "atanh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "atanh">
} = defineFunction("atanh")

export const avg: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "avg">
  <T extends t.numeric | t.float8 | t.interval>(arg: T): Aggregate<T, "avg">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "avg">
} = defineFunction("avg")

export const binary_upgrade_create_empty_extension: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.bool>, arg4: t.param<t.text>, arg5: t.param<t.array<t.oid>>, arg6: t.param<t.array<t.text>>, arg7: t.param<t.array<t.text>>): CallExpression<t.void, "binary_upgrade_create_empty_extension">
} = defineFunction("binary_upgrade_create_empty_extension")

export const binary_upgrade_set_missing_value: {
  (arg1: t.param<t.oid>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.void, "binary_upgrade_set_missing_value">
} = defineFunction("binary_upgrade_set_missing_value")

export const binary_upgrade_set_next_array_pg_type_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_array_pg_type_oid">
} = defineFunction("binary_upgrade_set_next_array_pg_type_oid")

export const binary_upgrade_set_next_heap_pg_class_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_heap_pg_class_oid">
} = defineFunction("binary_upgrade_set_next_heap_pg_class_oid")

export const binary_upgrade_set_next_index_pg_class_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_index_pg_class_oid">
} = defineFunction("binary_upgrade_set_next_index_pg_class_oid")

export const binary_upgrade_set_next_multirange_array_pg_type_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_multirange_array_pg_type_oid">
} = defineFunction("binary_upgrade_set_next_multirange_array_pg_type_oid")

export const binary_upgrade_set_next_multirange_pg_type_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_multirange_pg_type_oid">
} = defineFunction("binary_upgrade_set_next_multirange_pg_type_oid")

export const binary_upgrade_set_next_pg_authid_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_pg_authid_oid">
} = defineFunction("binary_upgrade_set_next_pg_authid_oid")

export const binary_upgrade_set_next_pg_enum_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_pg_enum_oid">
} = defineFunction("binary_upgrade_set_next_pg_enum_oid")

export const binary_upgrade_set_next_pg_type_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_pg_type_oid">
} = defineFunction("binary_upgrade_set_next_pg_type_oid")

export const binary_upgrade_set_next_toast_pg_class_oid: {
  (arg: t.param<t.oid>): CallExpression<t.void, "binary_upgrade_set_next_toast_pg_class_oid">
} = defineFunction("binary_upgrade_set_next_toast_pg_class_oid")

export const binary_upgrade_set_record_init_privs: {
  (arg: t.param<t.bool>): CallExpression<t.void, "binary_upgrade_set_record_init_privs">
} = defineFunction("binary_upgrade_set_record_init_privs")

export const bit: {
  (arg1: t.param<t.int4 | t.int8>, arg2: t.param<t.int4>): CallExpression<t.bit, "bit">
  (arg1: t.param<t.int4 | t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "bit">
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>, arg3: t.param<t.bool>): CallExpression<t.bit, "bit">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.bit | t.null, "bit">
} = defineFunction("bit")

/** 
 * A function which returns the bitwise AND of all bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_and.html
 */
export const bit_and: {
  /** 
   * A function which returns the bitwise AND of all bits in the provided parameter
   * 
   * @see https://pgpedia.info/b/bit_and.html
   */
  <T extends t.int2 | t.int4 | t.int8 | t.bit>(arg: T): Aggregate<T, "bit_and">
} = defineFunction("bit_and")

export const bit_count: {
  (arg: t.param<t.bytea | t.bit>): CallExpression<t.int8, "bit_count">
  (arg: t.param<t.bytea | t.bit | t.null>): CallExpression<t.int8 | t.null, "bit_count">
} = defineFunction("bit_count")

/** 
 * A function returning the number of bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_length.html
 */
export const bit_length: {
  /** 
   * A function returning the number of bits in the provided parameter
   * 
   * @see https://pgpedia.info/b/bit_length.html
   */
  (arg: t.param<t.bit | t.bytea | t.text>): CallExpression<t.int4, "bit_length">
  (arg: t.param<t.bit | t.bytea | t.text | t.null>): CallExpression<t.int4 | t.null, "bit_length">
} = defineFunction("bit_length")

/** 
 * A function which returns the bitwise OR of all bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_or.html
 */
export const bit_or: {
  /** 
   * A function which returns the bitwise OR of all bits in the provided parameter
   * 
   * @see https://pgpedia.info/b/bit_or.html
   */
  <T extends t.int2 | t.int4 | t.int8 | t.bit>(arg: T): Aggregate<T, "bit_or">
} = defineFunction("bit_or")

export const bit_send: {
  (arg: t.param<t.bit>): CallExpression<t.bytea, "bit_send">
  (arg: t.param<t.bit | t.null>): CallExpression<t.bytea | t.null, "bit_send">
} = defineFunction("bit_send")

/** 
 * A function  for computing the bitwise exclusive OR of input values
 * 
 * @see https://pgpedia.info/b/bit_xor.html
 */
export const bit_xor: {
  /** 
   * A function  for computing the bitwise exclusive OR of input values
   * 
   * @see https://pgpedia.info/b/bit_xor.html
   */
  <T extends t.int2 | t.int4 | t.int8 | t.bit>(arg: T): Aggregate<T, "bit_xor">
} = defineFunction("bit_xor")

export const bitand: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bit, "bitand">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bit | t.null, "bitand">
} = defineFunction("bitand")

export const bitcat: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.varbit, "bitcat">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.varbit | t.null, "bitcat">
} = defineFunction("bitcat")

export const bitcmp: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.int4, "bitcmp">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.int4 | t.null, "bitcmp">
} = defineFunction("bitcmp")

export const biteq: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "biteq">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "biteq">
} = defineFunction("biteq", "bool")

export const bitge: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "bitge">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "bitge">
} = defineFunction("bitge", "bool")

export const bitgt: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "bitgt">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "bitgt">
} = defineFunction("bitgt", "bool")

export const bitle: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "bitle">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "bitle">
} = defineFunction("bitle", "bool")

export const bitlt: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "bitlt">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "bitlt">
} = defineFunction("bitlt", "bool")

export const bitne: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bool, "bitne">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bool | t.null, "bitne">
} = defineFunction("bitne", "bool")

export const bitnot: {
  (arg: t.param<t.bit>): CallExpression<t.bit, "bitnot">
  (arg: t.param<t.bit | t.null>): CallExpression<t.bit | t.null, "bitnot">
} = defineFunction("bitnot")

export const bitor: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bit, "bitor">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bit | t.null, "bitor">
} = defineFunction("bitor")

export const bitshiftleft: {
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>): CallExpression<t.bit, "bitshiftleft">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "bitshiftleft">
} = defineFunction("bitshiftleft")

export const bitshiftright: {
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>): CallExpression<t.bit, "bitshiftright">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "bitshiftright">
} = defineFunction("bitshiftright")

export const bitxor: {
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>): CallExpression<t.bit, "bitxor">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>): CallExpression<t.bit | t.null, "bitxor">
} = defineFunction("bitxor")

export const bool: {
  (arg: t.param<t.jsonb | t.int4>): CallExpression<t.bool, "bool">
  (arg: t.param<t.jsonb | t.int4 | t.null>): CallExpression<t.bool | t.null, "bool">
} = defineFunction("bool", "bool")

/** 
 * A function returning true or false depending on whether all non-NULL input values are true
 * 
 * @see https://pgpedia.info/b/bool_and.html
 */
export const bool_and: {
  /** 
   * A function returning true or false depending on whether all non-NULL input values are true
   * 
   * @see https://pgpedia.info/b/bool_and.html
   */
  (arg: t.aggParam<t.bool>): Aggregate<t.bool, "bool_and">
} = defineFunction("bool_and", "bool")

/** 
 * A function returning true or false depending on whether any non-NULL input value is true
 * 
 * @see https://pgpedia.info/b/bool_or.html
 */
export const bool_or: {
  /** 
   * A function returning true or false depending on whether any non-NULL input value is true
   * 
   * @see https://pgpedia.info/b/bool_or.html
   */
  (arg: t.aggParam<t.bool>): Aggregate<t.bool, "bool_or">
} = defineFunction("bool_or", "bool")

export const booland_statefunc: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "booland_statefunc">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "booland_statefunc">
} = defineFunction("booland_statefunc", "bool")

export const booleq: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "booleq">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "booleq">
} = defineFunction("booleq", "bool")

export const boolge: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boolge">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boolge">
} = defineFunction("boolge", "bool")

export const boolgt: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boolgt">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boolgt">
} = defineFunction("boolgt", "bool")

export const boolle: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boolle">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boolle">
} = defineFunction("boolle", "bool")

export const boollt: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boollt">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boollt">
} = defineFunction("boollt", "bool")

export const boolne: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boolne">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boolne">
} = defineFunction("boolne", "bool")

export const boolor_statefunc: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.bool, "boolor_statefunc">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "boolor_statefunc">
} = defineFunction("boolor_statefunc", "bool")

export const boolsend: {
  (arg: t.param<t.bool>): CallExpression<t.bytea, "boolsend">
  (arg: t.param<t.bool | t.null>): CallExpression<t.bytea | t.null, "boolsend">
} = defineFunction("boolsend")

export const bpchar: {
  (arg: t.param<t.name | t.char>): CallExpression<t.bpchar, "bpchar">
  (arg: t.param<t.name | t.char | t.null>): CallExpression<t.bpchar | t.null, "bpchar">
  (arg1: t.param<t.bpchar>, arg2: t.param<t.int4>, arg3: t.param<t.bool>): CallExpression<t.bpchar, "bpchar">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.bpchar | t.null, "bpchar">
} = defineFunction("bpchar")

export const bpchar_larger: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bpchar, "bpchar_larger">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bpchar | t.null, "bpchar_larger">
} = defineFunction("bpchar_larger")

export const bpchar_pattern_ge: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchar_pattern_ge">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchar_pattern_ge">
} = defineFunction("bpchar_pattern_ge", "bool")

export const bpchar_pattern_gt: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchar_pattern_gt">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchar_pattern_gt">
} = defineFunction("bpchar_pattern_gt", "bool")

export const bpchar_pattern_le: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchar_pattern_le">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchar_pattern_le">
} = defineFunction("bpchar_pattern_le", "bool")

export const bpchar_pattern_lt: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchar_pattern_lt">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchar_pattern_lt">
} = defineFunction("bpchar_pattern_lt", "bool")

export const bpchar_smaller: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bpchar, "bpchar_smaller">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bpchar | t.null, "bpchar_smaller">
} = defineFunction("bpchar_smaller")

export const bpcharcmp: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.int4, "bpcharcmp">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.int4 | t.null, "bpcharcmp">
} = defineFunction("bpcharcmp")

export const bpchareq: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchareq">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchareq">
} = defineFunction("bpchareq", "bool")

export const bpcharge: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpcharge">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpcharge">
} = defineFunction("bpcharge", "bool")

export const bpchargt: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpchargt">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpchargt">
} = defineFunction("bpchargt", "bool")

export const bpchariclike: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpchariclike">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpchariclike">
} = defineFunction("bpchariclike", "bool")

export const bpcharicnlike: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharicnlike">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharicnlike">
} = defineFunction("bpcharicnlike", "bool")

export const bpcharicregexeq: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharicregexeq">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharicregexeq">
} = defineFunction("bpcharicregexeq", "bool")

export const bpcharicregexne: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharicregexne">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharicregexne">
} = defineFunction("bpcharicregexne", "bool")

export const bpcharle: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpcharle">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpcharle">
} = defineFunction("bpcharle", "bool")

export const bpcharlike: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharlike">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharlike">
} = defineFunction("bpcharlike", "bool")

export const bpcharlt: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpcharlt">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpcharlt">
} = defineFunction("bpcharlt", "bool")

export const bpcharne: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.bool, "bpcharne">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.bool | t.null, "bpcharne">
} = defineFunction("bpcharne", "bool")

export const bpcharnlike: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharnlike">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharnlike">
} = defineFunction("bpcharnlike", "bool")

export const bpcharregexeq: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharregexeq">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharregexeq">
} = defineFunction("bpcharregexeq", "bool")

export const bpcharregexne: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.text>): CallExpression<t.bool, "bpcharregexne">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "bpcharregexne">
} = defineFunction("bpcharregexne", "bool")

export const bpcharsend: {
  (arg: t.param<t.bpchar>): CallExpression<t.bytea, "bpcharsend">
  (arg: t.param<t.bpchar | t.null>): CallExpression<t.bytea | t.null, "bpcharsend">
} = defineFunction("bpcharsend")

export const brin_desummarize_range: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.int8>): CallExpression<t.void, "brin_desummarize_range">
} = defineFunction("brin_desummarize_range")

export const brin_summarize_new_values: {
  (arg: t.param<t.regclass>): CallExpression<t.int4, "brin_summarize_new_values">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int4 | t.null, "brin_summarize_new_values">
} = defineFunction("brin_summarize_new_values")

export const brin_summarize_range: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.int8>): CallExpression<t.int4, "brin_summarize_range">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "brin_summarize_range">
} = defineFunction("brin_summarize_range")

export const broadcast: {
  (arg: t.param<t.inet>): CallExpression<t.inet, "broadcast">
  (arg: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "broadcast">
} = defineFunction("broadcast")

export const btarraycmp: {
  <T extends t.anyarray>(arg1: t.param<T>, arg2: t.param<T>): CallExpression<t.int4, "btarraycmp">
  <T extends t.anyarray>(arg1: t.param<T | t.null>, arg2: t.param<T | t.null>): CallExpression<t.int4 | t.null, "btarraycmp">
} = defineFunction("btarraycmp")

export const btboolcmp: {
  (arg1: t.param<t.bool>, arg2: t.param<t.bool>): CallExpression<t.int4, "btboolcmp">
  (arg1: t.param<t.bool | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.int4 | t.null, "btboolcmp">
} = defineFunction("btboolcmp")

export const btbpchar_pattern_cmp: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.bpchar>): CallExpression<t.int4, "btbpchar_pattern_cmp">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.bpchar | t.null>): CallExpression<t.int4 | t.null, "btbpchar_pattern_cmp">
} = defineFunction("btbpchar_pattern_cmp")

export const btcharcmp: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.int4, "btcharcmp">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.int4 | t.null, "btcharcmp">
} = defineFunction("btcharcmp")

export const btequalimage: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "btequalimage">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "btequalimage">
} = defineFunction("btequalimage", "bool")

export const btfloat48cmp: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.int4, "btfloat48cmp">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.int4 | t.null, "btfloat48cmp">
} = defineFunction("btfloat48cmp")

export const btfloat4cmp: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.int4, "btfloat4cmp">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.int4 | t.null, "btfloat4cmp">
} = defineFunction("btfloat4cmp")

export const btfloat84cmp: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.int4, "btfloat84cmp">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.int4 | t.null, "btfloat84cmp">
} = defineFunction("btfloat84cmp")

export const btfloat8cmp: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.int4, "btfloat8cmp">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.int4 | t.null, "btfloat8cmp">
} = defineFunction("btfloat8cmp")

export const btint24cmp: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int4, "btint24cmp">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "btint24cmp">
} = defineFunction("btint24cmp")

export const btint28cmp: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int4, "btint28cmp">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "btint28cmp">
} = defineFunction("btint28cmp")

export const btint2cmp: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int4, "btint2cmp">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "btint2cmp">
} = defineFunction("btint2cmp")

export const btint42cmp: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.int4, "btint42cmp">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "btint42cmp">
} = defineFunction("btint42cmp")

export const btint48cmp: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int4, "btint48cmp">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "btint48cmp">
} = defineFunction("btint48cmp")

export const btint4cmp: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "btint4cmp">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "btint4cmp">
} = defineFunction("btint4cmp")

export const btint82cmp: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int4, "btint82cmp">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "btint82cmp">
} = defineFunction("btint82cmp")

export const btint84cmp: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int4, "btint84cmp">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "btint84cmp">
} = defineFunction("btint84cmp")

export const btint8cmp: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int4, "btint8cmp">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "btint8cmp">
} = defineFunction("btint8cmp")

export const btnamecmp: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.int4, "btnamecmp">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.int4 | t.null, "btnamecmp">
} = defineFunction("btnamecmp")

export const btnametextcmp: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.int4, "btnametextcmp">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "btnametextcmp">
} = defineFunction("btnametextcmp")

export const btoidcmp: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.int4, "btoidcmp">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.int4 | t.null, "btoidcmp">
} = defineFunction("btoidcmp")

/** 
 * A system function which trims characters from both sides of a string
 * 
 * @see https://pgpedia.info/b/btrim.html
 */
export const btrim: {
  /** 
   * A system function which trims characters from both sides of a string
   * 
   * @see https://pgpedia.info/b/btrim.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "btrim">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "btrim">
  (arg: t.param<t.text>): CallExpression<t.text, "btrim">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "btrim">
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bytea, "btrim">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "btrim">
} = defineFunction("btrim")

export const bttext_pattern_cmp: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.int4, "bttext_pattern_cmp">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "bttext_pattern_cmp">
} = defineFunction("bttext_pattern_cmp")

export const bttextcmp: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.int4, "bttextcmp">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "bttextcmp">
} = defineFunction("bttextcmp")

export const bttextnamecmp: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.int4, "bttextnamecmp">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.int4 | t.null, "bttextnamecmp">
} = defineFunction("bttextnamecmp")

export const btvarstrequalimage: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "btvarstrequalimage">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "btvarstrequalimage">
} = defineFunction("btvarstrequalimage", "bool")

export const byteacat: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bytea, "byteacat">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "byteacat">
} = defineFunction("byteacat")

export const byteacmp: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.int4, "byteacmp">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.int4 | t.null, "byteacmp">
} = defineFunction("byteacmp")

export const byteaeq: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteaeq">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteaeq">
} = defineFunction("byteaeq", "bool")

export const byteage: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteage">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteage">
} = defineFunction("byteage", "bool")

export const byteagt: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteagt">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteagt">
} = defineFunction("byteagt", "bool")

export const byteale: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteale">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteale">
} = defineFunction("byteale", "bool")

export const bytealike: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "bytealike">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "bytealike">
} = defineFunction("bytealike", "bool")

export const bytealt: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "bytealt">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "bytealt">
} = defineFunction("bytealt", "bool")

export const byteane: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteane">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteane">
} = defineFunction("byteane", "bool")

export const byteanlike: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bool, "byteanlike">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bool | t.null, "byteanlike">
} = defineFunction("byteanlike", "bool")

export const byteasend: {
  (arg: t.param<t.bytea>): CallExpression<t.bytea, "byteasend">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "byteasend">
} = defineFunction("byteasend")

/** 
 * A function returning the number of elements in an array
 * 
 * @see https://pgpedia.info/c/cardinality.html
 */
export const cardinality: {
  /** 
   * A function returning the number of elements in an array
   * 
   * @see https://pgpedia.info/c/cardinality.html
   */
  (arg: t.param<t.anyarray>): CallExpression<t.int4, "cardinality">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.int4 | t.null, "cardinality">
} = defineFunction("cardinality")

export const cash_cmp: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.int4, "cash_cmp">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.int4 | t.null, "cash_cmp">
} = defineFunction("cash_cmp")

export const cash_div_cash: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.float8, "cash_div_cash">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.float8 | t.null, "cash_div_cash">
} = defineFunction("cash_div_cash")

export const cash_div_flt4: {
  (arg1: t.param<t.money>, arg2: t.param<t.float4>): CallExpression<t.money, "cash_div_flt4">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.money | t.null, "cash_div_flt4">
} = defineFunction("cash_div_flt4")

export const cash_div_flt8: {
  (arg1: t.param<t.money>, arg2: t.param<t.float8>): CallExpression<t.money, "cash_div_flt8">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.money | t.null, "cash_div_flt8">
} = defineFunction("cash_div_flt8")

export const cash_div_int2: {
  (arg1: t.param<t.money>, arg2: t.param<t.int2>): CallExpression<t.money, "cash_div_int2">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.money | t.null, "cash_div_int2">
} = defineFunction("cash_div_int2")

export const cash_div_int4: {
  (arg1: t.param<t.money>, arg2: t.param<t.int4>): CallExpression<t.money, "cash_div_int4">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.money | t.null, "cash_div_int4">
} = defineFunction("cash_div_int4")

export const cash_div_int8: {
  (arg1: t.param<t.money>, arg2: t.param<t.int8>): CallExpression<t.money, "cash_div_int8">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.money | t.null, "cash_div_int8">
} = defineFunction("cash_div_int8")

export const cash_eq: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_eq">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_eq">
} = defineFunction("cash_eq", "bool")

export const cash_ge: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_ge">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_ge">
} = defineFunction("cash_ge", "bool")

export const cash_gt: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_gt">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_gt">
} = defineFunction("cash_gt", "bool")

export const cash_le: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_le">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_le">
} = defineFunction("cash_le", "bool")

export const cash_lt: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_lt">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_lt">
} = defineFunction("cash_lt", "bool")

export const cash_mi: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.money, "cash_mi">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "cash_mi">
} = defineFunction("cash_mi")

export const cash_mul_flt4: {
  (arg1: t.param<t.money>, arg2: t.param<t.float4>): CallExpression<t.money, "cash_mul_flt4">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.money | t.null, "cash_mul_flt4">
} = defineFunction("cash_mul_flt4")

export const cash_mul_flt8: {
  (arg1: t.param<t.money>, arg2: t.param<t.float8>): CallExpression<t.money, "cash_mul_flt8">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.money | t.null, "cash_mul_flt8">
} = defineFunction("cash_mul_flt8")

export const cash_mul_int2: {
  (arg1: t.param<t.money>, arg2: t.param<t.int2>): CallExpression<t.money, "cash_mul_int2">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.money | t.null, "cash_mul_int2">
} = defineFunction("cash_mul_int2")

export const cash_mul_int4: {
  (arg1: t.param<t.money>, arg2: t.param<t.int4>): CallExpression<t.money, "cash_mul_int4">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.money | t.null, "cash_mul_int4">
} = defineFunction("cash_mul_int4")

export const cash_mul_int8: {
  (arg1: t.param<t.money>, arg2: t.param<t.int8>): CallExpression<t.money, "cash_mul_int8">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.money | t.null, "cash_mul_int8">
} = defineFunction("cash_mul_int8")

export const cash_ne: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.bool, "cash_ne">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.bool | t.null, "cash_ne">
} = defineFunction("cash_ne", "bool")

export const cash_pl: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.money, "cash_pl">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "cash_pl">
} = defineFunction("cash_pl")

export const cash_send: {
  (arg: t.param<t.money>): CallExpression<t.bytea, "cash_send">
  (arg: t.param<t.money | t.null>): CallExpression<t.bytea | t.null, "cash_send">
} = defineFunction("cash_send")

export const cash_words: {
  (arg: t.param<t.money>): CallExpression<t.text, "cash_words">
  (arg: t.param<t.money | t.null>): CallExpression<t.text | t.null, "cash_words">
} = defineFunction("cash_words")

export const cashlarger: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.money, "cashlarger">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "cashlarger">
} = defineFunction("cashlarger")

export const cashsmaller: {
  (arg1: t.param<t.money>, arg2: t.param<t.money>): CallExpression<t.money, "cashsmaller">
  (arg1: t.param<t.money | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "cashsmaller">
} = defineFunction("cashsmaller")

export const cbrt: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cbrt">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cbrt">
} = defineFunction("cbrt")

export const ceil: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "ceil">
} = defineFunction("ceil")

export const ceiling: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "ceiling">
} = defineFunction("ceiling")

export const center: {
  (arg: t.param<t.circle>): CallExpression<t.point, "center">
  (arg: t.param<t.circle | t.null>): CallExpression<t.point | t.null, "center">
} = defineFunction("center")

export const char: {
  (arg: t.param<t.int4 | t.text>): CallExpression<t.char, "char">
  (arg: t.param<t.int4 | t.text | t.null>): CallExpression<t.char | t.null, "char">
} = defineFunction("char")

export const char_length: {
  (arg: t.param<t.bpchar | t.text>): CallExpression<t.int4, "char_length">
  (arg: t.param<t.bpchar | t.text | t.null>): CallExpression<t.int4 | t.null, "char_length">
} = defineFunction("char_length")

export const character_length: {
  (arg: t.param<t.bpchar | t.text>): CallExpression<t.int4, "character_length">
  (arg: t.param<t.bpchar | t.text | t.null>): CallExpression<t.int4 | t.null, "character_length">
} = defineFunction("character_length")

export const chareq: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "chareq">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "chareq">
} = defineFunction("chareq", "bool")

export const charge: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "charge">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "charge">
} = defineFunction("charge", "bool")

export const chargt: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "chargt">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "chargt">
} = defineFunction("chargt", "bool")

export const charle: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "charle">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "charle">
} = defineFunction("charle", "bool")

export const charlt: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "charlt">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "charlt">
} = defineFunction("charlt", "bool")

export const charne: {
  (arg1: t.param<t.char>, arg2: t.param<t.char>): CallExpression<t.bool, "charne">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.bool | t.null, "charne">
} = defineFunction("charne", "bool")

export const charsend: {
  (arg: t.param<t.char>): CallExpression<t.bytea, "charsend">
  (arg: t.param<t.char | t.null>): CallExpression<t.bytea | t.null, "charsend">
} = defineFunction("charsend")

/** 
 * A function for converting an integer into a character
 * 
 * @see https://pgpedia.info/c/chr.html
 */
export const chr: {
  /** 
   * A function for converting an integer into a character
   * 
   * @see https://pgpedia.info/c/chr.html
   */
  (arg: t.param<t.int4>): CallExpression<t.text, "chr">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "chr">
} = defineFunction("chr")

export const cidr: {
  (arg: t.param<t.inet>): CallExpression<t.cidr, "cidr">
  (arg: t.param<t.inet | t.null>): CallExpression<t.cidr | t.null, "cidr">
} = defineFunction("cidr")

export const cidr_send: {
  (arg: t.param<t.cidr>): CallExpression<t.bytea, "cidr_send">
  (arg: t.param<t.cidr | t.null>): CallExpression<t.bytea | t.null, "cidr_send">
} = defineFunction("cidr_send")

export const circle: {
  (arg1: t.param<t.point>, arg2: t.param<t.float8>): CallExpression<t.circle, "circle">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.circle | t.null, "circle">
} = defineFunction("circle")

export const circle_above: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_above">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_above">
} = defineFunction("circle_above", "bool")

export const circle_add_pt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.circle, "circle_add_pt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.circle | t.null, "circle_add_pt">
} = defineFunction("circle_add_pt")

export const circle_below: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_below">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_below">
} = defineFunction("circle_below", "bool")

export const circle_center: {
  (arg: t.param<t.circle>): CallExpression<t.point, "circle_center">
  (arg: t.param<t.circle | t.null>): CallExpression<t.point | t.null, "circle_center">
} = defineFunction("circle_center")

export const circle_contain: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_contain">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_contain">
} = defineFunction("circle_contain", "bool")

export const circle_contain_pt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.bool, "circle_contain_pt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "circle_contain_pt">
} = defineFunction("circle_contain_pt", "bool")

export const circle_contained: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_contained">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_contained">
} = defineFunction("circle_contained", "bool")

export const circle_distance: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.float8, "circle_distance">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.float8 | t.null, "circle_distance">
} = defineFunction("circle_distance")

export const circle_div_pt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.circle, "circle_div_pt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.circle | t.null, "circle_div_pt">
} = defineFunction("circle_div_pt")

export const circle_eq: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_eq">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_eq">
} = defineFunction("circle_eq", "bool")

export const circle_ge: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_ge">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_ge">
} = defineFunction("circle_ge", "bool")

export const circle_gt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_gt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_gt">
} = defineFunction("circle_gt", "bool")

export const circle_le: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_le">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_le">
} = defineFunction("circle_le", "bool")

export const circle_left: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_left">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_left">
} = defineFunction("circle_left", "bool")

export const circle_lt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_lt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_lt">
} = defineFunction("circle_lt", "bool")

export const circle_mul_pt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.circle, "circle_mul_pt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.circle | t.null, "circle_mul_pt">
} = defineFunction("circle_mul_pt")

export const circle_ne: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_ne">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_ne">
} = defineFunction("circle_ne", "bool")

export const circle_overabove: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_overabove">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_overabove">
} = defineFunction("circle_overabove", "bool")

export const circle_overbelow: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_overbelow">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_overbelow">
} = defineFunction("circle_overbelow", "bool")

export const circle_overlap: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_overlap">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_overlap">
} = defineFunction("circle_overlap", "bool")

export const circle_overleft: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_overleft">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_overleft">
} = defineFunction("circle_overleft", "bool")

export const circle_overright: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_overright">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_overright">
} = defineFunction("circle_overright", "bool")

export const circle_right: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_right">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_right">
} = defineFunction("circle_right", "bool")

export const circle_same: {
  (arg1: t.param<t.circle>, arg2: t.param<t.circle>): CallExpression<t.bool, "circle_same">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "circle_same">
} = defineFunction("circle_same", "bool")

export const circle_send: {
  (arg: t.param<t.circle>): CallExpression<t.bytea, "circle_send">
  (arg: t.param<t.circle | t.null>): CallExpression<t.bytea | t.null, "circle_send">
} = defineFunction("circle_send")

export const circle_sub_pt: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.circle, "circle_sub_pt">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.circle | t.null, "circle_sub_pt">
} = defineFunction("circle_sub_pt")

/** 
 * A function returning the current date and time
 * 
 * @see https://pgpedia.info/c/clock_timestamp.html
 */
export const clock_timestamp: {
  /** 
   * A function returning the current date and time
   * 
   * @see https://pgpedia.info/c/clock_timestamp.html
   */
  (): CallExpression<t.timestamptz, "clock_timestamp">
} = defineFunction("clock_timestamp")

/** 
 * A function returning a column's comment
 * 
 * @see https://pgpedia.info/c/col_description.html
 */
export const col_description: {
  /** 
   * A function returning a column's comment
   * 
   * @see https://pgpedia.info/c/col_description.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>): CallExpression<t.text, "col_description">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "col_description">
} = defineFunction("col_description")

/** 
 * A function for concatenating values
 * 
 * @see https://pgpedia.info/c/concat.html
 */
export const concat: {
  /** 
   * A function for concatenating values
   * 
   * @see https://pgpedia.info/c/concat.html
   */
  (...args: t.param<t.any>[]): CallExpression<t.text, "concat">
} = defineFunction("concat")

/** 
 * A function for concatenating values with a separator
 * 
 * @see https://pgpedia.info/c/concat_ws.html
 */
export const concat_ws: {
  /** 
   * A function for concatenating values with a separator
   * 
   * @see https://pgpedia.info/c/concat_ws.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.any>): CallExpression<t.text, "concat_ws">
} = defineFunction("concat_ws")

/** 
 * A function for converting the encoding of a bytea string
 * 
 * @see https://pgpedia.info/c/convert.html
 */
export const convert: {
  /** 
   * A function for converting the encoding of a bytea string
   * 
   * @see https://pgpedia.info/c/convert.html
   */
  (arg1: t.param<t.bytea>, arg2: t.param<t.name>, arg3: t.param<t.name>): CallExpression<t.bytea, "convert">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.name | t.null>, arg3: t.param<t.name | t.null>): CallExpression<t.bytea | t.null, "convert">
} = defineFunction("convert")

/** 
 * A function for converting a bytea string to the database encoding
 * 
 * @see https://pgpedia.info/c/convert_from.html
 */
export const convert_from: {
  /** 
   * A function for converting a bytea string to the database encoding
   * 
   * @see https://pgpedia.info/c/convert_from.html
   */
  (arg1: t.param<t.bytea>, arg2: t.param<t.name>): CallExpression<t.text, "convert_from">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.text | t.null, "convert_from">
} = defineFunction("convert_from")

/** 
 * A function for converting text into a bytea string with a specified encoding
 * 
 * @see https://pgpedia.info/c/convert_to.html
 */
export const convert_to: {
  /** 
   * A function for converting text into a bytea string with a specified encoding
   * 
   * @see https://pgpedia.info/c/convert_to.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bytea, "convert_to">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bytea | t.null, "convert_to">
} = defineFunction("convert_to")

export const corr: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "corr">
} = defineFunction("corr")

export const cos: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cos">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cos">
} = defineFunction("cos")

export const cosd: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cosd">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cosd">
} = defineFunction("cosd")

export const cosh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cosh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cosh">
} = defineFunction("cosh")

export const cot: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cot">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cot">
} = defineFunction("cot")

export const cotd: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "cotd">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "cotd">
} = defineFunction("cotd")

export const count: {
  (arg: t.aggParam<t.any>): Aggregate<t.int8, "count">
  (): Aggregate<t.int8, "count">
} = defineFunction("count")

export const covar_pop: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "covar_pop">
} = defineFunction("covar_pop")

export const covar_samp: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "covar_samp">
} = defineFunction("covar_samp")

export const cume_dist: {
  (): CallExpression<t.float8, "cume_dist">
  (...args: t.aggParam<t.any>[]): Aggregate<t.float8, "cume_dist">
} = defineFunction("cume_dist")

/** 
 * A function returning the name of the current database
 * 
 * @see https://pgpedia.info/c/current_database.html
 */
export const current_database: {
  /** 
   * A function returning the name of the current database
   * 
   * @see https://pgpedia.info/c/current_database.html
   */
  (): CallExpression<t.name, "current_database">
} = defineFunction("current_database")

export const current_query: {
  (): CallExpression<t.text, "current_query">
} = defineFunction("current_query")

/** 
 * A function returning the name of the current schema
 * 
 * @see https://pgpedia.info/c/current_schema().html
 */
export const current_schema: CallExpression<t.name, "current_schema"> = defineFunction("current_schema", "var")()

/** 
 * A function listing the schemas in the current search path
 * 
 * @see https://pgpedia.info/c/current_schemas.html
 */
export const current_schemas: {
  /** 
   * A function listing the schemas in the current search path
   * 
   * @see https://pgpedia.info/c/current_schemas.html
   */
  (arg: t.param<t.bool>): CallExpression<t.array<t.name>, "current_schemas">
  (arg: t.param<t.bool | t.null>): CallExpression<t.array<t.name> | t.null, "current_schemas">
} = defineFunction("current_schemas")

/** 
 * A function returning the current value of a configuration parameter
 * 
 * @see https://pgpedia.info/c/current_setting.html
 */
export const current_setting: {
  /** 
   * A function returning the current value of a configuration parameter
   * 
   * @see https://pgpedia.info/c/current_setting.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "current_setting">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "current_setting">
  (arg1: t.param<t.text>, arg2: t.param<t.bool>): CallExpression<t.text, "current_setting">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "current_setting">
} = defineFunction("current_setting")

/** 
 * A function returning the current user name
 * 
 * @see https://pgpedia.info/c/current_user.html
 */
export const current_user: CallExpression<t.name, "current_user"> = defineFunction("current_user", "var")()

export const currval: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "currval">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "currval">
} = defineFunction("currval")

export const database_to_xml: {
  (nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "database_to_xml">
  (nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "database_to_xml">
} = defineFunction("database_to_xml")

export const database_to_xml_and_xmlschema: {
  (nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "database_to_xml_and_xmlschema">
  (nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "database_to_xml_and_xmlschema">
} = defineFunction("database_to_xml_and_xmlschema")

export const database_to_xmlschema: {
  (nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "database_to_xmlschema">
  (nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "database_to_xmlschema">
} = defineFunction("database_to_xmlschema")

export const date: {
  (arg: t.param<t.timestamptz | t.timestamp>): CallExpression<t.date, "date">
  (arg: t.param<t.timestamptz | t.timestamp | t.null>): CallExpression<t.date | t.null, "date">
} = defineFunction("date")

/** 
 * A function for converting a timestamp to the start of the nearest specified interval
 * 
 * @see https://pgpedia.info/d/date_bin.html
 */
export const date_bin: {
  /** 
   * A function for converting a timestamp to the start of the nearest specified interval
   * 
   * @see https://pgpedia.info/d/date_bin.html
   */
  (arg1: t.param<t.interval>, arg2: t.param<t.timestamp>, arg3: t.param<t.timestamp>): CallExpression<t.timestamp, "date_bin">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.timestamp | t.null>, arg3: t.param<t.timestamp | t.null>): CallExpression<t.timestamp | t.null, "date_bin">
  (arg1: t.param<t.interval>, arg2: t.param<t.timestamptz>, arg3: t.param<t.timestamptz>): CallExpression<t.timestamptz, "date_bin">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.timestamptz | t.null>, arg3: t.param<t.timestamptz | t.null>): CallExpression<t.timestamptz | t.null, "date_bin">
} = defineFunction("date_bin")

export const date_cmp: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.int4, "date_cmp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.int4 | t.null, "date_cmp">
} = defineFunction("date_cmp")

export const date_cmp_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.int4, "date_cmp_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.int4 | t.null, "date_cmp_timestamp">
} = defineFunction("date_cmp_timestamp")

export const date_cmp_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.int4, "date_cmp_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.int4 | t.null, "date_cmp_timestamptz">
} = defineFunction("date_cmp_timestamptz")

export const date_eq: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_eq">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_eq">
} = defineFunction("date_eq", "bool")

export const date_eq_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_eq_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_eq_timestamp">
} = defineFunction("date_eq_timestamp", "bool")

export const date_eq_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_eq_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_eq_timestamptz">
} = defineFunction("date_eq_timestamptz", "bool")

export const date_ge: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_ge">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_ge">
} = defineFunction("date_ge", "bool")

export const date_ge_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_ge_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_ge_timestamp">
} = defineFunction("date_ge_timestamp", "bool")

export const date_ge_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_ge_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_ge_timestamptz">
} = defineFunction("date_ge_timestamptz", "bool")

export const date_gt: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_gt">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_gt">
} = defineFunction("date_gt", "bool")

export const date_gt_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_gt_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_gt_timestamp">
} = defineFunction("date_gt_timestamp", "bool")

export const date_gt_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_gt_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_gt_timestamptz">
} = defineFunction("date_gt_timestamptz", "bool")

export const date_larger: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.date, "date_larger">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.date | t.null, "date_larger">
} = defineFunction("date_larger")

export const date_le: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_le">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_le">
} = defineFunction("date_le", "bool")

export const date_le_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_le_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_le_timestamp">
} = defineFunction("date_le_timestamp", "bool")

export const date_le_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_le_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_le_timestamptz">
} = defineFunction("date_le_timestamptz", "bool")

export const date_lt: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_lt">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_lt">
} = defineFunction("date_lt", "bool")

export const date_lt_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_lt_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_lt_timestamp">
} = defineFunction("date_lt_timestamp", "bool")

export const date_lt_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_lt_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_lt_timestamptz">
} = defineFunction("date_lt_timestamptz", "bool")

export const date_mi: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.int4, "date_mi">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.int4 | t.null, "date_mi">
} = defineFunction("date_mi")

export const date_mi_interval: {
  (arg1: t.param<t.date>, arg2: t.param<t.interval>): CallExpression<t.timestamp, "date_mi_interval">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamp | t.null, "date_mi_interval">
} = defineFunction("date_mi_interval")

export const date_mii: {
  (arg1: t.param<t.date>, arg2: t.param<t.int4>): CallExpression<t.date, "date_mii">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.date | t.null, "date_mii">
} = defineFunction("date_mii")

export const date_ne: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.bool, "date_ne">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "date_ne">
} = defineFunction("date_ne", "bool")

export const date_ne_timestamp: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "date_ne_timestamp">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "date_ne_timestamp">
} = defineFunction("date_ne_timestamp", "bool")

export const date_ne_timestamptz: {
  (arg1: t.param<t.date>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "date_ne_timestamptz">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "date_ne_timestamptz">
} = defineFunction("date_ne_timestamptz", "bool")

/** 
 * A function for retrieving elements of a date or timestamp
 * 
 * @see https://pgpedia.info/d/date_part.html
 */
export const date_part: {
  /** 
   * A function for retrieving elements of a date or timestamp
   * 
   * @see https://pgpedia.info/d/date_part.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.timestamptz | t.interval | t.timetz | t.time | t.timestamp | t.date>): CallExpression<t.float8, "date_part">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.timestamptz | t.interval | t.timetz | t.time | t.timestamp | t.date | t.null>): CallExpression<t.float8 | t.null, "date_part">
} = defineFunction("date_part")

export const date_pl_interval: {
  (arg1: t.param<t.date>, arg2: t.param<t.interval>): CallExpression<t.timestamp, "date_pl_interval">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamp | t.null, "date_pl_interval">
} = defineFunction("date_pl_interval")

export const date_pli: {
  (arg1: t.param<t.date>, arg2: t.param<t.int4>): CallExpression<t.date, "date_pli">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.date | t.null, "date_pli">
} = defineFunction("date_pli")

export const date_send: {
  (arg: t.param<t.date>): CallExpression<t.bytea, "date_send">
  (arg: t.param<t.date | t.null>): CallExpression<t.bytea | t.null, "date_send">
} = defineFunction("date_send")

export const date_smaller: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.date, "date_smaller">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.date | t.null, "date_smaller">
} = defineFunction("date_smaller")

/** 
 * A function for truncating a time value to a specified unit
 * 
 * @see https://pgpedia.info/d/date_trunc.html
 */
export const date_trunc: {
  /** 
   * A function for truncating a time value to a specified unit
   * 
   * @see https://pgpedia.info/d/date_trunc.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.timestamptz>): CallExpression<t.timestamptz, "date_trunc">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.timestamptz | t.null, "date_trunc">
  (arg1: t.param<t.text>, arg2: t.param<t.timestamptz>, arg3: t.param<t.text>): CallExpression<t.timestamptz, "date_trunc">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.timestamptz | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.timestamptz | t.null, "date_trunc">
  (arg1: t.param<t.text>, arg2: t.param<t.interval>): CallExpression<t.interval, "date_trunc">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "date_trunc">
  (arg1: t.param<t.text>, arg2: t.param<t.timestamp>): CallExpression<t.timestamp, "date_trunc">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.timestamp | t.null, "date_trunc">
} = defineFunction("date_trunc")

export const daterange: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.daterange, "daterange">
  (arg1: t.param<t.date>, arg2: t.param<t.date>, arg3: t.param<t.text>): CallExpression<t.daterange, "daterange">
} = defineFunction("daterange")

export const daterange_canonical: {
  (arg: t.param<t.daterange>): CallExpression<t.daterange, "daterange_canonical">
  (arg: t.param<t.daterange | t.null>): CallExpression<t.daterange | t.null, "daterange_canonical">
} = defineFunction("daterange_canonical")

export const daterange_subdiff: {
  (arg1: t.param<t.date>, arg2: t.param<t.date>): CallExpression<t.float8, "daterange_subdiff">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.float8 | t.null, "daterange_subdiff">
} = defineFunction("daterange_subdiff")

export const datetime_pl: {
  (arg1: t.param<t.date>, arg2: t.param<t.time>): CallExpression<t.timestamp, "datetime_pl">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.timestamp | t.null, "datetime_pl">
} = defineFunction("datetime_pl")

export const datetimetz_pl: {
  (arg1: t.param<t.date>, arg2: t.param<t.timetz>): CallExpression<t.timestamptz, "datetimetz_pl">
  (arg1: t.param<t.date | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.timestamptz | t.null, "datetimetz_pl">
} = defineFunction("datetimetz_pl")

export const dcbrt: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dcbrt">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dcbrt">
} = defineFunction("dcbrt")

/** 
 * A function for converting data encoded as text to bytea
 * 
 * @see https://pgpedia.info/d/decode.html
 */
export const decode: {
  /** 
   * A function for converting data encoded as text to bytea
   * 
   * @see https://pgpedia.info/d/decode.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bytea, "decode">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bytea | t.null, "decode">
} = defineFunction("decode")

export const degrees: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "degrees">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "degrees">
} = defineFunction("degrees")

export const dense_rank: {
  (): CallExpression<t.int8, "dense_rank">
  (...args: t.aggParam<t.any>[]): Aggregate<t.int8, "dense_rank">
} = defineFunction("dense_rank")

export const dexp: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dexp">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dexp">
} = defineFunction("dexp")

export const diameter: {
  (arg: t.param<t.circle>): CallExpression<t.float8, "diameter">
  (arg: t.param<t.circle | t.null>): CallExpression<t.float8 | t.null, "diameter">
} = defineFunction("diameter")

export const dist_cpoint: {
  (arg1: t.param<t.circle>, arg2: t.param<t.point>): CallExpression<t.float8, "dist_cpoint">
  (arg1: t.param<t.circle | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.float8 | t.null, "dist_cpoint">
} = defineFunction("dist_cpoint")

export const dist_pc: {
  (arg1: t.param<t.point>, arg2: t.param<t.circle>): CallExpression<t.float8, "dist_pc">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.float8 | t.null, "dist_pc">
} = defineFunction("dist_pc")

export const div: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "div">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "div">
} = defineFunction("div")

export const dlog1: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dlog1">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dlog1">
} = defineFunction("dlog1")

export const dlog10: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dlog10">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dlog10">
} = defineFunction("dlog10")

export const dpow: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "dpow">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dpow">
} = defineFunction("dpow")

export const dround: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dround">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dround">
} = defineFunction("dround")

export const dsqrt: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dsqrt">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dsqrt">
} = defineFunction("dsqrt")

export const dtrunc: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "dtrunc">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "dtrunc">
} = defineFunction("dtrunc")

/** 
 * A function converting bytea data into text formats
 * 
 * @see https://pgpedia.info/e/encode.html
 */
export const encode: {
  /** 
   * A function converting bytea data into text formats
   * 
   * @see https://pgpedia.info/e/encode.html
   */
  (arg1: t.param<t.bytea>, arg2: t.param<t.text>): CallExpression<t.text, "encode">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "encode">
} = defineFunction("encode")

export const every: {
  (arg: t.aggParam<t.bool>): Aggregate<t.bool, "every">
} = defineFunction("every", "bool")

export const exp: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "exp">
} = defineFunction("exp")

/** 
 * A function for retrieving elements of a date or time value
 * 
 * @see https://pgpedia.info/e/extract.html
 */
export const extract: {
  /** 
   * A function for retrieving elements of a date or time value
   * 
   * @see https://pgpedia.info/e/extract.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.timestamptz | t.interval | t.timetz | t.date | t.time | t.timestamp>): CallExpression<t.numeric, "extract">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.timestamptz | t.interval | t.timetz | t.date | t.time | t.timestamp | t.null>): CallExpression<t.numeric | t.null, "extract">
} = defineFunction("extract")

/** 
 * A function returning the factorial of the supplied integer
 * 
 * @see https://pgpedia.info/f/factorial.html
 */
export const factorial: {
  /** 
   * A function returning the factorial of the supplied integer
   * 
   * @see https://pgpedia.info/f/factorial.html
   */
  (arg: t.param<t.int8>): CallExpression<t.numeric, "factorial">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.numeric | t.null, "factorial">
} = defineFunction("factorial")

export const family: {
  (arg: t.param<t.inet>): CallExpression<t.int4, "family">
  (arg: t.param<t.inet | t.null>): CallExpression<t.int4 | t.null, "family">
} = defineFunction("family")

export const float4: {
  (arg: t.param<t.int2 | t.float8 | t.int4 | t.int8 | t.numeric | t.jsonb>): CallExpression<t.float4, "float4">
  (arg: t.param<t.int2 | t.float8 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): CallExpression<t.float4 | t.null, "float4">
} = defineFunction("float4")

export const float48div: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.float8, "float48div">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float48div">
} = defineFunction("float48div")

export const float48eq: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48eq">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48eq">
} = defineFunction("float48eq", "bool")

export const float48ge: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48ge">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48ge">
} = defineFunction("float48ge", "bool")

export const float48gt: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48gt">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48gt">
} = defineFunction("float48gt", "bool")

export const float48le: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48le">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48le">
} = defineFunction("float48le", "bool")

export const float48lt: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48lt">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48lt">
} = defineFunction("float48lt", "bool")

export const float48mi: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.float8, "float48mi">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float48mi">
} = defineFunction("float48mi")

export const float48mul: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.float8, "float48mul">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float48mul">
} = defineFunction("float48mul")

export const float48ne: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.bool, "float48ne">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float48ne">
} = defineFunction("float48ne", "bool")

export const float48pl: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float8>): CallExpression<t.float8, "float48pl">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float48pl">
} = defineFunction("float48pl")

export const float4_accum: {
  (arg1: t.param<t.array<t.float8>>, arg2: t.param<t.float4>): CallExpression<t.array<t.float8>, "float4_accum">
  (arg1: t.param<t.array<t.float8> | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.array<t.float8> | t.null, "float4_accum">
} = defineFunction("float4_accum")

export const float4abs: {
  (arg: t.param<t.float4>): CallExpression<t.float4, "float4abs">
  (arg: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4abs">
} = defineFunction("float4abs")

export const float4div: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4div">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4div">
} = defineFunction("float4div")

export const float4eq: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4eq">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4eq">
} = defineFunction("float4eq", "bool")

export const float4ge: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4ge">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4ge">
} = defineFunction("float4ge", "bool")

export const float4gt: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4gt">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4gt">
} = defineFunction("float4gt", "bool")

export const float4larger: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4larger">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4larger">
} = defineFunction("float4larger")

export const float4le: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4le">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4le">
} = defineFunction("float4le", "bool")

export const float4lt: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4lt">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4lt">
} = defineFunction("float4lt", "bool")

export const float4mi: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4mi">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4mi">
} = defineFunction("float4mi")

export const float4mul: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4mul">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4mul">
} = defineFunction("float4mul")

export const float4ne: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.bool, "float4ne">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float4ne">
} = defineFunction("float4ne", "bool")

export const float4pl: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4pl">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4pl">
} = defineFunction("float4pl")

export const float4send: {
  (arg: t.param<t.float4>): CallExpression<t.bytea, "float4send">
  (arg: t.param<t.float4 | t.null>): CallExpression<t.bytea | t.null, "float4send">
} = defineFunction("float4send")

export const float4smaller: {
  (arg1: t.param<t.float4>, arg2: t.param<t.float4>): CallExpression<t.float4, "float4smaller">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4smaller">
} = defineFunction("float4smaller")

export const float4um: {
  (arg: t.param<t.float4>): CallExpression<t.float4, "float4um">
  (arg: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4um">
} = defineFunction("float4um")

export const float4up: {
  (arg: t.param<t.float4>): CallExpression<t.float4, "float4up">
  (arg: t.param<t.float4 | t.null>): CallExpression<t.float4 | t.null, "float4up">
} = defineFunction("float4up")

export const float8: {
  (arg: t.param<t.int2 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb>): CallExpression<t.float8, "float8">
  (arg: t.param<t.int2 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): CallExpression<t.float8 | t.null, "float8">
} = defineFunction("float8")

export const float84div: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.float8, "float84div">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float8 | t.null, "float84div">
} = defineFunction("float84div")

export const float84eq: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84eq">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84eq">
} = defineFunction("float84eq", "bool")

export const float84ge: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84ge">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84ge">
} = defineFunction("float84ge", "bool")

export const float84gt: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84gt">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84gt">
} = defineFunction("float84gt", "bool")

export const float84le: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84le">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84le">
} = defineFunction("float84le", "bool")

export const float84lt: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84lt">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84lt">
} = defineFunction("float84lt", "bool")

export const float84mi: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.float8, "float84mi">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float8 | t.null, "float84mi">
} = defineFunction("float84mi")

export const float84mul: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.float8, "float84mul">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float8 | t.null, "float84mul">
} = defineFunction("float84mul")

export const float84ne: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.bool, "float84ne">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.bool | t.null, "float84ne">
} = defineFunction("float84ne", "bool")

export const float84pl: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float4>): CallExpression<t.float8, "float84pl">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float4 | t.null>): CallExpression<t.float8 | t.null, "float84pl">
} = defineFunction("float84pl")

export const float8_accum: {
  (arg1: t.param<t.array<t.float8>>, arg2: t.param<t.float8>): CallExpression<t.array<t.float8>, "float8_accum">
  (arg1: t.param<t.array<t.float8> | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.array<t.float8> | t.null, "float8_accum">
} = defineFunction("float8_accum")

export const float8_avg: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_avg">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_avg">
} = defineFunction("float8_avg")

export const float8_combine: {
  (arg1: t.param<t.array<t.float8>>, arg2: t.param<t.array<t.float8>>): CallExpression<t.array<t.float8>, "float8_combine">
  (arg1: t.param<t.array<t.float8> | t.null>, arg2: t.param<t.array<t.float8> | t.null>): CallExpression<t.array<t.float8> | t.null, "float8_combine">
} = defineFunction("float8_combine")

export const float8_corr: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_corr">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_corr">
} = defineFunction("float8_corr")

export const float8_covar_pop: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_covar_pop">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_covar_pop">
} = defineFunction("float8_covar_pop")

export const float8_covar_samp: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_covar_samp">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_covar_samp">
} = defineFunction("float8_covar_samp")

export const float8_regr_accum: {
  (arg1: t.param<t.array<t.float8>>, arg2: t.param<t.float8>, arg3: t.param<t.float8>): CallExpression<t.array<t.float8>, "float8_regr_accum">
  (arg1: t.param<t.array<t.float8> | t.null>, arg2: t.param<t.float8 | t.null>, arg3: t.param<t.float8 | t.null>): CallExpression<t.array<t.float8> | t.null, "float8_regr_accum">
} = defineFunction("float8_regr_accum")

export const float8_regr_avgx: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_avgx">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_avgx">
} = defineFunction("float8_regr_avgx")

export const float8_regr_avgy: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_avgy">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_avgy">
} = defineFunction("float8_regr_avgy")

export const float8_regr_combine: {
  (arg1: t.param<t.array<t.float8>>, arg2: t.param<t.array<t.float8>>): CallExpression<t.array<t.float8>, "float8_regr_combine">
  (arg1: t.param<t.array<t.float8> | t.null>, arg2: t.param<t.array<t.float8> | t.null>): CallExpression<t.array<t.float8> | t.null, "float8_regr_combine">
} = defineFunction("float8_regr_combine")

export const float8_regr_intercept: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_intercept">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_intercept">
} = defineFunction("float8_regr_intercept")

export const float8_regr_r2: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_r2">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_r2">
} = defineFunction("float8_regr_r2")

export const float8_regr_slope: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_slope">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_slope">
} = defineFunction("float8_regr_slope")

export const float8_regr_sxx: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_sxx">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_sxx">
} = defineFunction("float8_regr_sxx")

export const float8_regr_sxy: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_sxy">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_sxy">
} = defineFunction("float8_regr_sxy")

export const float8_regr_syy: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_regr_syy">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_regr_syy">
} = defineFunction("float8_regr_syy")

export const float8_stddev_pop: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_stddev_pop">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_stddev_pop">
} = defineFunction("float8_stddev_pop")

export const float8_stddev_samp: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_stddev_samp">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_stddev_samp">
} = defineFunction("float8_stddev_samp")

export const float8_var_pop: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_var_pop">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_var_pop">
} = defineFunction("float8_var_pop")

export const float8_var_samp: {
  (arg: t.param<t.array<t.float8>>): CallExpression<t.float8, "float8_var_samp">
  (arg: t.param<t.array<t.float8> | t.null>): CallExpression<t.float8 | t.null, "float8_var_samp">
} = defineFunction("float8_var_samp")

export const float8abs: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "float8abs">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8abs">
} = defineFunction("float8abs")

export const float8div: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8div">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8div">
} = defineFunction("float8div")

export const float8eq: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8eq">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8eq">
} = defineFunction("float8eq", "bool")

export const float8ge: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8ge">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8ge">
} = defineFunction("float8ge", "bool")

export const float8gt: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8gt">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8gt">
} = defineFunction("float8gt", "bool")

export const float8larger: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8larger">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8larger">
} = defineFunction("float8larger")

export const float8le: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8le">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8le">
} = defineFunction("float8le", "bool")

export const float8lt: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8lt">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8lt">
} = defineFunction("float8lt", "bool")

export const float8mi: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8mi">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8mi">
} = defineFunction("float8mi")

export const float8mul: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8mul">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8mul">
} = defineFunction("float8mul")

export const float8ne: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.bool, "float8ne">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.bool | t.null, "float8ne">
} = defineFunction("float8ne", "bool")

export const float8pl: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8pl">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8pl">
} = defineFunction("float8pl")

export const float8send: {
  (arg: t.param<t.float8>): CallExpression<t.bytea, "float8send">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.bytea | t.null, "float8send">
} = defineFunction("float8send")

export const float8smaller: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "float8smaller">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8smaller">
} = defineFunction("float8smaller")

export const float8um: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "float8um">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8um">
} = defineFunction("float8um")

export const float8up: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "float8up">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "float8up">
} = defineFunction("float8up")

export const floor: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "floor">
} = defineFunction("floor")

export const flt4_mul_cash: {
  (arg1: t.param<t.float4>, arg2: t.param<t.money>): CallExpression<t.money, "flt4_mul_cash">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "flt4_mul_cash">
} = defineFunction("flt4_mul_cash")

export const flt8_mul_cash: {
  (arg1: t.param<t.float8>, arg2: t.param<t.money>): CallExpression<t.money, "flt8_mul_cash">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "flt8_mul_cash">
} = defineFunction("flt8_mul_cash")

export const fmgr_c_validator: {
  (arg: t.param<t.oid>): CallExpression<t.void, "fmgr_c_validator">
} = defineFunction("fmgr_c_validator")

export const fmgr_internal_validator: {
  (arg: t.param<t.oid>): CallExpression<t.void, "fmgr_internal_validator">
} = defineFunction("fmgr_internal_validator")

export const fmgr_sql_validator: {
  (arg: t.param<t.oid>): CallExpression<t.void, "fmgr_sql_validator">
} = defineFunction("fmgr_sql_validator")

/** 
 * A function for formatting a string with placeholder
 * 
 * @see https://pgpedia.info/f/format.html
 */
export const format: {
  /** 
   * A function for formatting a string with placeholder
   * 
   * @see https://pgpedia.info/f/format.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.any>): CallExpression<t.text, "format">
  (arg: t.param<t.text>): CallExpression<t.text, "format">
} = defineFunction("format")

/** 
 * A function returning the human-readable name of a data type
 * 
 * @see https://pgpedia.info/f/format_type.html
 */
export const format_type: {
  /** 
   * A function returning the human-readable name of a data type
   * 
   * @see https://pgpedia.info/f/format_type.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>): CallExpression<t.text, "format_type">
} = defineFunction("format_type")

/** 
 * A function for obtaining the greatest common divisor
 * 
 * @see https://pgpedia.info/g/gcd-function.html
 */
export const gcd: {
  /** 
   * A function for obtaining the greatest common divisor
   * 
   * @see https://pgpedia.info/g/gcd-function.html
   */
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "gcd">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "gcd">
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "gcd">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "gcd">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "gcd">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "gcd">
} = defineFunction("gcd")

/** 
 * A  system function to generate a random UUID
 * 
 * @see https://pgpedia.info/g/gen_random_uuid-function.html
 */
export const gen_random_uuid: {
  /** 
   * A  system function to generate a random UUID
   * 
   * @see https://pgpedia.info/g/gen_random_uuid-function.html
   */
  (): CallExpression<t.uuid, "gen_random_uuid">
} = defineFunction("gen_random_uuid")

/** 
 * A function for generating a series of values
 * 
 * @see https://pgpedia.info/g/generate_series.html
 */
export const generate_series: {
  /** 
   * A function for generating a series of values
   * 
   * @see https://pgpedia.info/g/generate_series.html
   */
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): SetRef<t.int4, "generate_series">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): SetRef<t.int4, "generate_series">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>): SetRef<t.int8, "generate_series">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): SetRef<t.int8, "generate_series">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>, arg3: t.param<t.numeric | t.null>): SetRef<t.numeric, "generate_series">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): SetRef<t.numeric, "generate_series">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>, arg3: t.param<t.interval | t.null>): SetRef<t.timestamp, "generate_series">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>, arg3: t.param<t.interval | t.null>): SetRef<t.timestamptz, "generate_series">
} = defineSetFunction("generate_series")

/** 
 * A function generating the subscripts for an array
 * 
 * @see https://pgpedia.info/g/generate_subscripts.html
 */
export const generate_subscripts: {
  /** 
   * A function generating the subscripts for an array
   * 
   * @see https://pgpedia.info/g/generate_subscripts.html
   */
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): SetRef<t.int4, "generate_subscripts">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>): SetRef<t.int4, "generate_subscripts">
} = defineSetFunction("generate_subscripts")

export const get_bit: {
  (arg1: t.param<t.bytea | t.bit>, arg2: t.param<t.int8 | t.int4>): CallExpression<t.int4, "get_bit">
  (arg1: t.param<t.bytea | t.bit | t.null>, arg2: t.param<t.int8 | t.int4 | t.null>): CallExpression<t.int4 | t.null, "get_bit">
} = defineFunction("get_bit")

export const get_byte: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>): CallExpression<t.int4, "get_byte">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "get_byte">
} = defineFunction("get_byte")

export const get_current_ts_config: {
  (): CallExpression<t.regconfig, "get_current_ts_config">
} = defineFunction("get_current_ts_config")

export const getdatabaseencoding: {
  (): CallExpression<t.name, "getdatabaseencoding">
} = defineFunction("getdatabaseencoding")

export const getpgusername: {
  (): CallExpression<t.name, "getpgusername">
} = defineFunction("getpgusername")

export const gin_clean_pending_list: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "gin_clean_pending_list">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "gin_clean_pending_list">
} = defineFunction("gin_clean_pending_list")

export const gin_cmp_tslexeme: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.int4, "gin_cmp_tslexeme">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "gin_cmp_tslexeme">
} = defineFunction("gin_cmp_tslexeme")

export const gin_compare_jsonb: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.int4, "gin_compare_jsonb">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "gin_compare_jsonb">
} = defineFunction("gin_compare_jsonb")

/** 
 * A function determining whether a user has a privilege for table columns
 * 
 * @see https://pgpedia.info/h/has_any_column_privilege.html
 */
export const has_any_column_privilege: {
  /** 
   * A function determining whether a user has a privilege for table columns
   * 
   * @see https://pgpedia.info/h/has_any_column_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_any_column_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_any_column_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_any_column_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_any_column_privilege">
} = defineFunction("has_any_column_privilege", "bool")

/** 
 * A function determining whether a user has a privilege for a table column
 * 
 * @see https://pgpedia.info/h/has_column_privilege.html
 */
export const has_column_privilege: {
  /** 
   * A function determining whether a user has a privilege for a table column
   * 
   * @see https://pgpedia.info/h/has_column_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text | t.int2>, arg4: t.param<t.text>): CallExpression<t.bool, "has_column_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.int2 | t.null>, arg4: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_column_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text | t.int2>, arg3: t.param<t.text>): CallExpression<t.bool, "has_column_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.int2 | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_column_privilege">
} = defineFunction("has_column_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a database
 * 
 * @see https://pgpedia.info/h/has_database_privilege.html
 */
export const has_database_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a database
   * 
   * @see https://pgpedia.info/h/has_database_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_database_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_database_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_database_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_database_privilege">
} = defineFunction("has_database_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a foreign data wrapper
 * 
 * @see https://pgpedia.info/h/has_foreign_data_wrapper_privilege.html
 */
export const has_foreign_data_wrapper_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a foreign data wrapper
   * 
   * @see https://pgpedia.info/h/has_foreign_data_wrapper_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_foreign_data_wrapper_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_foreign_data_wrapper_privilege">
} = defineFunction("has_foreign_data_wrapper_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a function
 * 
 * @see https://pgpedia.info/h/has_function_privilege.html
 */
export const has_function_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a function
   * 
   * @see https://pgpedia.info/h/has_function_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_function_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_function_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_function_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_function_privilege">
} = defineFunction("has_function_privilege", "bool")

/** 
 * A function determining whether a user has a privilege for a language
 * 
 * @see https://pgpedia.info/h/has_language_privilege.html
 */
export const has_language_privilege: {
  /** 
   * A function determining whether a user has a privilege for a language
   * 
   * @see https://pgpedia.info/h/has_language_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_language_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_language_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_language_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_language_privilege">
} = defineFunction("has_language_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a schema
 * 
 * @see https://pgpedia.info/h/has_schema_privilege.html
 */
export const has_schema_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a schema
   * 
   * @see https://pgpedia.info/h/has_schema_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_schema_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_schema_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_schema_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_schema_privilege">
} = defineFunction("has_schema_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a sequence
 * 
 * @see https://pgpedia.info/h/has_sequence_privilege.html
 */
export const has_sequence_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a sequence
   * 
   * @see https://pgpedia.info/h/has_sequence_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_sequence_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_sequence_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_sequence_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_sequence_privilege">
} = defineFunction("has_sequence_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a foreign server
 * 
 * @see https://pgpedia.info/h/has_server_privilege.html
 */
export const has_server_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a foreign server
   * 
   * @see https://pgpedia.info/h/has_server_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_server_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_server_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_server_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_server_privilege">
} = defineFunction("has_server_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a table
 * 
 * @see https://pgpedia.info/h/has_table_privilege.html
 */
export const has_table_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a table
   * 
   * @see https://pgpedia.info/h/has_table_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_table_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_table_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_table_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_table_privilege">
} = defineFunction("has_table_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a tablespace
 * 
 * @see https://pgpedia.info/h/has_tablespace_privilege.html
 */
export const has_tablespace_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a tablespace
   * 
   * @see https://pgpedia.info/h/has_tablespace_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_tablespace_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_tablespace_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_tablespace_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_tablespace_privilege">
} = defineFunction("has_tablespace_privilege", "bool")

/** 
 * A system function determining whether a user has a privilege for a data type
 * 
 * @see https://pgpedia.info/h/has_type_privilege.html
 */
export const has_type_privilege: {
  /** 
   * A system function determining whether a user has a privilege for a data type
   * 
   * @see https://pgpedia.info/h/has_type_privilege.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "has_type_privilege">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_type_privilege">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "has_type_privilege">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "has_type_privilege">
} = defineFunction("has_type_privilege", "bool")

export const hash_array: {
  (arg: t.param<t.anyarray>): CallExpression<t.int4, "hash_array">
  (arg: t.param<t.anyarray | t.null>): CallExpression<t.int4 | t.null, "hash_array">
} = defineFunction("hash_array")

export const hash_array_extended: {
  (arg1: t.param<t.anyarray>, arg2: t.param<t.int8>): CallExpression<t.int8, "hash_array_extended">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hash_array_extended">
} = defineFunction("hash_array_extended")

export const hash_numeric: {
  (arg: t.param<t.numeric>): CallExpression<t.int4, "hash_numeric">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.int4 | t.null, "hash_numeric">
} = defineFunction("hash_numeric")

export const hash_numeric_extended: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.int8>): CallExpression<t.int8, "hash_numeric_extended">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hash_numeric_extended">
} = defineFunction("hash_numeric_extended")

export const hashbpchar: {
  (arg: t.param<t.bpchar>): CallExpression<t.int4, "hashbpchar">
  (arg: t.param<t.bpchar | t.null>): CallExpression<t.int4 | t.null, "hashbpchar">
} = defineFunction("hashbpchar")

export const hashbpcharextended: {
  (arg1: t.param<t.bpchar>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashbpcharextended">
  (arg1: t.param<t.bpchar | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashbpcharextended">
} = defineFunction("hashbpcharextended")

export const hashchar: {
  (arg: t.param<t.char>): CallExpression<t.int4, "hashchar">
  (arg: t.param<t.char | t.null>): CallExpression<t.int4 | t.null, "hashchar">
} = defineFunction("hashchar")

export const hashcharextended: {
  (arg1: t.param<t.char>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashcharextended">
  (arg1: t.param<t.char | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashcharextended">
} = defineFunction("hashcharextended")

export const hashfloat4: {
  (arg: t.param<t.float4>): CallExpression<t.int4, "hashfloat4">
  (arg: t.param<t.float4 | t.null>): CallExpression<t.int4 | t.null, "hashfloat4">
} = defineFunction("hashfloat4")

export const hashfloat4extended: {
  (arg1: t.param<t.float4>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashfloat4extended">
  (arg1: t.param<t.float4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashfloat4extended">
} = defineFunction("hashfloat4extended")

export const hashfloat8: {
  (arg: t.param<t.float8>): CallExpression<t.int4, "hashfloat8">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.int4 | t.null, "hashfloat8">
} = defineFunction("hashfloat8")

export const hashfloat8extended: {
  (arg1: t.param<t.float8>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashfloat8extended">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashfloat8extended">
} = defineFunction("hashfloat8extended")

export const hashinet: {
  (arg: t.param<t.inet>): CallExpression<t.int4, "hashinet">
  (arg: t.param<t.inet | t.null>): CallExpression<t.int4 | t.null, "hashinet">
} = defineFunction("hashinet")

export const hashinetextended: {
  (arg1: t.param<t.inet>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashinetextended">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashinetextended">
} = defineFunction("hashinetextended")

export const hashint2: {
  (arg: t.param<t.int2>): CallExpression<t.int4, "hashint2">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "hashint2">
} = defineFunction("hashint2")

export const hashint2extended: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashint2extended">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashint2extended">
} = defineFunction("hashint2extended")

export const hashint4: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "hashint4">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "hashint4">
} = defineFunction("hashint4")

export const hashint4extended: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashint4extended">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashint4extended">
} = defineFunction("hashint4extended")

export const hashint8: {
  (arg: t.param<t.int8>): CallExpression<t.int4, "hashint8">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "hashint8">
} = defineFunction("hashint8")

export const hashint8extended: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashint8extended">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashint8extended">
} = defineFunction("hashint8extended")

export const hashmacaddr: {
  (arg: t.param<t.macaddr>): CallExpression<t.int4, "hashmacaddr">
  (arg: t.param<t.macaddr | t.null>): CallExpression<t.int4 | t.null, "hashmacaddr">
} = defineFunction("hashmacaddr")

export const hashmacaddrextended: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashmacaddrextended">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashmacaddrextended">
} = defineFunction("hashmacaddrextended")

export const hashname: {
  (arg: t.param<t.name>): CallExpression<t.int4, "hashname">
  (arg: t.param<t.name | t.null>): CallExpression<t.int4 | t.null, "hashname">
} = defineFunction("hashname")

export const hashnameextended: {
  (arg1: t.param<t.name>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashnameextended">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashnameextended">
} = defineFunction("hashnameextended")

export const hashoid: {
  (arg: t.param<t.oid>): CallExpression<t.int4, "hashoid">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int4 | t.null, "hashoid">
} = defineFunction("hashoid")

export const hashoidextended: {
  (arg1: t.param<t.oid>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashoidextended">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashoidextended">
} = defineFunction("hashoidextended")

export const hashtext: {
  (arg: t.param<t.text>): CallExpression<t.int4, "hashtext">
  (arg: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "hashtext">
} = defineFunction("hashtext")

export const hashtextextended: {
  (arg1: t.param<t.text>, arg2: t.param<t.int8>): CallExpression<t.int8, "hashtextextended">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "hashtextextended">
} = defineFunction("hashtextextended")

export const host: {
  (arg: t.param<t.inet>): CallExpression<t.text, "host">
  (arg: t.param<t.inet | t.null>): CallExpression<t.text | t.null, "host">
} = defineFunction("host")

export const hostmask: {
  (arg: t.param<t.inet>): CallExpression<t.inet, "hostmask">
  (arg: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "hostmask">
} = defineFunction("hostmask")

export const in_range: {
  (arg1: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz>, arg2: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz>, arg3: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.numeric | t.interval>, arg4: t.param<t.bool>, arg5: t.param<t.bool>): CallExpression<t.bool, "in_range">
  (arg1: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz | t.null>, arg2: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz | t.null>, arg3: t.param<t.int8 | t.int4 | t.int2 | t.float8 | t.numeric | t.interval | t.null>, arg4: t.param<t.bool | t.null>, arg5: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "in_range">
} = defineFunction("in_range", "bool")

/** 
 * A function returning the client IP address
 * 
 * @see https://pgpedia.info/i/inet_client_addr.html
 */
export const inet_client_addr: {
  /** 
   * A function returning the client IP address
   * 
   * @see https://pgpedia.info/i/inet_client_addr.html
   */
  (): CallExpression<t.inet, "inet_client_addr">
} = defineFunction("inet_client_addr")

/** 
 * A function returning the client port
 * 
 * @see https://pgpedia.info/i/inet_client_port.html
 */
export const inet_client_port: {
  /** 
   * A function returning the client port
   * 
   * @see https://pgpedia.info/i/inet_client_port.html
   */
  (): CallExpression<t.int4, "inet_client_port">
} = defineFunction("inet_client_port")

export const inet_merge: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.cidr, "inet_merge">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.cidr | t.null, "inet_merge">
} = defineFunction("inet_merge")

export const inet_same_family: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "inet_same_family">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "inet_same_family">
} = defineFunction("inet_same_family", "bool")

export const inet_send: {
  (arg: t.param<t.inet>): CallExpression<t.bytea, "inet_send">
  (arg: t.param<t.inet | t.null>): CallExpression<t.bytea | t.null, "inet_send">
} = defineFunction("inet_send")

/** 
 * A system function returning the server IP address
 * 
 * @see https://pgpedia.info/i/inet_server_addr.html
 */
export const inet_server_addr: {
  /** 
   * A system function returning the server IP address
   * 
   * @see https://pgpedia.info/i/inet_server_addr.html
   */
  (): CallExpression<t.inet, "inet_server_addr">
} = defineFunction("inet_server_addr")

/** 
 * A function returning the server IP port
 * 
 * @see https://pgpedia.info/i/inet_server_port.html
 */
export const inet_server_port: {
  /** 
   * A function returning the server IP port
   * 
   * @see https://pgpedia.info/i/inet_server_port.html
   */
  (): CallExpression<t.int4, "inet_server_port">
} = defineFunction("inet_server_port")

export const inetand: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.inet, "inetand">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "inetand">
} = defineFunction("inetand")

export const inetmi: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.int8, "inetmi">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.int8 | t.null, "inetmi">
} = defineFunction("inetmi")

export const inetmi_int8: {
  (arg1: t.param<t.inet>, arg2: t.param<t.int8>): CallExpression<t.inet, "inetmi_int8">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.inet | t.null, "inetmi_int8">
} = defineFunction("inetmi_int8")

export const inetnot: {
  (arg: t.param<t.inet>): CallExpression<t.inet, "inetnot">
  (arg: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "inetnot">
} = defineFunction("inetnot")

export const inetor: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.inet, "inetor">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "inetor">
} = defineFunction("inetor")

export const inetpl: {
  (arg1: t.param<t.inet>, arg2: t.param<t.int8>): CallExpression<t.inet, "inetpl">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.inet | t.null, "inetpl">
} = defineFunction("inetpl")

/** 
 * A system function which converts the first letter of each word to upper case
 * 
 * @see https://pgpedia.info/i/initcap.html
 */
export const initcap: {
  /** 
   * A system function which converts the first letter of each word to upper case
   * 
   * @see https://pgpedia.info/i/initcap.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "initcap">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "initcap">
} = defineFunction("initcap")

export const int2: {
  (arg: t.param<t.float8 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb>): CallExpression<t.int2, "int2">
  (arg: t.param<t.float8 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): CallExpression<t.int2 | t.null, "int2">
} = defineFunction("int2")

export const int24div: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int4, "int24div">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int24div">
} = defineFunction("int24div")

export const int24eq: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24eq">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24eq">
} = defineFunction("int24eq", "bool")

export const int24ge: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24ge">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24ge">
} = defineFunction("int24ge", "bool")

export const int24gt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24gt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24gt">
} = defineFunction("int24gt", "bool")

export const int24le: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24le">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24le">
} = defineFunction("int24le", "bool")

export const int24lt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24lt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24lt">
} = defineFunction("int24lt", "bool")

export const int24mi: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int4, "int24mi">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int24mi">
} = defineFunction("int24mi")

export const int24mul: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int4, "int24mul">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int24mul">
} = defineFunction("int24mul")

export const int24ne: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.bool, "int24ne">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int24ne">
} = defineFunction("int24ne", "bool")

export const int24pl: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int4, "int24pl">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int24pl">
} = defineFunction("int24pl")

export const int28div: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int8, "int28div">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int28div">
} = defineFunction("int28div")

export const int28eq: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28eq">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28eq">
} = defineFunction("int28eq", "bool")

export const int28ge: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28ge">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28ge">
} = defineFunction("int28ge", "bool")

export const int28gt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28gt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28gt">
} = defineFunction("int28gt", "bool")

export const int28le: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28le">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28le">
} = defineFunction("int28le", "bool")

export const int28lt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28lt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28lt">
} = defineFunction("int28lt", "bool")

export const int28mi: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int8, "int28mi">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int28mi">
} = defineFunction("int28mi")

export const int28mul: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int8, "int28mul">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int28mul">
} = defineFunction("int28mul")

export const int28ne: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.bool, "int28ne">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int28ne">
} = defineFunction("int28ne", "bool")

export const int28pl: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int8>): CallExpression<t.int8, "int28pl">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int28pl">
} = defineFunction("int28pl")

export const int2_avg_accum: {
  (arg1: t.param<t.array<t.int8>>, arg2: t.param<t.int2>): CallExpression<t.array<t.int8>, "int2_avg_accum">
  (arg1: t.param<t.array<t.int8> | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.array<t.int8> | t.null, "int2_avg_accum">
} = defineFunction("int2_avg_accum")

export const int2_avg_accum_inv: {
  (arg1: t.param<t.array<t.int8>>, arg2: t.param<t.int2>): CallExpression<t.array<t.int8>, "int2_avg_accum_inv">
  (arg1: t.param<t.array<t.int8> | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.array<t.int8> | t.null, "int2_avg_accum_inv">
} = defineFunction("int2_avg_accum_inv")

export const int2_mul_cash: {
  (arg1: t.param<t.int2>, arg2: t.param<t.money>): CallExpression<t.money, "int2_mul_cash">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "int2_mul_cash">
} = defineFunction("int2_mul_cash")

export const int2_sum: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int8, "int2_sum">
} = defineFunction("int2_sum")

export const int2abs: {
  (arg: t.param<t.int2>): CallExpression<t.int2, "int2abs">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2abs">
} = defineFunction("int2abs")

export const int2and: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2and">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2and">
} = defineFunction("int2and")

export const int2div: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2div">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2div">
} = defineFunction("int2div")

export const int2eq: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2eq">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2eq">
} = defineFunction("int2eq", "bool")

export const int2ge: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2ge">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2ge">
} = defineFunction("int2ge", "bool")

export const int2gt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2gt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2gt">
} = defineFunction("int2gt", "bool")

export const int2int4_sum: {
  (arg: t.param<t.array<t.int8>>): CallExpression<t.int8, "int2int4_sum">
  (arg: t.param<t.array<t.int8> | t.null>): CallExpression<t.int8 | t.null, "int2int4_sum">
} = defineFunction("int2int4_sum")

export const int2larger: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2larger">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2larger">
} = defineFunction("int2larger")

export const int2le: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2le">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2le">
} = defineFunction("int2le", "bool")

export const int2lt: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2lt">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2lt">
} = defineFunction("int2lt", "bool")

export const int2mi: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2mi">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2mi">
} = defineFunction("int2mi")

export const int2mod: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2mod">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2mod">
} = defineFunction("int2mod")

export const int2mul: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2mul">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2mul">
} = defineFunction("int2mul")

export const int2ne: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.bool, "int2ne">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int2ne">
} = defineFunction("int2ne", "bool")

export const int2not: {
  (arg: t.param<t.int2>): CallExpression<t.int2, "int2not">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2not">
} = defineFunction("int2not")

export const int2or: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2or">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2or">
} = defineFunction("int2or")

export const int2pl: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2pl">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2pl">
} = defineFunction("int2pl")

export const int2send: {
  (arg: t.param<t.int2>): CallExpression<t.bytea, "int2send">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.bytea | t.null, "int2send">
} = defineFunction("int2send")

export const int2shl: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int2, "int2shl">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int2 | t.null, "int2shl">
} = defineFunction("int2shl")

export const int2shr: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int4>): CallExpression<t.int2, "int2shr">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int2 | t.null, "int2shr">
} = defineFunction("int2shr")

export const int2smaller: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2smaller">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2smaller">
} = defineFunction("int2smaller")

export const int2um: {
  (arg: t.param<t.int2>): CallExpression<t.int2, "int2um">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2um">
} = defineFunction("int2um")

export const int2up: {
  (arg: t.param<t.int2>): CallExpression<t.int2, "int2up">
  (arg: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2up">
} = defineFunction("int2up")

export const int2xor: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "int2xor">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "int2xor">
} = defineFunction("int2xor")

export const int4: {
  (arg: t.param<t.char | t.int2 | t.float8 | t.float4 | t.int8 | t.bit | t.numeric | t.jsonb | t.bool>): CallExpression<t.int4, "int4">
  (arg: t.param<t.char | t.int2 | t.float8 | t.float4 | t.int8 | t.bit | t.numeric | t.jsonb | t.bool | t.null>): CallExpression<t.int4 | t.null, "int4">
} = defineFunction("int4")

export const int42div: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.int4, "int42div">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "int42div">
} = defineFunction("int42div")

export const int42eq: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42eq">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42eq">
} = defineFunction("int42eq", "bool")

export const int42ge: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42ge">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42ge">
} = defineFunction("int42ge", "bool")

export const int42gt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42gt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42gt">
} = defineFunction("int42gt", "bool")

export const int42le: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42le">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42le">
} = defineFunction("int42le", "bool")

export const int42lt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42lt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42lt">
} = defineFunction("int42lt", "bool")

export const int42mi: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.int4, "int42mi">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "int42mi">
} = defineFunction("int42mi")

export const int42mul: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.int4, "int42mul">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "int42mul">
} = defineFunction("int42mul")

export const int42ne: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.bool, "int42ne">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int42ne">
} = defineFunction("int42ne", "bool")

export const int42pl: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int2>): CallExpression<t.int4, "int42pl">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int4 | t.null, "int42pl">
} = defineFunction("int42pl")

export const int48div: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int8, "int48div">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int48div">
} = defineFunction("int48div")

export const int48eq: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48eq">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48eq">
} = defineFunction("int48eq", "bool")

export const int48ge: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48ge">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48ge">
} = defineFunction("int48ge", "bool")

export const int48gt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48gt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48gt">
} = defineFunction("int48gt", "bool")

export const int48le: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48le">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48le">
} = defineFunction("int48le", "bool")

export const int48lt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48lt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48lt">
} = defineFunction("int48lt", "bool")

export const int48mi: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int8, "int48mi">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int48mi">
} = defineFunction("int48mi")

export const int48mul: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int8, "int48mul">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int48mul">
} = defineFunction("int48mul")

export const int48ne: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.bool, "int48ne">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int48ne">
} = defineFunction("int48ne", "bool")

export const int48pl: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int8, "int48pl">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int48pl">
} = defineFunction("int48pl")

export const int4_avg_accum: {
  (arg1: t.param<t.array<t.int8>>, arg2: t.param<t.int4>): CallExpression<t.array<t.int8>, "int4_avg_accum">
  (arg1: t.param<t.array<t.int8> | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.array<t.int8> | t.null, "int4_avg_accum">
} = defineFunction("int4_avg_accum")

export const int4_avg_accum_inv: {
  (arg1: t.param<t.array<t.int8>>, arg2: t.param<t.int4>): CallExpression<t.array<t.int8>, "int4_avg_accum_inv">
  (arg1: t.param<t.array<t.int8> | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.array<t.int8> | t.null, "int4_avg_accum_inv">
} = defineFunction("int4_avg_accum_inv")

export const int4_avg_combine: {
  (arg1: t.param<t.array<t.int8>>, arg2: t.param<t.array<t.int8>>): CallExpression<t.array<t.int8>, "int4_avg_combine">
  (arg1: t.param<t.array<t.int8> | t.null>, arg2: t.param<t.array<t.int8> | t.null>): CallExpression<t.array<t.int8> | t.null, "int4_avg_combine">
} = defineFunction("int4_avg_combine")

export const int4_mul_cash: {
  (arg1: t.param<t.int4>, arg2: t.param<t.money>): CallExpression<t.money, "int4_mul_cash">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "int4_mul_cash">
} = defineFunction("int4_mul_cash")

export const int4_sum: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int4_sum">
} = defineFunction("int4_sum")

export const int4abs: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "int4abs">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4abs">
} = defineFunction("int4abs")

export const int4and: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4and">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4and">
} = defineFunction("int4and")

export const int4div: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4div">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4div">
} = defineFunction("int4div")

export const int4eq: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4eq">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4eq">
} = defineFunction("int4eq", "bool")

export const int4ge: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4ge">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4ge">
} = defineFunction("int4ge", "bool")

export const int4gt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4gt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4gt">
} = defineFunction("int4gt", "bool")

export const int4inc: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "int4inc">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4inc">
} = defineFunction("int4inc")

export const int4larger: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4larger">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4larger">
} = defineFunction("int4larger")

export const int4le: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4le">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4le">
} = defineFunction("int4le", "bool")

export const int4lt: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4lt">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4lt">
} = defineFunction("int4lt", "bool")

export const int4mi: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4mi">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4mi">
} = defineFunction("int4mi")

export const int4mod: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4mod">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4mod">
} = defineFunction("int4mod")

export const int4mul: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4mul">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4mul">
} = defineFunction("int4mul")

export const int4ne: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "int4ne">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int4ne">
} = defineFunction("int4ne", "bool")

export const int4not: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "int4not">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4not">
} = defineFunction("int4not")

export const int4or: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4or">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4or">
} = defineFunction("int4or")

export const int4pl: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4pl">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4pl">
} = defineFunction("int4pl")

export const int4range: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4range, "int4range">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>, arg3: t.param<t.text>): CallExpression<t.int4range, "int4range">
} = defineFunction("int4range")

export const int4range_canonical: {
  (arg: t.param<t.int4range>): CallExpression<t.int4range, "int4range_canonical">
  (arg: t.param<t.int4range | t.null>): CallExpression<t.int4range | t.null, "int4range_canonical">
} = defineFunction("int4range_canonical")

export const int4range_subdiff: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.float8, "int4range_subdiff">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.float8 | t.null, "int4range_subdiff">
} = defineFunction("int4range_subdiff")

export const int4send: {
  (arg: t.param<t.int4>): CallExpression<t.bytea, "int4send">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "int4send">
} = defineFunction("int4send")

export const int4shl: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4shl">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4shl">
} = defineFunction("int4shl")

export const int4shr: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4shr">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4shr">
} = defineFunction("int4shr")

export const int4smaller: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4smaller">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4smaller">
} = defineFunction("int4smaller")

export const int4um: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "int4um">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4um">
} = defineFunction("int4um")

export const int4up: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "int4up">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4up">
} = defineFunction("int4up")

export const int4xor: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "int4xor">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "int4xor">
} = defineFunction("int4xor")

export const int8: {
  (arg: t.param<t.int4 | t.float8 | t.float4 | t.int2 | t.oid | t.numeric | t.jsonb | t.bit>): CallExpression<t.int8, "int8">
  (arg: t.param<t.int4 | t.float8 | t.float4 | t.int2 | t.oid | t.numeric | t.jsonb | t.bit | t.null>): CallExpression<t.int8 | t.null, "int8">
} = defineFunction("int8")

export const int82div: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int8, "int82div">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int8 | t.null, "int82div">
} = defineFunction("int82div")

export const int82eq: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82eq">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82eq">
} = defineFunction("int82eq", "bool")

export const int82ge: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82ge">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82ge">
} = defineFunction("int82ge", "bool")

export const int82gt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82gt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82gt">
} = defineFunction("int82gt", "bool")

export const int82le: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82le">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82le">
} = defineFunction("int82le", "bool")

export const int82lt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82lt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82lt">
} = defineFunction("int82lt", "bool")

export const int82mi: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int8, "int82mi">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int8 | t.null, "int82mi">
} = defineFunction("int82mi")

export const int82mul: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int8, "int82mul">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int8 | t.null, "int82mul">
} = defineFunction("int82mul")

export const int82ne: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.bool, "int82ne">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.bool | t.null, "int82ne">
} = defineFunction("int82ne", "bool")

export const int82pl: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int2>): CallExpression<t.int8, "int82pl">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int8 | t.null, "int82pl">
} = defineFunction("int82pl")

export const int84div: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int84div">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int84div">
} = defineFunction("int84div")

export const int84eq: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84eq">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84eq">
} = defineFunction("int84eq", "bool")

export const int84ge: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84ge">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84ge">
} = defineFunction("int84ge", "bool")

export const int84gt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84gt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84gt">
} = defineFunction("int84gt", "bool")

export const int84le: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84le">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84le">
} = defineFunction("int84le", "bool")

export const int84lt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84lt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84lt">
} = defineFunction("int84lt", "bool")

export const int84mi: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int84mi">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int84mi">
} = defineFunction("int84mi")

export const int84mul: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int84mul">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int84mul">
} = defineFunction("int84mul")

export const int84ne: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.bool, "int84ne">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "int84ne">
} = defineFunction("int84ne", "bool")

export const int84pl: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int84pl">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int84pl">
} = defineFunction("int84pl")

export const int8_avg: {
  (arg: t.param<t.array<t.int8>>): CallExpression<t.numeric, "int8_avg">
  (arg: t.param<t.array<t.int8> | t.null>): CallExpression<t.numeric | t.null, "int8_avg">
} = defineFunction("int8_avg")

export const int8_mul_cash: {
  (arg1: t.param<t.int8>, arg2: t.param<t.money>): CallExpression<t.money, "int8_mul_cash">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.money | t.null>): CallExpression<t.money | t.null, "int8_mul_cash">
} = defineFunction("int8_mul_cash")

export const int8_sum: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.int8>): CallExpression<t.numeric, "int8_sum">
} = defineFunction("int8_sum")

export const int8abs: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8abs">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8abs">
} = defineFunction("int8abs")

export const int8and: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8and">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8and">
} = defineFunction("int8and")

export const int8dec: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8dec">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8dec">
} = defineFunction("int8dec")

export const int8dec_any: {
  (arg1: t.param<t.int8>, arg2: t.param<t.any>): CallExpression<t.int8, "int8dec_any">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.any | t.null>): CallExpression<t.int8 | t.null, "int8dec_any">
} = defineFunction("int8dec_any")

export const int8div: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8div">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8div">
} = defineFunction("int8div")

export const int8eq: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8eq">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8eq">
} = defineFunction("int8eq", "bool")

export const int8ge: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8ge">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8ge">
} = defineFunction("int8ge", "bool")

export const int8gt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8gt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8gt">
} = defineFunction("int8gt", "bool")

export const int8inc: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8inc">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8inc">
} = defineFunction("int8inc")

export const int8inc_any: {
  (arg1: t.param<t.int8>, arg2: t.param<t.any>): CallExpression<t.int8, "int8inc_any">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.any | t.null>): CallExpression<t.int8 | t.null, "int8inc_any">
} = defineFunction("int8inc_any")

export const int8inc_float8_float8: {
  (arg1: t.param<t.int8>, arg2: t.param<t.float8>, arg3: t.param<t.float8>): CallExpression<t.int8, "int8inc_float8_float8">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.float8 | t.null>, arg3: t.param<t.float8 | t.null>): CallExpression<t.int8 | t.null, "int8inc_float8_float8">
} = defineFunction("int8inc_float8_float8")

export const int8larger: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8larger">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8larger">
} = defineFunction("int8larger")

export const int8le: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8le">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8le">
} = defineFunction("int8le", "bool")

export const int8lt: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8lt">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8lt">
} = defineFunction("int8lt", "bool")

export const int8mi: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8mi">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8mi">
} = defineFunction("int8mi")

export const int8mod: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8mod">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8mod">
} = defineFunction("int8mod")

export const int8mul: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8mul">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8mul">
} = defineFunction("int8mul")

export const int8ne: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.bool, "int8ne">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "int8ne">
} = defineFunction("int8ne", "bool")

export const int8not: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8not">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8not">
} = defineFunction("int8not")

export const int8or: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8or">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8or">
} = defineFunction("int8or")

export const int8pl: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8pl">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8pl">
} = defineFunction("int8pl")

export const int8pl_inet: {
  (arg1: t.param<t.int8>, arg2: t.param<t.inet>): CallExpression<t.inet, "int8pl_inet">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "int8pl_inet">
} = defineFunction("int8pl_inet")

export const int8range: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8range, "int8range">
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>, arg3: t.param<t.text>): CallExpression<t.int8range, "int8range">
} = defineFunction("int8range")

export const int8range_canonical: {
  (arg: t.param<t.int8range>): CallExpression<t.int8range, "int8range_canonical">
  (arg: t.param<t.int8range | t.null>): CallExpression<t.int8range | t.null, "int8range_canonical">
} = defineFunction("int8range_canonical")

export const int8range_subdiff: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.float8, "int8range_subdiff">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.float8 | t.null, "int8range_subdiff">
} = defineFunction("int8range_subdiff")

export const int8send: {
  (arg: t.param<t.int8>): CallExpression<t.bytea, "int8send">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bytea | t.null, "int8send">
} = defineFunction("int8send")

export const int8shl: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int8shl">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int8shl">
} = defineFunction("int8shl")

export const int8shr: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int4>): CallExpression<t.int8, "int8shr">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "int8shr">
} = defineFunction("int8shr")

export const int8smaller: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8smaller">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8smaller">
} = defineFunction("int8smaller")

export const int8um: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8um">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8um">
} = defineFunction("int8um")

export const int8up: {
  (arg: t.param<t.int8>): CallExpression<t.int8, "int8up">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8up">
} = defineFunction("int8up")

export const int8xor: {
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "int8xor">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "int8xor">
} = defineFunction("int8xor")

export const integer_pl_date: {
  (arg1: t.param<t.int4>, arg2: t.param<t.date>): CallExpression<t.date, "integer_pl_date">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.date | t.null, "integer_pl_date">
} = defineFunction("integer_pl_date")

export const interval: {
  (arg1: t.param<t.interval>, arg2: t.param<t.int4>): CallExpression<t.interval, "interval">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.interval | t.null, "interval">
  (arg: t.param<t.time>): CallExpression<t.interval, "interval">
  (arg: t.param<t.time | t.null>): CallExpression<t.interval | t.null, "interval">
} = defineFunction("interval")

export const interval_accum: {
  (arg1: t.param<t.array<t.interval>>, arg2: t.param<t.interval>): CallExpression<t.array<t.interval>, "interval_accum">
  (arg1: t.param<t.array<t.interval> | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.array<t.interval> | t.null, "interval_accum">
} = defineFunction("interval_accum")

export const interval_accum_inv: {
  (arg1: t.param<t.array<t.interval>>, arg2: t.param<t.interval>): CallExpression<t.array<t.interval>, "interval_accum_inv">
  (arg1: t.param<t.array<t.interval> | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.array<t.interval> | t.null, "interval_accum_inv">
} = defineFunction("interval_accum_inv")

export const interval_avg: {
  (arg: t.param<t.array<t.interval>>): CallExpression<t.interval, "interval_avg">
  (arg: t.param<t.array<t.interval> | t.null>): CallExpression<t.interval | t.null, "interval_avg">
} = defineFunction("interval_avg")

export const interval_cmp: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.int4, "interval_cmp">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.int4 | t.null, "interval_cmp">
} = defineFunction("interval_cmp")

export const interval_combine: {
  (arg1: t.param<t.array<t.interval>>, arg2: t.param<t.array<t.interval>>): CallExpression<t.array<t.interval>, "interval_combine">
  (arg1: t.param<t.array<t.interval> | t.null>, arg2: t.param<t.array<t.interval> | t.null>): CallExpression<t.array<t.interval> | t.null, "interval_combine">
} = defineFunction("interval_combine")

export const interval_div: {
  (arg1: t.param<t.interval>, arg2: t.param<t.float8>): CallExpression<t.interval, "interval_div">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.interval | t.null, "interval_div">
} = defineFunction("interval_div")

export const interval_eq: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_eq">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_eq">
} = defineFunction("interval_eq", "bool")

export const interval_ge: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_ge">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_ge">
} = defineFunction("interval_ge", "bool")

export const interval_gt: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_gt">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_gt">
} = defineFunction("interval_gt", "bool")

export const interval_hash: {
  (arg: t.param<t.interval>): CallExpression<t.int4, "interval_hash">
  (arg: t.param<t.interval | t.null>): CallExpression<t.int4 | t.null, "interval_hash">
} = defineFunction("interval_hash")

export const interval_hash_extended: {
  (arg1: t.param<t.interval>, arg2: t.param<t.int8>): CallExpression<t.int8, "interval_hash_extended">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "interval_hash_extended">
} = defineFunction("interval_hash_extended")

export const interval_larger: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.interval, "interval_larger">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "interval_larger">
} = defineFunction("interval_larger")

export const interval_le: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_le">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_le">
} = defineFunction("interval_le", "bool")

export const interval_lt: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_lt">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_lt">
} = defineFunction("interval_lt", "bool")

export const interval_mi: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.interval, "interval_mi">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "interval_mi">
} = defineFunction("interval_mi")

export const interval_mul: {
  (arg1: t.param<t.interval>, arg2: t.param<t.float8>): CallExpression<t.interval, "interval_mul">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.interval | t.null, "interval_mul">
} = defineFunction("interval_mul")

export const interval_ne: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.bool, "interval_ne">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.bool | t.null, "interval_ne">
} = defineFunction("interval_ne", "bool")

export const interval_pl: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.interval, "interval_pl">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "interval_pl">
} = defineFunction("interval_pl")

export const interval_pl_date: {
  (arg1: t.param<t.interval>, arg2: t.param<t.date>): CallExpression<t.timestamp, "interval_pl_date">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.timestamp | t.null, "interval_pl_date">
} = defineFunction("interval_pl_date")

export const interval_pl_time: {
  (arg1: t.param<t.interval>, arg2: t.param<t.time>): CallExpression<t.time, "interval_pl_time">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.time | t.null, "interval_pl_time">
} = defineFunction("interval_pl_time")

export const interval_pl_timestamp: {
  (arg1: t.param<t.interval>, arg2: t.param<t.timestamp>): CallExpression<t.timestamp, "interval_pl_timestamp">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.timestamp | t.null, "interval_pl_timestamp">
} = defineFunction("interval_pl_timestamp")

export const interval_pl_timestamptz: {
  (arg1: t.param<t.interval>, arg2: t.param<t.timestamptz>): CallExpression<t.timestamptz, "interval_pl_timestamptz">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.timestamptz | t.null, "interval_pl_timestamptz">
} = defineFunction("interval_pl_timestamptz")

export const interval_pl_timetz: {
  (arg1: t.param<t.interval>, arg2: t.param<t.timetz>): CallExpression<t.timetz, "interval_pl_timetz">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.timetz | t.null, "interval_pl_timetz">
} = defineFunction("interval_pl_timetz")

export const interval_send: {
  (arg: t.param<t.interval>): CallExpression<t.bytea, "interval_send">
  (arg: t.param<t.interval | t.null>): CallExpression<t.bytea | t.null, "interval_send">
} = defineFunction("interval_send")

export const interval_smaller: {
  (arg1: t.param<t.interval>, arg2: t.param<t.interval>): CallExpression<t.interval, "interval_smaller">
  (arg1: t.param<t.interval | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "interval_smaller">
} = defineFunction("interval_smaller")

export const interval_um: {
  (arg: t.param<t.interval>): CallExpression<t.interval, "interval_um">
  (arg: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "interval_um">
} = defineFunction("interval_um")

export const is_normalized: {
  (arg1: t.param<t.text>, arg2?: t.param<t.text>): CallExpression<t.bool, "is_normalized">
  (arg1: t.param<t.text | t.null>, arg2?: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "is_normalized">
} = defineFunction("is_normalized", "bool")

export const isfinite: {
  (arg: t.param<t.date | t.timestamptz | t.interval | t.timestamp>): CallExpression<t.bool, "isfinite">
  (arg: t.param<t.date | t.timestamptz | t.interval | t.timestamp | t.null>): CallExpression<t.bool | t.null, "isfinite">
} = defineFunction("isfinite", "bool")

export const ishorizontal: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "ishorizontal">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "ishorizontal">
} = defineFunction("ishorizontal", "bool")

export const isvertical: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "isvertical">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "isvertical">
} = defineFunction("isvertical", "bool")

export const json_agg: {
  (arg: t.aggParam<t.anyelement>): Aggregate<t.json, "json_agg">
} = defineFunction("json_agg")

export const json_array_element: {
  (from_json: t.param<t.json>, element_index: t.param<t.int4>): CallExpression<t.json, "json_array_element">
  (from_json: t.param<t.json | t.null>, element_index: t.param<t.int4 | t.null>): CallExpression<t.json | t.null, "json_array_element">
} = defineFunction("json_array_element")

export const json_array_element_text: {
  (from_json: t.param<t.json>, element_index: t.param<t.int4>): CallExpression<t.text, "json_array_element_text">
  (from_json: t.param<t.json | t.null>, element_index: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "json_array_element_text">
} = defineFunction("json_array_element_text")

export const json_array_elements: {
  (from_json: t.param<t.json | t.null>): SetRef<t.json, "json_array_elements">
} = defineSetFunction("json_array_elements")

export const json_array_elements_text: {
  (from_json: t.param<t.json | t.null>): SetRef<t.text, "json_array_elements_text">
} = defineSetFunction("json_array_elements_text")

export const json_array_length: {
  (arg: t.param<t.json>): CallExpression<t.int4, "json_array_length">
  (arg: t.param<t.json | t.null>): CallExpression<t.int4 | t.null, "json_array_length">
} = defineFunction("json_array_length")

export const json_build_array: {
  (...args: t.param<t.any>[]): CallExpression<t.json, "json_build_array">
  (): CallExpression<t.json, "json_build_array">
} = defineFunction("json_build_array")

export const json_build_object: {
  (...args: t.param<t.any>[]): CallExpression<t.json, "json_build_object">
  (): CallExpression<t.json, "json_build_object">
} = defineFunction("json_build_object")

/** 
 * A function for extracting a JSON sub-object at the specified path
 * 
 * @see https://pgpedia.info/j/json_extract_path.html
 */
export const json_extract_path: {
  /** 
   * A function for extracting a JSON sub-object at the specified path
   * 
   * @see https://pgpedia.info/j/json_extract_path.html
   */
  (from_json: t.param<t.json>, path_elems: t.param<t.array<t.text>>): CallExpression<t.json, "json_extract_path">
  (from_json: t.param<t.json | t.null>, path_elems: t.param<t.array<t.text> | t.null>): CallExpression<t.json | t.null, "json_extract_path">
} = defineFunction("json_extract_path")

/** 
 * A function for extracting a JSON sub-object at the specified path as text
 * 
 * @see https://pgpedia.info/j/json_extract_path_text.html
 */
export const json_extract_path_text: {
  /** 
   * A function for extracting a JSON sub-object at the specified path as text
   * 
   * @see https://pgpedia.info/j/json_extract_path_text.html
   */
  (from_json: t.param<t.json>, path_elems: t.param<t.array<t.text>>): CallExpression<t.text, "json_extract_path_text">
  (from_json: t.param<t.json | t.null>, path_elems: t.param<t.array<t.text> | t.null>): CallExpression<t.text | t.null, "json_extract_path_text">
} = defineFunction("json_extract_path_text")

export const json_object: {
  (arg: t.param<t.array<t.text>>): CallExpression<t.json, "json_object">
  (arg: t.param<t.array<t.text> | t.null>): CallExpression<t.json | t.null, "json_object">
  (arg1: t.param<t.array<t.text>>, arg2: t.param<t.array<t.text>>): CallExpression<t.json, "json_object">
  (arg1: t.param<t.array<t.text> | t.null>, arg2: t.param<t.array<t.text> | t.null>): CallExpression<t.json | t.null, "json_object">
} = defineFunction("json_object")

export const json_object_agg: {
  (arg1: t.aggParam<t.any>, arg2: t.aggParam<t.any>): Aggregate<t.json, "json_object_agg">
} = defineFunction("json_object_agg")

export const json_object_field: {
  (from_json: t.param<t.json>, field_name: t.param<t.text>): CallExpression<t.json, "json_object_field">
  (from_json: t.param<t.json | t.null>, field_name: t.param<t.text | t.null>): CallExpression<t.json | t.null, "json_object_field">
} = defineFunction("json_object_field")

export const json_object_field_text: {
  (from_json: t.param<t.json>, field_name: t.param<t.text>): CallExpression<t.text, "json_object_field_text">
  (from_json: t.param<t.json | t.null>, field_name: t.param<t.text | t.null>): CallExpression<t.text | t.null, "json_object_field_text">
} = defineFunction("json_object_field_text")

/** 
 * A function returning the set of keys in the top-level JSON object
 * 
 * @see https://pgpedia.info/j/json_object_keys.html
 */
export const json_object_keys: {
  /** 
   * A function returning the set of keys in the top-level JSON object
   * 
   * @see https://pgpedia.info/j/json_object_keys.html
   */
  (arg: t.param<t.json | t.null>): SetRef<t.text, "json_object_keys">
} = defineSetFunction("json_object_keys")

export const json_populate_record: {
  (base: t.param<t.anyelement>, from_json: t.param<t.json>, use_json_as_text?: t.param<t.bool>): CallExpression<t.anyelement, "json_populate_record">
} = defineFunction("json_populate_record")

/** 
 * A function expanding a JSON object array to a set of rows
 * 
 * @see https://pgpedia.info/j/json_populate_recordset.html
 */
export const json_populate_recordset: {
  /** 
   * A function expanding a JSON object array to a set of rows
   * 
   * @see https://pgpedia.info/j/json_populate_recordset.html
   */
  (base: t.param<t.anyelement>, from_json: t.param<t.json>, use_json_as_text?: t.param<t.bool>): SetRef<t.anyelement, "json_populate_recordset">
} = defineSetFunction("json_populate_recordset")

export const json_send: {
  (arg: t.param<t.json>): CallExpression<t.bytea, "json_send">
  (arg: t.param<t.json | t.null>): CallExpression<t.bytea | t.null, "json_send">
} = defineFunction("json_send")

export const json_strip_nulls: {
  (arg: t.param<t.json>): CallExpression<t.json, "json_strip_nulls">
  (arg: t.param<t.json | t.null>): CallExpression<t.json | t.null, "json_strip_nulls">
} = defineFunction("json_strip_nulls")

export const json_to_tsvector: {
  (arg1: t.param<t.json>, arg2: t.param<t.jsonb>): CallExpression<t.tsvector, "json_to_tsvector">
  (arg1: t.param<t.json | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.tsvector | t.null, "json_to_tsvector">
  (arg1: t.param<t.regconfig>, arg2: t.param<t.json>, arg3: t.param<t.jsonb>): CallExpression<t.tsvector, "json_to_tsvector">
  (arg1: t.param<t.regconfig | t.null>, arg2: t.param<t.json | t.null>, arg3: t.param<t.jsonb | t.null>): CallExpression<t.tsvector | t.null, "json_to_tsvector">
} = defineFunction("json_to_tsvector")

/** 
 * A function returning the type of a json value as a string
 * 
 * @see https://pgpedia.info/j/json_typeof.html
 */
export const json_typeof: {
  /** 
   * A function returning the type of a json value as a string
   * 
   * @see https://pgpedia.info/j/json_typeof.html
   */
  (arg: t.param<t.json>): CallExpression<t.text, "json_typeof">
  (arg: t.param<t.json | t.null>): CallExpression<t.text | t.null, "json_typeof">
} = defineFunction("json_typeof")

export const jsonb_agg: {
  (arg: t.aggParam<t.anyelement>): Aggregate<t.jsonb, "jsonb_agg">
} = defineFunction("jsonb_agg")

export const jsonb_array_element: {
  (from_json: t.param<t.jsonb>, element_index: t.param<t.int4>): CallExpression<t.jsonb, "jsonb_array_element">
  (from_json: t.param<t.jsonb | t.null>, element_index: t.param<t.int4 | t.null>): CallExpression<t.jsonb | t.null, "jsonb_array_element">
} = defineFunction("jsonb_array_element")

export const jsonb_array_element_text: {
  (from_json: t.param<t.jsonb>, element_index: t.param<t.int4>): CallExpression<t.text, "jsonb_array_element_text">
  (from_json: t.param<t.jsonb | t.null>, element_index: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "jsonb_array_element_text">
} = defineFunction("jsonb_array_element_text")

export const jsonb_array_elements: {
  (from_json: t.param<t.jsonb | t.null>): SetRef<t.jsonb, "jsonb_array_elements">
} = defineSetFunction("jsonb_array_elements")

export const jsonb_array_elements_text: {
  (from_json: t.param<t.jsonb | t.null>): SetRef<t.text, "jsonb_array_elements_text">
} = defineSetFunction("jsonb_array_elements_text")

export const jsonb_array_length: {
  (arg: t.param<t.jsonb>): CallExpression<t.int4, "jsonb_array_length">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.int4 | t.null, "jsonb_array_length">
} = defineFunction("jsonb_array_length")

export const jsonb_build_array: {
  (...args: t.param<t.any>[]): CallExpression<t.jsonb, "jsonb_build_array">
  (): CallExpression<t.jsonb, "jsonb_build_array">
} = defineFunction("jsonb_build_array")

export const jsonb_build_object: {
  (...args: t.param<t.any>[]): CallExpression<t.jsonb, "jsonb_build_object">
  (): CallExpression<t.jsonb, "jsonb_build_object">
} = defineFunction("jsonb_build_object")

export const jsonb_cmp: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.int4, "jsonb_cmp">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.int4 | t.null, "jsonb_cmp">
} = defineFunction("jsonb_cmp")

export const jsonb_concat: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.jsonb, "jsonb_concat">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.jsonb | t.null, "jsonb_concat">
} = defineFunction("jsonb_concat")

export const jsonb_contained: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_contained">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_contained">
} = defineFunction("jsonb_contained", "bool")

export const jsonb_contains: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_contains">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_contains">
} = defineFunction("jsonb_contains", "bool")

export const jsonb_delete: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.text | t.int4>): CallExpression<t.jsonb, "jsonb_delete">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.text | t.int4 | t.null>): CallExpression<t.jsonb | t.null, "jsonb_delete">
  (from_json: t.param<t.jsonb>, path_elems: t.param<t.array<t.text>>): CallExpression<t.jsonb, "jsonb_delete">
  (from_json: t.param<t.jsonb | t.null>, path_elems: t.param<t.array<t.text> | t.null>): CallExpression<t.jsonb | t.null, "jsonb_delete">
} = defineFunction("jsonb_delete")

export const jsonb_delete_path: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.array<t.text>>): CallExpression<t.jsonb, "jsonb_delete_path">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.array<t.text> | t.null>): CallExpression<t.jsonb | t.null, "jsonb_delete_path">
} = defineFunction("jsonb_delete_path")

export const jsonb_eq: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_eq">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_eq">
} = defineFunction("jsonb_eq", "bool")

export const jsonb_exists: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.text>): CallExpression<t.bool, "jsonb_exists">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "jsonb_exists">
} = defineFunction("jsonb_exists", "bool")

export const jsonb_exists_all: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.array<t.text>>): CallExpression<t.bool, "jsonb_exists_all">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.array<t.text> | t.null>): CallExpression<t.bool | t.null, "jsonb_exists_all">
} = defineFunction("jsonb_exists_all", "bool")

export const jsonb_exists_any: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.array<t.text>>): CallExpression<t.bool, "jsonb_exists_any">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.array<t.text> | t.null>): CallExpression<t.bool | t.null, "jsonb_exists_any">
} = defineFunction("jsonb_exists_any", "bool")

export const jsonb_extract_path: {
  (from_json: t.param<t.jsonb>, path_elems: t.param<t.array<t.text>>): CallExpression<t.jsonb, "jsonb_extract_path">
  (from_json: t.param<t.jsonb | t.null>, path_elems: t.param<t.array<t.text> | t.null>): CallExpression<t.jsonb | t.null, "jsonb_extract_path">
} = defineFunction("jsonb_extract_path")

export const jsonb_extract_path_text: {
  (from_json: t.param<t.jsonb>, path_elems: t.param<t.array<t.text>>): CallExpression<t.text, "jsonb_extract_path_text">
  (from_json: t.param<t.jsonb | t.null>, path_elems: t.param<t.array<t.text> | t.null>): CallExpression<t.text | t.null, "jsonb_extract_path_text">
} = defineFunction("jsonb_extract_path_text")

export const jsonb_ge: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_ge">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_ge">
} = defineFunction("jsonb_ge", "bool")

export const jsonb_gt: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_gt">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_gt">
} = defineFunction("jsonb_gt", "bool")

export const jsonb_hash: {
  (arg: t.param<t.jsonb>): CallExpression<t.int4, "jsonb_hash">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.int4 | t.null, "jsonb_hash">
} = defineFunction("jsonb_hash")

export const jsonb_hash_extended: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.int8>): CallExpression<t.int8, "jsonb_hash_extended">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "jsonb_hash_extended">
} = defineFunction("jsonb_hash_extended")

export const jsonb_insert: {
  (jsonb_in: t.param<t.jsonb>, path: t.param<t.array<t.text>>, replacement: t.param<t.jsonb>, insert_after?: t.param<t.bool>): CallExpression<t.jsonb, "jsonb_insert">
  (jsonb_in: t.param<t.jsonb | t.null>, path: t.param<t.array<t.text> | t.null>, replacement: t.param<t.jsonb | t.null>, insert_after?: t.param<t.bool | t.null>): CallExpression<t.jsonb | t.null, "jsonb_insert">
} = defineFunction("jsonb_insert")

export const jsonb_le: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_le">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_le">
} = defineFunction("jsonb_le", "bool")

export const jsonb_lt: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_lt">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_lt">
} = defineFunction("jsonb_lt", "bool")

export const jsonb_ne: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.bool, "jsonb_ne">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.bool | t.null, "jsonb_ne">
} = defineFunction("jsonb_ne", "bool")

export const jsonb_object: {
  (arg: t.param<t.array<t.text>>): CallExpression<t.jsonb, "jsonb_object">
  (arg: t.param<t.array<t.text> | t.null>): CallExpression<t.jsonb | t.null, "jsonb_object">
  (arg1: t.param<t.array<t.text>>, arg2: t.param<t.array<t.text>>): CallExpression<t.jsonb, "jsonb_object">
  (arg1: t.param<t.array<t.text> | t.null>, arg2: t.param<t.array<t.text> | t.null>): CallExpression<t.jsonb | t.null, "jsonb_object">
} = defineFunction("jsonb_object")

export const jsonb_object_agg: {
  (arg1: t.aggParam<t.any>, arg2: t.aggParam<t.any>): Aggregate<t.jsonb, "jsonb_object_agg">
} = defineFunction("jsonb_object_agg")

export const jsonb_object_field: {
  (from_json: t.param<t.jsonb>, field_name: t.param<t.text>): CallExpression<t.jsonb, "jsonb_object_field">
  (from_json: t.param<t.jsonb | t.null>, field_name: t.param<t.text | t.null>): CallExpression<t.jsonb | t.null, "jsonb_object_field">
} = defineFunction("jsonb_object_field")

export const jsonb_object_field_text: {
  (from_json: t.param<t.jsonb>, field_name: t.param<t.text>): CallExpression<t.text, "jsonb_object_field_text">
  (from_json: t.param<t.jsonb | t.null>, field_name: t.param<t.text | t.null>): CallExpression<t.text | t.null, "jsonb_object_field_text">
} = defineFunction("jsonb_object_field_text")

/** 
 * A function returning the set of keys in the top-level jsonb JSON object
 * 
 * @see https://pgpedia.info/j/jsonb_object_keys.html
 */
export const jsonb_object_keys: {
  /** 
   * A function returning the set of keys in the top-level jsonb JSON object
   * 
   * @see https://pgpedia.info/j/jsonb_object_keys.html
   */
  (arg: t.param<t.jsonb | t.null>): SetRef<t.text, "jsonb_object_keys">
} = defineSetFunction("jsonb_object_keys")

export const jsonb_populate_record: {
  (arg1: t.param<t.anyelement>, arg2: t.param<t.jsonb>): CallExpression<t.anyelement, "jsonb_populate_record">
} = defineFunction("jsonb_populate_record")

export const jsonb_populate_recordset: {
  (arg1: t.param<t.anyelement>, arg2: t.param<t.jsonb>): SetRef<t.anyelement, "jsonb_populate_recordset">
} = defineSetFunction("jsonb_populate_recordset")

/** 
 * A function for converting jsonb to formatted text
 * 
 * @see https://pgpedia.info/j/jsonb_pretty.html
 */
export const jsonb_pretty: {
  /** 
   * A function for converting jsonb to formatted text
   * 
   * @see https://pgpedia.info/j/jsonb_pretty.html
   */
  (arg: t.param<t.jsonb>): CallExpression<t.text, "jsonb_pretty">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.text | t.null, "jsonb_pretty">
} = defineFunction("jsonb_pretty")

export const jsonb_send: {
  (arg: t.param<t.jsonb>): CallExpression<t.bytea, "jsonb_send">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.bytea | t.null, "jsonb_send">
} = defineFunction("jsonb_send")

export const jsonb_set: {
  (jsonb_in: t.param<t.jsonb>, path: t.param<t.array<t.text>>, replacement: t.param<t.jsonb>, create_if_missing?: t.param<t.bool>): CallExpression<t.jsonb, "jsonb_set">
  (jsonb_in: t.param<t.jsonb | t.null>, path: t.param<t.array<t.text> | t.null>, replacement: t.param<t.jsonb | t.null>, create_if_missing?: t.param<t.bool | t.null>): CallExpression<t.jsonb | t.null, "jsonb_set">
} = defineFunction("jsonb_set")

export const jsonb_set_lax: {
  (jsonb_in: t.param<t.jsonb>, path: t.param<t.array<t.text>>, replacement: t.param<t.jsonb>, create_if_missing?: t.param<t.bool>, null_value_treatment?: t.param<t.text>): CallExpression<t.jsonb, "jsonb_set_lax">
} = defineFunction("jsonb_set_lax")

export const jsonb_strip_nulls: {
  (arg: t.param<t.jsonb>): CallExpression<t.jsonb, "jsonb_strip_nulls">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.jsonb | t.null, "jsonb_strip_nulls">
} = defineFunction("jsonb_strip_nulls")

export const jsonb_to_tsvector: {
  (arg1: t.param<t.jsonb>, arg2: t.param<t.jsonb>): CallExpression<t.tsvector, "jsonb_to_tsvector">
  (arg1: t.param<t.jsonb | t.null>, arg2: t.param<t.jsonb | t.null>): CallExpression<t.tsvector | t.null, "jsonb_to_tsvector">
  (arg1: t.param<t.regconfig>, arg2: t.param<t.jsonb>, arg3: t.param<t.jsonb>): CallExpression<t.tsvector, "jsonb_to_tsvector">
  (arg1: t.param<t.regconfig | t.null>, arg2: t.param<t.jsonb | t.null>, arg3: t.param<t.jsonb | t.null>): CallExpression<t.tsvector | t.null, "jsonb_to_tsvector">
} = defineFunction("jsonb_to_tsvector")

/** 
 * A function returning the type of a jsonb value as a string
 * 
 * @see https://pgpedia.info/j/jsonb_typeof.html
 */
export const jsonb_typeof: {
  /** 
   * A function returning the type of a jsonb value as a string
   * 
   * @see https://pgpedia.info/j/jsonb_typeof.html
   */
  (arg: t.param<t.jsonb>): CallExpression<t.text, "jsonb_typeof">
  (arg: t.param<t.jsonb | t.null>): CallExpression<t.text | t.null, "jsonb_typeof">
} = defineFunction("jsonb_typeof")

/** 
 * A function converting 30 day intervals into months
 * 
 * @see https://pgpedia.info/j/justify_days.html
 */
export const justify_days: {
  /** 
   * A function converting 30 day intervals into months
   * 
   * @see https://pgpedia.info/j/justify_days.html
   */
  (arg: t.param<t.interval>): CallExpression<t.interval, "justify_days">
  (arg: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "justify_days">
} = defineFunction("justify_days")

/** 
 * A function converting 24 hour intervals into days
 * 
 * @see https://pgpedia.info/j/justify_hours.html
 */
export const justify_hours: {
  /** 
   * A function converting 24 hour intervals into days
   * 
   * @see https://pgpedia.info/j/justify_hours.html
   */
  (arg: t.param<t.interval>): CallExpression<t.interval, "justify_hours">
  (arg: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "justify_hours">
} = defineFunction("justify_hours")

/** 
 * A function for adjusting days and hours units in an interval
 * 
 * @see https://pgpedia.info/j/justify_interval.html
 */
export const justify_interval: {
  /** 
   * A function for adjusting days and hours units in an interval
   * 
   * @see https://pgpedia.info/j/justify_interval.html
   */
  (arg: t.param<t.interval>): CallExpression<t.interval, "justify_interval">
  (arg: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "justify_interval">
} = defineFunction("justify_interval")

export const lastval: {
  (): CallExpression<t.int8, "lastval">
} = defineFunction("lastval")

/** 
 * A system function for obtaining the least common multiple
 * 
 * @see https://pgpedia.info/l/lcm-function.html
 */
export const lcm: {
  /** 
   * A system function for obtaining the least common multiple
   * 
   * @see https://pgpedia.info/l/lcm-function.html
   */
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "lcm">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lcm">
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "lcm">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "lcm">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "lcm">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "lcm">
} = defineFunction("lcm")

/** 
 * A function returning characters from the left of a string
 * 
 * @see https://pgpedia.info/l/left.html
 */
export const left: {
  /** 
   * A function returning characters from the left of a string
   * 
   * @see https://pgpedia.info/l/left.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "left">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "left">
} = defineFunction("left")

/** 
 * A function returning the number of elements in the provided parameter
 * 
 * @see https://pgpedia.info/l/length.html
 */
export const length: {
  /** 
   * A function returning the number of elements in the provided parameter
   * 
   * @see https://pgpedia.info/l/length.html
   */
  (arg: t.param<t.text | t.bpchar | t.bit | t.bytea | t.tsvector>): CallExpression<t.int4, "length">
  (arg: t.param<t.text | t.bpchar | t.bit | t.bytea | t.tsvector | t.null>): CallExpression<t.int4 | t.null, "length">
  (arg1: t.param<t.bytea>, arg2: t.param<t.name>): CallExpression<t.int4, "length">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.int4 | t.null, "length">
} = defineFunction("length")

export const like: {
  (arg1: t.param<t.text | t.name | t.bytea>, arg2: t.param<t.text | t.bytea>): CallExpression<t.bool, "like">
  (arg1: t.param<t.text | t.name | t.bytea | t.null>, arg2: t.param<t.text | t.bytea | t.null>): CallExpression<t.bool | t.null, "like">
} = defineFunction("like", "bool")

export const like_escape: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "like_escape">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "like_escape">
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bytea, "like_escape">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "like_escape">
} = defineFunction("like_escape")

export const ln: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "ln">
} = defineFunction("ln")

export const lo_close: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "lo_close">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lo_close">
} = defineFunction("lo_close")

export const lo_creat: {
  (arg: t.param<t.int4>): CallExpression<t.oid, "lo_creat">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.oid | t.null, "lo_creat">
} = defineFunction("lo_creat")

export const lo_create: {
  (arg: t.param<t.oid>): CallExpression<t.oid, "lo_create">
  (arg: t.param<t.oid | t.null>): CallExpression<t.oid | t.null, "lo_create">
} = defineFunction("lo_create")

export const lo_export: {
  (arg1: t.param<t.oid>, arg2: t.param<t.text>): CallExpression<t.int4, "lo_export">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "lo_export">
} = defineFunction("lo_export")

/** 
 * A function for creating and populating a large object
 * 
 * @see https://pgpedia.info/l/lo_from_bytea.html
 */
export const lo_from_bytea: {
  /** 
   * A function for creating and populating a large object
   * 
   * @see https://pgpedia.info/l/lo_from_bytea.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.bytea>): CallExpression<t.oid, "lo_from_bytea">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.oid | t.null, "lo_from_bytea">
} = defineFunction("lo_from_bytea")

/** 
 * A function for extracting data from a large object
 * 
 * @see https://pgpedia.info/l/lo_get.html
 */
export const lo_get: {
  /** 
   * A function for extracting data from a large object
   * 
   * @see https://pgpedia.info/l/lo_get.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bytea, "lo_get">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bytea | t.null, "lo_get">
  (arg1: t.param<t.oid>, arg2: t.param<t.int8>, arg3: t.param<t.int4>): CallExpression<t.bytea, "lo_get">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "lo_get">
} = defineFunction("lo_get")

export const lo_import: {
  (arg: t.param<t.text>): CallExpression<t.oid, "lo_import">
  (arg: t.param<t.text | t.null>): CallExpression<t.oid | t.null, "lo_import">
  (arg1: t.param<t.text>, arg2: t.param<t.oid>): CallExpression<t.oid, "lo_import">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.oid | t.null, "lo_import">
} = defineFunction("lo_import")

export const lo_lseek: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.int4, "lo_lseek">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lo_lseek">
} = defineFunction("lo_lseek")

export const lo_lseek64: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>, arg3: t.param<t.int4>): CallExpression<t.int8, "lo_lseek64">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "lo_lseek64">
} = defineFunction("lo_lseek64")

export const lo_open: {
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>): CallExpression<t.int4, "lo_open">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lo_open">
} = defineFunction("lo_open")

/** 
 * A function for writing data to a large object
 * 
 * @see https://pgpedia.info/l/lo_put.html
 */
export const lo_put: {
  /** 
   * A function for writing data to a large object
   * 
   * @see https://pgpedia.info/l/lo_put.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.int8>, arg3: t.param<t.bytea>): CallExpression<t.void, "lo_put">
} = defineFunction("lo_put")

export const lo_tell: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "lo_tell">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lo_tell">
} = defineFunction("lo_tell")

export const lo_tell64: {
  (arg: t.param<t.int4>): CallExpression<t.int8, "lo_tell64">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int8 | t.null, "lo_tell64">
} = defineFunction("lo_tell64")

export const lo_truncate: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "lo_truncate">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "lo_truncate">
} = defineFunction("lo_truncate")

export const lo_truncate64: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int8>): CallExpression<t.int4, "lo_truncate64">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int4 | t.null, "lo_truncate64">
} = defineFunction("lo_truncate64")

export const lo_unlink: {
  (arg: t.param<t.oid>): CallExpression<t.int4, "lo_unlink">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int4 | t.null, "lo_unlink">
} = defineFunction("lo_unlink")

export const log: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "log">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "log">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "log">
} = defineFunction("log")

export const log10: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "log10">
} = defineFunction("log10")

export const loread: {
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bytea, "loread">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "loread">
} = defineFunction("loread")

/** 
 * A system function for converting a string to lower case
 * 
 * @see https://pgpedia.info/l/lower.html
 */
export const lower: {
  /** 
   * A system function for converting a string to lower case
   * 
   * @see https://pgpedia.info/l/lower.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "lower">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "lower">
} = defineFunction("lower")

export const lowrite: {
  (arg1: t.param<t.int4>, arg2: t.param<t.bytea>): CallExpression<t.int4, "lowrite">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.int4 | t.null, "lowrite">
} = defineFunction("lowrite")

/** 
 * A system function for padding the left side of a string
 * 
 * @see https://pgpedia.info/l/lpad.html
 */
export const lpad: {
  /** 
   * A system function for padding the left side of a string
   * 
   * @see https://pgpedia.info/l/lpad.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>, arg3: t.param<t.text>): CallExpression<t.text, "lpad">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.text | t.null, "lpad">
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "lpad">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "lpad">
} = defineFunction("lpad")

/** 
 * A system function which trims characters from the left side of a string
 * 
 * @see https://pgpedia.info/l/ltrim.html
 */
export const ltrim: {
  /** 
   * A system function which trims characters from the left side of a string
   * 
   * @see https://pgpedia.info/l/ltrim.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "ltrim">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "ltrim">
  (arg: t.param<t.text>): CallExpression<t.text, "ltrim">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "ltrim">
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bytea, "ltrim">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "ltrim">
} = defineFunction("ltrim")

export const macaddr_and: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.macaddr, "macaddr_and">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.macaddr | t.null, "macaddr_and">
} = defineFunction("macaddr_and")

export const macaddr_cmp: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.int4, "macaddr_cmp">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.int4 | t.null, "macaddr_cmp">
} = defineFunction("macaddr_cmp")

export const macaddr_eq: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_eq">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_eq">
} = defineFunction("macaddr_eq", "bool")

export const macaddr_ge: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_ge">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_ge">
} = defineFunction("macaddr_ge", "bool")

export const macaddr_gt: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_gt">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_gt">
} = defineFunction("macaddr_gt", "bool")

export const macaddr_le: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_le">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_le">
} = defineFunction("macaddr_le", "bool")

export const macaddr_lt: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_lt">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_lt">
} = defineFunction("macaddr_lt", "bool")

export const macaddr_ne: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.bool, "macaddr_ne">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.bool | t.null, "macaddr_ne">
} = defineFunction("macaddr_ne", "bool")

export const macaddr_not: {
  (arg: t.param<t.macaddr>): CallExpression<t.macaddr, "macaddr_not">
  (arg: t.param<t.macaddr | t.null>): CallExpression<t.macaddr | t.null, "macaddr_not">
} = defineFunction("macaddr_not")

export const macaddr_or: {
  (arg1: t.param<t.macaddr>, arg2: t.param<t.macaddr>): CallExpression<t.macaddr, "macaddr_or">
  (arg1: t.param<t.macaddr | t.null>, arg2: t.param<t.macaddr | t.null>): CallExpression<t.macaddr | t.null, "macaddr_or">
} = defineFunction("macaddr_or")

export const macaddr_send: {
  (arg: t.param<t.macaddr>): CallExpression<t.bytea, "macaddr_send">
  (arg: t.param<t.macaddr | t.null>): CallExpression<t.bytea | t.null, "macaddr_send">
} = defineFunction("macaddr_send")

/** 
 * A function for creating a date from individual values
 * 
 * @see https://pgpedia.info/m/make_date.html
 */
export const make_date: {
  /** 
   * A function for creating a date from individual values
   * 
   * @see https://pgpedia.info/m/make_date.html
   */
  (year: t.param<t.int4>, month: t.param<t.int4>, day: t.param<t.int4>): CallExpression<t.date, "make_date">
  (year: t.param<t.int4 | t.null>, month: t.param<t.int4 | t.null>, day: t.param<t.int4 | t.null>): CallExpression<t.date | t.null, "make_date">
} = defineFunction("make_date")

/** 
 * A function creating an interval from individual values
 * 
 * @see https://pgpedia.info/m/make_interval.html
 */
export const make_interval: {
  /** 
   * A function creating an interval from individual values
   * 
   * @see https://pgpedia.info/m/make_interval.html
   */
  (years?: t.param<t.int4>, months?: t.param<t.int4>, weeks?: t.param<t.int4>, days?: t.param<t.int4>, hours?: t.param<t.int4>, mins?: t.param<t.int4>, secs?: t.param<t.float8>): CallExpression<t.interval, "make_interval">
  (years?: t.param<t.int4 | t.null>, months?: t.param<t.int4 | t.null>, weeks?: t.param<t.int4 | t.null>, days?: t.param<t.int4 | t.null>, hours?: t.param<t.int4 | t.null>, mins?: t.param<t.int4 | t.null>, secs?: t.param<t.float8 | t.null>): CallExpression<t.interval | t.null, "make_interval">
} = defineFunction("make_interval")

/** 
 * A function for creating a time from individual values
 * 
 * @see https://pgpedia.info/m/make_time.html
 */
export const make_time: {
  /** 
   * A function for creating a time from individual values
   * 
   * @see https://pgpedia.info/m/make_time.html
   */
  (hour: t.param<t.int4>, min: t.param<t.int4>, sec: t.param<t.float8>): CallExpression<t.time, "make_time">
  (hour: t.param<t.int4 | t.null>, min: t.param<t.int4 | t.null>, sec: t.param<t.float8 | t.null>): CallExpression<t.time | t.null, "make_time">
} = defineFunction("make_time")

/** 
 * A function for creating a timestamp from individual values
 * 
 * @see https://pgpedia.info/m/make_timestamp.html
 */
export const make_timestamp: {
  /** 
   * A function for creating a timestamp from individual values
   * 
   * @see https://pgpedia.info/m/make_timestamp.html
   */
  (year: t.param<t.int4>, month: t.param<t.int4>, mday: t.param<t.int4>, hour: t.param<t.int4>, min: t.param<t.int4>, sec: t.param<t.float8>): CallExpression<t.timestamp, "make_timestamp">
  (year: t.param<t.int4 | t.null>, month: t.param<t.int4 | t.null>, mday: t.param<t.int4 | t.null>, hour: t.param<t.int4 | t.null>, min: t.param<t.int4 | t.null>, sec: t.param<t.float8 | t.null>): CallExpression<t.timestamp | t.null, "make_timestamp">
} = defineFunction("make_timestamp")

/** 
 * A function for creating a timestamptz from individual values
 * 
 * @see https://pgpedia.info/m/make_timestamptz.html
 */
export const make_timestamptz: {
  /** 
   * A function for creating a timestamptz from individual values
   * 
   * @see https://pgpedia.info/m/make_timestamptz.html
   */
  (year: t.param<t.int4>, month: t.param<t.int4>, mday: t.param<t.int4>, hour: t.param<t.int4>, min: t.param<t.int4>, sec: t.param<t.float8>): CallExpression<t.timestamptz, "make_timestamptz">
  (year: t.param<t.int4 | t.null>, month: t.param<t.int4 | t.null>, mday: t.param<t.int4 | t.null>, hour: t.param<t.int4 | t.null>, min: t.param<t.int4 | t.null>, sec: t.param<t.float8 | t.null>): CallExpression<t.timestamptz | t.null, "make_timestamptz">
  (year: t.param<t.int4>, month: t.param<t.int4>, mday: t.param<t.int4>, hour: t.param<t.int4>, min: t.param<t.int4>, sec: t.param<t.float8>, timezone: t.param<t.text>): CallExpression<t.timestamptz, "make_timestamptz">
  (year: t.param<t.int4 | t.null>, month: t.param<t.int4 | t.null>, mday: t.param<t.int4 | t.null>, hour: t.param<t.int4 | t.null>, min: t.param<t.int4 | t.null>, sec: t.param<t.float8 | t.null>, timezone: t.param<t.text | t.null>): CallExpression<t.timestamptz | t.null, "make_timestamptz">
} = defineFunction("make_timestamptz")

export const masklen: {
  (arg: t.param<t.inet>): CallExpression<t.int4, "masklen">
  (arg: t.param<t.inet | t.null>): CallExpression<t.int4 | t.null, "masklen">
} = defineFunction("masklen")

export const max: {
  <T extends t.int8 | t.int4 | t.int2 | t.oid | t.float4 | t.float8 | t.date | t.time | t.timetz | t.money | t.timestamp | t.timestamptz | t.interval | t.text | t.numeric | t.anyarray | t.bpchar | t.inet>(arg: t.aggParam<T>): Aggregate<T, "max">
} = defineFunction("max")

/** 
 * A function for generating an MD5 hash
 * 
 * @see https://pgpedia.info/m/md5.html
 */
export const md5: {
  /** 
   * A function for generating an MD5 hash
   * 
   * @see https://pgpedia.info/m/md5.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "md5">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "md5">
  (arg: t.param<t.bytea>): CallExpression<t.text, "md5">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.text | t.null, "md5">
} = defineFunction("md5")

export const min: {
  <T extends t.int8 | t.int4 | t.int2 | t.oid | t.float4 | t.float8 | t.date | t.time | t.timetz | t.money | t.timestamp | t.timestamptz | t.interval | t.text | t.numeric | t.anyarray | t.bpchar | t.inet>(arg: t.aggParam<T>): Aggregate<T, "min">
} = defineFunction("min")

/** 
 * A function returning the minimum scale needed to represent a value
 * 
 * @see https://pgpedia.info/m/min_scale.html
 */
export const min_scale: {
  /** 
   * A function returning the minimum scale needed to represent a value
   * 
   * @see https://pgpedia.info/m/min_scale.html
   */
  (arg: t.param<t.numeric>): CallExpression<t.int4, "min_scale">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.int4 | t.null, "min_scale">
} = defineFunction("min_scale")

export const mod: {
  (arg1: t.param<t.int2>, arg2: t.param<t.int2>): CallExpression<t.int2, "mod">
  (arg1: t.param<t.int2 | t.null>, arg2: t.param<t.int2 | t.null>): CallExpression<t.int2 | t.null, "mod">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.int4, "mod">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "mod">
  (arg1: t.param<t.int8>, arg2: t.param<t.int8>): CallExpression<t.int8, "mod">
  (arg1: t.param<t.int8 | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "mod">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "mod">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "mod">
} = defineFunction("mod")

export const money: {
  (arg: t.param<t.numeric | t.int4 | t.int8>): CallExpression<t.money, "money">
  (arg: t.param<t.numeric | t.int4 | t.int8 | t.null>): CallExpression<t.money | t.null, "money">
} = defineFunction("money")

export const mul_d_interval: {
  (arg1: t.param<t.float8>, arg2: t.param<t.interval>): CallExpression<t.interval, "mul_d_interval">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.interval | t.null, "mul_d_interval">
} = defineFunction("mul_d_interval")

export const name: {
  (arg: t.param<t.text | t.bpchar | t.varchar>): CallExpression<t.name, "name">
  (arg: t.param<t.text | t.bpchar | t.varchar | t.null>): CallExpression<t.name | t.null, "name">
} = defineFunction("name")

export const nameconcatoid: {
  (arg1: t.param<t.name>, arg2: t.param<t.oid>): CallExpression<t.name, "nameconcatoid">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.name | t.null, "nameconcatoid">
} = defineFunction("nameconcatoid")

export const nameeq: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "nameeq">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "nameeq">
} = defineFunction("nameeq", "bool")

export const nameeqtext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameeqtext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameeqtext">
} = defineFunction("nameeqtext", "bool")

export const namege: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "namege">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "namege">
} = defineFunction("namege", "bool")

export const namegetext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namegetext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namegetext">
} = defineFunction("namegetext", "bool")

export const namegt: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "namegt">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "namegt">
} = defineFunction("namegt", "bool")

export const namegttext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namegttext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namegttext">
} = defineFunction("namegttext", "bool")

export const nameiclike: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameiclike">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameiclike">
} = defineFunction("nameiclike", "bool")

export const nameicnlike: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameicnlike">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameicnlike">
} = defineFunction("nameicnlike", "bool")

export const nameicregexeq: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameicregexeq">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameicregexeq">
} = defineFunction("nameicregexeq", "bool")

export const nameicregexne: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameicregexne">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameicregexne">
} = defineFunction("nameicregexne", "bool")

export const namele: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "namele">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "namele">
} = defineFunction("namele", "bool")

export const nameletext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameletext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameletext">
} = defineFunction("nameletext", "bool")

export const namelike: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namelike">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namelike">
} = defineFunction("namelike", "bool")

export const namelt: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "namelt">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "namelt">
} = defineFunction("namelt", "bool")

export const namelttext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namelttext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namelttext">
} = defineFunction("namelttext", "bool")

export const namene: {
  (arg1: t.param<t.name>, arg2: t.param<t.name>): CallExpression<t.bool, "namene">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "namene">
} = defineFunction("namene", "bool")

export const namenetext: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namenetext">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namenetext">
} = defineFunction("namenetext", "bool")

export const namenlike: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "namenlike">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "namenlike">
} = defineFunction("namenlike", "bool")

export const nameregexeq: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameregexeq">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameregexeq">
} = defineFunction("nameregexeq", "bool")

export const nameregexne: {
  (arg1: t.param<t.name>, arg2: t.param<t.text>): CallExpression<t.bool, "nameregexne">
  (arg1: t.param<t.name | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "nameregexne">
} = defineFunction("nameregexne", "bool")

export const namesend: {
  (arg: t.param<t.name>): CallExpression<t.bytea, "namesend">
  (arg: t.param<t.name | t.null>): CallExpression<t.bytea | t.null, "namesend">
} = defineFunction("namesend")

export const netmask: {
  (arg: t.param<t.inet>): CallExpression<t.inet, "netmask">
  (arg: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "netmask">
} = defineFunction("netmask")

export const network: {
  (arg: t.param<t.inet>): CallExpression<t.cidr, "network">
  (arg: t.param<t.inet | t.null>): CallExpression<t.cidr | t.null, "network">
} = defineFunction("network")

export const network_cmp: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.int4, "network_cmp">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.int4 | t.null, "network_cmp">
} = defineFunction("network_cmp")

export const network_eq: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_eq">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_eq">
} = defineFunction("network_eq", "bool")

export const network_ge: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_ge">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_ge">
} = defineFunction("network_ge", "bool")

export const network_gt: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_gt">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_gt">
} = defineFunction("network_gt", "bool")

export const network_larger: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.inet, "network_larger">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "network_larger">
} = defineFunction("network_larger")

export const network_le: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_le">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_le">
} = defineFunction("network_le", "bool")

export const network_lt: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_lt">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_lt">
} = defineFunction("network_lt", "bool")

export const network_ne: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_ne">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_ne">
} = defineFunction("network_ne", "bool")

export const network_overlap: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_overlap">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_overlap">
} = defineFunction("network_overlap", "bool")

export const network_smaller: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.inet, "network_smaller">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.inet | t.null, "network_smaller">
} = defineFunction("network_smaller")

export const network_sub: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_sub">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_sub">
} = defineFunction("network_sub", "bool")

export const network_subeq: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_subeq">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_subeq">
} = defineFunction("network_subeq", "bool")

export const network_sup: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_sup">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_sup">
} = defineFunction("network_sup", "bool")

export const network_supeq: {
  (arg1: t.param<t.inet>, arg2: t.param<t.inet>): CallExpression<t.bool, "network_supeq">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.inet | t.null>): CallExpression<t.bool | t.null, "network_supeq">
} = defineFunction("network_supeq", "bool")

export const nextval: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "nextval">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "nextval">
} = defineFunction("nextval")

export const normalize: {
  (arg1: t.param<t.text>, arg2?: t.param<t.text>): CallExpression<t.text, "normalize">
  (arg1: t.param<t.text | t.null>, arg2?: t.param<t.text | t.null>): CallExpression<t.text | t.null, "normalize">
} = defineFunction("normalize")

export const notlike: {
  (arg1: t.param<t.text | t.name | t.bytea>, arg2: t.param<t.text | t.bytea>): CallExpression<t.bool, "notlike">
  (arg1: t.param<t.text | t.name | t.bytea | t.null>, arg2: t.param<t.text | t.bytea | t.null>): CallExpression<t.bool | t.null, "notlike">
} = defineFunction("notlike", "bool")

export const now: {
  (): CallExpression<t.timestamptz, "now">
} = defineFunction("now")

export const ntile: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "ntile">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "ntile">
} = defineFunction("ntile")

export const num_nonnulls: {
  (...args: t.param<t.any>[]): CallExpression<t.int4, "num_nonnulls">
} = defineFunction("num_nonnulls")

export const num_nulls: {
  (...args: t.param<t.any>[]): CallExpression<t.int4, "num_nulls">
} = defineFunction("num_nulls")

/** 
 * A data type for storing numbers with a very large number of digits
 * 
 * @see https://pgpedia.info/n/numeric-data-type
 */
export const numeric: {
  /** 
   * A data type for storing numbers with a very large number of digits
   * 
   * @see https://pgpedia.info/n/numeric-data-type
   */
  (arg: t.param<t.money | t.int4 | t.float4 | t.float8 | t.int8 | t.int2 | t.jsonb>): CallExpression<t.numeric, "numeric">
  (arg: t.param<t.money | t.int4 | t.float4 | t.float8 | t.int8 | t.int2 | t.jsonb | t.null>): CallExpression<t.numeric | t.null, "numeric">
  (arg1: t.param<t.numeric>, arg2: t.param<t.int4>): CallExpression<t.numeric, "numeric">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.numeric | t.null, "numeric">
} = defineFunction("numeric")

export const numeric_abs: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_abs">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_abs">
} = defineFunction("numeric_abs")

export const numeric_add: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_add">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_add">
} = defineFunction("numeric_add")

export const numeric_cmp: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.int4, "numeric_cmp">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.int4 | t.null, "numeric_cmp">
} = defineFunction("numeric_cmp")

export const numeric_div: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_div">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_div">
} = defineFunction("numeric_div")

export const numeric_div_trunc: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_div_trunc">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_div_trunc">
} = defineFunction("numeric_div_trunc")

export const numeric_eq: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_eq">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_eq">
} = defineFunction("numeric_eq", "bool")

export const numeric_exp: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_exp">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_exp">
} = defineFunction("numeric_exp")

export const numeric_ge: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_ge">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_ge">
} = defineFunction("numeric_ge", "bool")

export const numeric_gt: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_gt">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_gt">
} = defineFunction("numeric_gt", "bool")

export const numeric_inc: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_inc">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_inc">
} = defineFunction("numeric_inc")

export const numeric_larger: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_larger">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_larger">
} = defineFunction("numeric_larger")

export const numeric_le: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_le">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_le">
} = defineFunction("numeric_le", "bool")

export const numeric_ln: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_ln">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_ln">
} = defineFunction("numeric_ln")

export const numeric_log: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_log">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_log">
} = defineFunction("numeric_log")

export const numeric_lt: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_lt">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_lt">
} = defineFunction("numeric_lt", "bool")

export const numeric_mod: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_mod">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_mod">
} = defineFunction("numeric_mod")

export const numeric_mul: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_mul">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_mul">
} = defineFunction("numeric_mul")

export const numeric_ne: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.bool, "numeric_ne">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.bool | t.null, "numeric_ne">
} = defineFunction("numeric_ne", "bool")

export const numeric_power: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_power">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_power">
} = defineFunction("numeric_power")

export const numeric_send: {
  (arg: t.param<t.numeric>): CallExpression<t.bytea, "numeric_send">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.bytea | t.null, "numeric_send">
} = defineFunction("numeric_send")

export const numeric_smaller: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_smaller">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_smaller">
} = defineFunction("numeric_smaller")

export const numeric_sqrt: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_sqrt">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_sqrt">
} = defineFunction("numeric_sqrt")

export const numeric_sub: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "numeric_sub">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_sub">
} = defineFunction("numeric_sub")

export const numeric_uminus: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_uminus">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_uminus">
} = defineFunction("numeric_uminus")

export const numeric_uplus: {
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "numeric_uplus">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "numeric_uplus">
} = defineFunction("numeric_uplus")

export const numrange: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numrange, "numrange">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>, arg3: t.param<t.text>): CallExpression<t.numrange, "numrange">
} = defineFunction("numrange")

export const numrange_subdiff: {
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.float8, "numrange_subdiff">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.float8 | t.null, "numrange_subdiff">
} = defineFunction("numrange_subdiff")

/** 
 * A function returning an object's comment
 * 
 * @see https://pgpedia.info/o/obj_description.html
 */
export const obj_description: {
  /** 
   * A function returning an object's comment
   * 
   * @see https://pgpedia.info/o/obj_description.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "obj_description">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "obj_description">
  (arg1: t.param<t.oid>, arg2: t.param<t.name>): CallExpression<t.text, "obj_description">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.text | t.null, "obj_description">
} = defineFunction("obj_description")

/** 
 * A function returning the number of bytes in the provided parameter
 * 
 * @see https://pgpedia.info/o/octet_length.html
 */
export const octet_length: {
  /** 
   * A function returning the number of bytes in the provided parameter
   * 
   * @see https://pgpedia.info/o/octet_length.html
   */
  (arg: t.param<t.bytea | t.text | t.bpchar | t.bit>): CallExpression<t.int4, "octet_length">
  (arg: t.param<t.bytea | t.text | t.bpchar | t.bit | t.null>): CallExpression<t.int4 | t.null, "octet_length">
} = defineFunction("octet_length")

export const oid: {
  (arg: t.param<t.int8>): CallExpression<t.oid, "oid">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.oid | t.null, "oid">
} = defineFunction("oid")

export const oideq: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oideq">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oideq">
} = defineFunction("oideq", "bool")

export const oidge: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oidge">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oidge">
} = defineFunction("oidge", "bool")

export const oidgt: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oidgt">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oidgt">
} = defineFunction("oidgt", "bool")

export const oidlarger: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.oid, "oidlarger">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.oid | t.null, "oidlarger">
} = defineFunction("oidlarger")

export const oidle: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oidle">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oidle">
} = defineFunction("oidle", "bool")

export const oidlt: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oidlt">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oidlt">
} = defineFunction("oidlt", "bool")

export const oidne: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.bool, "oidne">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "oidne">
} = defineFunction("oidne", "bool")

export const oidsend: {
  (arg: t.param<t.oid>): CallExpression<t.bytea, "oidsend">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bytea | t.null, "oidsend">
} = defineFunction("oidsend")

export const oidsmaller: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.oid, "oidsmaller">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.oid | t.null, "oidsmaller">
} = defineFunction("oidsmaller")

export const overlaps: {
  (arg1: t.param<t.timetz | t.timestamptz | t.time | t.timestamp>, arg2: t.param<t.timetz | t.timestamptz | t.time | t.timestamp | t.interval>, arg3: t.param<t.timetz | t.timestamptz | t.time | t.timestamp>, arg4: t.param<t.timetz | t.timestamptz | t.time | t.timestamp | t.interval>): CallExpression<t.bool, "overlaps">
} = defineFunction("overlaps", "bool")

export const overlay: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>, arg3: t.param<t.int4>, arg4: t.param<t.int4>): CallExpression<t.bytea, "overlay">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>, arg3: t.param<t.int4 | t.null>, arg4: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "overlay">
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>, arg3: t.param<t.int4>): CallExpression<t.bytea, "overlay">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "overlay">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.int4>, arg4: t.param<t.int4>): CallExpression<t.text, "overlay">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.int4 | t.null>, arg4: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "overlay">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.int4>): CallExpression<t.text, "overlay">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "overlay">
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>, arg3: t.param<t.int4>, arg4: t.param<t.int4>): CallExpression<t.bit, "overlay">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>, arg3: t.param<t.int4 | t.null>, arg4: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "overlay">
  (arg1: t.param<t.bit>, arg2: t.param<t.bit>, arg3: t.param<t.int4>): CallExpression<t.bit, "overlay">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.bit | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "overlay">
} = defineFunction("overlay")

/** 
 * A function for splitting a qualified object name into an array
 * 
 * @see https://pgpedia.info/p/parse_ident.html
 */
export const parse_ident: {
  /** 
   * A function for splitting a qualified object name into an array
   * 
   * @see https://pgpedia.info/p/parse_ident.html
   */
  (str: t.param<t.text>, strict?: t.param<t.bool>): CallExpression<t.array<t.text>, "parse_ident">
  (str: t.param<t.text | t.null>, strict?: t.param<t.bool | t.null>): CallExpression<t.array<t.text> | t.null, "parse_ident">
} = defineFunction("parse_ident")

export const percent_rank: {
  (): CallExpression<t.float8, "percent_rank">
  (...args: t.aggParam<t.any>[]): Aggregate<t.float8, "percent_rank">
} = defineFunction("percent_rank")

export const percentile_cont: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "percentile_cont">
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.interval>): Aggregate<t.interval, "percentile_cont">
  (arg1: t.aggParam<t.array<t.float8>>, arg2: t.aggParam<t.float8>): Aggregate<t.array<t.float8>, "percentile_cont">
  (arg1: t.aggParam<t.array<t.float8>>, arg2: t.aggParam<t.interval>): Aggregate<t.array<t.interval>, "percentile_cont">
} = defineFunction("percentile_cont")

const pg_advisory_lock: {
  (arg: t.param<t.int8>): CallExpression<t.void, "pg_advisory_lock">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.void, "pg_advisory_lock">
} = defineFunction("pg_advisory_lock")
export { pg_advisory_lock as advisory_lock }

const pg_advisory_lock_shared: {
  (arg: t.param<t.int8>): CallExpression<t.void, "pg_advisory_lock_shared">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.void, "pg_advisory_lock_shared">
} = defineFunction("pg_advisory_lock_shared")
export { pg_advisory_lock_shared as advisory_lock_shared }

const pg_advisory_unlock: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_advisory_unlock">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_advisory_unlock">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_advisory_unlock">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_advisory_unlock">
} = defineFunction("pg_advisory_unlock", "bool")
export { pg_advisory_unlock as advisory_unlock }

const pg_advisory_unlock_all: {
  (): CallExpression<t.void, "pg_advisory_unlock_all">
} = defineFunction("pg_advisory_unlock_all")
export { pg_advisory_unlock_all as advisory_unlock_all }

const pg_advisory_unlock_shared: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_advisory_unlock_shared">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_advisory_unlock_shared">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_advisory_unlock_shared">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_advisory_unlock_shared">
} = defineFunction("pg_advisory_unlock_shared", "bool")
export { pg_advisory_unlock_shared as advisory_unlock_shared }

const pg_advisory_xact_lock: {
  (arg: t.param<t.int8>): CallExpression<t.void, "pg_advisory_xact_lock">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.void, "pg_advisory_xact_lock">
} = defineFunction("pg_advisory_xact_lock")
export { pg_advisory_xact_lock as advisory_xact_lock }

const pg_advisory_xact_lock_shared: {
  (arg: t.param<t.int8>): CallExpression<t.void, "pg_advisory_xact_lock_shared">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.void, "pg_advisory_xact_lock_shared">
} = defineFunction("pg_advisory_xact_lock_shared")
export { pg_advisory_xact_lock_shared as advisory_xact_lock_shared }

/** 
 * A function returning the current backend's PID
 * 
 * @see https://pgpedia.info/p/pg_backend_pid.html
 */
const pg_backend_pid: {
  /** 
   * A function returning the current backend's PID
   * 
   * @see https://pgpedia.info/p/pg_backend_pid.html
   */
  (): CallExpression<t.int4, "pg_backend_pid">
} = defineFunction("pg_backend_pid")
export { pg_backend_pid as backend_pid }

/** 
 * A function returning the start time of the current exclusive backup
 * 
 * @see https://pgpedia.info/p/pg_backup_start_time.html
 */
const pg_backup_start_time: {
  /** 
   * A function returning the start time of the current exclusive backup
   * 
   * @see https://pgpedia.info/p/pg_backup_start_time.html
   */
  (): CallExpression<t.timestamptz, "pg_backup_start_time">
} = defineFunction("pg_backup_start_time")
export { pg_backup_start_time as backup_start_time }

/** 
 * A function listing the sessions preventing a session from acquiring a lock
 * 
 * @see https://pgpedia.info/p/pg_blocking_pids.html
 */
const pg_blocking_pids: {
  /** 
   * A function listing the sessions preventing a session from acquiring a lock
   * 
   * @see https://pgpedia.info/p/pg_blocking_pids.html
   */
  (arg: t.param<t.int4>): CallExpression<t.array<t.int4>, "pg_blocking_pids">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.array<t.int4> | t.null, "pg_blocking_pids">
} = defineFunction("pg_blocking_pids")
export { pg_blocking_pids as blocking_pids }

/** 
 * A function which cancels a backend's current query
 * 
 * @see https://pgpedia.info/p/pg_cancel_backend.html
 */
const pg_cancel_backend: {
  /** 
   * A function which cancels a backend's current query
   * 
   * @see https://pgpedia.info/p/pg_cancel_backend.html
   */
  (arg: t.param<t.int4>): CallExpression<t.bool, "pg_cancel_backend">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_cancel_backend">
} = defineFunction("pg_cancel_backend", "bool")
export { pg_cancel_backend as cancel_backend }

/** 
 * A function for converting an encoding name to its internal identifier
 * 
 * @see https://pgpedia.info/p/pg_char_to_encoding.html
 */
const pg_char_to_encoding: {
  /** 
   * A function for converting an encoding name to its internal identifier
   * 
   * @see https://pgpedia.info/p/pg_char_to_encoding.html
   */
  (arg: t.param<t.name>): CallExpression<t.int4, "pg_char_to_encoding">
  (arg: t.param<t.name | t.null>): CallExpression<t.int4 | t.null, "pg_char_to_encoding">
} = defineFunction("pg_char_to_encoding")
export { pg_char_to_encoding as char_to_encoding }

/** 
 * A function which returns the current client encoding name
 * 
 * @see https://pgpedia.info/p/pg_client_encoding.html
 */
const pg_client_encoding: {
  /** 
   * A function which returns the current client encoding name
   * 
   * @see https://pgpedia.info/p/pg_client_encoding.html
   */
  (): CallExpression<t.name, "pg_client_encoding">
} = defineFunction("pg_client_encoding")
export { pg_client_encoding as client_encoding }

/** 
 * A function returning the actual version of the collation object
 * 
 * @see https://pgpedia.info/p/pg_collation_actual_version.html
 */
const pg_collation_actual_version: {
  /** 
   * A function returning the actual version of the collation object
   * 
   * @see https://pgpedia.info/p/pg_collation_actual_version.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_collation_actual_version">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_collation_actual_version">
} = defineFunction("pg_collation_actual_version")
export { pg_collation_actual_version as collation_actual_version }

const pg_collation_for: {
  (arg: t.param<t.any>): CallExpression<t.text, "pg_collation_for">
} = defineFunction("pg_collation_for")
export { pg_collation_for as collation_for }

/** 
 * A function for determining whether a collation is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_collation_is_visible.html
 */
const pg_collation_is_visible: {
  /** 
   * A function for determining whether a collation is visible in the current search path
   * 
   * @see https://pgpedia.info/p/pg_collation_is_visible.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_collation_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_collation_is_visible">
} = defineFunction("pg_collation_is_visible", "bool")
export { pg_collation_is_visible as collation_is_visible }

/** 
 * A function returning the compression algorithm used on a TOAST value
 * 
 * @see https://pgpedia.info/p/pg_column_compression.html
 */
const pg_column_compression: {
  /** 
   * A function returning the compression algorithm used on a TOAST value
   * 
   * @see https://pgpedia.info/p/pg_column_compression.html
   */
  (arg: t.param<t.any>): CallExpression<t.text, "pg_column_compression">
  (arg: t.param<t.any | t.null>): CallExpression<t.text | t.null, "pg_column_compression">
} = defineFunction("pg_column_compression")
export { pg_column_compression as column_compression }

const pg_column_is_updatable: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.int2>, arg3: t.param<t.bool>): CallExpression<t.bool, "pg_column_is_updatable">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.int2 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.bool | t.null, "pg_column_is_updatable">
} = defineFunction("pg_column_is_updatable", "bool")
export { pg_column_is_updatable as column_is_updatable }

/** 
 * A system function for showing the size of data in a table column
 * 
 * @see https://pgpedia.info/p/pg_column_size.html
 */
const pg_column_size: {
  /** 
   * A system function for showing the size of data in a table column
   * 
   * @see https://pgpedia.info/p/pg_column_size.html
   */
  (arg: t.param<t.any>): CallExpression<t.int4, "pg_column_size">
  (arg: t.param<t.any | t.null>): CallExpression<t.int4 | t.null, "pg_column_size">
} = defineFunction("pg_column_size")
export { pg_column_size as column_size }

/** 
 * A system function which shows the last time the configuration was successfully reloaded
 * 
 * @see https://pgpedia.info/p/pg_conf_load_time.html
 */
const pg_conf_load_time: {
  /** 
   * A system function which shows the last time the configuration was successfully reloaded
   * 
   * @see https://pgpedia.info/p/pg_conf_load_time.html
   */
  (): CallExpression<t.timestamptz, "pg_conf_load_time">
} = defineFunction("pg_conf_load_time")
export { pg_conf_load_time as conf_load_time }

const pg_conversion_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_conversion_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_conversion_is_visible">
} = defineFunction("pg_conversion_is_visible", "bool")
export { pg_conversion_is_visible as conversion_is_visible }

/** 
 * A system function for showing the locations of log file(s) currently in use
 * 
 * @see https://pgpedia.info/p/pg_current_logfile.html
 */
const pg_current_logfile: {
  /** 
   * A system function for showing the locations of log file(s) currently in use
   * 
   * @see https://pgpedia.info/p/pg_current_logfile.html
   */
  (): CallExpression<t.text, "pg_current_logfile">
  (arg: t.param<t.text>): CallExpression<t.text, "pg_current_logfile">
} = defineFunction("pg_current_logfile")
export { pg_current_logfile as current_logfile }

/** 
 * A function returning the size of a database
 * 
 * @see https://pgpedia.info/p/pg_database_size.html
 */
const pg_database_size: {
  /** 
   * A function returning the size of a database
   * 
   * @see https://pgpedia.info/p/pg_database_size.html
   */
  (arg: t.param<t.oid | t.name>): CallExpression<t.int8, "pg_database_size">
  (arg: t.param<t.oid | t.name | t.null>): CallExpression<t.int8 | t.null, "pg_database_size">
} = defineFunction("pg_database_size")
export { pg_database_size as database_size }

/** 
 * A function returning a human-readable description of a database object
 * 
 * @see https://pgpedia.info/p/pg_describe_object.html
 */
const pg_describe_object: {
  /** 
   * A function returning a human-readable description of a database object
   * 
   * @see https://pgpedia.info/p/pg_describe_object.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>, arg3: t.param<t.int4>): CallExpression<t.text, "pg_describe_object">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "pg_describe_object">
} = defineFunction("pg_describe_object")
export { pg_describe_object as describe_object }

/** 
 * A function for removing a replication slot
 * 
 * @see https://pgpedia.info/p/pg_drop_replication_slot.html
 */
const pg_drop_replication_slot: {
  /** 
   * A function for removing a replication slot
   * 
   * @see https://pgpedia.info/p/pg_drop_replication_slot.html
   */
  (arg: t.param<t.name>): CallExpression<t.void, "pg_drop_replication_slot">
} = defineFunction("pg_drop_replication_slot")
export { pg_drop_replication_slot as drop_replication_slot }

const pg_encoding_max_length: {
  (arg: t.param<t.int4>): CallExpression<t.int4, "pg_encoding_max_length">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "pg_encoding_max_length">
} = defineFunction("pg_encoding_max_length")
export { pg_encoding_max_length as encoding_max_length }

/** 
 * A function for converting an encoding's internal identifier to a name
 * 
 * @see https://pgpedia.info/p/pg_encoding_to_char.html
 */
const pg_encoding_to_char: {
  /** 
   * A function for converting an encoding's internal identifier to a name
   * 
   * @see https://pgpedia.info/p/pg_encoding_to_char.html
   */
  (arg: t.param<t.int4>): CallExpression<t.name, "pg_encoding_to_char">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.name | t.null, "pg_encoding_to_char">
} = defineFunction("pg_encoding_to_char")
export { pg_encoding_to_char as encoding_to_char }

const pg_event_trigger_table_rewrite_oid: {
  (): CallExpression<t.oid, "pg_event_trigger_table_rewrite_oid">
} = defineFunction("pg_event_trigger_table_rewrite_oid")
export { pg_event_trigger_table_rewrite_oid as event_trigger_table_rewrite_oid }

const pg_event_trigger_table_rewrite_reason: {
  (): CallExpression<t.int4, "pg_event_trigger_table_rewrite_reason">
} = defineFunction("pg_event_trigger_table_rewrite_reason")
export { pg_event_trigger_table_rewrite_reason as event_trigger_table_rewrite_reason }

const pg_export_snapshot: {
  (): CallExpression<t.text, "pg_export_snapshot">
} = defineFunction("pg_export_snapshot")
export { pg_export_snapshot as export_snapshot }

const pg_extension_config_dump: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.text>): CallExpression<t.void, "pg_extension_config_dump">
} = defineFunction("pg_extension_config_dump")
export { pg_extension_config_dump as extension_config_dump }

const pg_filenode_relation: {
  (arg1: t.param<t.oid>, arg2: t.param<t.oid>): CallExpression<t.regclass, "pg_filenode_relation">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.regclass | t.null, "pg_filenode_relation">
} = defineFunction("pg_filenode_relation")
export { pg_filenode_relation as filenode_relation }

/** 
 * A function for determining whether a function is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_function_is_visible.html
 */
const pg_function_is_visible: {
  /** 
   * A function for determining whether a function is visible in the current search path
   * 
   * @see https://pgpedia.info/p/pg_function_is_visible.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_function_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_function_is_visible">
} = defineFunction("pg_function_is_visible", "bool")
export { pg_function_is_visible as function_is_visible }

/** 
 * A function returning the definition of a constraint
 * 
 * @see https://pgpedia.info/p/pg_get_constraintdef.html
 */
const pg_get_constraintdef: {
  /** 
   * A function returning the definition of a constraint
   * 
   * @see https://pgpedia.info/p/pg_get_constraintdef.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_constraintdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_constraintdef">
  (arg1: t.param<t.oid>, arg2: t.param<t.bool>): CallExpression<t.text, "pg_get_constraintdef">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "pg_get_constraintdef">
} = defineFunction("pg_get_constraintdef")
export { pg_get_constraintdef as get_constraintdef }

const pg_get_function_arg_default: {
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>): CallExpression<t.text, "pg_get_function_arg_default">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "pg_get_function_arg_default">
} = defineFunction("pg_get_function_arg_default")
export { pg_get_function_arg_default as get_function_arg_default }

/** 
 * A function for generating a function/procedure argument list
 * 
 * @see https://pgpedia.info/p/pg_get_function_arguments.html
 */
const pg_get_function_arguments: {
  /** 
   * A function for generating a function/procedure argument list
   * 
   * @see https://pgpedia.info/p/pg_get_function_arguments.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_function_arguments">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_function_arguments">
} = defineFunction("pg_get_function_arguments")
export { pg_get_function_arguments as get_function_arguments }

/** 
 * A function for generating a function/procedure argument list
 * 
 * @see https://pgpedia.info/p/pg_get_function_identity_arguments.html
 */
const pg_get_function_identity_arguments: {
  /** 
   * A function for generating a function/procedure argument list
   * 
   * @see https://pgpedia.info/p/pg_get_function_identity_arguments.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_function_identity_arguments">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_function_identity_arguments">
} = defineFunction("pg_get_function_identity_arguments")
export { pg_get_function_identity_arguments as get_function_identity_arguments }

/** 
 * A function generating the RETURNS clause of a function
 * 
 * @see https://pgpedia.info/p/pg_get_function_result.html
 */
const pg_get_function_result: {
  /** 
   * A function generating the RETURNS clause of a function
   * 
   * @see https://pgpedia.info/p/pg_get_function_result.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_function_result">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_function_result">
} = defineFunction("pg_get_function_result")
export { pg_get_function_result as get_function_result }

const pg_get_function_sqlbody: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_function_sqlbody">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_function_sqlbody">
} = defineFunction("pg_get_function_sqlbody")
export { pg_get_function_sqlbody as get_function_sqlbody }

/** 
 * A function generating the SQL for recreating a function or a procedure
 * 
 * @see https://pgpedia.info/p/pg_get_functiondef.html
 */
const pg_get_functiondef: {
  /** 
   * A function generating the SQL for recreating a function or a procedure
   * 
   * @see https://pgpedia.info/p/pg_get_functiondef.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_functiondef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_functiondef">
} = defineFunction("pg_get_functiondef")
export { pg_get_functiondef as get_functiondef }

/** 
 * A function for generating an index definition
 * 
 * @see https://pgpedia.info/p/pg_get_indexdef.html
 */
const pg_get_indexdef: {
  /** 
   * A function for generating an index definition
   * 
   * @see https://pgpedia.info/p/pg_get_indexdef.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_indexdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_indexdef">
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>, arg3: t.param<t.bool>): CallExpression<t.text, "pg_get_indexdef">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "pg_get_indexdef">
} = defineFunction("pg_get_indexdef")
export { pg_get_indexdef as get_indexdef }

const pg_get_partition_constraintdef: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_partition_constraintdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_partition_constraintdef">
} = defineFunction("pg_get_partition_constraintdef")
export { pg_get_partition_constraintdef as get_partition_constraintdef }

const pg_get_partkeydef: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_partkeydef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_partkeydef">
} = defineFunction("pg_get_partkeydef")
export { pg_get_partkeydef as get_partkeydef }

const pg_get_publication_tables: {
  (pubname: t.param<t.text | t.null>): SetRef<t.oid, "pg_get_publication_tables">
} = defineSetFunction("pg_get_publication_tables")
export { pg_get_publication_tables as get_publication_tables }

const pg_get_replica_identity_index: {
  (arg: t.param<t.regclass>): CallExpression<t.regclass, "pg_get_replica_identity_index">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.regclass | t.null, "pg_get_replica_identity_index">
} = defineFunction("pg_get_replica_identity_index")
export { pg_get_replica_identity_index as get_replica_identity_index }

/** 
 * A function for recreating the command a rule was created with
 * 
 * @see https://pgpedia.info/p/pg_get_ruledef.html
 */
const pg_get_ruledef: {
  /** 
   * A function for recreating the command a rule was created with
   * 
   * @see https://pgpedia.info/p/pg_get_ruledef.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_ruledef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_ruledef">
  (arg1: t.param<t.oid>, arg2: t.param<t.bool>): CallExpression<t.text, "pg_get_ruledef">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "pg_get_ruledef">
} = defineFunction("pg_get_ruledef")
export { pg_get_ruledef as get_ruledef }

/** 
 * A system function to determine the name of a sequence used by a column
 * 
 * @see https://pgpedia.info/p/pg_get_serial_sequence.html
 */
const pg_get_serial_sequence: {
  /** 
   * A system function to determine the name of a sequence used by a column
   * 
   * @see https://pgpedia.info/p/pg_get_serial_sequence.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "pg_get_serial_sequence">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "pg_get_serial_sequence">
} = defineFunction("pg_get_serial_sequence")
export { pg_get_serial_sequence as get_serial_sequence }

const pg_get_statisticsobjdef: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_statisticsobjdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_statisticsobjdef">
} = defineFunction("pg_get_statisticsobjdef")
export { pg_get_statisticsobjdef as get_statisticsobjdef }

const pg_get_statisticsobjdef_columns: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_statisticsobjdef_columns">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_statisticsobjdef_columns">
} = defineFunction("pg_get_statisticsobjdef_columns")
export { pg_get_statisticsobjdef_columns as get_statisticsobjdef_columns }

const pg_get_statisticsobjdef_expressions: {
  (arg: t.param<t.oid>): CallExpression<t.array<t.text>, "pg_get_statisticsobjdef_expressions">
  (arg: t.param<t.oid | t.null>): CallExpression<t.array<t.text> | t.null, "pg_get_statisticsobjdef_expressions">
} = defineFunction("pg_get_statisticsobjdef_expressions")
export { pg_get_statisticsobjdef_expressions as get_statisticsobjdef_expressions }

const pg_get_triggerdef: {
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_triggerdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_triggerdef">
  (arg1: t.param<t.oid>, arg2: t.param<t.bool>): CallExpression<t.text, "pg_get_triggerdef">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "pg_get_triggerdef">
} = defineFunction("pg_get_triggerdef")
export { pg_get_triggerdef as get_triggerdef }

/** 
 * A function returning a role's name from its OID
 * 
 * @see https://pgpedia.info/p/pg_get_userbyid.html
 */
const pg_get_userbyid: {
  /** 
   * A function returning a role's name from its OID
   * 
   * @see https://pgpedia.info/p/pg_get_userbyid.html
   */
  (arg: t.param<t.oid>): CallExpression<t.name, "pg_get_userbyid">
  (arg: t.param<t.oid | t.null>): CallExpression<t.name | t.null, "pg_get_userbyid">
} = defineFunction("pg_get_userbyid")
export { pg_get_userbyid as get_userbyid }

const pg_get_viewdef: {
  (arg: t.param<t.text>): CallExpression<t.text, "pg_get_viewdef">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "pg_get_viewdef">
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_get_viewdef">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_get_viewdef">
  (arg1: t.param<t.text | t.oid>, arg2: t.param<t.bool | t.int4>): CallExpression<t.text, "pg_get_viewdef">
  (arg1: t.param<t.text | t.oid | t.null>, arg2: t.param<t.bool | t.int4 | t.null>): CallExpression<t.text | t.null, "pg_get_viewdef">
} = defineFunction("pg_get_viewdef")
export { pg_get_viewdef as get_viewdef }

/** 
 * A function returning the recovery pause state
 * 
 * @see https://pgpedia.info/p/pg_get_wal_replay_pause_state.html
 */
const pg_get_wal_replay_pause_state: {
  /** 
   * A function returning the recovery pause state
   * 
   * @see https://pgpedia.info/p/pg_get_wal_replay_pause_state.html
   */
  (): CallExpression<t.text, "pg_get_wal_replay_pause_state">
} = defineFunction("pg_get_wal_replay_pause_state")
export { pg_get_wal_replay_pause_state as get_wal_replay_pause_state }

/** 
 * A function determining whether a user is a member of a particular role
 * 
 * @see https://pgpedia.info/p/pg_has_role.html
 */
const pg_has_role: {
  /** 
   * A function determining whether a user is a member of a particular role
   * 
   * @see https://pgpedia.info/p/pg_has_role.html
   */
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.name | t.oid>, arg3: t.param<t.text>): CallExpression<t.bool, "pg_has_role">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.name | t.oid | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "pg_has_role">
  (arg1: t.param<t.name | t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "pg_has_role">
  (arg1: t.param<t.name | t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "pg_has_role">
} = defineFunction("pg_has_role", "bool")
export { pg_has_role as has_role }

const pg_import_system_collations: {
  (arg: t.param<t.regnamespace>): CallExpression<t.int4, "pg_import_system_collations">
  (arg: t.param<t.regnamespace | t.null>): CallExpression<t.int4 | t.null, "pg_import_system_collations">
} = defineFunction("pg_import_system_collations")
export { pg_import_system_collations as import_system_collations }

const pg_index_column_has_property: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.int4>, arg3: t.param<t.text>): CallExpression<t.bool, "pg_index_column_has_property">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "pg_index_column_has_property">
} = defineFunction("pg_index_column_has_property", "bool")
export { pg_index_column_has_property as index_column_has_property }

const pg_index_has_property: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.text>): CallExpression<t.bool, "pg_index_has_property">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "pg_index_has_property">
} = defineFunction("pg_index_has_property", "bool")
export { pg_index_has_property as index_has_property }

const pg_indexam_has_property: {
  (arg1: t.param<t.oid>, arg2: t.param<t.text>): CallExpression<t.bool, "pg_indexam_has_property">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "pg_indexam_has_property">
} = defineFunction("pg_indexam_has_property", "bool")
export { pg_indexam_has_property as indexam_has_property }

const pg_indexam_progress_phasename: {
  (arg1: t.param<t.oid>, arg2: t.param<t.int8>): CallExpression<t.text, "pg_indexam_progress_phasename">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.text | t.null, "pg_indexam_progress_phasename">
} = defineFunction("pg_indexam_progress_phasename")
export { pg_indexam_progress_phasename as indexam_progress_phasename }

const pg_indexes_size: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "pg_indexes_size">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "pg_indexes_size">
} = defineFunction("pg_indexes_size")
export { pg_indexes_size as indexes_size }

/** 
 * A function determining whether an exclusive backup is in progress
 * 
 * @see https://pgpedia.info/p/pg_is_in_backup.html
 */
const pg_is_in_backup: {
  /** 
   * A function determining whether an exclusive backup is in progress
   * 
   * @see https://pgpedia.info/p/pg_is_in_backup.html
   */
  (): CallExpression<t.bool, "pg_is_in_backup">
} = defineFunction("pg_is_in_backup", "bool")
export { pg_is_in_backup as is_in_backup }

/** 
 * A system function for retrieving the recovery status of an instance
 * 
 * @see https://pgpedia.info/p/pg_is_in_recovery.html
 */
const pg_is_in_recovery: {
  /** 
   * A system function for retrieving the recovery status of an instance
   * 
   * @see https://pgpedia.info/p/pg_is_in_recovery.html
   */
  (): CallExpression<t.bool, "pg_is_in_recovery">
} = defineFunction("pg_is_in_recovery", "bool")
export { pg_is_in_recovery as is_in_recovery }

/** 
 * A function determining whether an OID is that of another session's temporary schema
 * 
 * @see https://pgpedia.info/p/pg_is_other_temp_schema.html
 */
const pg_is_other_temp_schema: {
  /** 
   * A function determining whether an OID is that of another session's temporary schema
   * 
   * @see https://pgpedia.info/p/pg_is_other_temp_schema.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_is_other_temp_schema">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_is_other_temp_schema">
} = defineFunction("pg_is_other_temp_schema", "bool")
export { pg_is_other_temp_schema as is_other_temp_schema }

/** 
 * A function indicating whether recovery pause is requested.
 * 
 * @see https://pgpedia.info/p/pg_is_wal_replay_paused.html
 */
const pg_is_wal_replay_paused: {
  /** 
   * A function indicating whether recovery pause is requested.
   * 
   * @see https://pgpedia.info/p/pg_is_wal_replay_paused.html
   */
  (): CallExpression<t.bool, "pg_is_wal_replay_paused">
} = defineFunction("pg_is_wal_replay_paused", "bool")
export { pg_is_wal_replay_paused as is_wal_replay_paused }

const pg_isolation_test_session_is_blocked: {
  (arg1: t.param<t.int4>, arg2: t.param<t.array<t.int4>>): CallExpression<t.bool, "pg_isolation_test_session_is_blocked">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.array<t.int4> | t.null>): CallExpression<t.bool | t.null, "pg_isolation_test_session_is_blocked">
} = defineFunction("pg_isolation_test_session_is_blocked", "bool")
export { pg_isolation_test_session_is_blocked as isolation_test_session_is_blocked }

/** 
 * A function determining whether JIT is available
 * 
 * @see https://pgpedia.info/p/pg_jit_available.html
 */
const pg_jit_available: {
  /** 
   * A function determining whether JIT is available
   * 
   * @see https://pgpedia.info/p/pg_jit_available.html
   */
  (): CallExpression<t.bool, "pg_jit_available">
} = defineFunction("pg_jit_available", "bool")
export { pg_jit_available as jit_available }

const pg_last_xact_replay_timestamp: {
  (): CallExpression<t.timestamptz, "pg_last_xact_replay_timestamp">
} = defineFunction("pg_last_xact_replay_timestamp")
export { pg_last_xact_replay_timestamp as last_xact_replay_timestamp }

/** 
 * A function listing current notification channels
 * 
 * @see https://pgpedia.info/p/pg_listening_channels.html
 */
const pg_listening_channels: {
  /** 
   * A function listing current notification channels
   * 
   * @see https://pgpedia.info/p/pg_listening_channels.html
   */
  (): SetRef<t.text, "pg_listening_channels">
} = defineSetFunction("pg_listening_channels")
export { pg_listening_channels as listening_channels }

/** 
 * A function for logging the memory contexts of the specified backed
 * 
 * @see https://pgpedia.info/p/pg_log_backend_memory_contexts.html
 */
const pg_log_backend_memory_contexts: {
  /** 
   * A function for logging the memory contexts of the specified backed
   * 
   * @see https://pgpedia.info/p/pg_log_backend_memory_contexts.html
   */
  (arg: t.param<t.int4>): CallExpression<t.bool, "pg_log_backend_memory_contexts">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_log_backend_memory_contexts">
} = defineFunction("pg_log_backend_memory_contexts", "bool")
export { pg_log_backend_memory_contexts as log_backend_memory_contexts }

/** 
 * A function for examining the contents of a directory
 * 
 * @see https://pgpedia.info/p/pg_ls_dir.html
 */
const pg_ls_dir: {
  /** 
   * A function for examining the contents of a directory
   * 
   * @see https://pgpedia.info/p/pg_ls_dir.html
   */
  (arg: t.param<t.text | t.null>): SetRef<t.text, "pg_ls_dir">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.bool | t.null>, arg3: t.param<t.bool | t.null>): SetRef<t.text, "pg_ls_dir">
} = defineSetFunction("pg_ls_dir")
export { pg_ls_dir as ls_dir }

/** 
 * A function returning the OID of the session's temporary schema
 * 
 * @see https://pgpedia.info/p/pg_my_temp_schema.html
 */
const pg_my_temp_schema: {
  /** 
   * A function returning the OID of the session's temporary schema
   * 
   * @see https://pgpedia.info/p/pg_my_temp_schema.html
   */
  (): CallExpression<t.oid, "pg_my_temp_schema">
} = defineFunction("pg_my_temp_schema")
export { pg_my_temp_schema as my_temp_schema }

const pg_nextoid: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.name>, arg3: t.param<t.regclass>): CallExpression<t.oid, "pg_nextoid">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.name | t.null>, arg3: t.param<t.regclass | t.null>): CallExpression<t.oid | t.null, "pg_nextoid">
} = defineFunction("pg_nextoid")
export { pg_nextoid as nextoid }

/** 
 * A function reporting how full the asynchronous notification queue is
 * 
 * @see https://pgpedia.info/p/pg_notification_queue_usage.html
 */
const pg_notification_queue_usage: {
  /** 
   * A function reporting how full the asynchronous notification queue is
   * 
   * @see https://pgpedia.info/p/pg_notification_queue_usage.html
   */
  (): CallExpression<t.float8, "pg_notification_queue_usage">
} = defineFunction("pg_notification_queue_usage")
export { pg_notification_queue_usage as notification_queue_usage }

/** 
 * A function for sending notifications to other sessions
 * 
 * @see https://pgpedia.info/p/pg_notify.html
 */
const pg_notify: {
  /** 
   * A function for sending notifications to other sessions
   * 
   * @see https://pgpedia.info/p/pg_notify.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.void, "pg_notify">
} = defineFunction("pg_notify")
export { pg_notify as notify }

const pg_opclass_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_opclass_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_opclass_is_visible">
} = defineFunction("pg_opclass_is_visible", "bool")
export { pg_opclass_is_visible as opclass_is_visible }

/** 
 * A function for determining whether an operator is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_operator_is_visible.html
 */
const pg_operator_is_visible: {
  /** 
   * A function for determining whether an operator is visible in the current search path
   * 
   * @see https://pgpedia.info/p/pg_operator_is_visible.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_operator_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_operator_is_visible">
} = defineFunction("pg_operator_is_visible", "bool")
export { pg_operator_is_visible as operator_is_visible }

const pg_opfamily_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_opfamily_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_opfamily_is_visible">
} = defineFunction("pg_opfamily_is_visible", "bool")
export { pg_opfamily_is_visible as opfamily_is_visible }

const pg_partition_ancestors: {
  (partitionid: t.param<t.regclass | t.null>): SetRef<t.regclass, "pg_partition_ancestors">
} = defineSetFunction("pg_partition_ancestors")
export { pg_partition_ancestors as partition_ancestors }

const pg_partition_root: {
  (arg: t.param<t.regclass>): CallExpression<t.regclass, "pg_partition_root">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.regclass | t.null, "pg_partition_root">
} = defineFunction("pg_partition_root")
export { pg_partition_root as partition_root }

/** 
 * A function returning the start time of the main server process
 * 
 * @see https://pgpedia.info/p/pg_postmaster_start_time.html
 */
const pg_postmaster_start_time: {
  /** 
   * A function returning the start time of the main server process
   * 
   * @see https://pgpedia.info/p/pg_postmaster_start_time.html
   */
  (): CallExpression<t.timestamptz, "pg_postmaster_start_time">
} = defineFunction("pg_postmaster_start_time")
export { pg_postmaster_start_time as postmaster_start_time }

/** 
 * Function to promote a physical standby server
 * 
 * @see https://pgpedia.info/p/pg_promote.html
 */
const pg_promote: {
  /** 
   * Function to promote a physical standby server
   * 
   * @see https://pgpedia.info/p/pg_promote.html
   */
  (wait?: t.param<t.bool>, wait_seconds?: t.param<t.int4>): CallExpression<t.bool, "pg_promote">
  (wait?: t.param<t.bool | t.null>, wait_seconds?: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_promote">
} = defineFunction("pg_promote", "bool")
export { pg_promote as promote }

/** 
 * A system function for reading the contents of a binary file
 * 
 * @see https://pgpedia.info/p/pg_read_binary_file.html
 */
const pg_read_binary_file: {
  /** 
   * A system function for reading the contents of a binary file
   * 
   * @see https://pgpedia.info/p/pg_read_binary_file.html
   */
  (arg: t.param<t.text>): CallExpression<t.bytea, "pg_read_binary_file">
  (arg: t.param<t.text | t.null>): CallExpression<t.bytea | t.null, "pg_read_binary_file">
  (arg1: t.param<t.text>, arg2: t.param<t.int8>, arg3: t.param<t.int8>, arg4: t.param<t.bool>): CallExpression<t.bytea, "pg_read_binary_file">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>, arg4: t.param<t.bool | t.null>): CallExpression<t.bytea | t.null, "pg_read_binary_file">
  (arg1: t.param<t.text>, arg2: t.param<t.int8>, arg3: t.param<t.int8>): CallExpression<t.bytea, "pg_read_binary_file">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>): CallExpression<t.bytea | t.null, "pg_read_binary_file">
} = defineFunction("pg_read_binary_file")
export { pg_read_binary_file as read_binary_file }

/** 
 * A function for reading the contents of a text file
 * 
 * @see https://pgpedia.info/p/pg_read_file.html
 */
const pg_read_file: {
  /** 
   * A function for reading the contents of a text file
   * 
   * @see https://pgpedia.info/p/pg_read_file.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "pg_read_file">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "pg_read_file">
  (arg1: t.param<t.text>, arg2: t.param<t.int8>, arg3: t.param<t.int8>): CallExpression<t.text, "pg_read_file">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>): CallExpression<t.text | t.null, "pg_read_file">
  (arg1: t.param<t.text>, arg2: t.param<t.int8>, arg3: t.param<t.int8>, arg4: t.param<t.bool>): CallExpression<t.text, "pg_read_file">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>, arg4: t.param<t.bool | t.null>): CallExpression<t.text | t.null, "pg_read_file">
} = defineFunction("pg_read_file")
export { pg_read_file as read_file }

const pg_read_file_old: {
  (arg1: t.param<t.text>, arg2: t.param<t.int8>, arg3: t.param<t.int8>): CallExpression<t.text, "pg_read_file_old">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int8 | t.null>): CallExpression<t.text | t.null, "pg_read_file_old">
} = defineFunction("pg_read_file_old")
export { pg_read_file_old as read_file_old }

const pg_relation_filenode: {
  (arg: t.param<t.regclass>): CallExpression<t.oid, "pg_relation_filenode">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.oid | t.null, "pg_relation_filenode">
} = defineFunction("pg_relation_filenode")
export { pg_relation_filenode as relation_filenode }

const pg_relation_filepath: {
  (arg: t.param<t.regclass>): CallExpression<t.text, "pg_relation_filepath">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.text | t.null, "pg_relation_filepath">
} = defineFunction("pg_relation_filepath")
export { pg_relation_filepath as relation_filepath }

const pg_relation_is_publishable: {
  (arg: t.param<t.regclass>): CallExpression<t.bool, "pg_relation_is_publishable">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.bool | t.null, "pg_relation_is_publishable">
} = defineFunction("pg_relation_is_publishable", "bool")
export { pg_relation_is_publishable as relation_is_publishable }

const pg_relation_is_updatable: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.bool>): CallExpression<t.int4, "pg_relation_is_updatable">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.bool | t.null>): CallExpression<t.int4 | t.null, "pg_relation_is_updatable">
} = defineFunction("pg_relation_is_updatable")
export { pg_relation_is_updatable as relation_is_updatable }

const pg_relation_size: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.text>): CallExpression<t.int8, "pg_relation_size">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int8 | t.null, "pg_relation_size">
  (arg: t.param<t.regclass>): CallExpression<t.int8, "pg_relation_size">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "pg_relation_size">
} = defineFunction("pg_relation_size")
export { pg_relation_size as relation_size }

/** 
 * A system function which instructs PostgreSQL to reload its configuration
 * 
 * @see https://pgpedia.info/p/pg_reload_conf.html
 */
const pg_reload_conf: {
  /** 
   * A system function which instructs PostgreSQL to reload its configuration
   * 
   * @see https://pgpedia.info/p/pg_reload_conf.html
   */
  (): CallExpression<t.bool, "pg_reload_conf">
} = defineFunction("pg_reload_conf", "bool")
export { pg_reload_conf as reload_conf }

/** 
 * A function for creating a replication origin
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_create.html
 */
const pg_replication_origin_create: {
  /** 
   * A function for creating a replication origin
   * 
   * @see https://pgpedia.info/p/pg_replication_origin_create.html
   */
  (arg: t.param<t.text>): CallExpression<t.oid, "pg_replication_origin_create">
  (arg: t.param<t.text | t.null>): CallExpression<t.oid | t.null, "pg_replication_origin_create">
} = defineFunction("pg_replication_origin_create")
export { pg_replication_origin_create as replication_origin_create }

/** 
 * A function for removing a replication origin
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_drop.html
 */
const pg_replication_origin_drop: {
  /** 
   * A function for removing a replication origin
   * 
   * @see https://pgpedia.info/p/pg_replication_origin_drop.html
   */
  (arg: t.param<t.text>): CallExpression<t.void, "pg_replication_origin_drop">
} = defineFunction("pg_replication_origin_drop")
export { pg_replication_origin_drop as replication_origin_drop }

/** 
 * A function for querying a replication origin's OID
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_oid.html
 */
const pg_replication_origin_oid: {
  /** 
   * A function for querying a replication origin's OID
   * 
   * @see https://pgpedia.info/p/pg_replication_origin_oid.html
   */
  (arg: t.param<t.text>): CallExpression<t.oid, "pg_replication_origin_oid">
  (arg: t.param<t.text | t.null>): CallExpression<t.oid | t.null, "pg_replication_origin_oid">
} = defineFunction("pg_replication_origin_oid")
export { pg_replication_origin_oid as replication_origin_oid }

/** 
 * A function indicating whether a replication origin has been selected
 * 
 * @see https://pgpedia.info/p/pg_replication_session_origin_is_setup.html
 */
const pg_replication_origin_session_is_setup: {
  /** 
   * A function indicating whether a replication origin has been selected
   * 
   * @see https://pgpedia.info/p/pg_replication_session_origin_is_setup.html
   */
  (): CallExpression<t.bool, "pg_replication_origin_session_is_setup">
} = defineFunction("pg_replication_origin_session_is_setup", "bool")
export { pg_replication_origin_session_is_setup as replication_origin_session_is_setup }

const pg_replication_origin_session_reset: {
  (): CallExpression<t.void, "pg_replication_origin_session_reset">
} = defineFunction("pg_replication_origin_session_reset")
export { pg_replication_origin_session_reset as replication_origin_session_reset }

const pg_replication_origin_session_setup: {
  (arg: t.param<t.text>): CallExpression<t.void, "pg_replication_origin_session_setup">
} = defineFunction("pg_replication_origin_session_setup")
export { pg_replication_origin_session_setup as replication_origin_session_setup }

const pg_replication_origin_xact_reset: {
  (): CallExpression<t.void, "pg_replication_origin_xact_reset">
} = defineFunction("pg_replication_origin_xact_reset")
export { pg_replication_origin_xact_reset as replication_origin_xact_reset }

/** 
 * A system function for rotating the current logfile
 * 
 * @see https://pgpedia.info/p/pg_rotate_logfile.html
 */
const pg_rotate_logfile: {
  /** 
   * A system function for rotating the current logfile
   * 
   * @see https://pgpedia.info/p/pg_rotate_logfile.html
   */
  (): CallExpression<t.bool, "pg_rotate_logfile">
} = defineFunction("pg_rotate_logfile", "bool")
export { pg_rotate_logfile as rotate_logfile }

const pg_rotate_logfile_old: {
  (): CallExpression<t.bool, "pg_rotate_logfile_old">
} = defineFunction("pg_rotate_logfile_old", "bool")
export { pg_rotate_logfile_old as rotate_logfile_old }

const pg_safe_snapshot_blocking_pids: {
  (arg: t.param<t.int4>): CallExpression<t.array<t.int4>, "pg_safe_snapshot_blocking_pids">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.array<t.int4> | t.null, "pg_safe_snapshot_blocking_pids">
} = defineFunction("pg_safe_snapshot_blocking_pids")
export { pg_safe_snapshot_blocking_pids as safe_snapshot_blocking_pids }

const pg_sequence_last_value: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "pg_sequence_last_value">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "pg_sequence_last_value">
} = defineFunction("pg_sequence_last_value")
export { pg_sequence_last_value as sequence_last_value }

/** 
 * A function for converting human-readable  data sizes into bytes
 * 
 * @see https://pgpedia.info/p/pg_size_bytes.html
 */
const pg_size_bytes: {
  /** 
   * A function for converting human-readable  data sizes into bytes
   * 
   * @see https://pgpedia.info/p/pg_size_bytes.html
   */
  (arg: t.param<t.text>): CallExpression<t.int8, "pg_size_bytes">
  (arg: t.param<t.text | t.null>): CallExpression<t.int8 | t.null, "pg_size_bytes">
} = defineFunction("pg_size_bytes")
export { pg_size_bytes as size_bytes }

/** 
 * A function for displaying sizes in bytes in human-readable format
 * 
 * @see https://pgpedia.info/p/pg_size_pretty.html
 */
const pg_size_pretty: {
  /** 
   * A function for displaying sizes in bytes in human-readable format
   * 
   * @see https://pgpedia.info/p/pg_size_pretty.html
   */
  (arg: t.param<t.int8 | t.numeric>): CallExpression<t.text, "pg_size_pretty">
  (arg: t.param<t.int8 | t.numeric | t.null>): CallExpression<t.text | t.null, "pg_size_pretty">
} = defineFunction("pg_size_pretty")
export { pg_size_pretty as size_pretty }

/** 
 * A system function for sleeping for the specified number of seconds
 * 
 * @see https://pgpedia.info/p/pg_sleep.html
 */
const pg_sleep: {
  /** 
   * A system function for sleeping for the specified number of seconds
   * 
   * @see https://pgpedia.info/p/pg_sleep.html
   */
  (arg: t.param<t.float8>): CallExpression<t.void, "pg_sleep">
} = defineFunction("pg_sleep")
export { pg_sleep as sleep }

/** 
 * A system function for sleeping for the specified interval
 * 
 * @see https://pgpedia.info/p/pg_sleep_for.html
 */
const pg_sleep_for: {
  /** 
   * A system function for sleeping for the specified interval
   * 
   * @see https://pgpedia.info/p/pg_sleep_for.html
   */
  (arg: t.param<t.interval>): CallExpression<t.void, "pg_sleep_for">
} = defineFunction("pg_sleep_for")
export { pg_sleep_for as sleep_for }

/** 
 * A system function for sleeping until the specified time
 * 
 * @see https://pgpedia.info/p/pg_sleep_until.html
 */
const pg_sleep_until: {
  /** 
   * A system function for sleeping until the specified time
   * 
   * @see https://pgpedia.info/p/pg_sleep_until.html
   */
  (arg: t.param<t.timestamptz>): CallExpression<t.void, "pg_sleep_until">
} = defineFunction("pg_sleep_until")
export { pg_sleep_until as sleep_until }

const pg_stat_clear_snapshot: {
  (): CallExpression<t.void, "pg_stat_clear_snapshot">
} = defineFunction("pg_stat_clear_snapshot")
export { pg_stat_clear_snapshot as stat_clear_snapshot }

const pg_stat_get_analyze_count: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_analyze_count">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_analyze_count">
} = defineFunction("pg_stat_get_analyze_count")
export { pg_stat_get_analyze_count as stat_get_analyze_count }

const pg_stat_get_autoanalyze_count: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_autoanalyze_count">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_autoanalyze_count">
} = defineFunction("pg_stat_get_autoanalyze_count")
export { pg_stat_get_autoanalyze_count as stat_get_autoanalyze_count }

const pg_stat_get_autovacuum_count: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_autovacuum_count">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_autovacuum_count">
} = defineFunction("pg_stat_get_autovacuum_count")
export { pg_stat_get_autovacuum_count as stat_get_autovacuum_count }

/** 
 * A function reporting a backend's most recent query
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_activity.html
 */
const pg_stat_get_backend_activity: {
  /** 
   * A function reporting a backend's most recent query
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_activity.html
   */
  (arg: t.param<t.int4>): CallExpression<t.text, "pg_stat_get_backend_activity">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "pg_stat_get_backend_activity">
} = defineFunction("pg_stat_get_backend_activity")
export { pg_stat_get_backend_activity as stat_get_backend_activity }

/** 
 * A function reporting the time a backend's most recent query was started.
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_activity_start.html
 */
const pg_stat_get_backend_activity_start: {
  /** 
   * A function reporting the time a backend's most recent query was started.
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_activity_start.html
   */
  (arg: t.param<t.int4>): CallExpression<t.timestamptz, "pg_stat_get_backend_activity_start">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_backend_activity_start">
} = defineFunction("pg_stat_get_backend_activity_start")
export { pg_stat_get_backend_activity_start as stat_get_backend_activity_start }

/** 
 * A function reporting a backend's client address
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_client_addr.html
 */
const pg_stat_get_backend_client_addr: {
  /** 
   * A function reporting a backend's client address
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_client_addr.html
   */
  (arg: t.param<t.int4>): CallExpression<t.inet, "pg_stat_get_backend_client_addr">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.inet | t.null, "pg_stat_get_backend_client_addr">
} = defineFunction("pg_stat_get_backend_client_addr")
export { pg_stat_get_backend_client_addr as stat_get_backend_client_addr }

/** 
 * A function reporting a backend's client port
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_client_port.html
 */
const pg_stat_get_backend_client_port: {
  /** 
   * A function reporting a backend's client port
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_client_port.html
   */
  (arg: t.param<t.int4>): CallExpression<t.int4, "pg_stat_get_backend_client_port">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "pg_stat_get_backend_client_port">
} = defineFunction("pg_stat_get_backend_client_port")
export { pg_stat_get_backend_client_port as stat_get_backend_client_port }

/** 
 * A function reporting a backend's database OID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_dbid.html
 */
const pg_stat_get_backend_dbid: {
  /** 
   * A function reporting a backend's database OID
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_dbid.html
   */
  (arg: t.param<t.int4>): CallExpression<t.oid, "pg_stat_get_backend_dbid">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.oid | t.null, "pg_stat_get_backend_dbid">
} = defineFunction("pg_stat_get_backend_dbid")
export { pg_stat_get_backend_dbid as stat_get_backend_dbid }

/** 
 * A function providing a sequential IDs for each backend
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_idset.html
 */
const pg_stat_get_backend_idset: {
  /** 
   * A function providing a sequential IDs for each backend
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_idset.html
   */
  (): SetRef<t.int4, "pg_stat_get_backend_idset">
} = defineSetFunction("pg_stat_get_backend_idset")
export { pg_stat_get_backend_idset as stat_get_backend_idset }

/** 
 * A function reporting a backend's PID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_pid.html
 */
const pg_stat_get_backend_pid: {
  /** 
   * A function reporting a backend's PID
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_pid.html
   */
  (arg: t.param<t.int4>): CallExpression<t.int4, "pg_stat_get_backend_pid">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "pg_stat_get_backend_pid">
} = defineFunction("pg_stat_get_backend_pid")
export { pg_stat_get_backend_pid as stat_get_backend_pid }

/** 
 * A function reporting a when a backend started
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_start.html
 */
const pg_stat_get_backend_start: {
  /** 
   * A function reporting a when a backend started
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_start.html
   */
  (arg: t.param<t.int4>): CallExpression<t.timestamptz, "pg_stat_get_backend_start">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_backend_start">
} = defineFunction("pg_stat_get_backend_start")
export { pg_stat_get_backend_start as stat_get_backend_start }

/** 
 * A function reporting a backend's user OID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_userid.html
 */
const pg_stat_get_backend_userid: {
  /** 
   * A function reporting a backend's user OID
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_userid.html
   */
  (arg: t.param<t.int4>): CallExpression<t.oid, "pg_stat_get_backend_userid">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.oid | t.null, "pg_stat_get_backend_userid">
} = defineFunction("pg_stat_get_backend_userid")
export { pg_stat_get_backend_userid as stat_get_backend_userid }

/** 
 * A function returning a backend's wait event name
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event.html
 */
const pg_stat_get_backend_wait_event: {
  /** 
   * A function returning a backend's wait event name
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event.html
   */
  (arg: t.param<t.int4>): CallExpression<t.text, "pg_stat_get_backend_wait_event">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "pg_stat_get_backend_wait_event">
} = defineFunction("pg_stat_get_backend_wait_event")
export { pg_stat_get_backend_wait_event as stat_get_backend_wait_event }

/** 
 * A function a backend's wait event type
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event_type.html
 */
const pg_stat_get_backend_wait_event_type: {
  /** 
   * A function a backend's wait event type
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event_type.html
   */
  (arg: t.param<t.int4>): CallExpression<t.text, "pg_stat_get_backend_wait_event_type">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "pg_stat_get_backend_wait_event_type">
} = defineFunction("pg_stat_get_backend_wait_event_type")
export { pg_stat_get_backend_wait_event_type as stat_get_backend_wait_event_type }

/** 
 * A function returning the backend's current transaction start time
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_xact_start.html
 */
const pg_stat_get_backend_xact_start: {
  /** 
   * A function returning the backend's current transaction start time
   * 
   * @see https://pgpedia.info/p/pg_stat_get_backend_xact_start.html
   */
  (arg: t.param<t.int4>): CallExpression<t.timestamptz, "pg_stat_get_backend_xact_start">
  (arg: t.param<t.int4 | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_backend_xact_start">
} = defineFunction("pg_stat_get_backend_xact_start")
export { pg_stat_get_backend_xact_start as stat_get_backend_xact_start }

const pg_stat_get_bgwriter_buf_written_checkpoints: {
  (): CallExpression<t.int8, "pg_stat_get_bgwriter_buf_written_checkpoints">
} = defineFunction("pg_stat_get_bgwriter_buf_written_checkpoints")
export { pg_stat_get_bgwriter_buf_written_checkpoints as stat_get_bgwriter_buf_written_checkpoints }

const pg_stat_get_bgwriter_buf_written_clean: {
  (): CallExpression<t.int8, "pg_stat_get_bgwriter_buf_written_clean">
} = defineFunction("pg_stat_get_bgwriter_buf_written_clean")
export { pg_stat_get_bgwriter_buf_written_clean as stat_get_bgwriter_buf_written_clean }

const pg_stat_get_bgwriter_maxwritten_clean: {
  (): CallExpression<t.int8, "pg_stat_get_bgwriter_maxwritten_clean">
} = defineFunction("pg_stat_get_bgwriter_maxwritten_clean")
export { pg_stat_get_bgwriter_maxwritten_clean as stat_get_bgwriter_maxwritten_clean }

const pg_stat_get_bgwriter_requested_checkpoints: {
  (): CallExpression<t.int8, "pg_stat_get_bgwriter_requested_checkpoints">
} = defineFunction("pg_stat_get_bgwriter_requested_checkpoints")
export { pg_stat_get_bgwriter_requested_checkpoints as stat_get_bgwriter_requested_checkpoints }

const pg_stat_get_bgwriter_stat_reset_time: {
  (): CallExpression<t.timestamptz, "pg_stat_get_bgwriter_stat_reset_time">
} = defineFunction("pg_stat_get_bgwriter_stat_reset_time")
export { pg_stat_get_bgwriter_stat_reset_time as stat_get_bgwriter_stat_reset_time }

const pg_stat_get_bgwriter_timed_checkpoints: {
  (): CallExpression<t.int8, "pg_stat_get_bgwriter_timed_checkpoints">
} = defineFunction("pg_stat_get_bgwriter_timed_checkpoints")
export { pg_stat_get_bgwriter_timed_checkpoints as stat_get_bgwriter_timed_checkpoints }

const pg_stat_get_blocks_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_blocks_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_blocks_fetched">
} = defineFunction("pg_stat_get_blocks_fetched")
export { pg_stat_get_blocks_fetched as stat_get_blocks_fetched }

const pg_stat_get_blocks_hit: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_blocks_hit">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_blocks_hit">
} = defineFunction("pg_stat_get_blocks_hit")
export { pg_stat_get_blocks_hit as stat_get_blocks_hit }

const pg_stat_get_buf_alloc: {
  (): CallExpression<t.int8, "pg_stat_get_buf_alloc">
} = defineFunction("pg_stat_get_buf_alloc")
export { pg_stat_get_buf_alloc as stat_get_buf_alloc }

const pg_stat_get_buf_fsync_backend: {
  (): CallExpression<t.int8, "pg_stat_get_buf_fsync_backend">
} = defineFunction("pg_stat_get_buf_fsync_backend")
export { pg_stat_get_buf_fsync_backend as stat_get_buf_fsync_backend }

const pg_stat_get_buf_written_backend: {
  (): CallExpression<t.int8, "pg_stat_get_buf_written_backend">
} = defineFunction("pg_stat_get_buf_written_backend")
export { pg_stat_get_buf_written_backend as stat_get_buf_written_backend }

const pg_stat_get_checkpoint_sync_time: {
  (): CallExpression<t.float8, "pg_stat_get_checkpoint_sync_time">
} = defineFunction("pg_stat_get_checkpoint_sync_time")
export { pg_stat_get_checkpoint_sync_time as stat_get_checkpoint_sync_time }

const pg_stat_get_checkpoint_write_time: {
  (): CallExpression<t.float8, "pg_stat_get_checkpoint_write_time">
} = defineFunction("pg_stat_get_checkpoint_write_time")
export { pg_stat_get_checkpoint_write_time as stat_get_checkpoint_write_time }

const pg_stat_get_db_active_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_db_active_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_db_active_time">
} = defineFunction("pg_stat_get_db_active_time")
export { pg_stat_get_db_active_time as stat_get_db_active_time }

const pg_stat_get_db_blk_read_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_db_blk_read_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_db_blk_read_time">
} = defineFunction("pg_stat_get_db_blk_read_time")
export { pg_stat_get_db_blk_read_time as stat_get_db_blk_read_time }

const pg_stat_get_db_blk_write_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_db_blk_write_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_db_blk_write_time">
} = defineFunction("pg_stat_get_db_blk_write_time")
export { pg_stat_get_db_blk_write_time as stat_get_db_blk_write_time }

const pg_stat_get_db_blocks_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_blocks_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_blocks_fetched">
} = defineFunction("pg_stat_get_db_blocks_fetched")
export { pg_stat_get_db_blocks_fetched as stat_get_db_blocks_fetched }

const pg_stat_get_db_blocks_hit: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_blocks_hit">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_blocks_hit">
} = defineFunction("pg_stat_get_db_blocks_hit")
export { pg_stat_get_db_blocks_hit as stat_get_db_blocks_hit }

const pg_stat_get_db_checksum_failures: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_checksum_failures">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_checksum_failures">
} = defineFunction("pg_stat_get_db_checksum_failures")
export { pg_stat_get_db_checksum_failures as stat_get_db_checksum_failures }

const pg_stat_get_db_checksum_last_failure: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_db_checksum_last_failure">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_db_checksum_last_failure">
} = defineFunction("pg_stat_get_db_checksum_last_failure")
export { pg_stat_get_db_checksum_last_failure as stat_get_db_checksum_last_failure }

const pg_stat_get_db_conflict_all: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_all">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_all">
} = defineFunction("pg_stat_get_db_conflict_all")
export { pg_stat_get_db_conflict_all as stat_get_db_conflict_all }

const pg_stat_get_db_conflict_bufferpin: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_bufferpin">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_bufferpin">
} = defineFunction("pg_stat_get_db_conflict_bufferpin")
export { pg_stat_get_db_conflict_bufferpin as stat_get_db_conflict_bufferpin }

const pg_stat_get_db_conflict_lock: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_lock">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_lock">
} = defineFunction("pg_stat_get_db_conflict_lock")
export { pg_stat_get_db_conflict_lock as stat_get_db_conflict_lock }

const pg_stat_get_db_conflict_snapshot: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_snapshot">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_snapshot">
} = defineFunction("pg_stat_get_db_conflict_snapshot")
export { pg_stat_get_db_conflict_snapshot as stat_get_db_conflict_snapshot }

const pg_stat_get_db_conflict_startup_deadlock: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_startup_deadlock">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_startup_deadlock">
} = defineFunction("pg_stat_get_db_conflict_startup_deadlock")
export { pg_stat_get_db_conflict_startup_deadlock as stat_get_db_conflict_startup_deadlock }

const pg_stat_get_db_conflict_tablespace: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_conflict_tablespace">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_conflict_tablespace">
} = defineFunction("pg_stat_get_db_conflict_tablespace")
export { pg_stat_get_db_conflict_tablespace as stat_get_db_conflict_tablespace }

const pg_stat_get_db_deadlocks: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_deadlocks">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_deadlocks">
} = defineFunction("pg_stat_get_db_deadlocks")
export { pg_stat_get_db_deadlocks as stat_get_db_deadlocks }

const pg_stat_get_db_idle_in_transaction_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_db_idle_in_transaction_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_db_idle_in_transaction_time">
} = defineFunction("pg_stat_get_db_idle_in_transaction_time")
export { pg_stat_get_db_idle_in_transaction_time as stat_get_db_idle_in_transaction_time }

const pg_stat_get_db_numbackends: {
  (arg: t.param<t.oid>): CallExpression<t.int4, "pg_stat_get_db_numbackends">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int4 | t.null, "pg_stat_get_db_numbackends">
} = defineFunction("pg_stat_get_db_numbackends")
export { pg_stat_get_db_numbackends as stat_get_db_numbackends }

const pg_stat_get_db_session_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_db_session_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_db_session_time">
} = defineFunction("pg_stat_get_db_session_time")
export { pg_stat_get_db_session_time as stat_get_db_session_time }

const pg_stat_get_db_sessions: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_sessions">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_sessions">
} = defineFunction("pg_stat_get_db_sessions")
export { pg_stat_get_db_sessions as stat_get_db_sessions }

const pg_stat_get_db_sessions_abandoned: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_sessions_abandoned">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_sessions_abandoned">
} = defineFunction("pg_stat_get_db_sessions_abandoned")
export { pg_stat_get_db_sessions_abandoned as stat_get_db_sessions_abandoned }

const pg_stat_get_db_sessions_fatal: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_sessions_fatal">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_sessions_fatal">
} = defineFunction("pg_stat_get_db_sessions_fatal")
export { pg_stat_get_db_sessions_fatal as stat_get_db_sessions_fatal }

const pg_stat_get_db_sessions_killed: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_sessions_killed">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_sessions_killed">
} = defineFunction("pg_stat_get_db_sessions_killed")
export { pg_stat_get_db_sessions_killed as stat_get_db_sessions_killed }

const pg_stat_get_db_stat_reset_time: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_db_stat_reset_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_db_stat_reset_time">
} = defineFunction("pg_stat_get_db_stat_reset_time")
export { pg_stat_get_db_stat_reset_time as stat_get_db_stat_reset_time }

const pg_stat_get_db_temp_bytes: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_temp_bytes">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_temp_bytes">
} = defineFunction("pg_stat_get_db_temp_bytes")
export { pg_stat_get_db_temp_bytes as stat_get_db_temp_bytes }

const pg_stat_get_db_temp_files: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_temp_files">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_temp_files">
} = defineFunction("pg_stat_get_db_temp_files")
export { pg_stat_get_db_temp_files as stat_get_db_temp_files }

const pg_stat_get_db_tuples_deleted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_tuples_deleted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_tuples_deleted">
} = defineFunction("pg_stat_get_db_tuples_deleted")
export { pg_stat_get_db_tuples_deleted as stat_get_db_tuples_deleted }

const pg_stat_get_db_tuples_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_tuples_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_tuples_fetched">
} = defineFunction("pg_stat_get_db_tuples_fetched")
export { pg_stat_get_db_tuples_fetched as stat_get_db_tuples_fetched }

const pg_stat_get_db_tuples_inserted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_tuples_inserted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_tuples_inserted">
} = defineFunction("pg_stat_get_db_tuples_inserted")
export { pg_stat_get_db_tuples_inserted as stat_get_db_tuples_inserted }

const pg_stat_get_db_tuples_returned: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_tuples_returned">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_tuples_returned">
} = defineFunction("pg_stat_get_db_tuples_returned")
export { pg_stat_get_db_tuples_returned as stat_get_db_tuples_returned }

const pg_stat_get_db_tuples_updated: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_tuples_updated">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_tuples_updated">
} = defineFunction("pg_stat_get_db_tuples_updated")
export { pg_stat_get_db_tuples_updated as stat_get_db_tuples_updated }

const pg_stat_get_db_xact_commit: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_xact_commit">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_xact_commit">
} = defineFunction("pg_stat_get_db_xact_commit")
export { pg_stat_get_db_xact_commit as stat_get_db_xact_commit }

const pg_stat_get_db_xact_rollback: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_db_xact_rollback">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_db_xact_rollback">
} = defineFunction("pg_stat_get_db_xact_rollback")
export { pg_stat_get_db_xact_rollback as stat_get_db_xact_rollback }

const pg_stat_get_dead_tuples: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_dead_tuples">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_dead_tuples">
} = defineFunction("pg_stat_get_dead_tuples")
export { pg_stat_get_dead_tuples as stat_get_dead_tuples }

const pg_stat_get_function_calls: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_function_calls">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_function_calls">
} = defineFunction("pg_stat_get_function_calls")
export { pg_stat_get_function_calls as stat_get_function_calls }

const pg_stat_get_function_self_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_function_self_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_function_self_time">
} = defineFunction("pg_stat_get_function_self_time")
export { pg_stat_get_function_self_time as stat_get_function_self_time }

const pg_stat_get_function_total_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_function_total_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_function_total_time">
} = defineFunction("pg_stat_get_function_total_time")
export { pg_stat_get_function_total_time as stat_get_function_total_time }

const pg_stat_get_ins_since_vacuum: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_ins_since_vacuum">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_ins_since_vacuum">
} = defineFunction("pg_stat_get_ins_since_vacuum")
export { pg_stat_get_ins_since_vacuum as stat_get_ins_since_vacuum }

const pg_stat_get_last_analyze_time: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_last_analyze_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_last_analyze_time">
} = defineFunction("pg_stat_get_last_analyze_time")
export { pg_stat_get_last_analyze_time as stat_get_last_analyze_time }

const pg_stat_get_last_autoanalyze_time: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_last_autoanalyze_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_last_autoanalyze_time">
} = defineFunction("pg_stat_get_last_autoanalyze_time")
export { pg_stat_get_last_autoanalyze_time as stat_get_last_autoanalyze_time }

const pg_stat_get_last_autovacuum_time: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_last_autovacuum_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_last_autovacuum_time">
} = defineFunction("pg_stat_get_last_autovacuum_time")
export { pg_stat_get_last_autovacuum_time as stat_get_last_autovacuum_time }

const pg_stat_get_last_vacuum_time: {
  (arg: t.param<t.oid>): CallExpression<t.timestamptz, "pg_stat_get_last_vacuum_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.timestamptz | t.null, "pg_stat_get_last_vacuum_time">
} = defineFunction("pg_stat_get_last_vacuum_time")
export { pg_stat_get_last_vacuum_time as stat_get_last_vacuum_time }

const pg_stat_get_live_tuples: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_live_tuples">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_live_tuples">
} = defineFunction("pg_stat_get_live_tuples")
export { pg_stat_get_live_tuples as stat_get_live_tuples }

const pg_stat_get_mod_since_analyze: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_mod_since_analyze">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_mod_since_analyze">
} = defineFunction("pg_stat_get_mod_since_analyze")
export { pg_stat_get_mod_since_analyze as stat_get_mod_since_analyze }

const pg_stat_get_numscans: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_numscans">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_numscans">
} = defineFunction("pg_stat_get_numscans")
export { pg_stat_get_numscans as stat_get_numscans }

const pg_stat_get_snapshot_timestamp: {
  (): CallExpression<t.timestamptz, "pg_stat_get_snapshot_timestamp">
} = defineFunction("pg_stat_get_snapshot_timestamp")
export { pg_stat_get_snapshot_timestamp as stat_get_snapshot_timestamp }

const pg_stat_get_tuples_deleted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_deleted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_deleted">
} = defineFunction("pg_stat_get_tuples_deleted")
export { pg_stat_get_tuples_deleted as stat_get_tuples_deleted }

const pg_stat_get_tuples_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_fetched">
} = defineFunction("pg_stat_get_tuples_fetched")
export { pg_stat_get_tuples_fetched as stat_get_tuples_fetched }

const pg_stat_get_tuples_hot_updated: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_hot_updated">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_hot_updated">
} = defineFunction("pg_stat_get_tuples_hot_updated")
export { pg_stat_get_tuples_hot_updated as stat_get_tuples_hot_updated }

const pg_stat_get_tuples_inserted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_inserted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_inserted">
} = defineFunction("pg_stat_get_tuples_inserted")
export { pg_stat_get_tuples_inserted as stat_get_tuples_inserted }

const pg_stat_get_tuples_returned: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_returned">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_returned">
} = defineFunction("pg_stat_get_tuples_returned")
export { pg_stat_get_tuples_returned as stat_get_tuples_returned }

const pg_stat_get_tuples_updated: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_tuples_updated">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_tuples_updated">
} = defineFunction("pg_stat_get_tuples_updated")
export { pg_stat_get_tuples_updated as stat_get_tuples_updated }

const pg_stat_get_vacuum_count: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_vacuum_count">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_vacuum_count">
} = defineFunction("pg_stat_get_vacuum_count")
export { pg_stat_get_vacuum_count as stat_get_vacuum_count }

const pg_stat_get_xact_blocks_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_blocks_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_blocks_fetched">
} = defineFunction("pg_stat_get_xact_blocks_fetched")
export { pg_stat_get_xact_blocks_fetched as stat_get_xact_blocks_fetched }

const pg_stat_get_xact_blocks_hit: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_blocks_hit">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_blocks_hit">
} = defineFunction("pg_stat_get_xact_blocks_hit")
export { pg_stat_get_xact_blocks_hit as stat_get_xact_blocks_hit }

const pg_stat_get_xact_function_calls: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_function_calls">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_function_calls">
} = defineFunction("pg_stat_get_xact_function_calls")
export { pg_stat_get_xact_function_calls as stat_get_xact_function_calls }

const pg_stat_get_xact_function_self_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_xact_function_self_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_xact_function_self_time">
} = defineFunction("pg_stat_get_xact_function_self_time")
export { pg_stat_get_xact_function_self_time as stat_get_xact_function_self_time }

const pg_stat_get_xact_function_total_time: {
  (arg: t.param<t.oid>): CallExpression<t.float8, "pg_stat_get_xact_function_total_time">
  (arg: t.param<t.oid | t.null>): CallExpression<t.float8 | t.null, "pg_stat_get_xact_function_total_time">
} = defineFunction("pg_stat_get_xact_function_total_time")
export { pg_stat_get_xact_function_total_time as stat_get_xact_function_total_time }

const pg_stat_get_xact_numscans: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_numscans">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_numscans">
} = defineFunction("pg_stat_get_xact_numscans")
export { pg_stat_get_xact_numscans as stat_get_xact_numscans }

const pg_stat_get_xact_tuples_deleted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_deleted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_deleted">
} = defineFunction("pg_stat_get_xact_tuples_deleted")
export { pg_stat_get_xact_tuples_deleted as stat_get_xact_tuples_deleted }

const pg_stat_get_xact_tuples_fetched: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_fetched">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_fetched">
} = defineFunction("pg_stat_get_xact_tuples_fetched")
export { pg_stat_get_xact_tuples_fetched as stat_get_xact_tuples_fetched }

const pg_stat_get_xact_tuples_hot_updated: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_hot_updated">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_hot_updated">
} = defineFunction("pg_stat_get_xact_tuples_hot_updated")
export { pg_stat_get_xact_tuples_hot_updated as stat_get_xact_tuples_hot_updated }

const pg_stat_get_xact_tuples_inserted: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_inserted">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_inserted">
} = defineFunction("pg_stat_get_xact_tuples_inserted")
export { pg_stat_get_xact_tuples_inserted as stat_get_xact_tuples_inserted }

const pg_stat_get_xact_tuples_returned: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_returned">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_returned">
} = defineFunction("pg_stat_get_xact_tuples_returned")
export { pg_stat_get_xact_tuples_returned as stat_get_xact_tuples_returned }

const pg_stat_get_xact_tuples_updated: {
  (arg: t.param<t.oid>): CallExpression<t.int8, "pg_stat_get_xact_tuples_updated">
  (arg: t.param<t.oid | t.null>): CallExpression<t.int8 | t.null, "pg_stat_get_xact_tuples_updated">
} = defineFunction("pg_stat_get_xact_tuples_updated")
export { pg_stat_get_xact_tuples_updated as stat_get_xact_tuples_updated }

/** 
 * A function for resetting the statistics counters of the current database
 * 
 * @see https://pgpedia.info/p/pg_stat_reset.html
 */
const pg_stat_reset: {
  /** 
   * A function for resetting the statistics counters of the current database
   * 
   * @see https://pgpedia.info/p/pg_stat_reset.html
   */
  (): CallExpression<t.void, "pg_stat_reset">
} = defineFunction("pg_stat_reset")
export { pg_stat_reset as stat_reset }

/** 
 * A system function for resetting replication slot statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_replication_slot.html
 */
const pg_stat_reset_replication_slot: {
  /** 
   * A system function for resetting replication slot statistics
   * 
   * @see https://pgpedia.info/p/pg_stat_reset_replication_slot.html
   */
  (arg: t.param<t.text>): CallExpression<t.void, "pg_stat_reset_replication_slot">
} = defineFunction("pg_stat_reset_replication_slot")
export { pg_stat_reset_replication_slot as stat_reset_replication_slot }

/** 
 * A system function for resetting cluster-wide statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_shared.html
 */
const pg_stat_reset_shared: {
  /** 
   * A system function for resetting cluster-wide statistics
   * 
   * @see https://pgpedia.info/p/pg_stat_reset_shared.html
   */
  (arg: t.param<t.text>): CallExpression<t.void, "pg_stat_reset_shared">
} = defineFunction("pg_stat_reset_shared")
export { pg_stat_reset_shared as stat_reset_shared }

/** 
 * A function resettting the statistics of a function
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_single_function_counters.html
 */
const pg_stat_reset_single_function_counters: {
  /** 
   * A function resettting the statistics of a function
   * 
   * @see https://pgpedia.info/p/pg_stat_reset_single_function_counters.html
   */
  (arg: t.param<t.oid>): CallExpression<t.void, "pg_stat_reset_single_function_counters">
} = defineFunction("pg_stat_reset_single_function_counters")
export { pg_stat_reset_single_function_counters as stat_reset_single_function_counters }

/** 
 * A function for resettting the statistics of a table or index
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_single_table_counters.html
 */
const pg_stat_reset_single_table_counters: {
  /** 
   * A function for resettting the statistics of a table or index
   * 
   * @see https://pgpedia.info/p/pg_stat_reset_single_table_counters.html
   */
  (arg: t.param<t.oid>): CallExpression<t.void, "pg_stat_reset_single_table_counters">
} = defineFunction("pg_stat_reset_single_table_counters")
export { pg_stat_reset_single_table_counters as stat_reset_single_table_counters }

/** 
 * A function for resetting SLRU statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_slru.html
 */
const pg_stat_reset_slru: {
  /** 
   * A function for resetting SLRU statistics
   * 
   * @see https://pgpedia.info/p/pg_stat_reset_slru.html
   */
  (arg: t.param<t.text>): CallExpression<t.void, "pg_stat_reset_slru">
} = defineFunction("pg_stat_reset_slru")
export { pg_stat_reset_slru as stat_reset_slru }

const pg_statistics_obj_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_statistics_obj_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_statistics_obj_is_visible">
} = defineFunction("pg_statistics_obj_is_visible", "bool")
export { pg_statistics_obj_is_visible as statistics_obj_is_visible }

/** 
 * A function for determining whether a table is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_table_is_visible.html
 */
const pg_table_is_visible: {
  /** 
   * A function for determining whether a table is visible in the current search path
   * 
   * @see https://pgpedia.info/p/pg_table_is_visible.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_table_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_table_is_visible">
} = defineFunction("pg_table_is_visible", "bool")
export { pg_table_is_visible as table_is_visible }

const pg_table_size: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "pg_table_size">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "pg_table_size">
} = defineFunction("pg_table_size")
export { pg_table_size as table_size }

/** 
 * A system function listing the OIDs of databases which have objects contained in the specified tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_databases.html
 */
const pg_tablespace_databases: {
  /** 
   * A system function listing the OIDs of databases which have objects contained in the specified tablespace
   * 
   * @see https://pgpedia.info/p/pg_tablespace_databases.html
   */
  (arg: t.param<t.oid | t.null>): SetRef<t.oid, "pg_tablespace_databases">
} = defineSetFunction("pg_tablespace_databases")
export { pg_tablespace_databases as tablespace_databases }

/** 
 * A function returning the file system path of a tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_location.html
 */
const pg_tablespace_location: {
  /** 
   * A function returning the file system path of a tablespace
   * 
   * @see https://pgpedia.info/p/pg_tablespace_location.html
   */
  (arg: t.param<t.oid>): CallExpression<t.text, "pg_tablespace_location">
  (arg: t.param<t.oid | t.null>): CallExpression<t.text | t.null, "pg_tablespace_location">
} = defineFunction("pg_tablespace_location")
export { pg_tablespace_location as tablespace_location }

/** 
 * A function returning the size of the specified tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_size.html
 */
const pg_tablespace_size: {
  /** 
   * A function returning the size of the specified tablespace
   * 
   * @see https://pgpedia.info/p/pg_tablespace_size.html
   */
  (arg: t.param<t.oid | t.name>): CallExpression<t.int8, "pg_tablespace_size">
  (arg: t.param<t.oid | t.name | t.null>): CallExpression<t.int8 | t.null, "pg_tablespace_size">
} = defineFunction("pg_tablespace_size")
export { pg_tablespace_size as tablespace_size }

/** 
 * A function which instructs a backend to terminate
 * 
 * @see https://pgpedia.info/p/pg_terminate_backend.html
 */
const pg_terminate_backend: {
  /** 
   * A function which instructs a backend to terminate
   * 
   * @see https://pgpedia.info/p/pg_terminate_backend.html
   */
  (pid: t.param<t.int4>, timeout?: t.param<t.int8>): CallExpression<t.bool, "pg_terminate_backend">
  (pid: t.param<t.int4 | t.null>, timeout?: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_terminate_backend">
} = defineFunction("pg_terminate_backend", "bool")
export { pg_terminate_backend as terminate_backend }

const pg_total_relation_size: {
  (arg: t.param<t.regclass>): CallExpression<t.int8, "pg_total_relation_size">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.int8 | t.null, "pg_total_relation_size">
} = defineFunction("pg_total_relation_size")
export { pg_total_relation_size as total_relation_size }

/** 
 * A function returning the trigger nesting level
 * 
 * @see https://pgpedia.info/p/pg_trigger_depth.html
 */
const pg_trigger_depth: {
  /** 
   * A function returning the trigger nesting level
   * 
   * @see https://pgpedia.info/p/pg_trigger_depth.html
   */
  (): CallExpression<t.int4, "pg_trigger_depth">
} = defineFunction("pg_trigger_depth")
export { pg_trigger_depth as trigger_depth }

const pg_try_advisory_lock: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_try_advisory_lock">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_lock">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_try_advisory_lock">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_lock">
} = defineFunction("pg_try_advisory_lock", "bool")
export { pg_try_advisory_lock as try_advisory_lock }

const pg_try_advisory_lock_shared: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_try_advisory_lock_shared">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_lock_shared">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_try_advisory_lock_shared">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_lock_shared">
} = defineFunction("pg_try_advisory_lock_shared", "bool")
export { pg_try_advisory_lock_shared as try_advisory_lock_shared }

const pg_try_advisory_xact_lock: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_try_advisory_xact_lock">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_xact_lock">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_try_advisory_xact_lock">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_xact_lock">
} = defineFunction("pg_try_advisory_xact_lock", "bool")
export { pg_try_advisory_xact_lock as try_advisory_xact_lock }

const pg_try_advisory_xact_lock_shared: {
  (arg: t.param<t.int8>): CallExpression<t.bool, "pg_try_advisory_xact_lock_shared">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_xact_lock_shared">
  (arg1: t.param<t.int4>, arg2: t.param<t.int4>): CallExpression<t.bool, "pg_try_advisory_xact_lock_shared">
  (arg1: t.param<t.int4 | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bool | t.null, "pg_try_advisory_xact_lock_shared">
} = defineFunction("pg_try_advisory_xact_lock_shared", "bool")
export { pg_try_advisory_xact_lock_shared as try_advisory_xact_lock_shared }

const pg_ts_config_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_ts_config_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_ts_config_is_visible">
} = defineFunction("pg_ts_config_is_visible", "bool")
export { pg_ts_config_is_visible as ts_config_is_visible }

const pg_ts_dict_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_ts_dict_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_ts_dict_is_visible">
} = defineFunction("pg_ts_dict_is_visible", "bool")
export { pg_ts_dict_is_visible as ts_dict_is_visible }

const pg_ts_parser_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_ts_parser_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_ts_parser_is_visible">
} = defineFunction("pg_ts_parser_is_visible", "bool")
export { pg_ts_parser_is_visible as ts_parser_is_visible }

const pg_ts_template_is_visible: {
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_ts_template_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_ts_template_is_visible">
} = defineFunction("pg_ts_template_is_visible", "bool")
export { pg_ts_template_is_visible as ts_template_is_visible }

/** 
 * A function for determining whether a data type is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_type_is_visible.html
 */
const pg_type_is_visible: {
  /** 
   * A function for determining whether a data type is visible in the current search path
   * 
   * @see https://pgpedia.info/p/pg_type_is_visible.html
   */
  (arg: t.param<t.oid>): CallExpression<t.bool, "pg_type_is_visible">
  (arg: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "pg_type_is_visible">
} = defineFunction("pg_type_is_visible", "bool")
export { pg_type_is_visible as type_is_visible }

const pg_typeof: {
  (arg: t.param<t.any>): CallExpression<t.regtype, "pg_typeof">
} = defineFunction("pg_typeof")
export { pg_typeof as typeof }

/** 
 * A function for pausing WAL replay
 * 
 * @see https://pgpedia.info/p/pg_wal_replay_pause.html
 */
const pg_wal_replay_pause: {
  /** 
   * A function for pausing WAL replay
   * 
   * @see https://pgpedia.info/p/pg_wal_replay_pause.html
   */
  (): CallExpression<t.void, "pg_wal_replay_pause">
} = defineFunction("pg_wal_replay_pause")
export { pg_wal_replay_pause as wal_replay_pause }

/** 
 * A function for resuming replay of WAL files
 * 
 * @see https://pgpedia.info/p/pg_wal_replay_resume.html
 */
const pg_wal_replay_resume: {
  /** 
   * A function for resuming replay of WAL files
   * 
   * @see https://pgpedia.info/p/pg_wal_replay_resume.html
   */
  (): CallExpression<t.void, "pg_wal_replay_resume">
} = defineFunction("pg_wal_replay_resume")
export { pg_wal_replay_resume as wal_replay_resume }

export const pi: {
  (): CallExpression<t.float8, "pi">
} = defineFunction("pi")

export const plpgsql_validator: {
  (arg: t.param<t.oid>): CallExpression<t.void, "plpgsql_validator">
} = defineFunction("plpgsql_validator")

export const point: {
  (arg: t.param<t.circle>): CallExpression<t.point, "point">
  (arg: t.param<t.circle | t.null>): CallExpression<t.point | t.null, "point">
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.point, "point">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.point | t.null, "point">
} = defineFunction("point")

export const point_above: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_above">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_above">
} = defineFunction("point_above", "bool")

export const point_add: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.point, "point_add">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.point | t.null, "point_add">
} = defineFunction("point_add")

export const point_below: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_below">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_below">
} = defineFunction("point_below", "bool")

export const point_distance: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.float8, "point_distance">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.float8 | t.null, "point_distance">
} = defineFunction("point_distance")

export const point_div: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.point, "point_div">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.point | t.null, "point_div">
} = defineFunction("point_div")

export const point_eq: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_eq">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_eq">
} = defineFunction("point_eq", "bool")

export const point_horiz: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_horiz">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_horiz">
} = defineFunction("point_horiz", "bool")

export const point_left: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_left">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_left">
} = defineFunction("point_left", "bool")

export const point_mul: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.point, "point_mul">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.point | t.null, "point_mul">
} = defineFunction("point_mul")

export const point_ne: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_ne">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_ne">
} = defineFunction("point_ne", "bool")

export const point_right: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_right">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_right">
} = defineFunction("point_right", "bool")

export const point_send: {
  (arg: t.param<t.point>): CallExpression<t.bytea, "point_send">
  (arg: t.param<t.point | t.null>): CallExpression<t.bytea | t.null, "point_send">
} = defineFunction("point_send")

export const point_sub: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.point, "point_sub">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.point | t.null, "point_sub">
} = defineFunction("point_sub")

export const point_vert: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.bool, "point_vert">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.bool | t.null, "point_vert">
} = defineFunction("point_vert", "bool")

export const position: {
  (arg1: t.param<t.text | t.bit | t.bytea>, arg2: t.param<t.text | t.bit | t.bytea>): CallExpression<t.int4, "position">
  (arg1: t.param<t.text | t.bit | t.bytea | t.null>, arg2: t.param<t.text | t.bit | t.bytea | t.null>): CallExpression<t.int4 | t.null, "position">
} = defineFunction("position")

export const postgresql_fdw_validator: {
  (arg1: t.param<t.array<t.text>>, arg2: t.param<t.oid>): CallExpression<t.bool, "postgresql_fdw_validator">
  (arg1: t.param<t.array<t.text> | t.null>, arg2: t.param<t.oid | t.null>): CallExpression<t.bool | t.null, "postgresql_fdw_validator">
} = defineFunction("postgresql_fdw_validator", "bool")

export const pow: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "pow">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "pow">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "pow">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "pow">
} = defineFunction("pow")

export const power: {
  (arg1: t.param<t.float8>, arg2: t.param<t.float8>): CallExpression<t.float8, "power">
  (arg1: t.param<t.float8 | t.null>, arg2: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "power">
  (arg1: t.param<t.numeric>, arg2: t.param<t.numeric>): CallExpression<t.numeric, "power">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "power">
} = defineFunction("power")

export const pt_contained_circle: {
  (arg1: t.param<t.point>, arg2: t.param<t.circle>): CallExpression<t.bool, "pt_contained_circle">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.circle | t.null>): CallExpression<t.bool | t.null, "pt_contained_circle">
} = defineFunction("pt_contained_circle", "bool")

export const query_to_xml: {
  (query: t.param<t.text>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "query_to_xml">
  (query: t.param<t.text | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "query_to_xml">
} = defineFunction("query_to_xml")

export const query_to_xml_and_xmlschema: {
  (query: t.param<t.text>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "query_to_xml_and_xmlschema">
  (query: t.param<t.text | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "query_to_xml_and_xmlschema">
} = defineFunction("query_to_xml_and_xmlschema")

export const query_to_xmlschema: {
  (query: t.param<t.text>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "query_to_xmlschema">
  (query: t.param<t.text | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "query_to_xmlschema">
} = defineFunction("query_to_xmlschema")

/** 
 * A function which formats identifiers for use in SQL strings
 * 
 * @see https://pgpedia.info/q/quote_ident.html
 */
export const quote_ident: {
  /** 
   * A function which formats identifiers for use in SQL strings
   * 
   * @see https://pgpedia.info/q/quote_ident.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "quote_ident">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "quote_ident">
} = defineFunction("quote_ident")

/** 
 * A function which formats arbitrary input as an SQL string literal
 * 
 * @see https://pgpedia.info/q/quote_literal.html
 */
export const quote_literal: {
  /** 
   * A function which formats arbitrary input as an SQL string literal
   * 
   * @see https://pgpedia.info/q/quote_literal.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "quote_literal">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "quote_literal">
  (arg: t.param<t.anyelement>): CallExpression<t.text, "quote_literal">
  (arg: t.param<t.anyelement | t.null>): CallExpression<t.text | t.null, "quote_literal">
} = defineFunction("quote_literal")

/** 
 * A function which formats arbitrary input as an SQL string literal and converts NULL to a string
 * 
 * @see https://pgpedia.info/q/quote_nullable.html
 */
export const quote_nullable: {
  /** 
   * A function which formats arbitrary input as an SQL string literal and converts NULL to a string
   * 
   * @see https://pgpedia.info/q/quote_nullable.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "quote_nullable">
  (arg: t.param<t.anyelement>): CallExpression<t.text, "quote_nullable">
} = defineFunction("quote_nullable")

export const radians: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "radians">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "radians">
} = defineFunction("radians")

export const radius: {
  (arg: t.param<t.circle>): CallExpression<t.float8, "radius">
  (arg: t.param<t.circle | t.null>): CallExpression<t.float8 | t.null, "radius">
} = defineFunction("radius")

/** 
 * A function returning a random value
 * 
 * @see https://pgpedia.info/r/random.html
 */
export const random: {
  /** 
   * A function returning a random value
   * 
   * @see https://pgpedia.info/r/random.html
   */
  (): CallExpression<t.float8, "random">
} = defineFunction("random")

export const rank: {
  (): CallExpression<t.int8, "rank">
  (...args: t.aggParam<t.any>[]): Aggregate<t.int8, "rank">
} = defineFunction("rank")

export const regclass: {
  (arg: t.param<t.text>): CallExpression<t.regclass, "regclass">
  (arg: t.param<t.text | t.null>): CallExpression<t.regclass | t.null, "regclass">
} = defineFunction("regclass")

export const regclasssend: {
  (arg: t.param<t.regclass>): CallExpression<t.bytea, "regclasssend">
  (arg: t.param<t.regclass | t.null>): CallExpression<t.bytea | t.null, "regclasssend">
} = defineFunction("regclasssend")

export const regcollationsend: {
  (arg: t.param<t.regcollation>): CallExpression<t.bytea, "regcollationsend">
  (arg: t.param<t.regcollation | t.null>): CallExpression<t.bytea | t.null, "regcollationsend">
} = defineFunction("regcollationsend")

export const regconfigsend: {
  (arg: t.param<t.regconfig>): CallExpression<t.bytea, "regconfigsend">
  (arg: t.param<t.regconfig | t.null>): CallExpression<t.bytea | t.null, "regconfigsend">
} = defineFunction("regconfigsend")

export const regdictionarysend: {
  (arg: t.param<t.regdictionary>): CallExpression<t.bytea, "regdictionarysend">
  (arg: t.param<t.regdictionary | t.null>): CallExpression<t.bytea | t.null, "regdictionarysend">
} = defineFunction("regdictionarysend")

/** 
 * A function returning the match for a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_match.html
 */
export const regexp_match: {
  /** 
   * A function returning the match for a regular expression
   * 
   * @see https://pgpedia.info/r/regexp_match.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.array<t.text>, "regexp_match">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.array<t.text> | t.null, "regexp_match">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.array<t.text>, "regexp_match">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.array<t.text> | t.null, "regexp_match">
} = defineFunction("regexp_match")

/** 
 * A function returning matches for a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_matches.html
 */
export const regexp_matches: {
  /** 
   * A function returning matches for a regular expression
   * 
   * @see https://pgpedia.info/r/regexp_matches.html
   */
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): SetRef<t.array<t.text>, "regexp_matches">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): SetRef<t.array<t.text>, "regexp_matches">
} = defineSetFunction("regexp_matches")

/** 
 * A function for replacing values in a string using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_replace.html
 */
export const regexp_replace: {
  /** 
   * A function for replacing values in a string using a regular expression
   * 
   * @see https://pgpedia.info/r/regexp_replace.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.text, "regexp_replace">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.text | t.null, "regexp_replace">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>, arg4: t.param<t.text>): CallExpression<t.text, "regexp_replace">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>, arg4: t.param<t.text | t.null>): CallExpression<t.text | t.null, "regexp_replace">
} = defineFunction("regexp_replace")

/** 
 * A function for splitting a string to an array using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_split_to_array.html
 */
export const regexp_split_to_array: {
  /** 
   * A function for splitting a string to an array using a regular expression
   * 
   * @see https://pgpedia.info/r/regexp_split_to_array.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.array<t.text>, "regexp_split_to_array">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.array<t.text> | t.null, "regexp_split_to_array">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.array<t.text>, "regexp_split_to_array">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.array<t.text> | t.null, "regexp_split_to_array">
} = defineFunction("regexp_split_to_array")

/** 
 * A function for splitting a string to a table using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_split_to_table.html
 */
export const regexp_split_to_table: {
  /** 
   * A function for splitting a string to a table using a regular expression
   * 
   * @see https://pgpedia.info/r/regexp_split_to_table.html
   */
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): SetRef<t.text, "regexp_split_to_table">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): SetRef<t.text, "regexp_split_to_table">
} = defineSetFunction("regexp_split_to_table")

export const regnamespacesend: {
  (arg: t.param<t.regnamespace>): CallExpression<t.bytea, "regnamespacesend">
  (arg: t.param<t.regnamespace | t.null>): CallExpression<t.bytea | t.null, "regnamespacesend">
} = defineFunction("regnamespacesend")

export const regoperatorsend: {
  (arg: t.param<t.regoperator>): CallExpression<t.bytea, "regoperatorsend">
  (arg: t.param<t.regoperator | t.null>): CallExpression<t.bytea | t.null, "regoperatorsend">
} = defineFunction("regoperatorsend")

export const regopersend: {
  (arg: t.param<t.regoper>): CallExpression<t.bytea, "regopersend">
  (arg: t.param<t.regoper | t.null>): CallExpression<t.bytea | t.null, "regopersend">
} = defineFunction("regopersend")

export const regproceduresend: {
  (arg: t.param<t.regprocedure>): CallExpression<t.bytea, "regproceduresend">
  (arg: t.param<t.regprocedure | t.null>): CallExpression<t.bytea | t.null, "regproceduresend">
} = defineFunction("regproceduresend")

export const regprocsend: {
  (arg: t.param<t.regproc>): CallExpression<t.bytea, "regprocsend">
  (arg: t.param<t.regproc | t.null>): CallExpression<t.bytea | t.null, "regprocsend">
} = defineFunction("regprocsend")

export const regr_avgx: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_avgx">
} = defineFunction("regr_avgx")

export const regr_avgy: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_avgy">
} = defineFunction("regr_avgy")

export const regr_count: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.int8, "regr_count">
} = defineFunction("regr_count")

export const regr_intercept: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_intercept">
} = defineFunction("regr_intercept")

export const regr_r2: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_r2">
} = defineFunction("regr_r2")

export const regr_slope: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_slope">
} = defineFunction("regr_slope")

export const regr_sxx: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_sxx">
} = defineFunction("regr_sxx")

export const regr_sxy: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_sxy">
} = defineFunction("regr_sxy")

export const regr_syy: {
  (arg1: t.aggParam<t.float8>, arg2: t.aggParam<t.float8>): Aggregate<t.float8, "regr_syy">
} = defineFunction("regr_syy")

export const regrolesend: {
  (arg: t.param<t.regrole>): CallExpression<t.bytea, "regrolesend">
  (arg: t.param<t.regrole | t.null>): CallExpression<t.bytea | t.null, "regrolesend">
} = defineFunction("regrolesend")

export const regtypesend: {
  (arg: t.param<t.regtype>): CallExpression<t.bytea, "regtypesend">
  (arg: t.param<t.regtype | t.null>): CallExpression<t.bytea | t.null, "regtypesend">
} = defineFunction("regtypesend")

/** 
 * A function for repeating the input string
 * 
 * @see https://pgpedia.info/r/repeat.html
 */
export const repeat: {
  /** 
   * A function for repeating the input string
   * 
   * @see https://pgpedia.info/r/repeat.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "repeat">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "repeat">
} = defineFunction("repeat")

/** 
 * A function for replacing parts of a string with another string
 * 
 * @see https://pgpedia.info/r/replace.html
 */
export const replace: {
  /** 
   * A function for replacing parts of a string with another string
   * 
   * @see https://pgpedia.info/r/replace.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.text, "replace">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.text | t.null, "replace">
} = defineFunction("replace")

/** 
 * A function for reversing a string
 * 
 * @see https://pgpedia.info/r/reverse.html
 */
export const reverse: {
  /** 
   * A function for reversing a string
   * 
   * @see https://pgpedia.info/r/reverse.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "reverse">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "reverse">
} = defineFunction("reverse")

/** 
 * A function returning characters from the right of a string
 * 
 * @see https://pgpedia.info/r/right.html
 */
export const right: {
  /** 
   * A function returning characters from the right of a string
   * 
   * @see https://pgpedia.info/r/right.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "right">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "right">
} = defineFunction("right")

export const round: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "round">
  (arg1: t.param<t.numeric>, arg2: t.param<t.int4>): CallExpression<t.numeric, "round">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.numeric | t.null, "round">
} = defineFunction("round")

export const row_number: {
  (): CallExpression<t.int8, "row_number">
} = defineFunction("row_number")

export const row_security_active: {
  (arg: t.param<t.oid | t.text>): CallExpression<t.bool, "row_security_active">
  (arg: t.param<t.oid | t.text | t.null>): CallExpression<t.bool | t.null, "row_security_active">
} = defineFunction("row_security_active", "bool")

/** 
 * A system function for padding the right side of a string
 * 
 * @see https://pgpedia.info/r/rpad.html
 */
export const rpad: {
  /** 
   * A system function for padding the right side of a string
   * 
   * @see https://pgpedia.info/r/rpad.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>, arg3: t.param<t.text>): CallExpression<t.text, "rpad">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.text | t.null, "rpad">
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "rpad">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "rpad">
} = defineFunction("rpad")

/** 
 * A function which trims characters from the right side of a string
 * 
 * @see https://pgpedia.info/r/rtrim.html
 */
export const rtrim: {
  /** 
   * A function which trims characters from the right side of a string
   * 
   * @see https://pgpedia.info/r/rtrim.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "rtrim">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "rtrim">
  (arg: t.param<t.text>): CallExpression<t.text, "rtrim">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "rtrim">
  (arg1: t.param<t.bytea>, arg2: t.param<t.bytea>): CallExpression<t.bytea, "rtrim">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "rtrim">
} = defineFunction("rtrim")

export const satisfies_hash_partition: {
  (arg1: t.param<t.oid>, arg2: t.param<t.int4>, arg3: t.param<t.int4>, arg4: t.param<t.any>): CallExpression<t.bool, "satisfies_hash_partition">
} = defineFunction("satisfies_hash_partition", "bool")

/** 
 * A function returning the scale of the argument
 * 
 * @see https://pgpedia.info/s/scale.html
 */
export const scale: {
  /** 
   * A function returning the scale of the argument
   * 
   * @see https://pgpedia.info/s/scale.html
   */
  (arg: t.param<t.numeric>): CallExpression<t.int4, "scale">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.int4 | t.null, "scale">
} = defineFunction("scale")

export const schema_to_xml: {
  (schema: t.param<t.name>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "schema_to_xml">
  (schema: t.param<t.name | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "schema_to_xml">
} = defineFunction("schema_to_xml")

export const schema_to_xml_and_xmlschema: {
  (schema: t.param<t.name>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "schema_to_xml_and_xmlschema">
  (schema: t.param<t.name | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "schema_to_xml_and_xmlschema">
} = defineFunction("schema_to_xml_and_xmlschema")

export const schema_to_xmlschema: {
  (schema: t.param<t.name>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "schema_to_xmlschema">
  (schema: t.param<t.name | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "schema_to_xmlschema">
} = defineFunction("schema_to_xmlschema")

export const session_user: CallExpression<t.name, "session_user"> = defineFunction("session_user", "var")()

export const set_bit: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.int8>, arg3: t.param<t.int4>): CallExpression<t.bytea, "set_bit">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "set_bit">
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.bit, "set_bit">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "set_bit">
} = defineFunction("set_bit")

export const set_byte: {
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.bytea, "set_byte">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "set_byte">
} = defineFunction("set_byte")

/** 
 * A function for temporarily setting a configuration parameter
 * 
 * @see https://pgpedia.info/s/set_config.html
 */
export const set_config: {
  /** 
   * A function for temporarily setting a configuration parameter
   * 
   * @see https://pgpedia.info/s/set_config.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.bool>): CallExpression<t.text, "set_config">
} = defineFunction("set_config")

export const set_masklen: {
  (arg1: t.param<t.inet>, arg2: t.param<t.int4>): CallExpression<t.inet, "set_masklen">
  (arg1: t.param<t.inet | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.inet | t.null, "set_masklen">
  (arg1: t.param<t.cidr>, arg2: t.param<t.int4>): CallExpression<t.cidr, "set_masklen">
  (arg1: t.param<t.cidr | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.cidr | t.null, "set_masklen">
} = defineFunction("set_masklen")

/** 
 * A function for setting the random number generator seed
 * 
 * @see https://pgpedia.info/s/setseed.html
 */
export const setseed: {
  /** 
   * A function for setting the random number generator seed
   * 
   * @see https://pgpedia.info/s/setseed.html
   */
  (arg: t.param<t.float8>): CallExpression<t.void, "setseed">
} = defineFunction("setseed")

export const setval: {
  (arg1: t.param<t.regclass>, arg2: t.param<t.int8>): CallExpression<t.int8, "setval">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "setval">
  (arg1: t.param<t.regclass>, arg2: t.param<t.int8>, arg3: t.param<t.bool>): CallExpression<t.int8, "setval">
  (arg1: t.param<t.regclass | t.null>, arg2: t.param<t.int8 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.int8 | t.null, "setval">
} = defineFunction("setval")

/** 
 * A function for assigning a weight to each element of a vector
 * 
 * @see https://pgpedia.info/s/setweight.html
 */
export const setweight: {
  /** 
   * A function for assigning a weight to each element of a vector
   * 
   * @see https://pgpedia.info/s/setweight.html
   */
  (arg1: t.param<t.tsvector>, arg2: t.param<t.char>): CallExpression<t.tsvector, "setweight">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.char | t.null>): CallExpression<t.tsvector | t.null, "setweight">
  (arg1: t.param<t.tsvector>, arg2: t.param<t.char>, arg3: t.param<t.array<t.text>>): CallExpression<t.tsvector, "setweight">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.char | t.null>, arg3: t.param<t.array<t.text> | t.null>): CallExpression<t.tsvector | t.null, "setweight">
} = defineFunction("setweight")

/** 
 * A function computing a SHA-224 hash
 * 
 * @see https://pgpedia.info/s/sha224.html
 */
export const sha224: {
  /** 
   * A function computing a SHA-224 hash
   * 
   * @see https://pgpedia.info/s/sha224.html
   */
  (arg: t.param<t.bytea>): CallExpression<t.bytea, "sha224">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "sha224">
} = defineFunction("sha224")

/** 
 * A function computing a SHA-256 hash
 * 
 * @see https://pgpedia.info/s/sha256.html
 */
export const sha256: {
  /** 
   * A function computing a SHA-256 hash
   * 
   * @see https://pgpedia.info/s/sha256.html
   */
  (arg: t.param<t.bytea>): CallExpression<t.bytea, "sha256">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "sha256">
} = defineFunction("sha256")

/** 
 * A function computing a SHA-384 hash
 * 
 * @see https://pgpedia.info/s/sha384.html
 */
export const sha384: {
  /** 
   * A function computing a SHA-384 hash
   * 
   * @see https://pgpedia.info/s/sha384.html
   */
  (arg: t.param<t.bytea>): CallExpression<t.bytea, "sha384">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "sha384">
} = defineFunction("sha384")

/** 
 * A function computing a SHA-512 hash
 * 
 * @see https://pgpedia.info/s/sha512.html
 */
export const sha512: {
  /** 
   * A function computing a SHA-512 hash
   * 
   * @see https://pgpedia.info/s/sha512.html
   */
  (arg: t.param<t.bytea>): CallExpression<t.bytea, "sha512">
  (arg: t.param<t.bytea | t.null>): CallExpression<t.bytea | t.null, "sha512">
} = defineFunction("sha512")

/** 
 * A function returning a shared object's comment
 * 
 * @see https://pgpedia.info/s/shobj_description.html
 */
export const shobj_description: {
  /** 
   * A function returning a shared object's comment
   * 
   * @see https://pgpedia.info/s/shobj_description.html
   */
  (arg1: t.param<t.oid>, arg2: t.param<t.name>): CallExpression<t.text, "shobj_description">
  (arg1: t.param<t.oid | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.text | t.null, "shobj_description">
} = defineFunction("shobj_description")

export const sign: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "sign">
} = defineFunction("sign")

export const similar_escape: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "similar_escape">
} = defineFunction("similar_escape")

export const similar_to_escape: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "similar_to_escape">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "similar_to_escape">
  (arg: t.param<t.text>): CallExpression<t.text, "similar_to_escape">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "similar_to_escape">
} = defineFunction("similar_to_escape")

export const sin: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "sin">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "sin">
} = defineFunction("sin")

export const sind: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "sind">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "sind">
} = defineFunction("sind")

export const sinh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "sinh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "sinh">
} = defineFunction("sinh")

export const slope: {
  (arg1: t.param<t.point>, arg2: t.param<t.point>): CallExpression<t.float8, "slope">
  (arg1: t.param<t.point | t.null>, arg2: t.param<t.point | t.null>): CallExpression<t.float8 | t.null, "slope">
} = defineFunction("slope")

/** 
 * A function for splitting a string on a delimiter and returning one of the fields
 * 
 * @see https://pgpedia.info/s/split_part-functon.html
 */
export const split_part: {
  /** 
   * A function for splitting a string on a delimiter and returning one of the fields
   * 
   * @see https://pgpedia.info/s/split_part-functon.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.int4>): CallExpression<t.text, "split_part">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "split_part">
} = defineFunction("split_part")

export const sqrt: {
  <T extends t.float8 | t.numeric | t.null>(arg: T): CallExpression<T, "sqrt">
} = defineFunction("sqrt")

/** 
 * A function determining whether a string starts with a particular prefix
 * 
 * @see https://pgpedia.info/s/starts_with.html
 */
export const starts_with: {
  /** 
   * A function determining whether a string starts with a particular prefix
   * 
   * @see https://pgpedia.info/s/starts_with.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "starts_with">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "starts_with">
} = defineFunction("starts_with", "bool")

/** 
 * A function returning the point-in-time the current query started
 * 
 * @see https://pgpedia.info/s/statement_timestamp.html
 */
export const statement_timestamp: {
  /** 
   * A function returning the point-in-time the current query started
   * 
   * @see https://pgpedia.info/s/statement_timestamp.html
   */
  (): CallExpression<t.timestamptz, "statement_timestamp">
} = defineFunction("statement_timestamp")

export const stddev: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "stddev">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "stddev">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "stddev">
} = defineFunction("stddev")

export const stddev_pop: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "stddev_pop">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "stddev_pop">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "stddev_pop">
} = defineFunction("stddev_pop")

export const stddev_samp: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "stddev_samp">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "stddev_samp">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "stddev_samp">
} = defineFunction("stddev_samp")

/** 
 * A function for concatenating values into a string
 * 
 * @see https://pgpedia.info/s/string_agg.html
 */
export const string_agg: {
  /** 
   * A function for concatenating values into a string
   * 
   * @see https://pgpedia.info/s/string_agg.html
   */
  (arg1: t.aggParam<t.text>, arg2: t.aggParam<t.text>): Aggregate<t.text, "string_agg">
  (arg1: t.aggParam<t.bytea>, arg2: t.aggParam<t.bytea>): Aggregate<t.bytea, "string_agg">
} = defineFunction("string_agg")

/** 
 * A function for splitting a string into an array
 * 
 * @see https://pgpedia.info/s/string_to_array.html
 */
export const string_to_array: {
  /** 
   * A function for splitting a string into an array
   * 
   * @see https://pgpedia.info/s/string_to_array.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.array<t.text>, "string_to_array">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.array<t.text>, "string_to_array">
} = defineFunction("string_to_array")

/** 
 * A function to splt a string at a specified delimiter returning a set of values
 * 
 * @see https://pgpedia.info/s/string_to_table.html
 */
export const string_to_table: {
  /** 
   * A function to splt a string at a specified delimiter returning a set of values
   * 
   * @see https://pgpedia.info/s/string_to_table.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): SetRef<t.text, "string_to_table">
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): SetRef<t.text, "string_to_table">
} = defineSetFunction("string_to_table")

export const strip: {
  (arg: t.param<t.tsvector>): CallExpression<t.tsvector, "strip">
  (arg: t.param<t.tsvector | t.null>): CallExpression<t.tsvector | t.null, "strip">
} = defineFunction("strip")

/** 
 * A system function for returning the start of a string within another string
 * 
 * @see https://pgpedia.info/s/strpos.html
 */
export const strpos: {
  /** 
   * A system function for returning the start of a string within another string
   * 
   * @see https://pgpedia.info/s/strpos.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.int4, "strpos">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "strpos">
} = defineFunction("strpos")

/** 
 * A system function for returning a substring from a string
 * 
 * @see https://pgpedia.info/s/substr.html
 */
export const substr: {
  /** 
   * A system function for returning a substring from a string
   * 
   * @see https://pgpedia.info/s/substr.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.text, "substr">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "substr">
  (arg1: t.param<t.text>, arg2: t.param<t.int4>): CallExpression<t.text, "substr">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.text | t.null, "substr">
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.bytea, "substr">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "substr">
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>): CallExpression<t.bytea, "substr">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "substr">
} = defineFunction("substr")

export const substring: {
  (arg1: t.param<t.text>, arg2: t.param<t.int4 | t.text>, arg3: t.param<t.int4 | t.text>): CallExpression<t.text, "substring">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.text | t.null>, arg3: t.param<t.int4 | t.text | t.null>): CallExpression<t.text | t.null, "substring">
  (arg1: t.param<t.text>, arg2: t.param<t.int4 | t.text>): CallExpression<t.text, "substring">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.text | t.null>): CallExpression<t.text | t.null, "substring">
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.bit, "substring">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "substring">
  (arg1: t.param<t.bit>, arg2: t.param<t.int4>): CallExpression<t.bit, "substring">
  (arg1: t.param<t.bit | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bit | t.null, "substring">
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>, arg3: t.param<t.int4>): CallExpression<t.bytea, "substring">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "substring">
  (arg1: t.param<t.bytea>, arg2: t.param<t.int4>): CallExpression<t.bytea, "substring">
  (arg1: t.param<t.bytea | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.bytea | t.null, "substring">
} = defineFunction("substring")

export const sum: {
  (arg: t.aggParam<t.int8>): Aggregate<t.numeric, "sum">
  (arg: t.aggParam<t.int4 | t.int2>): Aggregate<t.int8, "sum">
  <T extends t.float4 | t.float8 | t.money | t.interval | t.numeric>(arg: T): Aggregate<T, "sum">
} = defineFunction("sum")

export const table_to_xml: {
  (tbl: t.param<t.regclass>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "table_to_xml">
  (tbl: t.param<t.regclass | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "table_to_xml">
} = defineFunction("table_to_xml")

export const table_to_xml_and_xmlschema: {
  (tbl: t.param<t.regclass>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "table_to_xml_and_xmlschema">
  (tbl: t.param<t.regclass | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "table_to_xml_and_xmlschema">
} = defineFunction("table_to_xml_and_xmlschema")

export const table_to_xmlschema: {
  (tbl: t.param<t.regclass>, nulls: t.param<t.bool>, tableforest: t.param<t.bool>, targetns: t.param<t.text>): CallExpression<t.xml, "table_to_xmlschema">
  (tbl: t.param<t.regclass | t.null>, nulls: t.param<t.bool | t.null>, tableforest: t.param<t.bool | t.null>, targetns: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "table_to_xmlschema">
} = defineFunction("table_to_xmlschema")

export const tan: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "tan">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "tan">
} = defineFunction("tan")

export const tand: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "tand">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "tand">
} = defineFunction("tand")

export const tanh: {
  (arg: t.param<t.float8>): CallExpression<t.float8, "tanh">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.float8 | t.null, "tanh">
} = defineFunction("tanh")

export const text: {
  (arg: t.param<t.bpchar | t.name | t.char | t.inet | t.bool | t.xml>): CallExpression<t.text, "text">
  (arg: t.param<t.bpchar | t.name | t.char | t.inet | t.bool | t.xml | t.null>): CallExpression<t.text | t.null, "text">
} = defineFunction("text")

export const text_ge: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_ge">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_ge">
} = defineFunction("text_ge", "bool")

export const text_gt: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_gt">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_gt">
} = defineFunction("text_gt", "bool")

export const text_larger: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "text_larger">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "text_larger">
} = defineFunction("text_larger")

export const text_le: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_le">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_le">
} = defineFunction("text_le", "bool")

export const text_lt: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_lt">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_lt">
} = defineFunction("text_lt", "bool")

export const text_pattern_ge: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_pattern_ge">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_pattern_ge">
} = defineFunction("text_pattern_ge", "bool")

export const text_pattern_gt: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_pattern_gt">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_pattern_gt">
} = defineFunction("text_pattern_gt", "bool")

export const text_pattern_le: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_pattern_le">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_pattern_le">
} = defineFunction("text_pattern_le", "bool")

export const text_pattern_lt: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "text_pattern_lt">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "text_pattern_lt">
} = defineFunction("text_pattern_lt", "bool")

export const text_smaller: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "text_smaller">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "text_smaller">
} = defineFunction("text_smaller")

export const textanycat: {
  (arg1: t.param<t.text>, arg2: t.param<t.anynonarray>): CallExpression<t.text, "textanycat">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.anynonarray | t.null>): CallExpression<t.text | t.null, "textanycat">
} = defineFunction("textanycat")

export const textcat: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.text, "textcat">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "textcat">
} = defineFunction("textcat")

export const texteq: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "texteq">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "texteq">
} = defineFunction("texteq", "bool")

export const texteqname: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "texteqname">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "texteqname">
} = defineFunction("texteqname", "bool")

export const textgename: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "textgename">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "textgename">
} = defineFunction("textgename", "bool")

export const textgtname: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "textgtname">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "textgtname">
} = defineFunction("textgtname", "bool")

export const texticlike: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "texticlike">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "texticlike">
} = defineFunction("texticlike", "bool")

export const texticnlike: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "texticnlike">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "texticnlike">
} = defineFunction("texticnlike", "bool")

export const texticregexeq: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "texticregexeq">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "texticregexeq">
} = defineFunction("texticregexeq", "bool")

export const texticregexne: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "texticregexne">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "texticregexne">
} = defineFunction("texticregexne", "bool")

export const textlen: {
  (arg: t.param<t.text>): CallExpression<t.int4, "textlen">
  (arg: t.param<t.text | t.null>): CallExpression<t.int4 | t.null, "textlen">
} = defineFunction("textlen")

export const textlename: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "textlename">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "textlename">
} = defineFunction("textlename", "bool")

export const textlike: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "textlike">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "textlike">
} = defineFunction("textlike", "bool")

export const textltname: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "textltname">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "textltname">
} = defineFunction("textltname", "bool")

export const textne: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "textne">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "textne">
} = defineFunction("textne", "bool")

export const textnename: {
  (arg1: t.param<t.text>, arg2: t.param<t.name>): CallExpression<t.bool, "textnename">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.name | t.null>): CallExpression<t.bool | t.null, "textnename">
} = defineFunction("textnename", "bool")

export const textnlike: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "textnlike">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "textnlike">
} = defineFunction("textnlike", "bool")

export const textregexeq: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "textregexeq">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "textregexeq">
} = defineFunction("textregexeq", "bool")

export const textregexne: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "textregexne">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "textregexne">
} = defineFunction("textregexne", "bool")

export const textsend: {
  (arg: t.param<t.text>): CallExpression<t.bytea, "textsend">
  (arg: t.param<t.text | t.null>): CallExpression<t.bytea | t.null, "textsend">
} = defineFunction("textsend")

export const time: {
  (arg: t.param<t.timestamp | t.interval | t.timestamptz | t.timetz>): CallExpression<t.time, "time">
  (arg: t.param<t.timestamp | t.interval | t.timestamptz | t.timetz | t.null>): CallExpression<t.time | t.null, "time">
  (arg1: t.param<t.time>, arg2: t.param<t.int4>): CallExpression<t.time, "time">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.time | t.null, "time">
} = defineFunction("time")

export const time_cmp: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.int4, "time_cmp">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.int4 | t.null, "time_cmp">
} = defineFunction("time_cmp")

export const time_eq: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_eq">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_eq">
} = defineFunction("time_eq", "bool")

export const time_ge: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_ge">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_ge">
} = defineFunction("time_ge", "bool")

export const time_gt: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_gt">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_gt">
} = defineFunction("time_gt", "bool")

export const time_hash: {
  (arg: t.param<t.time>): CallExpression<t.int4, "time_hash">
  (arg: t.param<t.time | t.null>): CallExpression<t.int4 | t.null, "time_hash">
} = defineFunction("time_hash")

export const time_hash_extended: {
  (arg1: t.param<t.time>, arg2: t.param<t.int8>): CallExpression<t.int8, "time_hash_extended">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "time_hash_extended">
} = defineFunction("time_hash_extended")

export const time_larger: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.time, "time_larger">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.time | t.null, "time_larger">
} = defineFunction("time_larger")

export const time_le: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_le">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_le">
} = defineFunction("time_le", "bool")

export const time_lt: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_lt">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_lt">
} = defineFunction("time_lt", "bool")

export const time_mi_interval: {
  (arg1: t.param<t.time>, arg2: t.param<t.interval>): CallExpression<t.time, "time_mi_interval">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.time | t.null, "time_mi_interval">
} = defineFunction("time_mi_interval")

export const time_mi_time: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.interval, "time_mi_time">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.interval | t.null, "time_mi_time">
} = defineFunction("time_mi_time")

export const time_ne: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.bool, "time_ne">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.bool | t.null, "time_ne">
} = defineFunction("time_ne", "bool")

export const time_pl_interval: {
  (arg1: t.param<t.time>, arg2: t.param<t.interval>): CallExpression<t.time, "time_pl_interval">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.time | t.null, "time_pl_interval">
} = defineFunction("time_pl_interval")

export const time_send: {
  (arg: t.param<t.time>): CallExpression<t.bytea, "time_send">
  (arg: t.param<t.time | t.null>): CallExpression<t.bytea | t.null, "time_send">
} = defineFunction("time_send")

export const time_smaller: {
  (arg1: t.param<t.time>, arg2: t.param<t.time>): CallExpression<t.time, "time_smaller">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.time | t.null>): CallExpression<t.time | t.null, "time_smaller">
} = defineFunction("time_smaller")

export const timedate_pl: {
  (arg1: t.param<t.time>, arg2: t.param<t.date>): CallExpression<t.timestamp, "timedate_pl">
  (arg1: t.param<t.time | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.timestamp | t.null, "timedate_pl">
} = defineFunction("timedate_pl")

export const timeofday: {
  (): CallExpression<t.text, "timeofday">
} = defineFunction("timeofday")

export const timestamp: {
  (arg1: t.param<t.timestamp | t.date>, arg2: t.param<t.int4 | t.time>): CallExpression<t.timestamp, "timestamp">
  (arg1: t.param<t.timestamp | t.date | t.null>, arg2: t.param<t.int4 | t.time | t.null>): CallExpression<t.timestamp | t.null, "timestamp">
  (arg: t.param<t.date | t.timestamptz>): CallExpression<t.timestamp, "timestamp">
  (arg: t.param<t.date | t.timestamptz | t.null>): CallExpression<t.timestamp | t.null, "timestamp">
} = defineFunction("timestamp")

export const timestamp_cmp: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.int4, "timestamp_cmp">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.int4 | t.null, "timestamp_cmp">
} = defineFunction("timestamp_cmp")

export const timestamp_cmp_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.int4, "timestamp_cmp_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.int4 | t.null, "timestamp_cmp_date">
} = defineFunction("timestamp_cmp_date")

export const timestamp_cmp_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.int4, "timestamp_cmp_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.int4 | t.null, "timestamp_cmp_timestamptz">
} = defineFunction("timestamp_cmp_timestamptz")

export const timestamp_eq: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_eq">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_eq">
} = defineFunction("timestamp_eq", "bool")

export const timestamp_eq_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_eq_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_eq_date">
} = defineFunction("timestamp_eq_date", "bool")

export const timestamp_eq_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_eq_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_eq_timestamptz">
} = defineFunction("timestamp_eq_timestamptz", "bool")

export const timestamp_ge: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_ge">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_ge">
} = defineFunction("timestamp_ge", "bool")

export const timestamp_ge_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_ge_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_ge_date">
} = defineFunction("timestamp_ge_date", "bool")

export const timestamp_ge_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_ge_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_ge_timestamptz">
} = defineFunction("timestamp_ge_timestamptz", "bool")

export const timestamp_gt: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_gt">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_gt">
} = defineFunction("timestamp_gt", "bool")

export const timestamp_gt_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_gt_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_gt_date">
} = defineFunction("timestamp_gt_date", "bool")

export const timestamp_gt_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_gt_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_gt_timestamptz">
} = defineFunction("timestamp_gt_timestamptz", "bool")

export const timestamp_hash: {
  (arg: t.param<t.timestamp>): CallExpression<t.int4, "timestamp_hash">
  (arg: t.param<t.timestamp | t.null>): CallExpression<t.int4 | t.null, "timestamp_hash">
} = defineFunction("timestamp_hash")

export const timestamp_hash_extended: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.int8>): CallExpression<t.int8, "timestamp_hash_extended">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "timestamp_hash_extended">
} = defineFunction("timestamp_hash_extended")

export const timestamp_larger: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.timestamp, "timestamp_larger">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.timestamp | t.null, "timestamp_larger">
} = defineFunction("timestamp_larger")

export const timestamp_le: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_le">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_le">
} = defineFunction("timestamp_le", "bool")

export const timestamp_le_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_le_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_le_date">
} = defineFunction("timestamp_le_date", "bool")

export const timestamp_le_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_le_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_le_timestamptz">
} = defineFunction("timestamp_le_timestamptz", "bool")

export const timestamp_lt: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_lt">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_lt">
} = defineFunction("timestamp_lt", "bool")

export const timestamp_lt_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_lt_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_lt_date">
} = defineFunction("timestamp_lt_date", "bool")

export const timestamp_lt_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_lt_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_lt_timestamptz">
} = defineFunction("timestamp_lt_timestamptz", "bool")

export const timestamp_mi: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.interval, "timestamp_mi">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.interval | t.null, "timestamp_mi">
} = defineFunction("timestamp_mi")

export const timestamp_mi_interval: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.interval>): CallExpression<t.timestamp, "timestamp_mi_interval">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamp | t.null, "timestamp_mi_interval">
} = defineFunction("timestamp_mi_interval")

export const timestamp_ne: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamp_ne">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamp_ne">
} = defineFunction("timestamp_ne", "bool")

export const timestamp_ne_date: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamp_ne_date">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamp_ne_date">
} = defineFunction("timestamp_ne_date", "bool")

export const timestamp_ne_timestamptz: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamp_ne_timestamptz">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamp_ne_timestamptz">
} = defineFunction("timestamp_ne_timestamptz", "bool")

export const timestamp_pl_interval: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.interval>): CallExpression<t.timestamp, "timestamp_pl_interval">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamp | t.null, "timestamp_pl_interval">
} = defineFunction("timestamp_pl_interval")

export const timestamp_send: {
  (arg: t.param<t.timestamp>): CallExpression<t.bytea, "timestamp_send">
  (arg: t.param<t.timestamp | t.null>): CallExpression<t.bytea | t.null, "timestamp_send">
} = defineFunction("timestamp_send")

export const timestamp_smaller: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.timestamp, "timestamp_smaller">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.timestamp | t.null, "timestamp_smaller">
} = defineFunction("timestamp_smaller")

export const timestamptz: {
  (arg: t.param<t.date | t.timestamp>): CallExpression<t.timestamptz, "timestamptz">
  (arg: t.param<t.date | t.timestamp | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz">
  (arg1: t.param<t.date | t.timestamptz>, arg2: t.param<t.timetz | t.int4 | t.time>): CallExpression<t.timestamptz, "timestamptz">
  (arg1: t.param<t.date | t.timestamptz | t.null>, arg2: t.param<t.timetz | t.int4 | t.time | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz">
} = defineFunction("timestamptz")

export const timestamptz_cmp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.int4, "timestamptz_cmp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.int4 | t.null, "timestamptz_cmp">
} = defineFunction("timestamptz_cmp")

export const timestamptz_cmp_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.int4, "timestamptz_cmp_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.int4 | t.null, "timestamptz_cmp_date">
} = defineFunction("timestamptz_cmp_date")

export const timestamptz_cmp_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.int4, "timestamptz_cmp_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.int4 | t.null, "timestamptz_cmp_timestamp">
} = defineFunction("timestamptz_cmp_timestamp")

export const timestamptz_eq: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_eq">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_eq">
} = defineFunction("timestamptz_eq", "bool")

export const timestamptz_eq_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_eq_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_eq_date">
} = defineFunction("timestamptz_eq_date", "bool")

export const timestamptz_eq_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_eq_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_eq_timestamp">
} = defineFunction("timestamptz_eq_timestamp", "bool")

export const timestamptz_ge: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_ge">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_ge">
} = defineFunction("timestamptz_ge", "bool")

export const timestamptz_ge_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_ge_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_ge_date">
} = defineFunction("timestamptz_ge_date", "bool")

export const timestamptz_ge_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_ge_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_ge_timestamp">
} = defineFunction("timestamptz_ge_timestamp", "bool")

export const timestamptz_gt: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_gt">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_gt">
} = defineFunction("timestamptz_gt", "bool")

export const timestamptz_gt_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_gt_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_gt_date">
} = defineFunction("timestamptz_gt_date", "bool")

export const timestamptz_gt_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_gt_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_gt_timestamp">
} = defineFunction("timestamptz_gt_timestamp", "bool")

export const timestamptz_larger: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.timestamptz, "timestamptz_larger">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz_larger">
} = defineFunction("timestamptz_larger")

export const timestamptz_le: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_le">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_le">
} = defineFunction("timestamptz_le", "bool")

export const timestamptz_le_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_le_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_le_date">
} = defineFunction("timestamptz_le_date", "bool")

export const timestamptz_le_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_le_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_le_timestamp">
} = defineFunction("timestamptz_le_timestamp", "bool")

export const timestamptz_lt: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_lt">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_lt">
} = defineFunction("timestamptz_lt", "bool")

export const timestamptz_lt_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_lt_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_lt_date">
} = defineFunction("timestamptz_lt_date", "bool")

export const timestamptz_lt_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_lt_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_lt_timestamp">
} = defineFunction("timestamptz_lt_timestamp", "bool")

export const timestamptz_mi: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.interval, "timestamptz_mi">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.interval | t.null, "timestamptz_mi">
} = defineFunction("timestamptz_mi")

export const timestamptz_mi_interval: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.interval>): CallExpression<t.timestamptz, "timestamptz_mi_interval">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz_mi_interval">
} = defineFunction("timestamptz_mi_interval")

export const timestamptz_ne: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.bool, "timestamptz_ne">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.bool | t.null, "timestamptz_ne">
} = defineFunction("timestamptz_ne", "bool")

export const timestamptz_ne_date: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.date>): CallExpression<t.bool, "timestamptz_ne_date">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.bool | t.null, "timestamptz_ne_date">
} = defineFunction("timestamptz_ne_date", "bool")

export const timestamptz_ne_timestamp: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamp>): CallExpression<t.bool, "timestamptz_ne_timestamp">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.bool | t.null, "timestamptz_ne_timestamp">
} = defineFunction("timestamptz_ne_timestamp", "bool")

export const timestamptz_pl_interval: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.interval>): CallExpression<t.timestamptz, "timestamptz_pl_interval">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz_pl_interval">
} = defineFunction("timestamptz_pl_interval")

export const timestamptz_send: {
  (arg: t.param<t.timestamptz>): CallExpression<t.bytea, "timestamptz_send">
  (arg: t.param<t.timestamptz | t.null>): CallExpression<t.bytea | t.null, "timestamptz_send">
} = defineFunction("timestamptz_send")

export const timestamptz_smaller: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.timestamptz, "timestamptz_smaller">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.timestamptz | t.null, "timestamptz_smaller">
} = defineFunction("timestamptz_smaller")

export const timetz: {
  (arg: t.param<t.timestamptz | t.time>): CallExpression<t.timetz, "timetz">
  (arg: t.param<t.timestamptz | t.time | t.null>): CallExpression<t.timetz | t.null, "timetz">
  (arg1: t.param<t.timetz>, arg2: t.param<t.int4>): CallExpression<t.timetz, "timetz">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.timetz | t.null, "timetz">
} = defineFunction("timetz")

export const timetz_cmp: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.int4, "timetz_cmp">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.int4 | t.null, "timetz_cmp">
} = defineFunction("timetz_cmp")

export const timetz_eq: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_eq">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_eq">
} = defineFunction("timetz_eq", "bool")

export const timetz_ge: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_ge">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_ge">
} = defineFunction("timetz_ge", "bool")

export const timetz_gt: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_gt">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_gt">
} = defineFunction("timetz_gt", "bool")

export const timetz_hash: {
  (arg: t.param<t.timetz>): CallExpression<t.int4, "timetz_hash">
  (arg: t.param<t.timetz | t.null>): CallExpression<t.int4 | t.null, "timetz_hash">
} = defineFunction("timetz_hash")

export const timetz_hash_extended: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.int8>): CallExpression<t.int8, "timetz_hash_extended">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "timetz_hash_extended">
} = defineFunction("timetz_hash_extended")

export const timetz_larger: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.timetz, "timetz_larger">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.timetz | t.null, "timetz_larger">
} = defineFunction("timetz_larger")

export const timetz_le: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_le">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_le">
} = defineFunction("timetz_le", "bool")

export const timetz_lt: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_lt">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_lt">
} = defineFunction("timetz_lt", "bool")

export const timetz_mi_interval: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.interval>): CallExpression<t.timetz, "timetz_mi_interval">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timetz | t.null, "timetz_mi_interval">
} = defineFunction("timetz_mi_interval")

export const timetz_ne: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.bool, "timetz_ne">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.bool | t.null, "timetz_ne">
} = defineFunction("timetz_ne", "bool")

export const timetz_pl_interval: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.interval>): CallExpression<t.timetz, "timetz_pl_interval">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.interval | t.null>): CallExpression<t.timetz | t.null, "timetz_pl_interval">
} = defineFunction("timetz_pl_interval")

export const timetz_send: {
  (arg: t.param<t.timetz>): CallExpression<t.bytea, "timetz_send">
  (arg: t.param<t.timetz | t.null>): CallExpression<t.bytea | t.null, "timetz_send">
} = defineFunction("timetz_send")

export const timetz_smaller: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.timetz>): CallExpression<t.timetz, "timetz_smaller">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.timetz | t.null, "timetz_smaller">
} = defineFunction("timetz_smaller")

export const timetzdate_pl: {
  (arg1: t.param<t.timetz>, arg2: t.param<t.date>): CallExpression<t.timestamptz, "timetzdate_pl">
  (arg1: t.param<t.timetz | t.null>, arg2: t.param<t.date | t.null>): CallExpression<t.timestamptz | t.null, "timetzdate_pl">
} = defineFunction("timetzdate_pl")

export const timezone: {
  (arg1: t.param<t.interval | t.text>, arg2: t.param<t.timestamptz>): CallExpression<t.timestamp, "timezone">
  (arg1: t.param<t.interval | t.text | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.timestamp | t.null, "timezone">
  (arg1: t.param<t.text | t.interval>, arg2: t.param<t.timetz>): CallExpression<t.timetz, "timezone">
  (arg1: t.param<t.text | t.interval | t.null>, arg2: t.param<t.timetz | t.null>): CallExpression<t.timetz | t.null, "timezone">
  (arg1: t.param<t.text | t.interval>, arg2: t.param<t.timestamp>): CallExpression<t.timestamptz, "timezone">
  (arg1: t.param<t.text | t.interval | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.timestamptz | t.null, "timezone">
} = defineFunction("timezone")

/** 
 * A system function for converting a string from another encoding
 * 
 * @see https://pgpedia.info/t/to_ascii.html
 */
export const to_ascii: {
  /** 
   * A system function for converting a string from another encoding
   * 
   * @see https://pgpedia.info/t/to_ascii.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "to_ascii">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "to_ascii">
  (arg1: t.param<t.text>, arg2: t.param<t.int4 | t.name>): CallExpression<t.text, "to_ascii">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.int4 | t.name | t.null>): CallExpression<t.text | t.null, "to_ascii">
} = defineFunction("to_ascii")

/** 
 * A function for formatting dates, timestamps and numeric types
 * 
 * @see https://pgpedia.info/t/to_char.html
 */
export const to_char: {
  /** 
   * A function for formatting dates, timestamps and numeric types
   * 
   * @see https://pgpedia.info/t/to_char.html
   */
  (arg1: t.param<t.timestamptz | t.numeric | t.int4 | t.int8 | t.float4 | t.float8 | t.interval | t.timestamp>, arg2: t.param<t.text>): CallExpression<t.text, "to_char">
  (arg1: t.param<t.timestamptz | t.numeric | t.int4 | t.int8 | t.float4 | t.float8 | t.interval | t.timestamp | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.text | t.null, "to_char">
} = defineFunction("to_char")

/** 
 * A function for converting a date string into the DATE datatype
 * 
 * @see https://pgpedia.info/t/to_date.html
 */
export const to_date: {
  /** 
   * A function for converting a date string into the DATE datatype
   * 
   * @see https://pgpedia.info/t/to_date.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.date, "to_date">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.date | t.null, "to_date">
} = defineFunction("to_date")

/** 
 * A function for converting an integer into hexadecimal
 * 
 * @see https://pgpedia.info/t/to_hex.html
 */
export const to_hex: {
  /** 
   * A function for converting an integer into hexadecimal
   * 
   * @see https://pgpedia.info/t/to_hex.html
   */
  (arg: t.param<t.int4 | t.int8>): CallExpression<t.text, "to_hex">
  (arg: t.param<t.int4 | t.int8 | t.null>): CallExpression<t.text | t.null, "to_hex">
} = defineFunction("to_hex")

export const to_json: {
  (arg: t.param<t.anyelement>): CallExpression<t.json, "to_json">
  (arg: t.param<t.anyelement | t.null>): CallExpression<t.json | t.null, "to_json">
} = defineFunction("to_json")

export const to_jsonb: {
  (arg: t.param<t.anyelement>): CallExpression<t.jsonb, "to_jsonb">
  (arg: t.param<t.anyelement | t.null>): CallExpression<t.jsonb | t.null, "to_jsonb">
} = defineFunction("to_jsonb")

/** 
 * A function for converting a numeric string into the NUMERIC datatype
 * 
 * @see https://pgpedia.info/t/to_number.html
 */
export const to_number: {
  /** 
   * A function for converting a numeric string into the NUMERIC datatype
   * 
   * @see https://pgpedia.info/t/to_number.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.numeric, "to_number">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.numeric | t.null, "to_number">
} = defineFunction("to_number")

export const to_regclass: {
  (arg: t.param<t.text>): CallExpression<t.regclass, "to_regclass">
  (arg: t.param<t.text | t.null>): CallExpression<t.regclass | t.null, "to_regclass">
} = defineFunction("to_regclass")

export const to_regcollation: {
  (arg: t.param<t.text>): CallExpression<t.regcollation, "to_regcollation">
  (arg: t.param<t.text | t.null>): CallExpression<t.regcollation | t.null, "to_regcollation">
} = defineFunction("to_regcollation")

export const to_regnamespace: {
  (arg: t.param<t.text>): CallExpression<t.regnamespace, "to_regnamespace">
  (arg: t.param<t.text | t.null>): CallExpression<t.regnamespace | t.null, "to_regnamespace">
} = defineFunction("to_regnamespace")

export const to_regoper: {
  (arg: t.param<t.text>): CallExpression<t.regoper, "to_regoper">
  (arg: t.param<t.text | t.null>): CallExpression<t.regoper | t.null, "to_regoper">
} = defineFunction("to_regoper")

export const to_regoperator: {
  (arg: t.param<t.text>): CallExpression<t.regoperator, "to_regoperator">
  (arg: t.param<t.text | t.null>): CallExpression<t.regoperator | t.null, "to_regoperator">
} = defineFunction("to_regoperator")

export const to_regproc: {
  (arg: t.param<t.text>): CallExpression<t.regproc, "to_regproc">
  (arg: t.param<t.text | t.null>): CallExpression<t.regproc | t.null, "to_regproc">
} = defineFunction("to_regproc")

export const to_regprocedure: {
  (arg: t.param<t.text>): CallExpression<t.regprocedure, "to_regprocedure">
  (arg: t.param<t.text | t.null>): CallExpression<t.regprocedure | t.null, "to_regprocedure">
} = defineFunction("to_regprocedure")

export const to_regrole: {
  (arg: t.param<t.text>): CallExpression<t.regrole, "to_regrole">
  (arg: t.param<t.text | t.null>): CallExpression<t.regrole | t.null, "to_regrole">
} = defineFunction("to_regrole")

export const to_regtype: {
  (arg: t.param<t.text>): CallExpression<t.regtype, "to_regtype">
  (arg: t.param<t.text | t.null>): CallExpression<t.regtype | t.null, "to_regtype">
} = defineFunction("to_regtype")

/** 
 * A function for converting a timestamp string into the TIMESTAMPTZ datatype
 * 
 * @see https://pgpedia.info/t/to_timestamp.html
 */
export const to_timestamp: {
  /** 
   * A function for converting a timestamp string into the TIMESTAMPTZ datatype
   * 
   * @see https://pgpedia.info/t/to_timestamp.html
   */
  (arg: t.param<t.float8>): CallExpression<t.timestamptz, "to_timestamp">
  (arg: t.param<t.float8 | t.null>): CallExpression<t.timestamptz | t.null, "to_timestamp">
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.timestamptz, "to_timestamp">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.timestamptz | t.null, "to_timestamp">
} = defineFunction("to_timestamp")

export const to_tsvector: {
  (arg1: t.param<t.regconfig>, arg2: t.param<t.text | t.jsonb | t.json>): CallExpression<t.tsvector, "to_tsvector">
  (arg1: t.param<t.regconfig | t.null>, arg2: t.param<t.text | t.jsonb | t.json | t.null>): CallExpression<t.tsvector | t.null, "to_tsvector">
  (arg: t.param<t.text | t.jsonb | t.json>): CallExpression<t.tsvector, "to_tsvector">
  (arg: t.param<t.text | t.jsonb | t.json | t.null>): CallExpression<t.tsvector | t.null, "to_tsvector">
} = defineFunction("to_tsvector")

/** 
 * A function returning the point-in-time the current transaction started
 * 
 * @see https://pgpedia.info/t/transaction_timestamp.html
 */
export const transaction_timestamp: {
  /** 
   * A function returning the point-in-time the current transaction started
   * 
   * @see https://pgpedia.info/t/transaction_timestamp.html
   */
  (): CallExpression<t.timestamptz, "transaction_timestamp">
} = defineFunction("transaction_timestamp")

/** 
 * A system function for replacing sets of characters with another set
 * 
 * @see https://pgpedia.info/t/translate.html
 */
export const translate: {
  /** 
   * A system function for replacing sets of characters with another set
   * 
   * @see https://pgpedia.info/t/translate.html
   */
  (arg1: t.param<t.text>, arg2: t.param<t.text>, arg3: t.param<t.text>): CallExpression<t.text, "translate">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>, arg3: t.param<t.text | t.null>): CallExpression<t.text | t.null, "translate">
} = defineFunction("translate")

/** 
 * A function for removing elements from the end of an array
 * 
 * @see https://pgpedia.info/t/trim_array.html
 */
export const trim_array: {
  /** 
   * A function for removing elements from the end of an array
   * 
   * @see https://pgpedia.info/t/trim_array.html
   */
  (arg1: t.param<t.anyarray>, arg2: t.param<t.int4>): CallExpression<t.anyarray, "trim_array">
  (arg1: t.param<t.anyarray | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.anyarray | t.null, "trim_array">
} = defineFunction("trim_array")

/** 
 * A function reducing the value's scale by removing trailing zeroes
 * 
 * @see https://pgpedia.info/t/trim_scale.html
 */
export const trim_scale: {
  /** 
   * A function reducing the value's scale by removing trailing zeroes
   * 
   * @see https://pgpedia.info/t/trim_scale.html
   */
  (arg: t.param<t.numeric>): CallExpression<t.numeric, "trim_scale">
  (arg: t.param<t.numeric | t.null>): CallExpression<t.numeric | t.null, "trim_scale">
} = defineFunction("trim_scale")

export const trunc: {
  <T extends t.float8 | t.macaddr | t.numeric | t.null>(arg: T): CallExpression<T, "trunc">
  (arg1: t.param<t.numeric>, arg2: t.param<t.int4>): CallExpression<t.numeric, "trunc">
  (arg1: t.param<t.numeric | t.null>, arg2: t.param<t.int4 | t.null>): CallExpression<t.numeric | t.null, "trunc">
} = defineFunction("trunc")

/** 
 * A function for removing lexeme(s) from a tsvector
 * 
 * @see https://pgpedia.info/t/ts_delete.html
 */
export const ts_delete: {
  /** 
   * A function for removing lexeme(s) from a tsvector
   * 
   * @see https://pgpedia.info/t/ts_delete.html
   */
  (arg1: t.param<t.tsvector>, arg2: t.param<t.text | t.array<t.text>>): CallExpression<t.tsvector, "ts_delete">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.text | t.array<t.text> | t.null>): CallExpression<t.tsvector | t.null, "ts_delete">
} = defineFunction("ts_delete")

export const ts_filter: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.array<t.char>>): CallExpression<t.tsvector, "ts_filter">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.array<t.char> | t.null>): CallExpression<t.tsvector | t.null, "ts_filter">
} = defineFunction("ts_filter")

export const ts_lexize: {
  (arg1: t.param<t.regdictionary>, arg2: t.param<t.text>): CallExpression<t.array<t.text>, "ts_lexize">
  (arg1: t.param<t.regdictionary | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.array<t.text> | t.null, "ts_lexize">
} = defineFunction("ts_lexize")

export const ts_match_tt: {
  (arg1: t.param<t.text>, arg2: t.param<t.text>): CallExpression<t.bool, "ts_match_tt">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "ts_match_tt">
} = defineFunction("ts_match_tt", "bool")

export const tsrange: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.tsrange, "tsrange">
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>, arg3: t.param<t.text>): CallExpression<t.tsrange, "tsrange">
} = defineFunction("tsrange")

export const tsrange_subdiff: {
  (arg1: t.param<t.timestamp>, arg2: t.param<t.timestamp>): CallExpression<t.float8, "tsrange_subdiff">
  (arg1: t.param<t.timestamp | t.null>, arg2: t.param<t.timestamp | t.null>): CallExpression<t.float8 | t.null, "tsrange_subdiff">
} = defineFunction("tsrange_subdiff")

export const tstzrange: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.tstzrange, "tstzrange">
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>, arg3: t.param<t.text>): CallExpression<t.tstzrange, "tstzrange">
} = defineFunction("tstzrange")

export const tstzrange_subdiff: {
  (arg1: t.param<t.timestamptz>, arg2: t.param<t.timestamptz>): CallExpression<t.float8, "tstzrange_subdiff">
  (arg1: t.param<t.timestamptz | t.null>, arg2: t.param<t.timestamptz | t.null>): CallExpression<t.float8 | t.null, "tstzrange_subdiff">
} = defineFunction("tstzrange_subdiff")

export const tsvector_cmp: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.int4, "tsvector_cmp">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.int4 | t.null, "tsvector_cmp">
} = defineFunction("tsvector_cmp")

export const tsvector_concat: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.tsvector, "tsvector_concat">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.tsvector | t.null, "tsvector_concat">
} = defineFunction("tsvector_concat")

export const tsvector_eq: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_eq">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_eq">
} = defineFunction("tsvector_eq", "bool")

export const tsvector_ge: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_ge">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_ge">
} = defineFunction("tsvector_ge", "bool")

export const tsvector_gt: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_gt">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_gt">
} = defineFunction("tsvector_gt", "bool")

export const tsvector_le: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_le">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_le">
} = defineFunction("tsvector_le", "bool")

export const tsvector_lt: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_lt">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_lt">
} = defineFunction("tsvector_lt", "bool")

export const tsvector_ne: {
  (arg1: t.param<t.tsvector>, arg2: t.param<t.tsvector>): CallExpression<t.bool, "tsvector_ne">
  (arg1: t.param<t.tsvector | t.null>, arg2: t.param<t.tsvector | t.null>): CallExpression<t.bool | t.null, "tsvector_ne">
} = defineFunction("tsvector_ne", "bool")

/** 
 * A function converting a tsvector to lexemes
 * 
 * @see https://pgpedia.info/t/tsvector_to_array.html
 */
export const tsvector_to_array: {
  /** 
   * A function converting a tsvector to lexemes
   * 
   * @see https://pgpedia.info/t/tsvector_to_array.html
   */
  (arg: t.param<t.tsvector>): CallExpression<t.array<t.text>, "tsvector_to_array">
  (arg: t.param<t.tsvector | t.null>): CallExpression<t.array<t.text> | t.null, "tsvector_to_array">
} = defineFunction("tsvector_to_array")

export const tsvectorsend: {
  (arg: t.param<t.tsvector>): CallExpression<t.bytea, "tsvectorsend">
  (arg: t.param<t.tsvector | t.null>): CallExpression<t.bytea | t.null, "tsvectorsend">
} = defineFunction("tsvectorsend")

/** 
 * A function returning the current transaction ID
 * 
 * @see https://pgpedia.info/t/txid_current.html
 */
export const txid_current: {
  /** 
   * A function returning the current transaction ID
   * 
   * @see https://pgpedia.info/t/txid_current.html
   */
  (): CallExpression<t.int8, "txid_current">
} = defineFunction("txid_current")

/** 
 * A function returning the current transaction ID, if assigned
 * 
 * @see https://pgpedia.info/t/txid_current_if_assigned.html
 */
export const txid_current_if_assigned: {
  /** 
   * A function returning the current transaction ID, if assigned
   * 
   * @see https://pgpedia.info/t/txid_current_if_assigned.html
   */
  (): CallExpression<t.int8, "txid_current_if_assigned">
} = defineFunction("txid_current_if_assigned")

/** 
 * A function reporting the commit status of a transaction
 * 
 * @see https://pgpedia.info/t/txid_status.html
 */
export const txid_status: {
  /** 
   * A function reporting the commit status of a transaction
   * 
   * @see https://pgpedia.info/t/txid_status.html
   */
  (arg: t.param<t.int8>): CallExpression<t.text, "txid_status">
  (arg: t.param<t.int8 | t.null>): CallExpression<t.text | t.null, "txid_status">
} = defineFunction("txid_status")

/** 
 * A function for decoding a string with Unicode escape sequences
 * 
 * @see https://pgpedia.info/u/unistr.html
 */
export const unistr: {
  /** 
   * A function for decoding a string with Unicode escape sequences
   * 
   * @see https://pgpedia.info/u/unistr.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "unistr">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "unistr">
} = defineFunction("unistr")

/** 
 * A system function for expanding an array to a set of rows
 * 
 * @see https://pgpedia.info/u/unnest.html
 */
export const unnest: {
  /** 
   * A system function for expanding an array to a set of rows
   * 
   * @see https://pgpedia.info/u/unnest.html
   */
  (arg: t.param<t.anyarray | t.null>): SetRef<t.anyelement, "unnest">
} = defineSetFunction("unnest")

/** 
 * A  system function for converting a string to upper case
 * 
 * @see https://pgpedia.info/u/upper.html
 */
export const upper: {
  /** 
   * A  system function for converting a string to upper case
   * 
   * @see https://pgpedia.info/u/upper.html
   */
  (arg: t.param<t.text>): CallExpression<t.text, "upper">
  (arg: t.param<t.text | t.null>): CallExpression<t.text | t.null, "upper">
} = defineFunction("upper")

export const uuid_cmp: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.int4, "uuid_cmp">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.int4 | t.null, "uuid_cmp">
} = defineFunction("uuid_cmp")

export const uuid_eq: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_eq">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_eq">
} = defineFunction("uuid_eq", "bool")

export const uuid_ge: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_ge">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_ge">
} = defineFunction("uuid_ge", "bool")

export const uuid_gt: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_gt">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_gt">
} = defineFunction("uuid_gt", "bool")

export const uuid_hash: {
  (arg: t.param<t.uuid>): CallExpression<t.int4, "uuid_hash">
  (arg: t.param<t.uuid | t.null>): CallExpression<t.int4 | t.null, "uuid_hash">
} = defineFunction("uuid_hash")

export const uuid_hash_extended: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.int8>): CallExpression<t.int8, "uuid_hash_extended">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.int8 | t.null>): CallExpression<t.int8 | t.null, "uuid_hash_extended">
} = defineFunction("uuid_hash_extended")

export const uuid_le: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_le">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_le">
} = defineFunction("uuid_le", "bool")

export const uuid_lt: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_lt">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_lt">
} = defineFunction("uuid_lt", "bool")

export const uuid_ne: {
  (arg1: t.param<t.uuid>, arg2: t.param<t.uuid>): CallExpression<t.bool, "uuid_ne">
  (arg1: t.param<t.uuid | t.null>, arg2: t.param<t.uuid | t.null>): CallExpression<t.bool | t.null, "uuid_ne">
} = defineFunction("uuid_ne", "bool")

export const uuid_send: {
  (arg: t.param<t.uuid>): CallExpression<t.bytea, "uuid_send">
  (arg: t.param<t.uuid | t.null>): CallExpression<t.bytea | t.null, "uuid_send">
} = defineFunction("uuid_send")

export const var_pop: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "var_pop">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "var_pop">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "var_pop">
} = defineFunction("var_pop")

export const var_samp: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "var_samp">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "var_samp">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "var_samp">
} = defineFunction("var_samp")

export const varbit: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.int4>, arg3: t.param<t.bool>): CallExpression<t.varbit, "varbit">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.varbit | t.null, "varbit">
} = defineFunction("varbit")

export const varbit_send: {
  (arg: t.param<t.varbit>): CallExpression<t.bytea, "varbit_send">
  (arg: t.param<t.varbit | t.null>): CallExpression<t.bytea | t.null, "varbit_send">
} = defineFunction("varbit_send")

export const varbitcmp: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.int4, "varbitcmp">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.int4 | t.null, "varbitcmp">
} = defineFunction("varbitcmp")

export const varbiteq: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbiteq">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbiteq">
} = defineFunction("varbiteq", "bool")

export const varbitge: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbitge">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbitge">
} = defineFunction("varbitge", "bool")

export const varbitgt: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbitgt">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbitgt">
} = defineFunction("varbitgt", "bool")

export const varbitle: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbitle">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbitle">
} = defineFunction("varbitle", "bool")

export const varbitlt: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbitlt">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbitlt">
} = defineFunction("varbitlt", "bool")

export const varbitne: {
  (arg1: t.param<t.varbit>, arg2: t.param<t.varbit>): CallExpression<t.bool, "varbitne">
  (arg1: t.param<t.varbit | t.null>, arg2: t.param<t.varbit | t.null>): CallExpression<t.bool | t.null, "varbitne">
} = defineFunction("varbitne", "bool")

export const varchar: {
  (arg1: t.param<t.varchar>, arg2: t.param<t.int4>, arg3: t.param<t.bool>): CallExpression<t.varchar, "varchar">
  (arg1: t.param<t.varchar | t.null>, arg2: t.param<t.int4 | t.null>, arg3: t.param<t.bool | t.null>): CallExpression<t.varchar | t.null, "varchar">
  (arg: t.param<t.name>): CallExpression<t.varchar, "varchar">
  (arg: t.param<t.name | t.null>): CallExpression<t.varchar | t.null, "varchar">
} = defineFunction("varchar")

export const varcharsend: {
  (arg: t.param<t.varchar>): CallExpression<t.bytea, "varcharsend">
  (arg: t.param<t.varchar | t.null>): CallExpression<t.bytea | t.null, "varcharsend">
} = defineFunction("varcharsend")

export const variance: {
  (arg: t.aggParam<t.int8 | t.int4 | t.int2>): Aggregate<t.numeric, "variance">
  (arg: t.aggParam<t.float4>): Aggregate<t.float8, "variance">
  <T extends t.float8 | t.numeric>(arg: T): Aggregate<T, "variance">
} = defineFunction("variance")

/** 
 * A function returning details of the server version
 * 
 * @see https://pgpedia.info/v/version.html
 */
export const version: {
  /** 
   * A function returning details of the server version
   * 
   * @see https://pgpedia.info/v/version.html
   */
  (): CallExpression<t.text, "version">
} = defineFunction("version")

export const void_send: {
  (arg: t.param<t.void>): CallExpression<t.bytea, "void_send">
  (arg: t.param<t.void | t.null>): CallExpression<t.bytea | t.null, "void_send">
} = defineFunction("void_send")

export const width_bucket: {
  (arg1: t.param<t.float8 | t.numeric>, arg2: t.param<t.float8 | t.numeric>, arg3: t.param<t.float8 | t.numeric>, arg4: t.param<t.int4>): CallExpression<t.int4, "width_bucket">
  (arg1: t.param<t.float8 | t.numeric | t.null>, arg2: t.param<t.float8 | t.numeric | t.null>, arg3: t.param<t.float8 | t.numeric | t.null>, arg4: t.param<t.int4 | t.null>): CallExpression<t.int4 | t.null, "width_bucket">
  <T extends t.anycompatiblearray>(arg1: t.param<t.elementof<T>>, arg2: t.param<T>): CallExpression<t.int4, "width_bucket">
  <T extends t.anycompatiblearray>(arg1: t.param<t.elementof<T> | t.null>, arg2: t.param<T | t.null>): CallExpression<t.int4 | t.null, "width_bucket">
} = defineFunction("width_bucket")

/** 
 * A former contrib module providing basic XML support
 * 
 * @see https://pgpedia.info/x/xml-contrib-module.html
 */
export const xml: {
  /** 
   * A former contrib module providing basic XML support
   * 
   * @see https://pgpedia.info/x/xml-contrib-module.html
   */
  (arg: t.param<t.text>): CallExpression<t.xml, "xml">
  (arg: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "xml">
} = defineFunction("xml")

export const xml_is_well_formed: {
  (arg: t.param<t.text>): CallExpression<t.bool, "xml_is_well_formed">
  (arg: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "xml_is_well_formed">
} = defineFunction("xml_is_well_formed", "bool")

export const xml_is_well_formed_content: {
  (arg: t.param<t.text>): CallExpression<t.bool, "xml_is_well_formed_content">
  (arg: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "xml_is_well_formed_content">
} = defineFunction("xml_is_well_formed_content", "bool")

export const xml_is_well_formed_document: {
  (arg: t.param<t.text>): CallExpression<t.bool, "xml_is_well_formed_document">
  (arg: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "xml_is_well_formed_document">
} = defineFunction("xml_is_well_formed_document", "bool")

export const xml_send: {
  (arg: t.param<t.xml>): CallExpression<t.bytea, "xml_send">
  (arg: t.param<t.xml | t.null>): CallExpression<t.bytea | t.null, "xml_send">
} = defineFunction("xml_send")

export const xmlagg: {
  (arg: t.aggParam<t.xml>): Aggregate<t.xml, "xmlagg">
} = defineFunction("xmlagg")

/** 
 * A function for generating an XML comment.
 * 
 * @see https://pgpedia.info/x/xmlcomment.html
 */
export const xmlcomment: {
  /** 
   * A function for generating an XML comment.
   * 
   * @see https://pgpedia.info/x/xmlcomment.html
   */
  (arg: t.param<t.text>): CallExpression<t.xml, "xmlcomment">
  (arg: t.param<t.text | t.null>): CallExpression<t.xml | t.null, "xmlcomment">
} = defineFunction("xmlcomment")

export const xmlconcat2: {
  (arg1: t.param<t.xml>, arg2: t.param<t.xml>): CallExpression<t.xml, "xmlconcat2">
} = defineFunction("xmlconcat2")

export const xmlexists: {
  (arg1: t.param<t.text>, arg2: t.param<t.xml>): CallExpression<t.bool, "xmlexists">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.xml | t.null>): CallExpression<t.bool | t.null, "xmlexists">
} = defineFunction("xmlexists", "bool")

export const xmlvalidate: {
  (arg1: t.param<t.xml>, arg2: t.param<t.text>): CallExpression<t.bool, "xmlvalidate">
  (arg1: t.param<t.xml | t.null>, arg2: t.param<t.text | t.null>): CallExpression<t.bool | t.null, "xmlvalidate">
} = defineFunction("xmlvalidate", "bool")

export const xpath: {
  (arg1: t.param<t.text>, arg2: t.param<t.xml>, arg3: t.param<t.array<t.text>>): CallExpression<t.array<t.xml>, "xpath">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.xml | t.null>, arg3: t.param<t.array<t.text> | t.null>): CallExpression<t.array<t.xml> | t.null, "xpath">
  (arg1: t.param<t.text>, arg2: t.param<t.xml>): CallExpression<t.array<t.xml>, "xpath">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.xml | t.null>): CallExpression<t.array<t.xml> | t.null, "xpath">
} = defineFunction("xpath")

export const xpath_exists: {
  (arg1: t.param<t.text>, arg2: t.param<t.xml>, arg3: t.param<t.array<t.text>>): CallExpression<t.bool, "xpath_exists">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.xml | t.null>, arg3: t.param<t.array<t.text> | t.null>): CallExpression<t.bool | t.null, "xpath_exists">
  (arg1: t.param<t.text>, arg2: t.param<t.xml>): CallExpression<t.bool, "xpath_exists">
  (arg1: t.param<t.text | t.null>, arg2: t.param<t.xml | t.null>): CallExpression<t.bool | t.null, "xpath_exists">
} = defineFunction("xpath_exists", "bool")