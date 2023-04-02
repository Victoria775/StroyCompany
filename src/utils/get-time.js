export const getDays = (seconds) => {
  const days = Math.round((seconds / 3600 / 8) * 10) / 10
  return days
}

export const getDate = (seconds) => {
  const date = new Date(0)
  date.setSeconds(seconds)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
