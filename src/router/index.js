import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Login from '../screens/Login';
import AdminStack from './AdminStack';
import UserStack from './UserStack';


const Router = () => {
  // Checks if user type is "admin" or not.
  const isAdmin = useSelector(state =>
    state.jwt.userType === 'admin' ? true : false
  )

  // Checks if store contains JWT token or not
  const containsUser = useSelector(state =>
    state.jwt.token === '' ? false : true
  )

  // if there is no jwt token in store, it will show LOGIN screen
  if (!containsUser) {
    return <Login />
  }
  // Routing to different Stacks will be based on "ROLE" (i-e admin or non-admin)
  else
    return (
      <NavigationContainer>
        {isAdmin ? <AdminStack /> : <UserStack />}
      </NavigationContainer>
    )
}

export default Router
