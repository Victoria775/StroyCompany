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

export const postFile = async (data) => {
  const response = await axiosInstance.post(
    `file`,
    data
    // {
    //   headers: {
    //     // 'Content-Type': file.type,
    //     // 'Content-Length': `${file.size}`,
    //     'Content-Type': 'multipart/form-data'
    //   },
    // }
  )
  return response
}
