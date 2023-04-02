import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cleanerLocal, setUserInfo } from '../../redux/slice/user'
import {
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from 'react-icons/io'
import { Container, LeftSide, RightSide } from './nav-bar.styled'
import { useEffect } from 'react'

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)

  const logOut = () => {
    navigate('/')
    dispatch(cleanerLocal())
  }

  useEffect(() => {
    if (
      !localStorage.getItem('token') ||
      !localStorage.getItem('fio') ||
      !localStorage.getItem('userId') ||
      !localStorage.getItem('role') ||
      !localStorage.getItem('time')
    ) {
      navigate('/')
      dispatch(cleanerLocal())
    }
    if (
      user.userId === '' && 
      localStorage.getItem('token') &&
      localStorage.getItem('fio') &&
      localStorage.getItem('userId') &&
      localStorage.getItem('role') &&
      localStorage.getItem('time')
    ) {
      dispatch(setUserInfo())
    }
  }, [user])

  return (
    <Container>
      <LeftSide>
        <p>SPM company</p>
      </LeftSide>
      <RightSide>
        <p>
          <IoIosHelpCircleOutline />
        </p>
        <p>
          <IoMdNotificationsOutline />
        </p>
        <button onClick={logOut}>Выйти</button>
      </RightSide>
    </Container>
  )
}

export default NavBar
