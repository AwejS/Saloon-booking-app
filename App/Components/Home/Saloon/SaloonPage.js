import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import SaloonInfo from './SaloonInfo';


export default function SaloonPage() {


    const navigation= useNavigation();
    const param = useRoute().params;
  
    return (
      <View>
        <View style={{position:'absolute',zIndex:10,margin:10,paddingLeft:12,paddingTop:25}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={30} color="white"/>
            </TouchableOpacity>
        </View>
    
            <View>
           
                <Image style={{width:'100%',height:240}} source={{uri:param?.saloonInfo.imgUrl}}/>
            </View>
        <View style={{marginTop:-18,backgroundColor:'#fff',borderTopLeftRadius:18,borderTopRightRadius:18,padding:18}}>
        <SaloonInfo saloonInfo={param?.saloonInfo}/>
        </View>
        
      </View>
    )

}


