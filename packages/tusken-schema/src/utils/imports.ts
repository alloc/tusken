const SPACE = ' '

export type ImportDescriptorMap = {
  [source: string]: string[]
}

export function mergeImports(...importArgs: ImportDescriptorMap[]) {
  const imports: ImportDescriptorMap = {}
  for (const source of importArgs) {
    for (const name in source) {
      if (imports[name]) {
        imports[name] = imports[name].concat(source[name])
      } else {
        imports[name] = source[name]
      }
    }
  }
  for (const source in imports) {
    imports[source] = Array.from(new Set(imports[source])).sort()
  }
  return imports
}

export function serializeImports(imports: ImportDescriptorMap | string[]) {
  return (
    Array.isArray(imports)
      ? imports.map(source => [source, ''])
      : Object.entries(imports)
  ).map(
    ([source, spec]) =>
      `import ${
        typeof spec === 'string'
          ? spec
            ? spec + ' from '
            : ''
          : spec.length == 0
          ? ''
          : '{' +
            SPACE +
            spec
              .map(spec =>
                typeof spec === 'string' ? spec : spec[0] + ' as ' + spec[1]
              )
              .join(',' + SPACE) +
            SPACE +
            '} from '
      }"${source}"`
  )
}
