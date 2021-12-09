export default function arraySwap(fromArray, fromIndex, toIndex) {
  const toArray = fromArray.slice()
  const startIndex = fromIndex < 0 ? toArray.length + fromIndex : fromIndex
  if (startIndex >= 0 && startIndex < toArray.length) {
    const endIndex = toIndex < 0 ? toArray.length + toIndex : toIndex
    const [item] = toArray.splice(fromIndex, 1)
    toArray.splice(endIndex, 0, item)
  }
  return toArray
}
