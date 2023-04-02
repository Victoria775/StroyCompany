import { useState } from 'react'
import Content from './right-content'
import NavBar from '../../nav-bar/nav-bar'
import { NUMBER_PAGE } from '../../../constants/constant'
import { Container, InfoBlock, RightContent } from './worker.styled'
import LeftMenu from '../general-components/left-menu'

const WorkerPage = ({setIsLoading}) => {
  const [currentPage, setCurrentPage] = useState(NUMBER_PAGE.MY_DATA)

  const displayContent = [
    {
      id: 'w1',
      name: 'Мои данные',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.MY_DATA)
      },
      checked: currentPage === NUMBER_PAGE.MY_DATA ? true : false,
    },
    {
      id: 'w2',
      name: 'Отработанное время',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.WORK_DAYS)
      },
      checked: currentPage === NUMBER_PAGE.WORK_DAYS ? true : false,
    },
    {
      id: 'w3',
      name: 'Отпуск',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.VACATION)
      },
      checked: currentPage === NUMBER_PAGE.VACATION ? true : false,
    },
    {
      id: 'w4',
      name: 'Больничный',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.SICK_LIST)
      },
      checked: currentPage === NUMBER_PAGE.SICK_LIST ? true : false,
    },
    {
      id: 'w5',
      name: 'Уведомления',
      saveFun() {
        setCurrentPage(NUMBER_PAGE.NOTIFICATION)
      },
      checked: currentPage === NUMBER_PAGE.NOTIFICATION ? true : false,
    },
    {
      id: 'w6',
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
          <Content currentPage={currentPage} setCurrentPage={setCurrentPage} setIsLoading={setIsLoading} />
        </RightContent>
      </InfoBlock>
    </Container>
  )
}

export default WorkerPage
