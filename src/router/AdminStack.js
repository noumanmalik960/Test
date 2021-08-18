import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// screens imports
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Posts from '../screens/Posts'
import Users from '../screens/Users'
// icons imports
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const AdminStack = () => {
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

      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="post" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="users" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AdminStack