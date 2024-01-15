import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import ServiceDropdown from './ServiceDropdown';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BookingSection({saloonInfo}) {
    
    
    const [next7days, setNext7days] = useState([]);
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [timeList, SetTimeList] = useState();
    const [userEmail, setUserEmail] = useState('');
    const [username, setUsername] = useState('');
    const [service,setService]=useState();
    const [myAppointments, setMyAppointments] = useState([]);

    const Appointments =[];
    const [isDisabled, setIsDisabled] = useState(false);

    const navigation = useNavigation();

    useEffect(()=>{
        getUser();
        console.log(myAppointments)
    },[])
    const getUser = async ()=>{
       let user= await AsyncStorage.getItem("username");
       setUsername(user);
    }

    const SetService =(selectedService)=>{
        setService(selectedService)
    }

    const bookAppointment= async ()=>{

        if(selectedDate && selectedTime && userEmail && username){
            const newAppointment={
                    userName:username,
                    service:service,
                    date:selectedDate,
                    email:userEmail,
                    time:selectedTime,
                    img:saloonInfo.imgUrl,
                    loc:saloonInfo.location,
                    shop:saloonInfo.name,
                    location:saloonInfo.location,
            }
            // console.log(newAppointment);
            let tempAppointments = []
            tempAppointments = JSON.parse(await AsyncStorage.getItem("myAppointments"));

            if(tempAppointments){
                tempAppointments.map(item=>Appointments.push(item));
            Appointments.push(newAppointment);
            console.log('tempp--',tempAppointments);
            }
            else{
                Appointments.push(newAppointment);
            }
            

            await AsyncStorage.setItem("myAppointments",JSON.stringify(Appointments));


            Toast.show("Appointment Booked Successfully.. ✅ ", Toast.LONG);
            //setMyAppointments([...myAppointments, newAppointment]);

            // Save the updated appointment list to AsyncStorage
           // saveAppointments([...myAppointments, newAppointment]);
           // await loadAppointments();
            navigation.navigate('Appointments'); 
        }
        else{
            Toast.show("Please enter all the fields  ❌", Toast.LONG)
        }
       
    }

    useEffect(() => {
        getDays();
        getTime();
        console.log(saloonInfo)
    }, [])

    const getDays = () => {
        const today = moment();
        const nextSevenDays = [];
        for (let i = 0; i < 7; i++) {
            const date = moment().add(i, 'days');
            nextSevenDays.push({
                date: date,
                day: date.format('ddd'),
                formatedDate: date.format('Do MMM')
            })
        }
        setNext7days(nextSevenDays);
    }
    const getTime = () => {
        const timeList = [];
        for (let i =parseInt(saloonInfo.openAt); i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM',
                slot:2
            })
            // timeList.push({
            //     time:i+1 +':00 AM'
            // })
        }
        for (let i = 1; i <= parseInt(saloonInfo.closeAt); i++) {
            timeList.push({
                time: i + ':00 PM',
                slot:2
            })
            // timeList.push({
            //     time:i+1 +':00 PM'
            // })
        }
        // console.log(timeList)
        SetTimeList(timeList);
    }

    return (
        <View style={{ display: 'flex', gap: 10}}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Select Day</Text>

            <FlatList horizontal={true} data={next7days} renderItem={({ item }) => (
                <TouchableOpacity style={[styles.dayButton, selectedDate == item.date ? { backgroundColor: "#197dff" } : null]} onPress={() => setSelectedDate(item.date)}>
                    <Text style={[{ fontSize: 13, opacity: 0.6 },  selectedDate == item.date ? { color: "white" } : null]}>
                        {item.day}
                    </Text>
                    <Text style={[{ fontSize: 14, opacity: 0.7, fontWeight: 500, }, selectedDate == item.date ? { color: "white" } : null]}>
                        {item.formatedDate}
                    </Text>
                </TouchableOpacity>
            )} />

            <Text style={{ fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Select Times{'  available:('+saloonInfo.availabeSlots+')'}</Text>

            <FlatList horizontal={true} data={timeList} renderItem={({ item }) => (
                
                <TouchableOpacity disabled={item.slot<1} style={[styles.dayButton, selectedTime == item.time ? { backgroundColor: "#197dff" } : null]} onPress={() => setSelectedTime(item.time)}>

                    <Text style={[{ fontSize: 14, opacity: 0.7, fontWeight: 500, padding: 4 }, selectedTime == item.time ? { color: "white" } : null]}>
                        {item.time}
                    </Text>
                    <Text style={[{ fontSize: 14, opacity: 0.7, fontWeight: 500, padding: 4 }, selectedTime == item.time ? { color: "white" } : null]}>
                        {selectedTime==item.time? item.slot-1:item.slot}
                    </Text>
                </TouchableOpacity>

            )} />
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', opacity: 0.6, marginTop: 15 }}>Select Service</Text>

                <ServiceDropdown SetService={SetService} />

                <Text style={{ fontSize: 15, fontWeight: 'bold', opacity: 0.6, marginTop: 10 }}>Username</Text>
                <TextInput style={styles.textInput} placeholder="Enter Username" value={username} onChangeText={(text) => setUsername(text)} />
                <Text style={{ fontSize: 15, fontWeight: 'bold', opacity: 0.6, marginTop: 15 }}>Email</Text>
                <TextInput style={styles.textInput} keyboardType="email-address" placeholder="Enter your email" value={userEmail} onChangeText={(text) => setUserEmail(text)} />
                <View style={{marginTop:20,marginBottom:20}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>bookAppointment()}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    dayButton: {
        borderWidth: 1,
        borderRadius: 99,
        padding: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 10,
        borderColor: '#dedede'
    },
    textInput: {
        width: '98%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#dedede'
    },
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
})