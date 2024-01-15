import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity,StatusBar} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import SaloonInfo from './SaloonInfo';


export default function SaloonPage() {


    const navigation= useNavigation();
    const param = useRoute().params;
    StatusBar.setBackgroundColor("#000");
  
    return (
      <View>
        <View style={{position:'absolute',zIndex:10,margin:6,paddingLeft:12,paddingTop:12}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={30} color="white"/>
            </TouchableOpacity>
        </View>
    
            <View>
           
                <Image style={{width:'100%',height:180}} source={{uri:param?.saloonInfo.imgUrl}}/>
            </View>
        <View style={{marginTop:-18,backgroundColor:'#fff',borderTopLeftRadius:18,borderTopRightRadius:18,padding:18}}>
        <SaloonInfo saloonInfo={param?.saloonInfo}/>
        </View>
        
      </View>
    )

}


