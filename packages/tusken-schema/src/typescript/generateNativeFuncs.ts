import endent from 'endent'
import { FunctionFlags } from 'tusken/constants'
import type { NativeFunc } from '../extract/extractFuncs'
import { __PURE__ } from '../utils/syntax'
import { templateFunctions } from './templateFunctions'

export function generateNativeFuncs(
  nativeFuncs: NativeFunc[],
  docs: Record<string, string>
) {
  const imports = endent`
    import { defineFunction, defineSetFunction, defineTemplate, Aggregate, CallExpression, Expression, SetRef, Type } from 'tusken'
    import * as t from './types'
  `

  const keyPaths: [string, string][] = []
  const groupedFuncs: { [name: string]: Record<string, NativeFunc[]> } = {}

  const isPassThrough = (fn: NativeFunc) =>
    !fn.returnSet &&
    !fn.typeParams &&
    fn.argTypes.length == 1 &&
    fn.argTypes[0] == fn.returnType &&
    fn.returnType !== 't.bool' &&
    fn.returnType !== 't.void'

  const skippedOverloads: Record<string, (fn: NativeFunc) => boolean> = {
    count: fn => fn.argTypes.length == 0,
  }

  for (const fn of nativeFuncs) {
    if (skippedOverloads[fn.name]?.(fn)) {
      continue
    }
    const sig = String([
      isPassThrough(fn) ? '' : fn.returnType,
      fn.returnSet ? 'set' : '',
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
        // Use empty `returnType` to detect passthrough signatures.
        returnType: sig[0] == ',' ? '' : overloads[0].returnType,
        // Combine the argument types of similar overloads.
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

  const varFuncs = [
    'current_catalog',
    'current_role',
    'current_schema',
    'current_user',
    'session_user',
    'user',
  ]

  return (
    imports +
    `\n\n` +
    Object.keys(groupedFuncs)
      .sort((a, b) => (a < b ? -1 : 1))
      .map(name => {
        let returnSet = false
        let returnBool = false
        let returnAggregate = false

        const signature: string[] = []
        const overloads = Object.values(groupedFuncs[name])
        for (const [fn] of overloads) {
          if (fn.returnSet) returnSet = true
          else if (fn.kind == 'a') returnAggregate = true
          if (fn.returnType == 't.bool') returnBool = true

          const hasVoidReturn = fn.returnType == 't.void'
          const isNullable =
            fn.strict && fn.argTypes.length > 0 && !hasVoidReturn
          const hasNullableOverload = isNullable && !!fn.returnType

          if (!hasNullableOverload || !fn.returnSet) {
            if (!fn.returnType) {
              if (isNullable) {
                fn.argTypes[0] += ' | t.null'
              }
              fn.typeParams = `<T extends ${fn.argTypes[0]}>`
              fn.argTypes[0] = 'T'
              fn.returnType = 'T'
            }

            signature.push(
              (fn.typeParams || '') +
                `(${renderInputs(fn)}): ` +
                renderOutput(fn)
            )
          }

          if (hasNullableOverload && fn.returnType) {
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
        summary = summary ? `/** ${summary} */\n` : ''

        const exportAlias = name.startsWith('pg_')
          ? `\nexport { ${name} as ${name.slice(3)} }`
          : ``

        const defineArgs: string[] = [`"${name}"`]
        const defineFlags: number[] = []

        if (returnBool) {
          defineArgs[2] = 't.bool'
        }

        const sqlTemplate = templateFunctions[name]
        const isVarFunc = varFuncs.includes(name)

        let constType: string
        if (isVarFunc) {
          const [fn] = overloads[0]
          constType = renderOutput(fn)
        } else {
          constType = endent`{
            ${summary + signature.join('\n')}
          }`
        }

        if (sqlTemplate) {
          defineArgs[1] = `"${sqlTemplate}"`
        } else {
          if (isVarFunc) {
            defineFlags.push(FunctionFlags.omitArgs)
          } else if (returnAggregate) {
            defineFlags.push(FunctionFlags.isAggregate)
          }

          if (defineFlags.length || defineArgs.length >= 3) {
            defineArgs[1] = defineFlags.length
              ? String(defineFlags.reduce((a, b) => a | b, 0))
              : '0'
          }
        }

        const constructorId = sqlTemplate
          ? 'defineTemplate'
          : returnSet
          ? 'defineSetFunction'
          : 'defineFunction'

        let assignedValue = constructorId + `(${defineArgs.join(', ')})`
        if (isVarFunc) {
          assignedValue += '()'
        }

        const constPrefix = exportAlias ? 'const' : 'export const'
        return (
          summary +
          endent`
            ${constPrefix} ${name}: ${constType} = ${__PURE__} ${assignedValue}${exportAlias}
          `
        )
      })
      .join('\n\n')
  )
}

function renderOutput(fn: NativeFunc, isNullable?: boolean) {
  let { returnType } = fn
  if (!fn.returnSet && isNullable) {
    returnType += ' | t.null'
  }

  const runtimeType =
    fn.kind == 'a' ? 'Aggregate' : fn.returnSet ? 'SetRef' : 'CallExpression'

  return runtimeType + `<${returnType}, "${fn.name}">`
}

function renderInputs(fn: NativeFunc, isNullable?: boolean) {
  if (fn.argTypes.length == 0) {
    return ''
  }
  const orNull = isNullable ? ' | t.null' : ''
  const argTypes = fn.argTypes.map(type => {
    const needParamType =
      !fn.typeParams || !/any\w*nonarray\b/.test(fn.typeParams)

    type += orNull
    return needParamType
      ? fn.kind == 'a'
        ? `t.aggParam<${type}>`
        : `t.param<${type}>`
      : `Expression<${type}>`
  })
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
