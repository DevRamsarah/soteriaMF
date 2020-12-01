import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert, ScrollView
} from 'react-native';

import firebase from '../config/firebase';

const SignupScreen = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [nid, setNid] = useState('');

  const signupUser = () => {
    const empRef = firebase.firestore().collection('employees');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        console.log('User created, UID= ', uid);
        response.user.updateProfile({
          displayName: fname,
        })

        const empObj = {
          fname,
          lname,
          nid,
          email,
          position,

        };
        empRef
          .doc(uid)
          .set(empObj)
          .then(() => {
            console.log('User added successfully');
            alert('User added successfully');

          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message)

      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

        <TextInput
          style={styles.input}
          placeholder={'First Name'}
          value={fname}
          onChangeText={(fname) => setFname(fname)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Last Name'}
          value={lname}
          onChangeText={(lname) => setLname(lname)}
        />
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

        <TextInput
          style={styles.input}
          placeholder={'NID'}
          value={nid}
          onChangeText={(nid) => setNid(nid)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Position'}
          value={position}
          onChangeText={(position) => setPosition(position)}
        />

        <TouchableOpacity style={styles.button} onPress={signupUser}>
          <Text style={styles.buttonText}>Add Employee</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};
export default SignupScreen;

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
    backgroundColor: 'black',
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
