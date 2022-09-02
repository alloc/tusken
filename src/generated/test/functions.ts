import { CallExpression as Output, defineFunction, Input } from 'tusken'
import * as t from './types'

export const abbrev = defineFunction<"abbrev", {
  (arg:: Input<t.inet>): Output<t.text, "abbrev">
  (arg:: Input<t.cidr>): Output<t.text, "abbrev">
}>("abbrev")

export const abs = defineFunction<"abs", {
  (arg:: Input<t.float4>): Output<t.float4, "abs">
  (arg:: Input<t.float8>): Output<t.float8, "abs">
  (arg:: Input<t.int8>): Output<t.int8, "abs">
  (arg:: Input<t.int4>): Output<t.int4, "abs">
  (arg:: Input<t.int2>): Output<t.int2, "abs">
  (arg:: Input<t.numeric>): Output<t.numeric, "abs">
}>("abs")

export const acos = defineFunction<"acos", {
  (arg:: Input<t.float8>): Output<t.float8, "acos">
}>("acos")

export const acosd = defineFunction<"acosd", {
  (arg:: Input<t.float8>): Output<t.float8, "acosd">
}>("acosd")

export const acosh = defineFunction<"acosh", {
  (arg:: Input<t.float8>): Output<t.float8, "acosh">
}>("acosh")

export const age = defineFunction<"age", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.interval, "age">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.interval, "age">
  (arg:: Input<t.timestamptz>): Output<t.interval, "age">
  (arg:: Input<t.timestamp>): Output<t.interval, "age">
}>("age")

export const amvalidate = defineFunction<"amvalidate", {
  (arg:: Input<t.oid>): Output<t.bool, "amvalidate">
}>("amvalidate")

export const area = defineFunction<"area", {
  (arg:: Input<t.box>): Output<t.float8, "area">
  (arg:: Input<t.path>): Output<t.float8, "area">
  (arg:: Input<t.circle>): Output<t.float8, "area">
}>("area")

export const ascii = defineFunction<"ascii", {
  (arg:: Input<t.text>): Output<t.int4, "ascii">
}>("ascii")

export const asin = defineFunction<"asin", {
  (arg:: Input<t.float8>): Output<t.float8, "asin">
}>("asin")

export const asind = defineFunction<"asind", {
  (arg:: Input<t.float8>): Output<t.float8, "asind">
}>("asind")

export const asinh = defineFunction<"asinh", {
  (arg:: Input<t.float8>): Output<t.float8, "asinh">
}>("asinh")

export const atan = defineFunction<"atan", {
  (arg:: Input<t.float8>): Output<t.float8, "atan">
}>("atan")

export const atan2 = defineFunction<"atan2", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "atan2">
}>("atan2")

export const atan2d = defineFunction<"atan2d", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "atan2d">
}>("atan2d")

export const atand = defineFunction<"atand", {
  (arg:: Input<t.float8>): Output<t.float8, "atand">
}>("atand")

export const atanh = defineFunction<"atanh", {
  (arg:: Input<t.float8>): Output<t.float8, "atanh">
}>("atanh")

export const avg = defineFunction<"avg", {
  (arg:: Input<t.int8>): Output<t.numeric, "avg">
  (arg:: Input<t.int4>): Output<t.numeric, "avg">
  (arg:: Input<t.int2>): Output<t.numeric, "avg">
  (arg:: Input<t.numeric>): Output<t.numeric, "avg">
  (arg:: Input<t.float4>): Output<t.float8, "avg">
  (arg:: Input<t.float8>): Output<t.float8, "avg">
  (arg:: Input<t.interval>): Output<t.interval, "avg">
}>("avg")

export const bit = defineFunction<"bit", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bit, "bit">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.bit, "bit">
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bit, "bit">
}>("bit")

export const bit_and = defineFunction<"bit_and", {
  (arg:: Input<t.int2>): Output<t.int2, "bit_and">
  (arg:: Input<t.int4>): Output<t.int4, "bit_and">
  (arg:: Input<t.int8>): Output<t.int8, "bit_and">
  (arg:: Input<t.bit>): Output<t.bit, "bit_and">
}>("bit_and")

export const bit_count = defineFunction<"bit_count", {
  (arg:: Input<t.bytea>): Output<t.int8, "bit_count">
  (arg:: Input<t.bit>): Output<t.int8, "bit_count">
}>("bit_count")

export const bit_length = defineFunction<"bit_length", {
  (arg:: Input<t.bit>): Output<t.int4, "bit_length">
  (arg:: Input<t.bytea>): Output<t.int4, "bit_length">
  (arg:: Input<t.text>): Output<t.int4, "bit_length">
}>("bit_length")

export const bit_or = defineFunction<"bit_or", {
  (arg:: Input<t.int2>): Output<t.int2, "bit_or">
  (arg:: Input<t.int4>): Output<t.int4, "bit_or">
  (arg:: Input<t.int8>): Output<t.int8, "bit_or">
  (arg:: Input<t.bit>): Output<t.bit, "bit_or">
}>("bit_or")

export const bit_send = defineFunction<"bit_send", {
  (arg:: Input<t.bit>): Output<t.bytea, "bit_send">
}>("bit_send")

export const bit_xor = defineFunction<"bit_xor", {
  (arg:: Input<t.int2>): Output<t.int2, "bit_xor">
  (arg:: Input<t.int4>): Output<t.int4, "bit_xor">
  (arg:: Input<t.int8>): Output<t.int8, "bit_xor">
  (arg:: Input<t.bit>): Output<t.bit, "bit_xor">
}>("bit_xor")

export const bitand = defineFunction<"bitand", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitand">
}>("bitand")

export const bitcat = defineFunction<"bitcat", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.varbit, "bitcat">
}>("bitcat")

export const bitcmp = defineFunction<"bitcmp", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.int4, "bitcmp">
}>("bitcmp")

export const biteq = defineFunction<"biteq", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "biteq">
}>("biteq")

export const bitge = defineFunction<"bitge", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitge">
}>("bitge")

export const bitgt = defineFunction<"bitgt", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitgt">
}>("bitgt")

export const bitle = defineFunction<"bitle", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitle">
}>("bitle")

export const bitlt = defineFunction<"bitlt", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitlt">
}>("bitlt")

export const bitne = defineFunction<"bitne", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bool, "bitne">
}>("bitne")

export const bitnot = defineFunction<"bitnot", {
  (arg:: Input<t.bit>): Output<t.bit, "bitnot">
}>("bitnot")

export const bitor = defineFunction<"bitor", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitor">
}>("bitor")

export const bitshiftleft = defineFunction<"bitshiftleft", {
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "bitshiftleft">
}>("bitshiftleft")

export const bitshiftright = defineFunction<"bitshiftright", {
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "bitshiftright">
}>("bitshiftright")

export const bitxor = defineFunction<"bitxor", {
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.bit, "bitxor">
}>("bitxor")

export const bool = defineFunction<"bool", {
  (arg:: Input<t.jsonb>): Output<t.bool, "bool">
  (arg:: Input<t.int4>): Output<t.bool, "bool">
}>("bool")

export const bool_and = defineFunction<"bool_and", {
  (arg:: Input<t.bool>): Output<t.bool, "bool_and">
}>("bool_and")

export const bool_or = defineFunction<"bool_or", {
  (arg:: Input<t.bool>): Output<t.bool, "bool_or">
}>("bool_or")

export const booland_statefunc = defineFunction<"booland_statefunc", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "booland_statefunc">
}>("booland_statefunc")

export const booleq = defineFunction<"booleq", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "booleq">
}>("booleq")

export const boolge = defineFunction<"boolge", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolge">
}>("boolge")

export const boolgt = defineFunction<"boolgt", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolgt">
}>("boolgt")

export const boolle = defineFunction<"boolle", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolle">
}>("boolle")

export const boollt = defineFunction<"boollt", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boollt">
}>("boollt")

export const boolne = defineFunction<"boolne", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolne">
}>("boolne")

export const boolor_statefunc = defineFunction<"boolor_statefunc", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.bool, "boolor_statefunc">
}>("boolor_statefunc")

export const boolsend = defineFunction<"boolsend", {
  (arg:: Input<t.bool>): Output<t.bytea, "boolsend">
}>("boolsend")

export const bound_box = defineFunction<"bound_box", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.box, "bound_box">
}>("bound_box")

export const box = defineFunction<"box", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.box, "box">
  (arg:: Input<t.polygon>): Output<t.box, "box">
  (arg:: Input<t.point>): Output<t.box, "box">
  (arg:: Input<t.circle>): Output<t.box, "box">
}>("box")

export const box_above = defineFunction<"box_above", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_above">
}>("box_above")

export const box_above_eq = defineFunction<"box_above_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_above_eq">
}>("box_above_eq")

export const box_add = defineFunction<"box_add", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_add">
}>("box_add")

export const box_below = defineFunction<"box_below", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_below">
}>("box_below")

export const box_below_eq = defineFunction<"box_below_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_below_eq">
}>("box_below_eq")

export const box_center = defineFunction<"box_center", {
  (arg:: Input<t.box>): Output<t.point, "box_center">
}>("box_center")

export const box_contain = defineFunction<"box_contain", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_contain">
}>("box_contain")

export const box_contain_pt = defineFunction<"box_contain_pt", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.bool, "box_contain_pt">
}>("box_contain_pt")

export const box_contained = defineFunction<"box_contained", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_contained">
}>("box_contained")

export const box_distance = defineFunction<"box_distance", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.float8, "box_distance">
}>("box_distance")

export const box_div = defineFunction<"box_div", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_div">
}>("box_div")

export const box_eq = defineFunction<"box_eq", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_eq">
}>("box_eq")

export const box_ge = defineFunction<"box_ge", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_ge">
}>("box_ge")

export const box_gt = defineFunction<"box_gt", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_gt">
}>("box_gt")

export const box_intersect = defineFunction<"box_intersect", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.box, "box_intersect">
}>("box_intersect")

export const box_le = defineFunction<"box_le", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_le">
}>("box_le")

export const box_left = defineFunction<"box_left", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_left">
}>("box_left")

export const box_lt = defineFunction<"box_lt", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_lt">
}>("box_lt")

export const box_mul = defineFunction<"box_mul", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_mul">
}>("box_mul")

export const box_overabove = defineFunction<"box_overabove", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overabove">
}>("box_overabove")

export const box_overbelow = defineFunction<"box_overbelow", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overbelow">
}>("box_overbelow")

export const box_overlap = defineFunction<"box_overlap", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overlap">
}>("box_overlap")

export const box_overleft = defineFunction<"box_overleft", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overleft">
}>("box_overleft")

export const box_overright = defineFunction<"box_overright", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_overright">
}>("box_overright")

export const box_right = defineFunction<"box_right", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_right">
}>("box_right")

export const box_same = defineFunction<"box_same", {
  (arg1: Input<t.box>, arg2: Input<t.box>): Output<t.bool, "box_same">
}>("box_same")

export const box_send = defineFunction<"box_send", {
  (arg:: Input<t.box>): Output<t.bytea, "box_send">
}>("box_send")

export const box_sub = defineFunction<"box_sub", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.box, "box_sub">
}>("box_sub")

export const bpchar = defineFunction<"bpchar", {
  (arg:: Input<t.name>): Output<t.bpchar, "bpchar">
  (arg1: Input<t.bpchar>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.bpchar, "bpchar">
  (arg:: Input<t.char>): Output<t.bpchar, "bpchar">
}>("bpchar")

export const bpchar_larger = defineFunction<"bpchar_larger", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bpchar, "bpchar_larger">
}>("bpchar_larger")

export const bpchar_pattern_ge = defineFunction<"bpchar_pattern_ge", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_ge">
}>("bpchar_pattern_ge")

export const bpchar_pattern_gt = defineFunction<"bpchar_pattern_gt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_gt">
}>("bpchar_pattern_gt")

export const bpchar_pattern_le = defineFunction<"bpchar_pattern_le", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_le">
}>("bpchar_pattern_le")

export const bpchar_pattern_lt = defineFunction<"bpchar_pattern_lt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchar_pattern_lt">
}>("bpchar_pattern_lt")

export const bpchar_smaller = defineFunction<"bpchar_smaller", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bpchar, "bpchar_smaller">
}>("bpchar_smaller")

export const bpcharcmp = defineFunction<"bpcharcmp", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.int4, "bpcharcmp">
}>("bpcharcmp")

export const bpchareq = defineFunction<"bpchareq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchareq">
}>("bpchareq")

export const bpcharge = defineFunction<"bpcharge", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharge">
}>("bpcharge")

export const bpchargt = defineFunction<"bpchargt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpchargt">
}>("bpchargt")

export const bpchariclike = defineFunction<"bpchariclike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpchariclike">
}>("bpchariclike")

export const bpcharicnlike = defineFunction<"bpcharicnlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicnlike">
}>("bpcharicnlike")

export const bpcharicregexeq = defineFunction<"bpcharicregexeq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicregexeq">
}>("bpcharicregexeq")

export const bpcharicregexne = defineFunction<"bpcharicregexne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharicregexne">
}>("bpcharicregexne")

export const bpcharle = defineFunction<"bpcharle", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharle">
}>("bpcharle")

export const bpcharlike = defineFunction<"bpcharlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharlike">
}>("bpcharlike")

export const bpcharlt = defineFunction<"bpcharlt", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharlt">
}>("bpcharlt")

export const bpcharne = defineFunction<"bpcharne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.bool, "bpcharne">
}>("bpcharne")

export const bpcharnlike = defineFunction<"bpcharnlike", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharnlike">
}>("bpcharnlike")

export const bpcharregexeq = defineFunction<"bpcharregexeq", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharregexeq">
}>("bpcharregexeq")

export const bpcharregexne = defineFunction<"bpcharregexne", {
  (arg1: Input<t.bpchar>, arg2: Input<t.text>): Output<t.bool, "bpcharregexne">
}>("bpcharregexne")

export const bpcharsend = defineFunction<"bpcharsend", {
  (arg:: Input<t.bpchar>): Output<t.bytea, "bpcharsend">
}>("bpcharsend")

export const broadcast = defineFunction<"broadcast", {
  (arg:: Input<t.inet>): Output<t.inet, "broadcast">
}>("broadcast")

export const btboolcmp = defineFunction<"btboolcmp", {
  (arg1: Input<t.bool>, arg2: Input<t.bool>): Output<t.int4, "btboolcmp">
}>("btboolcmp")

export const btbpchar_pattern_cmp = defineFunction<"btbpchar_pattern_cmp", {
  (arg1: Input<t.bpchar>, arg2: Input<t.bpchar>): Output<t.int4, "btbpchar_pattern_cmp">
}>("btbpchar_pattern_cmp")

export const btcharcmp = defineFunction<"btcharcmp", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.int4, "btcharcmp">
}>("btcharcmp")

export const btequalimage = defineFunction<"btequalimage", {
  (arg:: Input<t.oid>): Output<t.bool, "btequalimage">
}>("btequalimage")

export const btfloat48cmp = defineFunction<"btfloat48cmp", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.int4, "btfloat48cmp">
}>("btfloat48cmp")

export const btfloat4cmp = defineFunction<"btfloat4cmp", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.int4, "btfloat4cmp">
}>("btfloat4cmp")

export const btfloat84cmp = defineFunction<"btfloat84cmp", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.int4, "btfloat84cmp">
}>("btfloat84cmp")

export const btfloat8cmp = defineFunction<"btfloat8cmp", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.int4, "btfloat8cmp">
}>("btfloat8cmp")

export const btint24cmp = defineFunction<"btint24cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "btint24cmp">
}>("btint24cmp")

export const btint28cmp = defineFunction<"btint28cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int4, "btint28cmp">
}>("btint28cmp")

export const btint2cmp = defineFunction<"btint2cmp", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int4, "btint2cmp">
}>("btint2cmp")

export const btint42cmp = defineFunction<"btint42cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "btint42cmp">
}>("btint42cmp")

export const btint48cmp = defineFunction<"btint48cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int4, "btint48cmp">
}>("btint48cmp")

export const btint4cmp = defineFunction<"btint4cmp", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "btint4cmp">
}>("btint4cmp")

export const btint82cmp = defineFunction<"btint82cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int4, "btint82cmp">
}>("btint82cmp")

export const btint84cmp = defineFunction<"btint84cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int4, "btint84cmp">
}>("btint84cmp")

export const btint8cmp = defineFunction<"btint8cmp", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int4, "btint8cmp">
}>("btint8cmp")

export const btnamecmp = defineFunction<"btnamecmp", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.int4, "btnamecmp">
}>("btnamecmp")

export const btnametextcmp = defineFunction<"btnametextcmp", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.int4, "btnametextcmp">
}>("btnametextcmp")

export const btoidcmp = defineFunction<"btoidcmp", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.int4, "btoidcmp">
}>("btoidcmp")

export const btrim = defineFunction<"btrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "btrim">
  (arg:: Input<t.text>): Output<t.text, "btrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "btrim">
}>("btrim")

export const bttext_pattern_cmp = defineFunction<"bttext_pattern_cmp", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "bttext_pattern_cmp">
}>("bttext_pattern_cmp")

export const bttextcmp = defineFunction<"bttextcmp", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "bttextcmp">
}>("bttextcmp")

export const bttextnamecmp = defineFunction<"bttextnamecmp", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.int4, "bttextnamecmp">
}>("bttextnamecmp")

export const btvarstrequalimage = defineFunction<"btvarstrequalimage", {
  (arg:: Input<t.oid>): Output<t.bool, "btvarstrequalimage">
}>("btvarstrequalimage")

export const byteacat = defineFunction<"byteacat", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "byteacat">
}>("byteacat")

export const byteacmp = defineFunction<"byteacmp", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.int4, "byteacmp">
}>("byteacmp")

export const byteaeq = defineFunction<"byteaeq", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteaeq">
}>("byteaeq")

export const byteage = defineFunction<"byteage", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteage">
}>("byteage")

export const byteagt = defineFunction<"byteagt", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteagt">
}>("byteagt")

export const byteale = defineFunction<"byteale", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteale">
}>("byteale")

export const bytealike = defineFunction<"bytealike", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "bytealike">
}>("bytealike")

export const bytealt = defineFunction<"bytealt", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "bytealt">
}>("bytealt")

export const byteane = defineFunction<"byteane", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteane">
}>("byteane")

export const byteanlike = defineFunction<"byteanlike", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "byteanlike">
}>("byteanlike")

export const byteasend = defineFunction<"byteasend", {
  (arg:: Input<t.bytea>): Output<t.bytea, "byteasend">
}>("byteasend")

export const cash_cmp = defineFunction<"cash_cmp", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.int4, "cash_cmp">
}>("cash_cmp")

export const cash_div_cash = defineFunction<"cash_div_cash", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.float8, "cash_div_cash">
}>("cash_div_cash")

export const cash_div_flt4 = defineFunction<"cash_div_flt4", {
  (arg1: Input<t.money>, arg2: Input<t.float4>): Output<t.money, "cash_div_flt4">
}>("cash_div_flt4")

export const cash_div_flt8 = defineFunction<"cash_div_flt8", {
  (arg1: Input<t.money>, arg2: Input<t.float8>): Output<t.money, "cash_div_flt8">
}>("cash_div_flt8")

export const cash_div_int2 = defineFunction<"cash_div_int2", {
  (arg1: Input<t.money>, arg2: Input<t.int2>): Output<t.money, "cash_div_int2">
}>("cash_div_int2")

export const cash_div_int4 = defineFunction<"cash_div_int4", {
  (arg1: Input<t.money>, arg2: Input<t.int4>): Output<t.money, "cash_div_int4">
}>("cash_div_int4")

export const cash_div_int8 = defineFunction<"cash_div_int8", {
  (arg1: Input<t.money>, arg2: Input<t.int8>): Output<t.money, "cash_div_int8">
}>("cash_div_int8")

export const cash_eq = defineFunction<"cash_eq", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_eq">
}>("cash_eq")

export const cash_ge = defineFunction<"cash_ge", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_ge">
}>("cash_ge")

export const cash_gt = defineFunction<"cash_gt", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_gt">
}>("cash_gt")

export const cash_le = defineFunction<"cash_le", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_le">
}>("cash_le")

export const cash_lt = defineFunction<"cash_lt", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_lt">
}>("cash_lt")

export const cash_mi = defineFunction<"cash_mi", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cash_mi">
}>("cash_mi")

export const cash_mul_flt4 = defineFunction<"cash_mul_flt4", {
  (arg1: Input<t.money>, arg2: Input<t.float4>): Output<t.money, "cash_mul_flt4">
}>("cash_mul_flt4")

export const cash_mul_flt8 = defineFunction<"cash_mul_flt8", {
  (arg1: Input<t.money>, arg2: Input<t.float8>): Output<t.money, "cash_mul_flt8">
}>("cash_mul_flt8")

export const cash_mul_int2 = defineFunction<"cash_mul_int2", {
  (arg1: Input<t.money>, arg2: Input<t.int2>): Output<t.money, "cash_mul_int2">
}>("cash_mul_int2")

export const cash_mul_int4 = defineFunction<"cash_mul_int4", {
  (arg1: Input<t.money>, arg2: Input<t.int4>): Output<t.money, "cash_mul_int4">
}>("cash_mul_int4")

export const cash_mul_int8 = defineFunction<"cash_mul_int8", {
  (arg1: Input<t.money>, arg2: Input<t.int8>): Output<t.money, "cash_mul_int8">
}>("cash_mul_int8")

export const cash_ne = defineFunction<"cash_ne", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.bool, "cash_ne">
}>("cash_ne")

export const cash_pl = defineFunction<"cash_pl", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cash_pl">
}>("cash_pl")

export const cash_send = defineFunction<"cash_send", {
  (arg:: Input<t.money>): Output<t.bytea, "cash_send">
}>("cash_send")

export const cash_words = defineFunction<"cash_words", {
  (arg:: Input<t.money>): Output<t.text, "cash_words">
}>("cash_words")

export const cashlarger = defineFunction<"cashlarger", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cashlarger">
}>("cashlarger")

export const cashsmaller = defineFunction<"cashsmaller", {
  (arg1: Input<t.money>, arg2: Input<t.money>): Output<t.money, "cashsmaller">
}>("cashsmaller")

export const cbrt = defineFunction<"cbrt", {
  (arg:: Input<t.float8>): Output<t.float8, "cbrt">
}>("cbrt")

export const ceil = defineFunction<"ceil", {
  (arg:: Input<t.float8>): Output<t.float8, "ceil">
  (arg:: Input<t.numeric>): Output<t.numeric, "ceil">
}>("ceil")

export const ceiling = defineFunction<"ceiling", {
  (arg:: Input<t.float8>): Output<t.float8, "ceiling">
  (arg:: Input<t.numeric>): Output<t.numeric, "ceiling">
}>("ceiling")

export const center = defineFunction<"center", {
  (arg:: Input<t.box>): Output<t.point, "center">
  (arg:: Input<t.circle>): Output<t.point, "center">
}>("center")

export const char = defineFunction<"char", {
  (arg:: Input<t.int4>): Output<t.char, "char">
  (arg:: Input<t.text>): Output<t.char, "char">
}>("char")

export const char_length = defineFunction<"char_length", {
  (arg:: Input<t.bpchar>): Output<t.int4, "char_length">
  (arg:: Input<t.text>): Output<t.int4, "char_length">
}>("char_length")

export const character_length = defineFunction<"character_length", {
  (arg:: Input<t.bpchar>): Output<t.int4, "character_length">
  (arg:: Input<t.text>): Output<t.int4, "character_length">
}>("character_length")

export const chareq = defineFunction<"chareq", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "chareq">
}>("chareq")

export const charge = defineFunction<"charge", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charge">
}>("charge")

export const chargt = defineFunction<"chargt", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "chargt">
}>("chargt")

export const charle = defineFunction<"charle", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charle">
}>("charle")

export const charlt = defineFunction<"charlt", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charlt">
}>("charlt")

export const charne = defineFunction<"charne", {
  (arg1: Input<t.char>, arg2: Input<t.char>): Output<t.bool, "charne">
}>("charne")

export const charsend = defineFunction<"charsend", {
  (arg:: Input<t.char>): Output<t.bytea, "charsend">
}>("charsend")

export const chr = defineFunction<"chr", {
  (arg:: Input<t.int4>): Output<t.text, "chr">
}>("chr")

export const cidr = defineFunction<"cidr", {
  (arg:: Input<t.inet>): Output<t.cidr, "cidr">
}>("cidr")

export const cidr_send = defineFunction<"cidr_send", {
  (arg:: Input<t.cidr>): Output<t.bytea, "cidr_send">
}>("cidr_send")

export const circle = defineFunction<"circle", {
  (arg1: Input<t.point>, arg2: Input<t.float8>): Output<t.circle, "circle">
  (arg:: Input<t.polygon>): Output<t.circle, "circle">
  (arg:: Input<t.box>): Output<t.circle, "circle">
}>("circle")

export const circle_above = defineFunction<"circle_above", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_above">
}>("circle_above")

export const circle_add_pt = defineFunction<"circle_add_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_add_pt">
}>("circle_add_pt")

export const circle_below = defineFunction<"circle_below", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_below">
}>("circle_below")

export const circle_center = defineFunction<"circle_center", {
  (arg:: Input<t.circle>): Output<t.point, "circle_center">
}>("circle_center")

export const circle_contain = defineFunction<"circle_contain", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_contain">
}>("circle_contain")

export const circle_contain_pt = defineFunction<"circle_contain_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.bool, "circle_contain_pt">
}>("circle_contain_pt")

export const circle_contained = defineFunction<"circle_contained", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_contained">
}>("circle_contained")

export const circle_distance = defineFunction<"circle_distance", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.float8, "circle_distance">
}>("circle_distance")

export const circle_div_pt = defineFunction<"circle_div_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_div_pt">
}>("circle_div_pt")

