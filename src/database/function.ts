import { kFunctionArgs, kFunctionName, kFunctionReturnType } from './symbols'
import { NativeType, Type, UnwrapType } from './type'

export function defineFunction<Name extends string, T extends object>(
  name: Name
): T {
  return ((...args: any[]) => new FunctionCall(name, args)) as any
}

export class FunctionCall<T extends Type = any, Name extends string = any> {
  /** Exists for type nominality. */
  protected [kFunctionReturnType]!: T
  protected [kFunctionName]: Name
  protected [kFunctionArgs]: any[]

  constructor(name: Name, args: any[]) {
    this[kFunctionName] = name
    this[kFunctionArgs] = args
  }
}

export interface FunctionCall<T extends Type>
  extends Type<NativeType<T>, UnwrapType<T>> {}
