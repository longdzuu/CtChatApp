import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'; // Thêm useNavigation
import HomeScreen from './Navigation_Screen/HomeScreen';
import MessengerScreen from './Navigation_Screen/MessengerScreen';
import LoveScreen from './Navigation_Screen/LoveScreen';
import FriendScreen from './Navigation_Screen/FriendScreen';
import ProfileScreen from './ProfileScreen';
// Icon
import Icon from 'react-native-vector-icons/Ionicons';

const logo = require('../assets/logo.png');
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation(); // Sử dụng useNavigation để điều hướng

  const renderHeaderRight = () => (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Icon name="menu-outline" size={25} color="black" style={{ marginRight: 15 }} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline'; // Tên icon từ Ionicons
              break;
            case 'Mess':
              iconName = 'chatbubble-outline';
              break;
            case 'Love':
              iconName = 'heart-outline';
              break;
            case 'Friend':
              iconName = 'people-outline';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#B3E3E7', // Màu nền cho Tab Navigator
        },
        headerStyle: {
          backgroundColor: '#B3E3E7',
        },
        headerLeft: () => <Image source={logo} style={{ width: 40, height: 40, marginLeft: 15 }} />,
        headerRight: renderHeaderRight, // Thêm renderHeaderRight
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }} />
      <Tab.Screen name='Mess' component={MessengerScreen} options={{ headerTitle: 'Messenger' }} />
      <Tab.Screen name='Love' component={LoveScreen} options={{ headerTitle: 'Love' }} />
      <Tab.Screen name='Friend' component={FriendScreen} options={{ headerTitle: 'Friends' }} />
    </Tab.Navigator>
  );
};

export default MainScreen;
