import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert, ScrollView, Image
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import firebase from '../config/firebase';
global.role = "Admin"
const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  state = { isFocused: true };


  const loginUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User logged in');
        // console.log(user);
        props.navigation.navigate('menu');
      })
      .catch((error) => {

        console.log(error.message);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/login.png')}
          resizeMode="center"
          style={styles.image} />
        <Text style={styles.textTitle}>Welcome</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: 20 }} />


        <View style={[styles.containerI, { borderColor: '#0779ef' }]}>
          <Input
            placeholder="Email"

            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            onChangeText={(email) => setEmail(email)}
            name="email" value={email}
            leftIcon={
              <Icon
                name="user"
                size={22}
                color='#0779e4'
              />
            }
          />
        </View>

        <View style={[styles.containerI, { borderColor: '#0779ef' }]}>
          <Input
            placeholder="Password"

            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            name="password" value={password}
            leftIcon={
              <Icon
                name="lock"
                size={22}
                color={'#0779e4'}
              />
            }
          />
        </View>


        <View style={{ width: '90%' }}>
          <Text style={[styles.textBody], { alignSelf: 'flex-end' }}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={loginUser}>
          <Text style={styles.buttonText}>Login</Text>

        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerI: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5
  },
  inputContainer: {
    borderBottomWidth: 0
  },
  inputText: {
    color: '#0779e4',
    fontWeight: 'bold',
    marginLeft: 5
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 10,
  }, buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  }, button: {
    marginTop: 10,
    backgroundColor: 'black',
    width: 200,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  textBody: {
    fontSize: 16
  }
});
