import React, { useState, useEffect } from 'react';
import { Button, ActivityIndicator, TouchableOpacity, FlatList, View, StyleSheet, Text } from 'react-native';
import firebase from '../config/firebase';
const employee = (props) => {


    const [users, setUsers] = useState([]); // Initial empty array of users
    const [clients, setClients] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscriber = firebase.firestore()
            .collection('employees')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.email,
                    });
                });
                setUsers(users);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    function Item({ item }) {
        return (
            <View style={[styles.listItem, styles.shadow]}>
                {/* <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} /> */}
                <View style={{ alignItems: "center", flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.fname}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.lname}</Text>
                    {/* <Text>{item.position}</Text> */}
                </View>
                <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "green" }}>Call</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Signup'); }}>
                    <Text style={styles.buttonText}>Add Employee</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                style={{ flex: 1 }}
                data={users}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.email}
            />

        </View>

    );
};

export default employee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',


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
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }, shadow: {
        shadowColor: 'rgba(138, 149, 158, 0.2)',
        shadowOpacity: 1,
        elevation: 30,
        backgroundColor: "#FFFFFF"
    },
    rectangleone: {
        height: 85,
        width: 300,
        position: 'absolute',
        alignSelf: 'center',
        top: 470,
        borderRadius: 18
    }
});