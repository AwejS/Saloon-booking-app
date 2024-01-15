import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './App/Navigations/TabNavigations';
import { useEffect, useState } from 'react';
import Login from './App/Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();
  const[user,SetUser] = useState('');

    useEffect(()=>{
        getUser();
    },[])
    const getUser = async ()=>{
       let user= await AsyncStorage.getItem("username");
       SetUser(user);
    }

  return (
    <>
      <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
        {!user && <Stack.Screen name='login' component={Login}/>}
        <Stack.Screen name='tab' component={TabNavigations}/>

      </Stack.Navigator>
      </NavigationContainer>
    
     </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
