import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Appointments from '../Screens/Appointments';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigations';



const Tab = createBottomTabNavigator();

export default function TabNavigations({}) {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Home' component={HomeNavigation}  options={{tabBarIcon:({color,size})=>(<FontAwesome name="home" size={size} color={color} />)}}/>
            <Tab.Screen name='Appointment' component={Appointments} options={{tabBarIcon:({color,size})=>(<FontAwesome name="calendar" size={size} color={color} />)}}/>
            <Tab.Screen name='Profile' component={Home} options={{tabBarIcon:({color,size})=>(<FontAwesome name="user" size={size} color={color} />)}}/>


        </Tab.Navigator>
    )
}

