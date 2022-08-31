export default <[string, string][]>[
  ['bit', 'number'],
  ['bool', 'boolean'],
  ['box', '[[x1: number, y1: number], [x2: number, y2: number]]'],
  ['bpchar', 'string'],
  ['bytea', 'Buffer'],
  ['char', 'string'],
  ['cidr', 'string'],
  ['circle', '[radius: number, x: number, y: number]'],
  ['date', 'Date'],
  ['daterange', 'string'],
  ['float4', 'number'],
  ['float8', 'number'],
  ['inet', 'string'],
  // ['int', 'number'],
  ['int2', 'number'],
  ['int4', 'number'],
  ['int4range', 'string'],
  ['int8', 'string'], // 8 bytes, can't be represented as a FP number
  ['int8range', 'string'],
  // ['integer', 'number'],
  ['interval', 'string'],
  ['json', 'any'],
  ['jsonb', 'any'],
  ['line', 'any'], // ?
  ['lseg', 'any'], // ?
  ['macaddr', 'string'],
  ['money', 'string'],
  ['name', 'string'], // https://www.postgresql.org/docs/13/datatype-character.html#DATATYPE-CHARACTER-SPECIAL-TABLE
  ['numeric', 'string'],
  ['numrange', 'string'],
  ['oid', 'number'], // unsigned four-byte integer
  ['path', 'any'], // ?
  ['point', '[x: number, y: number]'],
  ['polygon', 'any'], // ?
  ['text', 'string'],
  ['time', 'string'],
  ['timestamp', 'string'],
  ['timestamptz', 'string'],
  ['timetz', 'string'],
  ['tsquery', 'any'], // ?
  ['tsrange', 'string'],
  ['tstzrange', 'string'],
  ['tsvector', 'string'], // e.g. "'bird':1 'bore':4 'california':18 'dog':16 'face':14 'must':13 'perdit':2 'pioneer':11 'stori':5 'woman':8"
  ['uuid', 'string'], // ?
  ['varbit', 'number'], // bit string?
  ['varchar', 'string'],
  ['xml', 'string'], // ?
]
