const varDeclRE = /^(const|let|var) /
const INDENT = '  '
const RETURN = '\n'
const SPACE = ' '

type Replacer = (this: any, key: string, value: any) => string | void

const seen = new Set()

/**
 * Convert almost any kind of data to ESM code.
 *
 * By default, `export default` is prepended to the generated code,
 * but the `variable` argument lets you change that. For example,
 * you could pass `"foo"` to prepend `const foo =`, pass an empty
 * string to prepend nothing, or `"let foo"` for a `let foo =` prefix.
 *
 * The `replacer` argument lets you selectively override which code
 * is generated from a specific value.
 */
export function dataToEsm(
  data: unknown,
  variable?: string | null,
  replacer: Replacer = () => {}
) {
  if (variable && !varDeclRE.test(variable)) {
    variable = 'const ' + variable
  }

  const prefix = variable
    ? variable + ' = '
    : variable !== ''
    ? 'export default '
    : ''

  return prefix + serialize(data, [], replacer)
}

function serialize(
  value: any,
  keyPath: string[],
  replacer: Replacer,
  context?: any
): string {
  const key = keyPath.length ? keyPath[keyPath.length - 1] : ''
  const replacement = replacer.call(context, key, value)
  if (typeof replacement === 'string') {
    return replacement
  }
  if (
    value == null ||
    value === Infinity ||
    value === -Infinity ||
    Number.isNaN(value) ||
    value instanceof RegExp
  ) {
    return String(value)
  }
  if (value === 0 && 1 / value === -Infinity) {
    return '-0'
  }
  if (value instanceof Date) {
    return `new Date(${value.getTime()})`
  }
  if (Array.isArray(value)) {
    if (seen.has(value)) {
      return ''
    }
    seen.add(value)
    const serialized = serializeArray(value, keyPath, replacer)
    seen.delete(value)
    return serialized
  }
  if (typeof value === 'object') {
    if (seen.has(value)) {
      return ''
    }
    seen.add(value)
    const serialized = serializeObject(value, keyPath, replacer)
    seen.delete(value)
    return serialized
  }
  return stringify(value)
}

function stringify(obj: unknown): string {
  return JSON.stringify(obj).replace(
    /[\u2028\u2029]/g,
    char => `\\u${`000${char.charCodeAt(0).toString(16)}`.slice(-4)}`
  )
}

function serializeArray<T>(
  arr: T[],
  keyPath: string[],
  replacer: Replacer
): string {
  let output = '['
  const baseIndent = INDENT.repeat(keyPath.length)
  const separator = RETURN + baseIndent + INDENT
  for (let i = 0; i < arr.length; i++) {
    output += `${i > 0 ? ',' : ''}${separator}${serialize(
      arr[i],
      keyPath.concat(String(i)),
      replacer,
      arr
    )}`
  }
  return output + RETURN + baseIndent + ']'
}

function serializeObject(
  obj: object,
  keyPath: string[],
  replacer: Replacer
): string {
  let output = '{'
  const baseIndent = INDENT.repeat(keyPath.length)
  const separator = RETURN + baseIndent + INDENT

  const definedEntries = Object.entries(obj).filter(entry => {
    const [key, value] = entry
    // Ignore undefined property values like JSON.stringify does
    if (value !== undefined) {
      entry[1] = serialize(value, keyPath.concat(String(key)), replacer, obj)
      return entry[1] !== ''
    }
  })

  definedEntries.forEach(([key, value], i) => {
    const legalName = /^[$_a-z0-9]+$/i.test(key) ? key : stringify(key)
    output += (i > 0 ? ',' : '') + separator + legalName + ':' + SPACE + value
  })

  return output + RETURN + baseIndent + '}'
}
