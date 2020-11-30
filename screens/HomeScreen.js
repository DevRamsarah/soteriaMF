import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, StyleSheet, ImageBackground } from 'react-native';
import Day from './day';
import Card from './card';
import * as Animatable from 'react-native-animatable';
import firebase from '../config/firebase';

export default class Home extends React.Component {
  state = {
    color: '#136DF3',
    activestate: 'rgba(255, 255, 255, 0.291821)',
    non: ''
  }
  change = () => {
    return (
      this.props.navigation.navigate('Task')
    );
  }
  render() {
    const username = firebase.auth().currentUser.displayName;
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInRightBig" duration={1500} style={styles.containerone}>
          <View style={styles.containerone}>
            <View style={styles.boxone}></View>
            <View style={styles.boxtwo}>
              <Text style={styles.name}>Hi, {username}</Text>
              <Text style={styles.subtitle}>Here is your Weekly Task</Text>
            </View>

          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUpBig" duration={1500} style={styles.cardone}>
          <View style={styles.containertwo}>
            <View style={styles.line}></View>
            <View style={styles.progress}>
              <Text style={styles.textone}>My Task</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ width: '100%', height: '120%' }}>

              <View style={styles.cards}>
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checkbox.png')}
                  title="Monday"
                  subtitle="30/11/2020"
                  address="Port Louis"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Tuesday"
                  subtitle="1/12/2020"
                  address="Port Louis"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Wednesday"
                  subtitle="2/12/2020"
                  address="Quatre Borne"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Thursday"
                  subtitle="3/12/2020"
                  address="Port Louis"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Friday"
                  subtitle="4/12/2020"
                  address="Vacoas"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Saturday"
                  subtitle="5/12/2020"
                  address="Phoenix"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />
                <Card
                  move="fadeInUpBig"
                  image={require('../assets/checktodo.png')}
                  title="Sunday"
                  subtitle="6/12/2020"
                  address="Beau Bassin"
                  period="22:00-6:00"
                  screenchange={() => this.change()}
                />

              </View>
            </ScrollView>
          </View>
        </Animatable.View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#136DF3'
  },
  containerone: {
    flex: 0.45,
    display: 'flex'
  },
  containertwo: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxone: {
    flex: .2,
  },
  boxtwo: {
    flex: .15,
    marginHorizontal: 35
  },
  boxthree: {
    flex: 1.5,
  },
  boxfour: {
    flex: 0.75,
    color: '#fff',
    flexDirection: 'row'
  },
  cardone: {
    flex: 2,

    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: '#F4F0F0',
    borderRadius: 2,
    marginVertical: 25,
    left: 150
  },
  progress: {
    left: 50
  },
  textone: {
    fontSize: 20,
    color: '#2D2D2D',
    letterSpacing: -0.5
  },
  cards: {
    flex: 1,
    display: 'flex',
    marginTop: 10,
    marginHorizontal: 30
  },

})