import { AnyFn } from '@alloc/types'

export function callProp<T>(
  value: T,
  ...args: AnyFn extends T ? Parameters<Extract<T, AnyFn>> : unknown[]
): T extends AnyFn<any, infer U> ? U : T {
  return typeof value == 'function' ? value(...args) : value
}