export const circle_eq = defineFunction<"circle_eq", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_eq">
}>("circle_eq")

export const circle_ge = defineFunction<"circle_ge", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_ge">
}>("circle_ge")

export const circle_gt = defineFunction<"circle_gt", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_gt">
}>("circle_gt")

export const circle_le = defineFunction<"circle_le", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_le">
}>("circle_le")

export const circle_left = defineFunction<"circle_left", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_left">
}>("circle_left")

export const circle_lt = defineFunction<"circle_lt", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_lt">
}>("circle_lt")

export const circle_mul_pt = defineFunction<"circle_mul_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_mul_pt">
}>("circle_mul_pt")

export const circle_ne = defineFunction<"circle_ne", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_ne">
}>("circle_ne")

export const circle_overabove = defineFunction<"circle_overabove", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overabove">
}>("circle_overabove")

export const circle_overbelow = defineFunction<"circle_overbelow", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overbelow">
}>("circle_overbelow")

export const circle_overlap = defineFunction<"circle_overlap", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overlap">
}>("circle_overlap")

export const circle_overleft = defineFunction<"circle_overleft", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overleft">
}>("circle_overleft")

export const circle_overright = defineFunction<"circle_overright", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_overright">
}>("circle_overright")

export const circle_right = defineFunction<"circle_right", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_right">
}>("circle_right")

export const circle_same = defineFunction<"circle_same", {
  (arg1: Input<t.circle>, arg2: Input<t.circle>): Output<t.bool, "circle_same">
}>("circle_same")

export const circle_send = defineFunction<"circle_send", {
  (arg:: Input<t.circle>): Output<t.bytea, "circle_send">
}>("circle_send")

export const circle_sub_pt = defineFunction<"circle_sub_pt", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.circle, "circle_sub_pt">
}>("circle_sub_pt")

export const clock_timestamp = defineFunction<"clock_timestamp", {
  (): Output<t.timestamptz, "clock_timestamp">
}>("clock_timestamp")

export const close_lb = defineFunction<"close_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.point, "close_lb">
}>("close_lb")

export const close_ls = defineFunction<"close_ls", {
  (arg1: Input<t.line>, arg2: Input<t.lseg>): Output<t.point, "close_ls">
}>("close_ls")

export const close_lseg = defineFunction<"close_lseg", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.point, "close_lseg">
}>("close_lseg")

export const close_pb = defineFunction<"close_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.point, "close_pb">
}>("close_pb")

export const close_pl = defineFunction<"close_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.point, "close_pl">
}>("close_pl")

export const close_ps = defineFunction<"close_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.point, "close_ps">
}>("close_ps")

export const close_sb = defineFunction<"close_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.point, "close_sb">
}>("close_sb")

export const close_sl = defineFunction<"close_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.point, "close_sl">
}>("close_sl")

export const col_description = defineFunction<"col_description", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "col_description">
}>("col_description")

export const convert = defineFunction<"convert", {
  (arg1: Input<t.bytea>, arg2: Input<t.name>, arg3: Input<t.name>): Output<t.bytea, "convert">
}>("convert")

export const convert_from = defineFunction<"convert_from", {
  (arg1: Input<t.bytea>, arg2: Input<t.name>): Output<t.text, "convert_from">
}>("convert_from")

export const convert_to = defineFunction<"convert_to", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bytea, "convert_to">
}>("convert_to")

export const corr = defineFunction<"corr", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "corr">
}>("corr")

export const cos = defineFunction<"cos", {
  (arg:: Input<t.float8>): Output<t.float8, "cos">
}>("cos")

export const cosd = defineFunction<"cosd", {
  (arg:: Input<t.float8>): Output<t.float8, "cosd">
}>("cosd")

export const cosh = defineFunction<"cosh", {
  (arg:: Input<t.float8>): Output<t.float8, "cosh">
}>("cosh")

export const cot = defineFunction<"cot", {
  (arg:: Input<t.float8>): Output<t.float8, "cot">
}>("cot")

export const cotd = defineFunction<"cotd", {
  (arg:: Input<t.float8>): Output<t.float8, "cotd">
}>("cotd")

export const count = defineFunction<"count", {
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
}>("cume_dist")

export const current_database = defineFunction<"current_database", {
  (): Output<t.name, "current_database">
}>("current_database")

export const current_query = defineFunction<"current_query", {
  (): Output<t.text, "current_query">
}>("current_query")

export const current_schema = defineFunction<"current_schema", {
  (): Output<t.name, "current_schema">
}>("current_schema")

export const current_setting = defineFunction<"current_setting", {
  (arg:: Input<t.text>): Output<t.text, "current_setting">
  (arg1: Input<t.text>, arg2: Input<t.bool>): Output<t.text, "current_setting">
}>("current_setting")

export const current_user = defineFunction<"current_user", {
  (): Output<t.name, "current_user">
}>("current_user")

export const database_to_xml = defineFunction<"database_to_xml", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xml">
}>("database_to_xml")

export const database_to_xml_and_xmlschema = defineFunction<"database_to_xml_and_xmlschema", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xml_and_xmlschema">
}>("database_to_xml_and_xmlschema")

export const database_to_xmlschema = defineFunction<"database_to_xmlschema", {
  (nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "database_to_xmlschema">
}>("database_to_xmlschema")

export const date = defineFunction<"date", {
  (arg:: Input<t.timestamptz>): Output<t.date, "date">
  (arg:: Input<t.timestamp>): Output<t.date, "date">
}>("date")

export const date_bin = defineFunction<"date_bin", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamp>, arg3: Input<t.timestamp>): Output<t.timestamp, "date_bin">
  (arg1: Input<t.interval>, arg2: Input<t.timestamptz>, arg3: Input<t.timestamptz>): Output<t.timestamptz, "date_bin">
}>("date_bin")

export const date_cmp = defineFunction<"date_cmp", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.int4, "date_cmp">
}>("date_cmp")

export const date_cmp_timestamp = defineFunction<"date_cmp_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.int4, "date_cmp_timestamp">
}>("date_cmp_timestamp")

export const date_cmp_timestamptz = defineFunction<"date_cmp_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.int4, "date_cmp_timestamptz">
}>("date_cmp_timestamptz")

export const date_eq = defineFunction<"date_eq", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_eq">
}>("date_eq")

export const date_eq_timestamp = defineFunction<"date_eq_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_eq_timestamp">
}>("date_eq_timestamp")

export const date_eq_timestamptz = defineFunction<"date_eq_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_eq_timestamptz">
}>("date_eq_timestamptz")

export const date_ge = defineFunction<"date_ge", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_ge">
}>("date_ge")

export const date_ge_timestamp = defineFunction<"date_ge_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_ge_timestamp">
}>("date_ge_timestamp")

export const date_ge_timestamptz = defineFunction<"date_ge_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_ge_timestamptz">
}>("date_ge_timestamptz")

export const date_gt = defineFunction<"date_gt", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_gt">
}>("date_gt")

export const date_gt_timestamp = defineFunction<"date_gt_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_gt_timestamp">
}>("date_gt_timestamp")

export const date_gt_timestamptz = defineFunction<"date_gt_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_gt_timestamptz">
}>("date_gt_timestamptz")

export const date_larger = defineFunction<"date_larger", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.date, "date_larger">
}>("date_larger")

export const date_le = defineFunction<"date_le", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_le">
}>("date_le")

export const date_le_timestamp = defineFunction<"date_le_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_le_timestamp">
}>("date_le_timestamp")

export const date_le_timestamptz = defineFunction<"date_le_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_le_timestamptz">
}>("date_le_timestamptz")

export const date_lt = defineFunction<"date_lt", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_lt">
}>("date_lt")

export const date_lt_timestamp = defineFunction<"date_lt_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_lt_timestamp">
}>("date_lt_timestamp")

export const date_lt_timestamptz = defineFunction<"date_lt_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_lt_timestamptz">
}>("date_lt_timestamptz")

export const date_mi = defineFunction<"date_mi", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.int4, "date_mi">
}>("date_mi")

export const date_mi_interval = defineFunction<"date_mi_interval", {
  (arg1: Input<t.date>, arg2: Input<t.interval>): Output<t.timestamp, "date_mi_interval">
}>("date_mi_interval")

export const date_mii = defineFunction<"date_mii", {
  (arg1: Input<t.date>, arg2: Input<t.int4>): Output<t.date, "date_mii">
}>("date_mii")

export const date_ne = defineFunction<"date_ne", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.bool, "date_ne">
}>("date_ne")

export const date_ne_timestamp = defineFunction<"date_ne_timestamp", {
  (arg1: Input<t.date>, arg2: Input<t.timestamp>): Output<t.bool, "date_ne_timestamp">
}>("date_ne_timestamp")

export const date_ne_timestamptz = defineFunction<"date_ne_timestamptz", {
  (arg1: Input<t.date>, arg2: Input<t.timestamptz>): Output<t.bool, "date_ne_timestamptz">
}>("date_ne_timestamptz")

export const date_part = defineFunction<"date_part", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>): Output<t.float8, "date_part">
  (arg1: Input<t.text>, arg2: Input<t.interval>): Output<t.float8, "date_part">
  (arg1: Input<t.text>, arg2: Input<t.timetz>): Output<t.float8, "date_part">
  (arg1: Input<t.text>, arg2: Input<t.time>): Output<t.float8, "date_part">
  (arg1: Input<t.text>, arg2: Input<t.timestamp>): Output<t.float8, "date_part">
  (arg1: Input<t.text>, arg2: Input<t.date>): Output<t.float8, "date_part">
}>("date_part")

export const date_pl_interval = defineFunction<"date_pl_interval", {
  (arg1: Input<t.date>, arg2: Input<t.interval>): Output<t.timestamp, "date_pl_interval">
}>("date_pl_interval")

export const date_pli = defineFunction<"date_pli", {
  (arg1: Input<t.date>, arg2: Input<t.int4>): Output<t.date, "date_pli">
}>("date_pli")

export const date_send = defineFunction<"date_send", {
  (arg:: Input<t.date>): Output<t.bytea, "date_send">
}>("date_send")

export const date_smaller = defineFunction<"date_smaller", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.date, "date_smaller">
}>("date_smaller")

export const date_trunc = defineFunction<"date_trunc", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>, arg3: Input<t.text>): Output<t.timestamptz, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.interval>): Output<t.interval, "date_trunc">
  (arg1: Input<t.text>, arg2: Input<t.timestamp>): Output<t.timestamp, "date_trunc">
}>("date_trunc")

export const daterange = defineFunction<"daterange", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.daterange, "daterange">
  (arg1: Input<t.date>, arg2: Input<t.date>, arg3: Input<t.text>): Output<t.daterange, "daterange">
}>("daterange")

export const daterange_canonical = defineFunction<"daterange_canonical", {
  (arg:: Input<t.daterange>): Output<t.daterange, "daterange_canonical">
}>("daterange_canonical")

export const daterange_subdiff = defineFunction<"daterange_subdiff", {
  (arg1: Input<t.date>, arg2: Input<t.date>): Output<t.float8, "daterange_subdiff">
}>("daterange_subdiff")

export const datetime_pl = defineFunction<"datetime_pl", {
  (arg1: Input<t.date>, arg2: Input<t.time>): Output<t.timestamp, "datetime_pl">
}>("datetime_pl")

export const datetimetz_pl = defineFunction<"datetimetz_pl", {
  (arg1: Input<t.date>, arg2: Input<t.timetz>): Output<t.timestamptz, "datetimetz_pl">
}>("datetimetz_pl")

export const dcbrt = defineFunction<"dcbrt", {
  (arg:: Input<t.float8>): Output<t.float8, "dcbrt">
}>("dcbrt")

export const decode = defineFunction<"decode", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bytea, "decode">
}>("decode")

export const degrees = defineFunction<"degrees", {
  (arg:: Input<t.float8>): Output<t.float8, "degrees">
}>("degrees")

export const dense_rank = defineFunction<"dense_rank", {
  (): Output<t.int8, "dense_rank">
}>("dense_rank")

export const dexp = defineFunction<"dexp", {
  (arg:: Input<t.float8>): Output<t.float8, "dexp">
}>("dexp")

export const diagonal = defineFunction<"diagonal", {
  (arg:: Input<t.box>): Output<t.lseg, "diagonal">
}>("diagonal")

export const diameter = defineFunction<"diameter", {
  (arg:: Input<t.circle>): Output<t.float8, "diameter">
}>("diameter")

export const dist_bl = defineFunction<"dist_bl", {
  (arg1: Input<t.box>, arg2: Input<t.line>): Output<t.float8, "dist_bl">
}>("dist_bl")

export const dist_bp = defineFunction<"dist_bp", {
  (arg1: Input<t.box>, arg2: Input<t.point>): Output<t.float8, "dist_bp">
}>("dist_bp")

export const dist_bs = defineFunction<"dist_bs", {
  (arg1: Input<t.box>, arg2: Input<t.lseg>): Output<t.float8, "dist_bs">
}>("dist_bs")

export const dist_cpoint = defineFunction<"dist_cpoint", {
  (arg1: Input<t.circle>, arg2: Input<t.point>): Output<t.float8, "dist_cpoint">
}>("dist_cpoint")

export const dist_cpoly = defineFunction<"dist_cpoly", {
  (arg1: Input<t.circle>, arg2: Input<t.polygon>): Output<t.float8, "dist_cpoly">
}>("dist_cpoly")

export const dist_lb = defineFunction<"dist_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.float8, "dist_lb">
}>("dist_lb")

export const dist_lp = defineFunction<"dist_lp", {
  (arg1: Input<t.line>, arg2: Input<t.point>): Output<t.float8, "dist_lp">
}>("dist_lp")

export const dist_ls = defineFunction<"dist_ls", {
  (arg1: Input<t.line>, arg2: Input<t.lseg>): Output<t.float8, "dist_ls">
}>("dist_ls")

export const dist_pathp = defineFunction<"dist_pathp", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.float8, "dist_pathp">
}>("dist_pathp")

export const dist_pb = defineFunction<"dist_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.float8, "dist_pb">
}>("dist_pb")

export const dist_pc = defineFunction<"dist_pc", {
  (arg1: Input<t.point>, arg2: Input<t.circle>): Output<t.float8, "dist_pc">
}>("dist_pc")

export const dist_pl = defineFunction<"dist_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.float8, "dist_pl">
}>("dist_pl")

export const dist_polyc = defineFunction<"dist_polyc", {
  (arg1: Input<t.polygon>, arg2: Input<t.circle>): Output<t.float8, "dist_polyc">
}>("dist_polyc")

export const dist_polyp = defineFunction<"dist_polyp", {
  (arg1: Input<t.polygon>, arg2: Input<t.point>): Output<t.float8, "dist_polyp">
}>("dist_polyp")

export const dist_ppath = defineFunction<"dist_ppath", {
  (arg1: Input<t.point>, arg2: Input<t.path>): Output<t.float8, "dist_ppath">
}>("dist_ppath")

export const dist_ppoly = defineFunction<"dist_ppoly", {
  (arg1: Input<t.point>, arg2: Input<t.polygon>): Output<t.float8, "dist_ppoly">
}>("dist_ppoly")

export const dist_ps = defineFunction<"dist_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.float8, "dist_ps">
}>("dist_ps")

export const dist_sb = defineFunction<"dist_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.float8, "dist_sb">
}>("dist_sb")

export const dist_sl = defineFunction<"dist_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.float8, "dist_sl">
}>("dist_sl")

export const dist_sp = defineFunction<"dist_sp", {
  (arg1: Input<t.lseg>, arg2: Input<t.point>): Output<t.float8, "dist_sp">
}>("dist_sp")

export const div = defineFunction<"div", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "div">
}>("div")

export const dlog1 = defineFunction<"dlog1", {
  (arg:: Input<t.float8>): Output<t.float8, "dlog1">
}>("dlog1")

export const dlog10 = defineFunction<"dlog10", {
  (arg:: Input<t.float8>): Output<t.float8, "dlog10">
}>("dlog10")

export const dpow = defineFunction<"dpow", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "dpow">
}>("dpow")

export const dround = defineFunction<"dround", {
  (arg:: Input<t.float8>): Output<t.float8, "dround">
}>("dround")

export const dsqrt = defineFunction<"dsqrt", {
  (arg:: Input<t.float8>): Output<t.float8, "dsqrt">
}>("dsqrt")

export const dtrunc = defineFunction<"dtrunc", {
  (arg:: Input<t.float8>): Output<t.float8, "dtrunc">
}>("dtrunc")

export const encode = defineFunction<"encode", {
  (arg1: Input<t.bytea>, arg2: Input<t.text>): Output<t.text, "encode">
}>("encode")

export const every = defineFunction<"every", {
  (arg:: Input<t.bool>): Output<t.bool, "every">
}>("every")

export const exp = defineFunction<"exp", {
  (arg:: Input<t.float8>): Output<t.float8, "exp">
  (arg:: Input<t.numeric>): Output<t.numeric, "exp">
}>("exp")

export const extract = defineFunction<"extract", {
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>): Output<t.numeric, "extract">
  (arg1: Input<t.text>, arg2: Input<t.interval>): Output<t.numeric, "extract">
  (arg1: Input<t.text>, arg2: Input<t.timetz>): Output<t.numeric, "extract">
  (arg1: Input<t.text>, arg2: Input<t.date>): Output<t.numeric, "extract">
  (arg1: Input<t.text>, arg2: Input<t.time>): Output<t.numeric, "extract">
  (arg1: Input<t.text>, arg2: Input<t.timestamp>): Output<t.numeric, "extract">
}>("extract")

export const factorial = defineFunction<"factorial", {
  (arg:: Input<t.int8>): Output<t.numeric, "factorial">
}>("factorial")

export const family = defineFunction<"family", {
  (arg:: Input<t.inet>): Output<t.int4, "family">
}>("family")

export const float4 = defineFunction<"float4", {
  (arg:: Input<t.int2>): Output<t.float4, "float4">
  (arg:: Input<t.float8>): Output<t.float4, "float4">
  (arg:: Input<t.int4>): Output<t.float4, "float4">
  (arg:: Input<t.int8>): Output<t.float4, "float4">
  (arg:: Input<t.numeric>): Output<t.float4, "float4">
  (arg:: Input<t.jsonb>): Output<t.float4, "float4">
}>("float4")

export const float48div = defineFunction<"float48div", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48div">
}>("float48div")

export const float48eq = defineFunction<"float48eq", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48eq">
}>("float48eq")

export const float48ge = defineFunction<"float48ge", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48ge">
}>("float48ge")

export const float48gt = defineFunction<"float48gt", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48gt">
}>("float48gt")

export const float48le = defineFunction<"float48le", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48le">
}>("float48le")

export const float48lt = defineFunction<"float48lt", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48lt">
}>("float48lt")

export const float48mi = defineFunction<"float48mi", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48mi">
}>("float48mi")

export const float48mul = defineFunction<"float48mul", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48mul">
}>("float48mul")

export const float48ne = defineFunction<"float48ne", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.bool, "float48ne">
}>("float48ne")

export const float48pl = defineFunction<"float48pl", {
  (arg1: Input<t.float4>, arg2: Input<t.float8>): Output<t.float8, "float48pl">
}>("float48pl")

export const float4abs = defineFunction<"float4abs", {
  (arg:: Input<t.float4>): Output<t.float4, "float4abs">
}>("float4abs")

export const float4div = defineFunction<"float4div", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4div">
}>("float4div")

export const float4eq = defineFunction<"float4eq", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4eq">
}>("float4eq")

export const float4ge = defineFunction<"float4ge", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4ge">
}>("float4ge")

export const float4gt = defineFunction<"float4gt", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4gt">
}>("float4gt")

export const float4larger = defineFunction<"float4larger", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4larger">
}>("float4larger")

export const float4le = defineFunction<"float4le", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4le">
}>("float4le")

export const float4lt = defineFunction<"float4lt", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4lt">
}>("float4lt")

export const float4mi = defineFunction<"float4mi", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4mi">
}>("float4mi")

export const float4mul = defineFunction<"float4mul", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4mul">
}>("float4mul")

export const float4ne = defineFunction<"float4ne", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.bool, "float4ne">
}>("float4ne")

export const float4pl = defineFunction<"float4pl", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4pl">
}>("float4pl")

export const float4send = defineFunction<"float4send", {
  (arg:: Input<t.float4>): Output<t.bytea, "float4send">
}>("float4send")

export const float4smaller = defineFunction<"float4smaller", {
  (arg1: Input<t.float4>, arg2: Input<t.float4>): Output<t.float4, "float4smaller">
}>("float4smaller")

export const float4um = defineFunction<"float4um", {
  (arg:: Input<t.float4>): Output<t.float4, "float4um">
}>("float4um")

export const float4up = defineFunction<"float4up", {
  (arg:: Input<t.float4>): Output<t.float4, "float4up">
}>("float4up")

export const float8 = defineFunction<"float8", {
  (arg:: Input<t.int2>): Output<t.float8, "float8">
  (arg:: Input<t.float4>): Output<t.float8, "float8">
  (arg:: Input<t.int4>): Output<t.float8, "float8">
  (arg:: Input<t.int8>): Output<t.float8, "float8">
  (arg:: Input<t.numeric>): Output<t.float8, "float8">
  (arg:: Input<t.jsonb>): Output<t.float8, "float8">
}>("float8")

export const float84div = defineFunction<"float84div", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84div">
}>("float84div")

export const float84eq = defineFunction<"float84eq", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84eq">
}>("float84eq")

export const float84ge = defineFunction<"float84ge", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84ge">
}>("float84ge")

export const float84gt = defineFunction<"float84gt", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84gt">
}>("float84gt")

export const float84le = defineFunction<"float84le", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84le">
}>("float84le")

export const float84lt = defineFunction<"float84lt", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84lt">
}>("float84lt")

export const float84mi = defineFunction<"float84mi", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84mi">
}>("float84mi")

export const float84mul = defineFunction<"float84mul", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84mul">
}>("float84mul")

export const float84ne = defineFunction<"float84ne", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.bool, "float84ne">
}>("float84ne")

export const float84pl = defineFunction<"float84pl", {
  (arg1: Input<t.float8>, arg2: Input<t.float4>): Output<t.float8, "float84pl">
}>("float84pl")

export const float8abs = defineFunction<"float8abs", {
  (arg:: Input<t.float8>): Output<t.float8, "float8abs">
}>("float8abs")

export const float8div = defineFunction<"float8div", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8div">
}>("float8div")

export const float8eq = defineFunction<"float8eq", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8eq">
}>("float8eq")

export const float8ge = defineFunction<"float8ge", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8ge">
}>("float8ge")

export const float8gt = defineFunction<"float8gt", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8gt">
}>("float8gt")

export const float8larger = defineFunction<"float8larger", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8larger">
}>("float8larger")

export const float8le = defineFunction<"float8le", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8le">
}>("float8le")

export const float8lt = defineFunction<"float8lt", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8lt">
}>("float8lt")

export const float8mi = defineFunction<"float8mi", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8mi">
}>("float8mi")

export const float8mul = defineFunction<"float8mul", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8mul">
}>("float8mul")

export const float8ne = defineFunction<"float8ne", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.bool, "float8ne">
}>("float8ne")

export const float8pl = defineFunction<"float8pl", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8pl">
}>("float8pl")

export const float8send = defineFunction<"float8send", {
  (arg:: Input<t.float8>): Output<t.bytea, "float8send">
}>("float8send")

export const float8smaller = defineFunction<"float8smaller", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "float8smaller">
}>("float8smaller")

export const float8um = defineFunction<"float8um", {
  (arg:: Input<t.float8>): Output<t.float8, "float8um">
}>("float8um")

export const float8up = defineFunction<"float8up", {
  (arg:: Input<t.float8>): Output<t.float8, "float8up">
}>("float8up")

export const floor = defineFunction<"floor", {
  (arg:: Input<t.float8>): Output<t.float8, "floor">
  (arg:: Input<t.numeric>): Output<t.numeric, "floor">
}>("floor")

export const flt4_mul_cash = defineFunction<"flt4_mul_cash", {
  (arg1: Input<t.float4>, arg2: Input<t.money>): Output<t.money, "flt4_mul_cash">
}>("flt4_mul_cash")

export const flt8_mul_cash = defineFunction<"flt8_mul_cash", {
  (arg1: Input<t.float8>, arg2: Input<t.money>): Output<t.money, "flt8_mul_cash">
}>("flt8_mul_cash")

export const format = defineFunction<"format", {
  (arg:: Input<t.text>): Output<t.text, "format">
}>("format")

export const format_type = defineFunction<"format_type", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "format_type">
}>("format_type")

export const gcd = defineFunction<"gcd", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "gcd">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "gcd">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "gcd">
}>("gcd")

export const gen_random_uuid = defineFunction<"gen_random_uuid", {
  (): Output<t.uuid, "gen_random_uuid">
}>("gen_random_uuid")

export const generate_series = defineFunction<"generate_series", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.int4, "generate_series">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "generate_series">
  (arg1: Input<t.int8>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.int8, "generate_series">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "generate_series">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.numeric>): Output<t.numeric, "generate_series">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "generate_series">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.interval>): Output<t.timestamp, "generate_series">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.interval>): Output<t.timestamptz, "generate_series">
}>("generate_series")

export const get_bit = defineFunction<"get_bit", {
  (arg1: Input<t.bytea>, arg2: Input<t.int8>): Output<t.int4, "get_bit">
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.int4, "get_bit">
}>("get_bit")

export const get_byte = defineFunction<"get_byte", {
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.int4, "get_byte">
}>("get_byte")

export const getdatabaseencoding = defineFunction<"getdatabaseencoding", {
  (): Output<t.name, "getdatabaseencoding">
}>("getdatabaseencoding")

