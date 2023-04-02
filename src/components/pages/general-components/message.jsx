import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { createMessage, getUsersList } from '../../../api/user-info'
import { GeneralContainer } from './styled/general.styled'
import {
  Container,
  TextInput,
  TextTextarea,
  File,
  EnterButton,
  Input,
  DropdownUsersList,
  BackgroundDrop,
  User,
} from './styled/message.styled'
import { postFile, downloadFile } from '../../../api/post-file'

const Message = ({ setIsLoading }) => {
  const { userId, fio } = useSelector((state) => state.user)
  const [recipient, setRecipient] = useState('')
  const [text, setText] = useState('')
  const [recipientId, setRecipientId] = useState('')
  const [usersList, setUsersList] = useState([])
  const [isShowUsersList, setShowUsersList] = useState(false)
  const [file, setFile] = useState(null)

  const refInputFile = useRef(null)

  const [fileList, setFileList] = useState(null)

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const users = await getUsersList()
      setUsersList(users)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeRecipient = (value, userId) => {
    setRecipient(value)
    setRecipientId(userId)
    setShowUsersList(false)
  }

  const handleChangeFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const cleanFile = () => {
    setFile(null)
    refInputFile.current.value = ''
  }

  const helperSendMessage = async () => {
    if (file) {
      await handleUploadFile()
    } else {
      await SendMessage({ infoFile: {} })
    }
  }

  const handleUploadFile = async () => {
    try {
      setIsLoading(true)
      if (!file) {
        return
      }
      const data = new FormData()
      data.append('file', file)

      const resp = await postFile(data)
      await SendMessage({ infoFile: resp.data })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const SendMessage = async ({ infoFile }) => {
    try {
      setIsLoading(true)
      const message = {
        userId: recipientId,
        senderId: userId,
        senderFio: fio,
        text,
        infoFile: JSON.stringify(infoFile),
      }

      await createMessage({ message })
      setText('')
      setRecipient('')
      cleanFile()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  // const handleFileChange = (e) => {
  //   setFileList(e.target.files)
  // }

  // const files = fileList ? [...fileList] : []

  // const handleUploadClick = async () => {
  //   if (!fileList) {
  //     return
  //   }

  //   const data = new FormData()
  //   files.forEach((file, i) => {
  //     data.append(`file-${i}`, file, file.name)
  //   })

  //   data.append(`file-1`, file)

  //   const resp = await postFile(data)
  //   console.log('ответ загрузки файла = ', resp)
  // }

  return (
    <GeneralContainer onClick={() => setShowUsersList(false)}>
      <Container>
        <TextInput>
          <p>Кому:</p>
          <Input onClick={(e) => e.stopPropagation()}>
            <p>
              <input
                placeholder='Фамилия Имя Отчество'
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                onClick={() => setShowUsersList(true)}
              />
            </p>
            {isShowUsersList && (
              <DropdownUsersList>
                <BackgroundDrop>
                  {usersList.map((user) => (
                    <User
                      onClick={() =>
                        handleChangeRecipient(
                          `${user.last_name} ${user.first_name} ${user.full_name}`,
                          user.id
                        )
                      }
                      key={user.id}
                      onChange={() => console.log('change')}
                    >
                      <p>
                        {user.last_name} {user.first_name} {user.full_name}
                      </p>
                      <p>
                        {user.role === 'worker' ? 'Рабочий' : 'Руководитель'}
                      </p>
                    </User>
                  ))}
                </BackgroundDrop>
              </DropdownUsersList>
            )}
          </Input>
        </TextInput>
        <TextTextarea>
          <p>Сообщение:</p>
          <div>
            <textarea
              placeholder='Введите текст'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </TextTextarea>
        <File>
          <div>
            <input
              name='inputFile'
              type='file'
              onChange={handleChangeFile}
              ref={refInputFile}
              // multiple
            />
            <span onClick={cleanFile}>X</span>
          </div>
          {/* <ul>
            {files.map((file, i) => (
              <li key={i}>
                {file.name} - {file.type}
              </li>
            ))}
          </ul> */}
        </File>
        <EnterButton>
          <button onClick={helperSendMessage}>Отправить</button>
        </EnterButton>
      </Container>
    </GeneralContainer>
  )
}

export default Message
