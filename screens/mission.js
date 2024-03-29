import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Support from './support';
import MapView, { Marker } from 'react-native-maps';
const Mission = (props) => {



    const initialLocation = {
        latitude: -20.136302,
        longitude: 57.500937,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ width: '100%', height: '120%' }}>
                <View style={styles.header}>
                    <View style={styles.headerT}>
                        <Text style={styles.inline}>Monday</Text>
                        <Text style={styles.subline}>30/11/2020</Text>
                        <Text style={styles.subline}>22:00-6:00</Text>
                    </View>
                    <MapView style={styles.map} initialRegion={initialLocation}
                    >
                        {
                            <MapView.Marker coordinate={{
                                latitude: -20.136302,
                                longitude: 57.500937,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }} />
                        }

                    </MapView>
                </View>


                <View style={styles.supportview}>
                    <Text style={styles.support}>Action</Text>
                </View>
                <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone, styles.shadow]}>
                    <Support
                        image={require('../assets/exercise.png')}
                        title="Daily Exercise"
                        subtitle="Difficulty on insensible"
                    />
                </Animatable.View>
                <Animatable.View animation="fadeInRight" duration={1500} style={[styles.rectangleone, { top: 580 }]}>
                    <Support
                        image={require('../assets/apple.png')}
                        title="Balanced Diet"
                        subtitle="Occasional Preference fast"
                    />
                </Animatable.View>
                <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone, { top: 690 }]}>
                    <Support
                        image={require('../assets/cricket.png')}
                        title="Sports and Yoga"
                        subtitle="Services securing health ..."
                    />
                </Animatable.View>
            </ScrollView>
        </View>
    );

}
export default Mission;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    shadowOffset: { width: 100, height: 100 },
    shadow: {
        shadowColor: 'rgba(138, 149, 158, 0.2)',
        shadowOpacity: 1,
        elevation: 30,
        backgroundColor: "#FFFFFF"
    },
    header: {
        flex: 1,
        left: 25,
        top: 20,

    },
    headerT: {

        flexDirection: 'row'

    },
    inline: {
        fontSize: 28,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        color: '#2E2E2E'
    },
    subline: {
        fontSize: 20,
        letterSpacing: -0.5,
        fontWeight: 'normal',
        color: '#002E2E',
        paddingLeft: 20,
        paddingTop: 10
    },
    memos: {
        height: 250,
        position: 'absolute',
        top: 160,
        width: '100%',
        marginLeft: 10
    },
    supportview: {
        position: 'absolute',
        left: 25,
        top: 420
    },
    support: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.5,
        color: '#2E2E2E'
    },
    rectangleone: {
        height: 85,
        width: 300,
        position: 'absolute',
        alignSelf: 'center',
        top: 470,
        borderRadius: 18
    }, map: {

        width: Dimensions.get('window').width / 1.15,
        height: Dimensions.get('window').height / 2.5,
    },
})