import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const registration = async ({
  login,
  password,
  fio,
  role,
  nameFiles,
}) => {
  const userData = {
    login,
    password,
    fio,
    role,
    nameFiles,
  }
  const response = await axiosInstance.post(`registration`, userData)
  return response.data
}
export const logining = async ({ login, password }) => {
  const userData = {
    login,
    password,
  }
  const response = await axiosInstance.post(`login`, userData)
  return response.data
}

export const deleteUser = async ({ userId }) => {
  const response = axiosInstance.delete(`user/${userId}`)
  return response
}
