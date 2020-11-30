import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import firebase from '../config/firebase';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User logged in');
        console.log(user);
        props.navigation.navigate('menu');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#ffa611',
    width: 200,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
