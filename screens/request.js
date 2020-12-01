import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DateRangePicker from './DateRangePicker';
import firebase from '../config/firebase';

const request = (props) => {

    const [first, setFirst] = useState("----/--/--");
    const [last, setLast] = useState("----/--/--");
    const uid = firebase.auth().currentUser.uid;
    const clientID = uid
    const empID = null
    const Status = "InProgress"
    const requestService = () => {

        const reqRef = firebase.firestore().collection('request');
        const reqObj =
        {
            clientID,
            empID,
            first,
            last,
            Status,

        }

        reqRef
            .doc(uid)
            .set(reqObj)
            .then(() => {
                console.log('Request sent successfully');
                alert('Request sent successfully');

            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <View style={styles.container}>
            <View>
                <Text>Please Select a Range for the guard service</Text>
            </View>
            <DateRangePicker
                initialRange={['2018-04-01', '2018-04-10']}
                onSuccess={(s, e) => {
                    setFirst(s)
                    setLast(e)

                }}
                theme={{ markColor: 'blue', markTextColor: 'white' }} />
            <Text>From {first} To {last} </Text>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.button} onPress={() => { requestService() }}>
                    <Text style={styles.buttonText}>Make Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default request;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container1: {
        marginEnd: 20,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    button: {
        marginTop: 30,
        backgroundColor: 'black',
        width: 150,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
});