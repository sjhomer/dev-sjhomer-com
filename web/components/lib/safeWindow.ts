// @ts-ignore
let safeWindow: Window = undefined

try {
  safeWindow = window
} catch (e) {
  // do nothing
}

export default safeWindow