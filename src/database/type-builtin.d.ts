import type { Type } from './type'

export declare namespace t {
  export type bool = Type<'bool', boolean>

  type NULL = Type<'null', undefined>
  export { NULL as null }
}
