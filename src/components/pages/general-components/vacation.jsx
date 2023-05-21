import { useState } from 'react'
import { useSelector } from 'react-redux'
import { changeUserInfo, createApplication } from '../../../api/user-info'
import { GeneralContainer } from './styled/general.styled'
import {
  Container,
  Request,
  RequestBox,
  Head,
  Сhoix,
  TextInput,
  NumberDate,
  Inputs,
  EnterButton,
  Comment,
  TypeVacation,
  Radio,
} from './styled/vacation.styled'

const Vacation = ({ setIsLoading }) => {
  const { userId, fio, time } = useSelector((state) => state.user)
  const [startVacation, setStartVacation] = useState('')
  const [endVacation, setEndVacation] = useState('')
  const [typeVacation, setTypeVacation] = useState('')
  const [comment, setComment] = useState('')

  const typeArray = [
    'Основной ежегодный оплачиваемый отпуск',
    'Дополнительный оплачиваемый отпуск',
    'Основной оплачиваемый отпуск авансом',
    'Дополнительный отпуск авансом',
    'Административный отпуск',
  ]

  const сonvertToDate = () => {
    const startArray = startVacation.split('.')
    const stopArray = endVacation.split('.')

    const start = new Date(+startArray[2], +startArray[1] - 1, +startArray[0])
    const end = new Date(+stopArray[2], +stopArray[1] - 1, +stopArray[0])

    return { start, end }
  }

  const calculateDifference = () => {
    if (startVacation.length < 10) return 0
    const { start, end } = сonvertToDate()
    const difference = Math.round((end - start) / (1000 * 60 * 60 * 24))

    return difference > 0 ? difference : 0
  }

  const goOnVacation = async () => {
    try {
      setIsLoading(true)

      const { start, end } = сonvertToDate()
      const application = {
        userId,
        fio,
        category: 'vacation',
        date: {
          start: Date.parse(start) / 1000,
          end: Date.parse(end) / 1000,
        },
        type: typeVacation,
        comment,
        status: 'в ожидании',
        process: 'ожидание исполнения',
      }

      const vacationUser = {
        start_vacation: Date.parse(start) / 1000,
        end_vacation: Date.parse(end) / 1000,
      }
      const timeUser = {
        time_month_work: time.current_month.work,
        time_month_medical: time.current_month.medical,
        time_month_vacation: time.current_month.vacation,
        time_year_work: time.year.work,
        time_year_medical: time.year.medical,
        time_year_vacation: time.year.vacation,
      }
      const newInfo = { time: timeUser, vacation: vacationUser }

      await createApplication({ application })
      await changeUserInfo({ newInfo, userId })
      setStartVacation('')
      setEndVacation('')
      setTypeVacation('')
      setComment('')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <GeneralContainer>
      <Container>
        <Request>
          <Head>Выбор даты отпука</Head>
          <RequestBox>
            <Inputs>
              <Сhoix>
                <TextInput>
                  <p>Начало:</p>
                  <p>
                    <input
                      placeholder='дд.мм.гггг'
                      value={startVacation}
                      onChange={(e) => setStartVacation(e.target.value)}
                    />
                  </p>
                </TextInput>
                <TextInput>
                  <p>Конец:</p>
                  <p>
                    <input
                      placeholder='дд.мм.гггг'
                      value={endVacation}
                      onChange={(e) => setEndVacation(e.target.value)}
                    />
                  </p>
                </TextInput>
              </Сhoix>
              <NumberDate>
                <span>Выбрано дней: {calculateDifference()}</span>
              </NumberDate>
            </Inputs>
            <TypeVacation>
              <p>Тип отпуска:</p>
              <Radio>
                {typeArray.map((type, index) => (
                  <div key={index}>
                    <input
                      id={`vac_${index}`}
                      type='radio'
                      name='typeVacation'
                      onClick={() => setTypeVacation(type)}
                    />
                    <label htmlFor={`vac_${index}`}>{type}</label>
                  </div>
                ))}
              </Radio>
            </TypeVacation>
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
              <button onClick={goOnVacation}>Отправиться в отпуск</button>
            </EnterButton>
          </RequestBox>
        </Request>
      </Container>
    </GeneralContainer>
  )
}

export default Vacation
