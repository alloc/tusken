export function become<T>(value: object, becomes: T): T {
  return Object.setPrototypeOf(value, Object.getPrototypeOf(becomes))
}
