import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Services from '../Services';

export default function SaloonInfo({saloonInfo}) {

    const navigation = useNavigation();
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBlockColor: '#dedede', borderBottomWidth: 1, paddingBottom: 4 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {saloonInfo.name}</Text>
                <Text>⭐ {saloonInfo.rating}</Text>
            </View>
            
            <View style={{ display: 'flex', flexDirection: 'row', gap: 4, marginTop: 5 }}>
                <EvilIcons name="location" size={20} color="#5493ff" />
                <Text style={{ opacity: 0.6 }}>{saloonInfo.location}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, marginTop: 5 }}>
                <Entypo name="time-slot" size={16} color="#5493ff" />
                <Text style={{ opacity: 0.6 }}>Mon-Sun | {saloonInfo.openAt} - {saloonInfo.closeAt}</Text>
            </View>
            <Services/>
            <View style={{ borderBlockColor: '#dedede', borderBottomWidth: 1, paddingBottom: 4,marginBottom:6,marginTop:4 }}></View>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{fontSize:15,fontWeight:'bold',opacity:0.6}}> ⭐ {saloonInfo.rating} ({saloonInfo.reviews} reviews)</Text>
                    <Text style={{ color: '#5493ff' }}>See all</Text>
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginTop: 8,opacity:0.7 }}>
                        <FontAwesome5 name="user-circle" size={24} color="#5493ff" />
                        <Text>john s</Text>
                    </View>
                    <Text style={{ opacity: 0.6 }}>Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 4 }}>
                        <Text style={{ fontSize: 12 }}>❤️ 10</Text>
                        <Text style={{ opacity: 0.6, fontSize: 12 }}> 1month ago</Text>
                    </View>
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginTop: 8,opacity:0.7   }}>
                        <FontAwesome5 name="user-circle" size={24} color="#5493ff" />
                        <Text>john s</Text>
                    </View>
                    <Text style={{ opacity: 0.6 }}>Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 4 }}>
                        <Text style={{ fontSize: 12 }}>❤️ 10</Text>
                        <Text style={{ opacity: 0.6, fontSize: 12 }}> 1month ago</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:10}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() =>navigation.navigate('Book-appointment',{saloonInfo:saloonInfo})}>
                <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
            </View>  
        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#197dff',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});