import { defineFunction, Input, FunctionCall as Output } from 'tusken'
import * as t from './types'

export const abbrev = defineFunction<"abbrev", {
  (arg: Input<t.inet | t.cidr>): Output<t.text, "abbrev">
  (arg: Input<t.inet | t.cidr | t.null>): Output<t.text | t.null, "abbrev">
}>("abbrev")

export const abs = defineFunction<"abs", {
  (arg: Input<t.float4>): Output<t.float4, "abs">
  (arg: Input<t.float4 | t.null>): Output<t.float4 | t.null, "abs">
  (arg: Input<t.float8>): Output<t.float8, "abs">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "abs">
  (arg: Input<t.int8>): Output<t.int8, "abs">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "abs">
  (arg: Input<t.int4>): Output<t.int4, "abs">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "abs">
  (arg: Input<t.int2>): Output<t.int2, "abs">
  (arg: Input<t.int2 | t.null>): Output<t.int2 | t.null, "abs">
  (arg: Input<t.numeric>): Output<t.numeric, "abs">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "abs">
}>("abs")

export const acos = defineFunction<"acos", {
  (arg: Input<t.float8>): Output<t.float8, "acos">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "acos">
}>("acos")

export const acosd = defineFunction<"acosd", {
  (arg: Input<t.float8>): Output<t.float8, "acosd">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "acosd">
}>("acosd")

export const acosh = defineFunction<"acosh", {
  (arg: Input<t.float8>): Output<t.float8, "acosh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "acosh">
}>("acosh")

export const age = defineFunction<"age", {
  (arg1: Input<t.timestamptz | t.timestamp>, arg2: Input<t.timestamptz | t.timestamp>): Output<t.interval, "age">
  (arg1: Input<t.timestamptz | t.timestamp | t.null>, arg2: Input<t.timestamptz | t.timestamp | t.null>): Output<t.interval | t.null, "age">
  (arg: Input<t.timestamptz | t.timestamp>): Output<t.interval, "age">
  (arg: Input<t.timestamptz | t.timestamp | t.null>): Output<t.interval | t.null, "age">
}>("age")

export const amvalidate = defineFunction<"amvalidate", {
  (arg: Input<t.oid>): Output<t.bool, "amvalidate">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "amvalidate">
}>("amvalidate")

export const anyarray_send = defineFunction<"anyarray_send", {
  (arg: Input<t.anyarray>): Output<t.bytea, "anyarray_send">
  (arg: Input<t.anyarray | t.null>): Output<t.bytea | t.null, "anyarray_send">
}>("anyarray_send")

export const anycompatiblearray_send = defineFunction<"anycompatiblearray_send", {
  (arg: Input<t.anycompatiblearray>): Output<t.bytea, "anycompatiblearray_send">
  (arg: Input<t.anycompatiblearray | t.null>): Output<t.bytea | t.null, "anycompatiblearray_send">
}>("anycompatiblearray_send")

export const anytextcat = defineFunction<"anytextcat", {
  (arg1: Input<t.anynonarray>, arg2: Input<t.text>): Output<t.text, "anytextcat">
  (arg1: Input<t.anynonarray | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "anytextcat">
}>("anytextcat")

export const area = defineFunction<"area", {
  (arg: Input<t.box | t.path | t.circle>): Output<t.float8, "area">
  (arg: Input<t.box | t.path | t.circle | t.null>): Output<t.float8 | t.null, "area">
}>("area")

/** 
 * A function which collects its input values into an array
 * 
 * @see https://pgpedia.info/a/array_agg.html
 */
export const array_agg = defineFunction<"array_agg", {
  <T extends t.anynonarray>(arg: Input<T>): Output<T, "array_agg">
  <T extends t.anyarray>(arg: Input<T>): Output<T, "array_agg">
}>("array_agg")

/** 
 * A function for appending to an array
 * 
 * @see https://pgpedia.info/a/array_append.html
 */
export const array_append = defineFunction<"array_append", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>): Output<T, "array_append">
}>("array_append")

/** 
 * A function for concatenating arrays
 * 
 * @see https://pgpedia.info/a/array_cat.html
 */
export const array_cat = defineFunction<"array_cat", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<T>): Output<T, "array_cat">
}>("array_cat")

/** 
 * A function returning a text representation of an array's dimensions
 * 
 * @see https://pgpedia.info/a/array_dims.html
 */
export const array_dims = defineFunction<"array_dims", {
  (arg: Input<t.anyarray>): Output<t.text, "array_dims">
  (arg: Input<t.anyarray | t.null>): Output<t.text | t.null, "array_dims">
}>("array_dims")

export const array_eq = defineFunction<"array_eq", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_eq">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_eq">
}>("array_eq")

/** 
 * A function returning a pre-filled array
 * 
 * @see https://pgpedia.info/a/array_fill.html
 */
export const array_fill = defineFunction<"array_fill", {
  <T extends t.anyarray>(arg1: Input<t.elementof<T>>, arg2: Input<t.array<t.int4>>): Output<T, "array_fill">
  <T extends t.anyarray>(arg1: Input<t.elementof<T>>, arg2: Input<t.array<t.int4>>, arg3: Input<t.array<t.int4>>): Output<T, "array_fill">
}>("array_fill")

export const array_ge = defineFunction<"array_ge", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_ge">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_ge">
}>("array_ge")

export const array_gt = defineFunction<"array_gt", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_gt">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_gt">
}>("array_gt")

export const array_larger = defineFunction<"array_larger", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<T, "array_larger">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<T | t.null, "array_larger">
}>("array_larger")

export const array_le = defineFunction<"array_le", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_le">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_le">
}>("array_le")

/** 
 * A function returning the length of an array dimension
 * 
 * @see https://pgpedia.info/a/array_length.html
 */
export const array_length = defineFunction<"array_length", {
  (arg1: Input<t.anyarray>, arg2: Input<t.int4>): Output<t.int4, "array_length">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "array_length">
}>("array_length")

/** 
 * A function returning the lower bound of an requested array dimension
 * 
 * @see https://pgpedia.info/a/array_lower.html
 */
export const array_lower = defineFunction<"array_lower", {
  (arg1: Input<t.anyarray>, arg2: Input<t.int4>): Output<t.int4, "array_lower">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "array_lower">
}>("array_lower")

export const array_lt = defineFunction<"array_lt", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_lt">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_lt">
}>("array_lt")

/** 
 * A function returning the number of dimensions of an array
 * 
 * @see https://pgpedia.info/a/array_ndims.html
 */
export const array_ndims = defineFunction<"array_ndims", {
  (arg: Input<t.anyarray>): Output<t.int4, "array_ndims">
  (arg: Input<t.anyarray | t.null>): Output<t.int4 | t.null, "array_ndims">
}>("array_ndims")

export const array_ne = defineFunction<"array_ne", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "array_ne">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "array_ne">
}>("array_ne")

/** 
 * A function returning the first occurrence of a value in an array
 * 
 * @see https://pgpedia.info/a/array_position.html
 */
export const array_position = defineFunction<"array_position", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>): Output<t.int4, "array_position">
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>, arg3: Input<t.int4>): Output<t.int4, "array_position">
}>("array_position")

/** 
 * A function returning each occurrence of a value in an array
 * 
 * @see https://pgpedia.info/a/array_positions.html
 */
export const array_positions = defineFunction<"array_positions", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>): Output<t.array<t.int4>, "array_positions">
}>("array_positions")

/** 
 * A function for prepending to an array
 * 
 * @see https://pgpedia.info/a/array_prepend.html
 */
export const array_prepend = defineFunction<"array_prepend", {
  <T extends t.anycompatiblearray>(arg1: Input<t.elementof<T>>, arg2: Input<T>): Output<T, "array_prepend">
}>("array_prepend")

/** 
 * A function for removing elements from an array
 * 
 * @see https://pgpedia.info/a/array_remove.html
 */
export const array_remove = defineFunction<"array_remove", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>): Output<T, "array_remove">
}>("array_remove")

/** 
 * A function for replacing elements in an array
 * 
 * @see https://pgpedia.info/a/array_replace.html
 */
export const array_replace = defineFunction<"array_replace", {
  <T extends t.anycompatiblearray>(arg1: Input<T>, arg2: Input<t.elementof<T>>, arg3: Input<t.elementof<T>>): Output<T, "array_replace">
}>("array_replace")

export const array_send = defineFunction<"array_send", {
  (arg: Input<t.anyarray>): Output<t.bytea, "array_send">
  (arg: Input<t.anyarray | t.null>): Output<t.bytea | t.null, "array_send">
}>("array_send")

export const array_smaller = defineFunction<"array_smaller", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<T, "array_smaller">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<T | t.null, "array_smaller">
}>("array_smaller")

/** 
 * A function for converting an array to JSON
 * 
 * @see https://pgpedia.info/a/array_to_json.html
 */
export const array_to_json = defineFunction<"array_to_json", {
  (arg: Input<t.anyarray>): Output<t.json, "array_to_json">
  (arg: Input<t.anyarray | t.null>): Output<t.json | t.null, "array_to_json">
  (arg1: Input<t.anyarray>, arg2: Input<t.bool>): Output<t.json, "array_to_json">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.bool | t.null>): Output<t.json | t.null, "array_to_json">
}>("array_to_json")

/** 
 * A function converting an array to a string
 * 
 * @see https://pgpedia.info/a/array_to_string.html
 */
export const array_to_string = defineFunction<"array_to_string", {
  (arg1: Input<t.anyarray>, arg2: Input<t.text>): Output<t.text, "array_to_string">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "array_to_string">
  (arg1: Input<t.anyarray>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "array_to_string">
}>("array_to_string")

/** 
 * A function for converting an array to a tsvector
 * 
 * @see https://pgpedia.info/a/array_to_tsvector.html
 */
export const array_to_tsvector = defineFunction<"array_to_tsvector", {
  (arg: Input<t.array<t.text>>): Output<t.tsvector, "array_to_tsvector">
  (arg: Input<t.array<t.text> | t.null>): Output<t.tsvector | t.null, "array_to_tsvector">
}>("array_to_tsvector")

/** 
 * A function returning the upper bound of an requested array dimension
 * 
 * @see https://pgpedia.info/a/array_upper.html
 */
export const array_upper = defineFunction<"array_upper", {
  (arg1: Input<t.anyarray>, arg2: Input<t.int4>): Output<t.int4, "array_upper">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "array_upper">
}>("array_upper")

export const arraycontained = defineFunction<"arraycontained", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "arraycontained">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "arraycontained">
}>("arraycontained")

export const arraycontains = defineFunction<"arraycontains", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "arraycontains">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "arraycontains">
}>("arraycontains")

export const arrayoverlap = defineFunction<"arrayoverlap", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.bool, "arrayoverlap">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.bool | t.null, "arrayoverlap">
}>("arrayoverlap")

/** 
 * A function returning the numeric code of a character
 * 
 * @see https://pgpedia.info/a/ascii.html
 */
export const ascii = defineFunction<"ascii", {
  (arg: Input<t.text>): Output<t.int4, "ascii">
  (arg: Input<t.text | t.null>): Output<t.int4 | t.null, "ascii">
}>("ascii")

export const asin = defineFunction<"asin", {
  (arg: Input<t.float8>): Output<t.float8, "asin">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "asin">
}>("asin")

export const asind = defineFunction<"asind", {
  (arg: Input<t.float8>): Output<t.float8, "asind">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "asind">
}>("asind")

export const asinh = defineFunction<"asinh", {
  (arg: Input<t.float8>): Output<t.float8, "asinh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "asinh">
}>("asinh")

export const atan = defineFunction<"atan", {
  (arg: Input<t.float8>): Output<t.float8, "atan">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "atan">
}>("atan")

export const atan2 = defineFunction<"atan2", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "atan2">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "atan2">
}>("atan2")

export const atan2d = defineFunction<"atan2d", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "atan2d">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "atan2d">
}>("atan2d")

export const atand = defineFunction<"atand", {
  (arg: Input<t.float8>): Output<t.float8, "atand">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "atand">
}>("atand")

export const atanh = defineFunction<"atanh", {
  (arg: Input<t.float8>): Output<t.float8, "atanh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "atanh">
}>("atanh")

export const avg = defineFunction<"avg", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "avg">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "avg">
  (arg: Input<t.interval>): Output<t.interval, "avg">
}>("avg")

export const binary_upgrade_create_empty_extension = defineFunction<"binary_upgrade_create_empty_extension", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.bool>, arg4: Input<t.text>, arg5: Input<t.array<t.oid>>, arg6: Input<t.array<t.text>>, arg7: Input<t.array<t.text>>): Output<t.void, "binary_upgrade_create_empty_extension">
}>("binary_upgrade_create_empty_extension")

export const binary_upgrade_set_missing_value = defineFunction<"binary_upgrade_set_missing_value", {
  (arg1: Input<t.oid | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.void, "binary_upgrade_set_missing_value">
}>("binary_upgrade_set_missing_value")

export const binary_upgrade_set_next_array_pg_type_oid = defineFunction<"binary_upgrade_set_next_array_pg_type_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_array_pg_type_oid">
}>("binary_upgrade_set_next_array_pg_type_oid")

export const binary_upgrade_set_next_heap_pg_class_oid = defineFunction<"binary_upgrade_set_next_heap_pg_class_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_heap_pg_class_oid">
}>("binary_upgrade_set_next_heap_pg_class_oid")

export const binary_upgrade_set_next_index_pg_class_oid = defineFunction<"binary_upgrade_set_next_index_pg_class_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_index_pg_class_oid">
}>("binary_upgrade_set_next_index_pg_class_oid")

export const binary_upgrade_set_next_multirange_array_pg_type_oid = defineFunction<"binary_upgrade_set_next_multirange_array_pg_type_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_multirange_array_pg_type_oid">
}>("binary_upgrade_set_next_multirange_array_pg_type_oid")

export const binary_upgrade_set_next_multirange_pg_type_oid = defineFunction<"binary_upgrade_set_next_multirange_pg_type_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_multirange_pg_type_oid">
}>("binary_upgrade_set_next_multirange_pg_type_oid")

export const binary_upgrade_set_next_pg_authid_oid = defineFunction<"binary_upgrade_set_next_pg_authid_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_pg_authid_oid">
}>("binary_upgrade_set_next_pg_authid_oid")

export const binary_upgrade_set_next_pg_enum_oid = defineFunction<"binary_upgrade_set_next_pg_enum_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_pg_enum_oid">
}>("binary_upgrade_set_next_pg_enum_oid")

export const binary_upgrade_set_next_pg_type_oid = defineFunction<"binary_upgrade_set_next_pg_type_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_pg_type_oid">
}>("binary_upgrade_set_next_pg_type_oid")

export const binary_upgrade_set_next_toast_pg_class_oid = defineFunction<"binary_upgrade_set_next_toast_pg_class_oid", {
  (arg: Input<t.oid | t.null>): Output<t.void, "binary_upgrade_set_next_toast_pg_class_oid">
}>("binary_upgrade_set_next_toast_pg_class_oid")

export const binary_upgrade_set_record_init_privs = defineFunction<"binary_upgrade_set_record_init_privs", {
  (arg: Input<t.bool | t.null>): Output<t.void, "binary_upgrade_set_record_init_privs">
}>("binary_upgrade_set_record_init_privs")

export const bit = defineFunction<"bit", {
  (arg1: Input<t.int4 | t.int8>, arg2: Input<t.int4>): Output<t.bit, "bit">
  (arg1: Input<t.int4 | t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bit | t.null, "bit">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.bit, "bit">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.bit | t.null, "bit">
}>("bit")

/** 
 * A function which returns the bitwise AND of all bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_and.html
 */
export const bit_and = defineFunction<"bit_and", {
  (arg: Input<t.int2>): Output<t.int2, "bit_and">
  (arg: Input<t.int4>): Output<t.int4, "bit_and">
  (arg: Input<t.int8>): Output<t.int8, "bit_and">
  (arg: Input<t.bit>): Output<t.bit, "bit_and">
}>("bit_and")

export const bit_count = defineFunction<"bit_count", {
  (arg: Input<t.bytea | t.bit>): Output<t.int8, "bit_count">
  (arg: Input<t.bytea | t.bit | t.null>): Output<t.int8 | t.null, "bit_count">
}>("bit_count")

/** 
 * A function returning the number of bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_length.html
 */
export const bit_length = defineFunction<"bit_length", {
  (arg: Input<t.bit | t.bytea | t.text>): Output<t.int4, "bit_length">
  (arg: Input<t.bit | t.bytea | t.text | t.null>): Output<t.int4 | t.null, "bit_length">
}>("bit_length")

/** 
 * A function which returns the bitwise OR of all bits in the provided parameter
 * 
 * @see https://pgpedia.info/b/bit_or.html
 */
export const bit_or = defineFunction<"bit_or", {
  (arg: Input<t.int2>): Output<t.int2, "bit_or">
  (arg: Input<t.int4>): Output<t.int4, "bit_or">
  (arg: Input<t.int8>): Output<t.int8, "bit_or">
  (arg: Input<t.bit>): Output<t.bit, "bit_or">
}>("bit_or")

export const bit_send = defineFunction<"bit_send", {
  (arg: Input<t.bit>): Output<t.bytea, "bit_send">
  (arg: Input<t.bit | t.null>): Output<t.bytea | t.null, "bit_send">
}>("bit_send")

/** 
 * A function  for computing the bitwise exclusive OR of input values
 * 
 * @see https://pgpedia.info/b/bit_xor.html
 */
export const bit_xor = defineFunction<"bit_xor", {
  (arg: Input<t.int2>): Output<t.int2, "bit_xor">
  (arg: Input<t.int4>): Output<t.int4, "bit_xor">
  (arg: Input<t.int8>): Output<t.int8, "bit_xor">
  (arg: Input<t.bit>): Output<t.bit, "bit_xor">
}>("bit_xor")

export const bitand = defineFunction<"bitand", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitand">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bit | t.null, "bitand">
}>("bitand")

export const bitcat = defineFunction<"bitcat", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.varbit, "bitcat">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.varbit | t.null, "bitcat">
}>("bitcat")

export const bitcmp = defineFunction<"bitcmp", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.int4, "bitcmp">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.int4 | t.null, "bitcmp">
}>("bitcmp")

export const biteq = defineFunction<"biteq", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "biteq">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "biteq">
}>("biteq")

export const bitge = defineFunction<"bitge", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitge">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "bitge">
}>("bitge")

export const bitgt = defineFunction<"bitgt", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitgt">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "bitgt">
}>("bitgt")

export const bitle = defineFunction<"bitle", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitle">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "bitle">
}>("bitle")

export const bitlt = defineFunction<"bitlt", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitlt">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "bitlt">
}>("bitlt")

export const bitne = defineFunction<"bitne", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitne">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bool | t.null, "bitne">
}>("bitne")

export const bitnot = defineFunction<"bitnot", {
  (arg: Input<t.bit>): Output<t.bit, "bitnot">
  (arg: Input<t.bit | t.null>): Output<t.bit | t.null, "bitnot">
}>("bitnot")

export const bitor = defineFunction<"bitor", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitor">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bit | t.null, "bitor">
}>("bitor")

export const bitshiftleft = defineFunction<"bitshiftleft", {
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "bitshiftleft">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bit | t.null, "bitshiftleft">
}>("bitshiftleft")

export const bitshiftright = defineFunction<"bitshiftright", {
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "bitshiftright">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bit | t.null, "bitshiftright">
}>("bitshiftright")

export const bitxor = defineFunction<"bitxor", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitxor">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>): Output<t.bit | t.null, "bitxor">
}>("bitxor")

export const bool = defineFunction<"bool", {
  (arg: Input<t.jsonb | t.int4>): Output<t.bool, "bool">
  (arg: Input<t.jsonb | t.int4 | t.null>): Output<t.bool | t.null, "bool">
}>("bool")

/** 
 * A function returning true or false depending on whether all non-NULL input values are true
 * 
 * @see https://pgpedia.info/b/bool_and.html
 */
export const bool_and = defineFunction<"bool_and", {
  (arg: Input<t.bool>): Output<t.bool, "bool_and">
}>("bool_and")

/** 
 * A function returning true or false depending on whether any non-NULL input value is true
 * 
 * @see https://pgpedia.info/b/bool_or.html
 */
export const bool_or = defineFunction<"bool_or", {
  (arg: Input<t.bool>): Output<t.bool, "bool_or">
}>("bool_or")

export const booland_statefunc = defineFunction<"booland_statefunc", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "booland_statefunc">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "booland_statefunc">
}>("booland_statefunc")

export const booleq = defineFunction<"booleq", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "booleq">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "booleq">
}>("booleq")

export const boolge = defineFunction<"boolge", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolge">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boolge">
}>("boolge")

export const boolgt = defineFunction<"boolgt", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolgt">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boolgt">
}>("boolgt")

export const boolle = defineFunction<"boolle", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolle">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boolle">
}>("boolle")

export const boollt = defineFunction<"boollt", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boollt">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boollt">
}>("boollt")

export const boolne = defineFunction<"boolne", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolne">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boolne">
}>("boolne")

export const boolor_statefunc = defineFunction<"boolor_statefunc", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolor_statefunc">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.bool | t.null, "boolor_statefunc">
}>("boolor_statefunc")

export const boolsend = defineFunction<"boolsend", {
  (arg: Input<t.bool>): Output<t.bytea, "boolsend">
  (arg: Input<t.bool | t.null>): Output<t.bytea | t.null, "boolsend">
}>("boolsend")

export const bound_box = defineFunction<"bound_box", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.box, "bound_box">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.box | t.null, "bound_box">
}>("bound_box")

export const box = defineFunction<"box", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.box, "box">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.box | t.null, "box">
  (arg: Input<t.polygon | t.point | t.circle>): Output<t.box, "box">
  (arg: Input<t.polygon | t.point | t.circle | t.null>): Output<t.box | t.null, "box">
}>("box")

export const box_above = defineFunction<"box_above", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_above">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_above">
}>("box_above")

export const box_above_eq = defineFunction<"box_above_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_above_eq">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_above_eq">
}>("box_above_eq")

export const box_add = defineFunction<"box_add", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_add">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.box | t.null, "box_add">
}>("box_add")

export const box_below = defineFunction<"box_below", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_below">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_below">
}>("box_below")

export const box_below_eq = defineFunction<"box_below_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_below_eq">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_below_eq">
}>("box_below_eq")

export const box_center = defineFunction<"box_center", {
  (arg: Input<t.box>): Output<t.point, "box_center">
  (arg: Input<t.box | t.null>): Output<t.point | t.null, "box_center">
}>("box_center")

export const box_contain = defineFunction<"box_contain", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_contain">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_contain">
}>("box_contain")

export const box_contain_pt = defineFunction<"box_contain_pt", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.bool, "box_contain_pt">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "box_contain_pt">
}>("box_contain_pt")

export const box_contained = defineFunction<"box_contained", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_contained">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_contained">
}>("box_contained")

export const box_distance = defineFunction<"box_distance", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.float8, "box_distance">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.float8 | t.null, "box_distance">
}>("box_distance")

export const box_div = defineFunction<"box_div", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_div">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.box | t.null, "box_div">
}>("box_div")

export const box_eq = defineFunction<"box_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_eq">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_eq">
}>("box_eq")

export const box_ge = defineFunction<"box_ge", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_ge">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_ge">
}>("box_ge")

export const box_gt = defineFunction<"box_gt", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_gt">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_gt">
}>("box_gt")

export const box_intersect = defineFunction<"box_intersect", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.box, "box_intersect">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.box | t.null, "box_intersect">
}>("box_intersect")

export const box_le = defineFunction<"box_le", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_le">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_le">
}>("box_le")

export const box_left = defineFunction<"box_left", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_left">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_left">
}>("box_left")

export const box_lt = defineFunction<"box_lt", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_lt">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_lt">
}>("box_lt")

export const box_mul = defineFunction<"box_mul", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_mul">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.box | t.null, "box_mul">
}>("box_mul")

export const box_overabove = defineFunction<"box_overabove", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overabove">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_overabove">
}>("box_overabove")

export const box_overbelow = defineFunction<"box_overbelow", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overbelow">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_overbelow">
}>("box_overbelow")

export const box_overlap = defineFunction<"box_overlap", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overlap">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_overlap">
}>("box_overlap")

export const box_overleft = defineFunction<"box_overleft", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overleft">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_overleft">
}>("box_overleft")

export const box_overright = defineFunction<"box_overright", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overright">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_overright">
}>("box_overright")

export const box_right = defineFunction<"box_right", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_right">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_right">
}>("box_right")

export const box_same = defineFunction<"box_same", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_same">
  (arg1: Input<t.box | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "box_same">
}>("box_same")

export const box_send = defineFunction<"box_send", {
  (arg: Input<t.box>): Output<t.bytea, "box_send">
  (arg: Input<t.box | t.null>): Output<t.bytea | t.null, "box_send">
}>("box_send")

export const box_sub = defineFunction<"box_sub", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_sub">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.box | t.null, "box_sub">
}>("box_sub")

export const bpchar = defineFunction<"bpchar", {
  (arg: Input<t.name | t.char>): Output<t.bpchar, "bpchar">
  (arg: Input<t.name | t.char | t.null>): Output<t.bpchar | t.null, "bpchar">
  (arg1: Input<t.bpchar>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.bpchar, "bpchar">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.bpchar | t.null, "bpchar">
}>("bpchar")

export const bpchar_larger = defineFunction<"bpchar_larger", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bpchar, "bpchar_larger">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bpchar | t.null, "bpchar_larger">
}>("bpchar_larger")

export const bpchar_pattern_ge = defineFunction<"bpchar_pattern_ge", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_ge">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchar_pattern_ge">
}>("bpchar_pattern_ge")

export const bpchar_pattern_gt = defineFunction<"bpchar_pattern_gt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_gt">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchar_pattern_gt">
}>("bpchar_pattern_gt")

export const bpchar_pattern_le = defineFunction<"bpchar_pattern_le", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_le">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchar_pattern_le">
}>("bpchar_pattern_le")

export const bpchar_pattern_lt = defineFunction<"bpchar_pattern_lt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_lt">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchar_pattern_lt">
}>("bpchar_pattern_lt")

export const bpchar_smaller = defineFunction<"bpchar_smaller", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bpchar, "bpchar_smaller">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bpchar | t.null, "bpchar_smaller">
}>("bpchar_smaller")

export const bpcharcmp = defineFunction<"bpcharcmp", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.int4, "bpcharcmp">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.int4 | t.null, "bpcharcmp">
}>("bpcharcmp")

export const bpchareq = defineFunction<"bpchareq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchareq">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchareq">
}>("bpchareq")

export const bpcharge = defineFunction<"bpcharge", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharge">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpcharge">
}>("bpcharge")

export const bpchargt = defineFunction<"bpchargt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchargt">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpchargt">
}>("bpchargt")

export const bpchariclike = defineFunction<"bpchariclike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpchariclike">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpchariclike">
}>("bpchariclike")

export const bpcharicnlike = defineFunction<"bpcharicnlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicnlike">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharicnlike">
}>("bpcharicnlike")

export const bpcharicregexeq = defineFunction<"bpcharicregexeq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicregexeq">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharicregexeq">
}>("bpcharicregexeq")

export const bpcharicregexne = defineFunction<"bpcharicregexne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicregexne">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharicregexne">
}>("bpcharicregexne")

export const bpcharle = defineFunction<"bpcharle", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharle">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpcharle">
}>("bpcharle")

export const bpcharlike = defineFunction<"bpcharlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharlike">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharlike">
}>("bpcharlike")

export const bpcharlt = defineFunction<"bpcharlt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharlt">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpcharlt">
}>("bpcharlt")

export const bpcharne = defineFunction<"bpcharne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharne">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.bool | t.null, "bpcharne">
}>("bpcharne")

export const bpcharnlike = defineFunction<"bpcharnlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharnlike">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharnlike">
}>("bpcharnlike")

export const bpcharregexeq = defineFunction<"bpcharregexeq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharregexeq">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharregexeq">
}>("bpcharregexeq")

export const bpcharregexne = defineFunction<"bpcharregexne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharregexne">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "bpcharregexne">
}>("bpcharregexne")

export const bpcharsend = defineFunction<"bpcharsend", {
  (arg: Input<t.bpchar>): Output<t.bytea, "bpcharsend">
  (arg: Input<t.bpchar | t.null>): Output<t.bytea | t.null, "bpcharsend">
}>("bpcharsend")

export const broadcast = defineFunction<"broadcast", {
  (arg: Input<t.inet>): Output<t.inet, "broadcast">
  (arg: Input<t.inet | t.null>): Output<t.inet | t.null, "broadcast">
}>("broadcast")

export const btarraycmp = defineFunction<"btarraycmp", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<T>): Output<t.int4, "btarraycmp">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<T | t.null>): Output<t.int4 | t.null, "btarraycmp">
}>("btarraycmp")

export const btboolcmp = defineFunction<"btboolcmp", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.int4, "btboolcmp">
  (arg1: Input<t.bool | t.null>, arg2: Input<t.bool | t.null>): Output<t.int4 | t.null, "btboolcmp">
}>("btboolcmp")

export const btbpchar_pattern_cmp = defineFunction<"btbpchar_pattern_cmp", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.int4, "btbpchar_pattern_cmp">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.bpchar | t.null>): Output<t.int4 | t.null, "btbpchar_pattern_cmp">
}>("btbpchar_pattern_cmp")

export const btcharcmp = defineFunction<"btcharcmp", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.int4, "btcharcmp">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.int4 | t.null, "btcharcmp">
}>("btcharcmp")

export const btequalimage = defineFunction<"btequalimage", {
  (arg: Input<t.oid>): Output<t.bool, "btequalimage">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "btequalimage">
}>("btequalimage")

export const btfloat48cmp = defineFunction<"btfloat48cmp", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.int4, "btfloat48cmp">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.int4 | t.null, "btfloat48cmp">
}>("btfloat48cmp")

export const btfloat4cmp = defineFunction<"btfloat4cmp", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.int4, "btfloat4cmp">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.int4 | t.null, "btfloat4cmp">
}>("btfloat4cmp")

export const btfloat84cmp = defineFunction<"btfloat84cmp", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.int4, "btfloat84cmp">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.int4 | t.null, "btfloat84cmp">
}>("btfloat84cmp")

export const btfloat8cmp = defineFunction<"btfloat8cmp", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.int4, "btfloat8cmp">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.int4 | t.null, "btfloat8cmp">
}>("btfloat8cmp")

export const btint24cmp = defineFunction<"btint24cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "btint24cmp">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "btint24cmp">
}>("btint24cmp")

export const btint28cmp = defineFunction<"btint28cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int4, "btint28cmp">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int4 | t.null, "btint28cmp">
}>("btint28cmp")

export const btint2cmp = defineFunction<"btint2cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int4, "btint2cmp">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "btint2cmp">
}>("btint2cmp")

export const btint42cmp = defineFunction<"btint42cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "btint42cmp">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "btint42cmp">
}>("btint42cmp")

export const btint48cmp = defineFunction<"btint48cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int4, "btint48cmp">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int4 | t.null, "btint48cmp">
}>("btint48cmp")

export const btint4cmp = defineFunction<"btint4cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "btint4cmp">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "btint4cmp">
}>("btint4cmp")

export const btint82cmp = defineFunction<"btint82cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int4, "btint82cmp">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "btint82cmp">
}>("btint82cmp")

export const btint84cmp = defineFunction<"btint84cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int4, "btint84cmp">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "btint84cmp">
}>("btint84cmp")

export const btint8cmp = defineFunction<"btint8cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int4, "btint8cmp">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int4 | t.null, "btint8cmp">
}>("btint8cmp")

export const btnamecmp = defineFunction<"btnamecmp", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.int4, "btnamecmp">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.int4 | t.null, "btnamecmp">
}>("btnamecmp")

export const btnametextcmp = defineFunction<"btnametextcmp", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.int4, "btnametextcmp">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "btnametextcmp">
}>("btnametextcmp")

export const btoidcmp = defineFunction<"btoidcmp", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.int4, "btoidcmp">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.int4 | t.null, "btoidcmp">
}>("btoidcmp")

/** 
 * A system function which trims characters from both sides of a string
 * 
 * @see https://pgpedia.info/b/btrim.html
 */
export const btrim = defineFunction<"btrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "btrim">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "btrim">
  (arg: Input<t.text>): Output<t.text, "btrim">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "btrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "btrim">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bytea | t.null, "btrim">
}>("btrim")

export const bttext_pattern_cmp = defineFunction<"bttext_pattern_cmp", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "bttext_pattern_cmp">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "bttext_pattern_cmp">
}>("bttext_pattern_cmp")

export const bttextcmp = defineFunction<"bttextcmp", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "bttextcmp">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "bttextcmp">
}>("bttextcmp")

export const bttextnamecmp = defineFunction<"bttextnamecmp", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.int4, "bttextnamecmp">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.int4 | t.null, "bttextnamecmp">
}>("bttextnamecmp")

export const btvarstrequalimage = defineFunction<"btvarstrequalimage", {
  (arg: Input<t.oid>): Output<t.bool, "btvarstrequalimage">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "btvarstrequalimage">
}>("btvarstrequalimage")

export const byteacat = defineFunction<"byteacat", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "byteacat">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bytea | t.null, "byteacat">
}>("byteacat")

export const byteacmp = defineFunction<"byteacmp", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.int4, "byteacmp">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.int4 | t.null, "byteacmp">
}>("byteacmp")

export const byteaeq = defineFunction<"byteaeq", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteaeq">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteaeq">
}>("byteaeq")

export const byteage = defineFunction<"byteage", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteage">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteage">
}>("byteage")

export const byteagt = defineFunction<"byteagt", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteagt">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteagt">
}>("byteagt")

export const byteale = defineFunction<"byteale", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteale">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteale">
}>("byteale")

export const bytealike = defineFunction<"bytealike", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "bytealike">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "bytealike">
}>("bytealike")

export const bytealt = defineFunction<"bytealt", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "bytealt">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "bytealt">
}>("bytealt")

export const byteane = defineFunction<"byteane", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteane">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteane">
}>("byteane")

export const byteanlike = defineFunction<"byteanlike", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteanlike">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bool | t.null, "byteanlike">
}>("byteanlike")

export const byteasend = defineFunction<"byteasend", {
  (arg: Input<t.bytea>): Output<t.bytea, "byteasend">
  (arg: Input<t.bytea | t.null>): Output<t.bytea | t.null, "byteasend">
}>("byteasend")

/** 
 * A function returning the number of elements in an array
 * 
 * @see https://pgpedia.info/c/cardinality.html
 */
export const cardinality = defineFunction<"cardinality", {
  (arg: Input<t.anyarray>): Output<t.int4, "cardinality">
  (arg: Input<t.anyarray | t.null>): Output<t.int4 | t.null, "cardinality">
}>("cardinality")

export const cash_cmp = defineFunction<"cash_cmp", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.int4, "cash_cmp">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.int4 | t.null, "cash_cmp">
}>("cash_cmp")

export const cash_div_cash = defineFunction<"cash_div_cash", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.float8, "cash_div_cash">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.float8 | t.null, "cash_div_cash">
}>("cash_div_cash")

export const cash_div_flt4 = defineFunction<"cash_div_flt4", {
  (arg1: Input<t.money>, arg2: Input<t.float4>): Output<t.money, "cash_div_flt4">
  (arg1: Input<t.money | t.null>, arg2: Input<t.float4 | t.null>): Output<t.money | t.null, "cash_div_flt4">
}>("cash_div_flt4")

export const cash_div_flt8 = defineFunction<"cash_div_flt8", {
  (arg1: Input<t.money>, arg2: Input<t.float8>): Output<t.money, "cash_div_flt8">
  (arg1: Input<t.money | t.null>, arg2: Input<t.float8 | t.null>): Output<t.money | t.null, "cash_div_flt8">
}>("cash_div_flt8")

export const cash_div_int2 = defineFunction<"cash_div_int2", {
  (arg1: Input<t.money>, arg2: Input<t.int2>): Output<t.money, "cash_div_int2">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int2 | t.null>): Output<t.money | t.null, "cash_div_int2">
}>("cash_div_int2")

export const cash_div_int4 = defineFunction<"cash_div_int4", {
  (arg1: Input<t.money>, arg2: Input<t.int4>): Output<t.money, "cash_div_int4">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int4 | t.null>): Output<t.money | t.null, "cash_div_int4">
}>("cash_div_int4")

export const cash_div_int8 = defineFunction<"cash_div_int8", {
  (arg1: Input<t.money>, arg2: Input<t.int8>): Output<t.money, "cash_div_int8">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int8 | t.null>): Output<t.money | t.null, "cash_div_int8">
}>("cash_div_int8")

export const cash_eq = defineFunction<"cash_eq", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_eq">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_eq">
}>("cash_eq")

export const cash_ge = defineFunction<"cash_ge", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_ge">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_ge">
}>("cash_ge")

export const cash_gt = defineFunction<"cash_gt", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_gt">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_gt">
}>("cash_gt")

export const cash_le = defineFunction<"cash_le", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_le">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_le">
}>("cash_le")

export const cash_lt = defineFunction<"cash_lt", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_lt">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_lt">
}>("cash_lt")

export const cash_mi = defineFunction<"cash_mi", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cash_mi">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "cash_mi">
}>("cash_mi")

export const cash_mul_flt4 = defineFunction<"cash_mul_flt4", {
  (arg1: Input<t.money>, arg2: Input<t.float4>): Output<t.money, "cash_mul_flt4">
  (arg1: Input<t.money | t.null>, arg2: Input<t.float4 | t.null>): Output<t.money | t.null, "cash_mul_flt4">
}>("cash_mul_flt4")

export const cash_mul_flt8 = defineFunction<"cash_mul_flt8", {
  (arg1: Input<t.money>, arg2: Input<t.float8>): Output<t.money, "cash_mul_flt8">
  (arg1: Input<t.money | t.null>, arg2: Input<t.float8 | t.null>): Output<t.money | t.null, "cash_mul_flt8">
}>("cash_mul_flt8")

export const cash_mul_int2 = defineFunction<"cash_mul_int2", {
  (arg1: Input<t.money>, arg2: Input<t.int2>): Output<t.money, "cash_mul_int2">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int2 | t.null>): Output<t.money | t.null, "cash_mul_int2">
}>("cash_mul_int2")

export const cash_mul_int4 = defineFunction<"cash_mul_int4", {
  (arg1: Input<t.money>, arg2: Input<t.int4>): Output<t.money, "cash_mul_int4">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int4 | t.null>): Output<t.money | t.null, "cash_mul_int4">
}>("cash_mul_int4")

export const cash_mul_int8 = defineFunction<"cash_mul_int8", {
  (arg1: Input<t.money>, arg2: Input<t.int8>): Output<t.money, "cash_mul_int8">
  (arg1: Input<t.money | t.null>, arg2: Input<t.int8 | t.null>): Output<t.money | t.null, "cash_mul_int8">
}>("cash_mul_int8")

export const cash_ne = defineFunction<"cash_ne", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_ne">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.bool | t.null, "cash_ne">
}>("cash_ne")

export const cash_pl = defineFunction<"cash_pl", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cash_pl">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "cash_pl">
}>("cash_pl")

export const cash_send = defineFunction<"cash_send", {
  (arg: Input<t.money>): Output<t.bytea, "cash_send">
  (arg: Input<t.money | t.null>): Output<t.bytea | t.null, "cash_send">
}>("cash_send")

export const cash_words = defineFunction<"cash_words", {
  (arg: Input<t.money>): Output<t.text, "cash_words">
  (arg: Input<t.money | t.null>): Output<t.text | t.null, "cash_words">
}>("cash_words")

export const cashlarger = defineFunction<"cashlarger", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cashlarger">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "cashlarger">
}>("cashlarger")

export const cashsmaller = defineFunction<"cashsmaller", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cashsmaller">
  (arg1: Input<t.money | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "cashsmaller">
}>("cashsmaller")

export const cbrt = defineFunction<"cbrt", {
  (arg: Input<t.float8>): Output<t.float8, "cbrt">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cbrt">
}>("cbrt")

export const ceil = defineFunction<"ceil", {
  (arg: Input<t.float8>): Output<t.float8, "ceil">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "ceil">
  (arg: Input<t.numeric>): Output<t.numeric, "ceil">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "ceil">
}>("ceil")

export const ceiling = defineFunction<"ceiling", {
  (arg: Input<t.float8>): Output<t.float8, "ceiling">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "ceiling">
  (arg: Input<t.numeric>): Output<t.numeric, "ceiling">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "ceiling">
}>("ceiling")

export const center = defineFunction<"center", {
  (arg: Input<t.box | t.circle>): Output<t.point, "center">
  (arg: Input<t.box | t.circle | t.null>): Output<t.point | t.null, "center">
}>("center")

export const char = defineFunction<"char", {
  (arg: Input<t.int4 | t.text>): Output<t.char, "char">
  (arg: Input<t.int4 | t.text | t.null>): Output<t.char | t.null, "char">
}>("char")

export const char_length = defineFunction<"char_length", {
  (arg: Input<t.bpchar | t.text>): Output<t.int4, "char_length">
  (arg: Input<t.bpchar | t.text | t.null>): Output<t.int4 | t.null, "char_length">
}>("char_length")

export const character_length = defineFunction<"character_length", {
  (arg: Input<t.bpchar | t.text>): Output<t.int4, "character_length">
  (arg: Input<t.bpchar | t.text | t.null>): Output<t.int4 | t.null, "character_length">
}>("character_length")

export const chareq = defineFunction<"chareq", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "chareq">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "chareq">
}>("chareq")

export const charge = defineFunction<"charge", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charge">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "charge">
}>("charge")

export const chargt = defineFunction<"chargt", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "chargt">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "chargt">
}>("chargt")

export const charle = defineFunction<"charle", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charle">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "charle">
}>("charle")

export const charlt = defineFunction<"charlt", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charlt">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "charlt">
}>("charlt")

export const charne = defineFunction<"charne", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charne">
  (arg1: Input<t.char | t.null>, arg2: Input<t.char | t.null>): Output<t.bool | t.null, "charne">
}>("charne")

export const charsend = defineFunction<"charsend", {
  (arg: Input<t.char>): Output<t.bytea, "charsend">
  (arg: Input<t.char | t.null>): Output<t.bytea | t.null, "charsend">
}>("charsend")

/** 
 * A function for converting an integer into a character
 * 
 * @see https://pgpedia.info/c/chr.html
 */
export const chr = defineFunction<"chr", {
  (arg: Input<t.int4>): Output<t.text, "chr">
  (arg: Input<t.int4 | t.null>): Output<t.text | t.null, "chr">
}>("chr")

export const cidr = defineFunction<"cidr", {
  (arg: Input<t.inet>): Output<t.cidr, "cidr">
  (arg: Input<t.inet | t.null>): Output<t.cidr | t.null, "cidr">
}>("cidr")

export const cidr_send = defineFunction<"cidr_send", {
  (arg: Input<t.cidr>): Output<t.bytea, "cidr_send">
  (arg: Input<t.cidr | t.null>): Output<t.bytea | t.null, "cidr_send">
}>("cidr_send")

export const circle = defineFunction<"circle", {
  (arg1: Input<t.point>, arg2: Input<t.float8>): Output<t.circle, "circle">
  (arg1: Input<t.point | t.null>, arg2: Input<t.float8 | t.null>): Output<t.circle | t.null, "circle">
  (arg: Input<t.polygon | t.box>): Output<t.circle, "circle">
  (arg: Input<t.polygon | t.box | t.null>): Output<t.circle | t.null, "circle">
}>("circle")

export const circle_above = defineFunction<"circle_above", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_above">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_above">
}>("circle_above")

export const circle_add_pt = defineFunction<"circle_add_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_add_pt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.circle | t.null, "circle_add_pt">
}>("circle_add_pt")

export const circle_below = defineFunction<"circle_below", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_below">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_below">
}>("circle_below")

export const circle_center = defineFunction<"circle_center", {
  (arg: Input<t.circle>): Output<t.point, "circle_center">
  (arg: Input<t.circle | t.null>): Output<t.point | t.null, "circle_center">
}>("circle_center")

export const circle_contain = defineFunction<"circle_contain", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_contain">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_contain">
}>("circle_contain")

export const circle_contain_pt = defineFunction<"circle_contain_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.bool, "circle_contain_pt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "circle_contain_pt">
}>("circle_contain_pt")

export const circle_contained = defineFunction<"circle_contained", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_contained">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_contained">
}>("circle_contained")

export const circle_distance = defineFunction<"circle_distance", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.float8, "circle_distance">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.float8 | t.null, "circle_distance">
}>("circle_distance")

export const circle_div_pt = defineFunction<"circle_div_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_div_pt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.circle | t.null, "circle_div_pt">
}>("circle_div_pt")

export const circle_eq = defineFunction<"circle_eq", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_eq">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_eq">
}>("circle_eq")

export const circle_ge = defineFunction<"circle_ge", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_ge">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_ge">
}>("circle_ge")

export const circle_gt = defineFunction<"circle_gt", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_gt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_gt">
}>("circle_gt")

export const circle_le = defineFunction<"circle_le", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_le">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_le">
}>("circle_le")

export const circle_left = defineFunction<"circle_left", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_left">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_left">
}>("circle_left")

export const circle_lt = defineFunction<"circle_lt", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_lt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_lt">
}>("circle_lt")

export const circle_mul_pt = defineFunction<"circle_mul_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_mul_pt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.circle | t.null, "circle_mul_pt">
}>("circle_mul_pt")

export const circle_ne = defineFunction<"circle_ne", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_ne">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_ne">
}>("circle_ne")

export const circle_overabove = defineFunction<"circle_overabove", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overabove">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_overabove">
}>("circle_overabove")

export const circle_overbelow = defineFunction<"circle_overbelow", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overbelow">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_overbelow">
}>("circle_overbelow")

export const circle_overlap = defineFunction<"circle_overlap", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overlap">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_overlap">
}>("circle_overlap")

export const circle_overleft = defineFunction<"circle_overleft", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overleft">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_overleft">
}>("circle_overleft")

export const circle_overright = defineFunction<"circle_overright", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overright">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_overright">
}>("circle_overright")

export const circle_right = defineFunction<"circle_right", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_right">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_right">
}>("circle_right")

export const circle_same = defineFunction<"circle_same", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_same">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "circle_same">
}>("circle_same")

export const circle_send = defineFunction<"circle_send", {
  (arg: Input<t.circle>): Output<t.bytea, "circle_send">
  (arg: Input<t.circle | t.null>): Output<t.bytea | t.null, "circle_send">
}>("circle_send")

export const circle_sub_pt = defineFunction<"circle_sub_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_sub_pt">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.circle | t.null, "circle_sub_pt">
}>("circle_sub_pt")

/** 
 * A function returning the current date and time
 * 
 * @see https://pgpedia.info/c/clock_timestamp.html
 */
export const clock_timestamp = defineFunction<"clock_timestamp", {
  (): Output<t.timestamptz, "clock_timestamp">
  (): Output<t.timestamptz | t.null, "clock_timestamp">
}>("clock_timestamp")

export const close_lb = defineFunction<"close_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.point, "close_lb">
  (arg1: Input<t.line | t.null>, arg2: Input<t.box | t.null>): Output<t.point | t.null, "close_lb">
}>("close_lb")

export const close_ls = defineFunction<"close_ls", {
  (arg1: Input<t.line>, arg2: Input<t.lseg>): Output<t.point, "close_ls">
  (arg1: Input<t.line | t.null>, arg2: Input<t.lseg | t.null>): Output<t.point | t.null, "close_ls">
}>("close_ls")

export const close_lseg = defineFunction<"close_lseg", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.point, "close_lseg">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.point | t.null, "close_lseg">
}>("close_lseg")

export const close_pb = defineFunction<"close_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.point, "close_pb">
  (arg1: Input<t.point | t.null>, arg2: Input<t.box | t.null>): Output<t.point | t.null, "close_pb">
}>("close_pb")

export const close_pl = defineFunction<"close_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.point, "close_pl">
  (arg1: Input<t.point | t.null>, arg2: Input<t.line | t.null>): Output<t.point | t.null, "close_pl">
}>("close_pl")

export const close_ps = defineFunction<"close_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.point, "close_ps">
  (arg1: Input<t.point | t.null>, arg2: Input<t.lseg | t.null>): Output<t.point | t.null, "close_ps">
}>("close_ps")

export const close_sb = defineFunction<"close_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.point, "close_sb">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.box | t.null>): Output<t.point | t.null, "close_sb">
}>("close_sb")

export const close_sl = defineFunction<"close_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.point, "close_sl">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.line | t.null>): Output<t.point | t.null, "close_sl">
}>("close_sl")

/** 
 * A function returning a column's comment
 * 
 * @see https://pgpedia.info/c/col_description.html
 */
export const col_description = defineFunction<"col_description", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "col_description">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "col_description">
}>("col_description")

/** 
 * A function for concatenating values
 * 
 * @see https://pgpedia.info/c/concat.html
 */
export const concat = defineFunction<"concat", {
  (...args: Input<t.any>[]): Output<t.text, "concat">
}>("concat")

/** 
 * A function for concatenating values with a separator
 * 
 * @see https://pgpedia.info/c/concat_ws.html
 */
export const concat_ws = defineFunction<"concat_ws", {
  (arg1: Input<t.text>, arg2: Input<t.any>): Output<t.text, "concat_ws">
}>("concat_ws")

/** 
 * A function for converting the encoding of a bytea string
 * 
 * @see https://pgpedia.info/c/convert.html
 */
export const convert = defineFunction<"convert", {
  (arg1: Input<t.bytea>, arg2: Input<t.name>, arg3: Input<t.name>): Output<t.bytea, "convert">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.name | t.null>, arg3: Input<t.name | t.null>): Output<t.bytea | t.null, "convert">
}>("convert")

/** 
 * A function for converting a bytea string to the database encoding
 * 
 * @see https://pgpedia.info/c/convert_from.html
 */
export const convert_from = defineFunction<"convert_from", {
  (arg1: Input<t.bytea>, arg2: Input<t.name>): Output<t.text, "convert_from">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.name | t.null>): Output<t.text | t.null, "convert_from">
}>("convert_from")

/** 
 * A function for converting text into a bytea string with a specified encoding
 * 
 * @see https://pgpedia.info/c/convert_to.html
 */
export const convert_to = defineFunction<"convert_to", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bytea, "convert_to">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bytea | t.null, "convert_to">
}>("convert_to")

export const corr = defineFunction<"corr", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "corr">
}>("corr")

export const cos = defineFunction<"cos", {
  (arg: Input<t.float8>): Output<t.float8, "cos">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cos">
}>("cos")

export const cosd = defineFunction<"cosd", {
  (arg: Input<t.float8>): Output<t.float8, "cosd">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cosd">
}>("cosd")

export const cosh = defineFunction<"cosh", {
  (arg: Input<t.float8>): Output<t.float8, "cosh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cosh">
}>("cosh")

export const cot = defineFunction<"cot", {
  (arg: Input<t.float8>): Output<t.float8, "cot">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cot">
}>("cot")

export const cotd = defineFunction<"cotd", {
  (arg: Input<t.float8>): Output<t.float8, "cotd">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "cotd">
}>("cotd")

export const count = defineFunction<"count", {
  (arg: Input<t.any>): Output<t.int8, "count">
  (): Output<t.int8, "count">
}>("count")

export const covar_pop = defineFunction<"covar_pop", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "covar_pop">
}>("covar_pop")

export const covar_samp = defineFunction<"covar_samp", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "covar_samp">
}>("covar_samp")

export const cume_dist = defineFunction<"cume_dist", {
  (): Output<t.float8, "cume_dist">
  (...args: Input<t.any>[]): Output<t.float8, "cume_dist">
}>("cume_dist")

/** 
 * A function returning the name of the current database
 * 
 * @see https://pgpedia.info/c/current_database.html
 */
export const current_database = defineFunction<"current_database", {
  (): Output<t.name, "current_database">
  (): Output<t.name | t.null, "current_database">
}>("current_database")

export const current_query = defineFunction<"current_query", {
  (): Output<t.text, "current_query">
}>("current_query")

/** 
 * A function returning the name of the current schema
 * 
 * @see https://pgpedia.info/c/current_schema().html
 */
export const current_schema = defineFunction<"current_schema", {
  (): Output<t.name, "current_schema">
  (): Output<t.name | t.null, "current_schema">
}>("current_schema")

/** 
 * A function listing the schemas in the current search path
 * 
 * @see https://pgpedia.info/c/current_schemas.html
 */
export const current_schemas = defineFunction<"current_schemas", {
  (arg: Input<t.bool>): Output<t.array<t.name>, "current_schemas">
  (arg: Input<t.bool | t.null>): Output<t.array<t.name> | t.null, "current_schemas">
}>("current_schemas")

/** 
 * A function returning the current value of a configuration parameter
 * 
 * @see https://pgpedia.info/c/current_setting.html
 */
export const current_setting = defineFunction<"current_setting", {
  (arg: Input<t.text>): Output<t.text, "current_setting">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "current_setting">
  (arg1: Input<t.text>, arg2: Input<t.bool>): Output<t.text, "current_setting">
  (arg1: Input<t.text | t.null>, arg2: Input<t.bool | t.null>): Output<t.text | t.null, "current_setting">
}>("current_setting")

/** 
 * A function returning the current user name
 * 
 * @see https://pgpedia.info/c/current_user.html
 */
export const current_user = defineFunction<"current_user", {
  (): Output<t.name, "current_user">
  (): Output<t.name | t.null, "current_user">
}>("current_user")

export const database_to_xml = defineFunction<"database_to_xml", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xml">
  (nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "database_to_xml">
}>("database_to_xml")

export const database_to_xml_and_xmlschema = defineFunction<"database_to_xml_and_xmlschema", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xml_and_xmlschema">
  (nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "database_to_xml_and_xmlschema">
}>("database_to_xml_and_xmlschema")

export const database_to_xmlschema = defineFunction<"database_to_xmlschema", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xmlschema">
  (nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "database_to_xmlschema">
}>("database_to_xmlschema")

export const date = defineFunction<"date", {
  (arg: Input<t.timestamptz | t.timestamp>): Output<t.date, "date">
  (arg: Input<t.timestamptz | t.timestamp | t.null>): Output<t.date | t.null, "date">
}>("date")

/** 
 * A function for converting a timestamp to the start of the nearest specified interval
 * 
 * @see https://pgpedia.info/d/date_bin.html
 */
export const date_bin = defineFunction<"date_bin", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamp>, arg3: Input<t.timestamp>): Output<t.timestamp, "date_bin">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.timestamp | t.null>, arg3: Input<t.timestamp | t.null>): Output<t.timestamp | t.null, "date_bin">
  (arg1: Input<t.interval>, arg2: Input<t.timestamptz>, arg3: Input<t.timestamptz>): Output<t.timestamptz, "date_bin">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.timestamptz | t.null>, arg3: Input<t.timestamptz | t.null>): Output<t.timestamptz | t.null, "date_bin">
}>("date_bin")

export const date_cmp = defineFunction<"date_cmp", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.int4, "date_cmp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.int4 | t.null, "date_cmp">
}>("date_cmp")

export const date_cmp_timestamp = defineFunction<"date_cmp_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.int4, "date_cmp_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.int4 | t.null, "date_cmp_timestamp">
}>("date_cmp_timestamp")

export const date_cmp_timestamptz = defineFunction<"date_cmp_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.int4, "date_cmp_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.int4 | t.null, "date_cmp_timestamptz">
}>("date_cmp_timestamptz")

export const date_eq = defineFunction<"date_eq", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_eq">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_eq">
}>("date_eq")

export const date_eq_timestamp = defineFunction<"date_eq_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_eq_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_eq_timestamp">
}>("date_eq_timestamp")

export const date_eq_timestamptz = defineFunction<"date_eq_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_eq_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_eq_timestamptz">
}>("date_eq_timestamptz")

export const date_ge = defineFunction<"date_ge", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_ge">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_ge">
}>("date_ge")

export const date_ge_timestamp = defineFunction<"date_ge_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_ge_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_ge_timestamp">
}>("date_ge_timestamp")

export const date_ge_timestamptz = defineFunction<"date_ge_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_ge_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_ge_timestamptz">
}>("date_ge_timestamptz")

export const date_gt = defineFunction<"date_gt", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_gt">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_gt">
}>("date_gt")

export const date_gt_timestamp = defineFunction<"date_gt_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_gt_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_gt_timestamp">
}>("date_gt_timestamp")

export const date_gt_timestamptz = defineFunction<"date_gt_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_gt_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_gt_timestamptz">
}>("date_gt_timestamptz")

export const date_larger = defineFunction<"date_larger", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.date, "date_larger">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.date | t.null, "date_larger">
}>("date_larger")

export const date_le = defineFunction<"date_le", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_le">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_le">
}>("date_le")

export const date_le_timestamp = defineFunction<"date_le_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_le_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_le_timestamp">
}>("date_le_timestamp")

export const date_le_timestamptz = defineFunction<"date_le_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_le_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_le_timestamptz">
}>("date_le_timestamptz")

export const date_lt = defineFunction<"date_lt", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_lt">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_lt">
}>("date_lt")

export const date_lt_timestamp = defineFunction<"date_lt_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_lt_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_lt_timestamp">
}>("date_lt_timestamp")

export const date_lt_timestamptz = defineFunction<"date_lt_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_lt_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_lt_timestamptz">
}>("date_lt_timestamptz")

export const date_mi = defineFunction<"date_mi", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.int4, "date_mi">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.int4 | t.null, "date_mi">
}>("date_mi")

export const date_mi_interval = defineFunction<"date_mi_interval", {
  (arg1: Input<t.date>, arg2: Input<t.interval>): Output<t.timestamp, "date_mi_interval">
  (arg1: Input<t.date | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamp | t.null, "date_mi_interval">
}>("date_mi_interval")

export const date_mii = defineFunction<"date_mii", {
  (arg1: Input<t.date>, arg2: Input<t.int4>): Output<t.date, "date_mii">
  (arg1: Input<t.date | t.null>, arg2: Input<t.int4 | t.null>): Output<t.date | t.null, "date_mii">
}>("date_mii")

export const date_ne = defineFunction<"date_ne", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_ne">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "date_ne">
}>("date_ne")

export const date_ne_timestamp = defineFunction<"date_ne_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_ne_timestamp">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "date_ne_timestamp">
}>("date_ne_timestamp")

export const date_ne_timestamptz = defineFunction<"date_ne_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_ne_timestamptz">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "date_ne_timestamptz">
}>("date_ne_timestamptz")

/** 
 * A function for retrieving elements of a date or timestamp
 * 
 * @see https://pgpedia.info/d/date_part.html
 */
export const date_part = defineFunction<"date_part", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz | t.interval | t.timetz | t.time | t.timestamp | t.date>): Output<t.float8, "date_part">
  (arg1: Input<t.text | t.null>, arg2: Input<t.timestamptz | t.interval | t.timetz | t.time | t.timestamp | t.date | t.null>): Output<t.float8 | t.null, "date_part">
}>("date_part")

export const date_pl_interval = defineFunction<"date_pl_interval", {
  (arg1: Input<t.date>, arg2: Input<t.interval>): Output<t.timestamp, "date_pl_interval">
  (arg1: Input<t.date | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamp | t.null, "date_pl_interval">
}>("date_pl_interval")

export const date_pli = defineFunction<"date_pli", {
  (arg1: Input<t.date>, arg2: Input<t.int4>): Output<t.date, "date_pli">
  (arg1: Input<t.date | t.null>, arg2: Input<t.int4 | t.null>): Output<t.date | t.null, "date_pli">
}>("date_pli")

export const date_send = defineFunction<"date_send", {
  (arg: Input<t.date>): Output<t.bytea, "date_send">
  (arg: Input<t.date | t.null>): Output<t.bytea | t.null, "date_send">
}>("date_send")

export const date_smaller = defineFunction<"date_smaller", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.date, "date_smaller">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.date | t.null, "date_smaller">
}>("date_smaller")

/** 
 * A function for truncating a time value to a specified unit
 * 
 * @see https://pgpedia.info/d/date_trunc.html
 */
export const date_trunc = defineFunction<"date_trunc", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "date_trunc">
  (arg1: Input<t.text | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.timestamptz | t.null, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>, arg3: Input<t.text>): Output<t.timestamptz, "date_trunc">
  (arg1: Input<t.text | t.null>, arg2: Input<t.timestamptz | t.null>, arg3: Input<t.text | t.null>): Output<t.timestamptz | t.null, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.interval>): Output<t.interval, "date_trunc">
  (arg1: Input<t.text | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.timestamp>): Output<t.timestamp, "date_trunc">
  (arg1: Input<t.text | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.timestamp | t.null, "date_trunc">
}>("date_trunc")

export const daterange = defineFunction<"daterange", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.daterange, "daterange">
  (arg1: Input<t.date>, arg2: Input<t.date>, arg3: Input<t.text>): Output<t.daterange, "daterange">
}>("daterange")

export const daterange_canonical = defineFunction<"daterange_canonical", {
  (arg: Input<t.daterange>): Output<t.daterange, "daterange_canonical">
  (arg: Input<t.daterange | t.null>): Output<t.daterange | t.null, "daterange_canonical">
}>("daterange_canonical")

export const daterange_subdiff = defineFunction<"daterange_subdiff", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.float8, "daterange_subdiff">
  (arg1: Input<t.date | t.null>, arg2: Input<t.date | t.null>): Output<t.float8 | t.null, "daterange_subdiff">
}>("daterange_subdiff")

export const datetime_pl = defineFunction<"datetime_pl", {
  (arg1: Input<t.date>, arg2: Input<t.time>): Output<t.timestamp, "datetime_pl">
  (arg1: Input<t.date | t.null>, arg2: Input<t.time | t.null>): Output<t.timestamp | t.null, "datetime_pl">
}>("datetime_pl")

export const datetimetz_pl = defineFunction<"datetimetz_pl", {
  (arg1: Input<t.date>, arg2: Input<t.timetz>): Output<t.timestamptz, "datetimetz_pl">
  (arg1: Input<t.date | t.null>, arg2: Input<t.timetz | t.null>): Output<t.timestamptz | t.null, "datetimetz_pl">
}>("datetimetz_pl")

export const dcbrt = defineFunction<"dcbrt", {
  (arg: Input<t.float8>): Output<t.float8, "dcbrt">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dcbrt">
}>("dcbrt")

/** 
 * A function for converting data encoded as text to bytea
 * 
 * @see https://pgpedia.info/d/decode.html
 */
export const decode = defineFunction<"decode", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bytea, "decode">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bytea | t.null, "decode">
}>("decode")

export const degrees = defineFunction<"degrees", {
  (arg: Input<t.float8>): Output<t.float8, "degrees">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "degrees">
}>("degrees")

export const dense_rank = defineFunction<"dense_rank", {
  (): Output<t.int8, "dense_rank">
  (...args: Input<t.any>[]): Output<t.int8, "dense_rank">
}>("dense_rank")

export const dexp = defineFunction<"dexp", {
  (arg: Input<t.float8>): Output<t.float8, "dexp">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dexp">
}>("dexp")

export const diagonal = defineFunction<"diagonal", {
  (arg: Input<t.box>): Output<t.lseg, "diagonal">
  (arg: Input<t.box | t.null>): Output<t.lseg | t.null, "diagonal">
}>("diagonal")

export const diameter = defineFunction<"diameter", {
  (arg: Input<t.circle>): Output<t.float8, "diameter">
  (arg: Input<t.circle | t.null>): Output<t.float8 | t.null, "diameter">
}>("diameter")

export const dist_bl = defineFunction<"dist_bl", {
  (arg1: Input<t.box>, arg2: Input<t.line>): Output<t.float8, "dist_bl">
  (arg1: Input<t.box | t.null>, arg2: Input<t.line | t.null>): Output<t.float8 | t.null, "dist_bl">
}>("dist_bl")

export const dist_bp = defineFunction<"dist_bp", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.float8, "dist_bp">
  (arg1: Input<t.box | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_bp">
}>("dist_bp")

export const dist_bs = defineFunction<"dist_bs", {
  (arg1: Input<t.box>, arg2: Input<t.lseg>): Output<t.float8, "dist_bs">
  (arg1: Input<t.box | t.null>, arg2: Input<t.lseg | t.null>): Output<t.float8 | t.null, "dist_bs">
}>("dist_bs")

export const dist_cpoint = defineFunction<"dist_cpoint", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.float8, "dist_cpoint">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_cpoint">
}>("dist_cpoint")

export const dist_cpoly = defineFunction<"dist_cpoly", {
  (arg1: Input<t.circle>, arg2: Input<t.polygon>): Output<t.float8, "dist_cpoly">
  (arg1: Input<t.circle | t.null>, arg2: Input<t.polygon | t.null>): Output<t.float8 | t.null, "dist_cpoly">
}>("dist_cpoly")

export const dist_lb = defineFunction<"dist_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.float8, "dist_lb">
  (arg1: Input<t.line | t.null>, arg2: Input<t.box | t.null>): Output<t.float8 | t.null, "dist_lb">
}>("dist_lb")

export const dist_lp = defineFunction<"dist_lp", {
  (arg1: Input<t.line>, arg2: Input<t.point>): Output<t.float8, "dist_lp">
  (arg1: Input<t.line | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_lp">
}>("dist_lp")

export const dist_ls = defineFunction<"dist_ls", {
  (arg1: Input<t.line>, arg2: Input<t.lseg>): Output<t.float8, "dist_ls">
  (arg1: Input<t.line | t.null>, arg2: Input<t.lseg | t.null>): Output<t.float8 | t.null, "dist_ls">
}>("dist_ls")

export const dist_pathp = defineFunction<"dist_pathp", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.float8, "dist_pathp">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_pathp">
}>("dist_pathp")

export const dist_pb = defineFunction<"dist_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.float8, "dist_pb">
  (arg1: Input<t.point | t.null>, arg2: Input<t.box | t.null>): Output<t.float8 | t.null, "dist_pb">
}>("dist_pb")

export const dist_pc = defineFunction<"dist_pc", {
  (arg1: Input<t.point>, arg2: Input<t.circle>): Output<t.float8, "dist_pc">
  (arg1: Input<t.point | t.null>, arg2: Input<t.circle | t.null>): Output<t.float8 | t.null, "dist_pc">
}>("dist_pc")

export const dist_pl = defineFunction<"dist_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.float8, "dist_pl">
  (arg1: Input<t.point | t.null>, arg2: Input<t.line | t.null>): Output<t.float8 | t.null, "dist_pl">
}>("dist_pl")

export const dist_polyc = defineFunction<"dist_polyc", {
  (arg1: Input<t.polygon>, arg2: Input<t.circle>): Output<t.float8, "dist_polyc">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.circle | t.null>): Output<t.float8 | t.null, "dist_polyc">
}>("dist_polyc")

export const dist_polyp = defineFunction<"dist_polyp", {
  (arg1: Input<t.polygon>, arg2: Input<t.point>): Output<t.float8, "dist_polyp">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_polyp">
}>("dist_polyp")

export const dist_ppath = defineFunction<"dist_ppath", {
  (arg1: Input<t.point>, arg2: Input<t.path>): Output<t.float8, "dist_ppath">
  (arg1: Input<t.point | t.null>, arg2: Input<t.path | t.null>): Output<t.float8 | t.null, "dist_ppath">
}>("dist_ppath")

export const dist_ppoly = defineFunction<"dist_ppoly", {
  (arg1: Input<t.point>, arg2: Input<t.polygon>): Output<t.float8, "dist_ppoly">
  (arg1: Input<t.point | t.null>, arg2: Input<t.polygon | t.null>): Output<t.float8 | t.null, "dist_ppoly">
}>("dist_ppoly")

export const dist_ps = defineFunction<"dist_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.float8, "dist_ps">
  (arg1: Input<t.point | t.null>, arg2: Input<t.lseg | t.null>): Output<t.float8 | t.null, "dist_ps">
}>("dist_ps")

export const dist_sb = defineFunction<"dist_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.float8, "dist_sb">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.box | t.null>): Output<t.float8 | t.null, "dist_sb">
}>("dist_sb")

export const dist_sl = defineFunction<"dist_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.float8, "dist_sl">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.line | t.null>): Output<t.float8 | t.null, "dist_sl">
}>("dist_sl")

export const dist_sp = defineFunction<"dist_sp", {
  (arg1: Input<t.lseg>, arg2: Input<t.point>): Output<t.float8, "dist_sp">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "dist_sp">
}>("dist_sp")

export const div = defineFunction<"div", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "div">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "div">
}>("div")

export const dlog1 = defineFunction<"dlog1", {
  (arg: Input<t.float8>): Output<t.float8, "dlog1">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dlog1">
}>("dlog1")

export const dlog10 = defineFunction<"dlog10", {
  (arg: Input<t.float8>): Output<t.float8, "dlog10">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dlog10">
}>("dlog10")

export const dpow = defineFunction<"dpow", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "dpow">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dpow">
}>("dpow")

export const dround = defineFunction<"dround", {
  (arg: Input<t.float8>): Output<t.float8, "dround">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dround">
}>("dround")

export const dsqrt = defineFunction<"dsqrt", {
  (arg: Input<t.float8>): Output<t.float8, "dsqrt">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dsqrt">
}>("dsqrt")

export const dtrunc = defineFunction<"dtrunc", {
  (arg: Input<t.float8>): Output<t.float8, "dtrunc">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "dtrunc">
}>("dtrunc")

/** 
 * A function converting bytea data into text formats
 * 
 * @see https://pgpedia.info/e/encode.html
 */
export const encode = defineFunction<"encode", {
  (arg1: Input<t.bytea>, arg2: Input<t.text>): Output<t.text, "encode">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "encode">
}>("encode")

export const every = defineFunction<"every", {
  (arg: Input<t.bool>): Output<t.bool, "every">
}>("every")

export const exp = defineFunction<"exp", {
  (arg: Input<t.float8>): Output<t.float8, "exp">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "exp">
  (arg: Input<t.numeric>): Output<t.numeric, "exp">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "exp">
}>("exp")

/** 
 * A function for retrieving elements of a date or time value
 * 
 * @see https://pgpedia.info/e/extract.html
 */
export const extract = defineFunction<"extract", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz | t.interval | t.timetz | t.date | t.time | t.timestamp>): Output<t.numeric, "extract">
  (arg1: Input<t.text | t.null>, arg2: Input<t.timestamptz | t.interval | t.timetz | t.date | t.time | t.timestamp | t.null>): Output<t.numeric | t.null, "extract">
}>("extract")

/** 
 * A function returning the factorial of the supplied integer
 * 
 * @see https://pgpedia.info/f/factorial.html
 */
export const factorial = defineFunction<"factorial", {
  (arg: Input<t.int8>): Output<t.numeric, "factorial">
  (arg: Input<t.int8 | t.null>): Output<t.numeric | t.null, "factorial">
}>("factorial")

export const family = defineFunction<"family", {
  (arg: Input<t.inet>): Output<t.int4, "family">
  (arg: Input<t.inet | t.null>): Output<t.int4 | t.null, "family">
}>("family")

export const float4 = defineFunction<"float4", {
  (arg: Input<t.int2 | t.float8 | t.int4 | t.int8 | t.numeric | t.jsonb>): Output<t.float4, "float4">
  (arg: Input<t.int2 | t.float8 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): Output<t.float4 | t.null, "float4">
}>("float4")

export const float48div = defineFunction<"float48div", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48div">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float48div">
}>("float48div")

export const float48eq = defineFunction<"float48eq", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48eq">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48eq">
}>("float48eq")

export const float48ge = defineFunction<"float48ge", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48ge">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48ge">
}>("float48ge")

export const float48gt = defineFunction<"float48gt", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48gt">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48gt">
}>("float48gt")

export const float48le = defineFunction<"float48le", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48le">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48le">
}>("float48le")

export const float48lt = defineFunction<"float48lt", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48lt">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48lt">
}>("float48lt")

export const float48mi = defineFunction<"float48mi", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48mi">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float48mi">
}>("float48mi")

export const float48mul = defineFunction<"float48mul", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48mul">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float48mul">
}>("float48mul")

export const float48ne = defineFunction<"float48ne", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48ne">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float48ne">
}>("float48ne")

export const float48pl = defineFunction<"float48pl", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48pl">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float48pl">
}>("float48pl")

export const float4_accum = defineFunction<"float4_accum", {
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.float4>): Output<t.array<t.float8>, "float4_accum">
  (arg1: Input<t.array<t.float8> | t.null>, arg2: Input<t.float4 | t.null>): Output<t.array<t.float8> | t.null, "float4_accum">
}>("float4_accum")

export const float4abs = defineFunction<"float4abs", {
  (arg: Input<t.float4>): Output<t.float4, "float4abs">
  (arg: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4abs">
}>("float4abs")

export const float4div = defineFunction<"float4div", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4div">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4div">
}>("float4div")

export const float4eq = defineFunction<"float4eq", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4eq">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4eq">
}>("float4eq")

export const float4ge = defineFunction<"float4ge", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4ge">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4ge">
}>("float4ge")

export const float4gt = defineFunction<"float4gt", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4gt">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4gt">
}>("float4gt")

export const float4larger = defineFunction<"float4larger", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4larger">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4larger">
}>("float4larger")

export const float4le = defineFunction<"float4le", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4le">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4le">
}>("float4le")

export const float4lt = defineFunction<"float4lt", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4lt">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4lt">
}>("float4lt")

export const float4mi = defineFunction<"float4mi", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4mi">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4mi">
}>("float4mi")

export const float4mul = defineFunction<"float4mul", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4mul">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4mul">
}>("float4mul")

export const float4ne = defineFunction<"float4ne", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4ne">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float4ne">
}>("float4ne")

export const float4pl = defineFunction<"float4pl", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4pl">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4pl">
}>("float4pl")

export const float4send = defineFunction<"float4send", {
  (arg: Input<t.float4>): Output<t.bytea, "float4send">
  (arg: Input<t.float4 | t.null>): Output<t.bytea | t.null, "float4send">
}>("float4send")

export const float4smaller = defineFunction<"float4smaller", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4smaller">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4smaller">
}>("float4smaller")

export const float4um = defineFunction<"float4um", {
  (arg: Input<t.float4>): Output<t.float4, "float4um">
  (arg: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4um">
}>("float4um")

export const float4up = defineFunction<"float4up", {
  (arg: Input<t.float4>): Output<t.float4, "float4up">
  (arg: Input<t.float4 | t.null>): Output<t.float4 | t.null, "float4up">
}>("float4up")

export const float8 = defineFunction<"float8", {
  (arg: Input<t.int2 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb>): Output<t.float8, "float8">
  (arg: Input<t.int2 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): Output<t.float8 | t.null, "float8">
}>("float8")

export const float84div = defineFunction<"float84div", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84div">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float8 | t.null, "float84div">
}>("float84div")

export const float84eq = defineFunction<"float84eq", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84eq">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84eq">
}>("float84eq")

export const float84ge = defineFunction<"float84ge", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84ge">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84ge">
}>("float84ge")

export const float84gt = defineFunction<"float84gt", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84gt">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84gt">
}>("float84gt")

export const float84le = defineFunction<"float84le", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84le">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84le">
}>("float84le")

export const float84lt = defineFunction<"float84lt", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84lt">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84lt">
}>("float84lt")

export const float84mi = defineFunction<"float84mi", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84mi">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float8 | t.null, "float84mi">
}>("float84mi")

export const float84mul = defineFunction<"float84mul", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84mul">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float8 | t.null, "float84mul">
}>("float84mul")

export const float84ne = defineFunction<"float84ne", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84ne">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.bool | t.null, "float84ne">
}>("float84ne")

export const float84pl = defineFunction<"float84pl", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84pl">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float4 | t.null>): Output<t.float8 | t.null, "float84pl">
}>("float84pl")

export const float8_accum = defineFunction<"float8_accum", {
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.float8>): Output<t.array<t.float8>, "float8_accum">
  (arg1: Input<t.array<t.float8> | t.null>, arg2: Input<t.float8 | t.null>): Output<t.array<t.float8> | t.null, "float8_accum">
}>("float8_accum")

export const float8_avg = defineFunction<"float8_avg", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_avg">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_avg">
}>("float8_avg")

export const float8_combine = defineFunction<"float8_combine", {
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.array<t.float8>>): Output<t.array<t.float8>, "float8_combine">
  (arg1: Input<t.array<t.float8> | t.null>, arg2: Input<t.array<t.float8> | t.null>): Output<t.array<t.float8> | t.null, "float8_combine">
}>("float8_combine")

export const float8_corr = defineFunction<"float8_corr", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_corr">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_corr">
}>("float8_corr")

export const float8_covar_pop = defineFunction<"float8_covar_pop", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_covar_pop">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_covar_pop">
}>("float8_covar_pop")

export const float8_covar_samp = defineFunction<"float8_covar_samp", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_covar_samp">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_covar_samp">
}>("float8_covar_samp")

export const float8_regr_accum = defineFunction<"float8_regr_accum", {
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.float8>, arg3: Input<t.float8>): Output<t.array<t.float8>, "float8_regr_accum">
  (arg1: Input<t.array<t.float8> | t.null>, arg2: Input<t.float8 | t.null>, arg3: Input<t.float8 | t.null>): Output<t.array<t.float8> | t.null, "float8_regr_accum">
}>("float8_regr_accum")

export const float8_regr_avgx = defineFunction<"float8_regr_avgx", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_avgx">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_avgx">
}>("float8_regr_avgx")

export const float8_regr_avgy = defineFunction<"float8_regr_avgy", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_avgy">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_avgy">
}>("float8_regr_avgy")

export const float8_regr_combine = defineFunction<"float8_regr_combine", {
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.array<t.float8>>): Output<t.array<t.float8>, "float8_regr_combine">
  (arg1: Input<t.array<t.float8> | t.null>, arg2: Input<t.array<t.float8> | t.null>): Output<t.array<t.float8> | t.null, "float8_regr_combine">
}>("float8_regr_combine")

export const float8_regr_intercept = defineFunction<"float8_regr_intercept", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_intercept">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_intercept">
}>("float8_regr_intercept")

export const float8_regr_r2 = defineFunction<"float8_regr_r2", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_r2">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_r2">
}>("float8_regr_r2")

export const float8_regr_slope = defineFunction<"float8_regr_slope", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_slope">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_slope">
}>("float8_regr_slope")

export const float8_regr_sxx = defineFunction<"float8_regr_sxx", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_sxx">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_sxx">
}>("float8_regr_sxx")

export const float8_regr_sxy = defineFunction<"float8_regr_sxy", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_sxy">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_sxy">
}>("float8_regr_sxy")

export const float8_regr_syy = defineFunction<"float8_regr_syy", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_regr_syy">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_regr_syy">
}>("float8_regr_syy")

export const float8_stddev_pop = defineFunction<"float8_stddev_pop", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_stddev_pop">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_stddev_pop">
}>("float8_stddev_pop")

export const float8_stddev_samp = defineFunction<"float8_stddev_samp", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_stddev_samp">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_stddev_samp">
}>("float8_stddev_samp")

export const float8_var_pop = defineFunction<"float8_var_pop", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_var_pop">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_var_pop">
}>("float8_var_pop")

export const float8_var_samp = defineFunction<"float8_var_samp", {
  (arg: Input<t.array<t.float8>>): Output<t.float8, "float8_var_samp">
  (arg: Input<t.array<t.float8> | t.null>): Output<t.float8 | t.null, "float8_var_samp">
}>("float8_var_samp")

export const float8abs = defineFunction<"float8abs", {
  (arg: Input<t.float8>): Output<t.float8, "float8abs">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8abs">
}>("float8abs")

export const float8div = defineFunction<"float8div", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8div">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8div">
}>("float8div")

export const float8eq = defineFunction<"float8eq", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8eq">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8eq">
}>("float8eq")

export const float8ge = defineFunction<"float8ge", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8ge">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8ge">
}>("float8ge")

export const float8gt = defineFunction<"float8gt", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8gt">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8gt">
}>("float8gt")

export const float8larger = defineFunction<"float8larger", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8larger">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8larger">
}>("float8larger")

export const float8le = defineFunction<"float8le", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8le">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8le">
}>("float8le")

export const float8lt = defineFunction<"float8lt", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8lt">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8lt">
}>("float8lt")

export const float8mi = defineFunction<"float8mi", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8mi">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8mi">
}>("float8mi")

export const float8mul = defineFunction<"float8mul", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8mul">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8mul">
}>("float8mul")

export const float8ne = defineFunction<"float8ne", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8ne">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.bool | t.null, "float8ne">
}>("float8ne")

export const float8pl = defineFunction<"float8pl", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8pl">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8pl">
}>("float8pl")

export const float8send = defineFunction<"float8send", {
  (arg: Input<t.float8>): Output<t.bytea, "float8send">
  (arg: Input<t.float8 | t.null>): Output<t.bytea | t.null, "float8send">
}>("float8send")

export const float8smaller = defineFunction<"float8smaller", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8smaller">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8smaller">
}>("float8smaller")

export const float8um = defineFunction<"float8um", {
  (arg: Input<t.float8>): Output<t.float8, "float8um">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8um">
}>("float8um")

export const float8up = defineFunction<"float8up", {
  (arg: Input<t.float8>): Output<t.float8, "float8up">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "float8up">
}>("float8up")

export const floor = defineFunction<"floor", {
  (arg: Input<t.float8>): Output<t.float8, "floor">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "floor">
  (arg: Input<t.numeric>): Output<t.numeric, "floor">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "floor">
}>("floor")

export const flt4_mul_cash = defineFunction<"flt4_mul_cash", {
  (arg1: Input<t.float4>, arg2: Input<t.money>): Output<t.money, "flt4_mul_cash">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "flt4_mul_cash">
}>("flt4_mul_cash")

export const flt8_mul_cash = defineFunction<"flt8_mul_cash", {
  (arg1: Input<t.float8>, arg2: Input<t.money>): Output<t.money, "flt8_mul_cash">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "flt8_mul_cash">
}>("flt8_mul_cash")

export const fmgr_c_validator = defineFunction<"fmgr_c_validator", {
  (arg: Input<t.oid | t.null>): Output<t.void, "fmgr_c_validator">
}>("fmgr_c_validator")

export const fmgr_internal_validator = defineFunction<"fmgr_internal_validator", {
  (arg: Input<t.oid | t.null>): Output<t.void, "fmgr_internal_validator">
}>("fmgr_internal_validator")

export const fmgr_sql_validator = defineFunction<"fmgr_sql_validator", {
  (arg: Input<t.oid | t.null>): Output<t.void, "fmgr_sql_validator">
}>("fmgr_sql_validator")

/** 
 * A function for formatting a string with placeholder
 * 
 * @see https://pgpedia.info/f/format.html
 */
export const format = defineFunction<"format", {
  (arg1: Input<t.text>, arg2: Input<t.any>): Output<t.text, "format">
  (arg: Input<t.text>): Output<t.text, "format">
}>("format")

/** 
 * A function returning the human-readable name of a data type
 * 
 * @see https://pgpedia.info/f/format_type.html
 */
export const format_type = defineFunction<"format_type", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "format_type">
}>("format_type")

/** 
 * A function for obtaining the greatest common divisor
 * 
 * @see https://pgpedia.info/g/gcd-function.html
 */
export const gcd = defineFunction<"gcd", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "gcd">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "gcd">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "gcd">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "gcd">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "gcd">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "gcd">
}>("gcd")

/** 
 * A  system function to generate a random UUID
 * 
 * @see https://pgpedia.info/g/gen_random_uuid-function.html
 */
export const gen_random_uuid = defineFunction<"gen_random_uuid", {
  (): Output<t.uuid, "gen_random_uuid">
  (): Output<t.uuid | t.null, "gen_random_uuid">
}>("gen_random_uuid")

/** 
 * A function for generating a series of values
 * 
 * @see https://pgpedia.info/g/generate_series.html
 */
export const generate_series = defineFunction<"generate_series", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.int4, "generate_series">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.int4 | t.null, "generate_series">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "generate_series">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "generate_series">
  (arg1: Input<t.int8>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.int8, "generate_series">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>): Output<t.int8 | t.null, "generate_series">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "generate_series">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "generate_series">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.numeric>): Output<t.numeric, "generate_series">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>, arg3: Input<t.numeric | t.null>): Output<t.numeric | t.null, "generate_series">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "generate_series">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "generate_series">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.interval>): Output<t.timestamp, "generate_series">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>, arg3: Input<t.interval | t.null>): Output<t.timestamp | t.null, "generate_series">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.interval>): Output<t.timestamptz, "generate_series">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>, arg3: Input<t.interval | t.null>): Output<t.timestamptz | t.null, "generate_series">
}>("generate_series")

/** 
 * A function generating the subscripts for an array
 * 
 * @see https://pgpedia.info/g/generate_subscripts.html
 */
export const generate_subscripts = defineFunction<"generate_subscripts", {
  (arg1: Input<t.anyarray>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.int4, "generate_subscripts">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.int4 | t.null, "generate_subscripts">
  (arg1: Input<t.anyarray>, arg2: Input<t.int4>): Output<t.int4, "generate_subscripts">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "generate_subscripts">
}>("generate_subscripts")

export const get_bit = defineFunction<"get_bit", {
  (arg1: Input<t.bytea | t.bit>, arg2: Input<t.int8 | t.int4>): Output<t.int4, "get_bit">
  (arg1: Input<t.bytea | t.bit | t.null>, arg2: Input<t.int8 | t.int4 | t.null>): Output<t.int4 | t.null, "get_bit">
}>("get_bit")

export const get_byte = defineFunction<"get_byte", {
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.int4, "get_byte">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "get_byte">
}>("get_byte")

export const getdatabaseencoding = defineFunction<"getdatabaseencoding", {
  (): Output<t.name, "getdatabaseencoding">
  (): Output<t.name | t.null, "getdatabaseencoding">
}>("getdatabaseencoding")

export const getpgusername = defineFunction<"getpgusername", {
  (): Output<t.name, "getpgusername">
  (): Output<t.name | t.null, "getpgusername">
}>("getpgusername")

export const gin_cmp_tslexeme = defineFunction<"gin_cmp_tslexeme", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "gin_cmp_tslexeme">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "gin_cmp_tslexeme">
}>("gin_cmp_tslexeme")

export const gin_compare_jsonb = defineFunction<"gin_compare_jsonb", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "gin_compare_jsonb">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "gin_compare_jsonb">
}>("gin_compare_jsonb")

/** 
 * A function determining whether a user has a privilege for table columns
 * 
 * @see https://pgpedia.info/h/has_any_column_privilege.html
 */
export const has_any_column_privilege = defineFunction<"has_any_column_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_any_column_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_any_column_privilege">
}>("has_any_column_privilege")

/** 
 * A function determining whether a user has a privilege for a table column
 * 
 * @see https://pgpedia.info/h/has_column_privilege.html
 */
export const has_column_privilege = defineFunction<"has_column_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text | t.int2>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.int2 | t.null>, arg4: Input<t.text | t.null>): Output<t.bool | t.null, "has_column_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text | t.int2>, arg3: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.int2 | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_column_privilege">
}>("has_column_privilege")

/** 
 * A system function determining whether a user has a privilege for a database
 * 
 * @see https://pgpedia.info/h/has_database_privilege.html
 */
export const has_database_privilege = defineFunction<"has_database_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_database_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_database_privilege">
}>("has_database_privilege")

/** 
 * A system function determining whether a user has a privilege for a foreign data wrapper
 * 
 * @see https://pgpedia.info/h/has_foreign_data_wrapper_privilege.html
 */
export const has_foreign_data_wrapper_privilege = defineFunction<"has_foreign_data_wrapper_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_foreign_data_wrapper_privilege">
}>("has_foreign_data_wrapper_privilege")

/** 
 * A system function determining whether a user has a privilege for a function
 * 
 * @see https://pgpedia.info/h/has_function_privilege.html
 */
export const has_function_privilege = defineFunction<"has_function_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_function_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_function_privilege">
}>("has_function_privilege")

/** 
 * A function determining whether a user has a privilege for a language
 * 
 * @see https://pgpedia.info/h/has_language_privilege.html
 */
export const has_language_privilege = defineFunction<"has_language_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_language_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_language_privilege">
}>("has_language_privilege")

/** 
 * A system function determining whether a user has a privilege for a schema
 * 
 * @see https://pgpedia.info/h/has_schema_privilege.html
 */
export const has_schema_privilege = defineFunction<"has_schema_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_schema_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_schema_privilege">
}>("has_schema_privilege")

/** 
 * A system function determining whether a user has a privilege for a sequence
 * 
 * @see https://pgpedia.info/h/has_sequence_privilege.html
 */
export const has_sequence_privilege = defineFunction<"has_sequence_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_sequence_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_sequence_privilege">
}>("has_sequence_privilege")

/** 
 * A system function determining whether a user has a privilege for a foreign server
 * 
 * @see https://pgpedia.info/h/has_server_privilege.html
 */
export const has_server_privilege = defineFunction<"has_server_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_server_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_server_privilege">
}>("has_server_privilege")

/** 
 * A system function determining whether a user has a privilege for a table
 * 
 * @see https://pgpedia.info/h/has_table_privilege.html
 */
export const has_table_privilege = defineFunction<"has_table_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_table_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_table_privilege">
}>("has_table_privilege")

/** 
 * A system function determining whether a user has a privilege for a tablespace
 * 
 * @see https://pgpedia.info/h/has_tablespace_privilege.html
 */
export const has_tablespace_privilege = defineFunction<"has_tablespace_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_tablespace_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_tablespace_privilege">
}>("has_tablespace_privilege")

/** 
 * A system function determining whether a user has a privilege for a data type
 * 
 * @see https://pgpedia.info/h/has_type_privilege.html
 */
export const has_type_privilege = defineFunction<"has_type_privilege", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text | t.oid>, arg3: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "has_type_privilege">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "has_type_privilege">
}>("has_type_privilege")

export const hash_array = defineFunction<"hash_array", {
  (arg: Input<t.anyarray>): Output<t.int4, "hash_array">
  (arg: Input<t.anyarray | t.null>): Output<t.int4 | t.null, "hash_array">
}>("hash_array")

export const hash_array_extended = defineFunction<"hash_array_extended", {
  (arg1: Input<t.anyarray>, arg2: Input<t.int8>): Output<t.int8, "hash_array_extended">
  (arg1: Input<t.anyarray | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hash_array_extended">
}>("hash_array_extended")

export const hash_numeric = defineFunction<"hash_numeric", {
  (arg: Input<t.numeric>): Output<t.int4, "hash_numeric">
  (arg: Input<t.numeric | t.null>): Output<t.int4 | t.null, "hash_numeric">
}>("hash_numeric")

export const hash_numeric_extended = defineFunction<"hash_numeric_extended", {
  (arg1: Input<t.numeric>, arg2: Input<t.int8>): Output<t.int8, "hash_numeric_extended">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hash_numeric_extended">
}>("hash_numeric_extended")

export const hashbpchar = defineFunction<"hashbpchar", {
  (arg: Input<t.bpchar>): Output<t.int4, "hashbpchar">
  (arg: Input<t.bpchar | t.null>): Output<t.int4 | t.null, "hashbpchar">
}>("hashbpchar")

export const hashbpcharextended = defineFunction<"hashbpcharextended", {
  (arg1: Input<t.bpchar>, arg2: Input<t.int8>): Output<t.int8, "hashbpcharextended">
  (arg1: Input<t.bpchar | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashbpcharextended">
}>("hashbpcharextended")

export const hashchar = defineFunction<"hashchar", {
  (arg: Input<t.char>): Output<t.int4, "hashchar">
  (arg: Input<t.char | t.null>): Output<t.int4 | t.null, "hashchar">
}>("hashchar")

export const hashcharextended = defineFunction<"hashcharextended", {
  (arg1: Input<t.char>, arg2: Input<t.int8>): Output<t.int8, "hashcharextended">
  (arg1: Input<t.char | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashcharextended">
}>("hashcharextended")

export const hashfloat4 = defineFunction<"hashfloat4", {
  (arg: Input<t.float4>): Output<t.int4, "hashfloat4">
  (arg: Input<t.float4 | t.null>): Output<t.int4 | t.null, "hashfloat4">
}>("hashfloat4")

export const hashfloat4extended = defineFunction<"hashfloat4extended", {
  (arg1: Input<t.float4>, arg2: Input<t.int8>): Output<t.int8, "hashfloat4extended">
  (arg1: Input<t.float4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashfloat4extended">
}>("hashfloat4extended")

export const hashfloat8 = defineFunction<"hashfloat8", {
  (arg: Input<t.float8>): Output<t.int4, "hashfloat8">
  (arg: Input<t.float8 | t.null>): Output<t.int4 | t.null, "hashfloat8">
}>("hashfloat8")

export const hashfloat8extended = defineFunction<"hashfloat8extended", {
  (arg1: Input<t.float8>, arg2: Input<t.int8>): Output<t.int8, "hashfloat8extended">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashfloat8extended">
}>("hashfloat8extended")

export const hashinet = defineFunction<"hashinet", {
  (arg: Input<t.inet>): Output<t.int4, "hashinet">
  (arg: Input<t.inet | t.null>): Output<t.int4 | t.null, "hashinet">
}>("hashinet")

export const hashinetextended = defineFunction<"hashinetextended", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.int8, "hashinetextended">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashinetextended">
}>("hashinetextended")

export const hashint2 = defineFunction<"hashint2", {
  (arg: Input<t.int2>): Output<t.int4, "hashint2">
  (arg: Input<t.int2 | t.null>): Output<t.int4 | t.null, "hashint2">
}>("hashint2")

export const hashint2extended = defineFunction<"hashint2extended", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "hashint2extended">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashint2extended">
}>("hashint2extended")

export const hashint4 = defineFunction<"hashint4", {
  (arg: Input<t.int4>): Output<t.int4, "hashint4">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "hashint4">
}>("hashint4")

export const hashint4extended = defineFunction<"hashint4extended", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "hashint4extended">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashint4extended">
}>("hashint4extended")

export const hashint8 = defineFunction<"hashint8", {
  (arg: Input<t.int8>): Output<t.int4, "hashint8">
  (arg: Input<t.int8 | t.null>): Output<t.int4 | t.null, "hashint8">
}>("hashint8")

export const hashint8extended = defineFunction<"hashint8extended", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "hashint8extended">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashint8extended">
}>("hashint8extended")

export const hashmacaddr = defineFunction<"hashmacaddr", {
  (arg: Input<t.macaddr>): Output<t.int4, "hashmacaddr">
  (arg: Input<t.macaddr | t.null>): Output<t.int4 | t.null, "hashmacaddr">
}>("hashmacaddr")

export const hashmacaddrextended = defineFunction<"hashmacaddrextended", {
  (arg1: Input<t.macaddr>, arg2: Input<t.int8>): Output<t.int8, "hashmacaddrextended">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashmacaddrextended">
}>("hashmacaddrextended")

export const hashname = defineFunction<"hashname", {
  (arg: Input<t.name>): Output<t.int4, "hashname">
  (arg: Input<t.name | t.null>): Output<t.int4 | t.null, "hashname">
}>("hashname")

export const hashnameextended = defineFunction<"hashnameextended", {
  (arg1: Input<t.name>, arg2: Input<t.int8>): Output<t.int8, "hashnameextended">
  (arg1: Input<t.name | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashnameextended">
}>("hashnameextended")

export const hashoid = defineFunction<"hashoid", {
  (arg: Input<t.oid>): Output<t.int4, "hashoid">
  (arg: Input<t.oid | t.null>): Output<t.int4 | t.null, "hashoid">
}>("hashoid")

export const hashoidextended = defineFunction<"hashoidextended", {
  (arg1: Input<t.oid>, arg2: Input<t.int8>): Output<t.int8, "hashoidextended">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashoidextended">
}>("hashoidextended")

export const hashtext = defineFunction<"hashtext", {
  (arg: Input<t.text>): Output<t.int4, "hashtext">
  (arg: Input<t.text | t.null>): Output<t.int4 | t.null, "hashtext">
}>("hashtext")

export const hashtextextended = defineFunction<"hashtextextended", {
  (arg1: Input<t.text>, arg2: Input<t.int8>): Output<t.int8, "hashtextextended">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "hashtextextended">
}>("hashtextextended")

export const height = defineFunction<"height", {
  (arg: Input<t.box>): Output<t.float8, "height">
  (arg: Input<t.box | t.null>): Output<t.float8 | t.null, "height">
}>("height")

export const host = defineFunction<"host", {
  (arg: Input<t.inet>): Output<t.text, "host">
  (arg: Input<t.inet | t.null>): Output<t.text | t.null, "host">
}>("host")

export const hostmask = defineFunction<"hostmask", {
  (arg: Input<t.inet>): Output<t.inet, "hostmask">
  (arg: Input<t.inet | t.null>): Output<t.inet | t.null, "hostmask">
}>("hostmask")

export const in_range = defineFunction<"in_range", {
  (arg1: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz>, arg2: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz>, arg3: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.numeric | t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz | t.null>, arg2: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.float4 | t.numeric | t.date | t.timestamp | t.timestamptz | t.interval | t.time | t.timetz | t.null>, arg3: Input<t.int8 | t.int4 | t.int2 | t.float8 | t.numeric | t.interval | t.null>, arg4: Input<t.bool | t.null>, arg5: Input<t.bool | t.null>): Output<t.bool | t.null, "in_range">
}>("in_range")

/** 
 * A function returning the client IP address
 * 
 * @see https://pgpedia.info/i/inet_client_addr.html
 */
export const inet_client_addr = defineFunction<"inet_client_addr", {
  (): Output<t.inet, "inet_client_addr">
}>("inet_client_addr")

/** 
 * A function returning the client port
 * 
 * @see https://pgpedia.info/i/inet_client_port.html
 */
export const inet_client_port = defineFunction<"inet_client_port", {
  (): Output<t.int4, "inet_client_port">
}>("inet_client_port")

export const inet_merge = defineFunction<"inet_merge", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.cidr, "inet_merge">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.cidr | t.null, "inet_merge">
}>("inet_merge")

export const inet_same_family = defineFunction<"inet_same_family", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "inet_same_family">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "inet_same_family">
}>("inet_same_family")

export const inet_send = defineFunction<"inet_send", {
  (arg: Input<t.inet>): Output<t.bytea, "inet_send">
  (arg: Input<t.inet | t.null>): Output<t.bytea | t.null, "inet_send">
}>("inet_send")

/** 
 * A system function returning the server IP address
 * 
 * @see https://pgpedia.info/i/inet_server_addr.html
 */
export const inet_server_addr = defineFunction<"inet_server_addr", {
  (): Output<t.inet, "inet_server_addr">
}>("inet_server_addr")

/** 
 * A function returning the server IP port
 * 
 * @see https://pgpedia.info/i/inet_server_port.html
 */
export const inet_server_port = defineFunction<"inet_server_port", {
  (): Output<t.int4, "inet_server_port">
}>("inet_server_port")

export const inetand = defineFunction<"inetand", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "inetand">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.inet | t.null, "inetand">
}>("inetand")

export const inetmi = defineFunction<"inetmi", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.int8, "inetmi">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.int8 | t.null, "inetmi">
}>("inetmi")

export const inetmi_int8 = defineFunction<"inetmi_int8", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.inet, "inetmi_int8">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.int8 | t.null>): Output<t.inet | t.null, "inetmi_int8">
}>("inetmi_int8")

export const inetnot = defineFunction<"inetnot", {
  (arg: Input<t.inet>): Output<t.inet, "inetnot">
  (arg: Input<t.inet | t.null>): Output<t.inet | t.null, "inetnot">
}>("inetnot")

export const inetor = defineFunction<"inetor", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "inetor">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.inet | t.null, "inetor">
}>("inetor")

export const inetpl = defineFunction<"inetpl", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.inet, "inetpl">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.int8 | t.null>): Output<t.inet | t.null, "inetpl">
}>("inetpl")

/** 
 * A system function which converts the first letter of each word to upper case
 * 
 * @see https://pgpedia.info/i/initcap.html
 */
export const initcap = defineFunction<"initcap", {
  (arg: Input<t.text>): Output<t.text, "initcap">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "initcap">
}>("initcap")

export const int2 = defineFunction<"int2", {
  (arg: Input<t.float8 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb>): Output<t.int2, "int2">
  (arg: Input<t.float8 | t.float4 | t.int4 | t.int8 | t.numeric | t.jsonb | t.null>): Output<t.int2 | t.null, "int2">
}>("int2")

export const int24div = defineFunction<"int24div", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24div">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int24div">
}>("int24div")

export const int24eq = defineFunction<"int24eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24eq">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24eq">
}>("int24eq")

export const int24ge = defineFunction<"int24ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24ge">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24ge">
}>("int24ge")

export const int24gt = defineFunction<"int24gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24gt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24gt">
}>("int24gt")

export const int24le = defineFunction<"int24le", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24le">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24le">
}>("int24le")

export const int24lt = defineFunction<"int24lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24lt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24lt">
}>("int24lt")

export const int24mi = defineFunction<"int24mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24mi">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int24mi">
}>("int24mi")

export const int24mul = defineFunction<"int24mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24mul">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int24mul">
}>("int24mul")

export const int24ne = defineFunction<"int24ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24ne">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int24ne">
}>("int24ne")

export const int24pl = defineFunction<"int24pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24pl">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int24pl">
}>("int24pl")

export const int28div = defineFunction<"int28div", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28div">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int28div">
}>("int28div")

export const int28eq = defineFunction<"int28eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28eq">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28eq">
}>("int28eq")

export const int28ge = defineFunction<"int28ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28ge">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28ge">
}>("int28ge")

export const int28gt = defineFunction<"int28gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28gt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28gt">
}>("int28gt")

export const int28le = defineFunction<"int28le", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28le">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28le">
}>("int28le")

export const int28lt = defineFunction<"int28lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28lt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28lt">
}>("int28lt")

export const int28mi = defineFunction<"int28mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28mi">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int28mi">
}>("int28mi")

export const int28mul = defineFunction<"int28mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28mul">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int28mul">
}>("int28mul")

export const int28ne = defineFunction<"int28ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28ne">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int28ne">
}>("int28ne")

export const int28pl = defineFunction<"int28pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28pl">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int28pl">
}>("int28pl")

export const int2_avg_accum = defineFunction<"int2_avg_accum", {
  (arg1: Input<t.array<t.int8>>, arg2: Input<t.int2>): Output<t.array<t.int8>, "int2_avg_accum">
  (arg1: Input<t.array<t.int8> | t.null>, arg2: Input<t.int2 | t.null>): Output<t.array<t.int8> | t.null, "int2_avg_accum">
}>("int2_avg_accum")

export const int2_avg_accum_inv = defineFunction<"int2_avg_accum_inv", {
  (arg1: Input<t.array<t.int8>>, arg2: Input<t.int2>): Output<t.array<t.int8>, "int2_avg_accum_inv">
  (arg1: Input<t.array<t.int8> | t.null>, arg2: Input<t.int2 | t.null>): Output<t.array<t.int8> | t.null, "int2_avg_accum_inv">
}>("int2_avg_accum_inv")

export const int2_mul_cash = defineFunction<"int2_mul_cash", {
  (arg1: Input<t.int2>, arg2: Input<t.money>): Output<t.money, "int2_mul_cash">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "int2_mul_cash">
}>("int2_mul_cash")

export const int2_sum = defineFunction<"int2_sum", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int2_sum">
}>("int2_sum")

export const int2abs = defineFunction<"int2abs", {
  (arg: Input<t.int2>): Output<t.int2, "int2abs">
  (arg: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2abs">
}>("int2abs")

export const int2and = defineFunction<"int2and", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2and">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2and">
}>("int2and")

export const int2div = defineFunction<"int2div", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2div">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2div">
}>("int2div")

export const int2eq = defineFunction<"int2eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2eq">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2eq">
}>("int2eq")

export const int2ge = defineFunction<"int2ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2ge">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2ge">
}>("int2ge")

export const int2gt = defineFunction<"int2gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2gt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2gt">
}>("int2gt")

export const int2int4_sum = defineFunction<"int2int4_sum", {
  (arg: Input<t.array<t.int8>>): Output<t.int8, "int2int4_sum">
  (arg: Input<t.array<t.int8> | t.null>): Output<t.int8 | t.null, "int2int4_sum">
}>("int2int4_sum")

export const int2larger = defineFunction<"int2larger", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2larger">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2larger">
}>("int2larger")

export const int2le = defineFunction<"int2le", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2le">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2le">
}>("int2le")

export const int2lt = defineFunction<"int2lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2lt">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2lt">
}>("int2lt")

export const int2mi = defineFunction<"int2mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mi">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2mi">
}>("int2mi")

export const int2mod = defineFunction<"int2mod", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mod">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2mod">
}>("int2mod")

export const int2mul = defineFunction<"int2mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mul">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2mul">
}>("int2mul")

export const int2ne = defineFunction<"int2ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2ne">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int2ne">
}>("int2ne")

export const int2not = defineFunction<"int2not", {
  (arg: Input<t.int2>): Output<t.int2, "int2not">
  (arg: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2not">
}>("int2not")

export const int2or = defineFunction<"int2or", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2or">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2or">
}>("int2or")

export const int2pl = defineFunction<"int2pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2pl">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2pl">
}>("int2pl")

export const int2send = defineFunction<"int2send", {
  (arg: Input<t.int2>): Output<t.bytea, "int2send">
  (arg: Input<t.int2 | t.null>): Output<t.bytea | t.null, "int2send">
}>("int2send")

export const int2shl = defineFunction<"int2shl", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int2, "int2shl">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int2 | t.null, "int2shl">
}>("int2shl")

export const int2shr = defineFunction<"int2shr", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int2, "int2shr">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int2 | t.null, "int2shr">
}>("int2shr")

export const int2smaller = defineFunction<"int2smaller", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2smaller">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2smaller">
}>("int2smaller")

export const int2um = defineFunction<"int2um", {
  (arg: Input<t.int2>): Output<t.int2, "int2um">
  (arg: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2um">
}>("int2um")

export const int2up = defineFunction<"int2up", {
  (arg: Input<t.int2>): Output<t.int2, "int2up">
  (arg: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2up">
}>("int2up")

export const int2xor = defineFunction<"int2xor", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2xor">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "int2xor">
}>("int2xor")

export const int4 = defineFunction<"int4", {
  (arg: Input<t.char | t.int2 | t.float8 | t.float4 | t.int8 | t.bit | t.numeric | t.jsonb | t.bool>): Output<t.int4, "int4">
  (arg: Input<t.char | t.int2 | t.float8 | t.float4 | t.int8 | t.bit | t.numeric | t.jsonb | t.bool | t.null>): Output<t.int4 | t.null, "int4">
}>("int4")

export const int42div = defineFunction<"int42div", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42div">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "int42div">
}>("int42div")

export const int42eq = defineFunction<"int42eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42eq">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42eq">
}>("int42eq")

export const int42ge = defineFunction<"int42ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42ge">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42ge">
}>("int42ge")

export const int42gt = defineFunction<"int42gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42gt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42gt">
}>("int42gt")

export const int42le = defineFunction<"int42le", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42le">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42le">
}>("int42le")

export const int42lt = defineFunction<"int42lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42lt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42lt">
}>("int42lt")

export const int42mi = defineFunction<"int42mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42mi">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "int42mi">
}>("int42mi")

export const int42mul = defineFunction<"int42mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42mul">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "int42mul">
}>("int42mul")

export const int42ne = defineFunction<"int42ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42ne">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int42ne">
}>("int42ne")

export const int42pl = defineFunction<"int42pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42pl">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int4 | t.null, "int42pl">
}>("int42pl")

export const int48div = defineFunction<"int48div", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48div">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int48div">
}>("int48div")

export const int48eq = defineFunction<"int48eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48eq">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48eq">
}>("int48eq")

export const int48ge = defineFunction<"int48ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48ge">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48ge">
}>("int48ge")

export const int48gt = defineFunction<"int48gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48gt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48gt">
}>("int48gt")

export const int48le = defineFunction<"int48le", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48le">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48le">
}>("int48le")

export const int48lt = defineFunction<"int48lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48lt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48lt">
}>("int48lt")

export const int48mi = defineFunction<"int48mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48mi">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int48mi">
}>("int48mi")

export const int48mul = defineFunction<"int48mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48mul">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int48mul">
}>("int48mul")

export const int48ne = defineFunction<"int48ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48ne">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int48ne">
}>("int48ne")

export const int48pl = defineFunction<"int48pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48pl">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int48pl">
}>("int48pl")

export const int4_avg_accum = defineFunction<"int4_avg_accum", {
  (arg1: Input<t.array<t.int8>>, arg2: Input<t.int4>): Output<t.array<t.int8>, "int4_avg_accum">
  (arg1: Input<t.array<t.int8> | t.null>, arg2: Input<t.int4 | t.null>): Output<t.array<t.int8> | t.null, "int4_avg_accum">
}>("int4_avg_accum")

export const int4_avg_accum_inv = defineFunction<"int4_avg_accum_inv", {
  (arg1: Input<t.array<t.int8>>, arg2: Input<t.int4>): Output<t.array<t.int8>, "int4_avg_accum_inv">
  (arg1: Input<t.array<t.int8> | t.null>, arg2: Input<t.int4 | t.null>): Output<t.array<t.int8> | t.null, "int4_avg_accum_inv">
}>("int4_avg_accum_inv")

export const int4_avg_combine = defineFunction<"int4_avg_combine", {
  (arg1: Input<t.array<t.int8>>, arg2: Input<t.array<t.int8>>): Output<t.array<t.int8>, "int4_avg_combine">
  (arg1: Input<t.array<t.int8> | t.null>, arg2: Input<t.array<t.int8> | t.null>): Output<t.array<t.int8> | t.null, "int4_avg_combine">
}>("int4_avg_combine")

export const int4_mul_cash = defineFunction<"int4_mul_cash", {
  (arg1: Input<t.int4>, arg2: Input<t.money>): Output<t.money, "int4_mul_cash">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "int4_mul_cash">
}>("int4_mul_cash")

export const int4_sum = defineFunction<"int4_sum", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int4_sum">
}>("int4_sum")

export const int4abs = defineFunction<"int4abs", {
  (arg: Input<t.int4>): Output<t.int4, "int4abs">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4abs">
}>("int4abs")

export const int4and = defineFunction<"int4and", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4and">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4and">
}>("int4and")

export const int4div = defineFunction<"int4div", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4div">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4div">
}>("int4div")

export const int4eq = defineFunction<"int4eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4eq">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4eq">
}>("int4eq")

export const int4ge = defineFunction<"int4ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4ge">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4ge">
}>("int4ge")

export const int4gt = defineFunction<"int4gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4gt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4gt">
}>("int4gt")

export const int4inc = defineFunction<"int4inc", {
  (arg: Input<t.int4>): Output<t.int4, "int4inc">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4inc">
}>("int4inc")

export const int4larger = defineFunction<"int4larger", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4larger">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4larger">
}>("int4larger")

export const int4le = defineFunction<"int4le", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4le">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4le">
}>("int4le")

export const int4lt = defineFunction<"int4lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4lt">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4lt">
}>("int4lt")

export const int4mi = defineFunction<"int4mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mi">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4mi">
}>("int4mi")

export const int4mod = defineFunction<"int4mod", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mod">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4mod">
}>("int4mod")

export const int4mul = defineFunction<"int4mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mul">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4mul">
}>("int4mul")

export const int4ne = defineFunction<"int4ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4ne">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int4ne">
}>("int4ne")

export const int4not = defineFunction<"int4not", {
  (arg: Input<t.int4>): Output<t.int4, "int4not">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4not">
}>("int4not")

export const int4or = defineFunction<"int4or", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4or">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4or">
}>("int4or")

export const int4pl = defineFunction<"int4pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4pl">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4pl">
}>("int4pl")

export const int4range = defineFunction<"int4range", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4range, "int4range">
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.int4range, "int4range">
}>("int4range")

export const int4range_canonical = defineFunction<"int4range_canonical", {
  (arg: Input<t.int4range>): Output<t.int4range, "int4range_canonical">
  (arg: Input<t.int4range | t.null>): Output<t.int4range | t.null, "int4range_canonical">
}>("int4range_canonical")

export const int4range_subdiff = defineFunction<"int4range_subdiff", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.float8, "int4range_subdiff">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.float8 | t.null, "int4range_subdiff">
}>("int4range_subdiff")

export const int4send = defineFunction<"int4send", {
  (arg: Input<t.int4>): Output<t.bytea, "int4send">
  (arg: Input<t.int4 | t.null>): Output<t.bytea | t.null, "int4send">
}>("int4send")

export const int4shl = defineFunction<"int4shl", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4shl">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4shl">
}>("int4shl")

export const int4shr = defineFunction<"int4shr", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4shr">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4shr">
}>("int4shr")

export const int4smaller = defineFunction<"int4smaller", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4smaller">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4smaller">
}>("int4smaller")

export const int4um = defineFunction<"int4um", {
  (arg: Input<t.int4>): Output<t.int4, "int4um">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4um">
}>("int4um")

export const int4up = defineFunction<"int4up", {
  (arg: Input<t.int4>): Output<t.int4, "int4up">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4up">
}>("int4up")

export const int4xor = defineFunction<"int4xor", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4xor">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "int4xor">
}>("int4xor")

export const int8 = defineFunction<"int8", {
  (arg: Input<t.int4 | t.float8 | t.float4 | t.int2 | t.oid | t.numeric | t.jsonb | t.bit>): Output<t.int8, "int8">
  (arg: Input<t.int4 | t.float8 | t.float4 | t.int2 | t.oid | t.numeric | t.jsonb | t.bit | t.null>): Output<t.int8 | t.null, "int8">
}>("int8")

export const int82div = defineFunction<"int82div", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82div">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int8 | t.null, "int82div">
}>("int82div")

export const int82eq = defineFunction<"int82eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82eq">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82eq">
}>("int82eq")

export const int82ge = defineFunction<"int82ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82ge">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82ge">
}>("int82ge")

export const int82gt = defineFunction<"int82gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82gt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82gt">
}>("int82gt")

export const int82le = defineFunction<"int82le", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82le">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82le">
}>("int82le")

export const int82lt = defineFunction<"int82lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82lt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82lt">
}>("int82lt")

export const int82mi = defineFunction<"int82mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82mi">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int8 | t.null, "int82mi">
}>("int82mi")

export const int82mul = defineFunction<"int82mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82mul">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int8 | t.null, "int82mul">
}>("int82mul")

export const int82ne = defineFunction<"int82ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82ne">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.bool | t.null, "int82ne">
}>("int82ne")

export const int82pl = defineFunction<"int82pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82pl">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int8 | t.null, "int82pl">
}>("int82pl")

export const int84div = defineFunction<"int84div", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84div">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int84div">
}>("int84div")

export const int84eq = defineFunction<"int84eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84eq">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84eq">
}>("int84eq")

export const int84ge = defineFunction<"int84ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84ge">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84ge">
}>("int84ge")

export const int84gt = defineFunction<"int84gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84gt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84gt">
}>("int84gt")

export const int84le = defineFunction<"int84le", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84le">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84le">
}>("int84le")

export const int84lt = defineFunction<"int84lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84lt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84lt">
}>("int84lt")

export const int84mi = defineFunction<"int84mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84mi">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int84mi">
}>("int84mi")

export const int84mul = defineFunction<"int84mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84mul">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int84mul">
}>("int84mul")

export const int84ne = defineFunction<"int84ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84ne">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "int84ne">
}>("int84ne")

export const int84pl = defineFunction<"int84pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84pl">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int84pl">
}>("int84pl")

export const int8_avg = defineFunction<"int8_avg", {
  (arg: Input<t.array<t.int8>>): Output<t.numeric, "int8_avg">
  (arg: Input<t.array<t.int8> | t.null>): Output<t.numeric | t.null, "int8_avg">
}>("int8_avg")

export const int8_mul_cash = defineFunction<"int8_mul_cash", {
  (arg1: Input<t.int8>, arg2: Input<t.money>): Output<t.money, "int8_mul_cash">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.money | t.null>): Output<t.money | t.null, "int8_mul_cash">
}>("int8_mul_cash")

export const int8_sum = defineFunction<"int8_sum", {
  (arg1: Input<t.numeric>, arg2: Input<t.int8>): Output<t.numeric, "int8_sum">
}>("int8_sum")

export const int8abs = defineFunction<"int8abs", {
  (arg: Input<t.int8>): Output<t.int8, "int8abs">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8abs">
}>("int8abs")

export const int8and = defineFunction<"int8and", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8and">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8and">
}>("int8and")

export const int8dec = defineFunction<"int8dec", {
  (arg: Input<t.int8>): Output<t.int8, "int8dec">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8dec">
}>("int8dec")

export const int8dec_any = defineFunction<"int8dec_any", {
  (arg1: Input<t.int8>, arg2: Input<t.any>): Output<t.int8, "int8dec_any">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.any | t.null>): Output<t.int8 | t.null, "int8dec_any">
}>("int8dec_any")

export const int8div = defineFunction<"int8div", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8div">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8div">
}>("int8div")

export const int8eq = defineFunction<"int8eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8eq">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8eq">
}>("int8eq")

export const int8ge = defineFunction<"int8ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8ge">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8ge">
}>("int8ge")

export const int8gt = defineFunction<"int8gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8gt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8gt">
}>("int8gt")

export const int8inc = defineFunction<"int8inc", {
  (arg: Input<t.int8>): Output<t.int8, "int8inc">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8inc">
}>("int8inc")

export const int8inc_any = defineFunction<"int8inc_any", {
  (arg1: Input<t.int8>, arg2: Input<t.any>): Output<t.int8, "int8inc_any">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.any | t.null>): Output<t.int8 | t.null, "int8inc_any">
}>("int8inc_any")

export const int8inc_float8_float8 = defineFunction<"int8inc_float8_float8", {
  (arg1: Input<t.int8>, arg2: Input<t.float8>, arg3: Input<t.float8>): Output<t.int8, "int8inc_float8_float8">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.float8 | t.null>, arg3: Input<t.float8 | t.null>): Output<t.int8 | t.null, "int8inc_float8_float8">
}>("int8inc_float8_float8")

export const int8larger = defineFunction<"int8larger", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8larger">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8larger">
}>("int8larger")

export const int8le = defineFunction<"int8le", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8le">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8le">
}>("int8le")

export const int8lt = defineFunction<"int8lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8lt">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8lt">
}>("int8lt")

export const int8mi = defineFunction<"int8mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mi">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8mi">
}>("int8mi")

export const int8mod = defineFunction<"int8mod", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mod">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8mod">
}>("int8mod")

export const int8mul = defineFunction<"int8mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mul">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8mul">
}>("int8mul")

export const int8ne = defineFunction<"int8ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8ne">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.bool | t.null, "int8ne">
}>("int8ne")

export const int8not = defineFunction<"int8not", {
  (arg: Input<t.int8>): Output<t.int8, "int8not">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8not">
}>("int8not")

export const int8or = defineFunction<"int8or", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8or">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8or">
}>("int8or")

export const int8pl = defineFunction<"int8pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8pl">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8pl">
}>("int8pl")

export const int8pl_inet = defineFunction<"int8pl_inet", {
  (arg1: Input<t.int8>, arg2: Input<t.inet>): Output<t.inet, "int8pl_inet">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.inet | t.null>): Output<t.inet | t.null, "int8pl_inet">
}>("int8pl_inet")

export const int8range = defineFunction<"int8range", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8range, "int8range">
  (arg1: Input<t.int8>, arg2: Input<t.int8>, arg3: Input<t.text>): Output<t.int8range, "int8range">
}>("int8range")

export const int8range_canonical = defineFunction<"int8range_canonical", {
  (arg: Input<t.int8range>): Output<t.int8range, "int8range_canonical">
  (arg: Input<t.int8range | t.null>): Output<t.int8range | t.null, "int8range_canonical">
}>("int8range_canonical")

export const int8range_subdiff = defineFunction<"int8range_subdiff", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.float8, "int8range_subdiff">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.float8 | t.null, "int8range_subdiff">
}>("int8range_subdiff")

export const int8send = defineFunction<"int8send", {
  (arg: Input<t.int8>): Output<t.bytea, "int8send">
  (arg: Input<t.int8 | t.null>): Output<t.bytea | t.null, "int8send">
}>("int8send")

export const int8shl = defineFunction<"int8shl", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int8shl">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int8shl">
}>("int8shl")

export const int8shr = defineFunction<"int8shr", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int8shr">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int8 | t.null, "int8shr">
}>("int8shr")

export const int8smaller = defineFunction<"int8smaller", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8smaller">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8smaller">
}>("int8smaller")

export const int8um = defineFunction<"int8um", {
  (arg: Input<t.int8>): Output<t.int8, "int8um">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8um">
}>("int8um")

export const int8up = defineFunction<"int8up", {
  (arg: Input<t.int8>): Output<t.int8, "int8up">
  (arg: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8up">
}>("int8up")

export const int8xor = defineFunction<"int8xor", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8xor">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "int8xor">
}>("int8xor")

export const integer_pl_date = defineFunction<"integer_pl_date", {
  (arg1: Input<t.int4>, arg2: Input<t.date>): Output<t.date, "integer_pl_date">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.date | t.null>): Output<t.date | t.null, "integer_pl_date">
}>("integer_pl_date")

export const inter_lb = defineFunction<"inter_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.bool, "inter_lb">
  (arg1: Input<t.line | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "inter_lb">
}>("inter_lb")

export const inter_sb = defineFunction<"inter_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.bool, "inter_sb">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "inter_sb">
}>("inter_sb")

export const inter_sl = defineFunction<"inter_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.bool, "inter_sl">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "inter_sl">
}>("inter_sl")

export const interval = defineFunction<"interval", {
  (arg1: Input<t.interval>, arg2: Input<t.int4>): Output<t.interval, "interval">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.int4 | t.null>): Output<t.interval | t.null, "interval">
  (arg: Input<t.time>): Output<t.interval, "interval">
  (arg: Input<t.time | t.null>): Output<t.interval | t.null, "interval">
}>("interval")

export const interval_accum = defineFunction<"interval_accum", {
  (arg1: Input<t.array<t.interval>>, arg2: Input<t.interval>): Output<t.array<t.interval>, "interval_accum">
  (arg1: Input<t.array<t.interval> | t.null>, arg2: Input<t.interval | t.null>): Output<t.array<t.interval> | t.null, "interval_accum">
}>("interval_accum")

export const interval_accum_inv = defineFunction<"interval_accum_inv", {
  (arg1: Input<t.array<t.interval>>, arg2: Input<t.interval>): Output<t.array<t.interval>, "interval_accum_inv">
  (arg1: Input<t.array<t.interval> | t.null>, arg2: Input<t.interval | t.null>): Output<t.array<t.interval> | t.null, "interval_accum_inv">
}>("interval_accum_inv")

export const interval_avg = defineFunction<"interval_avg", {
  (arg: Input<t.array<t.interval>>): Output<t.interval, "interval_avg">
  (arg: Input<t.array<t.interval> | t.null>): Output<t.interval | t.null, "interval_avg">
}>("interval_avg")

export const interval_cmp = defineFunction<"interval_cmp", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.int4, "interval_cmp">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.int4 | t.null, "interval_cmp">
}>("interval_cmp")

export const interval_combine = defineFunction<"interval_combine", {
  (arg1: Input<t.array<t.interval>>, arg2: Input<t.array<t.interval>>): Output<t.array<t.interval>, "interval_combine">
  (arg1: Input<t.array<t.interval> | t.null>, arg2: Input<t.array<t.interval> | t.null>): Output<t.array<t.interval> | t.null, "interval_combine">
}>("interval_combine")

export const interval_div = defineFunction<"interval_div", {
  (arg1: Input<t.interval>, arg2: Input<t.float8>): Output<t.interval, "interval_div">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.float8 | t.null>): Output<t.interval | t.null, "interval_div">
}>("interval_div")

export const interval_eq = defineFunction<"interval_eq", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_eq">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_eq">
}>("interval_eq")

export const interval_ge = defineFunction<"interval_ge", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_ge">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_ge">
}>("interval_ge")

export const interval_gt = defineFunction<"interval_gt", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_gt">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_gt">
}>("interval_gt")

export const interval_hash = defineFunction<"interval_hash", {
  (arg: Input<t.interval>): Output<t.int4, "interval_hash">
  (arg: Input<t.interval | t.null>): Output<t.int4 | t.null, "interval_hash">
}>("interval_hash")

export const interval_hash_extended = defineFunction<"interval_hash_extended", {
  (arg1: Input<t.interval>, arg2: Input<t.int8>): Output<t.int8, "interval_hash_extended">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "interval_hash_extended">
}>("interval_hash_extended")

export const interval_larger = defineFunction<"interval_larger", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_larger">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "interval_larger">
}>("interval_larger")

export const interval_le = defineFunction<"interval_le", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_le">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_le">
}>("interval_le")

export const interval_lt = defineFunction<"interval_lt", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_lt">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_lt">
}>("interval_lt")

export const interval_mi = defineFunction<"interval_mi", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_mi">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "interval_mi">
}>("interval_mi")

export const interval_mul = defineFunction<"interval_mul", {
  (arg1: Input<t.interval>, arg2: Input<t.float8>): Output<t.interval, "interval_mul">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.float8 | t.null>): Output<t.interval | t.null, "interval_mul">
}>("interval_mul")

export const interval_ne = defineFunction<"interval_ne", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_ne">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.bool | t.null, "interval_ne">
}>("interval_ne")

export const interval_pl = defineFunction<"interval_pl", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_pl">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "interval_pl">
}>("interval_pl")

export const interval_pl_date = defineFunction<"interval_pl_date", {
  (arg1: Input<t.interval>, arg2: Input<t.date>): Output<t.timestamp, "interval_pl_date">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.date | t.null>): Output<t.timestamp | t.null, "interval_pl_date">
}>("interval_pl_date")

export const interval_pl_time = defineFunction<"interval_pl_time", {
  (arg1: Input<t.interval>, arg2: Input<t.time>): Output<t.time, "interval_pl_time">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.time | t.null>): Output<t.time | t.null, "interval_pl_time">
}>("interval_pl_time")

export const interval_pl_timestamp = defineFunction<"interval_pl_timestamp", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamp>): Output<t.timestamp, "interval_pl_timestamp">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.timestamp | t.null, "interval_pl_timestamp">
}>("interval_pl_timestamp")

export const interval_pl_timestamptz = defineFunction<"interval_pl_timestamptz", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "interval_pl_timestamptz">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.timestamptz | t.null, "interval_pl_timestamptz">
}>("interval_pl_timestamptz")

export const interval_pl_timetz = defineFunction<"interval_pl_timetz", {
  (arg1: Input<t.interval>, arg2: Input<t.timetz>): Output<t.timetz, "interval_pl_timetz">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.timetz | t.null>): Output<t.timetz | t.null, "interval_pl_timetz">
}>("interval_pl_timetz")

export const interval_send = defineFunction<"interval_send", {
  (arg: Input<t.interval>): Output<t.bytea, "interval_send">
  (arg: Input<t.interval | t.null>): Output<t.bytea | t.null, "interval_send">
}>("interval_send")

export const interval_smaller = defineFunction<"interval_smaller", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_smaller">
  (arg1: Input<t.interval | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "interval_smaller">
}>("interval_smaller")

export const interval_um = defineFunction<"interval_um", {
  (arg: Input<t.interval>): Output<t.interval, "interval_um">
  (arg: Input<t.interval | t.null>): Output<t.interval | t.null, "interval_um">
}>("interval_um")

export const is_normalized = defineFunction<"is_normalized", {
  (arg1: Input<t.text>, arg2?: Input<t.text>): Output<t.bool, "is_normalized">
  (arg1: Input<t.text | t.null>, arg2?: Input<t.text | t.null>): Output<t.bool | t.null, "is_normalized">
}>("is_normalized")

export const isclosed = defineFunction<"isclosed", {
  (arg: Input<t.path>): Output<t.bool, "isclosed">
  (arg: Input<t.path | t.null>): Output<t.bool | t.null, "isclosed">
}>("isclosed")

export const isfinite = defineFunction<"isfinite", {
  (arg: Input<t.date | t.timestamptz | t.interval | t.timestamp>): Output<t.bool, "isfinite">
  (arg: Input<t.date | t.timestamptz | t.interval | t.timestamp | t.null>): Output<t.bool | t.null, "isfinite">
}>("isfinite")

export const ishorizontal = defineFunction<"ishorizontal", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "ishorizontal">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "ishorizontal">
  (arg: Input<t.lseg | t.line>): Output<t.bool, "ishorizontal">
  (arg: Input<t.lseg | t.line | t.null>): Output<t.bool | t.null, "ishorizontal">
}>("ishorizontal")

export const isopen = defineFunction<"isopen", {
  (arg: Input<t.path>): Output<t.bool, "isopen">
  (arg: Input<t.path | t.null>): Output<t.bool | t.null, "isopen">
}>("isopen")

export const isparallel = defineFunction<"isparallel", {
  (arg1: Input<t.lseg | t.line>, arg2: Input<t.lseg | t.line>): Output<t.bool, "isparallel">
  (arg1: Input<t.lseg | t.line | t.null>, arg2: Input<t.lseg | t.line | t.null>): Output<t.bool | t.null, "isparallel">
}>("isparallel")

export const isperp = defineFunction<"isperp", {
  (arg1: Input<t.lseg | t.line>, arg2: Input<t.lseg | t.line>): Output<t.bool, "isperp">
  (arg1: Input<t.lseg | t.line | t.null>, arg2: Input<t.lseg | t.line | t.null>): Output<t.bool | t.null, "isperp">
}>("isperp")

export const isvertical = defineFunction<"isvertical", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "isvertical">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "isvertical">
  (arg: Input<t.lseg | t.line>): Output<t.bool, "isvertical">
  (arg: Input<t.lseg | t.line | t.null>): Output<t.bool | t.null, "isvertical">
}>("isvertical")

export const json_agg = defineFunction<"json_agg", {
  (arg: Input<t.anyelement>): Output<t.json, "json_agg">
}>("json_agg")

export const json_array_element = defineFunction<"json_array_element", {
  (from_json: Input<t.json>, element_index: Input<t.int4>): Output<t.json, "json_array_element">
  (from_json: Input<t.json | t.null>, element_index: Input<t.int4 | t.null>): Output<t.json | t.null, "json_array_element">
}>("json_array_element")

export const json_array_element_text = defineFunction<"json_array_element_text", {
  (from_json: Input<t.json>, element_index: Input<t.int4>): Output<t.text, "json_array_element_text">
  (from_json: Input<t.json | t.null>, element_index: Input<t.int4 | t.null>): Output<t.text | t.null, "json_array_element_text">
}>("json_array_element_text")

export const json_array_elements = defineFunction<"json_array_elements", {
  (from_json: Input<t.json>): Output<t.json, "json_array_elements">
  (from_json: Input<t.json | t.null>): Output<t.json | t.null, "json_array_elements">
}>("json_array_elements")

export const json_array_elements_text = defineFunction<"json_array_elements_text", {
  (from_json: Input<t.json>): Output<t.text, "json_array_elements_text">
  (from_json: Input<t.json | t.null>): Output<t.text | t.null, "json_array_elements_text">
}>("json_array_elements_text")

export const json_array_length = defineFunction<"json_array_length", {
  (arg: Input<t.json>): Output<t.int4, "json_array_length">
  (arg: Input<t.json | t.null>): Output<t.int4 | t.null, "json_array_length">
}>("json_array_length")

export const json_build_array = defineFunction<"json_build_array", {
  (...args: Input<t.any>[]): Output<t.json, "json_build_array">
  (): Output<t.json, "json_build_array">
}>("json_build_array")

export const json_build_object = defineFunction<"json_build_object", {
  (...args: Input<t.any>[]): Output<t.json, "json_build_object">
  (): Output<t.json, "json_build_object">
}>("json_build_object")

/** 
 * A function for extracting a JSON sub-object at the specified path
 * 
 * @see https://pgpedia.info/j/json_extract_path.html
 */
export const json_extract_path = defineFunction<"json_extract_path", {
  (from_json: Input<t.json>, path_elems: Input<t.array<t.text>>): Output<t.json, "json_extract_path">
  (from_json: Input<t.json | t.null>, path_elems: Input<t.array<t.text> | t.null>): Output<t.json | t.null, "json_extract_path">
}>("json_extract_path")

/** 
 * A function for extracting a JSON sub-object at the specified path as text
 * 
 * @see https://pgpedia.info/j/json_extract_path_text.html
 */
export const json_extract_path_text = defineFunction<"json_extract_path_text", {
  (from_json: Input<t.json>, path_elems: Input<t.array<t.text>>): Output<t.text, "json_extract_path_text">
  (from_json: Input<t.json | t.null>, path_elems: Input<t.array<t.text> | t.null>): Output<t.text | t.null, "json_extract_path_text">
}>("json_extract_path_text")

export const json_object = defineFunction<"json_object", {
  (arg: Input<t.array<t.text>>): Output<t.json, "json_object">
  (arg: Input<t.array<t.text> | t.null>): Output<t.json | t.null, "json_object">
  (arg1: Input<t.array<t.text>>, arg2: Input<t.array<t.text>>): Output<t.json, "json_object">
  (arg1: Input<t.array<t.text> | t.null>, arg2: Input<t.array<t.text> | t.null>): Output<t.json | t.null, "json_object">
}>("json_object")

export const json_object_agg = defineFunction<"json_object_agg", {
  (arg1: Input<t.any>, arg2: Input<t.any>): Output<t.json, "json_object_agg">
}>("json_object_agg")

export const json_object_field = defineFunction<"json_object_field", {
  (from_json: Input<t.json>, field_name: Input<t.text>): Output<t.json, "json_object_field">
  (from_json: Input<t.json | t.null>, field_name: Input<t.text | t.null>): Output<t.json | t.null, "json_object_field">
}>("json_object_field")

export const json_object_field_text = defineFunction<"json_object_field_text", {
  (from_json: Input<t.json>, field_name: Input<t.text>): Output<t.text, "json_object_field_text">
  (from_json: Input<t.json | t.null>, field_name: Input<t.text | t.null>): Output<t.text | t.null, "json_object_field_text">
}>("json_object_field_text")

/** 
 * A function returning the set of keys in the top-level JSON object
 * 
 * @see https://pgpedia.info/j/json_object_keys.html
 */
export const json_object_keys = defineFunction<"json_object_keys", {
  (arg: Input<t.json>): Output<t.text, "json_object_keys">
  (arg: Input<t.json | t.null>): Output<t.text | t.null, "json_object_keys">
}>("json_object_keys")

export const json_populate_record = defineFunction<"json_populate_record", {
  (base: Input<t.anyelement>, from_json: Input<t.json>, use_json_as_text?: Input<t.bool>): Output<t.anyelement, "json_populate_record">
}>("json_populate_record")

/** 
 * A function expanding a JSON object array to a set of rows
 * 
 * @see https://pgpedia.info/j/json_populate_recordset.html
 */
export const json_populate_recordset = defineFunction<"json_populate_recordset", {
  (base: Input<t.anyelement>, from_json: Input<t.json>, use_json_as_text?: Input<t.bool>): Output<t.anyelement, "json_populate_recordset">
}>("json_populate_recordset")

export const json_send = defineFunction<"json_send", {
  (arg: Input<t.json>): Output<t.bytea, "json_send">
  (arg: Input<t.json | t.null>): Output<t.bytea | t.null, "json_send">
}>("json_send")

export const json_strip_nulls = defineFunction<"json_strip_nulls", {
  (arg: Input<t.json>): Output<t.json, "json_strip_nulls">
  (arg: Input<t.json | t.null>): Output<t.json | t.null, "json_strip_nulls">
}>("json_strip_nulls")

export const json_to_tsvector = defineFunction<"json_to_tsvector", {
  (arg1: Input<t.json>, arg2: Input<t.jsonb>): Output<t.tsvector, "json_to_tsvector">
  (arg1: Input<t.json | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.tsvector | t.null, "json_to_tsvector">
}>("json_to_tsvector")

/** 
 * A function returning the type of a json value as a string
 * 
 * @see https://pgpedia.info/j/json_typeof.html
 */
export const json_typeof = defineFunction<"json_typeof", {
  (arg: Input<t.json>): Output<t.text, "json_typeof">
  (arg: Input<t.json | t.null>): Output<t.text | t.null, "json_typeof">
}>("json_typeof")

export const jsonb_agg = defineFunction<"jsonb_agg", {
  (arg: Input<t.anyelement>): Output<t.jsonb, "jsonb_agg">
}>("jsonb_agg")

export const jsonb_array_element = defineFunction<"jsonb_array_element", {
  (from_json: Input<t.jsonb>, element_index: Input<t.int4>): Output<t.jsonb, "jsonb_array_element">
  (from_json: Input<t.jsonb | t.null>, element_index: Input<t.int4 | t.null>): Output<t.jsonb | t.null, "jsonb_array_element">
}>("jsonb_array_element")

export const jsonb_array_element_text = defineFunction<"jsonb_array_element_text", {
  (from_json: Input<t.jsonb>, element_index: Input<t.int4>): Output<t.text, "jsonb_array_element_text">
  (from_json: Input<t.jsonb | t.null>, element_index: Input<t.int4 | t.null>): Output<t.text | t.null, "jsonb_array_element_text">
}>("jsonb_array_element_text")

export const jsonb_array_elements = defineFunction<"jsonb_array_elements", {
  (from_json: Input<t.jsonb>): Output<t.jsonb, "jsonb_array_elements">
  (from_json: Input<t.jsonb | t.null>): Output<t.jsonb | t.null, "jsonb_array_elements">
}>("jsonb_array_elements")

export const jsonb_array_elements_text = defineFunction<"jsonb_array_elements_text", {
  (from_json: Input<t.jsonb>): Output<t.text, "jsonb_array_elements_text">
  (from_json: Input<t.jsonb | t.null>): Output<t.text | t.null, "jsonb_array_elements_text">
}>("jsonb_array_elements_text")

export const jsonb_array_length = defineFunction<"jsonb_array_length", {
  (arg: Input<t.jsonb>): Output<t.int4, "jsonb_array_length">
  (arg: Input<t.jsonb | t.null>): Output<t.int4 | t.null, "jsonb_array_length">
}>("jsonb_array_length")

export const jsonb_build_array = defineFunction<"jsonb_build_array", {
  (...args: Input<t.any>[]): Output<t.jsonb, "jsonb_build_array">
  (): Output<t.jsonb, "jsonb_build_array">
}>("jsonb_build_array")

export const jsonb_build_object = defineFunction<"jsonb_build_object", {
  (...args: Input<t.any>[]): Output<t.jsonb, "jsonb_build_object">
  (): Output<t.jsonb, "jsonb_build_object">
}>("jsonb_build_object")

export const jsonb_cmp = defineFunction<"jsonb_cmp", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.int4, "jsonb_cmp">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.int4 | t.null, "jsonb_cmp">
}>("jsonb_cmp")

export const jsonb_concat = defineFunction<"jsonb_concat", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.jsonb, "jsonb_concat">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.jsonb | t.null, "jsonb_concat">
}>("jsonb_concat")

export const jsonb_contained = defineFunction<"jsonb_contained", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_contained">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_contained">
}>("jsonb_contained")

export const jsonb_contains = defineFunction<"jsonb_contains", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_contains">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_contains">
}>("jsonb_contains")

export const jsonb_delete = defineFunction<"jsonb_delete", {
  (arg1: Input<t.jsonb>, arg2: Input<t.text | t.int4>): Output<t.jsonb, "jsonb_delete">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.text | t.int4 | t.null>): Output<t.jsonb | t.null, "jsonb_delete">
  (from_json: Input<t.jsonb>, path_elems: Input<t.array<t.text>>): Output<t.jsonb, "jsonb_delete">
  (from_json: Input<t.jsonb | t.null>, path_elems: Input<t.array<t.text> | t.null>): Output<t.jsonb | t.null, "jsonb_delete">
}>("jsonb_delete")

export const jsonb_delete_path = defineFunction<"jsonb_delete_path", {
  (arg1: Input<t.jsonb>, arg2: Input<t.array<t.text>>): Output<t.jsonb, "jsonb_delete_path">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.array<t.text> | t.null>): Output<t.jsonb | t.null, "jsonb_delete_path">
}>("jsonb_delete_path")

export const jsonb_eq = defineFunction<"jsonb_eq", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_eq">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_eq">
}>("jsonb_eq")

export const jsonb_exists = defineFunction<"jsonb_exists", {
  (arg1: Input<t.jsonb>, arg2: Input<t.text>): Output<t.bool, "jsonb_exists">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "jsonb_exists">
}>("jsonb_exists")

export const jsonb_exists_all = defineFunction<"jsonb_exists_all", {
  (arg1: Input<t.jsonb>, arg2: Input<t.array<t.text>>): Output<t.bool, "jsonb_exists_all">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.array<t.text> | t.null>): Output<t.bool | t.null, "jsonb_exists_all">
}>("jsonb_exists_all")

export const jsonb_exists_any = defineFunction<"jsonb_exists_any", {
  (arg1: Input<t.jsonb>, arg2: Input<t.array<t.text>>): Output<t.bool, "jsonb_exists_any">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.array<t.text> | t.null>): Output<t.bool | t.null, "jsonb_exists_any">
}>("jsonb_exists_any")

export const jsonb_extract_path = defineFunction<"jsonb_extract_path", {
  (from_json: Input<t.jsonb>, path_elems: Input<t.array<t.text>>): Output<t.jsonb, "jsonb_extract_path">
  (from_json: Input<t.jsonb | t.null>, path_elems: Input<t.array<t.text> | t.null>): Output<t.jsonb | t.null, "jsonb_extract_path">
}>("jsonb_extract_path")

export const jsonb_extract_path_text = defineFunction<"jsonb_extract_path_text", {
  (from_json: Input<t.jsonb>, path_elems: Input<t.array<t.text>>): Output<t.text, "jsonb_extract_path_text">
  (from_json: Input<t.jsonb | t.null>, path_elems: Input<t.array<t.text> | t.null>): Output<t.text | t.null, "jsonb_extract_path_text">
}>("jsonb_extract_path_text")

export const jsonb_ge = defineFunction<"jsonb_ge", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_ge">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_ge">
}>("jsonb_ge")

export const jsonb_gt = defineFunction<"jsonb_gt", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_gt">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_gt">
}>("jsonb_gt")

export const jsonb_hash = defineFunction<"jsonb_hash", {
  (arg: Input<t.jsonb>): Output<t.int4, "jsonb_hash">
  (arg: Input<t.jsonb | t.null>): Output<t.int4 | t.null, "jsonb_hash">
}>("jsonb_hash")

export const jsonb_hash_extended = defineFunction<"jsonb_hash_extended", {
  (arg1: Input<t.jsonb>, arg2: Input<t.int8>): Output<t.int8, "jsonb_hash_extended">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "jsonb_hash_extended">
}>("jsonb_hash_extended")

export const jsonb_insert = defineFunction<"jsonb_insert", {
  (jsonb_in: Input<t.jsonb>, path: Input<t.array<t.text>>, replacement: Input<t.jsonb>, insert_after?: Input<t.bool>): Output<t.jsonb, "jsonb_insert">
  (jsonb_in: Input<t.jsonb | t.null>, path: Input<t.array<t.text> | t.null>, replacement: Input<t.jsonb | t.null>, insert_after?: Input<t.bool | t.null>): Output<t.jsonb | t.null, "jsonb_insert">
}>("jsonb_insert")

export const jsonb_le = defineFunction<"jsonb_le", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_le">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_le">
}>("jsonb_le")

export const jsonb_lt = defineFunction<"jsonb_lt", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_lt">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_lt">
}>("jsonb_lt")

export const jsonb_ne = defineFunction<"jsonb_ne", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_ne">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.bool | t.null, "jsonb_ne">
}>("jsonb_ne")

export const jsonb_object = defineFunction<"jsonb_object", {
  (arg: Input<t.array<t.text>>): Output<t.jsonb, "jsonb_object">
  (arg: Input<t.array<t.text> | t.null>): Output<t.jsonb | t.null, "jsonb_object">
  (arg1: Input<t.array<t.text>>, arg2: Input<t.array<t.text>>): Output<t.jsonb, "jsonb_object">
  (arg1: Input<t.array<t.text> | t.null>, arg2: Input<t.array<t.text> | t.null>): Output<t.jsonb | t.null, "jsonb_object">
}>("jsonb_object")

export const jsonb_object_agg = defineFunction<"jsonb_object_agg", {
  (arg1: Input<t.any>, arg2: Input<t.any>): Output<t.jsonb, "jsonb_object_agg">
}>("jsonb_object_agg")

export const jsonb_object_field = defineFunction<"jsonb_object_field", {
  (from_json: Input<t.jsonb>, field_name: Input<t.text>): Output<t.jsonb, "jsonb_object_field">
  (from_json: Input<t.jsonb | t.null>, field_name: Input<t.text | t.null>): Output<t.jsonb | t.null, "jsonb_object_field">
}>("jsonb_object_field")

export const jsonb_object_field_text = defineFunction<"jsonb_object_field_text", {
  (from_json: Input<t.jsonb>, field_name: Input<t.text>): Output<t.text, "jsonb_object_field_text">
  (from_json: Input<t.jsonb | t.null>, field_name: Input<t.text | t.null>): Output<t.text | t.null, "jsonb_object_field_text">
}>("jsonb_object_field_text")

/** 
 * A function returning the set of keys in the top-level jsonb JSON object
 * 
 * @see https://pgpedia.info/j/jsonb_object_keys.html
 */
export const jsonb_object_keys = defineFunction<"jsonb_object_keys", {
  (arg: Input<t.jsonb>): Output<t.text, "jsonb_object_keys">
  (arg: Input<t.jsonb | t.null>): Output<t.text | t.null, "jsonb_object_keys">
}>("jsonb_object_keys")

export const jsonb_populate_record = defineFunction<"jsonb_populate_record", {
  (arg1: Input<t.anyelement>, arg2: Input<t.jsonb>): Output<t.anyelement, "jsonb_populate_record">
}>("jsonb_populate_record")

export const jsonb_populate_recordset = defineFunction<"jsonb_populate_recordset", {
  (arg1: Input<t.anyelement>, arg2: Input<t.jsonb>): Output<t.anyelement, "jsonb_populate_recordset">
}>("jsonb_populate_recordset")

/** 
 * A function for converting jsonb to formatted text
 * 
 * @see https://pgpedia.info/j/jsonb_pretty.html
 */
export const jsonb_pretty = defineFunction<"jsonb_pretty", {
  (arg: Input<t.jsonb>): Output<t.text, "jsonb_pretty">
  (arg: Input<t.jsonb | t.null>): Output<t.text | t.null, "jsonb_pretty">
}>("jsonb_pretty")

export const jsonb_send = defineFunction<"jsonb_send", {
  (arg: Input<t.jsonb>): Output<t.bytea, "jsonb_send">
  (arg: Input<t.jsonb | t.null>): Output<t.bytea | t.null, "jsonb_send">
}>("jsonb_send")

export const jsonb_set = defineFunction<"jsonb_set", {
  (jsonb_in: Input<t.jsonb>, path: Input<t.array<t.text>>, replacement: Input<t.jsonb>, create_if_missing?: Input<t.bool>): Output<t.jsonb, "jsonb_set">
  (jsonb_in: Input<t.jsonb | t.null>, path: Input<t.array<t.text> | t.null>, replacement: Input<t.jsonb | t.null>, create_if_missing?: Input<t.bool | t.null>): Output<t.jsonb | t.null, "jsonb_set">
}>("jsonb_set")

export const jsonb_set_lax = defineFunction<"jsonb_set_lax", {
  (jsonb_in: Input<t.jsonb>, path: Input<t.array<t.text>>, replacement: Input<t.jsonb>, create_if_missing?: Input<t.bool>, null_value_treatment?: Input<t.text>): Output<t.jsonb, "jsonb_set_lax">
}>("jsonb_set_lax")

export const jsonb_strip_nulls = defineFunction<"jsonb_strip_nulls", {
  (arg: Input<t.jsonb>): Output<t.jsonb, "jsonb_strip_nulls">
  (arg: Input<t.jsonb | t.null>): Output<t.jsonb | t.null, "jsonb_strip_nulls">
}>("jsonb_strip_nulls")

export const jsonb_to_tsvector = defineFunction<"jsonb_to_tsvector", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.tsvector, "jsonb_to_tsvector">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.jsonb | t.null>): Output<t.tsvector | t.null, "jsonb_to_tsvector">
}>("jsonb_to_tsvector")

/** 
 * A function returning the type of a jsonb value as a string
 * 
 * @see https://pgpedia.info/j/jsonb_typeof.html
 */
export const jsonb_typeof = defineFunction<"jsonb_typeof", {
  (arg: Input<t.jsonb>): Output<t.text, "jsonb_typeof">
  (arg: Input<t.jsonb | t.null>): Output<t.text | t.null, "jsonb_typeof">
}>("jsonb_typeof")

/** 
 * A function converting 30 day intervals into months
 * 
 * @see https://pgpedia.info/j/justify_days.html
 */
export const justify_days = defineFunction<"justify_days", {
  (arg: Input<t.interval>): Output<t.interval, "justify_days">
  (arg: Input<t.interval | t.null>): Output<t.interval | t.null, "justify_days">
}>("justify_days")

/** 
 * A function converting 24 hour intervals into days
 * 
 * @see https://pgpedia.info/j/justify_hours.html
 */
export const justify_hours = defineFunction<"justify_hours", {
  (arg: Input<t.interval>): Output<t.interval, "justify_hours">
  (arg: Input<t.interval | t.null>): Output<t.interval | t.null, "justify_hours">
}>("justify_hours")

/** 
 * A function for adjusting days and hours units in an interval
 * 
 * @see https://pgpedia.info/j/justify_interval.html
 */
export const justify_interval = defineFunction<"justify_interval", {
  (arg: Input<t.interval>): Output<t.interval, "justify_interval">
  (arg: Input<t.interval | t.null>): Output<t.interval | t.null, "justify_interval">
}>("justify_interval")

export const lastval = defineFunction<"lastval", {
  (): Output<t.int8, "lastval">
  (): Output<t.int8 | t.null, "lastval">
}>("lastval")

/** 
 * A system function for obtaining the least common multiple
 * 
 * @see https://pgpedia.info/l/lcm-function.html
 */
export const lcm = defineFunction<"lcm", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "lcm">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lcm">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "lcm">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "lcm">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "lcm">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "lcm">
}>("lcm")

/** 
 * A function returning characters from the left of a string
 * 
 * @see https://pgpedia.info/l/left.html
 */
export const left = defineFunction<"left", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "left">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "left">
}>("left")

/** 
 * A function returning the number of elements in the provided parameter
 * 
 * @see https://pgpedia.info/l/length.html
 */
export const length = defineFunction<"length", {
  (arg: Input<t.text | t.bpchar | t.bit | t.bytea | t.tsvector>): Output<t.int4, "length">
  (arg: Input<t.text | t.bpchar | t.bit | t.bytea | t.tsvector | t.null>): Output<t.int4 | t.null, "length">
  (arg: Input<t.lseg | t.path>): Output<t.float8, "length">
  (arg: Input<t.lseg | t.path | t.null>): Output<t.float8 | t.null, "length">
  (arg1: Input<t.bytea>, arg2: Input<t.name>): Output<t.int4, "length">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.name | t.null>): Output<t.int4 | t.null, "length">
}>("length")

export const like = defineFunction<"like", {
  (arg1: Input<t.text | t.name | t.bytea>, arg2: Input<t.text | t.bytea>): Output<t.bool, "like">
  (arg1: Input<t.text | t.name | t.bytea | t.null>, arg2: Input<t.text | t.bytea | t.null>): Output<t.bool | t.null, "like">
}>("like")

export const like_escape = defineFunction<"like_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "like_escape">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "like_escape">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "like_escape">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bytea | t.null, "like_escape">
}>("like_escape")

export const line = defineFunction<"line", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.line, "line">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.line | t.null, "line">
}>("line")

export const line_distance = defineFunction<"line_distance", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.float8, "line_distance">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.float8 | t.null, "line_distance">
}>("line_distance")

export const line_eq = defineFunction<"line_eq", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_eq">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "line_eq">
}>("line_eq")

export const line_horizontal = defineFunction<"line_horizontal", {
  (arg: Input<t.line>): Output<t.bool, "line_horizontal">
  (arg: Input<t.line | t.null>): Output<t.bool | t.null, "line_horizontal">
}>("line_horizontal")

export const line_interpt = defineFunction<"line_interpt", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.point, "line_interpt">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.point | t.null, "line_interpt">
}>("line_interpt")

export const line_intersect = defineFunction<"line_intersect", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_intersect">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "line_intersect">
}>("line_intersect")

export const line_parallel = defineFunction<"line_parallel", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_parallel">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "line_parallel">
}>("line_parallel")

export const line_perp = defineFunction<"line_perp", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_perp">
  (arg1: Input<t.line | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "line_perp">
}>("line_perp")

export const line_send = defineFunction<"line_send", {
  (arg: Input<t.line>): Output<t.bytea, "line_send">
  (arg: Input<t.line | t.null>): Output<t.bytea | t.null, "line_send">
}>("line_send")

export const line_vertical = defineFunction<"line_vertical", {
  (arg: Input<t.line>): Output<t.bool, "line_vertical">
  (arg: Input<t.line | t.null>): Output<t.bool | t.null, "line_vertical">
}>("line_vertical")

export const ln = defineFunction<"ln", {
  (arg: Input<t.float8>): Output<t.float8, "ln">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "ln">
  (arg: Input<t.numeric>): Output<t.numeric, "ln">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "ln">
}>("ln")

export const lo_close = defineFunction<"lo_close", {
  (arg: Input<t.int4>): Output<t.int4, "lo_close">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lo_close">
}>("lo_close")

export const lo_creat = defineFunction<"lo_creat", {
  (arg: Input<t.int4>): Output<t.oid, "lo_creat">
  (arg: Input<t.int4 | t.null>): Output<t.oid | t.null, "lo_creat">
}>("lo_creat")

export const lo_create = defineFunction<"lo_create", {
  (arg: Input<t.oid>): Output<t.oid, "lo_create">
  (arg: Input<t.oid | t.null>): Output<t.oid | t.null, "lo_create">
}>("lo_create")

export const lo_export = defineFunction<"lo_export", {
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.int4, "lo_export">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "lo_export">
}>("lo_export")

/** 
 * A function for creating and populating a large object
 * 
 * @see https://pgpedia.info/l/lo_from_bytea.html
 */
export const lo_from_bytea = defineFunction<"lo_from_bytea", {
  (arg1: Input<t.oid>, arg2: Input<t.bytea>): Output<t.oid, "lo_from_bytea">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.bytea | t.null>): Output<t.oid | t.null, "lo_from_bytea">
}>("lo_from_bytea")

/** 
 * A function for extracting data from a large object
 * 
 * @see https://pgpedia.info/l/lo_get.html
 */
export const lo_get = defineFunction<"lo_get", {
  (arg: Input<t.oid>): Output<t.bytea, "lo_get">
  (arg: Input<t.oid | t.null>): Output<t.bytea | t.null, "lo_get">
  (arg1: Input<t.oid>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.bytea, "lo_get">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "lo_get">
}>("lo_get")

export const lo_import = defineFunction<"lo_import", {
  (arg: Input<t.text>): Output<t.oid, "lo_import">
  (arg: Input<t.text | t.null>): Output<t.oid | t.null, "lo_import">
  (arg1: Input<t.text>, arg2: Input<t.oid>): Output<t.oid, "lo_import">
  (arg1: Input<t.text | t.null>, arg2: Input<t.oid | t.null>): Output<t.oid | t.null, "lo_import">
}>("lo_import")

export const lo_lseek = defineFunction<"lo_lseek", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.int4, "lo_lseek">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lo_lseek">
}>("lo_lseek")

export const lo_lseek64 = defineFunction<"lo_lseek64", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.int8, "lo_lseek64">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.int8 | t.null, "lo_lseek64">
}>("lo_lseek64")

export const lo_open = defineFunction<"lo_open", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.int4, "lo_open">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lo_open">
}>("lo_open")

/** 
 * A function for writing data to a large object
 * 
 * @see https://pgpedia.info/l/lo_put.html
 */
export const lo_put = defineFunction<"lo_put", {
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.bytea | t.null>): Output<t.void, "lo_put">
}>("lo_put")

export const lo_tell = defineFunction<"lo_tell", {
  (arg: Input<t.int4>): Output<t.int4, "lo_tell">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lo_tell">
}>("lo_tell")

export const lo_tell64 = defineFunction<"lo_tell64", {
  (arg: Input<t.int4>): Output<t.int8, "lo_tell64">
  (arg: Input<t.int4 | t.null>): Output<t.int8 | t.null, "lo_tell64">
}>("lo_tell64")

export const lo_truncate = defineFunction<"lo_truncate", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "lo_truncate">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "lo_truncate">
}>("lo_truncate")

export const lo_truncate64 = defineFunction<"lo_truncate64", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int4, "lo_truncate64">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int4 | t.null, "lo_truncate64">
}>("lo_truncate64")

export const lo_unlink = defineFunction<"lo_unlink", {
  (arg: Input<t.oid>): Output<t.int4, "lo_unlink">
  (arg: Input<t.oid | t.null>): Output<t.int4 | t.null, "lo_unlink">
}>("lo_unlink")

export const log = defineFunction<"log", {
  (arg: Input<t.float8>): Output<t.float8, "log">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "log">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "log">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "log">
  (arg: Input<t.numeric>): Output<t.numeric, "log">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "log">
}>("log")

export const log10 = defineFunction<"log10", {
  (arg: Input<t.float8>): Output<t.float8, "log10">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "log10">
  (arg: Input<t.numeric>): Output<t.numeric, "log10">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "log10">
}>("log10")

export const loread = defineFunction<"loread", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bytea, "loread">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bytea | t.null, "loread">
}>("loread")

/** 
 * A system function for converting a string to lower case
 * 
 * @see https://pgpedia.info/l/lower.html
 */
export const lower = defineFunction<"lower", {
  (arg: Input<t.text>): Output<t.text, "lower">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "lower">
}>("lower")

export const lowrite = defineFunction<"lowrite", {
  (arg1: Input<t.int4>, arg2: Input<t.bytea>): Output<t.int4, "lowrite">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.bytea | t.null>): Output<t.int4 | t.null, "lowrite">
}>("lowrite")

/** 
 * A system function for padding the left side of a string
 * 
 * @see https://pgpedia.info/l/lpad.html
 */
export const lpad = defineFunction<"lpad", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.text, "lpad">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "lpad">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "lpad">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "lpad">
}>("lpad")

export const lseg = defineFunction<"lseg", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.lseg, "lseg">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.lseg | t.null, "lseg">
  (arg: Input<t.box>): Output<t.lseg, "lseg">
  (arg: Input<t.box | t.null>): Output<t.lseg | t.null, "lseg">
}>("lseg")

export const lseg_center = defineFunction<"lseg_center", {
  (arg: Input<t.lseg>): Output<t.point, "lseg_center">
  (arg: Input<t.lseg | t.null>): Output<t.point | t.null, "lseg_center">
}>("lseg_center")

export const lseg_distance = defineFunction<"lseg_distance", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.float8, "lseg_distance">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.float8 | t.null, "lseg_distance">
}>("lseg_distance")

export const lseg_eq = defineFunction<"lseg_eq", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_eq">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_eq">
}>("lseg_eq")

export const lseg_ge = defineFunction<"lseg_ge", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_ge">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_ge">
}>("lseg_ge")

export const lseg_gt = defineFunction<"lseg_gt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_gt">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_gt">
}>("lseg_gt")

export const lseg_horizontal = defineFunction<"lseg_horizontal", {
  (arg: Input<t.lseg>): Output<t.bool, "lseg_horizontal">
  (arg: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_horizontal">
}>("lseg_horizontal")

export const lseg_interpt = defineFunction<"lseg_interpt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.point, "lseg_interpt">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.point | t.null, "lseg_interpt">
}>("lseg_interpt")

export const lseg_intersect = defineFunction<"lseg_intersect", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_intersect">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_intersect">
}>("lseg_intersect")

export const lseg_le = defineFunction<"lseg_le", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_le">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_le">
}>("lseg_le")

export const lseg_length = defineFunction<"lseg_length", {
  (arg: Input<t.lseg>): Output<t.float8, "lseg_length">
  (arg: Input<t.lseg | t.null>): Output<t.float8 | t.null, "lseg_length">
}>("lseg_length")

export const lseg_lt = defineFunction<"lseg_lt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_lt">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_lt">
}>("lseg_lt")

export const lseg_ne = defineFunction<"lseg_ne", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_ne">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_ne">
}>("lseg_ne")

export const lseg_parallel = defineFunction<"lseg_parallel", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_parallel">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_parallel">
}>("lseg_parallel")

export const lseg_perp = defineFunction<"lseg_perp", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_perp">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_perp">
}>("lseg_perp")

export const lseg_send = defineFunction<"lseg_send", {
  (arg: Input<t.lseg>): Output<t.bytea, "lseg_send">
  (arg: Input<t.lseg | t.null>): Output<t.bytea | t.null, "lseg_send">
}>("lseg_send")

export const lseg_vertical = defineFunction<"lseg_vertical", {
  (arg: Input<t.lseg>): Output<t.bool, "lseg_vertical">
  (arg: Input<t.lseg | t.null>): Output<t.bool | t.null, "lseg_vertical">
}>("lseg_vertical")

/** 
 * A system function which trims characters from the left side of a string
 * 
 * @see https://pgpedia.info/l/ltrim.html
 */
export const ltrim = defineFunction<"ltrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "ltrim">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "ltrim">
  (arg: Input<t.text>): Output<t.text, "ltrim">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "ltrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "ltrim">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bytea | t.null, "ltrim">
}>("ltrim")

export const macaddr_and = defineFunction<"macaddr_and", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.macaddr, "macaddr_and">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.macaddr | t.null, "macaddr_and">
}>("macaddr_and")

export const macaddr_cmp = defineFunction<"macaddr_cmp", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.int4, "macaddr_cmp">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.int4 | t.null, "macaddr_cmp">
}>("macaddr_cmp")

export const macaddr_eq = defineFunction<"macaddr_eq", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_eq">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_eq">
}>("macaddr_eq")

export const macaddr_ge = defineFunction<"macaddr_ge", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_ge">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_ge">
}>("macaddr_ge")

export const macaddr_gt = defineFunction<"macaddr_gt", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_gt">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_gt">
}>("macaddr_gt")

export const macaddr_le = defineFunction<"macaddr_le", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_le">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_le">
}>("macaddr_le")

export const macaddr_lt = defineFunction<"macaddr_lt", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_lt">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_lt">
}>("macaddr_lt")

export const macaddr_ne = defineFunction<"macaddr_ne", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_ne">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.bool | t.null, "macaddr_ne">
}>("macaddr_ne")

export const macaddr_not = defineFunction<"macaddr_not", {
  (arg: Input<t.macaddr>): Output<t.macaddr, "macaddr_not">
  (arg: Input<t.macaddr | t.null>): Output<t.macaddr | t.null, "macaddr_not">
}>("macaddr_not")

export const macaddr_or = defineFunction<"macaddr_or", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.macaddr, "macaddr_or">
  (arg1: Input<t.macaddr | t.null>, arg2: Input<t.macaddr | t.null>): Output<t.macaddr | t.null, "macaddr_or">
}>("macaddr_or")

export const macaddr_send = defineFunction<"macaddr_send", {
  (arg: Input<t.macaddr>): Output<t.bytea, "macaddr_send">
  (arg: Input<t.macaddr | t.null>): Output<t.bytea | t.null, "macaddr_send">
}>("macaddr_send")

/** 
 * A function for creating a date from individual values
 * 
 * @see https://pgpedia.info/m/make_date.html
 */
export const make_date = defineFunction<"make_date", {
  (year: Input<t.int4>, month: Input<t.int4>, day: Input<t.int4>): Output<t.date, "make_date">
  (year: Input<t.int4 | t.null>, month: Input<t.int4 | t.null>, day: Input<t.int4 | t.null>): Output<t.date | t.null, "make_date">
}>("make_date")

/** 
 * A function creating an interval from individual values
 * 
 * @see https://pgpedia.info/m/make_interval.html
 */
export const make_interval = defineFunction<"make_interval", {
  (years?: Input<t.int4>, months?: Input<t.int4>, weeks?: Input<t.int4>, days?: Input<t.int4>, hours?: Input<t.int4>, mins?: Input<t.int4>, secs?: Input<t.float8>): Output<t.interval, "make_interval">
  (years?: Input<t.int4 | t.null>, months?: Input<t.int4 | t.null>, weeks?: Input<t.int4 | t.null>, days?: Input<t.int4 | t.null>, hours?: Input<t.int4 | t.null>, mins?: Input<t.int4 | t.null>, secs?: Input<t.float8 | t.null>): Output<t.interval | t.null, "make_interval">
}>("make_interval")

/** 
 * A function for creating a time from individual values
 * 
 * @see https://pgpedia.info/m/make_time.html
 */
export const make_time = defineFunction<"make_time", {
  (hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.time, "make_time">
  (hour: Input<t.int4 | t.null>, min: Input<t.int4 | t.null>, sec: Input<t.float8 | t.null>): Output<t.time | t.null, "make_time">
}>("make_time")

/** 
 * A function for creating a timestamp from individual values
 * 
 * @see https://pgpedia.info/m/make_timestamp.html
 */
export const make_timestamp = defineFunction<"make_timestamp", {
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.timestamp, "make_timestamp">
  (year: Input<t.int4 | t.null>, month: Input<t.int4 | t.null>, mday: Input<t.int4 | t.null>, hour: Input<t.int4 | t.null>, min: Input<t.int4 | t.null>, sec: Input<t.float8 | t.null>): Output<t.timestamp | t.null, "make_timestamp">
}>("make_timestamp")

/** 
 * A function for creating a timestamptz from individual values
 * 
 * @see https://pgpedia.info/m/make_timestamptz.html
 */
export const make_timestamptz = defineFunction<"make_timestamptz", {
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.timestamptz, "make_timestamptz">
  (year: Input<t.int4 | t.null>, month: Input<t.int4 | t.null>, mday: Input<t.int4 | t.null>, hour: Input<t.int4 | t.null>, min: Input<t.int4 | t.null>, sec: Input<t.float8 | t.null>): Output<t.timestamptz | t.null, "make_timestamptz">
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>, timezone: Input<t.text>): Output<t.timestamptz, "make_timestamptz">
  (year: Input<t.int4 | t.null>, month: Input<t.int4 | t.null>, mday: Input<t.int4 | t.null>, hour: Input<t.int4 | t.null>, min: Input<t.int4 | t.null>, sec: Input<t.float8 | t.null>, timezone: Input<t.text | t.null>): Output<t.timestamptz | t.null, "make_timestamptz">
}>("make_timestamptz")

export const masklen = defineFunction<"masklen", {
  (arg: Input<t.inet>): Output<t.int4, "masklen">
  (arg: Input<t.inet | t.null>): Output<t.int4 | t.null, "masklen">
}>("masklen")

export const max = defineFunction<"max", {
  (arg: Input<t.int8>): Output<t.int8, "max">
  (arg: Input<t.int4>): Output<t.int4, "max">
  (arg: Input<t.int2>): Output<t.int2, "max">
  (arg: Input<t.oid>): Output<t.oid, "max">
  (arg: Input<t.float4>): Output<t.float4, "max">
  (arg: Input<t.float8>): Output<t.float8, "max">
  (arg: Input<t.date>): Output<t.date, "max">
  (arg: Input<t.time>): Output<t.time, "max">
  (arg: Input<t.timetz>): Output<t.timetz, "max">
  (arg: Input<t.money>): Output<t.money, "max">
  (arg: Input<t.timestamp>): Output<t.timestamp, "max">
  (arg: Input<t.timestamptz>): Output<t.timestamptz, "max">
  (arg: Input<t.interval>): Output<t.interval, "max">
  (arg: Input<t.text>): Output<t.text, "max">
  (arg: Input<t.numeric>): Output<t.numeric, "max">
  <T extends t.anyarray>(arg: Input<T>): Output<T, "max">
  (arg: Input<t.bpchar>): Output<t.bpchar, "max">
  (arg: Input<t.inet>): Output<t.inet, "max">
}>("max")

/** 
 * A function for generating an MD5 hash
 * 
 * @see https://pgpedia.info/m/md5.html
 */
export const md5 = defineFunction<"md5", {
  (arg: Input<t.text | t.bytea>): Output<t.text, "md5">
  (arg: Input<t.text | t.bytea | t.null>): Output<t.text | t.null, "md5">
}>("md5")

export const min = defineFunction<"min", {
  (arg: Input<t.int8>): Output<t.int8, "min">
  (arg: Input<t.int4>): Output<t.int4, "min">
  (arg: Input<t.int2>): Output<t.int2, "min">
  (arg: Input<t.oid>): Output<t.oid, "min">
  (arg: Input<t.float4>): Output<t.float4, "min">
  (arg: Input<t.float8>): Output<t.float8, "min">
  (arg: Input<t.date>): Output<t.date, "min">
  (arg: Input<t.time>): Output<t.time, "min">
  (arg: Input<t.timetz>): Output<t.timetz, "min">
  (arg: Input<t.money>): Output<t.money, "min">
  (arg: Input<t.timestamp>): Output<t.timestamp, "min">
  (arg: Input<t.timestamptz>): Output<t.timestamptz, "min">
  (arg: Input<t.interval>): Output<t.interval, "min">
  (arg: Input<t.text>): Output<t.text, "min">
  (arg: Input<t.numeric>): Output<t.numeric, "min">
  <T extends t.anyarray>(arg: Input<T>): Output<T, "min">
  (arg: Input<t.bpchar>): Output<t.bpchar, "min">
  (arg: Input<t.inet>): Output<t.inet, "min">
}>("min")

/** 
 * A function returning the minimum scale needed to represent a value
 * 
 * @see https://pgpedia.info/m/min_scale.html
 */
export const min_scale = defineFunction<"min_scale", {
  (arg: Input<t.numeric>): Output<t.int4, "min_scale">
  (arg: Input<t.numeric | t.null>): Output<t.int4 | t.null, "min_scale">
}>("min_scale")

export const mod = defineFunction<"mod", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "mod">
  (arg1: Input<t.int2 | t.null>, arg2: Input<t.int2 | t.null>): Output<t.int2 | t.null, "mod">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "mod">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.int4 | t.null, "mod">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "mod">
  (arg1: Input<t.int8 | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "mod">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "mod">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "mod">
}>("mod")

export const money = defineFunction<"money", {
  (arg: Input<t.numeric | t.int4 | t.int8>): Output<t.money, "money">
  (arg: Input<t.numeric | t.int4 | t.int8 | t.null>): Output<t.money | t.null, "money">
}>("money")

export const mul_d_interval = defineFunction<"mul_d_interval", {
  (arg1: Input<t.float8>, arg2: Input<t.interval>): Output<t.interval, "mul_d_interval">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.interval | t.null>): Output<t.interval | t.null, "mul_d_interval">
}>("mul_d_interval")

export const name = defineFunction<"name", {
  (arg: Input<t.text | t.bpchar | t.varchar>): Output<t.name, "name">
  (arg: Input<t.text | t.bpchar | t.varchar | t.null>): Output<t.name | t.null, "name">
}>("name")

export const nameconcatoid = defineFunction<"nameconcatoid", {
  (arg1: Input<t.name>, arg2: Input<t.oid>): Output<t.name, "nameconcatoid">
  (arg1: Input<t.name | t.null>, arg2: Input<t.oid | t.null>): Output<t.name | t.null, "nameconcatoid">
}>("nameconcatoid")

export const nameeq = defineFunction<"nameeq", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "nameeq">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "nameeq">
}>("nameeq")

export const nameeqtext = defineFunction<"nameeqtext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameeqtext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameeqtext">
}>("nameeqtext")

export const namege = defineFunction<"namege", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namege">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "namege">
}>("namege")

export const namegetext = defineFunction<"namegetext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namegetext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namegetext">
}>("namegetext")

export const namegt = defineFunction<"namegt", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namegt">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "namegt">
}>("namegt")

export const namegttext = defineFunction<"namegttext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namegttext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namegttext">
}>("namegttext")

export const nameiclike = defineFunction<"nameiclike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameiclike">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameiclike">
}>("nameiclike")

export const nameicnlike = defineFunction<"nameicnlike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicnlike">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameicnlike">
}>("nameicnlike")

export const nameicregexeq = defineFunction<"nameicregexeq", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicregexeq">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameicregexeq">
}>("nameicregexeq")

export const nameicregexne = defineFunction<"nameicregexne", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicregexne">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameicregexne">
}>("nameicregexne")

export const namele = defineFunction<"namele", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namele">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "namele">
}>("namele")

export const nameletext = defineFunction<"nameletext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameletext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameletext">
}>("nameletext")

export const namelike = defineFunction<"namelike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namelike">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namelike">
}>("namelike")

export const namelt = defineFunction<"namelt", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namelt">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "namelt">
}>("namelt")

export const namelttext = defineFunction<"namelttext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namelttext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namelttext">
}>("namelttext")

export const namene = defineFunction<"namene", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namene">
  (arg1: Input<t.name | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "namene">
}>("namene")

export const namenetext = defineFunction<"namenetext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namenetext">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namenetext">
}>("namenetext")

export const namenlike = defineFunction<"namenlike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namenlike">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "namenlike">
}>("namenlike")

export const nameregexeq = defineFunction<"nameregexeq", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameregexeq">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameregexeq">
}>("nameregexeq")

export const nameregexne = defineFunction<"nameregexne", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameregexne">
  (arg1: Input<t.name | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "nameregexne">
}>("nameregexne")

export const namesend = defineFunction<"namesend", {
  (arg: Input<t.name>): Output<t.bytea, "namesend">
  (arg: Input<t.name | t.null>): Output<t.bytea | t.null, "namesend">
}>("namesend")

export const netmask = defineFunction<"netmask", {
  (arg: Input<t.inet>): Output<t.inet, "netmask">
  (arg: Input<t.inet | t.null>): Output<t.inet | t.null, "netmask">
}>("netmask")

export const network = defineFunction<"network", {
  (arg: Input<t.inet>): Output<t.cidr, "network">
  (arg: Input<t.inet | t.null>): Output<t.cidr | t.null, "network">
}>("network")

export const network_cmp = defineFunction<"network_cmp", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.int4, "network_cmp">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.int4 | t.null, "network_cmp">
}>("network_cmp")

export const network_eq = defineFunction<"network_eq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_eq">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_eq">
}>("network_eq")

export const network_ge = defineFunction<"network_ge", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_ge">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_ge">
}>("network_ge")

export const network_gt = defineFunction<"network_gt", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_gt">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_gt">
}>("network_gt")

export const network_larger = defineFunction<"network_larger", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "network_larger">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.inet | t.null, "network_larger">
}>("network_larger")

export const network_le = defineFunction<"network_le", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_le">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_le">
}>("network_le")

export const network_lt = defineFunction<"network_lt", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_lt">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_lt">
}>("network_lt")

export const network_ne = defineFunction<"network_ne", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_ne">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_ne">
}>("network_ne")

export const network_overlap = defineFunction<"network_overlap", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_overlap">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_overlap">
}>("network_overlap")

export const network_smaller = defineFunction<"network_smaller", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "network_smaller">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.inet | t.null, "network_smaller">
}>("network_smaller")

export const network_sub = defineFunction<"network_sub", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_sub">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_sub">
}>("network_sub")

export const network_subeq = defineFunction<"network_subeq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_subeq">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_subeq">
}>("network_subeq")

export const network_sup = defineFunction<"network_sup", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_sup">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_sup">
}>("network_sup")

export const network_supeq = defineFunction<"network_supeq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_supeq">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.inet | t.null>): Output<t.bool | t.null, "network_supeq">
}>("network_supeq")

export const normalize = defineFunction<"normalize", {
  (arg1: Input<t.text>, arg2?: Input<t.text>): Output<t.text, "normalize">
  (arg1: Input<t.text | t.null>, arg2?: Input<t.text | t.null>): Output<t.text | t.null, "normalize">
}>("normalize")

export const notlike = defineFunction<"notlike", {
  (arg1: Input<t.text | t.name | t.bytea>, arg2: Input<t.text | t.bytea>): Output<t.bool, "notlike">
  (arg1: Input<t.text | t.name | t.bytea | t.null>, arg2: Input<t.text | t.bytea | t.null>): Output<t.bool | t.null, "notlike">
}>("notlike")

export const now = defineFunction<"now", {
  (): Output<t.timestamptz, "now">
  (): Output<t.timestamptz | t.null, "now">
}>("now")

export const npoints = defineFunction<"npoints", {
  (arg: Input<t.path | t.polygon>): Output<t.int4, "npoints">
  (arg: Input<t.path | t.polygon | t.null>): Output<t.int4 | t.null, "npoints">
}>("npoints")

export const ntile = defineFunction<"ntile", {
  (arg: Input<t.int4>): Output<t.int4, "ntile">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "ntile">
}>("ntile")

export const num_nonnulls = defineFunction<"num_nonnulls", {
  (...args: Input<t.any>[]): Output<t.int4, "num_nonnulls">
}>("num_nonnulls")

export const num_nulls = defineFunction<"num_nulls", {
  (...args: Input<t.any>[]): Output<t.int4, "num_nulls">
}>("num_nulls")

/** 
 * A data type for storing numbers with a very large number of digits
 * 
 * @see https://pgpedia.info/n/numeric-data-type
 */
export const numeric = defineFunction<"numeric", {
  (arg: Input<t.money | t.int4 | t.float4 | t.float8 | t.int8 | t.int2 | t.jsonb>): Output<t.numeric, "numeric">
  (arg: Input<t.money | t.int4 | t.float4 | t.float8 | t.int8 | t.int2 | t.jsonb | t.null>): Output<t.numeric | t.null, "numeric">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "numeric">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.int4 | t.null>): Output<t.numeric | t.null, "numeric">
}>("numeric")

export const numeric_abs = defineFunction<"numeric_abs", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_abs">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_abs">
}>("numeric_abs")

export const numeric_add = defineFunction<"numeric_add", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_add">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_add">
}>("numeric_add")

export const numeric_cmp = defineFunction<"numeric_cmp", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.int4, "numeric_cmp">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.int4 | t.null, "numeric_cmp">
}>("numeric_cmp")

export const numeric_div = defineFunction<"numeric_div", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_div">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_div">
}>("numeric_div")

export const numeric_div_trunc = defineFunction<"numeric_div_trunc", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_div_trunc">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_div_trunc">
}>("numeric_div_trunc")

export const numeric_eq = defineFunction<"numeric_eq", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_eq">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_eq">
}>("numeric_eq")

export const numeric_exp = defineFunction<"numeric_exp", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_exp">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_exp">
}>("numeric_exp")

export const numeric_ge = defineFunction<"numeric_ge", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_ge">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_ge">
}>("numeric_ge")

export const numeric_gt = defineFunction<"numeric_gt", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_gt">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_gt">
}>("numeric_gt")

export const numeric_inc = defineFunction<"numeric_inc", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_inc">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_inc">
}>("numeric_inc")

export const numeric_larger = defineFunction<"numeric_larger", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_larger">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_larger">
}>("numeric_larger")

export const numeric_le = defineFunction<"numeric_le", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_le">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_le">
}>("numeric_le")

export const numeric_ln = defineFunction<"numeric_ln", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_ln">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_ln">
}>("numeric_ln")

export const numeric_log = defineFunction<"numeric_log", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_log">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_log">
}>("numeric_log")

export const numeric_lt = defineFunction<"numeric_lt", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_lt">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_lt">
}>("numeric_lt")

export const numeric_mod = defineFunction<"numeric_mod", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_mod">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_mod">
}>("numeric_mod")

export const numeric_mul = defineFunction<"numeric_mul", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_mul">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_mul">
}>("numeric_mul")

export const numeric_ne = defineFunction<"numeric_ne", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_ne">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.bool | t.null, "numeric_ne">
}>("numeric_ne")

export const numeric_power = defineFunction<"numeric_power", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_power">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_power">
}>("numeric_power")

export const numeric_send = defineFunction<"numeric_send", {
  (arg: Input<t.numeric>): Output<t.bytea, "numeric_send">
  (arg: Input<t.numeric | t.null>): Output<t.bytea | t.null, "numeric_send">
}>("numeric_send")

export const numeric_smaller = defineFunction<"numeric_smaller", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_smaller">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_smaller">
}>("numeric_smaller")

export const numeric_sqrt = defineFunction<"numeric_sqrt", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_sqrt">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_sqrt">
}>("numeric_sqrt")

export const numeric_sub = defineFunction<"numeric_sub", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_sub">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_sub">
}>("numeric_sub")

export const numeric_uminus = defineFunction<"numeric_uminus", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_uminus">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_uminus">
}>("numeric_uminus")

export const numeric_uplus = defineFunction<"numeric_uplus", {
  (arg: Input<t.numeric>): Output<t.numeric, "numeric_uplus">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "numeric_uplus">
}>("numeric_uplus")

export const numnode = defineFunction<"numnode", {
  (arg: Input<t.tsquery>): Output<t.int4, "numnode">
  (arg: Input<t.tsquery | t.null>): Output<t.int4 | t.null, "numnode">
}>("numnode")

export const numrange = defineFunction<"numrange", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numrange, "numrange">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.text>): Output<t.numrange, "numrange">
}>("numrange")

export const numrange_subdiff = defineFunction<"numrange_subdiff", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.float8, "numrange_subdiff">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.float8 | t.null, "numrange_subdiff">
}>("numrange_subdiff")

/** 
 * A function returning an object's comment
 * 
 * @see https://pgpedia.info/o/obj_description.html
 */
export const obj_description = defineFunction<"obj_description", {
  (arg: Input<t.oid>): Output<t.text, "obj_description">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "obj_description">
  (arg1: Input<t.oid>, arg2: Input<t.name>): Output<t.text, "obj_description">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.name | t.null>): Output<t.text | t.null, "obj_description">
}>("obj_description")

/** 
 * A function returning the number of bytes in the provided parameter
 * 
 * @see https://pgpedia.info/o/octet_length.html
 */
export const octet_length = defineFunction<"octet_length", {
  (arg: Input<t.bytea | t.text | t.bpchar | t.bit>): Output<t.int4, "octet_length">
  (arg: Input<t.bytea | t.text | t.bpchar | t.bit | t.null>): Output<t.int4 | t.null, "octet_length">
}>("octet_length")

export const oid = defineFunction<"oid", {
  (arg: Input<t.int8>): Output<t.oid, "oid">
  (arg: Input<t.int8 | t.null>): Output<t.oid | t.null, "oid">
}>("oid")

export const oideq = defineFunction<"oideq", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oideq">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oideq">
}>("oideq")

export const oidge = defineFunction<"oidge", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidge">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oidge">
}>("oidge")

export const oidgt = defineFunction<"oidgt", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidgt">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oidgt">
}>("oidgt")

export const oidlarger = defineFunction<"oidlarger", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.oid, "oidlarger">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.oid | t.null, "oidlarger">
}>("oidlarger")

export const oidle = defineFunction<"oidle", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidle">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oidle">
}>("oidle")

export const oidlt = defineFunction<"oidlt", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidlt">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oidlt">
}>("oidlt")

export const oidne = defineFunction<"oidne", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidne">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "oidne">
}>("oidne")

export const oidsend = defineFunction<"oidsend", {
  (arg: Input<t.oid>): Output<t.bytea, "oidsend">
  (arg: Input<t.oid | t.null>): Output<t.bytea | t.null, "oidsend">
}>("oidsend")

export const oidsmaller = defineFunction<"oidsmaller", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.oid, "oidsmaller">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>): Output<t.oid | t.null, "oidsmaller">
}>("oidsmaller")

export const on_pb = defineFunction<"on_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.bool, "on_pb">
  (arg1: Input<t.point | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "on_pb">
}>("on_pb")

export const on_pl = defineFunction<"on_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.bool, "on_pl">
  (arg1: Input<t.point | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "on_pl">
}>("on_pl")

export const on_ppath = defineFunction<"on_ppath", {
  (arg1: Input<t.point>, arg2: Input<t.path>): Output<t.bool, "on_ppath">
  (arg1: Input<t.point | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "on_ppath">
}>("on_ppath")

export const on_ps = defineFunction<"on_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.bool, "on_ps">
  (arg1: Input<t.point | t.null>, arg2: Input<t.lseg | t.null>): Output<t.bool | t.null, "on_ps">
}>("on_ps")

export const on_sb = defineFunction<"on_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.bool, "on_sb">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.box | t.null>): Output<t.bool | t.null, "on_sb">
}>("on_sb")

export const on_sl = defineFunction<"on_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.bool, "on_sl">
  (arg1: Input<t.lseg | t.null>, arg2: Input<t.line | t.null>): Output<t.bool | t.null, "on_sl">
}>("on_sl")

export const overlaps = defineFunction<"overlaps", {
  (arg1: Input<t.timetz | t.timestamptz | t.time | t.timestamp>, arg2: Input<t.timetz | t.timestamptz | t.time | t.timestamp | t.interval>, arg3: Input<t.timetz | t.timestamptz | t.time | t.timestamp>, arg4: Input<t.timetz | t.timestamptz | t.time | t.timestamp | t.interval>): Output<t.bool, "overlaps">
}>("overlaps")

export const overlay = defineFunction<"overlay", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.bytea, "overlay">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>, arg3: Input<t.int4 | t.null>, arg4: Input<t.int4 | t.null>): Output<t.bytea | t.null, "overlay">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>, arg3: Input<t.int4>): Output<t.bytea, "overlay">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "overlay">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.text, "overlay">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.int4 | t.null>, arg4: Input<t.int4 | t.null>): Output<t.text | t.null, "overlay">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>): Output<t.text, "overlay">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.int4 | t.null>): Output<t.text | t.null, "overlay">
  (arg1: Input<t.bit>, arg2: Input<t.bit>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.bit, "overlay">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>, arg3: Input<t.int4 | t.null>, arg4: Input<t.int4 | t.null>): Output<t.bit | t.null, "overlay">
  (arg1: Input<t.bit>, arg2: Input<t.bit>, arg3: Input<t.int4>): Output<t.bit, "overlay">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.bit | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bit | t.null, "overlay">
}>("overlay")

/** 
 * A function for splitting a qualified object name into an array
 * 
 * @see https://pgpedia.info/p/parse_ident.html
 */
export const parse_ident = defineFunction<"parse_ident", {
  (str: Input<t.text>, strict?: Input<t.bool>): Output<t.array<t.text>, "parse_ident">
  (str: Input<t.text | t.null>, strict?: Input<t.bool | t.null>): Output<t.array<t.text> | t.null, "parse_ident">
}>("parse_ident")

export const path = defineFunction<"path", {
  (arg: Input<t.polygon>): Output<t.path, "path">
  (arg: Input<t.polygon | t.null>): Output<t.path | t.null, "path">
}>("path")

export const path_add = defineFunction<"path_add", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.path, "path_add">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.path | t.null, "path_add">
}>("path_add")

export const path_add_pt = defineFunction<"path_add_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_add_pt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.path | t.null, "path_add_pt">
}>("path_add_pt")

export const path_center = defineFunction<"path_center", {
  (arg: Input<t.path>): Output<t.point, "path_center">
  (arg: Input<t.path | t.null>): Output<t.point | t.null, "path_center">
}>("path_center")

export const path_contain_pt = defineFunction<"path_contain_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.bool, "path_contain_pt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "path_contain_pt">
}>("path_contain_pt")

export const path_distance = defineFunction<"path_distance", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.float8, "path_distance">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.float8 | t.null, "path_distance">
}>("path_distance")

export const path_div_pt = defineFunction<"path_div_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_div_pt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.path | t.null, "path_div_pt">
}>("path_div_pt")

export const path_inter = defineFunction<"path_inter", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_inter">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_inter">
}>("path_inter")

export const path_length = defineFunction<"path_length", {
  (arg: Input<t.path>): Output<t.float8, "path_length">
  (arg: Input<t.path | t.null>): Output<t.float8 | t.null, "path_length">
}>("path_length")

export const path_mul_pt = defineFunction<"path_mul_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_mul_pt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.path | t.null, "path_mul_pt">
}>("path_mul_pt")

export const path_n_eq = defineFunction<"path_n_eq", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_eq">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_n_eq">
}>("path_n_eq")

export const path_n_ge = defineFunction<"path_n_ge", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_ge">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_n_ge">
}>("path_n_ge")

export const path_n_gt = defineFunction<"path_n_gt", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_gt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_n_gt">
}>("path_n_gt")

export const path_n_le = defineFunction<"path_n_le", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_le">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_n_le">
}>("path_n_le")

export const path_n_lt = defineFunction<"path_n_lt", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_lt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.path | t.null>): Output<t.bool | t.null, "path_n_lt">
}>("path_n_lt")

export const path_npoints = defineFunction<"path_npoints", {
  (arg: Input<t.path>): Output<t.int4, "path_npoints">
  (arg: Input<t.path | t.null>): Output<t.int4 | t.null, "path_npoints">
}>("path_npoints")

export const path_send = defineFunction<"path_send", {
  (arg: Input<t.path>): Output<t.bytea, "path_send">
  (arg: Input<t.path | t.null>): Output<t.bytea | t.null, "path_send">
}>("path_send")

export const path_sub_pt = defineFunction<"path_sub_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_sub_pt">
  (arg1: Input<t.path | t.null>, arg2: Input<t.point | t.null>): Output<t.path | t.null, "path_sub_pt">
}>("path_sub_pt")

export const pclose = defineFunction<"pclose", {
  (arg: Input<t.path>): Output<t.path, "pclose">
  (arg: Input<t.path | t.null>): Output<t.path | t.null, "pclose">
}>("pclose")

export const percent_rank = defineFunction<"percent_rank", {
  (): Output<t.float8, "percent_rank">
  (...args: Input<t.any>[]): Output<t.float8, "percent_rank">
}>("percent_rank")

export const percentile_cont = defineFunction<"percentile_cont", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "percentile_cont">
  (arg1: Input<t.float8>, arg2: Input<t.interval>): Output<t.interval, "percentile_cont">
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.float8>): Output<t.array<t.float8>, "percentile_cont">
  (arg1: Input<t.array<t.float8>>, arg2: Input<t.interval>): Output<t.array<t.interval>, "percentile_cont">
}>("percentile_cont")

export const pg_advisory_lock = defineFunction<"pg_advisory_lock", {
  (arg: Input<t.int8 | t.null>): Output<t.void, "pg_advisory_lock">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.void, "pg_advisory_lock">
}>("pg_advisory_lock")

export const pg_advisory_lock_shared = defineFunction<"pg_advisory_lock_shared", {
  (arg: Input<t.int8 | t.null>): Output<t.void, "pg_advisory_lock_shared">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.void, "pg_advisory_lock_shared">
}>("pg_advisory_lock_shared")

export const pg_advisory_unlock = defineFunction<"pg_advisory_unlock", {
  (arg: Input<t.int8>): Output<t.bool, "pg_advisory_unlock">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_advisory_unlock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_advisory_unlock">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_advisory_unlock">
}>("pg_advisory_unlock")

export const pg_advisory_unlock_all = defineFunction<"pg_advisory_unlock_all", {
  (): Output<t.void, "pg_advisory_unlock_all">
}>("pg_advisory_unlock_all")

export const pg_advisory_unlock_shared = defineFunction<"pg_advisory_unlock_shared", {
  (arg: Input<t.int8>): Output<t.bool, "pg_advisory_unlock_shared">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_advisory_unlock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_advisory_unlock_shared">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_advisory_unlock_shared">
}>("pg_advisory_unlock_shared")

export const pg_advisory_xact_lock = defineFunction<"pg_advisory_xact_lock", {
  (arg: Input<t.int8 | t.null>): Output<t.void, "pg_advisory_xact_lock">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.void, "pg_advisory_xact_lock">
}>("pg_advisory_xact_lock")

export const pg_advisory_xact_lock_shared = defineFunction<"pg_advisory_xact_lock_shared", {
  (arg: Input<t.int8 | t.null>): Output<t.void, "pg_advisory_xact_lock_shared">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.void, "pg_advisory_xact_lock_shared">
}>("pg_advisory_xact_lock_shared")

/** 
 * A function returning the current backend's PID
 * 
 * @see https://pgpedia.info/p/pg_backend_pid.html
 */
export const pg_backend_pid = defineFunction<"pg_backend_pid", {
  (): Output<t.int4, "pg_backend_pid">
  (): Output<t.int4 | t.null, "pg_backend_pid">
}>("pg_backend_pid")

/** 
 * A function returning the start time of the current exclusive backup
 * 
 * @see https://pgpedia.info/p/pg_backup_start_time.html
 */
export const pg_backup_start_time = defineFunction<"pg_backup_start_time", {
  (): Output<t.timestamptz, "pg_backup_start_time">
  (): Output<t.timestamptz | t.null, "pg_backup_start_time">
}>("pg_backup_start_time")

/** 
 * A function listing the sessions preventing a session from acquiring a lock
 * 
 * @see https://pgpedia.info/p/pg_blocking_pids.html
 */
export const pg_blocking_pids = defineFunction<"pg_blocking_pids", {
  (arg: Input<t.int4>): Output<t.array<t.int4>, "pg_blocking_pids">
  (arg: Input<t.int4 | t.null>): Output<t.array<t.int4> | t.null, "pg_blocking_pids">
}>("pg_blocking_pids")

/** 
 * A function which cancels a backend's current query
 * 
 * @see https://pgpedia.info/p/pg_cancel_backend.html
 */
export const pg_cancel_backend = defineFunction<"pg_cancel_backend", {
  (arg: Input<t.int4>): Output<t.bool, "pg_cancel_backend">
  (arg: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_cancel_backend">
}>("pg_cancel_backend")

/** 
 * A function for converting an encoding name to its internal identifier
 * 
 * @see https://pgpedia.info/p/pg_char_to_encoding.html
 */
export const pg_char_to_encoding = defineFunction<"pg_char_to_encoding", {
  (arg: Input<t.name>): Output<t.int4, "pg_char_to_encoding">
  (arg: Input<t.name | t.null>): Output<t.int4 | t.null, "pg_char_to_encoding">
}>("pg_char_to_encoding")

/** 
 * A function which returns the current client encoding name
 * 
 * @see https://pgpedia.info/p/pg_client_encoding.html
 */
export const pg_client_encoding = defineFunction<"pg_client_encoding", {
  (): Output<t.name, "pg_client_encoding">
  (): Output<t.name | t.null, "pg_client_encoding">
}>("pg_client_encoding")

/** 
 * A function returning the actual version of the collation object
 * 
 * @see https://pgpedia.info/p/pg_collation_actual_version.html
 */
export const pg_collation_actual_version = defineFunction<"pg_collation_actual_version", {
  (arg: Input<t.oid>): Output<t.text, "pg_collation_actual_version">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_collation_actual_version">
}>("pg_collation_actual_version")

export const pg_collation_for = defineFunction<"pg_collation_for", {
  (arg: Input<t.any>): Output<t.text, "pg_collation_for">
}>("pg_collation_for")

/** 
 * A function for determining whether a collation is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_collation_is_visible.html
 */
export const pg_collation_is_visible = defineFunction<"pg_collation_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_collation_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_collation_is_visible">
}>("pg_collation_is_visible")

/** 
 * A function returning the compression algorithm used on a TOAST value
 * 
 * @see https://pgpedia.info/p/pg_column_compression.html
 */
export const pg_column_compression = defineFunction<"pg_column_compression", {
  (arg: Input<t.any>): Output<t.text, "pg_column_compression">
  (arg: Input<t.any | t.null>): Output<t.text | t.null, "pg_column_compression">
}>("pg_column_compression")

/** 
 * A system function for showing the size of data in a table column
 * 
 * @see https://pgpedia.info/p/pg_column_size.html
 */
export const pg_column_size = defineFunction<"pg_column_size", {
  (arg: Input<t.any>): Output<t.int4, "pg_column_size">
  (arg: Input<t.any | t.null>): Output<t.int4 | t.null, "pg_column_size">
}>("pg_column_size")

/** 
 * A system function which shows the last time the configuration was successfully reloaded
 * 
 * @see https://pgpedia.info/p/pg_conf_load_time.html
 */
export const pg_conf_load_time = defineFunction<"pg_conf_load_time", {
  (): Output<t.timestamptz, "pg_conf_load_time">
  (): Output<t.timestamptz | t.null, "pg_conf_load_time">
}>("pg_conf_load_time")

export const pg_conversion_is_visible = defineFunction<"pg_conversion_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_conversion_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_conversion_is_visible">
}>("pg_conversion_is_visible")

/** 
 * A system function for showing the locations of log file(s) currently in use
 * 
 * @see https://pgpedia.info/p/pg_current_logfile.html
 */
export const pg_current_logfile = defineFunction<"pg_current_logfile", {
  (): Output<t.text, "pg_current_logfile">
  (arg: Input<t.text>): Output<t.text, "pg_current_logfile">
}>("pg_current_logfile")

/** 
 * A function returning the size of a database
 * 
 * @see https://pgpedia.info/p/pg_database_size.html
 */
export const pg_database_size = defineFunction<"pg_database_size", {
  (arg: Input<t.oid | t.name>): Output<t.int8, "pg_database_size">
  (arg: Input<t.oid | t.name | t.null>): Output<t.int8 | t.null, "pg_database_size">
}>("pg_database_size")

/** 
 * A function returning a human-readable description of a database object
 * 
 * @see https://pgpedia.info/p/pg_describe_object.html
 */
export const pg_describe_object = defineFunction<"pg_describe_object", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.int4>): Output<t.text, "pg_describe_object">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.oid | t.null>, arg3: Input<t.int4 | t.null>): Output<t.text | t.null, "pg_describe_object">
}>("pg_describe_object")

/** 
 * A function for removing a replication slot
 * 
 * @see https://pgpedia.info/p/pg_drop_replication_slot.html
 */
export const pg_drop_replication_slot = defineFunction<"pg_drop_replication_slot", {
  (arg: Input<t.name | t.null>): Output<t.void, "pg_drop_replication_slot">
}>("pg_drop_replication_slot")

export const pg_encoding_max_length = defineFunction<"pg_encoding_max_length", {
  (arg: Input<t.int4>): Output<t.int4, "pg_encoding_max_length">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "pg_encoding_max_length">
}>("pg_encoding_max_length")

/** 
 * A function for converting an encoding's internal identifier to a name
 * 
 * @see https://pgpedia.info/p/pg_encoding_to_char.html
 */
export const pg_encoding_to_char = defineFunction<"pg_encoding_to_char", {
  (arg: Input<t.int4>): Output<t.name, "pg_encoding_to_char">
  (arg: Input<t.int4 | t.null>): Output<t.name | t.null, "pg_encoding_to_char">
}>("pg_encoding_to_char")

export const pg_event_trigger_table_rewrite_oid = defineFunction<"pg_event_trigger_table_rewrite_oid", {
  (): Output<t.oid, "pg_event_trigger_table_rewrite_oid">
  (): Output<t.oid | t.null, "pg_event_trigger_table_rewrite_oid">
}>("pg_event_trigger_table_rewrite_oid")

export const pg_event_trigger_table_rewrite_reason = defineFunction<"pg_event_trigger_table_rewrite_reason", {
  (): Output<t.int4, "pg_event_trigger_table_rewrite_reason">
  (): Output<t.int4 | t.null, "pg_event_trigger_table_rewrite_reason">
}>("pg_event_trigger_table_rewrite_reason")

export const pg_export_snapshot = defineFunction<"pg_export_snapshot", {
  (): Output<t.text, "pg_export_snapshot">
  (): Output<t.text | t.null, "pg_export_snapshot">
}>("pg_export_snapshot")

/** 
 * A function for determining whether a function is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_function_is_visible.html
 */
export const pg_function_is_visible = defineFunction<"pg_function_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_function_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_function_is_visible">
}>("pg_function_is_visible")

/** 
 * A function returning the definition of a constraint
 * 
 * @see https://pgpedia.info/p/pg_get_constraintdef.html
 */
export const pg_get_constraintdef = defineFunction<"pg_get_constraintdef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_constraintdef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_constraintdef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_constraintdef">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.bool | t.null>): Output<t.text | t.null, "pg_get_constraintdef">
}>("pg_get_constraintdef")

export const pg_get_function_arg_default = defineFunction<"pg_get_function_arg_default", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "pg_get_function_arg_default">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "pg_get_function_arg_default">
}>("pg_get_function_arg_default")

/** 
 * A function for generating a function/procedure argument list
 * 
 * @see https://pgpedia.info/p/pg_get_function_arguments.html
 */
export const pg_get_function_arguments = defineFunction<"pg_get_function_arguments", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_function_arguments">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_function_arguments">
}>("pg_get_function_arguments")

/** 
 * A function for generating a function/procedure argument list
 * 
 * @see https://pgpedia.info/p/pg_get_function_identity_arguments.html
 */
export const pg_get_function_identity_arguments = defineFunction<"pg_get_function_identity_arguments", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_function_identity_arguments">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_function_identity_arguments">
}>("pg_get_function_identity_arguments")

/** 
 * A function generating the RETURNS clause of a function
 * 
 * @see https://pgpedia.info/p/pg_get_function_result.html
 */
export const pg_get_function_result = defineFunction<"pg_get_function_result", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_function_result">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_function_result">
}>("pg_get_function_result")

export const pg_get_function_sqlbody = defineFunction<"pg_get_function_sqlbody", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_function_sqlbody">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_function_sqlbody">
}>("pg_get_function_sqlbody")

/** 
 * A function generating the SQL for recreating a function or a procedure
 * 
 * @see https://pgpedia.info/p/pg_get_functiondef.html
 */
export const pg_get_functiondef = defineFunction<"pg_get_functiondef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_functiondef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_functiondef">
}>("pg_get_functiondef")

/** 
 * A function for generating an index definition
 * 
 * @see https://pgpedia.info/p/pg_get_indexdef.html
 */
export const pg_get_indexdef = defineFunction<"pg_get_indexdef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_indexdef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_indexdef">
  (arg1: Input<t.oid>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.text, "pg_get_indexdef">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.text | t.null, "pg_get_indexdef">
}>("pg_get_indexdef")

export const pg_get_partition_constraintdef = defineFunction<"pg_get_partition_constraintdef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_partition_constraintdef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_partition_constraintdef">
}>("pg_get_partition_constraintdef")

export const pg_get_partkeydef = defineFunction<"pg_get_partkeydef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_partkeydef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_partkeydef">
}>("pg_get_partkeydef")

export const pg_get_publication_tables = defineFunction<"pg_get_publication_tables", {
  (pubname: Input<t.text>): Output<t.oid, "pg_get_publication_tables">
  (pubname: Input<t.text | t.null>): Output<t.oid | t.null, "pg_get_publication_tables">
}>("pg_get_publication_tables")

/** 
 * A function for recreating the command a rule was created with
 * 
 * @see https://pgpedia.info/p/pg_get_ruledef.html
 */
export const pg_get_ruledef = defineFunction<"pg_get_ruledef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_ruledef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_ruledef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_ruledef">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.bool | t.null>): Output<t.text | t.null, "pg_get_ruledef">
}>("pg_get_ruledef")

/** 
 * A system function to determine the name of a sequence used by a column
 * 
 * @see https://pgpedia.info/p/pg_get_serial_sequence.html
 */
export const pg_get_serial_sequence = defineFunction<"pg_get_serial_sequence", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "pg_get_serial_sequence">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "pg_get_serial_sequence">
}>("pg_get_serial_sequence")

export const pg_get_statisticsobjdef = defineFunction<"pg_get_statisticsobjdef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_statisticsobjdef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_statisticsobjdef">
}>("pg_get_statisticsobjdef")

export const pg_get_statisticsobjdef_columns = defineFunction<"pg_get_statisticsobjdef_columns", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_statisticsobjdef_columns">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_statisticsobjdef_columns">
}>("pg_get_statisticsobjdef_columns")

export const pg_get_statisticsobjdef_expressions = defineFunction<"pg_get_statisticsobjdef_expressions", {
  (arg: Input<t.oid>): Output<t.array<t.text>, "pg_get_statisticsobjdef_expressions">
  (arg: Input<t.oid | t.null>): Output<t.array<t.text> | t.null, "pg_get_statisticsobjdef_expressions">
}>("pg_get_statisticsobjdef_expressions")

export const pg_get_triggerdef = defineFunction<"pg_get_triggerdef", {
  (arg: Input<t.oid>): Output<t.text, "pg_get_triggerdef">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_get_triggerdef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_triggerdef">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.bool | t.null>): Output<t.text | t.null, "pg_get_triggerdef">
}>("pg_get_triggerdef")

/** 
 * A function returning a role's name from its OID
 * 
 * @see https://pgpedia.info/p/pg_get_userbyid.html
 */
export const pg_get_userbyid = defineFunction<"pg_get_userbyid", {
  (arg: Input<t.oid>): Output<t.name, "pg_get_userbyid">
  (arg: Input<t.oid | t.null>): Output<t.name | t.null, "pg_get_userbyid">
}>("pg_get_userbyid")

export const pg_get_viewdef = defineFunction<"pg_get_viewdef", {
  (arg: Input<t.text | t.oid>): Output<t.text, "pg_get_viewdef">
  (arg: Input<t.text | t.oid | t.null>): Output<t.text | t.null, "pg_get_viewdef">
  (arg1: Input<t.text | t.oid>, arg2: Input<t.bool | t.int4>): Output<t.text, "pg_get_viewdef">
  (arg1: Input<t.text | t.oid | t.null>, arg2: Input<t.bool | t.int4 | t.null>): Output<t.text | t.null, "pg_get_viewdef">
}>("pg_get_viewdef")

/** 
 * A function returning the recovery pause state
 * 
 * @see https://pgpedia.info/p/pg_get_wal_replay_pause_state.html
 */
export const pg_get_wal_replay_pause_state = defineFunction<"pg_get_wal_replay_pause_state", {
  (): Output<t.text, "pg_get_wal_replay_pause_state">
  (): Output<t.text | t.null, "pg_get_wal_replay_pause_state">
}>("pg_get_wal_replay_pause_state")

/** 
 * A function determining whether a user is a member of a particular role
 * 
 * @see https://pgpedia.info/p/pg_has_role.html
 */
export const pg_has_role = defineFunction<"pg_has_role", {
  (arg1: Input<t.name | t.oid>, arg2: Input<t.name | t.oid>, arg3: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.name | t.oid | t.null>, arg3: Input<t.text | t.null>): Output<t.bool | t.null, "pg_has_role">
  (arg1: Input<t.name | t.oid>, arg2: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.name | t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "pg_has_role">
}>("pg_has_role")

export const pg_indexam_has_property = defineFunction<"pg_indexam_has_property", {
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "pg_indexam_has_property">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "pg_indexam_has_property">
}>("pg_indexam_has_property")

export const pg_indexam_progress_phasename = defineFunction<"pg_indexam_progress_phasename", {
  (arg1: Input<t.oid>, arg2: Input<t.int8>): Output<t.text, "pg_indexam_progress_phasename">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.int8 | t.null>): Output<t.text | t.null, "pg_indexam_progress_phasename">
}>("pg_indexam_progress_phasename")

/** 
 * A function determining whether an exclusive backup is in progress
 * 
 * @see https://pgpedia.info/p/pg_is_in_backup.html
 */
export const pg_is_in_backup = defineFunction<"pg_is_in_backup", {
  (): Output<t.bool, "pg_is_in_backup">
  (): Output<t.bool | t.null, "pg_is_in_backup">
}>("pg_is_in_backup")

/** 
 * A system function for retrieving the recovery status of an instance
 * 
 * @see https://pgpedia.info/p/pg_is_in_recovery.html
 */
export const pg_is_in_recovery = defineFunction<"pg_is_in_recovery", {
  (): Output<t.bool, "pg_is_in_recovery">
  (): Output<t.bool | t.null, "pg_is_in_recovery">
}>("pg_is_in_recovery")

/** 
 * A function determining whether an OID is that of another session's temporary schema
 * 
 * @see https://pgpedia.info/p/pg_is_other_temp_schema.html
 */
export const pg_is_other_temp_schema = defineFunction<"pg_is_other_temp_schema", {
  (arg: Input<t.oid>): Output<t.bool, "pg_is_other_temp_schema">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_is_other_temp_schema">
}>("pg_is_other_temp_schema")

/** 
 * A function indicating whether recovery pause is requested.
 * 
 * @see https://pgpedia.info/p/pg_is_wal_replay_paused.html
 */
export const pg_is_wal_replay_paused = defineFunction<"pg_is_wal_replay_paused", {
  (): Output<t.bool, "pg_is_wal_replay_paused">
  (): Output<t.bool | t.null, "pg_is_wal_replay_paused">
}>("pg_is_wal_replay_paused")

export const pg_isolation_test_session_is_blocked = defineFunction<"pg_isolation_test_session_is_blocked", {
  (arg1: Input<t.int4>, arg2: Input<t.array<t.int4>>): Output<t.bool, "pg_isolation_test_session_is_blocked">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.array<t.int4> | t.null>): Output<t.bool | t.null, "pg_isolation_test_session_is_blocked">
}>("pg_isolation_test_session_is_blocked")

/** 
 * A function determining whether JIT is available
 * 
 * @see https://pgpedia.info/p/pg_jit_available.html
 */
export const pg_jit_available = defineFunction<"pg_jit_available", {
  (): Output<t.bool, "pg_jit_available">
  (): Output<t.bool | t.null, "pg_jit_available">
}>("pg_jit_available")

export const pg_last_xact_replay_timestamp = defineFunction<"pg_last_xact_replay_timestamp", {
  (): Output<t.timestamptz, "pg_last_xact_replay_timestamp">
  (): Output<t.timestamptz | t.null, "pg_last_xact_replay_timestamp">
}>("pg_last_xact_replay_timestamp")

/** 
 * A function listing current notification channels
 * 
 * @see https://pgpedia.info/p/pg_listening_channels.html
 */
export const pg_listening_channels = defineFunction<"pg_listening_channels", {
  (): Output<t.text, "pg_listening_channels">
  (): Output<t.text | t.null, "pg_listening_channels">
}>("pg_listening_channels")

/** 
 * A function for logging the memory contexts of the specified backed
 * 
 * @see https://pgpedia.info/p/pg_log_backend_memory_contexts.html
 */
export const pg_log_backend_memory_contexts = defineFunction<"pg_log_backend_memory_contexts", {
  (arg: Input<t.int4>): Output<t.bool, "pg_log_backend_memory_contexts">
  (arg: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_log_backend_memory_contexts">
}>("pg_log_backend_memory_contexts")

/** 
 * A function for examining the contents of a directory
 * 
 * @see https://pgpedia.info/p/pg_ls_dir.html
 */
export const pg_ls_dir = defineFunction<"pg_ls_dir", {
  (arg: Input<t.text>): Output<t.text, "pg_ls_dir">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "pg_ls_dir">
  (arg1: Input<t.text>, arg2: Input<t.bool>, arg3: Input<t.bool>): Output<t.text, "pg_ls_dir">
  (arg1: Input<t.text | t.null>, arg2: Input<t.bool | t.null>, arg3: Input<t.bool | t.null>): Output<t.text | t.null, "pg_ls_dir">
}>("pg_ls_dir")

/** 
 * A function returning the OID of the session's temporary schema
 * 
 * @see https://pgpedia.info/p/pg_my_temp_schema.html
 */
export const pg_my_temp_schema = defineFunction<"pg_my_temp_schema", {
  (): Output<t.oid, "pg_my_temp_schema">
  (): Output<t.oid | t.null, "pg_my_temp_schema">
}>("pg_my_temp_schema")

/** 
 * A function reporting how full the asynchronous notification queue is
 * 
 * @see https://pgpedia.info/p/pg_notification_queue_usage.html
 */
export const pg_notification_queue_usage = defineFunction<"pg_notification_queue_usage", {
  (): Output<t.float8, "pg_notification_queue_usage">
  (): Output<t.float8 | t.null, "pg_notification_queue_usage">
}>("pg_notification_queue_usage")

/** 
 * A function for sending notifications to other sessions
 * 
 * @see https://pgpedia.info/p/pg_notify.html
 */
export const pg_notify = defineFunction<"pg_notify", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.void, "pg_notify">
}>("pg_notify")

export const pg_opclass_is_visible = defineFunction<"pg_opclass_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_opclass_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_opclass_is_visible">
}>("pg_opclass_is_visible")

/** 
 * A function for determining whether an operator is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_operator_is_visible.html
 */
export const pg_operator_is_visible = defineFunction<"pg_operator_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_operator_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_operator_is_visible">
}>("pg_operator_is_visible")

export const pg_opfamily_is_visible = defineFunction<"pg_opfamily_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_opfamily_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_opfamily_is_visible">
}>("pg_opfamily_is_visible")

/** 
 * A function returning the start time of the main server process
 * 
 * @see https://pgpedia.info/p/pg_postmaster_start_time.html
 */
export const pg_postmaster_start_time = defineFunction<"pg_postmaster_start_time", {
  (): Output<t.timestamptz, "pg_postmaster_start_time">
  (): Output<t.timestamptz | t.null, "pg_postmaster_start_time">
}>("pg_postmaster_start_time")

/** 
 * Function to promote a physical standby server
 * 
 * @see https://pgpedia.info/p/pg_promote.html
 */
export const pg_promote = defineFunction<"pg_promote", {
  (wait?: Input<t.bool>, wait_seconds?: Input<t.int4>): Output<t.bool, "pg_promote">
  (wait?: Input<t.bool | t.null>, wait_seconds?: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_promote">
}>("pg_promote")

/** 
 * A system function for reading the contents of a binary file
 * 
 * @see https://pgpedia.info/p/pg_read_binary_file.html
 */
export const pg_read_binary_file = defineFunction<"pg_read_binary_file", {
  (arg: Input<t.text>): Output<t.bytea, "pg_read_binary_file">
  (arg: Input<t.text | t.null>): Output<t.bytea | t.null, "pg_read_binary_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>, arg4: Input<t.bool>): Output<t.bytea, "pg_read_binary_file">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>, arg4: Input<t.bool | t.null>): Output<t.bytea | t.null, "pg_read_binary_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.bytea, "pg_read_binary_file">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>): Output<t.bytea | t.null, "pg_read_binary_file">
}>("pg_read_binary_file")

/** 
 * A function for reading the contents of a text file
 * 
 * @see https://pgpedia.info/p/pg_read_file.html
 */
export const pg_read_file = defineFunction<"pg_read_file", {
  (arg: Input<t.text>): Output<t.text, "pg_read_file">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "pg_read_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.text, "pg_read_file">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>): Output<t.text | t.null, "pg_read_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>, arg4: Input<t.bool>): Output<t.text, "pg_read_file">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>, arg4: Input<t.bool | t.null>): Output<t.text | t.null, "pg_read_file">
}>("pg_read_file")

export const pg_read_file_old = defineFunction<"pg_read_file_old", {
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.text, "pg_read_file_old">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int8 | t.null>): Output<t.text | t.null, "pg_read_file_old">
}>("pg_read_file_old")

/** 
 * A system function which instructs PostgreSQL to reload its configuration
 * 
 * @see https://pgpedia.info/p/pg_reload_conf.html
 */
export const pg_reload_conf = defineFunction<"pg_reload_conf", {
  (): Output<t.bool, "pg_reload_conf">
  (): Output<t.bool | t.null, "pg_reload_conf">
}>("pg_reload_conf")

/** 
 * A function for creating a replication origin
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_create.html
 */
export const pg_replication_origin_create = defineFunction<"pg_replication_origin_create", {
  (arg: Input<t.text>): Output<t.oid, "pg_replication_origin_create">
  (arg: Input<t.text | t.null>): Output<t.oid | t.null, "pg_replication_origin_create">
}>("pg_replication_origin_create")

/** 
 * A function for removing a replication origin
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_drop.html
 */
export const pg_replication_origin_drop = defineFunction<"pg_replication_origin_drop", {
  (arg: Input<t.text | t.null>): Output<t.void, "pg_replication_origin_drop">
}>("pg_replication_origin_drop")

/** 
 * A function for querying a replication origin's OID
 * 
 * @see https://pgpedia.info/p/pg_replication_origin_oid.html
 */
export const pg_replication_origin_oid = defineFunction<"pg_replication_origin_oid", {
  (arg: Input<t.text>): Output<t.oid, "pg_replication_origin_oid">
  (arg: Input<t.text | t.null>): Output<t.oid | t.null, "pg_replication_origin_oid">
}>("pg_replication_origin_oid")

/** 
 * A function indicating whether a replication origin has been selected
 * 
 * @see https://pgpedia.info/p/pg_replication_session_origin_is_setup.html
 */
export const pg_replication_origin_session_is_setup = defineFunction<"pg_replication_origin_session_is_setup", {
  (): Output<t.bool, "pg_replication_origin_session_is_setup">
  (): Output<t.bool | t.null, "pg_replication_origin_session_is_setup">
}>("pg_replication_origin_session_is_setup")

export const pg_replication_origin_session_reset = defineFunction<"pg_replication_origin_session_reset", {
  (): Output<t.void, "pg_replication_origin_session_reset">
}>("pg_replication_origin_session_reset")

export const pg_replication_origin_session_setup = defineFunction<"pg_replication_origin_session_setup", {
  (arg: Input<t.text | t.null>): Output<t.void, "pg_replication_origin_session_setup">
}>("pg_replication_origin_session_setup")

export const pg_replication_origin_xact_reset = defineFunction<"pg_replication_origin_xact_reset", {
  (): Output<t.void, "pg_replication_origin_xact_reset">
}>("pg_replication_origin_xact_reset")

/** 
 * A system function for rotating the current logfile
 * 
 * @see https://pgpedia.info/p/pg_rotate_logfile.html
 */
export const pg_rotate_logfile = defineFunction<"pg_rotate_logfile", {
  (): Output<t.bool, "pg_rotate_logfile">
  (): Output<t.bool | t.null, "pg_rotate_logfile">
}>("pg_rotate_logfile")

export const pg_rotate_logfile_old = defineFunction<"pg_rotate_logfile_old", {
  (): Output<t.bool, "pg_rotate_logfile_old">
  (): Output<t.bool | t.null, "pg_rotate_logfile_old">
}>("pg_rotate_logfile_old")

export const pg_safe_snapshot_blocking_pids = defineFunction<"pg_safe_snapshot_blocking_pids", {
  (arg: Input<t.int4>): Output<t.array<t.int4>, "pg_safe_snapshot_blocking_pids">
  (arg: Input<t.int4 | t.null>): Output<t.array<t.int4> | t.null, "pg_safe_snapshot_blocking_pids">
}>("pg_safe_snapshot_blocking_pids")

/** 
 * A function for converting human-readable  data sizes into bytes
 * 
 * @see https://pgpedia.info/p/pg_size_bytes.html
 */
export const pg_size_bytes = defineFunction<"pg_size_bytes", {
  (arg: Input<t.text>): Output<t.int8, "pg_size_bytes">
  (arg: Input<t.text | t.null>): Output<t.int8 | t.null, "pg_size_bytes">
}>("pg_size_bytes")

/** 
 * A function for displaying sizes in bytes in human-readable format
 * 
 * @see https://pgpedia.info/p/pg_size_pretty.html
 */
export const pg_size_pretty = defineFunction<"pg_size_pretty", {
  (arg: Input<t.int8 | t.numeric>): Output<t.text, "pg_size_pretty">
  (arg: Input<t.int8 | t.numeric | t.null>): Output<t.text | t.null, "pg_size_pretty">
}>("pg_size_pretty")

/** 
 * A system function for sleeping for the specified number of seconds
 * 
 * @see https://pgpedia.info/p/pg_sleep.html
 */
export const pg_sleep = defineFunction<"pg_sleep", {
  (arg: Input<t.float8 | t.null>): Output<t.void, "pg_sleep">
}>("pg_sleep")

/** 
 * A system function for sleeping for the specified interval
 * 
 * @see https://pgpedia.info/p/pg_sleep_for.html
 */
export const pg_sleep_for = defineFunction<"pg_sleep_for", {
  (arg: Input<t.interval | t.null>): Output<t.void, "pg_sleep_for">
}>("pg_sleep_for")

/** 
 * A system function for sleeping until the specified time
 * 
 * @see https://pgpedia.info/p/pg_sleep_until.html
 */
export const pg_sleep_until = defineFunction<"pg_sleep_until", {
  (arg: Input<t.timestamptz | t.null>): Output<t.void, "pg_sleep_until">
}>("pg_sleep_until")

export const pg_stat_clear_snapshot = defineFunction<"pg_stat_clear_snapshot", {
  (): Output<t.void, "pg_stat_clear_snapshot">
}>("pg_stat_clear_snapshot")

export const pg_stat_get_analyze_count = defineFunction<"pg_stat_get_analyze_count", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_analyze_count">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_analyze_count">
}>("pg_stat_get_analyze_count")

export const pg_stat_get_autoanalyze_count = defineFunction<"pg_stat_get_autoanalyze_count", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_autoanalyze_count">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_autoanalyze_count">
}>("pg_stat_get_autoanalyze_count")

export const pg_stat_get_autovacuum_count = defineFunction<"pg_stat_get_autovacuum_count", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_autovacuum_count">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_autovacuum_count">
}>("pg_stat_get_autovacuum_count")

/** 
 * A function reporting a backend's most recent query
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_activity.html
 */
export const pg_stat_get_backend_activity = defineFunction<"pg_stat_get_backend_activity", {
  (arg: Input<t.int4>): Output<t.text, "pg_stat_get_backend_activity">
  (arg: Input<t.int4 | t.null>): Output<t.text | t.null, "pg_stat_get_backend_activity">
}>("pg_stat_get_backend_activity")

/** 
 * A function reporting the time a backend's most recent query was started.
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_activity_start.html
 */
export const pg_stat_get_backend_activity_start = defineFunction<"pg_stat_get_backend_activity_start", {
  (arg: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_activity_start">
  (arg: Input<t.int4 | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_backend_activity_start">
}>("pg_stat_get_backend_activity_start")

/** 
 * A function reporting a backend's client address
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_client_addr.html
 */
export const pg_stat_get_backend_client_addr = defineFunction<"pg_stat_get_backend_client_addr", {
  (arg: Input<t.int4>): Output<t.inet, "pg_stat_get_backend_client_addr">
  (arg: Input<t.int4 | t.null>): Output<t.inet | t.null, "pg_stat_get_backend_client_addr">
}>("pg_stat_get_backend_client_addr")

/** 
 * A function reporting a backend's client port
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_client_port.html
 */
export const pg_stat_get_backend_client_port = defineFunction<"pg_stat_get_backend_client_port", {
  (arg: Input<t.int4>): Output<t.int4, "pg_stat_get_backend_client_port">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "pg_stat_get_backend_client_port">
}>("pg_stat_get_backend_client_port")

/** 
 * A function reporting a backend's database OID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_dbid.html
 */
export const pg_stat_get_backend_dbid = defineFunction<"pg_stat_get_backend_dbid", {
  (arg: Input<t.int4>): Output<t.oid, "pg_stat_get_backend_dbid">
  (arg: Input<t.int4 | t.null>): Output<t.oid | t.null, "pg_stat_get_backend_dbid">
}>("pg_stat_get_backend_dbid")

/** 
 * A function providing a sequential IDs for each backend
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_idset.html
 */
export const pg_stat_get_backend_idset = defineFunction<"pg_stat_get_backend_idset", {
  (): Output<t.int4, "pg_stat_get_backend_idset">
  (): Output<t.int4 | t.null, "pg_stat_get_backend_idset">
}>("pg_stat_get_backend_idset")

/** 
 * A function reporting a backend's PID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_pid.html
 */
export const pg_stat_get_backend_pid = defineFunction<"pg_stat_get_backend_pid", {
  (arg: Input<t.int4>): Output<t.int4, "pg_stat_get_backend_pid">
  (arg: Input<t.int4 | t.null>): Output<t.int4 | t.null, "pg_stat_get_backend_pid">
}>("pg_stat_get_backend_pid")

/** 
 * A function reporting a when a backend started
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_start.html
 */
export const pg_stat_get_backend_start = defineFunction<"pg_stat_get_backend_start", {
  (arg: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_start">
  (arg: Input<t.int4 | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_backend_start">
}>("pg_stat_get_backend_start")

/** 
 * A function reporting a backend's user OID
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_userid.html
 */
export const pg_stat_get_backend_userid = defineFunction<"pg_stat_get_backend_userid", {
  (arg: Input<t.int4>): Output<t.oid, "pg_stat_get_backend_userid">
  (arg: Input<t.int4 | t.null>): Output<t.oid | t.null, "pg_stat_get_backend_userid">
}>("pg_stat_get_backend_userid")

/** 
 * A function returning a backend's wait event name
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event.html
 */
export const pg_stat_get_backend_wait_event = defineFunction<"pg_stat_get_backend_wait_event", {
  (arg: Input<t.int4>): Output<t.text, "pg_stat_get_backend_wait_event">
  (arg: Input<t.int4 | t.null>): Output<t.text | t.null, "pg_stat_get_backend_wait_event">
}>("pg_stat_get_backend_wait_event")

/** 
 * A function a backend's wait event type
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_wait_event_type.html
 */
export const pg_stat_get_backend_wait_event_type = defineFunction<"pg_stat_get_backend_wait_event_type", {
  (arg: Input<t.int4>): Output<t.text, "pg_stat_get_backend_wait_event_type">
  (arg: Input<t.int4 | t.null>): Output<t.text | t.null, "pg_stat_get_backend_wait_event_type">
}>("pg_stat_get_backend_wait_event_type")

/** 
 * A function returning the backend's current transaction start time
 * 
 * @see https://pgpedia.info/p/pg_stat_get_backend_xact_start.html
 */
export const pg_stat_get_backend_xact_start = defineFunction<"pg_stat_get_backend_xact_start", {
  (arg: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_xact_start">
  (arg: Input<t.int4 | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_backend_xact_start">
}>("pg_stat_get_backend_xact_start")

export const pg_stat_get_bgwriter_buf_written_checkpoints = defineFunction<"pg_stat_get_bgwriter_buf_written_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_buf_written_checkpoints">
  (): Output<t.int8 | t.null, "pg_stat_get_bgwriter_buf_written_checkpoints">
}>("pg_stat_get_bgwriter_buf_written_checkpoints")

export const pg_stat_get_bgwriter_buf_written_clean = defineFunction<"pg_stat_get_bgwriter_buf_written_clean", {
  (): Output<t.int8, "pg_stat_get_bgwriter_buf_written_clean">
  (): Output<t.int8 | t.null, "pg_stat_get_bgwriter_buf_written_clean">
}>("pg_stat_get_bgwriter_buf_written_clean")

export const pg_stat_get_bgwriter_maxwritten_clean = defineFunction<"pg_stat_get_bgwriter_maxwritten_clean", {
  (): Output<t.int8, "pg_stat_get_bgwriter_maxwritten_clean">
  (): Output<t.int8 | t.null, "pg_stat_get_bgwriter_maxwritten_clean">
}>("pg_stat_get_bgwriter_maxwritten_clean")

export const pg_stat_get_bgwriter_requested_checkpoints = defineFunction<"pg_stat_get_bgwriter_requested_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_requested_checkpoints">
  (): Output<t.int8 | t.null, "pg_stat_get_bgwriter_requested_checkpoints">
}>("pg_stat_get_bgwriter_requested_checkpoints")

export const pg_stat_get_bgwriter_stat_reset_time = defineFunction<"pg_stat_get_bgwriter_stat_reset_time", {
  (): Output<t.timestamptz, "pg_stat_get_bgwriter_stat_reset_time">
  (): Output<t.timestamptz | t.null, "pg_stat_get_bgwriter_stat_reset_time">
}>("pg_stat_get_bgwriter_stat_reset_time")

export const pg_stat_get_bgwriter_timed_checkpoints = defineFunction<"pg_stat_get_bgwriter_timed_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_timed_checkpoints">
  (): Output<t.int8 | t.null, "pg_stat_get_bgwriter_timed_checkpoints">
}>("pg_stat_get_bgwriter_timed_checkpoints")

export const pg_stat_get_blocks_fetched = defineFunction<"pg_stat_get_blocks_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_blocks_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_blocks_fetched">
}>("pg_stat_get_blocks_fetched")

export const pg_stat_get_blocks_hit = defineFunction<"pg_stat_get_blocks_hit", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_blocks_hit">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_blocks_hit">
}>("pg_stat_get_blocks_hit")

export const pg_stat_get_buf_alloc = defineFunction<"pg_stat_get_buf_alloc", {
  (): Output<t.int8, "pg_stat_get_buf_alloc">
  (): Output<t.int8 | t.null, "pg_stat_get_buf_alloc">
}>("pg_stat_get_buf_alloc")

export const pg_stat_get_buf_fsync_backend = defineFunction<"pg_stat_get_buf_fsync_backend", {
  (): Output<t.int8, "pg_stat_get_buf_fsync_backend">
  (): Output<t.int8 | t.null, "pg_stat_get_buf_fsync_backend">
}>("pg_stat_get_buf_fsync_backend")

export const pg_stat_get_buf_written_backend = defineFunction<"pg_stat_get_buf_written_backend", {
  (): Output<t.int8, "pg_stat_get_buf_written_backend">
  (): Output<t.int8 | t.null, "pg_stat_get_buf_written_backend">
}>("pg_stat_get_buf_written_backend")

export const pg_stat_get_checkpoint_sync_time = defineFunction<"pg_stat_get_checkpoint_sync_time", {
  (): Output<t.float8, "pg_stat_get_checkpoint_sync_time">
  (): Output<t.float8 | t.null, "pg_stat_get_checkpoint_sync_time">
}>("pg_stat_get_checkpoint_sync_time")

export const pg_stat_get_checkpoint_write_time = defineFunction<"pg_stat_get_checkpoint_write_time", {
  (): Output<t.float8, "pg_stat_get_checkpoint_write_time">
  (): Output<t.float8 | t.null, "pg_stat_get_checkpoint_write_time">
}>("pg_stat_get_checkpoint_write_time")

export const pg_stat_get_db_active_time = defineFunction<"pg_stat_get_db_active_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_db_active_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_db_active_time">
}>("pg_stat_get_db_active_time")

export const pg_stat_get_db_blk_read_time = defineFunction<"pg_stat_get_db_blk_read_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_db_blk_read_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_db_blk_read_time">
}>("pg_stat_get_db_blk_read_time")

export const pg_stat_get_db_blk_write_time = defineFunction<"pg_stat_get_db_blk_write_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_db_blk_write_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_db_blk_write_time">
}>("pg_stat_get_db_blk_write_time")

export const pg_stat_get_db_blocks_fetched = defineFunction<"pg_stat_get_db_blocks_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_blocks_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_blocks_fetched">
}>("pg_stat_get_db_blocks_fetched")

export const pg_stat_get_db_blocks_hit = defineFunction<"pg_stat_get_db_blocks_hit", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_blocks_hit">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_blocks_hit">
}>("pg_stat_get_db_blocks_hit")

export const pg_stat_get_db_checksum_failures = defineFunction<"pg_stat_get_db_checksum_failures", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_checksum_failures">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_checksum_failures">
}>("pg_stat_get_db_checksum_failures")

export const pg_stat_get_db_checksum_last_failure = defineFunction<"pg_stat_get_db_checksum_last_failure", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_db_checksum_last_failure">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_db_checksum_last_failure">
}>("pg_stat_get_db_checksum_last_failure")

export const pg_stat_get_db_conflict_all = defineFunction<"pg_stat_get_db_conflict_all", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_all">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_all">
}>("pg_stat_get_db_conflict_all")

export const pg_stat_get_db_conflict_bufferpin = defineFunction<"pg_stat_get_db_conflict_bufferpin", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_bufferpin">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_bufferpin">
}>("pg_stat_get_db_conflict_bufferpin")

export const pg_stat_get_db_conflict_lock = defineFunction<"pg_stat_get_db_conflict_lock", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_lock">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_lock">
}>("pg_stat_get_db_conflict_lock")

export const pg_stat_get_db_conflict_snapshot = defineFunction<"pg_stat_get_db_conflict_snapshot", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_snapshot">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_snapshot">
}>("pg_stat_get_db_conflict_snapshot")

export const pg_stat_get_db_conflict_startup_deadlock = defineFunction<"pg_stat_get_db_conflict_startup_deadlock", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_startup_deadlock">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_startup_deadlock">
}>("pg_stat_get_db_conflict_startup_deadlock")

export const pg_stat_get_db_conflict_tablespace = defineFunction<"pg_stat_get_db_conflict_tablespace", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_tablespace">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_conflict_tablespace">
}>("pg_stat_get_db_conflict_tablespace")

export const pg_stat_get_db_deadlocks = defineFunction<"pg_stat_get_db_deadlocks", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_deadlocks">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_deadlocks">
}>("pg_stat_get_db_deadlocks")

export const pg_stat_get_db_idle_in_transaction_time = defineFunction<"pg_stat_get_db_idle_in_transaction_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_db_idle_in_transaction_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_db_idle_in_transaction_time">
}>("pg_stat_get_db_idle_in_transaction_time")

export const pg_stat_get_db_numbackends = defineFunction<"pg_stat_get_db_numbackends", {
  (arg: Input<t.oid>): Output<t.int4, "pg_stat_get_db_numbackends">
  (arg: Input<t.oid | t.null>): Output<t.int4 | t.null, "pg_stat_get_db_numbackends">
}>("pg_stat_get_db_numbackends")

export const pg_stat_get_db_session_time = defineFunction<"pg_stat_get_db_session_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_db_session_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_db_session_time">
}>("pg_stat_get_db_session_time")

export const pg_stat_get_db_sessions = defineFunction<"pg_stat_get_db_sessions", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_sessions">
}>("pg_stat_get_db_sessions")

export const pg_stat_get_db_sessions_abandoned = defineFunction<"pg_stat_get_db_sessions_abandoned", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_abandoned">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_sessions_abandoned">
}>("pg_stat_get_db_sessions_abandoned")

export const pg_stat_get_db_sessions_fatal = defineFunction<"pg_stat_get_db_sessions_fatal", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_fatal">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_sessions_fatal">
}>("pg_stat_get_db_sessions_fatal")

export const pg_stat_get_db_sessions_killed = defineFunction<"pg_stat_get_db_sessions_killed", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_killed">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_sessions_killed">
}>("pg_stat_get_db_sessions_killed")

export const pg_stat_get_db_stat_reset_time = defineFunction<"pg_stat_get_db_stat_reset_time", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_db_stat_reset_time">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_db_stat_reset_time">
}>("pg_stat_get_db_stat_reset_time")

export const pg_stat_get_db_temp_bytes = defineFunction<"pg_stat_get_db_temp_bytes", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_temp_bytes">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_temp_bytes">
}>("pg_stat_get_db_temp_bytes")

export const pg_stat_get_db_temp_files = defineFunction<"pg_stat_get_db_temp_files", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_temp_files">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_temp_files">
}>("pg_stat_get_db_temp_files")

export const pg_stat_get_db_tuples_deleted = defineFunction<"pg_stat_get_db_tuples_deleted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_deleted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_tuples_deleted">
}>("pg_stat_get_db_tuples_deleted")

export const pg_stat_get_db_tuples_fetched = defineFunction<"pg_stat_get_db_tuples_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_tuples_fetched">
}>("pg_stat_get_db_tuples_fetched")

export const pg_stat_get_db_tuples_inserted = defineFunction<"pg_stat_get_db_tuples_inserted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_inserted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_tuples_inserted">
}>("pg_stat_get_db_tuples_inserted")

export const pg_stat_get_db_tuples_returned = defineFunction<"pg_stat_get_db_tuples_returned", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_returned">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_tuples_returned">
}>("pg_stat_get_db_tuples_returned")

export const pg_stat_get_db_tuples_updated = defineFunction<"pg_stat_get_db_tuples_updated", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_updated">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_tuples_updated">
}>("pg_stat_get_db_tuples_updated")

export const pg_stat_get_db_xact_commit = defineFunction<"pg_stat_get_db_xact_commit", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_xact_commit">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_xact_commit">
}>("pg_stat_get_db_xact_commit")

export const pg_stat_get_db_xact_rollback = defineFunction<"pg_stat_get_db_xact_rollback", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_db_xact_rollback">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_db_xact_rollback">
}>("pg_stat_get_db_xact_rollback")

export const pg_stat_get_dead_tuples = defineFunction<"pg_stat_get_dead_tuples", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_dead_tuples">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_dead_tuples">
}>("pg_stat_get_dead_tuples")

export const pg_stat_get_function_calls = defineFunction<"pg_stat_get_function_calls", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_function_calls">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_function_calls">
}>("pg_stat_get_function_calls")

export const pg_stat_get_function_self_time = defineFunction<"pg_stat_get_function_self_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_function_self_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_function_self_time">
}>("pg_stat_get_function_self_time")

export const pg_stat_get_function_total_time = defineFunction<"pg_stat_get_function_total_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_function_total_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_function_total_time">
}>("pg_stat_get_function_total_time")

export const pg_stat_get_ins_since_vacuum = defineFunction<"pg_stat_get_ins_since_vacuum", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_ins_since_vacuum">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_ins_since_vacuum">
}>("pg_stat_get_ins_since_vacuum")

export const pg_stat_get_last_analyze_time = defineFunction<"pg_stat_get_last_analyze_time", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_analyze_time">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_last_analyze_time">
}>("pg_stat_get_last_analyze_time")

export const pg_stat_get_last_autoanalyze_time = defineFunction<"pg_stat_get_last_autoanalyze_time", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_autoanalyze_time">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_last_autoanalyze_time">
}>("pg_stat_get_last_autoanalyze_time")

export const pg_stat_get_last_autovacuum_time = defineFunction<"pg_stat_get_last_autovacuum_time", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_autovacuum_time">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_last_autovacuum_time">
}>("pg_stat_get_last_autovacuum_time")

export const pg_stat_get_last_vacuum_time = defineFunction<"pg_stat_get_last_vacuum_time", {
  (arg: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_vacuum_time">
  (arg: Input<t.oid | t.null>): Output<t.timestamptz | t.null, "pg_stat_get_last_vacuum_time">
}>("pg_stat_get_last_vacuum_time")

export const pg_stat_get_live_tuples = defineFunction<"pg_stat_get_live_tuples", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_live_tuples">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_live_tuples">
}>("pg_stat_get_live_tuples")

export const pg_stat_get_mod_since_analyze = defineFunction<"pg_stat_get_mod_since_analyze", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_mod_since_analyze">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_mod_since_analyze">
}>("pg_stat_get_mod_since_analyze")

export const pg_stat_get_numscans = defineFunction<"pg_stat_get_numscans", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_numscans">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_numscans">
}>("pg_stat_get_numscans")

export const pg_stat_get_snapshot_timestamp = defineFunction<"pg_stat_get_snapshot_timestamp", {
  (): Output<t.timestamptz, "pg_stat_get_snapshot_timestamp">
  (): Output<t.timestamptz | t.null, "pg_stat_get_snapshot_timestamp">
}>("pg_stat_get_snapshot_timestamp")

export const pg_stat_get_tuples_deleted = defineFunction<"pg_stat_get_tuples_deleted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_deleted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_deleted">
}>("pg_stat_get_tuples_deleted")

export const pg_stat_get_tuples_fetched = defineFunction<"pg_stat_get_tuples_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_fetched">
}>("pg_stat_get_tuples_fetched")

export const pg_stat_get_tuples_hot_updated = defineFunction<"pg_stat_get_tuples_hot_updated", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_hot_updated">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_hot_updated">
}>("pg_stat_get_tuples_hot_updated")

export const pg_stat_get_tuples_inserted = defineFunction<"pg_stat_get_tuples_inserted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_inserted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_inserted">
}>("pg_stat_get_tuples_inserted")

export const pg_stat_get_tuples_returned = defineFunction<"pg_stat_get_tuples_returned", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_returned">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_returned">
}>("pg_stat_get_tuples_returned")

export const pg_stat_get_tuples_updated = defineFunction<"pg_stat_get_tuples_updated", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_updated">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_tuples_updated">
}>("pg_stat_get_tuples_updated")

export const pg_stat_get_vacuum_count = defineFunction<"pg_stat_get_vacuum_count", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_vacuum_count">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_vacuum_count">
}>("pg_stat_get_vacuum_count")

export const pg_stat_get_xact_blocks_fetched = defineFunction<"pg_stat_get_xact_blocks_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_blocks_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_blocks_fetched">
}>("pg_stat_get_xact_blocks_fetched")

export const pg_stat_get_xact_blocks_hit = defineFunction<"pg_stat_get_xact_blocks_hit", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_blocks_hit">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_blocks_hit">
}>("pg_stat_get_xact_blocks_hit")

export const pg_stat_get_xact_function_calls = defineFunction<"pg_stat_get_xact_function_calls", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_function_calls">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_function_calls">
}>("pg_stat_get_xact_function_calls")

export const pg_stat_get_xact_function_self_time = defineFunction<"pg_stat_get_xact_function_self_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_xact_function_self_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_xact_function_self_time">
}>("pg_stat_get_xact_function_self_time")

export const pg_stat_get_xact_function_total_time = defineFunction<"pg_stat_get_xact_function_total_time", {
  (arg: Input<t.oid>): Output<t.float8, "pg_stat_get_xact_function_total_time">
  (arg: Input<t.oid | t.null>): Output<t.float8 | t.null, "pg_stat_get_xact_function_total_time">
}>("pg_stat_get_xact_function_total_time")

export const pg_stat_get_xact_numscans = defineFunction<"pg_stat_get_xact_numscans", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_numscans">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_numscans">
}>("pg_stat_get_xact_numscans")

export const pg_stat_get_xact_tuples_deleted = defineFunction<"pg_stat_get_xact_tuples_deleted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_deleted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_deleted">
}>("pg_stat_get_xact_tuples_deleted")

export const pg_stat_get_xact_tuples_fetched = defineFunction<"pg_stat_get_xact_tuples_fetched", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_fetched">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_fetched">
}>("pg_stat_get_xact_tuples_fetched")

export const pg_stat_get_xact_tuples_hot_updated = defineFunction<"pg_stat_get_xact_tuples_hot_updated", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_hot_updated">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_hot_updated">
}>("pg_stat_get_xact_tuples_hot_updated")

export const pg_stat_get_xact_tuples_inserted = defineFunction<"pg_stat_get_xact_tuples_inserted", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_inserted">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_inserted">
}>("pg_stat_get_xact_tuples_inserted")

export const pg_stat_get_xact_tuples_returned = defineFunction<"pg_stat_get_xact_tuples_returned", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_returned">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_returned">
}>("pg_stat_get_xact_tuples_returned")

export const pg_stat_get_xact_tuples_updated = defineFunction<"pg_stat_get_xact_tuples_updated", {
  (arg: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_updated">
  (arg: Input<t.oid | t.null>): Output<t.int8 | t.null, "pg_stat_get_xact_tuples_updated">
}>("pg_stat_get_xact_tuples_updated")

/** 
 * A function for resetting the statistics counters of the current database
 * 
 * @see https://pgpedia.info/p/pg_stat_reset.html
 */
export const pg_stat_reset = defineFunction<"pg_stat_reset", {
  (): Output<t.void, "pg_stat_reset">
}>("pg_stat_reset")

/** 
 * A system function for resetting replication slot statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_replication_slot.html
 */
export const pg_stat_reset_replication_slot = defineFunction<"pg_stat_reset_replication_slot", {
  (arg: Input<t.text>): Output<t.void, "pg_stat_reset_replication_slot">
}>("pg_stat_reset_replication_slot")

/** 
 * A system function for resetting cluster-wide statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_shared.html
 */
export const pg_stat_reset_shared = defineFunction<"pg_stat_reset_shared", {
  (arg: Input<t.text | t.null>): Output<t.void, "pg_stat_reset_shared">
}>("pg_stat_reset_shared")

/** 
 * A function resettting the statistics of a function
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_single_function_counters.html
 */
export const pg_stat_reset_single_function_counters = defineFunction<"pg_stat_reset_single_function_counters", {
  (arg: Input<t.oid | t.null>): Output<t.void, "pg_stat_reset_single_function_counters">
}>("pg_stat_reset_single_function_counters")

/** 
 * A function for resettting the statistics of a table or index
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_single_table_counters.html
 */
export const pg_stat_reset_single_table_counters = defineFunction<"pg_stat_reset_single_table_counters", {
  (arg: Input<t.oid | t.null>): Output<t.void, "pg_stat_reset_single_table_counters">
}>("pg_stat_reset_single_table_counters")

/** 
 * A function for resetting SLRU statistics
 * 
 * @see https://pgpedia.info/p/pg_stat_reset_slru.html
 */
export const pg_stat_reset_slru = defineFunction<"pg_stat_reset_slru", {
  (arg: Input<t.text>): Output<t.void, "pg_stat_reset_slru">
}>("pg_stat_reset_slru")

export const pg_statistics_obj_is_visible = defineFunction<"pg_statistics_obj_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_statistics_obj_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_statistics_obj_is_visible">
}>("pg_statistics_obj_is_visible")

/** 
 * A function for determining whether a table is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_table_is_visible.html
 */
export const pg_table_is_visible = defineFunction<"pg_table_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_table_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_table_is_visible">
}>("pg_table_is_visible")

/** 
 * A system function listing the OIDs of databases which have objects contained in the specified tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_databases.html
 */
export const pg_tablespace_databases = defineFunction<"pg_tablespace_databases", {
  (arg: Input<t.oid>): Output<t.oid, "pg_tablespace_databases">
  (arg: Input<t.oid | t.null>): Output<t.oid | t.null, "pg_tablespace_databases">
}>("pg_tablespace_databases")

/** 
 * A function returning the file system path of a tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_location.html
 */
export const pg_tablespace_location = defineFunction<"pg_tablespace_location", {
  (arg: Input<t.oid>): Output<t.text, "pg_tablespace_location">
  (arg: Input<t.oid | t.null>): Output<t.text | t.null, "pg_tablespace_location">
}>("pg_tablespace_location")

/** 
 * A function returning the size of the specified tablespace
 * 
 * @see https://pgpedia.info/p/pg_tablespace_size.html
 */
export const pg_tablespace_size = defineFunction<"pg_tablespace_size", {
  (arg: Input<t.oid | t.name>): Output<t.int8, "pg_tablespace_size">
  (arg: Input<t.oid | t.name | t.null>): Output<t.int8 | t.null, "pg_tablespace_size">
}>("pg_tablespace_size")

/** 
 * A function which instructs a backend to terminate
 * 
 * @see https://pgpedia.info/p/pg_terminate_backend.html
 */
export const pg_terminate_backend = defineFunction<"pg_terminate_backend", {
  (pid: Input<t.int4>, timeout?: Input<t.int8>): Output<t.bool, "pg_terminate_backend">
  (pid: Input<t.int4 | t.null>, timeout?: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_terminate_backend">
}>("pg_terminate_backend")

/** 
 * A function returning the trigger nesting level
 * 
 * @see https://pgpedia.info/p/pg_trigger_depth.html
 */
export const pg_trigger_depth = defineFunction<"pg_trigger_depth", {
  (): Output<t.int4, "pg_trigger_depth">
  (): Output<t.int4 | t.null, "pg_trigger_depth">
}>("pg_trigger_depth")

export const pg_try_advisory_lock = defineFunction<"pg_try_advisory_lock", {
  (arg: Input<t.int8>): Output<t.bool, "pg_try_advisory_lock">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_try_advisory_lock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_lock">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_try_advisory_lock">
}>("pg_try_advisory_lock")

export const pg_try_advisory_lock_shared = defineFunction<"pg_try_advisory_lock_shared", {
  (arg: Input<t.int8>): Output<t.bool, "pg_try_advisory_lock_shared">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_try_advisory_lock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_lock_shared">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_try_advisory_lock_shared">
}>("pg_try_advisory_lock_shared")

export const pg_try_advisory_xact_lock = defineFunction<"pg_try_advisory_xact_lock", {
  (arg: Input<t.int8>): Output<t.bool, "pg_try_advisory_xact_lock">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_try_advisory_xact_lock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_xact_lock">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_try_advisory_xact_lock">
}>("pg_try_advisory_xact_lock")

export const pg_try_advisory_xact_lock_shared = defineFunction<"pg_try_advisory_xact_lock_shared", {
  (arg: Input<t.int8>): Output<t.bool, "pg_try_advisory_xact_lock_shared">
  (arg: Input<t.int8 | t.null>): Output<t.bool | t.null, "pg_try_advisory_xact_lock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_xact_lock_shared">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bool | t.null, "pg_try_advisory_xact_lock_shared">
}>("pg_try_advisory_xact_lock_shared")

export const pg_ts_config_is_visible = defineFunction<"pg_ts_config_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_ts_config_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_ts_config_is_visible">
}>("pg_ts_config_is_visible")

export const pg_ts_dict_is_visible = defineFunction<"pg_ts_dict_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_ts_dict_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_ts_dict_is_visible">
}>("pg_ts_dict_is_visible")

export const pg_ts_parser_is_visible = defineFunction<"pg_ts_parser_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_ts_parser_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_ts_parser_is_visible">
}>("pg_ts_parser_is_visible")

export const pg_ts_template_is_visible = defineFunction<"pg_ts_template_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_ts_template_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_ts_template_is_visible">
}>("pg_ts_template_is_visible")

/** 
 * A function for determining whether a data type is visible in the current search path
 * 
 * @see https://pgpedia.info/p/pg_type_is_visible.html
 */
export const pg_type_is_visible = defineFunction<"pg_type_is_visible", {
  (arg: Input<t.oid>): Output<t.bool, "pg_type_is_visible">
  (arg: Input<t.oid | t.null>): Output<t.bool | t.null, "pg_type_is_visible">
}>("pg_type_is_visible")

/** 
 * A function for pausing WAL replay
 * 
 * @see https://pgpedia.info/p/pg_wal_replay_pause.html
 */
export const pg_wal_replay_pause = defineFunction<"pg_wal_replay_pause", {
  (): Output<t.void, "pg_wal_replay_pause">
}>("pg_wal_replay_pause")

/** 
 * A function for resuming replay of WAL files
 * 
 * @see https://pgpedia.info/p/pg_wal_replay_resume.html
 */
export const pg_wal_replay_resume = defineFunction<"pg_wal_replay_resume", {
  (): Output<t.void, "pg_wal_replay_resume">
}>("pg_wal_replay_resume")

export const phraseto_tsquery = defineFunction<"phraseto_tsquery", {
  (arg: Input<t.text>): Output<t.tsquery, "phraseto_tsquery">
  (arg: Input<t.text | t.null>): Output<t.tsquery | t.null, "phraseto_tsquery">
}>("phraseto_tsquery")

export const pi = defineFunction<"pi", {
  (): Output<t.float8, "pi">
  (): Output<t.float8 | t.null, "pi">
}>("pi")

export const plainto_tsquery = defineFunction<"plainto_tsquery", {
  (arg: Input<t.text>): Output<t.tsquery, "plainto_tsquery">
  (arg: Input<t.text | t.null>): Output<t.tsquery | t.null, "plainto_tsquery">
}>("plainto_tsquery")

export const plpgsql_validator = defineFunction<"plpgsql_validator", {
  (arg: Input<t.oid | t.null>): Output<t.void, "plpgsql_validator">
}>("plpgsql_validator")

export const point = defineFunction<"point", {
  (arg: Input<t.circle | t.lseg | t.path | t.box | t.polygon>): Output<t.point, "point">
  (arg: Input<t.circle | t.lseg | t.path | t.box | t.polygon | t.null>): Output<t.point | t.null, "point">
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.point, "point">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.point | t.null, "point">
}>("point")

export const point_above = defineFunction<"point_above", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_above">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_above">
}>("point_above")

export const point_add = defineFunction<"point_add", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_add">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.point | t.null, "point_add">
}>("point_add")

export const point_below = defineFunction<"point_below", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_below">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_below">
}>("point_below")

export const point_distance = defineFunction<"point_distance", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.float8, "point_distance">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "point_distance">
}>("point_distance")

export const point_div = defineFunction<"point_div", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_div">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.point | t.null, "point_div">
}>("point_div")

export const point_eq = defineFunction<"point_eq", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_eq">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_eq">
}>("point_eq")

export const point_horiz = defineFunction<"point_horiz", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_horiz">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_horiz">
}>("point_horiz")

export const point_left = defineFunction<"point_left", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_left">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_left">
}>("point_left")

export const point_mul = defineFunction<"point_mul", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_mul">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.point | t.null, "point_mul">
}>("point_mul")

export const point_ne = defineFunction<"point_ne", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_ne">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_ne">
}>("point_ne")

export const point_right = defineFunction<"point_right", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_right">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_right">
}>("point_right")

export const point_send = defineFunction<"point_send", {
  (arg: Input<t.point>): Output<t.bytea, "point_send">
  (arg: Input<t.point | t.null>): Output<t.bytea | t.null, "point_send">
}>("point_send")

export const point_sub = defineFunction<"point_sub", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_sub">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.point | t.null, "point_sub">
}>("point_sub")

export const point_vert = defineFunction<"point_vert", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_vert">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "point_vert">
}>("point_vert")

export const poly_above = defineFunction<"poly_above", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_above">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_above">
}>("poly_above")

export const poly_below = defineFunction<"poly_below", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_below">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_below">
}>("poly_below")

export const poly_center = defineFunction<"poly_center", {
  (arg: Input<t.polygon>): Output<t.point, "poly_center">
  (arg: Input<t.polygon | t.null>): Output<t.point | t.null, "poly_center">
}>("poly_center")

export const poly_contain = defineFunction<"poly_contain", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_contain">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_contain">
}>("poly_contain")

export const poly_contain_pt = defineFunction<"poly_contain_pt", {
  (arg1: Input<t.polygon>, arg2: Input<t.point>): Output<t.bool, "poly_contain_pt">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.point | t.null>): Output<t.bool | t.null, "poly_contain_pt">
}>("poly_contain_pt")

export const poly_contained = defineFunction<"poly_contained", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_contained">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_contained">
}>("poly_contained")

export const poly_distance = defineFunction<"poly_distance", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.float8, "poly_distance">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.float8 | t.null, "poly_distance">
}>("poly_distance")

export const poly_left = defineFunction<"poly_left", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_left">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_left">
}>("poly_left")

export const poly_npoints = defineFunction<"poly_npoints", {
  (arg: Input<t.polygon>): Output<t.int4, "poly_npoints">
  (arg: Input<t.polygon | t.null>): Output<t.int4 | t.null, "poly_npoints">
}>("poly_npoints")

export const poly_overabove = defineFunction<"poly_overabove", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overabove">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_overabove">
}>("poly_overabove")

export const poly_overbelow = defineFunction<"poly_overbelow", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overbelow">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_overbelow">
}>("poly_overbelow")

export const poly_overlap = defineFunction<"poly_overlap", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overlap">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_overlap">
}>("poly_overlap")

export const poly_overleft = defineFunction<"poly_overleft", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overleft">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_overleft">
}>("poly_overleft")

export const poly_overright = defineFunction<"poly_overright", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overright">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_overright">
}>("poly_overright")

export const poly_right = defineFunction<"poly_right", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_right">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_right">
}>("poly_right")

export const poly_same = defineFunction<"poly_same", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_same">
  (arg1: Input<t.polygon | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "poly_same">
}>("poly_same")

export const poly_send = defineFunction<"poly_send", {
  (arg: Input<t.polygon>): Output<t.bytea, "poly_send">
  (arg: Input<t.polygon | t.null>): Output<t.bytea | t.null, "poly_send">
}>("poly_send")

export const polygon = defineFunction<"polygon", {
  (arg: Input<t.box | t.path | t.circle>): Output<t.polygon, "polygon">
  (arg: Input<t.box | t.path | t.circle | t.null>): Output<t.polygon | t.null, "polygon">
  (arg1: Input<t.int4>, arg2: Input<t.circle>): Output<t.polygon, "polygon">
  (arg1: Input<t.int4 | t.null>, arg2: Input<t.circle | t.null>): Output<t.polygon | t.null, "polygon">
}>("polygon")

export const popen = defineFunction<"popen", {
  (arg: Input<t.path>): Output<t.path, "popen">
  (arg: Input<t.path | t.null>): Output<t.path | t.null, "popen">
}>("popen")

export const position = defineFunction<"position", {
  (arg1: Input<t.text | t.bit | t.bytea>, arg2: Input<t.text | t.bit | t.bytea>): Output<t.int4, "position">
  (arg1: Input<t.text | t.bit | t.bytea | t.null>, arg2: Input<t.text | t.bit | t.bytea | t.null>): Output<t.int4 | t.null, "position">
}>("position")

export const postgresql_fdw_validator = defineFunction<"postgresql_fdw_validator", {
  (arg1: Input<t.array<t.text>>, arg2: Input<t.oid>): Output<t.bool, "postgresql_fdw_validator">
  (arg1: Input<t.array<t.text> | t.null>, arg2: Input<t.oid | t.null>): Output<t.bool | t.null, "postgresql_fdw_validator">
}>("postgresql_fdw_validator")

export const pow = defineFunction<"pow", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "pow">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "pow">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "pow">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "pow">
}>("pow")

export const power = defineFunction<"power", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "power">
  (arg1: Input<t.float8 | t.null>, arg2: Input<t.float8 | t.null>): Output<t.float8 | t.null, "power">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "power">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.numeric | t.null>): Output<t.numeric | t.null, "power">
}>("power")

export const pt_contained_circle = defineFunction<"pt_contained_circle", {
  (arg1: Input<t.point>, arg2: Input<t.circle>): Output<t.bool, "pt_contained_circle">
  (arg1: Input<t.point | t.null>, arg2: Input<t.circle | t.null>): Output<t.bool | t.null, "pt_contained_circle">
}>("pt_contained_circle")

export const pt_contained_poly = defineFunction<"pt_contained_poly", {
  (arg1: Input<t.point>, arg2: Input<t.polygon>): Output<t.bool, "pt_contained_poly">
  (arg1: Input<t.point | t.null>, arg2: Input<t.polygon | t.null>): Output<t.bool | t.null, "pt_contained_poly">
}>("pt_contained_poly")

export const query_to_xml = defineFunction<"query_to_xml", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xml">
  (query: Input<t.text | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "query_to_xml">
}>("query_to_xml")

export const query_to_xml_and_xmlschema = defineFunction<"query_to_xml_and_xmlschema", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xml_and_xmlschema">
  (query: Input<t.text | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "query_to_xml_and_xmlschema">
}>("query_to_xml_and_xmlschema")

export const query_to_xmlschema = defineFunction<"query_to_xmlschema", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xmlschema">
  (query: Input<t.text | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "query_to_xmlschema">
}>("query_to_xmlschema")

export const querytree = defineFunction<"querytree", {
  (arg: Input<t.tsquery>): Output<t.text, "querytree">
  (arg: Input<t.tsquery | t.null>): Output<t.text | t.null, "querytree">
}>("querytree")

/** 
 * A function which formats identifiers for use in SQL strings
 * 
 * @see https://pgpedia.info/q/quote_ident.html
 */
export const quote_ident = defineFunction<"quote_ident", {
  (arg: Input<t.text>): Output<t.text, "quote_ident">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "quote_ident">
}>("quote_ident")

/** 
 * A function which formats arbitrary input as an SQL string literal
 * 
 * @see https://pgpedia.info/q/quote_literal.html
 */
export const quote_literal = defineFunction<"quote_literal", {
  (arg: Input<t.text | t.anyelement>): Output<t.text, "quote_literal">
  (arg: Input<t.text | t.anyelement | t.null>): Output<t.text | t.null, "quote_literal">
}>("quote_literal")

/** 
 * A function which formats arbitrary input as an SQL string literal and converts NULL to a string
 * 
 * @see https://pgpedia.info/q/quote_nullable.html
 */
export const quote_nullable = defineFunction<"quote_nullable", {
  (arg: Input<t.text | t.anyelement>): Output<t.text, "quote_nullable">
}>("quote_nullable")

export const radians = defineFunction<"radians", {
  (arg: Input<t.float8>): Output<t.float8, "radians">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "radians">
}>("radians")

export const radius = defineFunction<"radius", {
  (arg: Input<t.circle>): Output<t.float8, "radius">
  (arg: Input<t.circle | t.null>): Output<t.float8 | t.null, "radius">
}>("radius")

/** 
 * A function returning a random value
 * 
 * @see https://pgpedia.info/r/random.html
 */
export const random = defineFunction<"random", {
  (): Output<t.float8, "random">
  (): Output<t.float8 | t.null, "random">
}>("random")

export const rank = defineFunction<"rank", {
  (): Output<t.int8, "rank">
  (...args: Input<t.any>[]): Output<t.int8, "rank">
}>("rank")

/** 
 * A function returning the match for a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_match.html
 */
export const regexp_match = defineFunction<"regexp_match", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.array<t.text>, "regexp_match">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_match">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.array<t.text>, "regexp_match">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_match">
}>("regexp_match")

/** 
 * A function returning matches for a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_matches.html
 */
export const regexp_matches = defineFunction<"regexp_matches", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.array<t.text>, "regexp_matches">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_matches">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.array<t.text>, "regexp_matches">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_matches">
}>("regexp_matches")

/** 
 * A function for replacing values in a string using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_replace.html
 */
export const regexp_replace = defineFunction<"regexp_replace", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "regexp_replace">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "regexp_replace">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.text, "regexp_replace">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>, arg4: Input<t.text | t.null>): Output<t.text | t.null, "regexp_replace">
}>("regexp_replace")

/** 
 * A function for splitting a string to an array using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_split_to_array.html
 */
export const regexp_split_to_array = defineFunction<"regexp_split_to_array", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.array<t.text>, "regexp_split_to_array">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_split_to_array">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.array<t.text>, "regexp_split_to_array">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.array<t.text> | t.null, "regexp_split_to_array">
}>("regexp_split_to_array")

/** 
 * A function for splitting a string to a table using a regular expression
 * 
 * @see https://pgpedia.info/r/regexp_split_to_table.html
 */
export const regexp_split_to_table = defineFunction<"regexp_split_to_table", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "regexp_split_to_table">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "regexp_split_to_table">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "regexp_split_to_table">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "regexp_split_to_table">
}>("regexp_split_to_table")

export const regr_avgx = defineFunction<"regr_avgx", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_avgx">
}>("regr_avgx")

export const regr_avgy = defineFunction<"regr_avgy", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_avgy">
}>("regr_avgy")

export const regr_count = defineFunction<"regr_count", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.int8, "regr_count">
}>("regr_count")

export const regr_intercept = defineFunction<"regr_intercept", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_intercept">
}>("regr_intercept")

export const regr_r2 = defineFunction<"regr_r2", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_r2">
}>("regr_r2")

export const regr_slope = defineFunction<"regr_slope", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_slope">
}>("regr_slope")

export const regr_sxx = defineFunction<"regr_sxx", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_sxx">
}>("regr_sxx")

export const regr_sxy = defineFunction<"regr_sxy", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_sxy">
}>("regr_sxy")

export const regr_syy = defineFunction<"regr_syy", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "regr_syy">
}>("regr_syy")

/** 
 * A function for repeating the input string
 * 
 * @see https://pgpedia.info/r/repeat.html
 */
export const repeat = defineFunction<"repeat", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "repeat">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "repeat">
}>("repeat")

/** 
 * A function for replacing parts of a string with another string
 * 
 * @see https://pgpedia.info/r/replace.html
 */
export const replace = defineFunction<"replace", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "replace">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "replace">
}>("replace")

/** 
 * A function for reversing a string
 * 
 * @see https://pgpedia.info/r/reverse.html
 */
export const reverse = defineFunction<"reverse", {
  (arg: Input<t.text>): Output<t.text, "reverse">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "reverse">
}>("reverse")

/** 
 * A function returning characters from the right of a string
 * 
 * @see https://pgpedia.info/r/right.html
 */
export const right = defineFunction<"right", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "right">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "right">
}>("right")

export const round = defineFunction<"round", {
  (arg: Input<t.float8>): Output<t.float8, "round">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "round">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "round">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.int4 | t.null>): Output<t.numeric | t.null, "round">
  (arg: Input<t.numeric>): Output<t.numeric, "round">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "round">
}>("round")

export const row_number = defineFunction<"row_number", {
  (): Output<t.int8, "row_number">
}>("row_number")

export const row_security_active = defineFunction<"row_security_active", {
  (arg: Input<t.oid | t.text>): Output<t.bool, "row_security_active">
  (arg: Input<t.oid | t.text | t.null>): Output<t.bool | t.null, "row_security_active">
}>("row_security_active")

/** 
 * A system function for padding the right side of a string
 * 
 * @see https://pgpedia.info/r/rpad.html
 */
export const rpad = defineFunction<"rpad", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.text, "rpad">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "rpad">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "rpad">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "rpad">
}>("rpad")

/** 
 * A function which trims characters from the right side of a string
 * 
 * @see https://pgpedia.info/r/rtrim.html
 */
export const rtrim = defineFunction<"rtrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "rtrim">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "rtrim">
  (arg: Input<t.text>): Output<t.text, "rtrim">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "rtrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "rtrim">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.bytea | t.null>): Output<t.bytea | t.null, "rtrim">
}>("rtrim")

export const satisfies_hash_partition = defineFunction<"satisfies_hash_partition", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>, arg3: Input<t.int4>, arg4: Input<t.any>): Output<t.bool, "satisfies_hash_partition">
}>("satisfies_hash_partition")

/** 
 * A function returning the scale of the argument
 * 
 * @see https://pgpedia.info/s/scale.html
 */
export const scale = defineFunction<"scale", {
  (arg: Input<t.numeric>): Output<t.int4, "scale">
  (arg: Input<t.numeric | t.null>): Output<t.int4 | t.null, "scale">
}>("scale")

export const schema_to_xml = defineFunction<"schema_to_xml", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xml">
  (schema: Input<t.name | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "schema_to_xml">
}>("schema_to_xml")

export const schema_to_xml_and_xmlschema = defineFunction<"schema_to_xml_and_xmlschema", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xml_and_xmlschema">
  (schema: Input<t.name | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "schema_to_xml_and_xmlschema">
}>("schema_to_xml_and_xmlschema")

export const schema_to_xmlschema = defineFunction<"schema_to_xmlschema", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xmlschema">
  (schema: Input<t.name | t.null>, nulls: Input<t.bool | t.null>, tableforest: Input<t.bool | t.null>, targetns: Input<t.text | t.null>): Output<t.xml | t.null, "schema_to_xmlschema">
}>("schema_to_xmlschema")

export const session_user = defineFunction<"session_user", {
  (): Output<t.name, "session_user">
  (): Output<t.name | t.null, "session_user">
}>("session_user")

export const set_bit = defineFunction<"set_bit", {
  (arg1: Input<t.bytea>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.bytea, "set_bit">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int8 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "set_bit">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bit, "set_bit">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bit | t.null, "set_bit">
}>("set_bit")

export const set_byte = defineFunction<"set_byte", {
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "set_byte">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "set_byte">
}>("set_byte")

/** 
 * A function for temporarily setting a configuration parameter
 * 
 * @see https://pgpedia.info/s/set_config.html
 */
export const set_config = defineFunction<"set_config", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.bool>): Output<t.text, "set_config">
}>("set_config")

export const set_masklen = defineFunction<"set_masklen", {
  (arg1: Input<t.inet>, arg2: Input<t.int4>): Output<t.inet, "set_masklen">
  (arg1: Input<t.inet | t.null>, arg2: Input<t.int4 | t.null>): Output<t.inet | t.null, "set_masklen">
  (arg1: Input<t.cidr>, arg2: Input<t.int4>): Output<t.cidr, "set_masklen">
  (arg1: Input<t.cidr | t.null>, arg2: Input<t.int4 | t.null>): Output<t.cidr | t.null, "set_masklen">
}>("set_masklen")

/** 
 * A function for setting the random number generator seed
 * 
 * @see https://pgpedia.info/s/setseed.html
 */
export const setseed = defineFunction<"setseed", {
  (arg: Input<t.float8 | t.null>): Output<t.void, "setseed">
}>("setseed")

/** 
 * A function for assigning a weight to each element of a vector
 * 
 * @see https://pgpedia.info/s/setweight.html
 */
export const setweight = defineFunction<"setweight", {
  (arg1: Input<t.tsvector>, arg2: Input<t.char>): Output<t.tsvector, "setweight">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.char | t.null>): Output<t.tsvector | t.null, "setweight">
  (arg1: Input<t.tsvector>, arg2: Input<t.char>, arg3: Input<t.array<t.text>>): Output<t.tsvector, "setweight">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.char | t.null>, arg3: Input<t.array<t.text> | t.null>): Output<t.tsvector | t.null, "setweight">
}>("setweight")

/** 
 * A function computing a SHA-224 hash
 * 
 * @see https://pgpedia.info/s/sha224.html
 */
export const sha224 = defineFunction<"sha224", {
  (arg: Input<t.bytea>): Output<t.bytea, "sha224">
  (arg: Input<t.bytea | t.null>): Output<t.bytea | t.null, "sha224">
}>("sha224")

/** 
 * A function computing a SHA-256 hash
 * 
 * @see https://pgpedia.info/s/sha256.html
 */
export const sha256 = defineFunction<"sha256", {
  (arg: Input<t.bytea>): Output<t.bytea, "sha256">
  (arg: Input<t.bytea | t.null>): Output<t.bytea | t.null, "sha256">
}>("sha256")

/** 
 * A function computing a SHA-384 hash
 * 
 * @see https://pgpedia.info/s/sha384.html
 */
export const sha384 = defineFunction<"sha384", {
  (arg: Input<t.bytea>): Output<t.bytea, "sha384">
  (arg: Input<t.bytea | t.null>): Output<t.bytea | t.null, "sha384">
}>("sha384")

/** 
 * A function computing a SHA-512 hash
 * 
 * @see https://pgpedia.info/s/sha512.html
 */
export const sha512 = defineFunction<"sha512", {
  (arg: Input<t.bytea>): Output<t.bytea, "sha512">
  (arg: Input<t.bytea | t.null>): Output<t.bytea | t.null, "sha512">
}>("sha512")

/** 
 * A function returning a shared object's comment
 * 
 * @see https://pgpedia.info/s/shobj_description.html
 */
export const shobj_description = defineFunction<"shobj_description", {
  (arg1: Input<t.oid>, arg2: Input<t.name>): Output<t.text, "shobj_description">
  (arg1: Input<t.oid | t.null>, arg2: Input<t.name | t.null>): Output<t.text | t.null, "shobj_description">
}>("shobj_description")

export const sign = defineFunction<"sign", {
  (arg: Input<t.float8>): Output<t.float8, "sign">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "sign">
  (arg: Input<t.numeric>): Output<t.numeric, "sign">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "sign">
}>("sign")

export const similar_escape = defineFunction<"similar_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "similar_escape">
}>("similar_escape")

export const similar_to_escape = defineFunction<"similar_to_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "similar_to_escape">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "similar_to_escape">
  (arg: Input<t.text>): Output<t.text, "similar_to_escape">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "similar_to_escape">
}>("similar_to_escape")

export const sin = defineFunction<"sin", {
  (arg: Input<t.float8>): Output<t.float8, "sin">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "sin">
}>("sin")

export const sind = defineFunction<"sind", {
  (arg: Input<t.float8>): Output<t.float8, "sind">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "sind">
}>("sind")

export const sinh = defineFunction<"sinh", {
  (arg: Input<t.float8>): Output<t.float8, "sinh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "sinh">
}>("sinh")

export const slope = defineFunction<"slope", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.float8, "slope">
  (arg1: Input<t.point | t.null>, arg2: Input<t.point | t.null>): Output<t.float8 | t.null, "slope">
}>("slope")

export const spg_poly_quad_compress = defineFunction<"spg_poly_quad_compress", {
  (arg: Input<t.polygon>): Output<t.box, "spg_poly_quad_compress">
  (arg: Input<t.polygon | t.null>): Output<t.box | t.null, "spg_poly_quad_compress">
}>("spg_poly_quad_compress")

/** 
 * A function for splitting a string on a delimiter and returning one of the fields
 * 
 * @see https://pgpedia.info/s/split_part-functon.html
 */
export const split_part = defineFunction<"split_part", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>): Output<t.text, "split_part">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.int4 | t.null>): Output<t.text | t.null, "split_part">
}>("split_part")

export const sqrt = defineFunction<"sqrt", {
  (arg: Input<t.float8>): Output<t.float8, "sqrt">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "sqrt">
  (arg: Input<t.numeric>): Output<t.numeric, "sqrt">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "sqrt">
}>("sqrt")

/** 
 * A function determining whether a string starts with a particular prefix
 * 
 * @see https://pgpedia.info/s/starts_with.html
 */
export const starts_with = defineFunction<"starts_with", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "starts_with">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "starts_with">
}>("starts_with")

/** 
 * A function returning the point-in-time the current query started
 * 
 * @see https://pgpedia.info/s/statement_timestamp.html
 */
export const statement_timestamp = defineFunction<"statement_timestamp", {
  (): Output<t.timestamptz, "statement_timestamp">
  (): Output<t.timestamptz | t.null, "statement_timestamp">
}>("statement_timestamp")

export const stddev = defineFunction<"stddev", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "stddev">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "stddev">
}>("stddev")

export const stddev_pop = defineFunction<"stddev_pop", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "stddev_pop">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "stddev_pop">
}>("stddev_pop")

export const stddev_samp = defineFunction<"stddev_samp", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "stddev_samp">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "stddev_samp">
}>("stddev_samp")

/** 
 * A function for concatenating values into a string
 * 
 * @see https://pgpedia.info/s/string_agg.html
 */
export const string_agg = defineFunction<"string_agg", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "string_agg">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "string_agg">
}>("string_agg")

/** 
 * A function for splitting a string into an array
 * 
 * @see https://pgpedia.info/s/string_to_array.html
 */
export const string_to_array = defineFunction<"string_to_array", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.array<t.text>, "string_to_array">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.array<t.text>, "string_to_array">
}>("string_to_array")

/** 
 * A function to splt a string at a specified delimiter returning a set of values
 * 
 * @see https://pgpedia.info/s/string_to_table.html
 */
export const string_to_table = defineFunction<"string_to_table", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "string_to_table">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "string_to_table">
}>("string_to_table")

export const strip = defineFunction<"strip", {
  (arg: Input<t.tsvector>): Output<t.tsvector, "strip">
  (arg: Input<t.tsvector | t.null>): Output<t.tsvector | t.null, "strip">
}>("strip")

/** 
 * A system function for returning the start of a string within another string
 * 
 * @see https://pgpedia.info/s/strpos.html
 */
export const strpos = defineFunction<"strpos", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "strpos">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.int4 | t.null, "strpos">
}>("strpos")

/** 
 * A system function for returning a substring from a string
 * 
 * @see https://pgpedia.info/s/substr.html
 */
export const substr = defineFunction<"substr", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.text, "substr">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.text | t.null, "substr">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "substr">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.null>): Output<t.text | t.null, "substr">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "substr">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "substr">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.bytea, "substr">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bytea | t.null, "substr">
}>("substr")

export const substring = defineFunction<"substring", {
  (arg1: Input<t.text>, arg2: Input<t.int4 | t.text>, arg3: Input<t.int4 | t.text>): Output<t.text, "substring">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.text | t.null>, arg3: Input<t.int4 | t.text | t.null>): Output<t.text | t.null, "substring">
  (arg1: Input<t.text>, arg2: Input<t.int4 | t.text>): Output<t.text, "substring">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.text | t.null>): Output<t.text | t.null, "substring">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bit, "substring">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bit | t.null, "substring">
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "substring">
  (arg1: Input<t.bit | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bit | t.null, "substring">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "substring">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.int4 | t.null>): Output<t.bytea | t.null, "substring">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.bytea, "substring">
  (arg1: Input<t.bytea | t.null>, arg2: Input<t.int4 | t.null>): Output<t.bytea | t.null, "substring">
}>("substring")

export const sum = defineFunction<"sum", {
  (arg: Input<t.int8 | t.numeric>): Output<t.numeric, "sum">
  (arg: Input<t.int4 | t.int2>): Output<t.int8, "sum">
  (arg: Input<t.float4>): Output<t.float4, "sum">
  (arg: Input<t.float8>): Output<t.float8, "sum">
  (arg: Input<t.money>): Output<t.money, "sum">
  (arg: Input<t.interval>): Output<t.interval, "sum">
}>("sum")

export const tan = defineFunction<"tan", {
  (arg: Input<t.float8>): Output<t.float8, "tan">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "tan">
}>("tan")

export const tand = defineFunction<"tand", {
  (arg: Input<t.float8>): Output<t.float8, "tand">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "tand">
}>("tand")

export const tanh = defineFunction<"tanh", {
  (arg: Input<t.float8>): Output<t.float8, "tanh">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "tanh">
}>("tanh")

export const text = defineFunction<"text", {
  (arg: Input<t.bpchar | t.name | t.char | t.inet | t.bool | t.xml>): Output<t.text, "text">
  (arg: Input<t.bpchar | t.name | t.char | t.inet | t.bool | t.xml | t.null>): Output<t.text | t.null, "text">
}>("text")

export const text_ge = defineFunction<"text_ge", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_ge">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_ge">
}>("text_ge")

export const text_gt = defineFunction<"text_gt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_gt">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_gt">
}>("text_gt")

export const text_larger = defineFunction<"text_larger", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "text_larger">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "text_larger">
}>("text_larger")

export const text_le = defineFunction<"text_le", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_le">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_le">
}>("text_le")

export const text_lt = defineFunction<"text_lt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_lt">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_lt">
}>("text_lt")

export const text_pattern_ge = defineFunction<"text_pattern_ge", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_ge">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_pattern_ge">
}>("text_pattern_ge")

export const text_pattern_gt = defineFunction<"text_pattern_gt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_gt">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_pattern_gt">
}>("text_pattern_gt")

export const text_pattern_le = defineFunction<"text_pattern_le", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_le">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_pattern_le">
}>("text_pattern_le")

export const text_pattern_lt = defineFunction<"text_pattern_lt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_lt">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "text_pattern_lt">
}>("text_pattern_lt")

export const text_smaller = defineFunction<"text_smaller", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "text_smaller">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "text_smaller">
}>("text_smaller")

export const textanycat = defineFunction<"textanycat", {
  (arg1: Input<t.text>, arg2: Input<t.anynonarray>): Output<t.text, "textanycat">
  (arg1: Input<t.text | t.null>, arg2: Input<t.anynonarray | t.null>): Output<t.text | t.null, "textanycat">
}>("textanycat")

export const textcat = defineFunction<"textcat", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "textcat">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "textcat">
}>("textcat")

export const texteq = defineFunction<"texteq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texteq">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "texteq">
}>("texteq")

export const texteqname = defineFunction<"texteqname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "texteqname">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "texteqname">
}>("texteqname")

export const textgename = defineFunction<"textgename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textgename">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "textgename">
}>("textgename")

export const textgtname = defineFunction<"textgtname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textgtname">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "textgtname">
}>("textgtname")

export const texticlike = defineFunction<"texticlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticlike">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "texticlike">
}>("texticlike")

export const texticnlike = defineFunction<"texticnlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticnlike">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "texticnlike">
}>("texticnlike")

export const texticregexeq = defineFunction<"texticregexeq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticregexeq">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "texticregexeq">
}>("texticregexeq")

export const texticregexne = defineFunction<"texticregexne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticregexne">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "texticregexne">
}>("texticregexne")

export const textlen = defineFunction<"textlen", {
  (arg: Input<t.text>): Output<t.int4, "textlen">
  (arg: Input<t.text | t.null>): Output<t.int4 | t.null, "textlen">
}>("textlen")

export const textlename = defineFunction<"textlename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textlename">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "textlename">
}>("textlename")

export const textlike = defineFunction<"textlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textlike">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "textlike">
}>("textlike")

export const textltname = defineFunction<"textltname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textltname">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "textltname">
}>("textltname")

export const textne = defineFunction<"textne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textne">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "textne">
}>("textne")

export const textnename = defineFunction<"textnename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textnename">
  (arg1: Input<t.text | t.null>, arg2: Input<t.name | t.null>): Output<t.bool | t.null, "textnename">
}>("textnename")

export const textnlike = defineFunction<"textnlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textnlike">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "textnlike">
}>("textnlike")

export const textregexeq = defineFunction<"textregexeq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textregexeq">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "textregexeq">
}>("textregexeq")

export const textregexne = defineFunction<"textregexne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textregexne">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "textregexne">
}>("textregexne")

export const textsend = defineFunction<"textsend", {
  (arg: Input<t.text>): Output<t.bytea, "textsend">
  (arg: Input<t.text | t.null>): Output<t.bytea | t.null, "textsend">
}>("textsend")

export const time = defineFunction<"time", {
  (arg: Input<t.timestamp | t.interval | t.timestamptz | t.timetz>): Output<t.time, "time">
  (arg: Input<t.timestamp | t.interval | t.timestamptz | t.timetz | t.null>): Output<t.time | t.null, "time">
  (arg1: Input<t.time>, arg2: Input<t.int4>): Output<t.time, "time">
  (arg1: Input<t.time | t.null>, arg2: Input<t.int4 | t.null>): Output<t.time | t.null, "time">
}>("time")

export const time_cmp = defineFunction<"time_cmp", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.int4, "time_cmp">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.int4 | t.null, "time_cmp">
}>("time_cmp")

export const time_eq = defineFunction<"time_eq", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_eq">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_eq">
}>("time_eq")

export const time_ge = defineFunction<"time_ge", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_ge">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_ge">
}>("time_ge")

export const time_gt = defineFunction<"time_gt", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_gt">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_gt">
}>("time_gt")

export const time_hash = defineFunction<"time_hash", {
  (arg: Input<t.time>): Output<t.int4, "time_hash">
  (arg: Input<t.time | t.null>): Output<t.int4 | t.null, "time_hash">
}>("time_hash")

export const time_hash_extended = defineFunction<"time_hash_extended", {
  (arg1: Input<t.time>, arg2: Input<t.int8>): Output<t.int8, "time_hash_extended">
  (arg1: Input<t.time | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "time_hash_extended">
}>("time_hash_extended")

export const time_larger = defineFunction<"time_larger", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.time, "time_larger">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.time | t.null, "time_larger">
}>("time_larger")

export const time_le = defineFunction<"time_le", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_le">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_le">
}>("time_le")

export const time_lt = defineFunction<"time_lt", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_lt">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_lt">
}>("time_lt")

export const time_mi_interval = defineFunction<"time_mi_interval", {
  (arg1: Input<t.time>, arg2: Input<t.interval>): Output<t.time, "time_mi_interval">
  (arg1: Input<t.time | t.null>, arg2: Input<t.interval | t.null>): Output<t.time | t.null, "time_mi_interval">
}>("time_mi_interval")

export const time_mi_time = defineFunction<"time_mi_time", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.interval, "time_mi_time">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.interval | t.null, "time_mi_time">
}>("time_mi_time")

export const time_ne = defineFunction<"time_ne", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_ne">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.bool | t.null, "time_ne">
}>("time_ne")

export const time_pl_interval = defineFunction<"time_pl_interval", {
  (arg1: Input<t.time>, arg2: Input<t.interval>): Output<t.time, "time_pl_interval">
  (arg1: Input<t.time | t.null>, arg2: Input<t.interval | t.null>): Output<t.time | t.null, "time_pl_interval">
}>("time_pl_interval")

export const time_send = defineFunction<"time_send", {
  (arg: Input<t.time>): Output<t.bytea, "time_send">
  (arg: Input<t.time | t.null>): Output<t.bytea | t.null, "time_send">
}>("time_send")

export const time_smaller = defineFunction<"time_smaller", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.time, "time_smaller">
  (arg1: Input<t.time | t.null>, arg2: Input<t.time | t.null>): Output<t.time | t.null, "time_smaller">
}>("time_smaller")

export const timedate_pl = defineFunction<"timedate_pl", {
  (arg1: Input<t.time>, arg2: Input<t.date>): Output<t.timestamp, "timedate_pl">
  (arg1: Input<t.time | t.null>, arg2: Input<t.date | t.null>): Output<t.timestamp | t.null, "timedate_pl">
}>("timedate_pl")

export const timeofday = defineFunction<"timeofday", {
  (): Output<t.text, "timeofday">
  (): Output<t.text | t.null, "timeofday">
}>("timeofday")

export const timestamp = defineFunction<"timestamp", {
  (arg1: Input<t.timestamp | t.date>, arg2: Input<t.int4 | t.time>): Output<t.timestamp, "timestamp">
  (arg1: Input<t.timestamp | t.date | t.null>, arg2: Input<t.int4 | t.time | t.null>): Output<t.timestamp | t.null, "timestamp">
  (arg: Input<t.date | t.timestamptz>): Output<t.timestamp, "timestamp">
  (arg: Input<t.date | t.timestamptz | t.null>): Output<t.timestamp | t.null, "timestamp">
}>("timestamp")

export const timestamp_cmp = defineFunction<"timestamp_cmp", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.int4, "timestamp_cmp">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.int4 | t.null, "timestamp_cmp">
}>("timestamp_cmp")

export const timestamp_cmp_date = defineFunction<"timestamp_cmp_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.int4, "timestamp_cmp_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.int4 | t.null, "timestamp_cmp_date">
}>("timestamp_cmp_date")

export const timestamp_cmp_timestamptz = defineFunction<"timestamp_cmp_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.int4, "timestamp_cmp_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.int4 | t.null, "timestamp_cmp_timestamptz">
}>("timestamp_cmp_timestamptz")

export const timestamp_eq = defineFunction<"timestamp_eq", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_eq">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_eq">
}>("timestamp_eq")

export const timestamp_eq_date = defineFunction<"timestamp_eq_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_eq_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_eq_date">
}>("timestamp_eq_date")

export const timestamp_eq_timestamptz = defineFunction<"timestamp_eq_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_eq_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_eq_timestamptz">
}>("timestamp_eq_timestamptz")

export const timestamp_ge = defineFunction<"timestamp_ge", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_ge">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_ge">
}>("timestamp_ge")

export const timestamp_ge_date = defineFunction<"timestamp_ge_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_ge_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_ge_date">
}>("timestamp_ge_date")

export const timestamp_ge_timestamptz = defineFunction<"timestamp_ge_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_ge_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_ge_timestamptz">
}>("timestamp_ge_timestamptz")

export const timestamp_gt = defineFunction<"timestamp_gt", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_gt">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_gt">
}>("timestamp_gt")

export const timestamp_gt_date = defineFunction<"timestamp_gt_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_gt_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_gt_date">
}>("timestamp_gt_date")

export const timestamp_gt_timestamptz = defineFunction<"timestamp_gt_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_gt_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_gt_timestamptz">
}>("timestamp_gt_timestamptz")

export const timestamp_hash = defineFunction<"timestamp_hash", {
  (arg: Input<t.timestamp>): Output<t.int4, "timestamp_hash">
  (arg: Input<t.timestamp | t.null>): Output<t.int4 | t.null, "timestamp_hash">
}>("timestamp_hash")

export const timestamp_hash_extended = defineFunction<"timestamp_hash_extended", {
  (arg1: Input<t.timestamp>, arg2: Input<t.int8>): Output<t.int8, "timestamp_hash_extended">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "timestamp_hash_extended">
}>("timestamp_hash_extended")

export const timestamp_larger = defineFunction<"timestamp_larger", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.timestamp, "timestamp_larger">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.timestamp | t.null, "timestamp_larger">
}>("timestamp_larger")

export const timestamp_le = defineFunction<"timestamp_le", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_le">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_le">
}>("timestamp_le")

export const timestamp_le_date = defineFunction<"timestamp_le_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_le_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_le_date">
}>("timestamp_le_date")

export const timestamp_le_timestamptz = defineFunction<"timestamp_le_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_le_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_le_timestamptz">
}>("timestamp_le_timestamptz")

export const timestamp_lt = defineFunction<"timestamp_lt", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_lt">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_lt">
}>("timestamp_lt")

export const timestamp_lt_date = defineFunction<"timestamp_lt_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_lt_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_lt_date">
}>("timestamp_lt_date")

export const timestamp_lt_timestamptz = defineFunction<"timestamp_lt_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_lt_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_lt_timestamptz">
}>("timestamp_lt_timestamptz")

export const timestamp_mi = defineFunction<"timestamp_mi", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.interval, "timestamp_mi">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.interval | t.null, "timestamp_mi">
}>("timestamp_mi")

export const timestamp_mi_interval = defineFunction<"timestamp_mi_interval", {
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>): Output<t.timestamp, "timestamp_mi_interval">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamp | t.null, "timestamp_mi_interval">
}>("timestamp_mi_interval")

export const timestamp_ne = defineFunction<"timestamp_ne", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_ne">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamp_ne">
}>("timestamp_ne")

export const timestamp_ne_date = defineFunction<"timestamp_ne_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_ne_date">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamp_ne_date">
}>("timestamp_ne_date")

export const timestamp_ne_timestamptz = defineFunction<"timestamp_ne_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_ne_timestamptz">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamp_ne_timestamptz">
}>("timestamp_ne_timestamptz")

export const timestamp_pl_interval = defineFunction<"timestamp_pl_interval", {
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>): Output<t.timestamp, "timestamp_pl_interval">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamp | t.null, "timestamp_pl_interval">
}>("timestamp_pl_interval")

export const timestamp_send = defineFunction<"timestamp_send", {
  (arg: Input<t.timestamp>): Output<t.bytea, "timestamp_send">
  (arg: Input<t.timestamp | t.null>): Output<t.bytea | t.null, "timestamp_send">
}>("timestamp_send")

export const timestamp_smaller = defineFunction<"timestamp_smaller", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.timestamp, "timestamp_smaller">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.timestamp | t.null, "timestamp_smaller">
}>("timestamp_smaller")

export const timestamptz = defineFunction<"timestamptz", {
  (arg: Input<t.date | t.timestamp>): Output<t.timestamptz, "timestamptz">
  (arg: Input<t.date | t.timestamp | t.null>): Output<t.timestamptz | t.null, "timestamptz">
  (arg1: Input<t.date | t.timestamptz>, arg2: Input<t.timetz | t.int4 | t.time>): Output<t.timestamptz, "timestamptz">
  (arg1: Input<t.date | t.timestamptz | t.null>, arg2: Input<t.timetz | t.int4 | t.time | t.null>): Output<t.timestamptz | t.null, "timestamptz">
}>("timestamptz")

export const timestamptz_cmp = defineFunction<"timestamptz_cmp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.int4, "timestamptz_cmp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.int4 | t.null, "timestamptz_cmp">
}>("timestamptz_cmp")

export const timestamptz_cmp_date = defineFunction<"timestamptz_cmp_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.int4, "timestamptz_cmp_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.int4 | t.null, "timestamptz_cmp_date">
}>("timestamptz_cmp_date")

export const timestamptz_cmp_timestamp = defineFunction<"timestamptz_cmp_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.int4, "timestamptz_cmp_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.int4 | t.null, "timestamptz_cmp_timestamp">
}>("timestamptz_cmp_timestamp")

export const timestamptz_eq = defineFunction<"timestamptz_eq", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_eq">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_eq">
}>("timestamptz_eq")

export const timestamptz_eq_date = defineFunction<"timestamptz_eq_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_eq_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_eq_date">
}>("timestamptz_eq_date")

export const timestamptz_eq_timestamp = defineFunction<"timestamptz_eq_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_eq_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_eq_timestamp">
}>("timestamptz_eq_timestamp")

export const timestamptz_ge = defineFunction<"timestamptz_ge", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_ge">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_ge">
}>("timestamptz_ge")

export const timestamptz_ge_date = defineFunction<"timestamptz_ge_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_ge_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_ge_date">
}>("timestamptz_ge_date")

export const timestamptz_ge_timestamp = defineFunction<"timestamptz_ge_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_ge_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_ge_timestamp">
}>("timestamptz_ge_timestamp")

export const timestamptz_gt = defineFunction<"timestamptz_gt", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_gt">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_gt">
}>("timestamptz_gt")

export const timestamptz_gt_date = defineFunction<"timestamptz_gt_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_gt_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_gt_date">
}>("timestamptz_gt_date")

export const timestamptz_gt_timestamp = defineFunction<"timestamptz_gt_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_gt_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_gt_timestamp">
}>("timestamptz_gt_timestamp")

export const timestamptz_larger = defineFunction<"timestamptz_larger", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "timestamptz_larger">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.timestamptz | t.null, "timestamptz_larger">
}>("timestamptz_larger")

export const timestamptz_le = defineFunction<"timestamptz_le", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_le">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_le">
}>("timestamptz_le")

export const timestamptz_le_date = defineFunction<"timestamptz_le_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_le_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_le_date">
}>("timestamptz_le_date")

export const timestamptz_le_timestamp = defineFunction<"timestamptz_le_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_le_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_le_timestamp">
}>("timestamptz_le_timestamp")

export const timestamptz_lt = defineFunction<"timestamptz_lt", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_lt">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_lt">
}>("timestamptz_lt")

export const timestamptz_lt_date = defineFunction<"timestamptz_lt_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_lt_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_lt_date">
}>("timestamptz_lt_date")

export const timestamptz_lt_timestamp = defineFunction<"timestamptz_lt_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_lt_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_lt_timestamp">
}>("timestamptz_lt_timestamp")

export const timestamptz_mi = defineFunction<"timestamptz_mi", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.interval, "timestamptz_mi">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.interval | t.null, "timestamptz_mi">
}>("timestamptz_mi")

export const timestamptz_mi_interval = defineFunction<"timestamptz_mi_interval", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>): Output<t.timestamptz, "timestamptz_mi_interval">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamptz | t.null, "timestamptz_mi_interval">
}>("timestamptz_mi_interval")

export const timestamptz_ne = defineFunction<"timestamptz_ne", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_ne">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.bool | t.null, "timestamptz_ne">
}>("timestamptz_ne")

export const timestamptz_ne_date = defineFunction<"timestamptz_ne_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_ne_date">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.date | t.null>): Output<t.bool | t.null, "timestamptz_ne_date">
}>("timestamptz_ne_date")

export const timestamptz_ne_timestamp = defineFunction<"timestamptz_ne_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_ne_timestamp">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.bool | t.null, "timestamptz_ne_timestamp">
}>("timestamptz_ne_timestamp")

export const timestamptz_pl_interval = defineFunction<"timestamptz_pl_interval", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>): Output<t.timestamptz, "timestamptz_pl_interval">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.interval | t.null>): Output<t.timestamptz | t.null, "timestamptz_pl_interval">
}>("timestamptz_pl_interval")

export const timestamptz_send = defineFunction<"timestamptz_send", {
  (arg: Input<t.timestamptz>): Output<t.bytea, "timestamptz_send">
  (arg: Input<t.timestamptz | t.null>): Output<t.bytea | t.null, "timestamptz_send">
}>("timestamptz_send")

export const timestamptz_smaller = defineFunction<"timestamptz_smaller", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "timestamptz_smaller">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.timestamptz | t.null, "timestamptz_smaller">
}>("timestamptz_smaller")

export const timetz = defineFunction<"timetz", {
  (arg: Input<t.timestamptz | t.time>): Output<t.timetz, "timetz">
  (arg: Input<t.timestamptz | t.time | t.null>): Output<t.timetz | t.null, "timetz">
  (arg1: Input<t.timetz>, arg2: Input<t.int4>): Output<t.timetz, "timetz">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.int4 | t.null>): Output<t.timetz | t.null, "timetz">
}>("timetz")

export const timetz_cmp = defineFunction<"timetz_cmp", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.int4, "timetz_cmp">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.int4 | t.null, "timetz_cmp">
}>("timetz_cmp")

export const timetz_eq = defineFunction<"timetz_eq", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_eq">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_eq">
}>("timetz_eq")

export const timetz_ge = defineFunction<"timetz_ge", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_ge">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_ge">
}>("timetz_ge")

export const timetz_gt = defineFunction<"timetz_gt", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_gt">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_gt">
}>("timetz_gt")

export const timetz_hash = defineFunction<"timetz_hash", {
  (arg: Input<t.timetz>): Output<t.int4, "timetz_hash">
  (arg: Input<t.timetz | t.null>): Output<t.int4 | t.null, "timetz_hash">
}>("timetz_hash")

export const timetz_hash_extended = defineFunction<"timetz_hash_extended", {
  (arg1: Input<t.timetz>, arg2: Input<t.int8>): Output<t.int8, "timetz_hash_extended">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "timetz_hash_extended">
}>("timetz_hash_extended")

export const timetz_larger = defineFunction<"timetz_larger", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.timetz, "timetz_larger">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.timetz | t.null, "timetz_larger">
}>("timetz_larger")

export const timetz_le = defineFunction<"timetz_le", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_le">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_le">
}>("timetz_le")

export const timetz_lt = defineFunction<"timetz_lt", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_lt">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_lt">
}>("timetz_lt")

export const timetz_mi_interval = defineFunction<"timetz_mi_interval", {
  (arg1: Input<t.timetz>, arg2: Input<t.interval>): Output<t.timetz, "timetz_mi_interval">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.interval | t.null>): Output<t.timetz | t.null, "timetz_mi_interval">
}>("timetz_mi_interval")

export const timetz_ne = defineFunction<"timetz_ne", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_ne">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.bool | t.null, "timetz_ne">
}>("timetz_ne")

export const timetz_pl_interval = defineFunction<"timetz_pl_interval", {
  (arg1: Input<t.timetz>, arg2: Input<t.interval>): Output<t.timetz, "timetz_pl_interval">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.interval | t.null>): Output<t.timetz | t.null, "timetz_pl_interval">
}>("timetz_pl_interval")

export const timetz_send = defineFunction<"timetz_send", {
  (arg: Input<t.timetz>): Output<t.bytea, "timetz_send">
  (arg: Input<t.timetz | t.null>): Output<t.bytea | t.null, "timetz_send">
}>("timetz_send")

export const timetz_smaller = defineFunction<"timetz_smaller", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.timetz, "timetz_smaller">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.timetz | t.null>): Output<t.timetz | t.null, "timetz_smaller">
}>("timetz_smaller")

export const timetzdate_pl = defineFunction<"timetzdate_pl", {
  (arg1: Input<t.timetz>, arg2: Input<t.date>): Output<t.timestamptz, "timetzdate_pl">
  (arg1: Input<t.timetz | t.null>, arg2: Input<t.date | t.null>): Output<t.timestamptz | t.null, "timetzdate_pl">
}>("timetzdate_pl")

export const timezone = defineFunction<"timezone", {
  (arg1: Input<t.interval | t.text>, arg2: Input<t.timestamptz>): Output<t.timestamp, "timezone">
  (arg1: Input<t.interval | t.text | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.timestamp | t.null, "timezone">
  (arg1: Input<t.text | t.interval>, arg2: Input<t.timetz>): Output<t.timetz, "timezone">
  (arg1: Input<t.text | t.interval | t.null>, arg2: Input<t.timetz | t.null>): Output<t.timetz | t.null, "timezone">
  (arg1: Input<t.text | t.interval>, arg2: Input<t.timestamp>): Output<t.timestamptz, "timezone">
  (arg1: Input<t.text | t.interval | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.timestamptz | t.null, "timezone">
}>("timezone")

/** 
 * A system function for converting a string from another encoding
 * 
 * @see https://pgpedia.info/t/to_ascii.html
 */
export const to_ascii = defineFunction<"to_ascii", {
  (arg: Input<t.text>): Output<t.text, "to_ascii">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "to_ascii">
  (arg1: Input<t.text>, arg2: Input<t.int4 | t.name>): Output<t.text, "to_ascii">
  (arg1: Input<t.text | t.null>, arg2: Input<t.int4 | t.name | t.null>): Output<t.text | t.null, "to_ascii">
}>("to_ascii")

/** 
 * A function for formatting dates, timestamps and numeric types
 * 
 * @see https://pgpedia.info/t/to_char.html
 */
export const to_char = defineFunction<"to_char", {
  (arg1: Input<t.timestamptz | t.numeric | t.int4 | t.int8 | t.float4 | t.float8 | t.interval | t.timestamp>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.timestamptz | t.numeric | t.int4 | t.int8 | t.float4 | t.float8 | t.interval | t.timestamp | t.null>, arg2: Input<t.text | t.null>): Output<t.text | t.null, "to_char">
}>("to_char")

/** 
 * A function for converting a date string into the DATE datatype
 * 
 * @see https://pgpedia.info/t/to_date.html
 */
export const to_date = defineFunction<"to_date", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.date, "to_date">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.date | t.null, "to_date">
}>("to_date")

/** 
 * A function for converting an integer into hexadecimal
 * 
 * @see https://pgpedia.info/t/to_hex.html
 */
export const to_hex = defineFunction<"to_hex", {
  (arg: Input<t.int4 | t.int8>): Output<t.text, "to_hex">
  (arg: Input<t.int4 | t.int8 | t.null>): Output<t.text | t.null, "to_hex">
}>("to_hex")

export const to_json = defineFunction<"to_json", {
  (arg: Input<t.anyelement>): Output<t.json, "to_json">
  (arg: Input<t.anyelement | t.null>): Output<t.json | t.null, "to_json">
}>("to_json")

export const to_jsonb = defineFunction<"to_jsonb", {
  (arg: Input<t.anyelement>): Output<t.jsonb, "to_jsonb">
  (arg: Input<t.anyelement | t.null>): Output<t.jsonb | t.null, "to_jsonb">
}>("to_jsonb")

/** 
 * A function for converting a numeric string into the NUMERIC datatype
 * 
 * @see https://pgpedia.info/t/to_number.html
 */
export const to_number = defineFunction<"to_number", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.numeric, "to_number">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.numeric | t.null, "to_number">
}>("to_number")

/** 
 * A function for converting a timestamp string into the TIMESTAMPTZ datatype
 * 
 * @see https://pgpedia.info/t/to_timestamp.html
 */
export const to_timestamp = defineFunction<"to_timestamp", {
  (arg: Input<t.float8>): Output<t.timestamptz, "to_timestamp">
  (arg: Input<t.float8 | t.null>): Output<t.timestamptz | t.null, "to_timestamp">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.timestamptz, "to_timestamp">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.timestamptz | t.null, "to_timestamp">
}>("to_timestamp")

/** 
 * A function for converting text to a tsquery
 * 
 * @see https://pgpedia.info/t/to_tsquery.html
 */
export const to_tsquery = defineFunction<"to_tsquery", {
  (arg: Input<t.text>): Output<t.tsquery, "to_tsquery">
  (arg: Input<t.text | t.null>): Output<t.tsquery | t.null, "to_tsquery">
}>("to_tsquery")

export const to_tsvector = defineFunction<"to_tsvector", {
  (arg: Input<t.text | t.jsonb | t.json>): Output<t.tsvector, "to_tsvector">
  (arg: Input<t.text | t.jsonb | t.json | t.null>): Output<t.tsvector | t.null, "to_tsvector">
}>("to_tsvector")

/** 
 * A function returning the point-in-time the current transaction started
 * 
 * @see https://pgpedia.info/t/transaction_timestamp.html
 */
export const transaction_timestamp = defineFunction<"transaction_timestamp", {
  (): Output<t.timestamptz, "transaction_timestamp">
  (): Output<t.timestamptz | t.null, "transaction_timestamp">
}>("transaction_timestamp")

/** 
 * A system function for replacing sets of characters with another set
 * 
 * @see https://pgpedia.info/t/translate.html
 */
export const translate = defineFunction<"translate", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "translate">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "translate">
}>("translate")

/** 
 * A function for removing elements from the end of an array
 * 
 * @see https://pgpedia.info/t/trim_array.html
 */
export const trim_array = defineFunction<"trim_array", {
  <T extends t.anyarray>(arg1: Input<T>, arg2: Input<t.int4>): Output<T, "trim_array">
  <T extends t.anyarray>(arg1: Input<T | t.null>, arg2: Input<t.int4 | t.null>): Output<T | t.null, "trim_array">
}>("trim_array")

/** 
 * A function reducing the value's scale by removing trailing zeroes
 * 
 * @see https://pgpedia.info/t/trim_scale.html
 */
export const trim_scale = defineFunction<"trim_scale", {
  (arg: Input<t.numeric>): Output<t.numeric, "trim_scale">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "trim_scale">
}>("trim_scale")

export const trunc = defineFunction<"trunc", {
  (arg: Input<t.float8>): Output<t.float8, "trunc">
  (arg: Input<t.float8 | t.null>): Output<t.float8 | t.null, "trunc">
  (arg: Input<t.macaddr>): Output<t.macaddr, "trunc">
  (arg: Input<t.macaddr | t.null>): Output<t.macaddr | t.null, "trunc">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "trunc">
  (arg1: Input<t.numeric | t.null>, arg2: Input<t.int4 | t.null>): Output<t.numeric | t.null, "trunc">
  (arg: Input<t.numeric>): Output<t.numeric, "trunc">
  (arg: Input<t.numeric | t.null>): Output<t.numeric | t.null, "trunc">
}>("trunc")

/** 
 * A function for removing lexeme(s) from a tsvector
 * 
 * @see https://pgpedia.info/t/ts_delete.html
 */
export const ts_delete = defineFunction<"ts_delete", {
  (arg1: Input<t.tsvector>, arg2: Input<t.text | t.array<t.text>>): Output<t.tsvector, "ts_delete">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.text | t.array<t.text> | t.null>): Output<t.tsvector | t.null, "ts_delete">
}>("ts_delete")

export const ts_filter = defineFunction<"ts_filter", {
  (arg1: Input<t.tsvector>, arg2: Input<t.array<t.char>>): Output<t.tsvector, "ts_filter">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.array<t.char> | t.null>): Output<t.tsvector | t.null, "ts_filter">
}>("ts_filter")

export const ts_headline = defineFunction<"ts_headline", {
  (arg1: Input<t.text>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.text, "ts_headline">
  (arg1: Input<t.text | t.null>, arg2: Input<t.tsquery | t.null>, arg3: Input<t.text | t.null>): Output<t.text | t.null, "ts_headline">
  (arg1: Input<t.text>, arg2: Input<t.tsquery>): Output<t.text, "ts_headline">
  (arg1: Input<t.text | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.text | t.null, "ts_headline">
  (arg1: Input<t.jsonb>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.jsonb, "ts_headline">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.tsquery | t.null>, arg3: Input<t.text | t.null>): Output<t.jsonb | t.null, "ts_headline">
  (arg1: Input<t.jsonb>, arg2: Input<t.tsquery>): Output<t.jsonb, "ts_headline">
  (arg1: Input<t.jsonb | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.jsonb | t.null, "ts_headline">
  (arg1: Input<t.json>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.json, "ts_headline">
  (arg1: Input<t.json | t.null>, arg2: Input<t.tsquery | t.null>, arg3: Input<t.text | t.null>): Output<t.json | t.null, "ts_headline">
  (arg1: Input<t.json>, arg2: Input<t.tsquery>): Output<t.json, "ts_headline">
  (arg1: Input<t.json | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.json | t.null, "ts_headline">
}>("ts_headline")

export const ts_match_qv = defineFunction<"ts_match_qv", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsvector>): Output<t.bool, "ts_match_qv">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "ts_match_qv">
}>("ts_match_qv")

export const ts_match_tq = defineFunction<"ts_match_tq", {
  (arg1: Input<t.text>, arg2: Input<t.tsquery>): Output<t.bool, "ts_match_tq">
  (arg1: Input<t.text | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "ts_match_tq">
}>("ts_match_tq")

export const ts_match_tt = defineFunction<"ts_match_tt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "ts_match_tt">
  (arg1: Input<t.text | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "ts_match_tt">
}>("ts_match_tt")

export const ts_match_vq = defineFunction<"ts_match_vq", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.bool, "ts_match_vq">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "ts_match_vq">
}>("ts_match_vq")

export const ts_rank = defineFunction<"ts_rank", {
  (arg1: Input<t.array<t.float4>>, arg2: Input<t.tsvector>, arg3: Input<t.tsquery>, arg4: Input<t.int4>): Output<t.float4, "ts_rank">
  (arg1: Input<t.array<t.float4> | t.null>, arg2: Input<t.tsvector | t.null>, arg3: Input<t.tsquery | t.null>, arg4: Input<t.int4 | t.null>): Output<t.float4 | t.null, "ts_rank">
  (arg1: Input<t.array<t.float4> | t.tsvector>, arg2: Input<t.tsvector | t.tsquery>, arg3: Input<t.tsquery | t.int4>): Output<t.float4, "ts_rank">
  (arg1: Input<t.array<t.float4> | t.tsvector | t.null>, arg2: Input<t.tsvector | t.tsquery | t.null>, arg3: Input<t.tsquery | t.int4 | t.null>): Output<t.float4 | t.null, "ts_rank">
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.float4, "ts_rank">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.float4 | t.null, "ts_rank">
}>("ts_rank")

export const ts_rank_cd = defineFunction<"ts_rank_cd", {
  (arg1: Input<t.array<t.float4>>, arg2: Input<t.tsvector>, arg3: Input<t.tsquery>, arg4: Input<t.int4>): Output<t.float4, "ts_rank_cd">
  (arg1: Input<t.array<t.float4> | t.null>, arg2: Input<t.tsvector | t.null>, arg3: Input<t.tsquery | t.null>, arg4: Input<t.int4 | t.null>): Output<t.float4 | t.null, "ts_rank_cd">
  (arg1: Input<t.array<t.float4> | t.tsvector>, arg2: Input<t.tsvector | t.tsquery>, arg3: Input<t.tsquery | t.int4>): Output<t.float4, "ts_rank_cd">
  (arg1: Input<t.array<t.float4> | t.tsvector | t.null>, arg2: Input<t.tsvector | t.tsquery | t.null>, arg3: Input<t.tsquery | t.int4 | t.null>): Output<t.float4 | t.null, "ts_rank_cd">
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.float4, "ts_rank_cd">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.float4 | t.null, "ts_rank_cd">
}>("ts_rank_cd")

export const ts_rewrite = defineFunction<"ts_rewrite", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>, arg3: Input<t.tsquery>): Output<t.tsquery, "ts_rewrite">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>, arg3: Input<t.tsquery | t.null>): Output<t.tsquery | t.null, "ts_rewrite">
  (arg1: Input<t.tsquery>, arg2: Input<t.text>): Output<t.tsquery, "ts_rewrite">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.text | t.null>): Output<t.tsquery | t.null, "ts_rewrite">
}>("ts_rewrite")

export const tsq_mcontained = defineFunction<"tsq_mcontained", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsq_mcontained">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsq_mcontained">
}>("tsq_mcontained")

export const tsq_mcontains = defineFunction<"tsq_mcontains", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsq_mcontains">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsq_mcontains">
}>("tsq_mcontains")

export const tsquery_and = defineFunction<"tsquery_and", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_and">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.tsquery | t.null, "tsquery_and">
}>("tsquery_and")

export const tsquery_cmp = defineFunction<"tsquery_cmp", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.int4, "tsquery_cmp">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.int4 | t.null, "tsquery_cmp">
}>("tsquery_cmp")

export const tsquery_eq = defineFunction<"tsquery_eq", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_eq">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_eq">
}>("tsquery_eq")

export const tsquery_ge = defineFunction<"tsquery_ge", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_ge">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_ge">
}>("tsquery_ge")

export const tsquery_gt = defineFunction<"tsquery_gt", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_gt">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_gt">
}>("tsquery_gt")

export const tsquery_le = defineFunction<"tsquery_le", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_le">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_le">
}>("tsquery_le")

export const tsquery_lt = defineFunction<"tsquery_lt", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_lt">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_lt">
}>("tsquery_lt")

export const tsquery_ne = defineFunction<"tsquery_ne", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_ne">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.bool | t.null, "tsquery_ne">
}>("tsquery_ne")

export const tsquery_not = defineFunction<"tsquery_not", {
  (arg: Input<t.tsquery>): Output<t.tsquery, "tsquery_not">
  (arg: Input<t.tsquery | t.null>): Output<t.tsquery | t.null, "tsquery_not">
}>("tsquery_not")

export const tsquery_or = defineFunction<"tsquery_or", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_or">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.tsquery | t.null, "tsquery_or">
}>("tsquery_or")

export const tsquery_phrase = defineFunction<"tsquery_phrase", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_phrase">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>): Output<t.tsquery | t.null, "tsquery_phrase">
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>, arg3: Input<t.int4>): Output<t.tsquery, "tsquery_phrase">
  (arg1: Input<t.tsquery | t.null>, arg2: Input<t.tsquery | t.null>, arg3: Input<t.int4 | t.null>): Output<t.tsquery | t.null, "tsquery_phrase">
}>("tsquery_phrase")

export const tsquerysend = defineFunction<"tsquerysend", {
  (arg: Input<t.tsquery>): Output<t.bytea, "tsquerysend">
  (arg: Input<t.tsquery | t.null>): Output<t.bytea | t.null, "tsquerysend">
}>("tsquerysend")

export const tsrange = defineFunction<"tsrange", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.tsrange, "tsrange">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.text>): Output<t.tsrange, "tsrange">
}>("tsrange")

export const tsrange_subdiff = defineFunction<"tsrange_subdiff", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.float8, "tsrange_subdiff">
  (arg1: Input<t.timestamp | t.null>, arg2: Input<t.timestamp | t.null>): Output<t.float8 | t.null, "tsrange_subdiff">
}>("tsrange_subdiff")

export const tstzrange = defineFunction<"tstzrange", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.tstzrange, "tstzrange">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.text>): Output<t.tstzrange, "tstzrange">
}>("tstzrange")

export const tstzrange_subdiff = defineFunction<"tstzrange_subdiff", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.float8, "tstzrange_subdiff">
  (arg1: Input<t.timestamptz | t.null>, arg2: Input<t.timestamptz | t.null>): Output<t.float8 | t.null, "tstzrange_subdiff">
}>("tstzrange_subdiff")

export const tsvector_cmp = defineFunction<"tsvector_cmp", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.int4, "tsvector_cmp">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.int4 | t.null, "tsvector_cmp">
}>("tsvector_cmp")

export const tsvector_concat = defineFunction<"tsvector_concat", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.tsvector, "tsvector_concat">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.tsvector | t.null, "tsvector_concat">
}>("tsvector_concat")

export const tsvector_eq = defineFunction<"tsvector_eq", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_eq">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_eq">
}>("tsvector_eq")

export const tsvector_ge = defineFunction<"tsvector_ge", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_ge">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_ge">
}>("tsvector_ge")

export const tsvector_gt = defineFunction<"tsvector_gt", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_gt">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_gt">
}>("tsvector_gt")

export const tsvector_le = defineFunction<"tsvector_le", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_le">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_le">
}>("tsvector_le")

export const tsvector_lt = defineFunction<"tsvector_lt", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_lt">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_lt">
}>("tsvector_lt")

export const tsvector_ne = defineFunction<"tsvector_ne", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_ne">
  (arg1: Input<t.tsvector | t.null>, arg2: Input<t.tsvector | t.null>): Output<t.bool | t.null, "tsvector_ne">
}>("tsvector_ne")

/** 
 * A function converting a tsvector to lexemes
 * 
 * @see https://pgpedia.info/t/tsvector_to_array.html
 */
export const tsvector_to_array = defineFunction<"tsvector_to_array", {
  (arg: Input<t.tsvector>): Output<t.array<t.text>, "tsvector_to_array">
  (arg: Input<t.tsvector | t.null>): Output<t.array<t.text> | t.null, "tsvector_to_array">
}>("tsvector_to_array")

export const tsvectorsend = defineFunction<"tsvectorsend", {
  (arg: Input<t.tsvector>): Output<t.bytea, "tsvectorsend">
  (arg: Input<t.tsvector | t.null>): Output<t.bytea | t.null, "tsvectorsend">
}>("tsvectorsend")

/** 
 * A function returning the current transaction ID
 * 
 * @see https://pgpedia.info/t/txid_current.html
 */
export const txid_current = defineFunction<"txid_current", {
  (): Output<t.int8, "txid_current">
  (): Output<t.int8 | t.null, "txid_current">
}>("txid_current")

/** 
 * A function returning the current transaction ID, if assigned
 * 
 * @see https://pgpedia.info/t/txid_current_if_assigned.html
 */
export const txid_current_if_assigned = defineFunction<"txid_current_if_assigned", {
  (): Output<t.int8, "txid_current_if_assigned">
  (): Output<t.int8 | t.null, "txid_current_if_assigned">
}>("txid_current_if_assigned")

/** 
 * A function reporting the commit status of a transaction
 * 
 * @see https://pgpedia.info/t/txid_status.html
 */
export const txid_status = defineFunction<"txid_status", {
  (arg: Input<t.int8>): Output<t.text, "txid_status">
  (arg: Input<t.int8 | t.null>): Output<t.text | t.null, "txid_status">
}>("txid_status")

/** 
 * A function for decoding a string with Unicode escape sequences
 * 
 * @see https://pgpedia.info/u/unistr.html
 */
export const unistr = defineFunction<"unistr", {
  (arg: Input<t.text>): Output<t.text, "unistr">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "unistr">
}>("unistr")

/** 
 * A system function for expanding an array to a set of rows
 * 
 * @see https://pgpedia.info/u/unnest.html
 */
export const unnest = defineFunction<"unnest", {
  <T extends t.anyarray>(arg: Input<T>): Output<t.elementof<T>, "unnest">
  <T extends t.anyarray>(arg: Input<T | t.null>): Output<t.elementof<T> | t.null, "unnest">
}>("unnest")

/** 
 * A  system function for converting a string to upper case
 * 
 * @see https://pgpedia.info/u/upper.html
 */
export const upper = defineFunction<"upper", {
  (arg: Input<t.text>): Output<t.text, "upper">
  (arg: Input<t.text | t.null>): Output<t.text | t.null, "upper">
}>("upper")

export const uuid_cmp = defineFunction<"uuid_cmp", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.int4, "uuid_cmp">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.int4 | t.null, "uuid_cmp">
}>("uuid_cmp")

export const uuid_eq = defineFunction<"uuid_eq", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_eq">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_eq">
}>("uuid_eq")

export const uuid_ge = defineFunction<"uuid_ge", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_ge">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_ge">
}>("uuid_ge")

export const uuid_gt = defineFunction<"uuid_gt", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_gt">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_gt">
}>("uuid_gt")

export const uuid_hash = defineFunction<"uuid_hash", {
  (arg: Input<t.uuid>): Output<t.int4, "uuid_hash">
  (arg: Input<t.uuid | t.null>): Output<t.int4 | t.null, "uuid_hash">
}>("uuid_hash")

export const uuid_hash_extended = defineFunction<"uuid_hash_extended", {
  (arg1: Input<t.uuid>, arg2: Input<t.int8>): Output<t.int8, "uuid_hash_extended">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.int8 | t.null>): Output<t.int8 | t.null, "uuid_hash_extended">
}>("uuid_hash_extended")

export const uuid_le = defineFunction<"uuid_le", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_le">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_le">
}>("uuid_le")

export const uuid_lt = defineFunction<"uuid_lt", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_lt">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_lt">
}>("uuid_lt")

export const uuid_ne = defineFunction<"uuid_ne", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_ne">
  (arg1: Input<t.uuid | t.null>, arg2: Input<t.uuid | t.null>): Output<t.bool | t.null, "uuid_ne">
}>("uuid_ne")

export const uuid_send = defineFunction<"uuid_send", {
  (arg: Input<t.uuid>): Output<t.bytea, "uuid_send">
  (arg: Input<t.uuid | t.null>): Output<t.bytea | t.null, "uuid_send">
}>("uuid_send")

export const var_pop = defineFunction<"var_pop", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "var_pop">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "var_pop">
}>("var_pop")

export const var_samp = defineFunction<"var_samp", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "var_samp">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "var_samp">
}>("var_samp")

export const varbit = defineFunction<"varbit", {
  (arg1: Input<t.varbit>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.varbit, "varbit">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.varbit | t.null, "varbit">
}>("varbit")

export const varbit_send = defineFunction<"varbit_send", {
  (arg: Input<t.varbit>): Output<t.bytea, "varbit_send">
  (arg: Input<t.varbit | t.null>): Output<t.bytea | t.null, "varbit_send">
}>("varbit_send")

export const varbitcmp = defineFunction<"varbitcmp", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.int4, "varbitcmp">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.int4 | t.null, "varbitcmp">
}>("varbitcmp")

export const varbiteq = defineFunction<"varbiteq", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbiteq">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbiteq">
}>("varbiteq")

export const varbitge = defineFunction<"varbitge", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitge">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbitge">
}>("varbitge")

export const varbitgt = defineFunction<"varbitgt", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitgt">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbitgt">
}>("varbitgt")

export const varbitle = defineFunction<"varbitle", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitle">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbitle">
}>("varbitle")

export const varbitlt = defineFunction<"varbitlt", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitlt">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbitlt">
}>("varbitlt")

export const varbitne = defineFunction<"varbitne", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitne">
  (arg1: Input<t.varbit | t.null>, arg2: Input<t.varbit | t.null>): Output<t.bool | t.null, "varbitne">
}>("varbitne")

export const varchar = defineFunction<"varchar", {
  (arg1: Input<t.varchar>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.varchar, "varchar">
  (arg1: Input<t.varchar | t.null>, arg2: Input<t.int4 | t.null>, arg3: Input<t.bool | t.null>): Output<t.varchar | t.null, "varchar">
  (arg: Input<t.name>): Output<t.varchar, "varchar">
  (arg: Input<t.name | t.null>): Output<t.varchar | t.null, "varchar">
}>("varchar")

export const varcharsend = defineFunction<"varcharsend", {
  (arg: Input<t.varchar>): Output<t.bytea, "varcharsend">
  (arg: Input<t.varchar | t.null>): Output<t.bytea | t.null, "varcharsend">
}>("varcharsend")

export const variance = defineFunction<"variance", {
  (arg: Input<t.int8 | t.int4 | t.int2 | t.numeric>): Output<t.numeric, "variance">
  (arg: Input<t.float4 | t.float8>): Output<t.float8, "variance">
}>("variance")

/** 
 * A function returning details of the server version
 * 
 * @see https://pgpedia.info/v/version.html
 */
export const version = defineFunction<"version", {
  (): Output<t.text, "version">
  (): Output<t.text | t.null, "version">
}>("version")

export const void_send = defineFunction<"void_send", {
  (arg: Input<t.void>): Output<t.bytea, "void_send">
  (arg: Input<t.void | t.null>): Output<t.bytea | t.null, "void_send">
}>("void_send")

/** 
 * A function converting search engine-style queries to tsquery
 * 
 * @see https://pgpedia.info/w/websearch_to_tsquery.html
 */
export const websearch_to_tsquery = defineFunction<"websearch_to_tsquery", {
  (arg: Input<t.text>): Output<t.tsquery, "websearch_to_tsquery">
  (arg: Input<t.text | t.null>): Output<t.tsquery | t.null, "websearch_to_tsquery">
}>("websearch_to_tsquery")

export const width = defineFunction<"width", {
  (arg: Input<t.box>): Output<t.float8, "width">
  (arg: Input<t.box | t.null>): Output<t.float8 | t.null, "width">
}>("width")

export const width_bucket = defineFunction<"width_bucket", {
  (arg1: Input<t.float8 | t.numeric>, arg2: Input<t.float8 | t.numeric>, arg3: Input<t.float8 | t.numeric>, arg4: Input<t.int4>): Output<t.int4, "width_bucket">
  (arg1: Input<t.float8 | t.numeric | t.null>, arg2: Input<t.float8 | t.numeric | t.null>, arg3: Input<t.float8 | t.numeric | t.null>, arg4: Input<t.int4 | t.null>): Output<t.int4 | t.null, "width_bucket">
  <T extends t.anycompatiblearray>(arg1: Input<t.elementof<T>>, arg2: Input<T>): Output<t.int4, "width_bucket">
  <T extends t.anycompatiblearray>(arg1: Input<t.elementof<T> | t.null>, arg2: Input<T | t.null>): Output<t.int4 | t.null, "width_bucket">
}>("width_bucket")

/** 
 * A former contrib module providing basic XML support
 * 
 * @see https://pgpedia.info/x/xml-contrib-module.html
 */
export const xml = defineFunction<"xml", {
  (arg: Input<t.text>): Output<t.xml, "xml">
  (arg: Input<t.text | t.null>): Output<t.xml | t.null, "xml">
}>("xml")

export const xml_is_well_formed = defineFunction<"xml_is_well_formed", {
  (arg: Input<t.text>): Output<t.bool, "xml_is_well_formed">
  (arg: Input<t.text | t.null>): Output<t.bool | t.null, "xml_is_well_formed">
}>("xml_is_well_formed")

export const xml_is_well_formed_content = defineFunction<"xml_is_well_formed_content", {
  (arg: Input<t.text>): Output<t.bool, "xml_is_well_formed_content">
  (arg: Input<t.text | t.null>): Output<t.bool | t.null, "xml_is_well_formed_content">
}>("xml_is_well_formed_content")

export const xml_is_well_formed_document = defineFunction<"xml_is_well_formed_document", {
  (arg: Input<t.text>): Output<t.bool, "xml_is_well_formed_document">
  (arg: Input<t.text | t.null>): Output<t.bool | t.null, "xml_is_well_formed_document">
}>("xml_is_well_formed_document")

export const xml_send = defineFunction<"xml_send", {
  (arg: Input<t.xml>): Output<t.bytea, "xml_send">
  (arg: Input<t.xml | t.null>): Output<t.bytea | t.null, "xml_send">
}>("xml_send")

export const xmlagg = defineFunction<"xmlagg", {
  (arg: Input<t.xml>): Output<t.xml, "xmlagg">
}>("xmlagg")

/** 
 * A function for generating an XML comment.
 * 
 * @see https://pgpedia.info/x/xmlcomment.html
 */
export const xmlcomment = defineFunction<"xmlcomment", {
  (arg: Input<t.text>): Output<t.xml, "xmlcomment">
  (arg: Input<t.text | t.null>): Output<t.xml | t.null, "xmlcomment">
}>("xmlcomment")

export const xmlconcat2 = defineFunction<"xmlconcat2", {
  (arg1: Input<t.xml>, arg2: Input<t.xml>): Output<t.xml, "xmlconcat2">
}>("xmlconcat2")

export const xmlexists = defineFunction<"xmlexists", {
  (arg1: Input<t.text>, arg2: Input<t.xml>): Output<t.bool, "xmlexists">
  (arg1: Input<t.text | t.null>, arg2: Input<t.xml | t.null>): Output<t.bool | t.null, "xmlexists">
}>("xmlexists")

export const xmlvalidate = defineFunction<"xmlvalidate", {
  (arg1: Input<t.xml>, arg2: Input<t.text>): Output<t.bool, "xmlvalidate">
  (arg1: Input<t.xml | t.null>, arg2: Input<t.text | t.null>): Output<t.bool | t.null, "xmlvalidate">
}>("xmlvalidate")

export const xpath = defineFunction<"xpath", {
  (arg1: Input<t.text>, arg2: Input<t.xml>, arg3: Input<t.array<t.text>>): Output<t.array<t.xml>, "xpath">
  (arg1: Input<t.text | t.null>, arg2: Input<t.xml | t.null>, arg3: Input<t.array<t.text> | t.null>): Output<t.array<t.xml> | t.null, "xpath">
  (arg1: Input<t.text>, arg2: Input<t.xml>): Output<t.array<t.xml>, "xpath">
  (arg1: Input<t.text | t.null>, arg2: Input<t.xml | t.null>): Output<t.array<t.xml> | t.null, "xpath">
}>("xpath")

export const xpath_exists = defineFunction<"xpath_exists", {
  (arg1: Input<t.text>, arg2: Input<t.xml>, arg3: Input<t.array<t.text>>): Output<t.bool, "xpath_exists">
  (arg1: Input<t.text | t.null>, arg2: Input<t.xml | t.null>, arg3: Input<t.array<t.text> | t.null>): Output<t.bool | t.null, "xpath_exists">
  (arg1: Input<t.text>, arg2: Input<t.xml>): Output<t.bool, "xpath_exists">
  (arg1: Input<t.text | t.null>, arg2: Input<t.xml | t.null>): Output<t.bool | t.null, "xpath_exists">
}>("xpath_exists")