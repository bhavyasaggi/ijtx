const mimeRegex = /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*?,(.*)/

const mimeExtension = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/svg+xml': 'svg',
}

export default function base64ToExt(dataurl) {
  if (typeof dataurl !== 'string') {
    return undefined
  }
  const mimeArray = dataurl.match(mimeRegex)
  if (!mimeArray || !mimeArray.length) {
    return undefined
  }
  return {
    data: mimeArray[2],
    mime: mimeArray[1],
    mimeExt: mimeExtension[mimeArray[1]],
  }
}
