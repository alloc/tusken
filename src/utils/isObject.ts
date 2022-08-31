export function isObject(o: any): o is object {
  return !!o && typeof o == 'object' && !Array.isArray(o)
}
