import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity, Button,
    Dimensions, ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import firebase from '../config/firebase';

const client = (props) => {
    const [position, setPosition] = useState({
        lat: 0,
        lng: 0,
    });
    const [m, setM] = useState({
        lat: 0,
        lng: 0,
    });
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setPosition({ lat, lng });
        },
        (error) => {
            console.log(error.message);
        },
        {}
    );

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = 'Client';
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    state = {
        // markers: []        Change this
        marker: null          // to this
    }
    const initialLocation = {
        latitude: -20.136302,
        longitude: 57.500937,
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
                    data: {
                        fname,
                        lname,
                        company,
                        email,
                        address,
                        role,

                    },
                    coords: m
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
                    placeholder={'Company Name'}
                    value={company}
                    onChangeText={(company) => setCompany(company)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Address'}
                    value={address}
                    onChangeText={(address) => setAddress(address)}
                />


                <View style={styles.container}>
                    <MapView style={styles.map} initialRegion={initialLocation}
                        onPress={(e) => {
                            const lat = e.nativeEvent.coordinate.latitude;
                            const lng = e.nativeEvent.coordinate.longitude;
                            setM({ lat, lng })
                        }}>
                        {
                            m &&
                            <MapView.Marker coordinate={{
                                latitude: m.lat,
                                longitude: m.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }} />
                        }

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
