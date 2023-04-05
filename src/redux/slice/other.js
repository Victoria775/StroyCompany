import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    changeCount(state, action) {
      state.count = action.payload
    },
  },
})

export default otherSlice.reducer
export const { changeCount } = otherSlice.actions
