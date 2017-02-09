export default function extract(pattern, pathname) {
  const names = []

  const re = new RegExp(
    pattern
      .replace(/:([\w]+)/g, (m, p1) => {
        names.push(p1)
        return '([^\\/]+)'
      })
      .replace(/(\*)/g, (m, p1) => {
        names.push(p1)
        return '([^$]*)'
      })
  , 'g')

  if (names.length === 0) {
    return null
  }

  const matches = re.exec(pathname)
  if (!matches) {
    return null
  }

  const params = {}
  for (let i = 0; i < names.length; i++) {
    params[names[i]] = matches[i + 1]
  }

  return params
}
