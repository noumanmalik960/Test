import { createSlice } from '@reduxjs/toolkit'

export const jwtSlice = createSlice({
  name: 'jwt',
  initialState: {
    token: '',
    userType: 'nonadmin'
  },
  reducers: {
    addJwtToken: (state, action) => {
      state.token = action.payload.token
      state.userType = action.payload.type
    },
  }
})

export const { addJwtToken } = jwtSlice.actions
export default jwtSlice.reducer