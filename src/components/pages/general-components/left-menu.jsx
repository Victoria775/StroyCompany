import { useSelector } from 'react-redux'
import { Box, Container, CheckText } from './styled/left-menu.styled'

const LeftMenu = ({ displayContent }) => {
  const { count } = useSelector((state) => state.other)

  return (
    <Box>
      <Container>
        {displayContent.map((content) => {
          return (
            <CheckText
              key={content.id}
              onClick={() => content.saveFun()}
              checked={content.checked}
            >
              <p>{content.name}</p>
              {content.name === 'Уведомления' && count !== 0 && (
                <span>{count}</span>
              )}
            </CheckText>
          )
        })}
      </Container>
    </Box>
  )
}

export default LeftMenu
