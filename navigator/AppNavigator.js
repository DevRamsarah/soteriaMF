import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import AboutScreen from '../screens/AboutScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
      <MaterialIcons
        name="menu"
        size={24}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    );
  };

  const HomeNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          // options={{
          //   headerLeft: () => <HeaderLeft />,
          // }}
          name={'Familia'}
          component={NewsListScreen}
        />
        <Stack.Screen name={'NewsDetails'} component={NewsDetailsScreen} />
      </Stack.Navigator>
    );
  };

  const TabsNavigator = () => {
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
          component={HomeNavigator}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" color={color} size={size} />
            ),
          }}
          name={'Feeds'}
          component={FavouritesScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="question" color={color} size={size} />
            ),
          }}
          name={'Assistance'}
          component={FavouritesScreen}
        />

      </Tabs.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={'News'} component={TabsNavigator} />
        <Drawer.Screen name={'About'} component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
