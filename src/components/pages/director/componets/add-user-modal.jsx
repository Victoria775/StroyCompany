import { useState } from 'react'
import { createUser } from '../../../../api/user-info'
import { ChooseRole, ClouseIcon, Modal } from '../../main/auth.styled'
import {
  BoxContract,
  BoxSelect,
  ContentBox,
  Head,
  Input,
  GorizontalBox,
  Role,
  SaveBox,
} from './styled/add-user-modal.styled'
import { useRef } from 'react'
import { NAMES_FILES_USER } from '../../../../constants/constant'

const AddUserModal = ({ setIsShowAddModal, setIsLoading, getUsers }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState('')
  const [userPosition, setUserPosition] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [nameFile, setNameFile] = useState('')
  const refInputFile = useRef(null)

  const clouseWindow = () => {
    setIsShowAddModal(false)
  }

  const handleChangeFile = (e) => {
    if (e.target.files) {
      setNameFile(e.target.files[0].name)
    }
  }

  const saveUser = async () => {
    try {
      setIsLoading(true)
      const nameFiles = [...NAMES_FILES_USER]
      if (nameFile) {
        nameFiles.push(nameFile)
      }
      await createUser({
        firstName,
        lastName,
        fullName,
        role,
        userPosition,
        phone,
        mail,
        login,
        password,
        nameFiles: JSON.stringify(nameFiles),
      })
      await getUsers()
      clouseWindow()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal onClick={clouseWindow}>
      <ContentBox onClick={(e) => e.stopPropagation()}>
        <ClouseIcon onClick={clouseWindow}>X</ClouseIcon>
        <Head>
          <p>Добавление нового сотрудника</p>
        </Head>
        <Input>
          <p>Фамилия</p>
          <input
            id='input_ln'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Фамилия'
          />
        </Input>
        <Input>
          <p>Имя</p>
          <input
            id='input_fn'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Имя'
          />
        </Input>
        <Input>
          <p>Отчество</p>
          <input
            id='input_fuln'
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Отчество'
          />
        </Input>
        <Role>
          <p className='head'>Роль</p>
          <ChooseRole className='choose'>
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
          <BoxSelect>
            <select
              onChange={(e) => {
                if (
                  e?.nativeEvent?.target?.value
                    .toLowerCase()
                    .includes('выбрать')
                ) {
                  setUserPosition('')
                } else {
                  setUserPosition(e?.nativeEvent?.target?.value)
                }
              }}
            >
              <option>-- Выбрать должность --</option>
              <option>Мастер</option>
              <option>Прораб</option>
              <option>Экономист</option>
              <option>Сотрудник отдела продаж</option>
              <option>Сотрудник отдела кадров</option>
              <option>Менеджер по закупкам</option>
              <option>Менеджер по закупкам</option>
              <option>Руководитель отдела продаж</option>
              <option>Руководитель строительного отдела</option>
            </select>
          </BoxSelect>
        </Role>

        <GorizontalBox>
          <Input>
            <p>Телефон</p>
            <input
              id='input_ph'
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Телефон'
            />
          </Input>
          <Input>
            <p>Эл. почта</p>
            <input
              id='input_ma'
              type='text'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder='Эл. почта'
            />
          </Input>
        </GorizontalBox>

        <GorizontalBox>
          <Input>
            <p>Логин</p>
            <input
              id='input_log'
              type='text'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder='Логин'
            />
          </Input>
          <Input>
            <p>Пароль</p>
            <input
              id='input_pas'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Пароль'
            />
          </Input>
        </GorizontalBox>
        <BoxContract>
          <p>Прикрепить договор / документ</p>
          <input
            name='inputFile'
            type='file'
            onChange={handleChangeFile}
            ref={refInputFile}
          />
        </BoxContract>
        <SaveBox>
          <button onClick={saveUser}>Добавить сотрудника</button>
        </SaveBox>
      </ContentBox>
    </Modal>
  )
}
export default AddUserModal
