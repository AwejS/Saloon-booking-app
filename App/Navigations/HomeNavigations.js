import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Home from '../Screens/Home';
import SaloonPage from '../Components/Home/Saloon/SaloonPage';
import BookAppointement from '../Components/Home/Appointment/BookAppointement';
import Appointments from '../Screens/Appointments';
import Login from '../Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeNavigations() {
  const [user, SetUser] = useState();
  useEffect(() => {
    getUser();
  }, [])
  const getUser = async () => {
    let user = await AsyncStorage.getItem("username");
    SetUser(user);
  }
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='Saloon-page' component={SaloonPage} />
      <Stack.Screen name='Book-appointment' component={BookAppointement} />
      <Stack.Screen name='Appointments' component={Appointments} />
    </Stack.Navigator>
  )
}
