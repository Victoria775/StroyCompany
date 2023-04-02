import { useSelector } from 'react-redux'
import { GeneralContainer } from './styled/general.styled'
import { Container, Box, Head, Info1, Block, Block2 } from './styled/work-days.styled'

const WorkDays = () => {
  const { time } = useSelector((state) => state.user)

  return (
    <GeneralContainer>
      <Container>
        <Block>
          <Head>Текущий месяц</Head>
          <Info1>
            <Box>
              <p>Отработано:</p>
              <span>{time.current_month.work} дн.</span>
            </Box>
            <Box>
              <p>На больничном:</p>
              <span>{time.current_month.medical} дн.</span>
            </Box>
            <Box>
              <p>В отпуске:</p>
              <span>{time.current_month.vacation} дн.</span>
            </Box>
          </Info1>
        </Block>
        <Block2>
          <Head>Год</Head>
          <Info1>
            <Box>
              <p>Отработано:</p>
              <span>{time.year.work} дн.</span>
            </Box>
            <Box>
              <p>На больничном:</p>
              <span>{time.year.medical} дн.</span>
            </Box>
            <Box>
              <p>В отпуске:</p>
              <span>{time.year.vacation} дн.</span>
            </Box>
          </Info1>
        </Block2>
      </Container>
    </GeneralContainer>
  )
}

export default WorkDays
