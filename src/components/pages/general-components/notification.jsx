import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getUserMessages,
  getAllApplications,
  changeInfoApplication,
  removeMessage,
  removeApplication,
} from '../../../api/user-info'
import { getDate } from '../../../utils/get-time'
import { NUMBER_PAGE } from '../../../constants/constant'
import { GeneralContainer } from './styled/general.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {
  Container,
  Head,
  Block,
  Head2,
  Box,
  ContentNot,
  ContentMes,
  Message,
  Notific,
  ButtonsDecl,
  ButtonDecl,
  ButtonsMes,
  ButtonMes,
  CloseIcon,
  File,
} from './styled/notification.styled'

const Notification = ({ setCurrentPage, setIsLoading }) => {
  const { role } = useSelector((state) => state.user)

  const [applications, setApplications] = useState([])
  const [messages, setMessages] = useState([])

  const getInfo = async () => {
    try {
      setIsLoading(true)
      const allApplications = await getAllApplications()
      const messages = await getUserMessages()

      messages.forEach((message) => {
        message.infoFile = JSON.parse(message.infoFile)
      })

      setApplications(allApplications)
      setMessages(messages)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const changeApplication = async (value, application) => {
    try {
      setIsLoading(true)
      const newInfo = {}
      if (value === 'одобрить') {
        newInfo.date_start = application.date_start
        newInfo.date_end = application.date_end
        newInfo.status = 'одобрена'
        newInfo.process = 'ожидание исполнения'
      }
      if (value === 'отклонить') {
        newInfo.date_start = application.date_start
        newInfo.date_end = application.date_end
        newInfo.status = 'отклонена'
        newInfo.process = 'истекла'
      }

      await changeInfoApplication({ newInfo, applicationId: application.id })
      await getInfo()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteMessage = async (messageId) => {
    try {
      setIsLoading(true)
      await removeMessage({ messageId })
      await getInfo()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteApplication = async (applicationId) => {
    try {
      setIsLoading(true)
      await removeApplication({ applicationId })
      await getInfo()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const downloadFile = ({ fileName, filePatch }) => {
    setIsLoading(true)
    fetch(`http://localhost:5070/filedownload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filePatch }),
    })
      .then((res) => /* res.blob() */ console.log(res))
      /* .then((data) => {
        let url = URL.createObjectURL(data)
        let anchor = document.createElement('a')
        anchor.href = url
        anchor.download = fileName
        document.body.append(anchor)
        anchor.style = 'display: none'
        anchor.click()
        anchor.remove()
      }) */
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const redirectPage = () => {
    setCurrentPage(NUMBER_PAGE.MESSAGE)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <GeneralContainer>
      <Container>
        <Head>Уведомления</Head>
        <Block>
          <Head2>Сообщения</Head2>
          <Box>
            {messages.length === 0 && 'Сообщений пока нет'}
            {messages.length > 0 &&
              messages.map((message) => (
                <ContentMes key={message.id}>
                  <CloseIcon onClick={() => deleteMessage(message.id)}>
                    <svg>
                      <AiOutlineCloseCircle />
                    </svg>
                  </CloseIcon>
                  <Message>
                    <div>
                      <p>От:</p>
                      <span>
                        {message.sender_last_name} {message.sender_first_name}{' '}
                        {message.sender_full_name}
                      </span>
                    </div>
                    <div>
                      <p>Сообщение:</p>
                      <span>{message.text}</span>
                    </div>
                    {!!message?.infoFile?.fileName && (
                      <File>
                        <p>Файл:</p>
                        <span>{message.infoFile.fileName}</span>
                        <button
                          onClick={() => {
                            // downloadFile({
                            //   fileName: message.infoFile.fileName,
                            //   filePatch: message.infoFile.filePatch,
                            // })
                          }}
                        >
                          Скачать файл
                        </button>
                      </File>
                    )}
                  </Message>
                  <ButtonsMes
                    onClick={() => {
                      redirectPage()
                    }}
                  >
                    <ButtonMes>Ответить</ButtonMes>
                  </ButtonsMes>
                </ContentMes>
              ))}
          </Box>
        </Block>
        {role === 'director' && (
          <Block>
            <Head2>Заявления</Head2>
            <Box>
              {applications.length === 0 && 'Заявлений пока нет'}
              {applications.length > 0 &&
                applications.map((application) => (
                  <ContentNot key={application.id}>
                    <CloseIcon
                      onClick={() => deleteApplication(application.id)}
                    >
                      <svg>
                        <AiOutlineCloseCircle />
                      </svg>
                    </CloseIcon>
                    <Notific>
                      <h3>
                        {application.category === 'vacation'
                          ? 'Отпуск'
                          : 'Больничный'}
                      </h3>
                      <p>
                        {application.last_name} {application.first_name}{' '}
                        {application.patronymic}
                      </p>
                      <span>
                        {application.date_end !== 0
                          ? `Дата: с ${getDate(application.date_start)} по 
                        ${getDate(application.date_end)}`
                          : `Дата: ${getDate(application.date_start)}`}
                      </span>
                      <span>Статус: {application.status}</span>
                      <span>Процесс: {application.process}</span>
                      <span>Комментарий: {application.comment}</span>
                    </Notific>
                    <ButtonsDecl>
                      <ButtonDecl
                        onClick={() =>
                          changeApplication('одобрить', application)
                        }
                        color={'green'}
                        isWaiting={
                          application.status === 'в ожидании' ? true : false
                        }
                      >
                        Одобрить
                      </ButtonDecl>
                      <ButtonDecl
                        onClick={() =>
                          changeApplication('отклонить', application)
                        }
                        color={'red'}
                        isWaiting={
                          application.status === 'в ожидании' ? true : false
                        }
                      >
                        Отклонить
                      </ButtonDecl>
                    </ButtonsDecl>
                  </ContentNot>
                ))}
            </Box>
          </Block>
        )}
      </Container>
    </GeneralContainer>
  )
}

export default Notification
