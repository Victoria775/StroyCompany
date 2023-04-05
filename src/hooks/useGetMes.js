import { useState } from 'react'
import { getUserMessages } from '../api/user-info'

const useGetMes = () => {
  const [count, setCount] = useState()

  const test = async () => {
    const messages = await getUserMessages()
    let newCount = 0

    messages.map((message) => {
      if (message.isRead === false) {
        newCount += 1
      }
    })

    setCount(newCount)
  }
  test()

  return count
}

export default useGetMes
