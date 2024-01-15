import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity ,BackHandler} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const [user, SetUser] = useState();
    const navigation = useNavigation();
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        let user = await AsyncStorage.getItem("username");
        SetUser(user);
    }
    const logout = async () => {
        await AsyncStorage.setItem("username", '')
        navigation.navigate('login')
    }
    return (
        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 7 }}>
                <Image source={require('../../../assets/avatar.jpg')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                <View style={{ paddingTop: 4 }}>
                    <Text style={{ fontSize: 15, opacity: 0.7 }}> Hello,👋</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', opacity: 0.7 }}>{user}</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginRight: 10 }}>
                <Ionicons name="notifications-outline" size={24} color="black" />
                <TouchableOpacity onPress={() => logout()}>
                    <Feather name="log-out" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )

}
