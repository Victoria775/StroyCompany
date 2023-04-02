import { Box, CheckText } from './styled/left-menu.styled'

const LeftMenu = ({ displayContent }) => {
  return (
    <Box>
      <div>
        {displayContent.map((content) => {
          return (
            <CheckText
              key={content.id}
              onClick={() => content.saveFun()}
              checked={content.checked}
            >
              {content.name}
            </CheckText>
          )
        })}
      </div>
    </Box>
  )
}

export default LeftMenu
