import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet ,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';


export default function Appointments() {
  const [myAppointments, setMyAppointments] = useState([]);

  const isFocus = useIsFocused();
  useEffect(() => {
    loadAppointments();
    console.log('useeff----',myAppointments)
  }, [isFocus]);
  StatusBar.setBackgroundColor("#fff");

  const loadAppointments = async () => {
    
    try {
      const storedAppointments = await AsyncStorage.getItem('myAppointments');
      console.log("dddd",JSON.parse(await AsyncStorage.getItem('myAppointments')));
      if (storedAppointments !== null || storedAppointments ) {
        setMyAppointments(JSON.parse(storedAppointments));
        console.log('storAp----',storedAppointments)
        console.log('stor-----',myAppointments)
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
    }
  };

  const cancelBooking = (index) => {
    const updatedAppointments = [...myAppointments];
    updatedAppointments.splice(index, 1);
    setMyAppointments(updatedAppointments);
    AsyncStorage.setItem('myAppointments', JSON.stringify(updatedAppointments));
  };
  const navigation = useNavigation();

  const editBooking = (index) => {
    
    console.log('Edit booking at index:', index);
  };

  const renderAppointmentItem = ({ item, index }) => {
    return (
      <View style={{ height: 170, width: '95%', backgroundColor: 'white', display: 'flex', borderRadius: 20, marginTop: 10, marginBottom: 5, marginLeft: 5, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 7 }}>
        <View style={{ display: 'flex', flexDirection: 'row', margin: 12, gap: 10 }}>
          <Image source={{ uri: item.img}} style={{ height: 90, width: 140, borderRadius: 15 }} />
          <View style={{ display: 'flex', marginLeft: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', opacity: 0.8 }}>{item.shop}</Text>
            <Text style={{ fontSize: 13 }}>{item.loc}</Text>
            <Text style={{ fontSize: 13, paddingTop: 2 }}>Service : <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#197dff" }}>{item.service.name}</Text></Text>
            <Text style={{ fontSize: 13, opacity: 0.6 }}>Booked on :{item.date.slice(0, 10)} </Text>

          </View>

        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, gap: 15 }}>
          <TouchableOpacity style={styles.buttonOutline} onPress={() => cancelBooking()}>
            <Text style={{ color: '#197dff', fontWeight: 'bold', opacity: 0.8 }}>Cancel Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("edit clicked")}>
            <Text style={{ paddingLeft: 8, paddingRight: 8, color: 'white', fontWeight: 'bold', opacity: 0.8 }}>Edit Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 20, marginLeft: 5 }}>
      <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', gap: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Ionicons name="arrow-back-outline" size={26} color="grey" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', opacity: 0.8 }}>My Booking</Text>
      </View>
      {!myAppointments || myAppointments.length === 0 &&
        <View style={{ marginLeft: 70, marginTop: 250 }}>
          <Text style={{ fontSize: 17 }}>No Booking yet, Please add..</Text>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={{ fontSize: 16, color: '#197dff', fontWeight: 'bold', opacity: 0.8, paddingLeft: 60 }}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        data={myAppointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAppointmentItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutline: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#197dff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#197dff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
