import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registration, logining, deleteUser } from '../../api/auth'

const initialState = {
  userId: '',
  fio: {
    last_name: '',
    first_name: '',
    full_name: '',
  },
  role: 'director',
  time: {},
  loadingAuth: false,
  errorAuth: null,
}

export const registrationUser = createAsyncThunk(
  'user/registrationUser',
  async function (
    { login, password, fio, role, nameFiles },
    { rejectWithValue }
  ) {
    try {
      const response = await registration({
        login,
        password,
        fio,
        role,
        nameFiles,
      })
      return response
    } catch (error) {
      console.log('Ошибка регистрации: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async function ({ login, password }, { rejectWithValue }) {
    try {
      const response = await logining({ login, password })
      return response
    } catch (error) {
      console.log('Ошибка логина юзера: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async function ({ userId }, { rejectWithValue }) {
    try {
      const response = await deleteUser({ userId })
      return response
    } catch (error) {
      console.log('Ошибка удаления юзера: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    cleanerLocal(state) {
      state.userId = initialState.userId
      state.fio = initialState.fio
      state.role = initialState.role
      state.time = initialState.time

      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('fio')
      localStorage.removeItem('role')
      localStorage.removeItem('time')
    },
    setUserInfo(state) {
      const userId = localStorage.getItem('userId')
      const fio = localStorage.getItem('fio')
      const role = localStorage.getItem('role')
      const time = localStorage.getItem('time')
      if (userId) {
        state.userId = JSON.parse(userId)
      }
      if (fio) {
        state.fio = JSON.parse(fio)
      }
      if (role) {
        state.role = JSON.parse(role)
      }
      if (time) {
        state.time = JSON.parse(time)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.fio = action.payload.fio
        state.role = action.payload.role
        state.time = action.payload.time

        localStorage.setItem('token', JSON.stringify(action.payload.token))
        localStorage.setItem('userId', JSON.stringify(action.payload.userId))
        localStorage.setItem('fio', JSON.stringify(action.payload.fio))
        localStorage.setItem('role', JSON.stringify(action.payload.role))
        localStorage.setItem('time', JSON.stringify(action.payload.time))
        state.loadingAuth = false
      })
      .addCase(loginUser.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })

      .addCase(registrationUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.fio = action.payload.fio
        state.role = action.payload.role
        state.time = action.payload.time

        localStorage.setItem('token', JSON.stringify(action.payload.token))
        localStorage.setItem('userId', JSON.stringify(action.payload.userId))
        localStorage.setItem('fio', JSON.stringify(action.payload.fio))
        localStorage.setItem('role', JSON.stringify(action.payload.role))
        localStorage.setItem('time', JSON.stringify(action.payload.time))
        state.loadingAuth = false
      })
      .addCase(registrationUser.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.loadingAuth = false
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })
  },
})

export default userSlice.reducer
export const { cleanerLocal, setUserInfo } = userSlice.actions
