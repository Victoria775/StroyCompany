import { useState } from 'react'
import NavBar from '../../nav-bar/nav-bar'
import LeftMenu from '../general-components/left-menu'
import Content from './componets/right-content'
import { NUMBER_PAGE } from '../../../constants/constant'
import { Container, InfoBlock, RightContent } from './director.styled'

const DirectorPage = ({ setIsLoading }) => {
  const [currentPage, setCurrentPage] = useState(NUMBER_PAGE.MY_DATA)

  const displayContent = [
    {
      id: 'dm1',
      name: 'Мои данные',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.MY_DATA)
      },
      checked: currentPage === NUMBER_PAGE.MY_DATA ? true : false,
    },
    {
      id: 'dm2',
      name: 'Отработанное время',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.WORK_DAYS)
      },
      checked: currentPage === NUMBER_PAGE.WORK_DAYS ? true : false,
    },
    {
      id: 'dm3',
      name: 'Сотрудники',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.WORKER_LIST)
      },
      checked: currentPage === NUMBER_PAGE.WORKER_LIST ? true : false,
    },
    {
      id: 'dm4',
      name: 'Отпуск',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.VACATION)
      },
      checked: currentPage === NUMBER_PAGE.VACATION ? true : false,
    },
    {
      id: 'dm5',
      name: 'Больничный',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.SICK_LIST)
      },
      checked: currentPage === NUMBER_PAGE.SICK_LIST ? true : false,
    },
    {
      id: 'dm6',
      name: 'Уведомления',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.NOTIFICATION)
      },
      checked: currentPage === NUMBER_PAGE.NOTIFICATION ? true : false,
    },
    {
      id: 'dm7',
      name: 'Написать письмо',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.MESSAGE)
      },
      checked: currentPage === NUMBER_PAGE.MESSAGE ? true : false,
    },
  ]

  return (
    <Container>
      <NavBar />
      <InfoBlock>
        <LeftMenu displayContent={displayContent} />
        <RightContent>
          <Content
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setIsLoading={setIsLoading}
          />
        </RightContent>
      </InfoBlock>
    </Container>
  )
}

export default DirectorPage
