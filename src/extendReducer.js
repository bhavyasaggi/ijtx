const isObject = (obj) =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj)

const extendReducer = (delta) => (base) => {
  if (Array.isArray(base)) {
    return (base || []).concat(delta)
  }
  if (isObject(base) && isObject(delta)) {
    return {
      ...base,
      ...delta,
    }
  }
  return base
}

export default extendReducer
