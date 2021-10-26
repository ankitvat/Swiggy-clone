import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  TabBarIOS,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../utils/theme';
import {scale} from '../utils/fonts';
import Icon from 'react-native-vector-icons/EvilIcons';

import Home from '../screens/Home.js';
import Search from '../screens/Search.js';
import Wishlist from '../screens/Wishlist.js';
import Profile from '../screens/Profile.js';

const icons = {
  Home: 'archive',
  Search: 'search',
  Cart: 'cart',
  Profile: 'user',
};
const BottomNavigator = ({navigation}) => {
  const {navigate} = useNavigation();

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,

        tabBarLabelStyle: {
          fontFamily: 'Circular Std Book',
          fontSize: scale(12),
          marginBottom: '8%',
        },
        tabBarStyle: {
          backgroundColor: '#EBEBEB',
          height: '8%',
        },
        tabBarIcon: ({color}) => {
          const iconName = icons[route.name];
          return (
            <Icon
              name={iconName}
              color={color}
              size={28}
              style={{marginTop: '3%'}}
            />
          );
        },
      })}
      sceneContainerStyle={{backgroundColor: '#EBEBEB'}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
