import endent from 'endent'
import { NativeFunc } from '../extract'

export function generateNativeFuncs(nativeFuncs: NativeFunc[]) {
  const imports = endent`
    import { defineFunction, FunctionCall as Result } from 'tusken'
    import * as t from './types'
  `

  const signatures: Record<string, string[]> = {}
  for (const fn of nativeFuncs) {
    const sigs = (signatures[fn.name] ||= [])
    const args =
      fn.isVariadic && fn.argTypes.length == 1
        ? '...args: t.' + fn.argTypes[0] + '[]'
        : fn.args
        ? fn.args.map((arg, i) => `${arg}: t.${fn.argTypes[i]}`).join(', ')
        : fn.argTypes.length == 1
        ? `arg: t.${fn.argTypes[0]}`
        : fn.argTypes
            .map((argType, i) => `arg${i + 1}: t.` + argType)
            .join(', ')

    sigs.push(`(${args}): Result<t.${fn.returnType}, "${fn.name}">`)
  }

  return (
    imports +
    `\n\n` +
    Object.entries(signatures)
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(([name, sigs]) => {
        return endent`
          export const ${name} = defineFunction<"${name}", {
            ${sigs.join('\n')}
          }>("${name}")
        `
      })
      .join('\n\n')
  )
}
