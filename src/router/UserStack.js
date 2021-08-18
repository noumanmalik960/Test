import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// screens imports
import Home from '../screens/Home'
import Profile from '../screens/Profile'
// icons imports
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const UserStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default UserStack