import endent from 'endent'
import { NativeFunc } from '../extract'

export function generateNativeFuncs(
  nativeFuncs: NativeFunc[],
  docs: Record<string, string>
) {
  const imports = endent`
    import { defineFunction, Input, FunctionCall as Output } from 'tusken'
    import * as t from './types'
  `

  const keyPaths: [string, string][] = []
  const groupedFuncs: { [name: string]: Record<string, NativeFunc[]> } = {}

  for (const fn of nativeFuncs) {
    const sig = String([
      fn.returnType,
      fn.typeParams || '',
      '(' + String(fn.args || '') + ')',
      fn.isVariadic ? '' : fn.argTypes.length,
      fn.optionalArgCount,
      fn.strict ? 'strict' : '',
    ])
    const signature = groupedFuncs[fn.name] || {}
    const overloads = signature[sig] || []
    if (!overloads.length) {
      groupedFuncs[fn.name] = signature
      signature[sig] = overloads
      keyPaths.push([fn.name, sig])
    }
    overloads.push(fn)
  }

  for (const [name, sig] of keyPaths) {
    const overloads = groupedFuncs[name][sig]
    if (overloads.length > 1) {
      // console.log(name, overloads.length, sig)
      overloads.unshift({
        ...overloads[0],
        argTypes: overloads[0].argTypes.map((_, i) => {
          const uniqueTypes = new Set<string>()
          for (const overload of overloads) {
            uniqueTypes.add(overload.argTypes[i])
          }
          return Array.from(uniqueTypes).join(' | ')
        }),
      })
    }
  }

  return (
    imports +
    `\n\n` +
    Object.keys(groupedFuncs)
      .sort((a, b) => (a < b ? -1 : 1))
      .map(name => {
        const signature: string[] = []
        for (const [fn] of Object.values(groupedFuncs[name])) {
          const hasNullableOverload =
            fn.strict && (fn.argTypes.length || fn.returnType !== 't.void')

          if (!hasNullableOverload || fn.returnType !== 't.void') {
            signature.push(
              (fn.typeParams || '') +
                `(${renderInputs(fn)}): ` +
                renderOutput(fn)
            )
          }
          if (hasNullableOverload) {
            signature.push(
              (fn.typeParams || '') +
                `(${renderInputs(fn, true)}): ` +
                renderOutput(fn, fn.returnType !== 't.void')
            )
          }
        }
        let summary = docs[name]
        if (summary?.includes('\n')) {
          summary = ('\n' + summary).replace(/\n/g, '\n * ') + '\n'
        }
        return (
          (summary ? `/** ${summary} */\n` : '') +
          endent`
            export const ${name} = defineFunction<"${name}", {
              ${signature.join('\n')}
            }>("${name}")
          `
        )
      })
      .join('\n\n')
  )
}

const renderOutput = (fn: NativeFunc, isNullable?: boolean) =>
  `Output<${fn.returnType}${isNullable ? ' | t.null' : ''}, "${fn.name}">`

function renderInputs(fn: NativeFunc, isNullable?: boolean) {
  if (fn.argTypes.length == 0) {
    return ''
  }
  const orNull = isNullable ? ' | t.null' : ''
  const argTypes = fn.argTypes.map(name => `Input<${name}${orNull}>`)
  return fn.isVariadic && argTypes.length == 1
    ? `...args: ${argTypes[0]}[]`
    : fn.args
    ? fn.args
        .slice(0, argTypes.length)
        .map(
          (arg, i) =>
            `${arg}${fn.optionalArgCount >= argTypes.length - i ? '?' : ''}: ${
              argTypes[i]
            }`
        )
        .join(', ')
    : argTypes.length == 1
    ? `arg${fn.optionalArgCount ? '?' : ''}: ${argTypes[0]}`
    : argTypes
        .map(
          (argType, i) =>
            `arg${i + 1}${
              fn.optionalArgCount >= argTypes.length - i ? '?' : ''
            }: ${argType}`
        )
        .join(', ')
}

/** Very naïve deep merge, purpose built */
function deepMerge(target: any, arg: any) {
  for (const key in arg) {
    if (target[key] && typeof target[key] === 'object') {
      deepMerge(target[key], arg[key])
    } else if (Array.isArray(target[key])) {
      target[key].push(...arg[key])
    } else {
      target[key] = arg[key]
    }
  }
  return target
}
