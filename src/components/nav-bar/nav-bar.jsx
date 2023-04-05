import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useGetMes from '../../hooks/useGetMes'
import { cleanerLocal, setUserInfo } from '../../redux/slice/user'
import { changeCount } from '../../redux/slice/other'
import { NUMBER_PAGE } from '../../constants/constant'
import {
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from 'react-icons/io'
import { Container, LeftSide, RightSide } from './nav-bar.styled'

const NavBar = ({ setCurrentPage }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const count = useGetMes()

  const user = useSelector((state) => state.user)

  const logOut = () => {
    navigate('/')
    dispatch(cleanerLocal())
  }

  const redirectPage = () => {
    setCurrentPage(NUMBER_PAGE.NOTIFICATION)
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

  useEffect(() => {
    dispatch(changeCount(count))
  }, [count])

  return (
    <Container>
      <LeftSide>
        <p>SPM company</p>
      </LeftSide>
      <RightSide>
        <p>
          <IoIosHelpCircleOutline />
        </p>
        <p onClick={redirectPage}>
          <IoMdNotificationsOutline />
          {count !== 0 && <span>{count}</span>}
        </p>
        <button onClick={logOut}>Выйти</button>
      </RightSide>
    </Container>
  )
}

export default NavBar
