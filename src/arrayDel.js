export default function arrayDel(fromArray, removeIndex) {
  const toArray = fromArray.slice()
  if (removeIndex < toArray.length) {
    toArray.splice(removeIndex, 1)
  }
  return toArray
}
