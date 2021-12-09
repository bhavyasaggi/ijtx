export default function toPrefixed(num, digits) {
  const zeroString = '0'.repeat(digits)

  const numString = num.toString()
  const numLength = Math.max(numString.length, digits)

  return (zeroString + numString).slice(-1 * numLength)
}
