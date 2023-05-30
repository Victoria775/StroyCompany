import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(
    localStorage.getItem('token')
  )}`
  return config
})

export const getAllTasks = async () => {
  const response = await axiosInstance.get(`tasks`)
  return response.data
}

export const getUserTasks = async () => {
  const response = await axiosInstance.get(`tasksuser`)
  return response.data
}

export const createTask = async ({ text, userId }) => {
  const response = await axiosInstance.post(`task`, { text, userId })
  return response
}

export const removeTask = async ({ taskId }) => {
  const response = await axiosInstance.delete(`task/${taskId}`)
  return response
}

export const createUser = async ({
  firstName,
  lastName,
  fullName,
  role,
  userPosition,
  phone,
  mail,
  login,
  password,
  nameFiles,
}) => {
  const response = await axiosInstance.post(`user`, {
    firstName,
    lastName,
    fullName,
    role,
    userPosition,
    phone,
    mail,
    login,
    password,
    nameFiles,
  })
  return response
}

export const getUsersList = async () => {
  const response = await axiosInstance.get(`users`)
  return response.data
}

export const changeUserInfo = async ({ newInfo, userId }) => {
  const response = await axiosInstance.patch(`user/${userId}`, { newInfo })
  return response
}

export const removeUser = async ({ userId }) => {
  try {
    const response = await axiosInstance.delete(`user/${userId}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getAllApplications = async () => {
  const response = await axiosInstance.get(`applications`)
  return response.data
}

export const createApplication = async ({ application }) => {
  const response = await axiosInstance.post(`application`, application)
  return response
}

export const changeInfoApplication = async ({ newInfo, applicationId }) => {
  const response = await axiosInstance.patch(`application/${applicationId}`, {
    newInfo,
  })
  return response
}

export const removeApplication = async ({ applicationId }) => {
  const response = await axiosInstance.delete(`application/${applicationId}`)
  return response
}

export const getUserMessages = async () => {
  const response = await axiosInstance.get(`message`)
  return response.data
}

export const createMessage = async ({ message }) => {
  const response = await axiosInstance.post(`message`, message)
  return response
}

export const removeMessage = async ({ messageId }) => {
  const response = await axiosInstance.delete(`message/${messageId}`)
  return response
}

export const updateMessages = async (messages) => {
  const response = await axiosInstance.patch(`message`, { messages })
  return response
}
