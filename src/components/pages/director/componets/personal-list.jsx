import { useEffect, useState } from 'react'
import {
  getUsersList,
  getAllTasks,
  changeUserInfo,
  removeUser,
} from '../../../../api/user-info'
import { GeneralContainer } from '../../general-components/styled/general.styled'
import Person from './person'
import AddUserModal from './add-user-modal'
import {
  Box,
  BoxAddUser,
  Container,
  Head,
  ListPersonal,
} from './styled/personal-list.styled'
import ListDocumentModal from './list-document-modal'
import AddDocumentModal from './add-document-modal'

const PersonalList = ({ setIsLoading }) => {
  const [workers, setWorkers] = useState([])
  const [directors, setDirectors] = useState([])
  const [isShowAddModal, setIsShowAddModal] = useState(false)
  const [isShowListDocument, setIsShowListDocument] = useState(false)
  const [isShowAddModalDocument, setIsShowAddModalDocument] = useState(false)
  const [selectPerson, setSelectPerson] = useState(null)

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

  const saveUserFile = async ({ nameFiles, userId }) => {
    try {
      setIsLoading(true)
      const newInfo = { nameFiles }
      await changeUserInfo({ newInfo, userId })
      await getUsers()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenListDoc = (person) => {
    setSelectPerson(person)
    setIsShowListDocument(true)
  }

  const handleCloseListDoc = () => {
    setSelectPerson(null)
    setIsShowListDocument(false)
  }

  const handleOpenAddDoc = (person) => {
    setSelectPerson(person)
    setIsShowAddModalDocument(true)
  }

  const handleCloseAddDoc = () => {
    setSelectPerson(null)
    setIsShowAddModalDocument(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <GeneralContainer>
      <Container>
        <Head>Список сотрудников</Head>
        <BoxAddUser>
          <button onClick={() => setIsShowAddModal(true)}>
            Добавить нового сотрудника
          </button>
        </BoxAddUser>
        <Box>
          <ListPersonal>
            {workers.map((worker) => (
              <Person
                key={worker.id}
                person={worker}
                saveNewInfoUser={saveNewInfoUser}
                deleteUser={deleteUser}
                handleOpenListDoc={handleOpenListDoc}
                handleOpenAddDoc={handleOpenAddDoc}
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
                handleOpenListDoc={handleOpenListDoc}
                handleOpenAddDoc={handleOpenAddDoc}
              />
            ))}
          </ListPersonal>
        </Box>
      </Container>
      {isShowAddModal && (
        <AddUserModal
          setIsShowAddModal={setIsShowAddModal}
          setIsLoading={setIsLoading}
          getUsers={getUsers}
        />
      )}
      {isShowListDocument && (
        <ListDocumentModal
          handleCloseListDoc={handleCloseListDoc}
          selectPerson={selectPerson}
        />
      )}
      {isShowAddModalDocument && (
        <AddDocumentModal
          handleCloseAddDoc={handleCloseAddDoc}
          saveUserFile={saveUserFile}
          selectPerson={selectPerson}
        />
      )}
    </GeneralContainer>
  )
}

export default PersonalList
