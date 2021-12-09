export default function promiseChain(values, callback, callbackOpt) {
  return values.reduce(
    (promiseValue, value) =>
      promiseValue.then(() => callback(value, callbackOpt)),
    Promise.resolve()
  )
}
