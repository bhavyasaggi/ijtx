export default function modulus(value, base) {
  const safeValue = value || 0
  const safeBase = base || 1
  const rawModulus = safeValue % safeBase
  const shiftedModulus = rawModulus + safeBase
  const positiveModulus = shiftedModulus % safeBase
  return parseInt(positiveModulus, 10)
}