export const getpgusername = defineFunction<"getpgusername", {
  (): Output<t.name, "getpgusername">
}>("getpgusername")

export const gin_cmp_tslexeme = defineFunction<"gin_cmp_tslexeme", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "gin_cmp_tslexeme">
}>("gin_cmp_tslexeme")

export const gin_compare_jsonb = defineFunction<"gin_compare_jsonb", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "gin_compare_jsonb">
}>("gin_compare_jsonb")

export const has_any_column_privilege = defineFunction<"has_any_column_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_any_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_any_column_privilege">
}>("has_any_column_privilege")

export const has_column_privilege = defineFunction<"has_column_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.int2>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.int2>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.int2>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.int2>, arg4: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.text>, arg2: Input<t.int2>, arg3: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_column_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.int2>, arg3: Input<t.text>): Output<t.bool, "has_column_privilege">
}>("has_column_privilege")

export const has_database_privilege = defineFunction<"has_database_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_database_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_database_privilege">
}>("has_database_privilege")

export const has_foreign_data_wrapper_privilege = defineFunction<"has_foreign_data_wrapper_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_foreign_data_wrapper_privilege">
}>("has_foreign_data_wrapper_privilege")

export const has_function_privilege = defineFunction<"has_function_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_function_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_function_privilege">
}>("has_function_privilege")

export const has_language_privilege = defineFunction<"has_language_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_language_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_language_privilege">
}>("has_language_privilege")

export const has_schema_privilege = defineFunction<"has_schema_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_schema_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_schema_privilege">
}>("has_schema_privilege")

export const has_sequence_privilege = defineFunction<"has_sequence_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_sequence_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_sequence_privilege">
}>("has_sequence_privilege")

export const has_server_privilege = defineFunction<"has_server_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_server_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_server_privilege">
}>("has_server_privilege")

export const has_table_privilege = defineFunction<"has_table_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_table_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_table_privilege">
}>("has_table_privilege")

export const has_tablespace_privilege = defineFunction<"has_tablespace_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_tablespace_privilege">
}>("has_tablespace_privilege")

export const has_type_privilege = defineFunction<"has_type_privilege", {
  (arg1: Input<t.name>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "has_type_privilege">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "has_type_privilege">
}>("has_type_privilege")

export const hash_numeric = defineFunction<"hash_numeric", {
  (arg:: Input<t.numeric>): Output<t.int4, "hash_numeric">
}>("hash_numeric")

export const hash_numeric_extended = defineFunction<"hash_numeric_extended", {
  (arg1: Input<t.numeric>, arg2: Input<t.int8>): Output<t.int8, "hash_numeric_extended">
}>("hash_numeric_extended")

export const hashbpchar = defineFunction<"hashbpchar", {
  (arg:: Input<t.bpchar>): Output<t.int4, "hashbpchar">
}>("hashbpchar")

export const hashbpcharextended = defineFunction<"hashbpcharextended", {
  (arg1: Input<t.bpchar>, arg2: Input<t.int8>): Output<t.int8, "hashbpcharextended">
}>("hashbpcharextended")

export const hashchar = defineFunction<"hashchar", {
  (arg:: Input<t.char>): Output<t.int4, "hashchar">
}>("hashchar")

export const hashcharextended = defineFunction<"hashcharextended", {
  (arg1: Input<t.char>, arg2: Input<t.int8>): Output<t.int8, "hashcharextended">
}>("hashcharextended")

export const hashfloat4 = defineFunction<"hashfloat4", {
  (arg:: Input<t.float4>): Output<t.int4, "hashfloat4">
}>("hashfloat4")

export const hashfloat4extended = defineFunction<"hashfloat4extended", {
  (arg1: Input<t.float4>, arg2: Input<t.int8>): Output<t.int8, "hashfloat4extended">
}>("hashfloat4extended")

export const hashfloat8 = defineFunction<"hashfloat8", {
  (arg:: Input<t.float8>): Output<t.int4, "hashfloat8">
}>("hashfloat8")

export const hashfloat8extended = defineFunction<"hashfloat8extended", {
  (arg1: Input<t.float8>, arg2: Input<t.int8>): Output<t.int8, "hashfloat8extended">
}>("hashfloat8extended")

export const hashinet = defineFunction<"hashinet", {
  (arg:: Input<t.inet>): Output<t.int4, "hashinet">
}>("hashinet")

export const hashinetextended = defineFunction<"hashinetextended", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.int8, "hashinetextended">
}>("hashinetextended")

export const hashint2 = defineFunction<"hashint2", {
  (arg:: Input<t.int2>): Output<t.int4, "hashint2">
}>("hashint2")

export const hashint2extended = defineFunction<"hashint2extended", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "hashint2extended">
}>("hashint2extended")

export const hashint4 = defineFunction<"hashint4", {
  (arg:: Input<t.int4>): Output<t.int4, "hashint4">
}>("hashint4")

export const hashint4extended = defineFunction<"hashint4extended", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "hashint4extended">
}>("hashint4extended")

export const hashint8 = defineFunction<"hashint8", {
  (arg:: Input<t.int8>): Output<t.int4, "hashint8">
}>("hashint8")

export const hashint8extended = defineFunction<"hashint8extended", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "hashint8extended">
}>("hashint8extended")

export const hashmacaddr = defineFunction<"hashmacaddr", {
  (arg:: Input<t.macaddr>): Output<t.int4, "hashmacaddr">
}>("hashmacaddr")

export const hashmacaddrextended = defineFunction<"hashmacaddrextended", {
  (arg1: Input<t.macaddr>, arg2: Input<t.int8>): Output<t.int8, "hashmacaddrextended">
}>("hashmacaddrextended")

export const hashname = defineFunction<"hashname", {
  (arg:: Input<t.name>): Output<t.int4, "hashname">
}>("hashname")

export const hashnameextended = defineFunction<"hashnameextended", {
  (arg1: Input<t.name>, arg2: Input<t.int8>): Output<t.int8, "hashnameextended">
}>("hashnameextended")

export const hashoid = defineFunction<"hashoid", {
  (arg:: Input<t.oid>): Output<t.int4, "hashoid">
}>("hashoid")

export const hashoidextended = defineFunction<"hashoidextended", {
  (arg1: Input<t.oid>, arg2: Input<t.int8>): Output<t.int8, "hashoidextended">
}>("hashoidextended")

export const hashtext = defineFunction<"hashtext", {
  (arg:: Input<t.text>): Output<t.int4, "hashtext">
}>("hashtext")

export const hashtextextended = defineFunction<"hashtextextended", {
  (arg1: Input<t.text>, arg2: Input<t.int8>): Output<t.int8, "hashtextextended">
}>("hashtextextended")

export const height = defineFunction<"height", {
  (arg:: Input<t.box>): Output<t.float8, "height">
}>("height")

export const host = defineFunction<"host", {
  (arg:: Input<t.inet>): Output<t.text, "host">
}>("host")

export const hostmask = defineFunction<"hostmask", {
  (arg:: Input<t.inet>): Output<t.inet, "hostmask">
}>("hostmask")

export const in_range = defineFunction<"in_range", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>, arg3: Input<t.int8>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int8>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int4>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int2>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int2>, arg2: Input<t.int2>, arg3: Input<t.int8>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int2>, arg2: Input<t.int2>, arg3: Input<t.int4>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.int2>, arg2: Input<t.int2>, arg3: Input<t.int2>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.float8>, arg2: Input<t.float8>, arg3: Input<t.float8>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.float4>, arg2: Input<t.float4>, arg3: Input<t.float8>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.numeric>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.date>, arg2: Input<t.date>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.interval>, arg2: Input<t.interval>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.time>, arg2: Input<t.time>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>, arg3: Input<t.interval>, arg4: Input<t.bool>, arg5: Input<t.bool>): Output<t.bool, "in_range">
}>("in_range")

export const inet_client_addr = defineFunction<"inet_client_addr", {
  (): Output<t.inet, "inet_client_addr">
}>("inet_client_addr")

export const inet_client_port = defineFunction<"inet_client_port", {
  (): Output<t.int4, "inet_client_port">
}>("inet_client_port")

export const inet_merge = defineFunction<"inet_merge", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.cidr, "inet_merge">
}>("inet_merge")

export const inet_same_family = defineFunction<"inet_same_family", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "inet_same_family">
}>("inet_same_family")

export const inet_send = defineFunction<"inet_send", {
  (arg:: Input<t.inet>): Output<t.bytea, "inet_send">
}>("inet_send")

export const inet_server_addr = defineFunction<"inet_server_addr", {
  (): Output<t.inet, "inet_server_addr">
}>("inet_server_addr")

export const inet_server_port = defineFunction<"inet_server_port", {
  (): Output<t.int4, "inet_server_port">
}>("inet_server_port")

export const inetand = defineFunction<"inetand", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "inetand">
}>("inetand")

export const inetmi = defineFunction<"inetmi", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.int8, "inetmi">
}>("inetmi")

export const inetmi_int8 = defineFunction<"inetmi_int8", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.inet, "inetmi_int8">
}>("inetmi_int8")

export const inetnot = defineFunction<"inetnot", {
  (arg:: Input<t.inet>): Output<t.inet, "inetnot">
}>("inetnot")

export const inetor = defineFunction<"inetor", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "inetor">
}>("inetor")

export const inetpl = defineFunction<"inetpl", {
  (arg1: Input<t.inet>, arg2: Input<t.int8>): Output<t.inet, "inetpl">
}>("inetpl")

export const initcap = defineFunction<"initcap", {
  (arg:: Input<t.text>): Output<t.text, "initcap">
}>("initcap")

export const int2 = defineFunction<"int2", {
  (arg:: Input<t.float8>): Output<t.int2, "int2">
  (arg:: Input<t.float4>): Output<t.int2, "int2">
  (arg:: Input<t.int4>): Output<t.int2, "int2">
  (arg:: Input<t.int8>): Output<t.int2, "int2">
  (arg:: Input<t.numeric>): Output<t.int2, "int2">
  (arg:: Input<t.jsonb>): Output<t.int2, "int2">
}>("int2")

export const int24div = defineFunction<"int24div", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24div">
}>("int24div")

export const int24eq = defineFunction<"int24eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24eq">
}>("int24eq")

export const int24ge = defineFunction<"int24ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24ge">
}>("int24ge")

export const int24gt = defineFunction<"int24gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24gt">
}>("int24gt")

export const int24le = defineFunction<"int24le", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24le">
}>("int24le")

export const int24lt = defineFunction<"int24lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24lt">
}>("int24lt")

export const int24mi = defineFunction<"int24mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24mi">
}>("int24mi")

export const int24mul = defineFunction<"int24mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24mul">
}>("int24mul")

export const int24ne = defineFunction<"int24ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.bool, "int24ne">
}>("int24ne")

export const int24pl = defineFunction<"int24pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int4, "int24pl">
}>("int24pl")

export const int28div = defineFunction<"int28div", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28div">
}>("int28div")

export const int28eq = defineFunction<"int28eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28eq">
}>("int28eq")

export const int28ge = defineFunction<"int28ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28ge">
}>("int28ge")

export const int28gt = defineFunction<"int28gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28gt">
}>("int28gt")

export const int28le = defineFunction<"int28le", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28le">
}>("int28le")

export const int28lt = defineFunction<"int28lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28lt">
}>("int28lt")

export const int28mi = defineFunction<"int28mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28mi">
}>("int28mi")

export const int28mul = defineFunction<"int28mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28mul">
}>("int28mul")

export const int28ne = defineFunction<"int28ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.bool, "int28ne">
}>("int28ne")

export const int28pl = defineFunction<"int28pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int8>): Output<t.int8, "int28pl">
}>("int28pl")

export const int2_mul_cash = defineFunction<"int2_mul_cash", {
  (arg1: Input<t.int2>, arg2: Input<t.money>): Output<t.money, "int2_mul_cash">
}>("int2_mul_cash")

export const int2_sum = defineFunction<"int2_sum", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int2_sum">
}>("int2_sum")

export const int2abs = defineFunction<"int2abs", {
  (arg:: Input<t.int2>): Output<t.int2, "int2abs">
}>("int2abs")

export const int2and = defineFunction<"int2and", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2and">
}>("int2and")

export const int2div = defineFunction<"int2div", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2div">
}>("int2div")

export const int2eq = defineFunction<"int2eq", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2eq">
}>("int2eq")

export const int2ge = defineFunction<"int2ge", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2ge">
}>("int2ge")

export const int2gt = defineFunction<"int2gt", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2gt">
}>("int2gt")

export const int2larger = defineFunction<"int2larger", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2larger">
}>("int2larger")

export const int2le = defineFunction<"int2le", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2le">
}>("int2le")

export const int2lt = defineFunction<"int2lt", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2lt">
}>("int2lt")

export const int2mi = defineFunction<"int2mi", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mi">
}>("int2mi")

export const int2mod = defineFunction<"int2mod", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mod">
}>("int2mod")

export const int2mul = defineFunction<"int2mul", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2mul">
}>("int2mul")

export const int2ne = defineFunction<"int2ne", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.bool, "int2ne">
}>("int2ne")

export const int2not = defineFunction<"int2not", {
  (arg:: Input<t.int2>): Output<t.int2, "int2not">
}>("int2not")

export const int2or = defineFunction<"int2or", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2or">
}>("int2or")

export const int2pl = defineFunction<"int2pl", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2pl">
}>("int2pl")

export const int2send = defineFunction<"int2send", {
  (arg:: Input<t.int2>): Output<t.bytea, "int2send">
}>("int2send")

export const int2shl = defineFunction<"int2shl", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int2, "int2shl">
}>("int2shl")

export const int2shr = defineFunction<"int2shr", {
  (arg1: Input<t.int2>, arg2: Input<t.int4>): Output<t.int2, "int2shr">
}>("int2shr")

export const int2smaller = defineFunction<"int2smaller", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2smaller">
}>("int2smaller")

export const int2um = defineFunction<"int2um", {
  (arg:: Input<t.int2>): Output<t.int2, "int2um">
}>("int2um")

export const int2up = defineFunction<"int2up", {
  (arg:: Input<t.int2>): Output<t.int2, "int2up">
}>("int2up")

export const int2xor = defineFunction<"int2xor", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "int2xor">
}>("int2xor")

export const int4 = defineFunction<"int4", {
  (arg:: Input<t.char>): Output<t.int4, "int4">
  (arg:: Input<t.int2>): Output<t.int4, "int4">
  (arg:: Input<t.float8>): Output<t.int4, "int4">
  (arg:: Input<t.float4>): Output<t.int4, "int4">
  (arg:: Input<t.int8>): Output<t.int4, "int4">
  (arg:: Input<t.bit>): Output<t.int4, "int4">
  (arg:: Input<t.numeric>): Output<t.int4, "int4">
  (arg:: Input<t.jsonb>): Output<t.int4, "int4">
  (arg:: Input<t.bool>): Output<t.int4, "int4">
}>("int4")

export const int42div = defineFunction<"int42div", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42div">
}>("int42div")

export const int42eq = defineFunction<"int42eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42eq">
}>("int42eq")

export const int42ge = defineFunction<"int42ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42ge">
}>("int42ge")

export const int42gt = defineFunction<"int42gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42gt">
}>("int42gt")

export const int42le = defineFunction<"int42le", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42le">
}>("int42le")

export const int42lt = defineFunction<"int42lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42lt">
}>("int42lt")

export const int42mi = defineFunction<"int42mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42mi">
}>("int42mi")

export const int42mul = defineFunction<"int42mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42mul">
}>("int42mul")

export const int42ne = defineFunction<"int42ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.bool, "int42ne">
}>("int42ne")

export const int42pl = defineFunction<"int42pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int2>): Output<t.int4, "int42pl">
}>("int42pl")

export const int48div = defineFunction<"int48div", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48div">
}>("int48div")

export const int48eq = defineFunction<"int48eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48eq">
}>("int48eq")

export const int48ge = defineFunction<"int48ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48ge">
}>("int48ge")

export const int48gt = defineFunction<"int48gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48gt">
}>("int48gt")

export const int48le = defineFunction<"int48le", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48le">
}>("int48le")

export const int48lt = defineFunction<"int48lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48lt">
}>("int48lt")

export const int48mi = defineFunction<"int48mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48mi">
}>("int48mi")

export const int48mul = defineFunction<"int48mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48mul">
}>("int48mul")

export const int48ne = defineFunction<"int48ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.bool, "int48ne">
}>("int48ne")

export const int48pl = defineFunction<"int48pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int8, "int48pl">
}>("int48pl")

export const int4_mul_cash = defineFunction<"int4_mul_cash", {
  (arg1: Input<t.int4>, arg2: Input<t.money>): Output<t.money, "int4_mul_cash">
}>("int4_mul_cash")

export const int4_sum = defineFunction<"int4_sum", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int4_sum">
}>("int4_sum")

export const int4abs = defineFunction<"int4abs", {
  (arg:: Input<t.int4>): Output<t.int4, "int4abs">
}>("int4abs")

export const int4and = defineFunction<"int4and", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4and">
}>("int4and")

export const int4div = defineFunction<"int4div", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4div">
}>("int4div")

export const int4eq = defineFunction<"int4eq", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4eq">
}>("int4eq")

export const int4ge = defineFunction<"int4ge", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4ge">
}>("int4ge")

export const int4gt = defineFunction<"int4gt", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4gt">
}>("int4gt")

export const int4inc = defineFunction<"int4inc", {
  (arg:: Input<t.int4>): Output<t.int4, "int4inc">
}>("int4inc")

export const int4larger = defineFunction<"int4larger", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4larger">
}>("int4larger")

export const int4le = defineFunction<"int4le", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4le">
}>("int4le")

export const int4lt = defineFunction<"int4lt", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4lt">
}>("int4lt")

export const int4mi = defineFunction<"int4mi", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mi">
}>("int4mi")

export const int4mod = defineFunction<"int4mod", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mod">
}>("int4mod")

export const int4mul = defineFunction<"int4mul", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4mul">
}>("int4mul")

export const int4ne = defineFunction<"int4ne", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "int4ne">
}>("int4ne")

export const int4not = defineFunction<"int4not", {
  (arg:: Input<t.int4>): Output<t.int4, "int4not">
}>("int4not")

export const int4or = defineFunction<"int4or", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4or">
}>("int4or")

export const int4pl = defineFunction<"int4pl", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4pl">
}>("int4pl")

export const int4range = defineFunction<"int4range", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4range, "int4range">
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.int4range, "int4range">
}>("int4range")

export const int4range_canonical = defineFunction<"int4range_canonical", {
  (arg:: Input<t.int4range>): Output<t.int4range, "int4range_canonical">
}>("int4range_canonical")

export const int4range_subdiff = defineFunction<"int4range_subdiff", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.float8, "int4range_subdiff">
}>("int4range_subdiff")

export const int4send = defineFunction<"int4send", {
  (arg:: Input<t.int4>): Output<t.bytea, "int4send">
}>("int4send")

export const int4shl = defineFunction<"int4shl", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4shl">
}>("int4shl")

export const int4shr = defineFunction<"int4shr", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4shr">
}>("int4shr")

export const int4smaller = defineFunction<"int4smaller", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4smaller">
}>("int4smaller")

export const int4um = defineFunction<"int4um", {
  (arg:: Input<t.int4>): Output<t.int4, "int4um">
}>("int4um")

export const int4up = defineFunction<"int4up", {
  (arg:: Input<t.int4>): Output<t.int4, "int4up">
}>("int4up")

export const int4xor = defineFunction<"int4xor", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "int4xor">
}>("int4xor")

export const int8 = defineFunction<"int8", {
  (arg:: Input<t.int4>): Output<t.int8, "int8">
  (arg:: Input<t.float8>): Output<t.int8, "int8">
  (arg:: Input<t.float4>): Output<t.int8, "int8">
  (arg:: Input<t.int2>): Output<t.int8, "int8">
  (arg:: Input<t.oid>): Output<t.int8, "int8">
  (arg:: Input<t.numeric>): Output<t.int8, "int8">
  (arg:: Input<t.jsonb>): Output<t.int8, "int8">
  (arg:: Input<t.bit>): Output<t.int8, "int8">
}>("int8")

export const int82div = defineFunction<"int82div", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82div">
}>("int82div")

export const int82eq = defineFunction<"int82eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82eq">
}>("int82eq")

export const int82ge = defineFunction<"int82ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82ge">
}>("int82ge")

export const int82gt = defineFunction<"int82gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82gt">
}>("int82gt")

export const int82le = defineFunction<"int82le", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82le">
}>("int82le")

export const int82lt = defineFunction<"int82lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82lt">
}>("int82lt")

export const int82mi = defineFunction<"int82mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82mi">
}>("int82mi")

export const int82mul = defineFunction<"int82mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82mul">
}>("int82mul")

export const int82ne = defineFunction<"int82ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.bool, "int82ne">
}>("int82ne")

export const int82pl = defineFunction<"int82pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int2>): Output<t.int8, "int82pl">
}>("int82pl")

export const int84div = defineFunction<"int84div", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84div">
}>("int84div")

export const int84eq = defineFunction<"int84eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84eq">
}>("int84eq")

export const int84ge = defineFunction<"int84ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84ge">
}>("int84ge")

export const int84gt = defineFunction<"int84gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84gt">
}>("int84gt")

export const int84le = defineFunction<"int84le", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84le">
}>("int84le")

export const int84lt = defineFunction<"int84lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84lt">
}>("int84lt")

export const int84mi = defineFunction<"int84mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84mi">
}>("int84mi")

export const int84mul = defineFunction<"int84mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84mul">
}>("int84mul")

export const int84ne = defineFunction<"int84ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.bool, "int84ne">
}>("int84ne")

export const int84pl = defineFunction<"int84pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int84pl">
}>("int84pl")

export const int8_mul_cash = defineFunction<"int8_mul_cash", {
  (arg1: Input<t.int8>, arg2: Input<t.money>): Output<t.money, "int8_mul_cash">
}>("int8_mul_cash")

export const int8_sum = defineFunction<"int8_sum", {
  (arg1: Input<t.numeric>, arg2: Input<t.int8>): Output<t.numeric, "int8_sum">
}>("int8_sum")

export const int8abs = defineFunction<"int8abs", {
  (arg:: Input<t.int8>): Output<t.int8, "int8abs">
}>("int8abs")

export const int8and = defineFunction<"int8and", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8and">
}>("int8and")

export const int8dec = defineFunction<"int8dec", {
  (arg:: Input<t.int8>): Output<t.int8, "int8dec">
}>("int8dec")

export const int8div = defineFunction<"int8div", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8div">
}>("int8div")

export const int8eq = defineFunction<"int8eq", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8eq">
}>("int8eq")

export const int8ge = defineFunction<"int8ge", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8ge">
}>("int8ge")

export const int8gt = defineFunction<"int8gt", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8gt">
}>("int8gt")

export const int8inc = defineFunction<"int8inc", {
  (arg:: Input<t.int8>): Output<t.int8, "int8inc">
}>("int8inc")

export const int8inc_float8_float8 = defineFunction<"int8inc_float8_float8", {
  (arg1: Input<t.int8>, arg2: Input<t.float8>, arg3: Input<t.float8>): Output<t.int8, "int8inc_float8_float8">
}>("int8inc_float8_float8")

export const int8larger = defineFunction<"int8larger", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8larger">
}>("int8larger")

export const int8le = defineFunction<"int8le", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8le">
}>("int8le")

export const int8lt = defineFunction<"int8lt", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8lt">
}>("int8lt")

export const int8mi = defineFunction<"int8mi", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mi">
}>("int8mi")

export const int8mod = defineFunction<"int8mod", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mod">
}>("int8mod")

export const int8mul = defineFunction<"int8mul", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8mul">
}>("int8mul")

export const int8ne = defineFunction<"int8ne", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.bool, "int8ne">
}>("int8ne")

export const int8not = defineFunction<"int8not", {
  (arg:: Input<t.int8>): Output<t.int8, "int8not">
}>("int8not")

export const int8or = defineFunction<"int8or", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8or">
}>("int8or")

export const int8pl = defineFunction<"int8pl", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8pl">
}>("int8pl")

export const int8pl_inet = defineFunction<"int8pl_inet", {
  (arg1: Input<t.int8>, arg2: Input<t.inet>): Output<t.inet, "int8pl_inet">
}>("int8pl_inet")

export const int8range = defineFunction<"int8range", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8range, "int8range">
  (arg1: Input<t.int8>, arg2: Input<t.int8>, arg3: Input<t.text>): Output<t.int8range, "int8range">
}>("int8range")

export const int8range_canonical = defineFunction<"int8range_canonical", {
  (arg:: Input<t.int8range>): Output<t.int8range, "int8range_canonical">
}>("int8range_canonical")

export const int8range_subdiff = defineFunction<"int8range_subdiff", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.float8, "int8range_subdiff">
}>("int8range_subdiff")

export const int8send = defineFunction<"int8send", {
  (arg:: Input<t.int8>): Output<t.bytea, "int8send">
}>("int8send")

export const int8shl = defineFunction<"int8shl", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int8shl">
}>("int8shl")

export const int8shr = defineFunction<"int8shr", {
  (arg1: Input<t.int8>, arg2: Input<t.int4>): Output<t.int8, "int8shr">
}>("int8shr")

export const int8smaller = defineFunction<"int8smaller", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8smaller">
}>("int8smaller")

export const int8um = defineFunction<"int8um", {
  (arg:: Input<t.int8>): Output<t.int8, "int8um">
}>("int8um")

export const int8up = defineFunction<"int8up", {
  (arg:: Input<t.int8>): Output<t.int8, "int8up">
}>("int8up")

export const int8xor = defineFunction<"int8xor", {
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "int8xor">
}>("int8xor")

export const integer_pl_date = defineFunction<"integer_pl_date", {
  (arg1: Input<t.int4>, arg2: Input<t.date>): Output<t.date, "integer_pl_date">
}>("integer_pl_date")

