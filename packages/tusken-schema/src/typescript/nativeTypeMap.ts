export default {
  bit: 'number',
  bool: 'boolean',
  // box: '[[x1: number, y1: number], [x2: number, y2: number]]',
  bpchar: 'string',
  bytea: 'Buffer',
  char: 'string',
  cidr: 'string',
  circle: '{ radius: number, x: number, y: number }',
  date: 'Date',
  daterange: 'Range<Date>',
  float4: 'number',
  float8: 'number',
  inet: 'string',
  int2: 'number',
  int4: 'number',
  int4range: 'Range<number>',
  int8: 'string', // 8 bytes, can't be represented as a FP number
  int8range: 'Range<string>',
  interval: 'Interval',
  json: 'Json',
  jsonb: 'Json',
  // line: 'unknown', // ?
  // lseg: 'unknown', // ?
  macaddr: 'string',
  money: 'string',
  name: 'string', // https://www.postgresql.org/docs/13/datatype-character.html#DATATYPE-CHARACTER-SPECIAL-TABLE
  numeric: 'string',
  numrange: 'Range<string>',
  oid: 'number', // unsigned four-byte integer
  // path: 'unknown', // ?
  point: '{ x: number, y: number }',
  // polygon: 'unknown', // ?
  text: 'string',
  time: 'string',
  timestamp: 'Date',
  timestamptz: 'Date',
  timetz: 'string',
  // tsquery: 'unknown', // ?
  tsrange: 'Range<Date>',
  tstzrange: 'Range<Date>',
  tsvector: 'string', // e.g. "'bird':1 'bore':4 'california':18 'dog':16 'face':14 'must':13 'perdit':2 'pioneer':11 'stori':5 'woman':8"
  uuid: 'string', // ?
  varbit: 'number', // bit string?
  varchar: 'string',
  xml: 'string', // ?
}
