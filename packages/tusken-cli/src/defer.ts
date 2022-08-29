export type Deferred<T> = PromiseLike<T> & {
  resolve: undefined extends T
    ? (value?: T | PromiseLike<T>) => void
    : (value: T | PromiseLike<T>) => void
  reject: (error?: any) => void
  promise: Promise<T>
  settled: boolean
}

export function defer<T>() {
  const result = {} as Deferred<T>
  const promise = new Promise<T>((resolve, reject) => {
    result.resolve = resolve as any
    result.reject = reject
  })
  promise.finally(() => {
    result.settled = true
  })
  result.then = promise.then.bind(promise) as any
  result.promise = promise
  return result
}
