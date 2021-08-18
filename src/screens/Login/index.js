import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useDispatch } from 'react-redux'
import { addJwtToken } from '../../store/jwt.slice'


const Login = () => {
  const [usertype, setUsertype] = React.useState('nonadmin');
  // Email and Password fields are pre-filled with correct values for convinience
  const [email, setEmail] = React.useState('test@gmail.com')
  const [password, setPassword] = React.useState('testing123')

  const dispatch = useDispatch()

  const submitData = async () => {
    // "10.0.2.2" is the IP of "Android emulator". If you are using physical
    // device or "IOS emulator", use a different IP accordingly, else it won't work.
    await fetch(`http://10.0.2.2:3000/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data === "Incorrect password" || data === "Cannot find user") {
          Alert.alert("Email or Password is incorrect!", `Hint:\nEmail => test@gmail.com\nPassword => testing123`)
        }
        else
          dispatch(addJwtToken({ token: data.accessToken, type: usertype }))
      })
      .catch(() => alert("Got an Error!"))
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
      />

      <Picker
        selectedValue={usertype}
        onValueChange={(value) => setUsertype(value)}
      >
        <Picker.Item label="User" value="nonadmin" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>

      <Button title="LOGIN" onPress={submitData} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: "100%",
    backgroundColor: 'lightgrey',
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey'
  }
})

export default Login