export const inter_lb = defineFunction<"inter_lb", {
  (arg1: Input<t.line>, arg2: Input<t.box>): Output<t.bool, "inter_lb">
}>("inter_lb")

export const inter_sb = defineFunction<"inter_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.bool, "inter_sb">
}>("inter_sb")

export const inter_sl = defineFunction<"inter_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.bool, "inter_sl">
}>("inter_sl")

export const interval = defineFunction<"interval", {
  (arg1: Input<t.interval>, arg2: Input<t.int4>): Output<t.interval, "interval">
  (arg:: Input<t.time>): Output<t.interval, "interval">
}>("interval")

export const interval_cmp = defineFunction<"interval_cmp", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.int4, "interval_cmp">
}>("interval_cmp")

export const interval_div = defineFunction<"interval_div", {
  (arg1: Input<t.interval>, arg2: Input<t.float8>): Output<t.interval, "interval_div">
}>("interval_div")

export const interval_eq = defineFunction<"interval_eq", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_eq">
}>("interval_eq")

export const interval_ge = defineFunction<"interval_ge", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_ge">
}>("interval_ge")

export const interval_gt = defineFunction<"interval_gt", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_gt">
}>("interval_gt")

export const interval_hash = defineFunction<"interval_hash", {
  (arg:: Input<t.interval>): Output<t.int4, "interval_hash">
}>("interval_hash")

export const interval_hash_extended = defineFunction<"interval_hash_extended", {
  (arg1: Input<t.interval>, arg2: Input<t.int8>): Output<t.int8, "interval_hash_extended">
}>("interval_hash_extended")

export const interval_larger = defineFunction<"interval_larger", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_larger">
}>("interval_larger")

export const interval_le = defineFunction<"interval_le", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_le">
}>("interval_le")

export const interval_lt = defineFunction<"interval_lt", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_lt">
}>("interval_lt")

export const interval_mi = defineFunction<"interval_mi", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_mi">
}>("interval_mi")

export const interval_mul = defineFunction<"interval_mul", {
  (arg1: Input<t.interval>, arg2: Input<t.float8>): Output<t.interval, "interval_mul">
}>("interval_mul")

export const interval_ne = defineFunction<"interval_ne", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.bool, "interval_ne">
}>("interval_ne")

export const interval_pl = defineFunction<"interval_pl", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_pl">
}>("interval_pl")

export const interval_pl_date = defineFunction<"interval_pl_date", {
  (arg1: Input<t.interval>, arg2: Input<t.date>): Output<t.timestamp, "interval_pl_date">
}>("interval_pl_date")

export const interval_pl_time = defineFunction<"interval_pl_time", {
  (arg1: Input<t.interval>, arg2: Input<t.time>): Output<t.time, "interval_pl_time">
}>("interval_pl_time")

export const interval_pl_timestamp = defineFunction<"interval_pl_timestamp", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamp>): Output<t.timestamp, "interval_pl_timestamp">
}>("interval_pl_timestamp")

export const interval_pl_timestamptz = defineFunction<"interval_pl_timestamptz", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "interval_pl_timestamptz">
}>("interval_pl_timestamptz")

export const interval_pl_timetz = defineFunction<"interval_pl_timetz", {
  (arg1: Input<t.interval>, arg2: Input<t.timetz>): Output<t.timetz, "interval_pl_timetz">
}>("interval_pl_timetz")

export const interval_send = defineFunction<"interval_send", {
  (arg:: Input<t.interval>): Output<t.bytea, "interval_send">
}>("interval_send")

export const interval_smaller = defineFunction<"interval_smaller", {
  (arg1: Input<t.interval>, arg2: Input<t.interval>): Output<t.interval, "interval_smaller">
}>("interval_smaller")

export const interval_um = defineFunction<"interval_um", {
  (arg:: Input<t.interval>): Output<t.interval, "interval_um">
}>("interval_um")

export const is_normalized = defineFunction<"is_normalized", {
  (arg1: Input<t.text>, arg2?: Input<t.text>): Output<t.bool, "is_normalized">
}>("is_normalized")

export const isclosed = defineFunction<"isclosed", {
  (arg:: Input<t.path>): Output<t.bool, "isclosed">
}>("isclosed")

export const isfinite = defineFunction<"isfinite", {
  (arg:: Input<t.date>): Output<t.bool, "isfinite">
  (arg:: Input<t.timestamptz>): Output<t.bool, "isfinite">
  (arg:: Input<t.interval>): Output<t.bool, "isfinite">
  (arg:: Input<t.timestamp>): Output<t.bool, "isfinite">
}>("isfinite")

export const ishorizontal = defineFunction<"ishorizontal", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "ishorizontal">
  (arg:: Input<t.lseg>): Output<t.bool, "ishorizontal">
  (arg:: Input<t.line>): Output<t.bool, "ishorizontal">
}>("ishorizontal")

export const isopen = defineFunction<"isopen", {
  (arg:: Input<t.path>): Output<t.bool, "isopen">
}>("isopen")

export const isparallel = defineFunction<"isparallel", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "isparallel">
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "isparallel">
}>("isparallel")

export const isperp = defineFunction<"isperp", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "isperp">
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "isperp">
}>("isperp")

export const isvertical = defineFunction<"isvertical", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "isvertical">
  (arg:: Input<t.lseg>): Output<t.bool, "isvertical">
  (arg:: Input<t.line>): Output<t.bool, "isvertical">
}>("isvertical")

export const json_array_element = defineFunction<"json_array_element", {
  (from_json: Input<t.json>, element_index: Input<t.int4>): Output<t.json, "json_array_element">
}>("json_array_element")

export const json_array_element_text = defineFunction<"json_array_element_text", {
  (from_json: Input<t.json>, element_index: Input<t.int4>): Output<t.text, "json_array_element_text">
}>("json_array_element_text")

export const json_array_elements = defineFunction<"json_array_elements", {
  (from_json: Input<t.json>): Output<t.json, "json_array_elements">
}>("json_array_elements")

export const json_array_elements_text = defineFunction<"json_array_elements_text", {
  (from_json: Input<t.json>): Output<t.text, "json_array_elements_text">
}>("json_array_elements_text")

export const json_array_length = defineFunction<"json_array_length", {
  (arg:: Input<t.json>): Output<t.int4, "json_array_length">
}>("json_array_length")

export const json_build_array = defineFunction<"json_build_array", {
  (): Output<t.json, "json_build_array">
}>("json_build_array")

export const json_build_object = defineFunction<"json_build_object", {
  (): Output<t.json, "json_build_object">
}>("json_build_object")

export const json_object_field = defineFunction<"json_object_field", {
  (from_json: Input<t.json>, field_name: Input<t.text>): Output<t.json, "json_object_field">
}>("json_object_field")

export const json_object_field_text = defineFunction<"json_object_field_text", {
  (from_json: Input<t.json>, field_name: Input<t.text>): Output<t.text, "json_object_field_text">
}>("json_object_field_text")

export const json_object_keys = defineFunction<"json_object_keys", {
  (arg:: Input<t.json>): Output<t.text, "json_object_keys">
}>("json_object_keys")

export const json_send = defineFunction<"json_send", {
  (arg:: Input<t.json>): Output<t.bytea, "json_send">
}>("json_send")

export const json_strip_nulls = defineFunction<"json_strip_nulls", {
  (arg:: Input<t.json>): Output<t.json, "json_strip_nulls">
}>("json_strip_nulls")

export const json_to_tsvector = defineFunction<"json_to_tsvector", {
  (arg1: Input<t.json>, arg2: Input<t.jsonb>): Output<t.tsvector, "json_to_tsvector">
}>("json_to_tsvector")

export const json_typeof = defineFunction<"json_typeof", {
  (arg:: Input<t.json>): Output<t.text, "json_typeof">
}>("json_typeof")

export const jsonb_array_element = defineFunction<"jsonb_array_element", {
  (from_json: Input<t.jsonb>, element_index: Input<t.int4>): Output<t.jsonb, "jsonb_array_element">
}>("jsonb_array_element")

export const jsonb_array_element_text = defineFunction<"jsonb_array_element_text", {
  (from_json: Input<t.jsonb>, element_index: Input<t.int4>): Output<t.text, "jsonb_array_element_text">
}>("jsonb_array_element_text")

export const jsonb_array_elements = defineFunction<"jsonb_array_elements", {
  (from_json: Input<t.jsonb>): Output<t.jsonb, "jsonb_array_elements">
}>("jsonb_array_elements")

export const jsonb_array_elements_text = defineFunction<"jsonb_array_elements_text", {
  (from_json: Input<t.jsonb>): Output<t.text, "jsonb_array_elements_text">
}>("jsonb_array_elements_text")

export const jsonb_array_length = defineFunction<"jsonb_array_length", {
  (arg:: Input<t.jsonb>): Output<t.int4, "jsonb_array_length">
}>("jsonb_array_length")

export const jsonb_build_array = defineFunction<"jsonb_build_array", {
  (): Output<t.jsonb, "jsonb_build_array">
}>("jsonb_build_array")

export const jsonb_build_object = defineFunction<"jsonb_build_object", {
  (): Output<t.jsonb, "jsonb_build_object">
}>("jsonb_build_object")

export const jsonb_cmp = defineFunction<"jsonb_cmp", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.int4, "jsonb_cmp">
}>("jsonb_cmp")

export const jsonb_concat = defineFunction<"jsonb_concat", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.jsonb, "jsonb_concat">
}>("jsonb_concat")

export const jsonb_contained = defineFunction<"jsonb_contained", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_contained">
}>("jsonb_contained")

export const jsonb_contains = defineFunction<"jsonb_contains", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_contains">
}>("jsonb_contains")

export const jsonb_delete = defineFunction<"jsonb_delete", {
  (arg1: Input<t.jsonb>, arg2: Input<t.text>): Output<t.jsonb, "jsonb_delete">
  (arg1: Input<t.jsonb>, arg2: Input<t.int4>): Output<t.jsonb, "jsonb_delete">
}>("jsonb_delete")

export const jsonb_eq = defineFunction<"jsonb_eq", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_eq">
}>("jsonb_eq")

export const jsonb_exists = defineFunction<"jsonb_exists", {
  (arg1: Input<t.jsonb>, arg2: Input<t.text>): Output<t.bool, "jsonb_exists">
}>("jsonb_exists")

export const jsonb_ge = defineFunction<"jsonb_ge", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_ge">
}>("jsonb_ge")

export const jsonb_gt = defineFunction<"jsonb_gt", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_gt">
}>("jsonb_gt")

export const jsonb_hash = defineFunction<"jsonb_hash", {
  (arg:: Input<t.jsonb>): Output<t.int4, "jsonb_hash">
}>("jsonb_hash")

export const jsonb_hash_extended = defineFunction<"jsonb_hash_extended", {
  (arg1: Input<t.jsonb>, arg2: Input<t.int8>): Output<t.int8, "jsonb_hash_extended">
}>("jsonb_hash_extended")

export const jsonb_le = defineFunction<"jsonb_le", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_le">
}>("jsonb_le")

export const jsonb_lt = defineFunction<"jsonb_lt", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_lt">
}>("jsonb_lt")

export const jsonb_ne = defineFunction<"jsonb_ne", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.bool, "jsonb_ne">
}>("jsonb_ne")

export const jsonb_object_field = defineFunction<"jsonb_object_field", {
  (from_json: Input<t.jsonb>, field_name: Input<t.text>): Output<t.jsonb, "jsonb_object_field">
}>("jsonb_object_field")

export const jsonb_object_field_text = defineFunction<"jsonb_object_field_text", {
  (from_json: Input<t.jsonb>, field_name: Input<t.text>): Output<t.text, "jsonb_object_field_text">
}>("jsonb_object_field_text")

export const jsonb_object_keys = defineFunction<"jsonb_object_keys", {
  (arg:: Input<t.jsonb>): Output<t.text, "jsonb_object_keys">
}>("jsonb_object_keys")

export const jsonb_pretty = defineFunction<"jsonb_pretty", {
  (arg:: Input<t.jsonb>): Output<t.text, "jsonb_pretty">
}>("jsonb_pretty")

export const jsonb_send = defineFunction<"jsonb_send", {
  (arg:: Input<t.jsonb>): Output<t.bytea, "jsonb_send">
}>("jsonb_send")

export const jsonb_strip_nulls = defineFunction<"jsonb_strip_nulls", {
  (arg:: Input<t.jsonb>): Output<t.jsonb, "jsonb_strip_nulls">
}>("jsonb_strip_nulls")

export const jsonb_to_tsvector = defineFunction<"jsonb_to_tsvector", {
  (arg1: Input<t.jsonb>, arg2: Input<t.jsonb>): Output<t.tsvector, "jsonb_to_tsvector">
}>("jsonb_to_tsvector")

export const jsonb_typeof = defineFunction<"jsonb_typeof", {
  (arg:: Input<t.jsonb>): Output<t.text, "jsonb_typeof">
}>("jsonb_typeof")

export const justify_days = defineFunction<"justify_days", {
  (arg:: Input<t.interval>): Output<t.interval, "justify_days">
}>("justify_days")

export const justify_hours = defineFunction<"justify_hours", {
  (arg:: Input<t.interval>): Output<t.interval, "justify_hours">
}>("justify_hours")

export const justify_interval = defineFunction<"justify_interval", {
  (arg:: Input<t.interval>): Output<t.interval, "justify_interval">
}>("justify_interval")

export const lastval = defineFunction<"lastval", {
  (): Output<t.int8, "lastval">
}>("lastval")

export const lcm = defineFunction<"lcm", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "lcm">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "lcm">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "lcm">
}>("lcm")

export const left = defineFunction<"left", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "left">
}>("left")

export const length = defineFunction<"length", {
  (arg:: Input<t.text>): Output<t.int4, "length">
  (arg:: Input<t.bpchar>): Output<t.int4, "length">
  (arg:: Input<t.lseg>): Output<t.float8, "length">
  (arg:: Input<t.path>): Output<t.float8, "length">
  (arg1: Input<t.bytea>, arg2: Input<t.name>): Output<t.int4, "length">
  (arg:: Input<t.bit>): Output<t.int4, "length">
  (arg:: Input<t.bytea>): Output<t.int4, "length">
  (arg:: Input<t.tsvector>): Output<t.int4, "length">
}>("length")

export const like = defineFunction<"like", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "like">
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "like">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "like">
}>("like")

export const like_escape = defineFunction<"like_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "like_escape">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "like_escape">
}>("like_escape")

export const line = defineFunction<"line", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.line, "line">
}>("line")

export const line_distance = defineFunction<"line_distance", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.float8, "line_distance">
}>("line_distance")

export const line_eq = defineFunction<"line_eq", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_eq">
}>("line_eq")

export const line_horizontal = defineFunction<"line_horizontal", {
  (arg:: Input<t.line>): Output<t.bool, "line_horizontal">
}>("line_horizontal")

export const line_interpt = defineFunction<"line_interpt", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.point, "line_interpt">
}>("line_interpt")

export const line_intersect = defineFunction<"line_intersect", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_intersect">
}>("line_intersect")

export const line_parallel = defineFunction<"line_parallel", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_parallel">
}>("line_parallel")

export const line_perp = defineFunction<"line_perp", {
  (arg1: Input<t.line>, arg2: Input<t.line>): Output<t.bool, "line_perp">
}>("line_perp")

export const line_send = defineFunction<"line_send", {
  (arg:: Input<t.line>): Output<t.bytea, "line_send">
}>("line_send")

export const line_vertical = defineFunction<"line_vertical", {
  (arg:: Input<t.line>): Output<t.bool, "line_vertical">
}>("line_vertical")

export const ln = defineFunction<"ln", {
  (arg:: Input<t.float8>): Output<t.float8, "ln">
  (arg:: Input<t.numeric>): Output<t.numeric, "ln">
}>("ln")

export const lo_close = defineFunction<"lo_close", {
  (arg:: Input<t.int4>): Output<t.int4, "lo_close">
}>("lo_close")

export const lo_creat = defineFunction<"lo_creat", {
  (arg:: Input<t.int4>): Output<t.oid, "lo_creat">
}>("lo_creat")

export const lo_create = defineFunction<"lo_create", {
  (arg:: Input<t.oid>): Output<t.oid, "lo_create">
}>("lo_create")

export const lo_export = defineFunction<"lo_export", {
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.int4, "lo_export">
}>("lo_export")

export const lo_from_bytea = defineFunction<"lo_from_bytea", {
  (arg1: Input<t.oid>, arg2: Input<t.bytea>): Output<t.oid, "lo_from_bytea">
}>("lo_from_bytea")

export const lo_get = defineFunction<"lo_get", {
  (arg:: Input<t.oid>): Output<t.bytea, "lo_get">
  (arg1: Input<t.oid>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.bytea, "lo_get">
}>("lo_get")

export const lo_import = defineFunction<"lo_import", {
  (arg:: Input<t.text>): Output<t.oid, "lo_import">
  (arg1: Input<t.text>, arg2: Input<t.oid>): Output<t.oid, "lo_import">
}>("lo_import")

export const lo_lseek = defineFunction<"lo_lseek", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.int4, "lo_lseek">
}>("lo_lseek")

export const lo_lseek64 = defineFunction<"lo_lseek64", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.int8, "lo_lseek64">
}>("lo_lseek64")

export const lo_open = defineFunction<"lo_open", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.int4, "lo_open">
}>("lo_open")

export const lo_tell = defineFunction<"lo_tell", {
  (arg:: Input<t.int4>): Output<t.int4, "lo_tell">
}>("lo_tell")

export const lo_tell64 = defineFunction<"lo_tell64", {
  (arg:: Input<t.int4>): Output<t.int8, "lo_tell64">
}>("lo_tell64")

export const lo_truncate = defineFunction<"lo_truncate", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "lo_truncate">
}>("lo_truncate")

export const lo_truncate64 = defineFunction<"lo_truncate64", {
  (arg1: Input<t.int4>, arg2: Input<t.int8>): Output<t.int4, "lo_truncate64">
}>("lo_truncate64")

export const lo_unlink = defineFunction<"lo_unlink", {
  (arg:: Input<t.oid>): Output<t.int4, "lo_unlink">
}>("lo_unlink")

export const log = defineFunction<"log", {
  (arg:: Input<t.float8>): Output<t.float8, "log">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "log">
  (arg:: Input<t.numeric>): Output<t.numeric, "log">
}>("log")

export const log10 = defineFunction<"log10", {
  (arg:: Input<t.float8>): Output<t.float8, "log10">
  (arg:: Input<t.numeric>): Output<t.numeric, "log10">
}>("log10")

export const loread = defineFunction<"loread", {
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bytea, "loread">
}>("loread")

export const lower = defineFunction<"lower", {
  (arg:: Input<t.text>): Output<t.text, "lower">
}>("lower")

export const lowrite = defineFunction<"lowrite", {
  (arg1: Input<t.int4>, arg2: Input<t.bytea>): Output<t.int4, "lowrite">
}>("lowrite")

export const lpad = defineFunction<"lpad", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.text, "lpad">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "lpad">
}>("lpad")

export const lseg = defineFunction<"lseg", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.lseg, "lseg">
  (arg:: Input<t.box>): Output<t.lseg, "lseg">
}>("lseg")

export const lseg_center = defineFunction<"lseg_center", {
  (arg:: Input<t.lseg>): Output<t.point, "lseg_center">
}>("lseg_center")

export const lseg_distance = defineFunction<"lseg_distance", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.float8, "lseg_distance">
}>("lseg_distance")

export const lseg_eq = defineFunction<"lseg_eq", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_eq">
}>("lseg_eq")

export const lseg_ge = defineFunction<"lseg_ge", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_ge">
}>("lseg_ge")

export const lseg_gt = defineFunction<"lseg_gt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_gt">
}>("lseg_gt")

export const lseg_horizontal = defineFunction<"lseg_horizontal", {
  (arg:: Input<t.lseg>): Output<t.bool, "lseg_horizontal">
}>("lseg_horizontal")

export const lseg_interpt = defineFunction<"lseg_interpt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.point, "lseg_interpt">
}>("lseg_interpt")

export const lseg_intersect = defineFunction<"lseg_intersect", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_intersect">
}>("lseg_intersect")

export const lseg_le = defineFunction<"lseg_le", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_le">
}>("lseg_le")

export const lseg_length = defineFunction<"lseg_length", {
  (arg:: Input<t.lseg>): Output<t.float8, "lseg_length">
}>("lseg_length")

export const lseg_lt = defineFunction<"lseg_lt", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_lt">
}>("lseg_lt")

export const lseg_ne = defineFunction<"lseg_ne", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_ne">
}>("lseg_ne")

export const lseg_parallel = defineFunction<"lseg_parallel", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_parallel">
}>("lseg_parallel")

export const lseg_perp = defineFunction<"lseg_perp", {
  (arg1: Input<t.lseg>, arg2: Input<t.lseg>): Output<t.bool, "lseg_perp">
}>("lseg_perp")

export const lseg_send = defineFunction<"lseg_send", {
  (arg:: Input<t.lseg>): Output<t.bytea, "lseg_send">
}>("lseg_send")

export const lseg_vertical = defineFunction<"lseg_vertical", {
  (arg:: Input<t.lseg>): Output<t.bool, "lseg_vertical">
}>("lseg_vertical")

export const ltrim = defineFunction<"ltrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "ltrim">
  (arg:: Input<t.text>): Output<t.text, "ltrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "ltrim">
}>("ltrim")

export const macaddr_and = defineFunction<"macaddr_and", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.macaddr, "macaddr_and">
}>("macaddr_and")

export const macaddr_cmp = defineFunction<"macaddr_cmp", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.int4, "macaddr_cmp">
}>("macaddr_cmp")

export const macaddr_eq = defineFunction<"macaddr_eq", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_eq">
}>("macaddr_eq")

export const macaddr_ge = defineFunction<"macaddr_ge", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_ge">
}>("macaddr_ge")

export const macaddr_gt = defineFunction<"macaddr_gt", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_gt">
}>("macaddr_gt")

export const macaddr_le = defineFunction<"macaddr_le", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_le">
}>("macaddr_le")

export const macaddr_lt = defineFunction<"macaddr_lt", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_lt">
}>("macaddr_lt")

export const macaddr_ne = defineFunction<"macaddr_ne", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.bool, "macaddr_ne">
}>("macaddr_ne")

export const macaddr_not = defineFunction<"macaddr_not", {
  (arg:: Input<t.macaddr>): Output<t.macaddr, "macaddr_not">
}>("macaddr_not")

export const macaddr_or = defineFunction<"macaddr_or", {
  (arg1: Input<t.macaddr>, arg2: Input<t.macaddr>): Output<t.macaddr, "macaddr_or">
}>("macaddr_or")

export const macaddr_send = defineFunction<"macaddr_send", {
  (arg:: Input<t.macaddr>): Output<t.bytea, "macaddr_send">
}>("macaddr_send")

export const make_date = defineFunction<"make_date", {
  (year: Input<t.int4>, month: Input<t.int4>, day: Input<t.int4>): Output<t.date, "make_date">
}>("make_date")

export const make_interval = defineFunction<"make_interval", {
  (years?: Input<t.int4>, months?: Input<t.int4>, weeks?: Input<t.int4>, days?: Input<t.int4>, hours?: Input<t.int4>, mins?: Input<t.int4>, secs?: Input<t.float8>): Output<t.interval, "make_interval">
}>("make_interval")

export const make_time = defineFunction<"make_time", {
  (hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.time, "make_time">
}>("make_time")

export const make_timestamp = defineFunction<"make_timestamp", {
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.timestamp, "make_timestamp">
}>("make_timestamp")

export const make_timestamptz = defineFunction<"make_timestamptz", {
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>): Output<t.timestamptz, "make_timestamptz">
  (year: Input<t.int4>, month: Input<t.int4>, mday: Input<t.int4>, hour: Input<t.int4>, min: Input<t.int4>, sec: Input<t.float8>, timezone: Input<t.text>): Output<t.timestamptz, "make_timestamptz">
}>("make_timestamptz")

export const masklen = defineFunction<"masklen", {
  (arg:: Input<t.inet>): Output<t.int4, "masklen">
}>("masklen")

export const max = defineFunction<"max", {
  (arg:: Input<t.int8>): Output<t.int8, "max">
  (arg:: Input<t.int4>): Output<t.int4, "max">
  (arg:: Input<t.int2>): Output<t.int2, "max">
  (arg:: Input<t.oid>): Output<t.oid, "max">
  (arg:: Input<t.float4>): Output<t.float4, "max">
  (arg:: Input<t.float8>): Output<t.float8, "max">
  (arg:: Input<t.date>): Output<t.date, "max">
  (arg:: Input<t.time>): Output<t.time, "max">
  (arg:: Input<t.timetz>): Output<t.timetz, "max">
  (arg:: Input<t.money>): Output<t.money, "max">
  (arg:: Input<t.timestamp>): Output<t.timestamp, "max">
  (arg:: Input<t.timestamptz>): Output<t.timestamptz, "max">
  (arg:: Input<t.interval>): Output<t.interval, "max">
  (arg:: Input<t.text>): Output<t.text, "max">
  (arg:: Input<t.numeric>): Output<t.numeric, "max">
  (arg:: Input<t.bpchar>): Output<t.bpchar, "max">
  (arg:: Input<t.inet>): Output<t.inet, "max">
}>("max")

export const md5 = defineFunction<"md5", {
  (arg:: Input<t.text>): Output<t.text, "md5">
  (arg:: Input<t.bytea>): Output<t.text, "md5">
}>("md5")

