import Auth from './auth'
import {
  Container,
  Content,
  Header,
  NavBar,
  LeftBar,
  RightBar,
  CenterBar,
  LeftHead,
  RightHead,
} from './main.styled'
import imgg from '../../../img/workTable.jpg'

const MainPage = ({setIsLoading}) => {
  return (
    <Container>
      <Content>
        <NavBar>
          <LeftBar>
            <p>SPM company</p>
          </LeftBar>
          <CenterBar>
            <p>Сотрудникам</p>
            <p>Партнёрам</p>
            <p>О компании</p>
          </CenterBar>
          <RightBar>
            <Auth setIsLoading={setIsLoading}/>
          </RightBar>
        </NavBar>
        <Header>
          <LeftHead>
            <div>
              <p>SPM company</p>
              <p>
                Информационная система управления персоналом строительной
                компании
              </p>
            </div>
          </LeftHead>
          <RightHead>
            <img src={imgg} />
          </RightHead>
        </Header>
      </Content>
    </Container>
  )
}

export default MainPage
