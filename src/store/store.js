import { configureStore } from '@reduxjs/toolkit'
import jwtReducer from './jwt.slice'

export const store = configureStore({
  reducer: {
    jwt: jwtReducer
  }
})