export const min = defineFunction<"min", {
  (arg:: Input<t.int8>): Output<t.int8, "min">
  (arg:: Input<t.int4>): Output<t.int4, "min">
  (arg:: Input<t.int2>): Output<t.int2, "min">
  (arg:: Input<t.oid>): Output<t.oid, "min">
  (arg:: Input<t.float4>): Output<t.float4, "min">
  (arg:: Input<t.float8>): Output<t.float8, "min">
  (arg:: Input<t.date>): Output<t.date, "min">
  (arg:: Input<t.time>): Output<t.time, "min">
  (arg:: Input<t.timetz>): Output<t.timetz, "min">
  (arg:: Input<t.money>): Output<t.money, "min">
  (arg:: Input<t.timestamp>): Output<t.timestamp, "min">
  (arg:: Input<t.timestamptz>): Output<t.timestamptz, "min">
  (arg:: Input<t.interval>): Output<t.interval, "min">
  (arg:: Input<t.text>): Output<t.text, "min">
  (arg:: Input<t.numeric>): Output<t.numeric, "min">
  (arg:: Input<t.bpchar>): Output<t.bpchar, "min">
  (arg:: Input<t.inet>): Output<t.inet, "min">
}>("min")

export const min_scale = defineFunction<"min_scale", {
  (arg:: Input<t.numeric>): Output<t.int4, "min_scale">
}>("min_scale")

export const mod = defineFunction<"mod", {
  (arg1: Input<t.int2>, arg2: Input<t.int2>): Output<t.int2, "mod">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.int4, "mod">
  (arg1: Input<t.int8>, arg2: Input<t.int8>): Output<t.int8, "mod">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "mod">
}>("mod")

export const money = defineFunction<"money", {
  (arg:: Input<t.numeric>): Output<t.money, "money">
  (arg:: Input<t.int4>): Output<t.money, "money">
  (arg:: Input<t.int8>): Output<t.money, "money">
}>("money")

export const mul_d_interval = defineFunction<"mul_d_interval", {
  (arg1: Input<t.float8>, arg2: Input<t.interval>): Output<t.interval, "mul_d_interval">
}>("mul_d_interval")

export const name = defineFunction<"name", {
  (arg:: Input<t.text>): Output<t.name, "name">
  (arg:: Input<t.bpchar>): Output<t.name, "name">
  (arg:: Input<t.varchar>): Output<t.name, "name">
}>("name")

export const nameconcatoid = defineFunction<"nameconcatoid", {
  (arg1: Input<t.name>, arg2: Input<t.oid>): Output<t.name, "nameconcatoid">
}>("nameconcatoid")

export const nameeq = defineFunction<"nameeq", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "nameeq">
}>("nameeq")

export const nameeqtext = defineFunction<"nameeqtext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameeqtext">
}>("nameeqtext")

export const namege = defineFunction<"namege", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namege">
}>("namege")

export const namegetext = defineFunction<"namegetext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namegetext">
}>("namegetext")

export const namegt = defineFunction<"namegt", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namegt">
}>("namegt")

export const namegttext = defineFunction<"namegttext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namegttext">
}>("namegttext")

export const nameiclike = defineFunction<"nameiclike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameiclike">
}>("nameiclike")

export const nameicnlike = defineFunction<"nameicnlike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicnlike">
}>("nameicnlike")

export const nameicregexeq = defineFunction<"nameicregexeq", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicregexeq">
}>("nameicregexeq")

export const nameicregexne = defineFunction<"nameicregexne", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameicregexne">
}>("nameicregexne")

export const namele = defineFunction<"namele", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namele">
}>("namele")

export const nameletext = defineFunction<"nameletext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameletext">
}>("nameletext")

export const namelike = defineFunction<"namelike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namelike">
}>("namelike")

export const namelt = defineFunction<"namelt", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namelt">
}>("namelt")

export const namelttext = defineFunction<"namelttext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namelttext">
}>("namelttext")

export const namene = defineFunction<"namene", {
  (arg1: Input<t.name>, arg2: Input<t.name>): Output<t.bool, "namene">
}>("namene")

export const namenetext = defineFunction<"namenetext", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namenetext">
}>("namenetext")

export const namenlike = defineFunction<"namenlike", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "namenlike">
}>("namenlike")

export const nameregexeq = defineFunction<"nameregexeq", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameregexeq">
}>("nameregexeq")

export const nameregexne = defineFunction<"nameregexne", {
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "nameregexne">
}>("nameregexne")

export const namesend = defineFunction<"namesend", {
  (arg:: Input<t.name>): Output<t.bytea, "namesend">
}>("namesend")

export const netmask = defineFunction<"netmask", {
  (arg:: Input<t.inet>): Output<t.inet, "netmask">
}>("netmask")

export const network = defineFunction<"network", {
  (arg:: Input<t.inet>): Output<t.cidr, "network">
}>("network")

export const network_cmp = defineFunction<"network_cmp", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.int4, "network_cmp">
}>("network_cmp")

export const network_eq = defineFunction<"network_eq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_eq">
}>("network_eq")

export const network_ge = defineFunction<"network_ge", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_ge">
}>("network_ge")

export const network_gt = defineFunction<"network_gt", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_gt">
}>("network_gt")

export const network_larger = defineFunction<"network_larger", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "network_larger">
}>("network_larger")

export const network_le = defineFunction<"network_le", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_le">
}>("network_le")

export const network_lt = defineFunction<"network_lt", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_lt">
}>("network_lt")

export const network_ne = defineFunction<"network_ne", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_ne">
}>("network_ne")

export const network_overlap = defineFunction<"network_overlap", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_overlap">
}>("network_overlap")

export const network_smaller = defineFunction<"network_smaller", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.inet, "network_smaller">
}>("network_smaller")

export const network_sub = defineFunction<"network_sub", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_sub">
}>("network_sub")

export const network_subeq = defineFunction<"network_subeq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_subeq">
}>("network_subeq")

export const network_sup = defineFunction<"network_sup", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_sup">
}>("network_sup")

export const network_supeq = defineFunction<"network_supeq", {
  (arg1: Input<t.inet>, arg2: Input<t.inet>): Output<t.bool, "network_supeq">
}>("network_supeq")

export const normalize = defineFunction<"normalize", {
  (arg1: Input<t.text>, arg2?: Input<t.text>): Output<t.text, "normalize">
}>("normalize")

export const notlike = defineFunction<"notlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "notlike">
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "notlike">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bool, "notlike">
}>("notlike")

export const now = defineFunction<"now", {
  (): Output<t.timestamptz, "now">
}>("now")

export const npoints = defineFunction<"npoints", {
  (arg:: Input<t.path>): Output<t.int4, "npoints">
  (arg:: Input<t.polygon>): Output<t.int4, "npoints">
}>("npoints")

export const ntile = defineFunction<"ntile", {
  (arg:: Input<t.int4>): Output<t.int4, "ntile">
}>("ntile")

export const numeric = defineFunction<"numeric", {
  (arg:: Input<t.money>): Output<t.numeric, "numeric">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "numeric">
  (arg:: Input<t.int4>): Output<t.numeric, "numeric">
  (arg:: Input<t.float4>): Output<t.numeric, "numeric">
  (arg:: Input<t.float8>): Output<t.numeric, "numeric">
  (arg:: Input<t.int8>): Output<t.numeric, "numeric">
  (arg:: Input<t.int2>): Output<t.numeric, "numeric">
  (arg:: Input<t.jsonb>): Output<t.numeric, "numeric">
}>("numeric")

export const numeric_abs = defineFunction<"numeric_abs", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_abs">
}>("numeric_abs")

export const numeric_add = defineFunction<"numeric_add", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_add">
}>("numeric_add")

export const numeric_cmp = defineFunction<"numeric_cmp", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.int4, "numeric_cmp">
}>("numeric_cmp")

export const numeric_div = defineFunction<"numeric_div", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_div">
}>("numeric_div")

export const numeric_div_trunc = defineFunction<"numeric_div_trunc", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_div_trunc">
}>("numeric_div_trunc")

export const numeric_eq = defineFunction<"numeric_eq", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_eq">
}>("numeric_eq")

export const numeric_exp = defineFunction<"numeric_exp", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_exp">
}>("numeric_exp")

export const numeric_ge = defineFunction<"numeric_ge", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_ge">
}>("numeric_ge")

export const numeric_gt = defineFunction<"numeric_gt", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_gt">
}>("numeric_gt")

export const numeric_inc = defineFunction<"numeric_inc", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_inc">
}>("numeric_inc")

export const numeric_larger = defineFunction<"numeric_larger", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_larger">
}>("numeric_larger")

export const numeric_le = defineFunction<"numeric_le", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_le">
}>("numeric_le")

export const numeric_ln = defineFunction<"numeric_ln", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_ln">
}>("numeric_ln")

export const numeric_log = defineFunction<"numeric_log", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_log">
}>("numeric_log")

export const numeric_lt = defineFunction<"numeric_lt", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_lt">
}>("numeric_lt")

export const numeric_mod = defineFunction<"numeric_mod", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_mod">
}>("numeric_mod")

export const numeric_mul = defineFunction<"numeric_mul", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_mul">
}>("numeric_mul")

export const numeric_ne = defineFunction<"numeric_ne", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.bool, "numeric_ne">
}>("numeric_ne")

export const numeric_power = defineFunction<"numeric_power", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_power">
}>("numeric_power")

export const numeric_send = defineFunction<"numeric_send", {
  (arg:: Input<t.numeric>): Output<t.bytea, "numeric_send">
}>("numeric_send")

export const numeric_smaller = defineFunction<"numeric_smaller", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_smaller">
}>("numeric_smaller")

export const numeric_sqrt = defineFunction<"numeric_sqrt", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_sqrt">
}>("numeric_sqrt")

export const numeric_sub = defineFunction<"numeric_sub", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "numeric_sub">
}>("numeric_sub")

export const numeric_uminus = defineFunction<"numeric_uminus", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_uminus">
}>("numeric_uminus")

export const numeric_uplus = defineFunction<"numeric_uplus", {
  (arg:: Input<t.numeric>): Output<t.numeric, "numeric_uplus">
}>("numeric_uplus")

export const numnode = defineFunction<"numnode", {
  (arg:: Input<t.tsquery>): Output<t.int4, "numnode">
}>("numnode")

export const numrange = defineFunction<"numrange", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numrange, "numrange">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.text>): Output<t.numrange, "numrange">
}>("numrange")

export const numrange_subdiff = defineFunction<"numrange_subdiff", {
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.float8, "numrange_subdiff">
}>("numrange_subdiff")

export const obj_description = defineFunction<"obj_description", {
  (arg:: Input<t.oid>): Output<t.text, "obj_description">
  (arg1: Input<t.oid>, arg2: Input<t.name>): Output<t.text, "obj_description">
}>("obj_description")

export const octet_length = defineFunction<"octet_length", {
  (arg:: Input<t.bytea>): Output<t.int4, "octet_length">
  (arg:: Input<t.text>): Output<t.int4, "octet_length">
  (arg:: Input<t.bpchar>): Output<t.int4, "octet_length">
  (arg:: Input<t.bit>): Output<t.int4, "octet_length">
}>("octet_length")

export const oid = defineFunction<"oid", {
  (arg:: Input<t.int8>): Output<t.oid, "oid">
}>("oid")

export const oideq = defineFunction<"oideq", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oideq">
}>("oideq")

export const oidge = defineFunction<"oidge", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidge">
}>("oidge")

export const oidgt = defineFunction<"oidgt", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidgt">
}>("oidgt")

export const oidlarger = defineFunction<"oidlarger", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.oid, "oidlarger">
}>("oidlarger")

export const oidle = defineFunction<"oidle", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidle">
}>("oidle")

export const oidlt = defineFunction<"oidlt", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidlt">
}>("oidlt")

export const oidne = defineFunction<"oidne", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.bool, "oidne">
}>("oidne")

export const oidsend = defineFunction<"oidsend", {
  (arg:: Input<t.oid>): Output<t.bytea, "oidsend">
}>("oidsend")

export const oidsmaller = defineFunction<"oidsmaller", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>): Output<t.oid, "oidsmaller">
}>("oidsmaller")

export const on_pb = defineFunction<"on_pb", {
  (arg1: Input<t.point>, arg2: Input<t.box>): Output<t.bool, "on_pb">
}>("on_pb")

export const on_pl = defineFunction<"on_pl", {
  (arg1: Input<t.point>, arg2: Input<t.line>): Output<t.bool, "on_pl">
}>("on_pl")

export const on_ppath = defineFunction<"on_ppath", {
  (arg1: Input<t.point>, arg2: Input<t.path>): Output<t.bool, "on_ppath">
}>("on_ppath")

export const on_ps = defineFunction<"on_ps", {
  (arg1: Input<t.point>, arg2: Input<t.lseg>): Output<t.bool, "on_ps">
}>("on_ps")

export const on_sb = defineFunction<"on_sb", {
  (arg1: Input<t.lseg>, arg2: Input<t.box>): Output<t.bool, "on_sb">
}>("on_sb")

export const on_sl = defineFunction<"on_sl", {
  (arg1: Input<t.lseg>, arg2: Input<t.line>): Output<t.bool, "on_sl">
}>("on_sl")

export const overlaps = defineFunction<"overlaps", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>, arg3: Input<t.timetz>, arg4: Input<t.timetz>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.timestamptz>, arg4: Input<t.timestamptz>): Output<t.bool, "overlaps">
  (arg1: Input<t.time>, arg2: Input<t.time>, arg3: Input<t.time>, arg4: Input<t.time>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.timestamp>, arg4: Input<t.timestamp>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.timestamptz>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>, arg3: Input<t.timestamptz>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>, arg3: Input<t.timestamptz>, arg4: Input<t.timestamptz>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.timestamp>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>, arg3: Input<t.timestamp>, arg4: Input<t.timestamp>): Output<t.bool, "overlaps">
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>, arg3: Input<t.timestamp>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.time>, arg2: Input<t.interval>, arg3: Input<t.time>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.time>, arg2: Input<t.time>, arg3: Input<t.time>, arg4: Input<t.interval>): Output<t.bool, "overlaps">
  (arg1: Input<t.time>, arg2: Input<t.interval>, arg3: Input<t.time>, arg4: Input<t.time>): Output<t.bool, "overlaps">
}>("overlaps")

export const overlay = defineFunction<"overlay", {
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.bytea, "overlay">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>, arg3: Input<t.int4>): Output<t.bytea, "overlay">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.text, "overlay">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>): Output<t.text, "overlay">
  (arg1: Input<t.bit>, arg2: Input<t.bit>, arg3: Input<t.int4>, arg4: Input<t.int4>): Output<t.bit, "overlay">
  (arg1: Input<t.bit>, arg2: Input<t.bit>, arg3: Input<t.int4>): Output<t.bit, "overlay">
}>("overlay")

export const path = defineFunction<"path", {
  (arg:: Input<t.polygon>): Output<t.path, "path">
}>("path")

export const path_add = defineFunction<"path_add", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.path, "path_add">
}>("path_add")

export const path_add_pt = defineFunction<"path_add_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_add_pt">
}>("path_add_pt")

export const path_center = defineFunction<"path_center", {
  (arg:: Input<t.path>): Output<t.point, "path_center">
}>("path_center")

export const path_contain_pt = defineFunction<"path_contain_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.bool, "path_contain_pt">
}>("path_contain_pt")

export const path_distance = defineFunction<"path_distance", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.float8, "path_distance">
}>("path_distance")

export const path_div_pt = defineFunction<"path_div_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_div_pt">
}>("path_div_pt")

export const path_inter = defineFunction<"path_inter", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_inter">
}>("path_inter")

export const path_length = defineFunction<"path_length", {
  (arg:: Input<t.path>): Output<t.float8, "path_length">
}>("path_length")

export const path_mul_pt = defineFunction<"path_mul_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_mul_pt">
}>("path_mul_pt")

export const path_n_eq = defineFunction<"path_n_eq", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_eq">
}>("path_n_eq")

export const path_n_ge = defineFunction<"path_n_ge", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_ge">
}>("path_n_ge")

export const path_n_gt = defineFunction<"path_n_gt", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_gt">
}>("path_n_gt")

export const path_n_le = defineFunction<"path_n_le", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_le">
}>("path_n_le")

export const path_n_lt = defineFunction<"path_n_lt", {
  (arg1: Input<t.path>, arg2: Input<t.path>): Output<t.bool, "path_n_lt">
}>("path_n_lt")

export const path_npoints = defineFunction<"path_npoints", {
  (arg:: Input<t.path>): Output<t.int4, "path_npoints">
}>("path_npoints")

export const path_send = defineFunction<"path_send", {
  (arg:: Input<t.path>): Output<t.bytea, "path_send">
}>("path_send")

export const path_sub_pt = defineFunction<"path_sub_pt", {
  (arg1: Input<t.path>, arg2: Input<t.point>): Output<t.path, "path_sub_pt">
}>("path_sub_pt")

export const pclose = defineFunction<"pclose", {
  (arg:: Input<t.path>): Output<t.path, "pclose">
}>("pclose")

export const percent_rank = defineFunction<"percent_rank", {
  (): Output<t.float8, "percent_rank">
}>("percent_rank")

export const percentile_cont = defineFunction<"percentile_cont", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "percentile_cont">
  (arg1: Input<t.float8>, arg2: Input<t.interval>): Output<t.interval, "percentile_cont">
}>("percentile_cont")

export const pg_advisory_unlock = defineFunction<"pg_advisory_unlock", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_advisory_unlock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_advisory_unlock">
}>("pg_advisory_unlock")

export const pg_advisory_unlock_shared = defineFunction<"pg_advisory_unlock_shared", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_advisory_unlock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_advisory_unlock_shared">
}>("pg_advisory_unlock_shared")

export const pg_backend_pid = defineFunction<"pg_backend_pid", {
  (): Output<t.int4, "pg_backend_pid">
}>("pg_backend_pid")

export const pg_backup_start_time = defineFunction<"pg_backup_start_time", {
  (): Output<t.timestamptz, "pg_backup_start_time">
}>("pg_backup_start_time")

export const pg_cancel_backend = defineFunction<"pg_cancel_backend", {
  (arg:: Input<t.int4>): Output<t.bool, "pg_cancel_backend">
}>("pg_cancel_backend")

export const pg_char_to_encoding = defineFunction<"pg_char_to_encoding", {
  (arg:: Input<t.name>): Output<t.int4, "pg_char_to_encoding">
}>("pg_char_to_encoding")

export const pg_client_encoding = defineFunction<"pg_client_encoding", {
  (): Output<t.name, "pg_client_encoding">
}>("pg_client_encoding")

export const pg_collation_actual_version = defineFunction<"pg_collation_actual_version", {
  (arg:: Input<t.oid>): Output<t.text, "pg_collation_actual_version">
}>("pg_collation_actual_version")

export const pg_collation_is_visible = defineFunction<"pg_collation_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_collation_is_visible">
}>("pg_collation_is_visible")

export const pg_conf_load_time = defineFunction<"pg_conf_load_time", {
  (): Output<t.timestamptz, "pg_conf_load_time">
}>("pg_conf_load_time")

export const pg_conversion_is_visible = defineFunction<"pg_conversion_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_conversion_is_visible">
}>("pg_conversion_is_visible")

export const pg_current_logfile = defineFunction<"pg_current_logfile", {
  (): Output<t.text, "pg_current_logfile">
  (arg:: Input<t.text>): Output<t.text, "pg_current_logfile">
}>("pg_current_logfile")

export const pg_database_size = defineFunction<"pg_database_size", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_database_size">
  (arg:: Input<t.name>): Output<t.int8, "pg_database_size">
}>("pg_database_size")

export const pg_describe_object = defineFunction<"pg_describe_object", {
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.int4>): Output<t.text, "pg_describe_object">
}>("pg_describe_object")

export const pg_encoding_max_length = defineFunction<"pg_encoding_max_length", {
  (arg:: Input<t.int4>): Output<t.int4, "pg_encoding_max_length">
}>("pg_encoding_max_length")

export const pg_encoding_to_char = defineFunction<"pg_encoding_to_char", {
  (arg:: Input<t.int4>): Output<t.name, "pg_encoding_to_char">
}>("pg_encoding_to_char")

export const pg_event_trigger_table_rewrite_oid = defineFunction<"pg_event_trigger_table_rewrite_oid", {
  (): Output<t.oid, "pg_event_trigger_table_rewrite_oid">
}>("pg_event_trigger_table_rewrite_oid")

export const pg_event_trigger_table_rewrite_reason = defineFunction<"pg_event_trigger_table_rewrite_reason", {
  (): Output<t.int4, "pg_event_trigger_table_rewrite_reason">
}>("pg_event_trigger_table_rewrite_reason")

export const pg_export_snapshot = defineFunction<"pg_export_snapshot", {
  (): Output<t.text, "pg_export_snapshot">
}>("pg_export_snapshot")

export const pg_function_is_visible = defineFunction<"pg_function_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_function_is_visible">
}>("pg_function_is_visible")

export const pg_get_constraintdef = defineFunction<"pg_get_constraintdef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_constraintdef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_constraintdef">
}>("pg_get_constraintdef")

export const pg_get_function_arg_default = defineFunction<"pg_get_function_arg_default", {
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "pg_get_function_arg_default">
}>("pg_get_function_arg_default")

export const pg_get_function_arguments = defineFunction<"pg_get_function_arguments", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_function_arguments">
}>("pg_get_function_arguments")

export const pg_get_function_identity_arguments = defineFunction<"pg_get_function_identity_arguments", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_function_identity_arguments">
}>("pg_get_function_identity_arguments")

export const pg_get_function_result = defineFunction<"pg_get_function_result", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_function_result">
}>("pg_get_function_result")

export const pg_get_function_sqlbody = defineFunction<"pg_get_function_sqlbody", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_function_sqlbody">
}>("pg_get_function_sqlbody")

export const pg_get_functiondef = defineFunction<"pg_get_functiondef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_functiondef">
}>("pg_get_functiondef")

export const pg_get_indexdef = defineFunction<"pg_get_indexdef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_indexdef">
  (arg1: Input<t.oid>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.text, "pg_get_indexdef">
}>("pg_get_indexdef")

export const pg_get_partition_constraintdef = defineFunction<"pg_get_partition_constraintdef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_partition_constraintdef">
}>("pg_get_partition_constraintdef")

export const pg_get_partkeydef = defineFunction<"pg_get_partkeydef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_partkeydef">
}>("pg_get_partkeydef")

export const pg_get_publication_tables = defineFunction<"pg_get_publication_tables", {
  (pubname: Input<t.text>): Output<t.oid, "pg_get_publication_tables">
}>("pg_get_publication_tables")

export const pg_get_ruledef = defineFunction<"pg_get_ruledef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_ruledef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_ruledef">
}>("pg_get_ruledef")

export const pg_get_serial_sequence = defineFunction<"pg_get_serial_sequence", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "pg_get_serial_sequence">
}>("pg_get_serial_sequence")

export const pg_get_statisticsobjdef = defineFunction<"pg_get_statisticsobjdef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_statisticsobjdef">
}>("pg_get_statisticsobjdef")

export const pg_get_statisticsobjdef_columns = defineFunction<"pg_get_statisticsobjdef_columns", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_statisticsobjdef_columns">
}>("pg_get_statisticsobjdef_columns")

export const pg_get_triggerdef = defineFunction<"pg_get_triggerdef", {
  (arg:: Input<t.oid>): Output<t.text, "pg_get_triggerdef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_triggerdef">
}>("pg_get_triggerdef")

export const pg_get_userbyid = defineFunction<"pg_get_userbyid", {
  (arg:: Input<t.oid>): Output<t.name, "pg_get_userbyid">
}>("pg_get_userbyid")

export const pg_get_viewdef = defineFunction<"pg_get_viewdef", {
  (arg:: Input<t.text>): Output<t.text, "pg_get_viewdef">
  (arg:: Input<t.oid>): Output<t.text, "pg_get_viewdef">
  (arg1: Input<t.text>, arg2: Input<t.bool>): Output<t.text, "pg_get_viewdef">
  (arg1: Input<t.oid>, arg2: Input<t.bool>): Output<t.text, "pg_get_viewdef">
  (arg1: Input<t.oid>, arg2: Input<t.int4>): Output<t.text, "pg_get_viewdef">
}>("pg_get_viewdef")

export const pg_get_wal_replay_pause_state = defineFunction<"pg_get_wal_replay_pause_state", {
  (): Output<t.text, "pg_get_wal_replay_pause_state">
}>("pg_get_wal_replay_pause_state")

export const pg_has_role = defineFunction<"pg_has_role", {
  (arg1: Input<t.name>, arg2: Input<t.name>, arg3: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.name>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.oid>, arg2: Input<t.name>, arg3: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.oid>, arg2: Input<t.oid>, arg3: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.name>, arg2: Input<t.text>): Output<t.bool, "pg_has_role">
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "pg_has_role">
}>("pg_has_role")

export const pg_indexam_has_property = defineFunction<"pg_indexam_has_property", {
  (arg1: Input<t.oid>, arg2: Input<t.text>): Output<t.bool, "pg_indexam_has_property">
}>("pg_indexam_has_property")

export const pg_indexam_progress_phasename = defineFunction<"pg_indexam_progress_phasename", {
  (arg1: Input<t.oid>, arg2: Input<t.int8>): Output<t.text, "pg_indexam_progress_phasename">
}>("pg_indexam_progress_phasename")

export const pg_is_in_backup = defineFunction<"pg_is_in_backup", {
  (): Output<t.bool, "pg_is_in_backup">
}>("pg_is_in_backup")

export const pg_is_in_recovery = defineFunction<"pg_is_in_recovery", {
  (): Output<t.bool, "pg_is_in_recovery">
}>("pg_is_in_recovery")

export const pg_is_other_temp_schema = defineFunction<"pg_is_other_temp_schema", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_is_other_temp_schema">
}>("pg_is_other_temp_schema")

