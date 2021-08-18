import React from 'react'
import Login from './src/screens/Login'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Router from './src/router'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
