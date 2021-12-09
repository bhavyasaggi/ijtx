export default function arrayOmit(fromArray, removeObject) {
  return fromArray.filter((arrayObject) => arrayObject !== removeObject)
}