export const pg_is_wal_replay_paused = defineFunction<"pg_is_wal_replay_paused", {
  (): Output<t.bool, "pg_is_wal_replay_paused">
}>("pg_is_wal_replay_paused")

export const pg_jit_available = defineFunction<"pg_jit_available", {
  (): Output<t.bool, "pg_jit_available">
}>("pg_jit_available")

export const pg_last_xact_replay_timestamp = defineFunction<"pg_last_xact_replay_timestamp", {
  (): Output<t.timestamptz, "pg_last_xact_replay_timestamp">
}>("pg_last_xact_replay_timestamp")

export const pg_listening_channels = defineFunction<"pg_listening_channels", {
  (): Output<t.text, "pg_listening_channels">
}>("pg_listening_channels")

export const pg_log_backend_memory_contexts = defineFunction<"pg_log_backend_memory_contexts", {
  (arg:: Input<t.int4>): Output<t.bool, "pg_log_backend_memory_contexts">
}>("pg_log_backend_memory_contexts")

export const pg_ls_dir = defineFunction<"pg_ls_dir", {
  (arg:: Input<t.text>): Output<t.text, "pg_ls_dir">
  (arg1: Input<t.text>, arg2: Input<t.bool>, arg3: Input<t.bool>): Output<t.text, "pg_ls_dir">
}>("pg_ls_dir")

export const pg_my_temp_schema = defineFunction<"pg_my_temp_schema", {
  (): Output<t.oid, "pg_my_temp_schema">
}>("pg_my_temp_schema")

export const pg_notification_queue_usage = defineFunction<"pg_notification_queue_usage", {
  (): Output<t.float8, "pg_notification_queue_usage">
}>("pg_notification_queue_usage")

export const pg_opclass_is_visible = defineFunction<"pg_opclass_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_opclass_is_visible">
}>("pg_opclass_is_visible")

export const pg_operator_is_visible = defineFunction<"pg_operator_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_operator_is_visible">
}>("pg_operator_is_visible")

export const pg_opfamily_is_visible = defineFunction<"pg_opfamily_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_opfamily_is_visible">
}>("pg_opfamily_is_visible")

export const pg_postmaster_start_time = defineFunction<"pg_postmaster_start_time", {
  (): Output<t.timestamptz, "pg_postmaster_start_time">
}>("pg_postmaster_start_time")

export const pg_promote = defineFunction<"pg_promote", {
  (wait?: Input<t.bool>, wait_seconds?: Input<t.int4>): Output<t.bool, "pg_promote">
}>("pg_promote")

export const pg_read_binary_file = defineFunction<"pg_read_binary_file", {
  (arg:: Input<t.text>): Output<t.bytea, "pg_read_binary_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>, arg4: Input<t.bool>): Output<t.bytea, "pg_read_binary_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.bytea, "pg_read_binary_file">
}>("pg_read_binary_file")

export const pg_read_file = defineFunction<"pg_read_file", {
  (arg:: Input<t.text>): Output<t.text, "pg_read_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.text, "pg_read_file">
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>, arg4: Input<t.bool>): Output<t.text, "pg_read_file">
}>("pg_read_file")

export const pg_read_file_old = defineFunction<"pg_read_file_old", {
  (arg1: Input<t.text>, arg2: Input<t.int8>, arg3: Input<t.int8>): Output<t.text, "pg_read_file_old">
}>("pg_read_file_old")

export const pg_reload_conf = defineFunction<"pg_reload_conf", {
  (): Output<t.bool, "pg_reload_conf">
}>("pg_reload_conf")

export const pg_replication_origin_create = defineFunction<"pg_replication_origin_create", {
  (arg:: Input<t.text>): Output<t.oid, "pg_replication_origin_create">
}>("pg_replication_origin_create")

export const pg_replication_origin_oid = defineFunction<"pg_replication_origin_oid", {
  (arg:: Input<t.text>): Output<t.oid, "pg_replication_origin_oid">
}>("pg_replication_origin_oid")

export const pg_replication_origin_session_is_setup = defineFunction<"pg_replication_origin_session_is_setup", {
  (): Output<t.bool, "pg_replication_origin_session_is_setup">
}>("pg_replication_origin_session_is_setup")

export const pg_rotate_logfile = defineFunction<"pg_rotate_logfile", {
  (): Output<t.bool, "pg_rotate_logfile">
}>("pg_rotate_logfile")

export const pg_rotate_logfile_old = defineFunction<"pg_rotate_logfile_old", {
  (): Output<t.bool, "pg_rotate_logfile_old">
}>("pg_rotate_logfile_old")

export const pg_size_bytes = defineFunction<"pg_size_bytes", {
  (arg:: Input<t.text>): Output<t.int8, "pg_size_bytes">
}>("pg_size_bytes")

export const pg_size_pretty = defineFunction<"pg_size_pretty", {
  (arg:: Input<t.int8>): Output<t.text, "pg_size_pretty">
  (arg:: Input<t.numeric>): Output<t.text, "pg_size_pretty">
}>("pg_size_pretty")

export const pg_stat_get_analyze_count = defineFunction<"pg_stat_get_analyze_count", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_analyze_count">
}>("pg_stat_get_analyze_count")

export const pg_stat_get_autoanalyze_count = defineFunction<"pg_stat_get_autoanalyze_count", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_autoanalyze_count">
}>("pg_stat_get_autoanalyze_count")

export const pg_stat_get_autovacuum_count = defineFunction<"pg_stat_get_autovacuum_count", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_autovacuum_count">
}>("pg_stat_get_autovacuum_count")

export const pg_stat_get_backend_activity = defineFunction<"pg_stat_get_backend_activity", {
  (arg:: Input<t.int4>): Output<t.text, "pg_stat_get_backend_activity">
}>("pg_stat_get_backend_activity")

export const pg_stat_get_backend_activity_start = defineFunction<"pg_stat_get_backend_activity_start", {
  (arg:: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_activity_start">
}>("pg_stat_get_backend_activity_start")

export const pg_stat_get_backend_client_addr = defineFunction<"pg_stat_get_backend_client_addr", {
  (arg:: Input<t.int4>): Output<t.inet, "pg_stat_get_backend_client_addr">
}>("pg_stat_get_backend_client_addr")

export const pg_stat_get_backend_client_port = defineFunction<"pg_stat_get_backend_client_port", {
  (arg:: Input<t.int4>): Output<t.int4, "pg_stat_get_backend_client_port">
}>("pg_stat_get_backend_client_port")

export const pg_stat_get_backend_dbid = defineFunction<"pg_stat_get_backend_dbid", {
  (arg:: Input<t.int4>): Output<t.oid, "pg_stat_get_backend_dbid">
}>("pg_stat_get_backend_dbid")

export const pg_stat_get_backend_idset = defineFunction<"pg_stat_get_backend_idset", {
  (): Output<t.int4, "pg_stat_get_backend_idset">
}>("pg_stat_get_backend_idset")

export const pg_stat_get_backend_pid = defineFunction<"pg_stat_get_backend_pid", {
  (arg:: Input<t.int4>): Output<t.int4, "pg_stat_get_backend_pid">
}>("pg_stat_get_backend_pid")

export const pg_stat_get_backend_start = defineFunction<"pg_stat_get_backend_start", {
  (arg:: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_start">
}>("pg_stat_get_backend_start")

export const pg_stat_get_backend_userid = defineFunction<"pg_stat_get_backend_userid", {
  (arg:: Input<t.int4>): Output<t.oid, "pg_stat_get_backend_userid">
}>("pg_stat_get_backend_userid")

export const pg_stat_get_backend_wait_event = defineFunction<"pg_stat_get_backend_wait_event", {
  (arg:: Input<t.int4>): Output<t.text, "pg_stat_get_backend_wait_event">
}>("pg_stat_get_backend_wait_event")

export const pg_stat_get_backend_wait_event_type = defineFunction<"pg_stat_get_backend_wait_event_type", {
  (arg:: Input<t.int4>): Output<t.text, "pg_stat_get_backend_wait_event_type">
}>("pg_stat_get_backend_wait_event_type")

export const pg_stat_get_backend_xact_start = defineFunction<"pg_stat_get_backend_xact_start", {
  (arg:: Input<t.int4>): Output<t.timestamptz, "pg_stat_get_backend_xact_start">
}>("pg_stat_get_backend_xact_start")

export const pg_stat_get_bgwriter_buf_written_checkpoints = defineFunction<"pg_stat_get_bgwriter_buf_written_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_buf_written_checkpoints">
}>("pg_stat_get_bgwriter_buf_written_checkpoints")

export const pg_stat_get_bgwriter_buf_written_clean = defineFunction<"pg_stat_get_bgwriter_buf_written_clean", {
  (): Output<t.int8, "pg_stat_get_bgwriter_buf_written_clean">
}>("pg_stat_get_bgwriter_buf_written_clean")

export const pg_stat_get_bgwriter_maxwritten_clean = defineFunction<"pg_stat_get_bgwriter_maxwritten_clean", {
  (): Output<t.int8, "pg_stat_get_bgwriter_maxwritten_clean">
}>("pg_stat_get_bgwriter_maxwritten_clean")

export const pg_stat_get_bgwriter_requested_checkpoints = defineFunction<"pg_stat_get_bgwriter_requested_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_requested_checkpoints">
}>("pg_stat_get_bgwriter_requested_checkpoints")

export const pg_stat_get_bgwriter_stat_reset_time = defineFunction<"pg_stat_get_bgwriter_stat_reset_time", {
  (): Output<t.timestamptz, "pg_stat_get_bgwriter_stat_reset_time">
}>("pg_stat_get_bgwriter_stat_reset_time")

export const pg_stat_get_bgwriter_timed_checkpoints = defineFunction<"pg_stat_get_bgwriter_timed_checkpoints", {
  (): Output<t.int8, "pg_stat_get_bgwriter_timed_checkpoints">
}>("pg_stat_get_bgwriter_timed_checkpoints")

export const pg_stat_get_blocks_fetched = defineFunction<"pg_stat_get_blocks_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_blocks_fetched">
}>("pg_stat_get_blocks_fetched")

export const pg_stat_get_blocks_hit = defineFunction<"pg_stat_get_blocks_hit", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_blocks_hit">
}>("pg_stat_get_blocks_hit")

export const pg_stat_get_buf_alloc = defineFunction<"pg_stat_get_buf_alloc", {
  (): Output<t.int8, "pg_stat_get_buf_alloc">
}>("pg_stat_get_buf_alloc")

export const pg_stat_get_buf_fsync_backend = defineFunction<"pg_stat_get_buf_fsync_backend", {
  (): Output<t.int8, "pg_stat_get_buf_fsync_backend">
}>("pg_stat_get_buf_fsync_backend")

export const pg_stat_get_buf_written_backend = defineFunction<"pg_stat_get_buf_written_backend", {
  (): Output<t.int8, "pg_stat_get_buf_written_backend">
}>("pg_stat_get_buf_written_backend")

export const pg_stat_get_checkpoint_sync_time = defineFunction<"pg_stat_get_checkpoint_sync_time", {
  (): Output<t.float8, "pg_stat_get_checkpoint_sync_time">
}>("pg_stat_get_checkpoint_sync_time")

export const pg_stat_get_checkpoint_write_time = defineFunction<"pg_stat_get_checkpoint_write_time", {
  (): Output<t.float8, "pg_stat_get_checkpoint_write_time">
}>("pg_stat_get_checkpoint_write_time")

export const pg_stat_get_db_active_time = defineFunction<"pg_stat_get_db_active_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_db_active_time">
}>("pg_stat_get_db_active_time")

export const pg_stat_get_db_blk_read_time = defineFunction<"pg_stat_get_db_blk_read_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_db_blk_read_time">
}>("pg_stat_get_db_blk_read_time")

export const pg_stat_get_db_blk_write_time = defineFunction<"pg_stat_get_db_blk_write_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_db_blk_write_time">
}>("pg_stat_get_db_blk_write_time")

export const pg_stat_get_db_blocks_fetched = defineFunction<"pg_stat_get_db_blocks_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_blocks_fetched">
}>("pg_stat_get_db_blocks_fetched")

export const pg_stat_get_db_blocks_hit = defineFunction<"pg_stat_get_db_blocks_hit", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_blocks_hit">
}>("pg_stat_get_db_blocks_hit")

export const pg_stat_get_db_checksum_failures = defineFunction<"pg_stat_get_db_checksum_failures", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_checksum_failures">
}>("pg_stat_get_db_checksum_failures")

export const pg_stat_get_db_checksum_last_failure = defineFunction<"pg_stat_get_db_checksum_last_failure", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_db_checksum_last_failure">
}>("pg_stat_get_db_checksum_last_failure")

export const pg_stat_get_db_conflict_all = defineFunction<"pg_stat_get_db_conflict_all", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_all">
}>("pg_stat_get_db_conflict_all")

export const pg_stat_get_db_conflict_bufferpin = defineFunction<"pg_stat_get_db_conflict_bufferpin", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_bufferpin">
}>("pg_stat_get_db_conflict_bufferpin")

export const pg_stat_get_db_conflict_lock = defineFunction<"pg_stat_get_db_conflict_lock", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_lock">
}>("pg_stat_get_db_conflict_lock")

export const pg_stat_get_db_conflict_snapshot = defineFunction<"pg_stat_get_db_conflict_snapshot", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_snapshot">
}>("pg_stat_get_db_conflict_snapshot")

export const pg_stat_get_db_conflict_startup_deadlock = defineFunction<"pg_stat_get_db_conflict_startup_deadlock", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_startup_deadlock">
}>("pg_stat_get_db_conflict_startup_deadlock")

export const pg_stat_get_db_conflict_tablespace = defineFunction<"pg_stat_get_db_conflict_tablespace", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_conflict_tablespace">
}>("pg_stat_get_db_conflict_tablespace")

export const pg_stat_get_db_deadlocks = defineFunction<"pg_stat_get_db_deadlocks", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_deadlocks">
}>("pg_stat_get_db_deadlocks")

export const pg_stat_get_db_idle_in_transaction_time = defineFunction<"pg_stat_get_db_idle_in_transaction_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_db_idle_in_transaction_time">
}>("pg_stat_get_db_idle_in_transaction_time")

export const pg_stat_get_db_numbackends = defineFunction<"pg_stat_get_db_numbackends", {
  (arg:: Input<t.oid>): Output<t.int4, "pg_stat_get_db_numbackends">
}>("pg_stat_get_db_numbackends")

export const pg_stat_get_db_session_time = defineFunction<"pg_stat_get_db_session_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_db_session_time">
}>("pg_stat_get_db_session_time")

export const pg_stat_get_db_sessions = defineFunction<"pg_stat_get_db_sessions", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions">
}>("pg_stat_get_db_sessions")

export const pg_stat_get_db_sessions_abandoned = defineFunction<"pg_stat_get_db_sessions_abandoned", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_abandoned">
}>("pg_stat_get_db_sessions_abandoned")

export const pg_stat_get_db_sessions_fatal = defineFunction<"pg_stat_get_db_sessions_fatal", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_fatal">
}>("pg_stat_get_db_sessions_fatal")

export const pg_stat_get_db_sessions_killed = defineFunction<"pg_stat_get_db_sessions_killed", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_sessions_killed">
}>("pg_stat_get_db_sessions_killed")

export const pg_stat_get_db_stat_reset_time = defineFunction<"pg_stat_get_db_stat_reset_time", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_db_stat_reset_time">
}>("pg_stat_get_db_stat_reset_time")

export const pg_stat_get_db_temp_bytes = defineFunction<"pg_stat_get_db_temp_bytes", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_temp_bytes">
}>("pg_stat_get_db_temp_bytes")

export const pg_stat_get_db_temp_files = defineFunction<"pg_stat_get_db_temp_files", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_temp_files">
}>("pg_stat_get_db_temp_files")

export const pg_stat_get_db_tuples_deleted = defineFunction<"pg_stat_get_db_tuples_deleted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_deleted">
}>("pg_stat_get_db_tuples_deleted")

export const pg_stat_get_db_tuples_fetched = defineFunction<"pg_stat_get_db_tuples_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_fetched">
}>("pg_stat_get_db_tuples_fetched")

export const pg_stat_get_db_tuples_inserted = defineFunction<"pg_stat_get_db_tuples_inserted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_inserted">
}>("pg_stat_get_db_tuples_inserted")

export const pg_stat_get_db_tuples_returned = defineFunction<"pg_stat_get_db_tuples_returned", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_returned">
}>("pg_stat_get_db_tuples_returned")

export const pg_stat_get_db_tuples_updated = defineFunction<"pg_stat_get_db_tuples_updated", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_tuples_updated">
}>("pg_stat_get_db_tuples_updated")

export const pg_stat_get_db_xact_commit = defineFunction<"pg_stat_get_db_xact_commit", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_xact_commit">
}>("pg_stat_get_db_xact_commit")

export const pg_stat_get_db_xact_rollback = defineFunction<"pg_stat_get_db_xact_rollback", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_db_xact_rollback">
}>("pg_stat_get_db_xact_rollback")

export const pg_stat_get_dead_tuples = defineFunction<"pg_stat_get_dead_tuples", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_dead_tuples">
}>("pg_stat_get_dead_tuples")

export const pg_stat_get_function_calls = defineFunction<"pg_stat_get_function_calls", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_function_calls">
}>("pg_stat_get_function_calls")

export const pg_stat_get_function_self_time = defineFunction<"pg_stat_get_function_self_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_function_self_time">
}>("pg_stat_get_function_self_time")

export const pg_stat_get_function_total_time = defineFunction<"pg_stat_get_function_total_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_function_total_time">
}>("pg_stat_get_function_total_time")

export const pg_stat_get_ins_since_vacuum = defineFunction<"pg_stat_get_ins_since_vacuum", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_ins_since_vacuum">
}>("pg_stat_get_ins_since_vacuum")

export const pg_stat_get_last_analyze_time = defineFunction<"pg_stat_get_last_analyze_time", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_analyze_time">
}>("pg_stat_get_last_analyze_time")

export const pg_stat_get_last_autoanalyze_time = defineFunction<"pg_stat_get_last_autoanalyze_time", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_autoanalyze_time">
}>("pg_stat_get_last_autoanalyze_time")

export const pg_stat_get_last_autovacuum_time = defineFunction<"pg_stat_get_last_autovacuum_time", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_autovacuum_time">
}>("pg_stat_get_last_autovacuum_time")

export const pg_stat_get_last_vacuum_time = defineFunction<"pg_stat_get_last_vacuum_time", {
  (arg:: Input<t.oid>): Output<t.timestamptz, "pg_stat_get_last_vacuum_time">
}>("pg_stat_get_last_vacuum_time")

export const pg_stat_get_live_tuples = defineFunction<"pg_stat_get_live_tuples", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_live_tuples">
}>("pg_stat_get_live_tuples")

export const pg_stat_get_mod_since_analyze = defineFunction<"pg_stat_get_mod_since_analyze", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_mod_since_analyze">
}>("pg_stat_get_mod_since_analyze")

export const pg_stat_get_numscans = defineFunction<"pg_stat_get_numscans", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_numscans">
}>("pg_stat_get_numscans")

export const pg_stat_get_snapshot_timestamp = defineFunction<"pg_stat_get_snapshot_timestamp", {
  (): Output<t.timestamptz, "pg_stat_get_snapshot_timestamp">
}>("pg_stat_get_snapshot_timestamp")

export const pg_stat_get_tuples_deleted = defineFunction<"pg_stat_get_tuples_deleted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_deleted">
}>("pg_stat_get_tuples_deleted")

export const pg_stat_get_tuples_fetched = defineFunction<"pg_stat_get_tuples_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_fetched">
}>("pg_stat_get_tuples_fetched")

export const pg_stat_get_tuples_hot_updated = defineFunction<"pg_stat_get_tuples_hot_updated", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_hot_updated">
}>("pg_stat_get_tuples_hot_updated")

export const pg_stat_get_tuples_inserted = defineFunction<"pg_stat_get_tuples_inserted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_inserted">
}>("pg_stat_get_tuples_inserted")

export const pg_stat_get_tuples_returned = defineFunction<"pg_stat_get_tuples_returned", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_returned">
}>("pg_stat_get_tuples_returned")

export const pg_stat_get_tuples_updated = defineFunction<"pg_stat_get_tuples_updated", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_tuples_updated">
}>("pg_stat_get_tuples_updated")

export const pg_stat_get_vacuum_count = defineFunction<"pg_stat_get_vacuum_count", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_vacuum_count">
}>("pg_stat_get_vacuum_count")

export const pg_stat_get_xact_blocks_fetched = defineFunction<"pg_stat_get_xact_blocks_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_blocks_fetched">
}>("pg_stat_get_xact_blocks_fetched")

export const pg_stat_get_xact_blocks_hit = defineFunction<"pg_stat_get_xact_blocks_hit", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_blocks_hit">
}>("pg_stat_get_xact_blocks_hit")

export const pg_stat_get_xact_function_calls = defineFunction<"pg_stat_get_xact_function_calls", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_function_calls">
}>("pg_stat_get_xact_function_calls")

export const pg_stat_get_xact_function_self_time = defineFunction<"pg_stat_get_xact_function_self_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_xact_function_self_time">
}>("pg_stat_get_xact_function_self_time")

export const pg_stat_get_xact_function_total_time = defineFunction<"pg_stat_get_xact_function_total_time", {
  (arg:: Input<t.oid>): Output<t.float8, "pg_stat_get_xact_function_total_time">
}>("pg_stat_get_xact_function_total_time")

export const pg_stat_get_xact_numscans = defineFunction<"pg_stat_get_xact_numscans", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_numscans">
}>("pg_stat_get_xact_numscans")

export const pg_stat_get_xact_tuples_deleted = defineFunction<"pg_stat_get_xact_tuples_deleted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_deleted">
}>("pg_stat_get_xact_tuples_deleted")

export const pg_stat_get_xact_tuples_fetched = defineFunction<"pg_stat_get_xact_tuples_fetched", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_fetched">
}>("pg_stat_get_xact_tuples_fetched")

export const pg_stat_get_xact_tuples_hot_updated = defineFunction<"pg_stat_get_xact_tuples_hot_updated", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_hot_updated">
}>("pg_stat_get_xact_tuples_hot_updated")

export const pg_stat_get_xact_tuples_inserted = defineFunction<"pg_stat_get_xact_tuples_inserted", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_inserted">
}>("pg_stat_get_xact_tuples_inserted")

export const pg_stat_get_xact_tuples_returned = defineFunction<"pg_stat_get_xact_tuples_returned", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_returned">
}>("pg_stat_get_xact_tuples_returned")

export const pg_stat_get_xact_tuples_updated = defineFunction<"pg_stat_get_xact_tuples_updated", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_stat_get_xact_tuples_updated">
}>("pg_stat_get_xact_tuples_updated")

export const pg_statistics_obj_is_visible = defineFunction<"pg_statistics_obj_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_statistics_obj_is_visible">
}>("pg_statistics_obj_is_visible")

export const pg_table_is_visible = defineFunction<"pg_table_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_table_is_visible">
}>("pg_table_is_visible")

export const pg_tablespace_databases = defineFunction<"pg_tablespace_databases", {
  (arg:: Input<t.oid>): Output<t.oid, "pg_tablespace_databases">
}>("pg_tablespace_databases")

export const pg_tablespace_location = defineFunction<"pg_tablespace_location", {
  (arg:: Input<t.oid>): Output<t.text, "pg_tablespace_location">
}>("pg_tablespace_location")

export const pg_tablespace_size = defineFunction<"pg_tablespace_size", {
  (arg:: Input<t.oid>): Output<t.int8, "pg_tablespace_size">
  (arg:: Input<t.name>): Output<t.int8, "pg_tablespace_size">
}>("pg_tablespace_size")

export const pg_terminate_backend = defineFunction<"pg_terminate_backend", {
  (pid: Input<t.int4>, timeout?: Input<t.int8>): Output<t.bool, "pg_terminate_backend">
}>("pg_terminate_backend")

export const pg_trigger_depth = defineFunction<"pg_trigger_depth", {
  (): Output<t.int4, "pg_trigger_depth">
}>("pg_trigger_depth")

export const pg_try_advisory_lock = defineFunction<"pg_try_advisory_lock", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_try_advisory_lock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_lock">
}>("pg_try_advisory_lock")

export const pg_try_advisory_lock_shared = defineFunction<"pg_try_advisory_lock_shared", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_try_advisory_lock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_lock_shared">
}>("pg_try_advisory_lock_shared")

export const pg_try_advisory_xact_lock = defineFunction<"pg_try_advisory_xact_lock", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_try_advisory_xact_lock">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_xact_lock">
}>("pg_try_advisory_xact_lock")

export const pg_try_advisory_xact_lock_shared = defineFunction<"pg_try_advisory_xact_lock_shared", {
  (arg:: Input<t.int8>): Output<t.bool, "pg_try_advisory_xact_lock_shared">
  (arg1: Input<t.int4>, arg2: Input<t.int4>): Output<t.bool, "pg_try_advisory_xact_lock_shared">
}>("pg_try_advisory_xact_lock_shared")

export const pg_ts_config_is_visible = defineFunction<"pg_ts_config_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_ts_config_is_visible">
}>("pg_ts_config_is_visible")

export const pg_ts_dict_is_visible = defineFunction<"pg_ts_dict_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_ts_dict_is_visible">
}>("pg_ts_dict_is_visible")

export const pg_ts_parser_is_visible = defineFunction<"pg_ts_parser_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_ts_parser_is_visible">
}>("pg_ts_parser_is_visible")

export const pg_ts_template_is_visible = defineFunction<"pg_ts_template_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_ts_template_is_visible">
}>("pg_ts_template_is_visible")

export const pg_type_is_visible = defineFunction<"pg_type_is_visible", {
  (arg:: Input<t.oid>): Output<t.bool, "pg_type_is_visible">
}>("pg_type_is_visible")

