import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import {
  Box,
  Arrow,
  InfoPerson,
  DopInfo,
  InfoBlock,
  InfoBlock2,
  InfoBlock3,
  TimeInput,
} from './person.styled'

const Person = ({ person, saveNewInfoUser }) => {
  const [isOpenInfo, setIsOpenInfo] = useState(false)

  const [isEdit, setIsEdit] = useState(false)
  const [valueInput, setValueInput] = useState('')

  const saveValueInput = () => {
    const time = Object.entries(person).reduce((acc, property) => {
      if (property[0].includes('time')) {
        acc[property[0]] = property[1]
      }
      return acc
    }, {})
    time[isEdit] = valueInput

    const vacation = {
      start_vacation: person.start_vacation,
      end_vacation: person.end_vacation,
    }

    saveNewInfoUser({ time, vacation, userId: person.id })
    setIsEdit(false)
    setValueInput('')
  }

  return (
    <Box>
      <InfoPerson onClick={() => setIsOpenInfo(!isOpenInfo)}>
        <p>
          {person.last_name} {person.first_name} {person.full_name}
        </p>
        <Arrow isOpen={isOpenInfo}>
          <IoIosArrowDown />
        </Arrow>
      </InfoPerson>
      {isOpenInfo && (
        <DopInfo>
          <InfoBlock>
            <p className='headerInfo'>Текущий месяц</p>
            <div>
              <p>Отработано:</p>
              {isEdit !== 'time_month_work' ? (
                <>
                  <span>{person.time_month_work} дн.</span>
                  <b onClick={() => setIsEdit('time_month_work')}>
                    <MdModeEdit />
                  </b>
                </>
              ) : (
                <TimeInput>
                  <input
                    type='number'
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <b onClick={() => saveValueInput()}>
                    <AiFillCheckCircle />
                  </b>
                </TimeInput>
              )}
            </div>
            <div>
              <p>На больничном:</p>
              {isEdit !== 'time_month_medical' ? (
                <>
                  <span>{person.time_month_medical} дн.</span>
                  <b onClick={() => setIsEdit('time_month_medical')}>
                    <MdModeEdit />
                  </b>
                </>
              ) : (
                <TimeInput>
                  <input
                    type='number'
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <b onClick={() => saveValueInput()}>
                    <AiFillCheckCircle />
                  </b>
                </TimeInput>
              )}
            </div>
            <div>
              <p>В отпуске:</p>
              {isEdit !== 'time_month_vacation' ? (
                <>
                  <span>{person.time_month_vacation} дн.</span>
                  <b onClick={() => setIsEdit('time_month_vacation')}>
                    <MdModeEdit />
                  </b>
                </>
              ) : (
                <TimeInput>
                  <input
                    type='number'
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <b onClick={() => saveValueInput()}>
                    <AiFillCheckCircle />
                  </b>
                </TimeInput>
              )}
            </div>
          </InfoBlock>
          <InfoBlock2>
            <div>
              <p className='headerInfo'>Планируемый отпуск</p>
              <p>c 10.06.22 по 24.06.22</p>
            </div>
          </InfoBlock2>
          <InfoBlock3>
            <p className='headerInfo'>Текущие задачи</p>
            <div>
              {person?.userTasks &&
                person.userTasks.map((task) => (
                  <p key={task.id}>{task.text}</p>
                ))}
            </div>
          </InfoBlock3>
        </DopInfo>
      )}
    </Box>
  )
}

export default Person
