import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions, ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import firebase from '../config/firebase';

const client = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [nid, setNid] = useState('');
    const initialLocation = {
        latitude: -20.106302,
        longitude: 57.580937,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const signupUser = () => {
        const empRef = firebase.firestore().collection('clients');
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
                        console.log('Client added successfully');
                        alert('Client added successfully');

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


                <View style={styles.container}>
                    <MapView style={styles.map} initialRegion={initialLocation}>
                        <Marker
                            coordinate={initialLocation}
                            title={'Pamplemousses Garden'}
                            description={'This is popular relaxation place for UdM students'}
                        />
                        <Marker
                            coordinate={{
                                latitude: -20.102207,
                                longitude: 57.573283,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title={'UdM Dwami Dayanand Campus'}
                            description={'The No 1 University in Mauritius'}
                        />
                    </MapView>
                </View>
                <TouchableOpacity style={styles.button} onPress={signupUser}>
                    <Text style={styles.buttonText}>Add Client</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default client;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }, map: {
        width: Dimensions.get('window').width / 1.25,
        height: Dimensions.get('window').height / 4,
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
