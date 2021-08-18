import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Users = () => {
  return (
    <View style={styles.root}>
      <Text>This is Users screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
})

export default Users
