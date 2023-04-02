import { useState } from 'react'
import { useSelector } from 'react-redux'
import { createApplication } from '../../../api/user-info'
import { GeneralContainer } from './styled/general.styled'
import {
  Container,
  Head,
  TextInput,
  RequestBox,
  Comment,
  EnterButton,
} from './styled/stick-list.styled'

const SickList = ({ setIsLoading }) => {
  const { userId, fio } = useSelector((state) => state.user)
  const [startSick, setStartSick] = useState('')
  const [comment, setComment] = useState('')

  const сonvertToDate = () => {
    const startArray = startSick.split('.')
    const start = new Date(+startArray[2], +startArray[1] - 1, +startArray[0])
    return start
  }

  const openSickList = async () => {
    try {
      setIsLoading(true)
      const start = сonvertToDate()
      const application = {
        userId,
        fio,
        category: 'slick_list',
        date: {
          start: Date.parse(start) / 1000,
          end: 0,
        },
        type: '',
        comment,
        status: 'в ожидании',
        process: 'ожидание исполнения',
      }

      await createApplication({ application })
      setComment('')
      setStartSick('')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <GeneralContainer>
      <Container>
        <Head>Открыть больничный лист</Head>
        <RequestBox>
          <TextInput>
            <p>Начало:</p>
            <p>
              <input
                placeholder='дд.мм.гггг'
                value={startSick}
                onChange={(e) => setStartSick(e.target.value)}
              />
            </p>
          </TextInput>
          <Comment>
            <p>Комментарий:</p>
            <div>
              <textarea
                placeholder='Можно по желанию оставить комментарий'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </Comment>
          <EnterButton>
            <button onClick={openSickList}>Открыть больничный</button>
          </EnterButton>
        </RequestBox>
      </Container>
    </GeneralContainer>
  )
}

export default SickList
