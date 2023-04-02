import { combineReducers } from '@reduxjs/toolkit'
import user from './slice/user'

const reducers = combineReducers({
  user,
})

export default reducers
