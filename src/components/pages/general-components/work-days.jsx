import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUsersList } from './../../../api/user-info'
import { GeneralContainer } from './styled/general.styled'
import {
  Container,
  Box,
  Head,
  Info1,
  Block,
  Block2,
} from './styled/work-days.styled'

const WorkDays = ({ setIsLoading }) => {
  const { userId, time } = useSelector((state) => state.user)
  const [userInfo, setUserInfo] = useState({})

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const users = await getUsersList()
      const user = users.find((user) => user.id === userId)
      setUserInfo(user)
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
        <Block>
          <Head>Текущий месяц</Head>
          <Info1>
            <Box>
              <p>Отработано:</p>
              <span>{userInfo.time_month_work} дн.</span>
            </Box>
            <Box>
              <p>На больничном:</p>
              <span>{userInfo.time_month_medical} дн.</span>
            </Box>
            <Box>
              <p>В отпуске:</p>
              <span>{userInfo.time_month_vacation} дн.</span>
            </Box>
          </Info1>
        </Block>
        <Block2>
          <Head>Год</Head>
          <Info1>
            <Box>
              <p>Отработано:</p>
              <span>{userInfo.time_year_work} дн.</span>
            </Box>
            <Box>
              <p>На больничном:</p>
              <span>{userInfo.time_year_medical} дн.</span>
            </Box>
            <Box>
              <p>В отпуске:</p>
              <span>{userInfo.time_year_vacation} дн.</span>
            </Box>
          </Info1>
        </Block2>
      </Container>
    </GeneralContainer>
  )
}

export default WorkDays
