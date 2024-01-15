import React, { useEffect, useState } from 'react'
import { Text, View, Image ,StatusBar} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import BookingSection from './BookingSection';
import { useRoute } from '@react-navigation/native';

export default function BookAppointement() {

    
    const params = useRoute().params;   
    StatusBar.setBackgroundColor("#dedede");
    return (
        <View style={{backgroundColor:'#dedede'}}>
        <View style={{backgroundColor:'#dedede',marginTop:20,marginLeft:10,marginBottom:30}}>
        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row',gap:5}}>
            <View>
                <Image style={{ height: 80, width: 100, borderRadius: 20 }} source={{ uri:params.saloonInfo.imgUrl}} />
            </View>
            <View>
                <View style={{margin:10}}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}> {params.saloonInfo.name} </Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <EvilIcons name="location" size={20} color="#5493ff" />
                        <Text style={{ opacity: 0.6 }}>{params.saloonInfo.location}</Text>
                    </View>

                </View>
            </View>
        </View>
        </View>
        <View style={{marginTop:-10,backgroundColor:'#fff',borderTopLeftRadius:18,borderTopRightRadius:18,padding:18}}>
        <BookingSection saloonInfo={params.saloonInfo}/>
        </View>
        
        
        </View>
       
    )
}

