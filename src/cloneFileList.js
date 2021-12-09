export default function cloneFileList(fileList) {
  return Array.prototype.map.call(
    fileList,
    (file) => new File([file], file.name)
  )
}
