function typeValue({ type = '', value = '', checked = false }) {
  let returnValue
  switch (type.toUpperCase()) {
    case 'NUMBER':
      returnValue = parseFloat(value, 10)
      break
    case 'CHECKBOX':
      returnValue = !!checked
      break
    default:
      returnValue = value
      break
  }
  return returnValue
}

function typeReducer(acc, element) {
  return {
    ...acc,
    [element.name]: typeValue(element),
  }
}

export default function getFormValues(formElem) {
  if (!formElem) {
    return {}
  }

  return Array.prototype.reduce.call(formElem.elements, typeReducer, {})
}
