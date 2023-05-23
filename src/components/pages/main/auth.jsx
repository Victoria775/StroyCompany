import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, registrationUser } from '../../../redux/slice/user'
import {
  AuthButtons,
  Modal,
  InfoWindow,
  ClouseIcon,
  Head,
  Input,
  EnterButton,
  ChooseRole,
} from './auth.styled'

const Auth = ({ setIsLoading }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [windowLogin, setWindowLogin] = useState(false)
  const [windowRegistration, setWindowRegistration] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')
  const [authorized, setAuthorized] = useState(
    localStorage.getItem('token') ? true : false
  )

  const redirectPage = () => {
    if (JSON.parse(localStorage.getItem('role')) === 'worker') {
      navigate('/worker')
    }
    if (JSON.parse(localStorage.getItem('role')) === 'director') {
      navigate('/director')
    }
  }

  const clouseWindow = () => {
    setLogin('')
    setPassword('')
    setRole('')
    setLastName('')
    setFirstName('')
    setFullName('')
    setWindowLogin(false)
    setWindowRegistration(false)
  }

  const saveData = (orientation) => {
    setIsLoading(true)
    if (orientation === 'login') {
      dispatch(
        loginUser({
          login,
          password,
        })
      )
        .then((resp) => {
          if (resp) {
            setIsLoading(false)
            clouseWindow()
            redirectPage()
          }
        })
        .catch(() => console.log('ошииибка'))
    }
    if (orientation === 'registration') {
      const fio = {
        first_name: firstName,
        last_name: lastName,
        full_name: fullName,
      }
      dispatch(
        registrationUser({
          login,
          password,
          role,
          fio,
        })
      )
        .then((resp) => {
          if (resp) {
            setIsLoading(false)
            clouseWindow()
            redirectPage()
          }
        })
        .catch(() => console.log('ошииибка'))
    }
  }

  return (
    <>
      <AuthButtons>
        {!authorized && (
          <>
            <button onClick={() => setWindowRegistration(true)}>
              Регистрация
            </button>
            <button onClick={() => setWindowLogin(true)}>Войти</button>
          </>
        )}
        {authorized && (
          <button onClick={() => redirectPage()}>Личный кабинет</button>
        )}
      </AuthButtons>
      {(windowLogin || windowRegistration) && (
        <Modal onClick={clouseWindow}>
          <InfoWindow
            onClick={(e) => e.stopPropagation()}
            locationUs={windowLogin ? 'login' : 'registration'}
          >
            <ClouseIcon onClick={clouseWindow}>X</ClouseIcon>
            <Head>
              {windowLogin && <p>Вход в аккаунт</p>}
              {windowRegistration && <p>Регистрация</p>}
            </Head>
            <Input>
              <p>Логин:</p>
              <input
                id='input_1'
                type='text'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder='Введите логин'
              />
            </Input>

            <Input>
              <p>Пароль:</p>
              <input
                id='input_2'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Введите пароль'
                onKeyDown={(e) => {
                  if (windowLogin && (e.code === 'Enter' || e.key === '13')) {
                    saveData('login')
                  }
                }}
              />
            </Input>

            {windowRegistration && (
              <>
                <Input>
                  <p>Имя:</p>
                  <input
                    id='input_first_name'
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Введите имя'
                  />
                </Input>
                <Input>
                  <p>Фамилия:</p>
                  <input
                    id='input_last_name'
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Введите фамилию'
                  />
                </Input>
                <Input>
                  <p>Отчество:</p>
                  <input
                    id='input_full_name'
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder='Введите отчество'
                  />
                </Input>
              </>
            )}

            {windowRegistration && (
              <ChooseRole>
                <p>
                  <input
                    id='role1'
                    type='radio'
                    name='role'
                    onClick={() => setRole('worker')}
                  />
                  <label htmlFor='role1'>Персонал</label>
                </p>

                <p>
                  <input
                    id='role2'
                    type='radio'
                    name='role'
                    onClick={() => setRole('director')}
                  />
                  <label htmlFor='role2'>Руководитель</label>
                </p>
              </ChooseRole>
            )}

            <EnterButton>
              <button
                onClick={() => {
                  windowLogin && saveData('login')
                  windowRegistration && saveData('registration')
                }}
                type='submit'
              >
                {windowLogin && 'Войти'}
                {windowRegistration && 'Зарегистрироваться'}
              </button>
            </EnterButton>
          </InfoWindow>
        </Modal>
      )}
    </>
  )
}

export default Auth
