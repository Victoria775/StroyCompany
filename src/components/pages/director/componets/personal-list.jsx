import { useEffect, useState } from 'react'
import {
  getUsersList,
  getAllTasks,
  changeUserInfo,
  removeUser,
} from '../../../../api/user-info'
import { GeneralContainer } from '../../general-components/styled/general.styled'
import Person from './person'
import { Container, Head, Box, ListPersonal } from './personal-list.styled'

const PersonalList = ({ setIsLoading }) => {
  const [workers, setWorkers] = useState([])
  const [directors, setDirectors] = useState([])

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const users = await getUsersList()
      const tasks = await getAllTasks()

      const changeUsers = users.reduce((acc, user) => {
        const updateUser = { ...user }

        tasks.map((task) => {
          if (task.userId === user.id) {
            if (updateUser.userTasks) {
              updateUser.userTasks.push(task)
            } else {
              updateUser.userTasks = [task]
            }
          }
        })
        acc.push(updateUser)
        return acc
      }, [])

      const workers = changeUsers.filter((user) => user.role === 'worker')
      const directors = changeUsers.filter((user) => user.role === 'director')
      setWorkers(workers)
      setDirectors(directors)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveNewInfoUser = async ({ time, vacation, userId }) => {
    try {
      setIsLoading(true)
      const newInfo = { time, vacation }
      await changeUserInfo({ newInfo, userId })
      await getUsers()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteUser = async ({ userId }) => {
    try {
      setIsLoading(true)
      await removeUser({ userId })
      await getUsers()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <GeneralContainer>
      <Container>
        <Head>Список сотрудников</Head>
        <Box>
          <h3>Рабочие</h3>
          <ListPersonal>
            {workers.map((worker) => (
              <Person
                key={worker.id}
                person={worker}
                saveNewInfoUser={saveNewInfoUser}
                deleteUser={deleteUser}
              />
            ))}
          </ListPersonal>
        </Box>
        <Box>
          <h3>Руководители</h3>
          <ListPersonal>
            {directors.map((director) => (
              <Person
                key={director.id}
                person={director}
                saveNewInfoUser={saveNewInfoUser}
                deleteUser={deleteUser}
              />
            ))}
          </ListPersonal>
        </Box>
      </Container>
    </GeneralContainer>
  )
}

export default PersonalList
