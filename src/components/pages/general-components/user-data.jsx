import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import { createTask, removeTask, getUserTasks } from '../../../api/user-info'
import userDefFoto from '../../../img/fotoDef.png'
import { GeneralContainer } from './styled/general.styled'
import {
  Container,
  UserInfo,
  Avatar,
  Fio,
  TasksContainer,
  Task,
  HeadTasks,
  TasksList,
  AddTask,
  AddIcon,
  AddInput,
} from './styled/user-data.styled'

const UserData = ({ setIsLoading }) => {
  const { userId, fio } = useSelector((state) => state.user)

  const [tasksList, setTasksList] = useState([])
  const [isAddedTask, setIsAddedTask] = useState(false)
  const [valueNewTask, setValueNewTask] = useState('')

  const getTasks = async () => {
    try {
      setIsLoading(true)
      const tasks = await getUserTasks()
      setTasksList(tasks)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveNewTask = async () => {
    try {
      setIsLoading(true)
      await createTask({ text: valueNewTask, userId })
      await getTasks()

      setValueNewTask('')
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (taskId) => {
    try {
      setIsLoading(true)
      await removeTask({ taskId })
      await getTasks()

      setIsAddedTask(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks()
  }, [fio])

  return (
    <GeneralContainer>
      <Container>
        <UserInfo>
          <Avatar>
            <img src={userDefFoto}></img>
          </Avatar>
          <Fio>
            <span>{fio.last_name || '0'} </span>
            <span>{fio.first_name || '0'} </span>
            <span>{fio.full_name || '0'} </span>
          </Fio>
        </UserInfo>
        <TasksContainer>
          <HeadTasks>Текущие задачи</HeadTasks>
          <TasksList>
            {tasksList.length > 0 &&
              tasksList.map((task) => (
                <Task key={task.id}>
                  <p>{task.text}</p>
                  <span onClick={() => deleteTask(task.id)}>
                    <IoClose />
                  </span>
                </Task>
              ))}
            <AddTask>
              {!isAddedTask && (
                <AddIcon onClick={() => setIsAddedTask(true)}>
                  <MdOutlineAddCircleOutline />
                </AddIcon>
              )}
              {isAddedTask && (
                <AddInput>
                  <p>
                    <input
                      placeholder='Введите задачу...'
                      value={valueNewTask}
                      onChange={(e) => setValueNewTask(e.target.value)}
                    />
                  </p>
                  <span onClick={() => saveNewTask()}>
                    <AiFillCheckCircle />
                  </span>
                </AddInput>
              )}
            </AddTask>
          </TasksList>
        </TasksContainer>
      </Container>
    </GeneralContainer>
  )
}

export default UserData
