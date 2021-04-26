import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Home from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import clients from '../screens/clients';
import AboutScreen from '../screens/AboutScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import Mission from '../screens/mission';
import employee from '../screens/employee';
import request from '../screens/request';
import firebase from '../config/firebase';
const tab = "TabsNavigatorAdmin" + global.role
// const user = firebase.firestore()
//   .collection('employees').doc(uid).get()
// console.log(user)
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
  const TabsNavigatorAdmin = () => {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
          name={'Home'}
          component={Home}
        />

        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={size} />
            ),
          }}
          name={'Profile'}
          component={ProfileScreen}

        />

      </Tabs.Navigator>
    );
  };
  const TabsNavigatorEmployee = () => {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
          name={'Home'}
          component={Home}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-star" color={color} size={size} />
            ),
          }}
          name={'calendar'}
          component={FavouritesScreen}
        />


        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={size} />
            ),
          }}
          name={'Profile'}
          component={ProfileScreen}

        />
      </Tabs.Navigator>
    );
  };
  const TabsNavigatorClient = () => {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
          name={'Home'}
          component={Home}
        />



        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={size} />
            ),
          }}
          name={'Profile'}
          component={ProfileScreen}

        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={size} />
            ),
          }}
          name={'request'}
          component={request}

        />
      </Tabs.Navigator>
    );
  };



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'request'} component={request} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'menu'} component={(global.role == "Admin" || global.role == "Client") ? (global.role == "Admin") ? TabsNavigatorAdmin : TabsNavigatorClient : TabsNavigatorEmployee} />
        <Stack.Screen name={'About'} component={AboutScreen} />
        <Stack.Screen name={'Employees'} component={employee} />
        <Stack.Screen name={'client'} component={clients} />
        <Stack.Screen name={'calendar'} component={FavouritesScreen} />
        <Stack.Screen name={'Profile'} component={ProfileScreen} />
        <Stack.Screen name={'Signup'} component={SignupScreen} />
        <Stack.Screen name={'Task'} component={Mission} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigator;