export const phraseto_tsquery = defineFunction<"phraseto_tsquery", {
  (arg:: Input<t.text>): Output<t.tsquery, "phraseto_tsquery">
}>("phraseto_tsquery")

export const pi = defineFunction<"pi", {
  (): Output<t.float8, "pi">
}>("pi")

export const plainto_tsquery = defineFunction<"plainto_tsquery", {
  (arg:: Input<t.text>): Output<t.tsquery, "plainto_tsquery">
}>("plainto_tsquery")

export const point = defineFunction<"point", {
  (arg:: Input<t.circle>): Output<t.point, "point">
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.point, "point">
  (arg:: Input<t.lseg>): Output<t.point, "point">
  (arg:: Input<t.path>): Output<t.point, "point">
  (arg:: Input<t.box>): Output<t.point, "point">
  (arg:: Input<t.polygon>): Output<t.point, "point">
}>("point")

export const point_above = defineFunction<"point_above", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_above">
}>("point_above")

export const point_add = defineFunction<"point_add", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_add">
}>("point_add")

export const point_below = defineFunction<"point_below", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_below">
}>("point_below")

export const point_distance = defineFunction<"point_distance", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.float8, "point_distance">
}>("point_distance")

export const point_div = defineFunction<"point_div", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_div">
}>("point_div")

export const point_eq = defineFunction<"point_eq", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_eq">
}>("point_eq")

export const point_horiz = defineFunction<"point_horiz", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_horiz">
}>("point_horiz")

export const point_left = defineFunction<"point_left", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_left">
}>("point_left")

export const point_mul = defineFunction<"point_mul", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_mul">
}>("point_mul")

export const point_ne = defineFunction<"point_ne", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_ne">
}>("point_ne")

export const point_right = defineFunction<"point_right", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_right">
}>("point_right")

export const point_send = defineFunction<"point_send", {
  (arg:: Input<t.point>): Output<t.bytea, "point_send">
}>("point_send")

export const point_sub = defineFunction<"point_sub", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.point, "point_sub">
}>("point_sub")

export const point_vert = defineFunction<"point_vert", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.bool, "point_vert">
}>("point_vert")

export const poly_above = defineFunction<"poly_above", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_above">
}>("poly_above")

export const poly_below = defineFunction<"poly_below", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_below">
}>("poly_below")

export const poly_center = defineFunction<"poly_center", {
  (arg:: Input<t.polygon>): Output<t.point, "poly_center">
}>("poly_center")

export const poly_contain = defineFunction<"poly_contain", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_contain">
}>("poly_contain")

export const poly_contain_pt = defineFunction<"poly_contain_pt", {
  (arg1: Input<t.polygon>, arg2: Input<t.point>): Output<t.bool, "poly_contain_pt">
}>("poly_contain_pt")

export const poly_contained = defineFunction<"poly_contained", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_contained">
}>("poly_contained")

export const poly_distance = defineFunction<"poly_distance", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.float8, "poly_distance">
}>("poly_distance")

export const poly_left = defineFunction<"poly_left", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_left">
}>("poly_left")

export const poly_npoints = defineFunction<"poly_npoints", {
  (arg:: Input<t.polygon>): Output<t.int4, "poly_npoints">
}>("poly_npoints")

export const poly_overabove = defineFunction<"poly_overabove", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overabove">
}>("poly_overabove")

export const poly_overbelow = defineFunction<"poly_overbelow", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overbelow">
}>("poly_overbelow")

export const poly_overlap = defineFunction<"poly_overlap", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overlap">
}>("poly_overlap")

export const poly_overleft = defineFunction<"poly_overleft", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overleft">
}>("poly_overleft")

export const poly_overright = defineFunction<"poly_overright", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_overright">
}>("poly_overright")

export const poly_right = defineFunction<"poly_right", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_right">
}>("poly_right")

export const poly_same = defineFunction<"poly_same", {
  (arg1: Input<t.polygon>, arg2: Input<t.polygon>): Output<t.bool, "poly_same">
}>("poly_same")

export const poly_send = defineFunction<"poly_send", {
  (arg:: Input<t.polygon>): Output<t.bytea, "poly_send">
}>("poly_send")

export const polygon = defineFunction<"polygon", {
  (arg:: Input<t.box>): Output<t.polygon, "polygon">
  (arg:: Input<t.path>): Output<t.polygon, "polygon">
  (arg1: Input<t.int4>, arg2: Input<t.circle>): Output<t.polygon, "polygon">
  (arg:: Input<t.circle>): Output<t.polygon, "polygon">
}>("polygon")

export const popen = defineFunction<"popen", {
  (arg:: Input<t.path>): Output<t.path, "popen">
}>("popen")

export const position = defineFunction<"position", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "position">
  (arg1: Input<t.bit>, arg2: Input<t.bit>): Output<t.int4, "position">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.int4, "position">
}>("position")

export const pow = defineFunction<"pow", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "pow">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "pow">
}>("pow")

export const power = defineFunction<"power", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>): Output<t.float8, "power">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>): Output<t.numeric, "power">
}>("power")

export const pt_contained_circle = defineFunction<"pt_contained_circle", {
  (arg1: Input<t.point>, arg2: Input<t.circle>): Output<t.bool, "pt_contained_circle">
}>("pt_contained_circle")

export const pt_contained_poly = defineFunction<"pt_contained_poly", {
  (arg1: Input<t.point>, arg2: Input<t.polygon>): Output<t.bool, "pt_contained_poly">
}>("pt_contained_poly")

export const query_to_xml = defineFunction<"query_to_xml", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xml">
}>("query_to_xml")

export const query_to_xml_and_xmlschema = defineFunction<"query_to_xml_and_xmlschema", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xml_and_xmlschema">
}>("query_to_xml_and_xmlschema")

export const query_to_xmlschema = defineFunction<"query_to_xmlschema", {
  (query: Input<t.text>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "query_to_xmlschema">
}>("query_to_xmlschema")

export const querytree = defineFunction<"querytree", {
  (arg:: Input<t.tsquery>): Output<t.text, "querytree">
}>("querytree")

export const quote_ident = defineFunction<"quote_ident", {
  (arg:: Input<t.text>): Output<t.text, "quote_ident">
}>("quote_ident")

export const quote_literal = defineFunction<"quote_literal", {
  (arg:: Input<t.text>): Output<t.text, "quote_literal">
}>("quote_literal")

export const quote_nullable = defineFunction<"quote_nullable", {
  (arg:: Input<t.text>): Output<t.text, "quote_nullable">
}>("quote_nullable")

export const radians = defineFunction<"radians", {
  (arg:: Input<t.float8>): Output<t.float8, "radians">
}>("radians")

export const radius = defineFunction<"radius", {
  (arg:: Input<t.circle>): Output<t.float8, "radius">
}>("radius")

export const random = defineFunction<"random", {
  (): Output<t.float8, "random">
}>("random")

export const rank = defineFunction<"rank", {
  (): Output<t.int8, "rank">
}>("rank")

export const regexp_replace = defineFunction<"regexp_replace", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "regexp_replace">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>, arg4: Input<t.text>): Output<t.text, "regexp_replace">
}>("regexp_replace")

export const regexp_split_to_table = defineFunction<"regexp_split_to_table", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "regexp_split_to_table">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "regexp_split_to_table">
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

export const repeat = defineFunction<"repeat", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "repeat">
}>("repeat")

export const replace = defineFunction<"replace", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "replace">
}>("replace")

export const reverse = defineFunction<"reverse", {
  (arg:: Input<t.text>): Output<t.text, "reverse">
}>("reverse")

export const right = defineFunction<"right", {
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "right">
}>("right")

export const round = defineFunction<"round", {
  (arg:: Input<t.float8>): Output<t.float8, "round">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "round">
  (arg:: Input<t.numeric>): Output<t.numeric, "round">
}>("round")

export const row_number = defineFunction<"row_number", {
  (): Output<t.int8, "row_number">
}>("row_number")

export const row_security_active = defineFunction<"row_security_active", {
  (arg:: Input<t.oid>): Output<t.bool, "row_security_active">
  (arg:: Input<t.text>): Output<t.bool, "row_security_active">
}>("row_security_active")

export const rpad = defineFunction<"rpad", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.text>): Output<t.text, "rpad">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "rpad">
}>("rpad")

export const rtrim = defineFunction<"rtrim", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "rtrim">
  (arg:: Input<t.text>): Output<t.text, "rtrim">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "rtrim">
}>("rtrim")

export const scale = defineFunction<"scale", {
  (arg:: Input<t.numeric>): Output<t.int4, "scale">
}>("scale")

export const schema_to_xml = defineFunction<"schema_to_xml", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xml">
}>("schema_to_xml")

export const schema_to_xml_and_xmlschema = defineFunction<"schema_to_xml_and_xmlschema", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xml_and_xmlschema">
}>("schema_to_xml_and_xmlschema")

export const schema_to_xmlschema = defineFunction<"schema_to_xmlschema", {
  (schema: Input<t.name>, nulls: Input<t.bool>, tableforest: Input<t.bool>, targetns: Input<t.text>): Output<t.xml, "schema_to_xmlschema">
}>("schema_to_xmlschema")

export const session_user = defineFunction<"session_user", {
  (): Output<t.name, "session_user">
}>("session_user")

export const set_bit = defineFunction<"set_bit", {
  (arg1: Input<t.bytea>, arg2: Input<t.int8>, arg3: Input<t.int4>): Output<t.bytea, "set_bit">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bit, "set_bit">
}>("set_bit")

export const set_byte = defineFunction<"set_byte", {
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "set_byte">
}>("set_byte")

export const set_config = defineFunction<"set_config", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.bool>): Output<t.text, "set_config">
}>("set_config")

export const set_masklen = defineFunction<"set_masklen", {
  (arg1: Input<t.inet>, arg2: Input<t.int4>): Output<t.inet, "set_masklen">
  (arg1: Input<t.cidr>, arg2: Input<t.int4>): Output<t.cidr, "set_masklen">
}>("set_masklen")

export const setweight = defineFunction<"setweight", {
  (arg1: Input<t.tsvector>, arg2: Input<t.char>): Output<t.tsvector, "setweight">
}>("setweight")

export const sha224 = defineFunction<"sha224", {
  (arg:: Input<t.bytea>): Output<t.bytea, "sha224">
}>("sha224")

export const sha256 = defineFunction<"sha256", {
  (arg:: Input<t.bytea>): Output<t.bytea, "sha256">
}>("sha256")

export const sha384 = defineFunction<"sha384", {
  (arg:: Input<t.bytea>): Output<t.bytea, "sha384">
}>("sha384")

export const sha512 = defineFunction<"sha512", {
  (arg:: Input<t.bytea>): Output<t.bytea, "sha512">
}>("sha512")

export const shobj_description = defineFunction<"shobj_description", {
  (arg1: Input<t.oid>, arg2: Input<t.name>): Output<t.text, "shobj_description">
}>("shobj_description")

export const sign = defineFunction<"sign", {
  (arg:: Input<t.float8>): Output<t.float8, "sign">
  (arg:: Input<t.numeric>): Output<t.numeric, "sign">
}>("sign")

export const similar_escape = defineFunction<"similar_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "similar_escape">
}>("similar_escape")

export const similar_to_escape = defineFunction<"similar_to_escape", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "similar_to_escape">
  (arg:: Input<t.text>): Output<t.text, "similar_to_escape">
}>("similar_to_escape")

export const sin = defineFunction<"sin", {
  (arg:: Input<t.float8>): Output<t.float8, "sin">
}>("sin")

export const sind = defineFunction<"sind", {
  (arg:: Input<t.float8>): Output<t.float8, "sind">
}>("sind")

export const sinh = defineFunction<"sinh", {
  (arg:: Input<t.float8>): Output<t.float8, "sinh">
}>("sinh")

export const slope = defineFunction<"slope", {
  (arg1: Input<t.point>, arg2: Input<t.point>): Output<t.float8, "slope">
}>("slope")

export const spg_poly_quad_compress = defineFunction<"spg_poly_quad_compress", {
  (arg:: Input<t.polygon>): Output<t.box, "spg_poly_quad_compress">
}>("spg_poly_quad_compress")

export const split_part = defineFunction<"split_part", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.int4>): Output<t.text, "split_part">
}>("split_part")

export const sqrt = defineFunction<"sqrt", {
  (arg:: Input<t.float8>): Output<t.float8, "sqrt">
  (arg:: Input<t.numeric>): Output<t.numeric, "sqrt">
}>("sqrt")

export const starts_with = defineFunction<"starts_with", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "starts_with">
}>("starts_with")

export const statement_timestamp = defineFunction<"statement_timestamp", {
  (): Output<t.timestamptz, "statement_timestamp">
}>("statement_timestamp")

export const stddev = defineFunction<"stddev", {
  (arg:: Input<t.int8>): Output<t.numeric, "stddev">
  (arg:: Input<t.int4>): Output<t.numeric, "stddev">
  (arg:: Input<t.int2>): Output<t.numeric, "stddev">
  (arg:: Input<t.float4>): Output<t.float8, "stddev">
  (arg:: Input<t.float8>): Output<t.float8, "stddev">
  (arg:: Input<t.numeric>): Output<t.numeric, "stddev">
}>("stddev")

export const stddev_pop = defineFunction<"stddev_pop", {
  (arg:: Input<t.int8>): Output<t.numeric, "stddev_pop">
  (arg:: Input<t.int4>): Output<t.numeric, "stddev_pop">
  (arg:: Input<t.int2>): Output<t.numeric, "stddev_pop">
  (arg:: Input<t.float4>): Output<t.float8, "stddev_pop">
  (arg:: Input<t.float8>): Output<t.float8, "stddev_pop">
  (arg:: Input<t.numeric>): Output<t.numeric, "stddev_pop">
}>("stddev_pop")

export const stddev_samp = defineFunction<"stddev_samp", {
  (arg:: Input<t.int8>): Output<t.numeric, "stddev_samp">
  (arg:: Input<t.int4>): Output<t.numeric, "stddev_samp">
  (arg:: Input<t.int2>): Output<t.numeric, "stddev_samp">
  (arg:: Input<t.float4>): Output<t.float8, "stddev_samp">
  (arg:: Input<t.float8>): Output<t.float8, "stddev_samp">
  (arg:: Input<t.numeric>): Output<t.numeric, "stddev_samp">
}>("stddev_samp")

export const string_agg = defineFunction<"string_agg", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "string_agg">
  (arg1: Input<t.bytea>, arg2: Input<t.bytea>): Output<t.bytea, "string_agg">
}>("string_agg")

export const string_to_table = defineFunction<"string_to_table", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "string_to_table">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "string_to_table">
}>("string_to_table")

export const strip = defineFunction<"strip", {
  (arg:: Input<t.tsvector>): Output<t.tsvector, "strip">
}>("strip")

export const strpos = defineFunction<"strpos", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.int4, "strpos">
}>("strpos")

export const substr = defineFunction<"substr", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.text, "substr">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "substr">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "substr">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.bytea, "substr">
}>("substr")

export const substring = defineFunction<"substring", {
  (arg1: Input<t.text>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.text, "substring">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "substring">
  (arg1: Input<t.bit>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bit, "substring">
  (arg1: Input<t.bit>, arg2: Input<t.int4>): Output<t.bit, "substring">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>, arg3: Input<t.int4>): Output<t.bytea, "substring">
  (arg1: Input<t.bytea>, arg2: Input<t.int4>): Output<t.bytea, "substring">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "substring">
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "substring">
}>("substring")

export const sum = defineFunction<"sum", {
  (arg:: Input<t.int8>): Output<t.numeric, "sum">
  (arg:: Input<t.int4>): Output<t.int8, "sum">
  (arg:: Input<t.int2>): Output<t.int8, "sum">
  (arg:: Input<t.float4>): Output<t.float4, "sum">
  (arg:: Input<t.float8>): Output<t.float8, "sum">
  (arg:: Input<t.money>): Output<t.money, "sum">
  (arg:: Input<t.interval>): Output<t.interval, "sum">
  (arg:: Input<t.numeric>): Output<t.numeric, "sum">
}>("sum")

export const tan = defineFunction<"tan", {
  (arg:: Input<t.float8>): Output<t.float8, "tan">
}>("tan")

export const tand = defineFunction<"tand", {
  (arg:: Input<t.float8>): Output<t.float8, "tand">
}>("tand")

export const tanh = defineFunction<"tanh", {
  (arg:: Input<t.float8>): Output<t.float8, "tanh">
}>("tanh")

export const text = defineFunction<"text", {
  (arg:: Input<t.bpchar>): Output<t.text, "text">
  (arg:: Input<t.name>): Output<t.text, "text">
  (arg:: Input<t.char>): Output<t.text, "text">
  (arg:: Input<t.inet>): Output<t.text, "text">
  (arg:: Input<t.bool>): Output<t.text, "text">
  (arg:: Input<t.xml>): Output<t.text, "text">
}>("text")

export const text_ge = defineFunction<"text_ge", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_ge">
}>("text_ge")

export const text_gt = defineFunction<"text_gt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_gt">
}>("text_gt")

export const text_larger = defineFunction<"text_larger", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "text_larger">
}>("text_larger")

export const text_le = defineFunction<"text_le", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_le">
}>("text_le")

export const text_lt = defineFunction<"text_lt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_lt">
}>("text_lt")

export const text_pattern_ge = defineFunction<"text_pattern_ge", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_ge">
}>("text_pattern_ge")

export const text_pattern_gt = defineFunction<"text_pattern_gt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_gt">
}>("text_pattern_gt")

export const text_pattern_le = defineFunction<"text_pattern_le", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_le">
}>("text_pattern_le")

export const text_pattern_lt = defineFunction<"text_pattern_lt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "text_pattern_lt">
}>("text_pattern_lt")

export const text_smaller = defineFunction<"text_smaller", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "text_smaller">
}>("text_smaller")

export const textcat = defineFunction<"textcat", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.text, "textcat">
}>("textcat")

export const texteq = defineFunction<"texteq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texteq">
}>("texteq")

export const texteqname = defineFunction<"texteqname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "texteqname">
}>("texteqname")

export const textgename = defineFunction<"textgename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textgename">
}>("textgename")

export const textgtname = defineFunction<"textgtname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textgtname">
}>("textgtname")

export const texticlike = defineFunction<"texticlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticlike">
}>("texticlike")

export const texticnlike = defineFunction<"texticnlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticnlike">
}>("texticnlike")

export const texticregexeq = defineFunction<"texticregexeq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticregexeq">
}>("texticregexeq")

export const texticregexne = defineFunction<"texticregexne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "texticregexne">
}>("texticregexne")

export const textlen = defineFunction<"textlen", {
  (arg:: Input<t.text>): Output<t.int4, "textlen">
}>("textlen")

export const textlename = defineFunction<"textlename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textlename">
}>("textlename")

export const textlike = defineFunction<"textlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textlike">
}>("textlike")

export const textltname = defineFunction<"textltname", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textltname">
}>("textltname")

export const textne = defineFunction<"textne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textne">
}>("textne")

export const textnename = defineFunction<"textnename", {
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.bool, "textnename">
}>("textnename")

export const textnlike = defineFunction<"textnlike", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textnlike">
}>("textnlike")

export const textregexeq = defineFunction<"textregexeq", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textregexeq">
}>("textregexeq")

export const textregexne = defineFunction<"textregexne", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "textregexne">
}>("textregexne")

export const textsend = defineFunction<"textsend", {
  (arg:: Input<t.text>): Output<t.bytea, "textsend">
}>("textsend")

export const time = defineFunction<"time", {
  (arg:: Input<t.timestamp>): Output<t.time, "time">
  (arg:: Input<t.interval>): Output<t.time, "time">
  (arg1: Input<t.time>, arg2: Input<t.int4>): Output<t.time, "time">
  (arg:: Input<t.timestamptz>): Output<t.time, "time">
  (arg:: Input<t.timetz>): Output<t.time, "time">
}>("time")

export const time_cmp = defineFunction<"time_cmp", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.int4, "time_cmp">
}>("time_cmp")

export const time_eq = defineFunction<"time_eq", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_eq">
}>("time_eq")

export const time_ge = defineFunction<"time_ge", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_ge">
}>("time_ge")

export const time_gt = defineFunction<"time_gt", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_gt">
}>("time_gt")

export const time_hash = defineFunction<"time_hash", {
  (arg:: Input<t.time>): Output<t.int4, "time_hash">
}>("time_hash")

export const time_hash_extended = defineFunction<"time_hash_extended", {
  (arg1: Input<t.time>, arg2: Input<t.int8>): Output<t.int8, "time_hash_extended">
}>("time_hash_extended")

export const time_larger = defineFunction<"time_larger", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.time, "time_larger">
}>("time_larger")

export const time_le = defineFunction<"time_le", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_le">
}>("time_le")

export const time_lt = defineFunction<"time_lt", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_lt">
}>("time_lt")

export const time_mi_interval = defineFunction<"time_mi_interval", {
  (arg1: Input<t.time>, arg2: Input<t.interval>): Output<t.time, "time_mi_interval">
}>("time_mi_interval")

export const time_mi_time = defineFunction<"time_mi_time", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.interval, "time_mi_time">
}>("time_mi_time")

export const time_ne = defineFunction<"time_ne", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.bool, "time_ne">
}>("time_ne")

export const time_pl_interval = defineFunction<"time_pl_interval", {
  (arg1: Input<t.time>, arg2: Input<t.interval>): Output<t.time, "time_pl_interval">
}>("time_pl_interval")

export const time_send = defineFunction<"time_send", {
  (arg:: Input<t.time>): Output<t.bytea, "time_send">
}>("time_send")

export const time_smaller = defineFunction<"time_smaller", {
  (arg1: Input<t.time>, arg2: Input<t.time>): Output<t.time, "time_smaller">
}>("time_smaller")

export const timedate_pl = defineFunction<"timedate_pl", {
  (arg1: Input<t.time>, arg2: Input<t.date>): Output<t.timestamp, "timedate_pl">
}>("timedate_pl")

export const timeofday = defineFunction<"timeofday", {
  (): Output<t.text, "timeofday">
}>("timeofday")

export const timestamp = defineFunction<"timestamp", {
  (arg1: Input<t.timestamp>, arg2: Input<t.int4>): Output<t.timestamp, "timestamp">
  (arg:: Input<t.date>): Output<t.timestamp, "timestamp">
  (arg1: Input<t.date>, arg2: Input<t.time>): Output<t.timestamp, "timestamp">
  (arg:: Input<t.timestamptz>): Output<t.timestamp, "timestamp">
}>("timestamp")

export const timestamp_cmp = defineFunction<"timestamp_cmp", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.int4, "timestamp_cmp">
}>("timestamp_cmp")

export const timestamp_cmp_date = defineFunction<"timestamp_cmp_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.int4, "timestamp_cmp_date">
}>("timestamp_cmp_date")

export const timestamp_cmp_timestamptz = defineFunction<"timestamp_cmp_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.int4, "timestamp_cmp_timestamptz">
}>("timestamp_cmp_timestamptz")

export const timestamp_eq = defineFunction<"timestamp_eq", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_eq">
}>("timestamp_eq")

export const timestamp_eq_date = defineFunction<"timestamp_eq_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_eq_date">
}>("timestamp_eq_date")

export const timestamp_eq_timestamptz = defineFunction<"timestamp_eq_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_eq_timestamptz">
}>("timestamp_eq_timestamptz")

export const timestamp_ge = defineFunction<"timestamp_ge", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_ge">
}>("timestamp_ge")

export const timestamp_ge_date = defineFunction<"timestamp_ge_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_ge_date">
}>("timestamp_ge_date")

export const timestamp_ge_timestamptz = defineFunction<"timestamp_ge_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_ge_timestamptz">
}>("timestamp_ge_timestamptz")

export const timestamp_gt = defineFunction<"timestamp_gt", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_gt">
}>("timestamp_gt")

export const timestamp_gt_date = defineFunction<"timestamp_gt_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_gt_date">
}>("timestamp_gt_date")

export const timestamp_gt_timestamptz = defineFunction<"timestamp_gt_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_gt_timestamptz">
}>("timestamp_gt_timestamptz")

export const timestamp_hash = defineFunction<"timestamp_hash", {
  (arg:: Input<t.timestamp>): Output<t.int4, "timestamp_hash">
}>("timestamp_hash")

export const timestamp_hash_extended = defineFunction<"timestamp_hash_extended", {
  (arg1: Input<t.timestamp>, arg2: Input<t.int8>): Output<t.int8, "timestamp_hash_extended">
}>("timestamp_hash_extended")

export const timestamp_larger = defineFunction<"timestamp_larger", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.timestamp, "timestamp_larger">
}>("timestamp_larger")

export const timestamp_le = defineFunction<"timestamp_le", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_le">
}>("timestamp_le")

export const timestamp_le_date = defineFunction<"timestamp_le_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_le_date">
}>("timestamp_le_date")

export const timestamp_le_timestamptz = defineFunction<"timestamp_le_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_le_timestamptz">
}>("timestamp_le_timestamptz")

export const timestamp_lt = defineFunction<"timestamp_lt", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_lt">
}>("timestamp_lt")

export const timestamp_lt_date = defineFunction<"timestamp_lt_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_lt_date">
}>("timestamp_lt_date")

export const timestamp_lt_timestamptz = defineFunction<"timestamp_lt_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_lt_timestamptz">
}>("timestamp_lt_timestamptz")

export const timestamp_mi = defineFunction<"timestamp_mi", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.interval, "timestamp_mi">
}>("timestamp_mi")

export const timestamp_mi_interval = defineFunction<"timestamp_mi_interval", {
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>): Output<t.timestamp, "timestamp_mi_interval">
}>("timestamp_mi_interval")

