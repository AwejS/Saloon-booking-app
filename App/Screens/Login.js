
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image,StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function Login({goToHomePage}){
  const curveHeight = useRef(new Animated.Value(200)).current;
  const [userName,setUsername]=useState("");
  const navigation = useNavigation();
  useEffect(() => {
    Animated.spring(curveHeight, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);
  const login=async()=>{
    if(!userName) return;
    await  AsyncStorage.setItem("username",userName);
    navigation.navigate('tab');
    onPress={goToHomePage}
    setUsername('')

  }

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={{marginTop:50,marginBottom:10}}>
        <Animated.Text style={[styles.appName, { transform: [{ translateY: curveHeight }] }]}>
        SALOONIFY
        </Animated.Text>
        </View>
        <View style={{marginTop:20}}>
            <Image  style={{ height: 170, width: 80,}} source={require('../../assets/logo.png')}/>
        </View>
      </View>
      <View style={{marginTop:-18,backgroundColor:'#fff',borderTopLeftRadius:18,borderTopRightRadius:18,padding:18}}>
        </View>
      <View style={styles.loginSection}>
      
        <TextInput style={styles.input} placeholder="Enter Username" value={userName} onChangeText={(text)=>setUsername(text)}/>
        <TouchableOpacity style={styles.loginButton} onPress={()=>login()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontSize:12,paddingTop:10}}>*Note : You can enter any username to create login session</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperSection: {
    flex: 2.5,
    backgroundColor: '#197dff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginSection: {
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 30,
    padding: 20,
  },
  input: {
    height: 45,
    fontSize:16,
    backgroundColor:'#dedede',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: '#197dff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
