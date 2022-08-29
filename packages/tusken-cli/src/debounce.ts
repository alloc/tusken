// If the final call before the effect is triggered happens
// to occur within 20ms of the call before it, we skip the
// setTimeout and just trigger the effect 20ms earlier.
const lenience = 20

export function debounce(ms: number, effect: () => void) {
  let timeoutId: any = -1
  let lastCallTime = 0

  // This avoids calling clearTimeout and setTimeout as much
  // as possible, in hopes of better performance.
  const onTimeout = () => {
    if (lastCallTime) {
      const remainingDelay = ms - (Date.now() - lastCallTime)
      lastCallTime = 0

      if (remainingDelay > lenience) {
        timeoutId = setTimeout(onTimeout, remainingDelay)
        return
      }
    }
    timeoutId = -1
    effect()
  }

  return () => {
    if (timeoutId < 0) {
      timeoutId = setTimeout(onTimeout, ms)
    } else {
      lastCallTime = Date.now()
    }
  }
}