export const timestamp_ne = defineFunction<"timestamp_ne", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.bool, "timestamp_ne">
}>("timestamp_ne")

export const timestamp_ne_date = defineFunction<"timestamp_ne_date", {
  (arg1: Input<t.timestamp>, arg2: Input<t.date>): Output<t.bool, "timestamp_ne_date">
}>("timestamp_ne_date")

export const timestamp_ne_timestamptz = defineFunction<"timestamp_ne_timestamptz", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamp_ne_timestamptz">
}>("timestamp_ne_timestamptz")

export const timestamp_pl_interval = defineFunction<"timestamp_pl_interval", {
  (arg1: Input<t.timestamp>, arg2: Input<t.interval>): Output<t.timestamp, "timestamp_pl_interval">
}>("timestamp_pl_interval")

export const timestamp_send = defineFunction<"timestamp_send", {
  (arg:: Input<t.timestamp>): Output<t.bytea, "timestamp_send">
}>("timestamp_send")

export const timestamp_smaller = defineFunction<"timestamp_smaller", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.timestamp, "timestamp_smaller">
}>("timestamp_smaller")

export const timestamptz = defineFunction<"timestamptz", {
  (arg:: Input<t.date>): Output<t.timestamptz, "timestamptz">
  (arg1: Input<t.date>, arg2: Input<t.timetz>): Output<t.timestamptz, "timestamptz">
  (arg1: Input<t.timestamptz>, arg2: Input<t.int4>): Output<t.timestamptz, "timestamptz">
  (arg:: Input<t.timestamp>): Output<t.timestamptz, "timestamptz">
  (arg1: Input<t.date>, arg2: Input<t.time>): Output<t.timestamptz, "timestamptz">
}>("timestamptz")

export const timestamptz_cmp = defineFunction<"timestamptz_cmp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.int4, "timestamptz_cmp">
}>("timestamptz_cmp")

export const timestamptz_cmp_date = defineFunction<"timestamptz_cmp_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.int4, "timestamptz_cmp_date">
}>("timestamptz_cmp_date")

export const timestamptz_cmp_timestamp = defineFunction<"timestamptz_cmp_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.int4, "timestamptz_cmp_timestamp">
}>("timestamptz_cmp_timestamp")

export const timestamptz_eq = defineFunction<"timestamptz_eq", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_eq">
}>("timestamptz_eq")

export const timestamptz_eq_date = defineFunction<"timestamptz_eq_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_eq_date">
}>("timestamptz_eq_date")

export const timestamptz_eq_timestamp = defineFunction<"timestamptz_eq_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_eq_timestamp">
}>("timestamptz_eq_timestamp")

export const timestamptz_ge = defineFunction<"timestamptz_ge", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_ge">
}>("timestamptz_ge")

export const timestamptz_ge_date = defineFunction<"timestamptz_ge_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_ge_date">
}>("timestamptz_ge_date")

export const timestamptz_ge_timestamp = defineFunction<"timestamptz_ge_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_ge_timestamp">
}>("timestamptz_ge_timestamp")

export const timestamptz_gt = defineFunction<"timestamptz_gt", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_gt">
}>("timestamptz_gt")

export const timestamptz_gt_date = defineFunction<"timestamptz_gt_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_gt_date">
}>("timestamptz_gt_date")

export const timestamptz_gt_timestamp = defineFunction<"timestamptz_gt_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_gt_timestamp">
}>("timestamptz_gt_timestamp")

export const timestamptz_larger = defineFunction<"timestamptz_larger", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "timestamptz_larger">
}>("timestamptz_larger")

export const timestamptz_le = defineFunction<"timestamptz_le", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_le">
}>("timestamptz_le")

export const timestamptz_le_date = defineFunction<"timestamptz_le_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_le_date">
}>("timestamptz_le_date")

export const timestamptz_le_timestamp = defineFunction<"timestamptz_le_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_le_timestamp">
}>("timestamptz_le_timestamp")

export const timestamptz_lt = defineFunction<"timestamptz_lt", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_lt">
}>("timestamptz_lt")

export const timestamptz_lt_date = defineFunction<"timestamptz_lt_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_lt_date">
}>("timestamptz_lt_date")

export const timestamptz_lt_timestamp = defineFunction<"timestamptz_lt_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_lt_timestamp">
}>("timestamptz_lt_timestamp")

export const timestamptz_mi = defineFunction<"timestamptz_mi", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.interval, "timestamptz_mi">
}>("timestamptz_mi")

export const timestamptz_mi_interval = defineFunction<"timestamptz_mi_interval", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>): Output<t.timestamptz, "timestamptz_mi_interval">
}>("timestamptz_mi_interval")

export const timestamptz_ne = defineFunction<"timestamptz_ne", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.bool, "timestamptz_ne">
}>("timestamptz_ne")

export const timestamptz_ne_date = defineFunction<"timestamptz_ne_date", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.date>): Output<t.bool, "timestamptz_ne_date">
}>("timestamptz_ne_date")

export const timestamptz_ne_timestamp = defineFunction<"timestamptz_ne_timestamp", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamp>): Output<t.bool, "timestamptz_ne_timestamp">
}>("timestamptz_ne_timestamp")

export const timestamptz_pl_interval = defineFunction<"timestamptz_pl_interval", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.interval>): Output<t.timestamptz, "timestamptz_pl_interval">
}>("timestamptz_pl_interval")

export const timestamptz_send = defineFunction<"timestamptz_send", {
  (arg:: Input<t.timestamptz>): Output<t.bytea, "timestamptz_send">
}>("timestamptz_send")

export const timestamptz_smaller = defineFunction<"timestamptz_smaller", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.timestamptz, "timestamptz_smaller">
}>("timestamptz_smaller")

export const timetz = defineFunction<"timetz", {
  (arg:: Input<t.timestamptz>): Output<t.timetz, "timetz">
  (arg1: Input<t.timetz>, arg2: Input<t.int4>): Output<t.timetz, "timetz">
  (arg:: Input<t.time>): Output<t.timetz, "timetz">
}>("timetz")

export const timetz_cmp = defineFunction<"timetz_cmp", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.int4, "timetz_cmp">
}>("timetz_cmp")

export const timetz_eq = defineFunction<"timetz_eq", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_eq">
}>("timetz_eq")

export const timetz_ge = defineFunction<"timetz_ge", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_ge">
}>("timetz_ge")

export const timetz_gt = defineFunction<"timetz_gt", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_gt">
}>("timetz_gt")

export const timetz_hash = defineFunction<"timetz_hash", {
  (arg:: Input<t.timetz>): Output<t.int4, "timetz_hash">
}>("timetz_hash")

export const timetz_hash_extended = defineFunction<"timetz_hash_extended", {
  (arg1: Input<t.timetz>, arg2: Input<t.int8>): Output<t.int8, "timetz_hash_extended">
}>("timetz_hash_extended")

export const timetz_larger = defineFunction<"timetz_larger", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.timetz, "timetz_larger">
}>("timetz_larger")

export const timetz_le = defineFunction<"timetz_le", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_le">
}>("timetz_le")

export const timetz_lt = defineFunction<"timetz_lt", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_lt">
}>("timetz_lt")

export const timetz_mi_interval = defineFunction<"timetz_mi_interval", {
  (arg1: Input<t.timetz>, arg2: Input<t.interval>): Output<t.timetz, "timetz_mi_interval">
}>("timetz_mi_interval")

export const timetz_ne = defineFunction<"timetz_ne", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.bool, "timetz_ne">
}>("timetz_ne")

export const timetz_pl_interval = defineFunction<"timetz_pl_interval", {
  (arg1: Input<t.timetz>, arg2: Input<t.interval>): Output<t.timetz, "timetz_pl_interval">
}>("timetz_pl_interval")

export const timetz_send = defineFunction<"timetz_send", {
  (arg:: Input<t.timetz>): Output<t.bytea, "timetz_send">
}>("timetz_send")

export const timetz_smaller = defineFunction<"timetz_smaller", {
  (arg1: Input<t.timetz>, arg2: Input<t.timetz>): Output<t.timetz, "timetz_smaller">
}>("timetz_smaller")

export const timetzdate_pl = defineFunction<"timetzdate_pl", {
  (arg1: Input<t.timetz>, arg2: Input<t.date>): Output<t.timestamptz, "timetzdate_pl">
}>("timetzdate_pl")

export const timezone = defineFunction<"timezone", {
  (arg1: Input<t.interval>, arg2: Input<t.timestamptz>): Output<t.timestamp, "timezone">
  (arg1: Input<t.text>, arg2: Input<t.timestamptz>): Output<t.timestamp, "timezone">
  (arg1: Input<t.text>, arg2: Input<t.timetz>): Output<t.timetz, "timezone">
  (arg1: Input<t.interval>, arg2: Input<t.timetz>): Output<t.timetz, "timezone">
  (arg1: Input<t.text>, arg2: Input<t.timestamp>): Output<t.timestamptz, "timezone">
  (arg1: Input<t.interval>, arg2: Input<t.timestamp>): Output<t.timestamptz, "timezone">
}>("timezone")

export const to_ascii = defineFunction<"to_ascii", {
  (arg:: Input<t.text>): Output<t.text, "to_ascii">
  (arg1: Input<t.text>, arg2: Input<t.int4>): Output<t.text, "to_ascii">
  (arg1: Input<t.text>, arg2: Input<t.name>): Output<t.text, "to_ascii">
}>("to_ascii")

export const to_char = defineFunction<"to_char", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.numeric>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.int4>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.int8>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.float4>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.float8>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.interval>, arg2: Input<t.text>): Output<t.text, "to_char">
  (arg1: Input<t.timestamp>, arg2: Input<t.text>): Output<t.text, "to_char">
}>("to_char")

export const to_date = defineFunction<"to_date", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.date, "to_date">
}>("to_date")

export const to_hex = defineFunction<"to_hex", {
  (arg:: Input<t.int4>): Output<t.text, "to_hex">
  (arg:: Input<t.int8>): Output<t.text, "to_hex">
}>("to_hex")

export const to_number = defineFunction<"to_number", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.numeric, "to_number">
}>("to_number")

export const to_timestamp = defineFunction<"to_timestamp", {
  (arg:: Input<t.float8>): Output<t.timestamptz, "to_timestamp">
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.timestamptz, "to_timestamp">
}>("to_timestamp")

export const to_tsquery = defineFunction<"to_tsquery", {
  (arg:: Input<t.text>): Output<t.tsquery, "to_tsquery">
}>("to_tsquery")

export const to_tsvector = defineFunction<"to_tsvector", {
  (arg:: Input<t.text>): Output<t.tsvector, "to_tsvector">
  (arg:: Input<t.jsonb>): Output<t.tsvector, "to_tsvector">
  (arg:: Input<t.json>): Output<t.tsvector, "to_tsvector">
}>("to_tsvector")

export const transaction_timestamp = defineFunction<"transaction_timestamp", {
  (): Output<t.timestamptz, "transaction_timestamp">
}>("transaction_timestamp")

export const translate = defineFunction<"translate", {
  (arg1: Input<t.text>, arg2: Input<t.text>, arg3: Input<t.text>): Output<t.text, "translate">
}>("translate")

export const trim_scale = defineFunction<"trim_scale", {
  (arg:: Input<t.numeric>): Output<t.numeric, "trim_scale">
}>("trim_scale")

export const trunc = defineFunction<"trunc", {
  (arg:: Input<t.float8>): Output<t.float8, "trunc">
  (arg:: Input<t.macaddr>): Output<t.macaddr, "trunc">
  (arg1: Input<t.numeric>, arg2: Input<t.int4>): Output<t.numeric, "trunc">
  (arg:: Input<t.numeric>): Output<t.numeric, "trunc">
}>("trunc")

export const ts_delete = defineFunction<"ts_delete", {
  (arg1: Input<t.tsvector>, arg2: Input<t.text>): Output<t.tsvector, "ts_delete">
}>("ts_delete")

export const ts_headline = defineFunction<"ts_headline", {
  (arg1: Input<t.text>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.text, "ts_headline">
  (arg1: Input<t.text>, arg2: Input<t.tsquery>): Output<t.text, "ts_headline">
  (arg1: Input<t.jsonb>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.jsonb, "ts_headline">
  (arg1: Input<t.jsonb>, arg2: Input<t.tsquery>): Output<t.jsonb, "ts_headline">
  (arg1: Input<t.json>, arg2: Input<t.tsquery>, arg3: Input<t.text>): Output<t.json, "ts_headline">
  (arg1: Input<t.json>, arg2: Input<t.tsquery>): Output<t.json, "ts_headline">
}>("ts_headline")

export const ts_match_qv = defineFunction<"ts_match_qv", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsvector>): Output<t.bool, "ts_match_qv">
}>("ts_match_qv")

export const ts_match_tq = defineFunction<"ts_match_tq", {
  (arg1: Input<t.text>, arg2: Input<t.tsquery>): Output<t.bool, "ts_match_tq">
}>("ts_match_tq")

export const ts_match_tt = defineFunction<"ts_match_tt", {
  (arg1: Input<t.text>, arg2: Input<t.text>): Output<t.bool, "ts_match_tt">
}>("ts_match_tt")

export const ts_match_vq = defineFunction<"ts_match_vq", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.bool, "ts_match_vq">
}>("ts_match_vq")

export const ts_rank = defineFunction<"ts_rank", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>, arg3: Input<t.int4>): Output<t.float4, "ts_rank">
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.float4, "ts_rank">
}>("ts_rank")

export const ts_rank_cd = defineFunction<"ts_rank_cd", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>, arg3: Input<t.int4>): Output<t.float4, "ts_rank_cd">
  (arg1: Input<t.tsvector>, arg2: Input<t.tsquery>): Output<t.float4, "ts_rank_cd">
}>("ts_rank_cd")

export const ts_rewrite = defineFunction<"ts_rewrite", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>, arg3: Input<t.tsquery>): Output<t.tsquery, "ts_rewrite">
  (arg1: Input<t.tsquery>, arg2: Input<t.text>): Output<t.tsquery, "ts_rewrite">
}>("ts_rewrite")

export const tsq_mcontained = defineFunction<"tsq_mcontained", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsq_mcontained">
}>("tsq_mcontained")

export const tsq_mcontains = defineFunction<"tsq_mcontains", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsq_mcontains">
}>("tsq_mcontains")

export const tsquery_and = defineFunction<"tsquery_and", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_and">
}>("tsquery_and")

export const tsquery_cmp = defineFunction<"tsquery_cmp", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.int4, "tsquery_cmp">
}>("tsquery_cmp")

export const tsquery_eq = defineFunction<"tsquery_eq", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_eq">
}>("tsquery_eq")

export const tsquery_ge = defineFunction<"tsquery_ge", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_ge">
}>("tsquery_ge")

export const tsquery_gt = defineFunction<"tsquery_gt", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_gt">
}>("tsquery_gt")

export const tsquery_le = defineFunction<"tsquery_le", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_le">
}>("tsquery_le")

export const tsquery_lt = defineFunction<"tsquery_lt", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_lt">
}>("tsquery_lt")

export const tsquery_ne = defineFunction<"tsquery_ne", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.bool, "tsquery_ne">
}>("tsquery_ne")

export const tsquery_not = defineFunction<"tsquery_not", {
  (arg:: Input<t.tsquery>): Output<t.tsquery, "tsquery_not">
}>("tsquery_not")

export const tsquery_or = defineFunction<"tsquery_or", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_or">
}>("tsquery_or")

export const tsquery_phrase = defineFunction<"tsquery_phrase", {
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>): Output<t.tsquery, "tsquery_phrase">
  (arg1: Input<t.tsquery>, arg2: Input<t.tsquery>, arg3: Input<t.int4>): Output<t.tsquery, "tsquery_phrase">
}>("tsquery_phrase")

export const tsquerysend = defineFunction<"tsquerysend", {
  (arg:: Input<t.tsquery>): Output<t.bytea, "tsquerysend">
}>("tsquerysend")

export const tsrange = defineFunction<"tsrange", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.tsrange, "tsrange">
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>, arg3: Input<t.text>): Output<t.tsrange, "tsrange">
}>("tsrange")

export const tsrange_subdiff = defineFunction<"tsrange_subdiff", {
  (arg1: Input<t.timestamp>, arg2: Input<t.timestamp>): Output<t.float8, "tsrange_subdiff">
}>("tsrange_subdiff")

export const tstzrange = defineFunction<"tstzrange", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.tstzrange, "tstzrange">
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>, arg3: Input<t.text>): Output<t.tstzrange, "tstzrange">
}>("tstzrange")

export const tstzrange_subdiff = defineFunction<"tstzrange_subdiff", {
  (arg1: Input<t.timestamptz>, arg2: Input<t.timestamptz>): Output<t.float8, "tstzrange_subdiff">
}>("tstzrange_subdiff")

export const tsvector_cmp = defineFunction<"tsvector_cmp", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.int4, "tsvector_cmp">
}>("tsvector_cmp")

export const tsvector_concat = defineFunction<"tsvector_concat", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.tsvector, "tsvector_concat">
}>("tsvector_concat")

export const tsvector_eq = defineFunction<"tsvector_eq", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_eq">
}>("tsvector_eq")

export const tsvector_ge = defineFunction<"tsvector_ge", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_ge">
}>("tsvector_ge")

export const tsvector_gt = defineFunction<"tsvector_gt", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_gt">
}>("tsvector_gt")

export const tsvector_le = defineFunction<"tsvector_le", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_le">
}>("tsvector_le")

export const tsvector_lt = defineFunction<"tsvector_lt", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_lt">
}>("tsvector_lt")

export const tsvector_ne = defineFunction<"tsvector_ne", {
  (arg1: Input<t.tsvector>, arg2: Input<t.tsvector>): Output<t.bool, "tsvector_ne">
}>("tsvector_ne")

export const tsvectorsend = defineFunction<"tsvectorsend", {
  (arg:: Input<t.tsvector>): Output<t.bytea, "tsvectorsend">
}>("tsvectorsend")

export const txid_current = defineFunction<"txid_current", {
  (): Output<t.int8, "txid_current">
}>("txid_current")

export const txid_current_if_assigned = defineFunction<"txid_current_if_assigned", {
  (): Output<t.int8, "txid_current_if_assigned">
}>("txid_current_if_assigned")

export const txid_status = defineFunction<"txid_status", {
  (arg:: Input<t.int8>): Output<t.text, "txid_status">
}>("txid_status")

export const unistr = defineFunction<"unistr", {
  (arg:: Input<t.text>): Output<t.text, "unistr">
}>("unistr")

export const upper = defineFunction<"upper", {
  (arg:: Input<t.text>): Output<t.text, "upper">
}>("upper")

export const uuid_cmp = defineFunction<"uuid_cmp", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.int4, "uuid_cmp">
}>("uuid_cmp")

export const uuid_eq = defineFunction<"uuid_eq", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_eq">
}>("uuid_eq")

export const uuid_ge = defineFunction<"uuid_ge", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_ge">
}>("uuid_ge")

export const uuid_gt = defineFunction<"uuid_gt", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_gt">
}>("uuid_gt")

export const uuid_hash = defineFunction<"uuid_hash", {
  (arg:: Input<t.uuid>): Output<t.int4, "uuid_hash">
}>("uuid_hash")

export const uuid_hash_extended = defineFunction<"uuid_hash_extended", {
  (arg1: Input<t.uuid>, arg2: Input<t.int8>): Output<t.int8, "uuid_hash_extended">
}>("uuid_hash_extended")

export const uuid_le = defineFunction<"uuid_le", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_le">
}>("uuid_le")

export const uuid_lt = defineFunction<"uuid_lt", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_lt">
}>("uuid_lt")

export const uuid_ne = defineFunction<"uuid_ne", {
  (arg1: Input<t.uuid>, arg2: Input<t.uuid>): Output<t.bool, "uuid_ne">
}>("uuid_ne")

export const uuid_send = defineFunction<"uuid_send", {
  (arg:: Input<t.uuid>): Output<t.bytea, "uuid_send">
}>("uuid_send")

export const var_pop = defineFunction<"var_pop", {
  (arg:: Input<t.int8>): Output<t.numeric, "var_pop">
  (arg:: Input<t.int4>): Output<t.numeric, "var_pop">
  (arg:: Input<t.int2>): Output<t.numeric, "var_pop">
  (arg:: Input<t.float4>): Output<t.float8, "var_pop">
  (arg:: Input<t.float8>): Output<t.float8, "var_pop">
  (arg:: Input<t.numeric>): Output<t.numeric, "var_pop">
}>("var_pop")

export const var_samp = defineFunction<"var_samp", {
  (arg:: Input<t.int8>): Output<t.numeric, "var_samp">
  (arg:: Input<t.int4>): Output<t.numeric, "var_samp">
  (arg:: Input<t.int2>): Output<t.numeric, "var_samp">
  (arg:: Input<t.float4>): Output<t.float8, "var_samp">
  (arg:: Input<t.float8>): Output<t.float8, "var_samp">
  (arg:: Input<t.numeric>): Output<t.numeric, "var_samp">
}>("var_samp")

export const varbit = defineFunction<"varbit", {
  (arg1: Input<t.varbit>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.varbit, "varbit">
}>("varbit")

export const varbit_send = defineFunction<"varbit_send", {
  (arg:: Input<t.varbit>): Output<t.bytea, "varbit_send">
}>("varbit_send")

export const varbitcmp = defineFunction<"varbitcmp", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.int4, "varbitcmp">
}>("varbitcmp")

export const varbiteq = defineFunction<"varbiteq", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbiteq">
}>("varbiteq")

export const varbitge = defineFunction<"varbitge", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitge">
}>("varbitge")

export const varbitgt = defineFunction<"varbitgt", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitgt">
}>("varbitgt")

export const varbitle = defineFunction<"varbitle", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitle">
}>("varbitle")

export const varbitlt = defineFunction<"varbitlt", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitlt">
}>("varbitlt")

export const varbitne = defineFunction<"varbitne", {
  (arg1: Input<t.varbit>, arg2: Input<t.varbit>): Output<t.bool, "varbitne">
}>("varbitne")

export const varchar = defineFunction<"varchar", {
  (arg1: Input<t.varchar>, arg2: Input<t.int4>, arg3: Input<t.bool>): Output<t.varchar, "varchar">
  (arg:: Input<t.name>): Output<t.varchar, "varchar">
}>("varchar")

export const varcharsend = defineFunction<"varcharsend", {
  (arg:: Input<t.varchar>): Output<t.bytea, "varcharsend">
}>("varcharsend")

export const variance = defineFunction<"variance", {
  (arg:: Input<t.int8>): Output<t.numeric, "variance">
  (arg:: Input<t.int4>): Output<t.numeric, "variance">
  (arg:: Input<t.int2>): Output<t.numeric, "variance">
  (arg:: Input<t.float4>): Output<t.float8, "variance">
  (arg:: Input<t.float8>): Output<t.float8, "variance">
  (arg:: Input<t.numeric>): Output<t.numeric, "variance">
}>("variance")

export const version = defineFunction<"version", {
  (): Output<t.text, "version">
}>("version")

export const websearch_to_tsquery = defineFunction<"websearch_to_tsquery", {
  (arg:: Input<t.text>): Output<t.tsquery, "websearch_to_tsquery">
}>("websearch_to_tsquery")

export const width = defineFunction<"width", {
  (arg:: Input<t.box>): Output<t.float8, "width">
}>("width")

export const width_bucket = defineFunction<"width_bucket", {
  (arg1: Input<t.float8>, arg2: Input<t.float8>, arg3: Input<t.float8>, arg4: Input<t.int4>): Output<t.int4, "width_bucket">
  (arg1: Input<t.numeric>, arg2: Input<t.numeric>, arg3: Input<t.numeric>, arg4: Input<t.int4>): Output<t.int4, "width_bucket">
}>("width_bucket")

export const xml = defineFunction<"xml", {
  (arg:: Input<t.text>): Output<t.xml, "xml">
}>("xml")

export const xml_is_well_formed = defineFunction<"xml_is_well_formed", {
  (arg:: Input<t.text>): Output<t.bool, "xml_is_well_formed">
}>("xml_is_well_formed")

export const xml_is_well_formed_content = defineFunction<"xml_is_well_formed_content", {
  (arg:: Input<t.text>): Output<t.bool, "xml_is_well_formed_content">
}>("xml_is_well_formed_content")

export const xml_is_well_formed_document = defineFunction<"xml_is_well_formed_document", {
  (arg:: Input<t.text>): Output<t.bool, "xml_is_well_formed_document">
}>("xml_is_well_formed_document")

export const xml_send = defineFunction<"xml_send", {
  (arg:: Input<t.xml>): Output<t.bytea, "xml_send">
}>("xml_send")

export const xmlagg = defineFunction<"xmlagg", {
  (arg:: Input<t.xml>): Output<t.xml, "xmlagg">
}>("xmlagg")

export const xmlcomment = defineFunction<"xmlcomment", {
  (arg:: Input<t.text>): Output<t.xml, "xmlcomment">
}>("xmlcomment")

export const xmlconcat2 = defineFunction<"xmlconcat2", {
  (arg1: Input<t.xml>, arg2: Input<t.xml>): Output<t.xml, "xmlconcat2">
}>("xmlconcat2")

export const xmlexists = defineFunction<"xmlexists", {
  (arg1: Input<t.text>, arg2: Input<t.xml>): Output<t.bool, "xmlexists">
}>("xmlexists")

export const xmlvalidate = defineFunction<"xmlvalidate", {
  (arg1: Input<t.xml>, arg2: Input<t.text>): Output<t.bool, "xmlvalidate">
}>("xmlvalidate")

export const xpath_exists = defineFunction<"xpath_exists", {
  (arg1: Input<t.text>, arg2: Input<t.xml>): Output<t.bool, "xpath_exists">
}>("xpath_exists")