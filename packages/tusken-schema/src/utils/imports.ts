const SPACE = ' '

export type ImportDescriptorMap = {
  [source: string]: string | string[]
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
