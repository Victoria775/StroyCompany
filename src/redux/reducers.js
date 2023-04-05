import { combineReducers } from '@reduxjs/toolkit'
import user from './slice/user'
import other from './slice/other'

const reducers = combineReducers({
  user,
  other
})

export default reducers
