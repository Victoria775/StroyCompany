const addZeroDate = (number) => {
  if (number.toString().length === 1) {
    return `0${number}`
  } else {
    return number
  }
}

export const getDays = (seconds) => {
  const days = Math.round((seconds / 3600 / 8) * 10) / 10
  return days
}

export const getDate = (seconds) => {
  const date = new Date(0)
  date.setSeconds(seconds)
  const day = date?.getDate() ? addZeroDate(date.getDate()) : 0
  const month = date?.getMonth() ? addZeroDate(date.getMonth() + 1) : 0
  const year = date?.getFullYear() ? addZeroDate(date.getFullYear()) : 0
  return `${day}.${month}.${year}`
}
