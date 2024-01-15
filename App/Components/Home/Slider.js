import React from 'react'
import { View ,Text,FlatList,Image, Dimensions,TouchableOpacity} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Slider() {

    const navigation = useNavigation();

    const sliderList = [
        {
            id:1,
            name:'saloon 1',
            rating:'4.1',
            location:'Delhi India',
            openAt:'10 AM',
            closeAt:'9 PM',
            reviews:'120',
            availabeSlots:24,
            imgUrl:'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20861.jpg?w=740&t=st=1705091789~exp=1705092389~hmac=18fdfd6c92bbd5a841cc4e68285b1ee3f83d30d05d73f66c3927cee1b0cbf08b',
        },
        {
            id:2,
            name:'saloon 2',
            rating:'4.3',
            location:'Mumbai India',
            openAt:'9 AM',
            closeAt:'8 PM',
            availabeSlots:24,
            reviews:'320',
            imgUrl:'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26256.jpg?w=740&t=st=1705092190~exp=1705092790~hmac=986dd1d2232be7d300808ff0e1a5acd8ae6feece8000f7b21eecb1a2061649be',
        },
        {
            id:3,
            name:'saloon 3',
            rating:'4.0',
            location:'Pune India',
            openAt:'11 AM',
            closeAt:'9 PM',
            availabeSlots:22,
            reviews:'60',
            imgUrl:'https://img.freepik.com/free-photo/man-getting-his-beard-shaved-with-razor_107420-94801.jpg?w=740&t=st=1705092165~exp=1705092765~hmac=2c68cde7708e0db8a6f15167ae513a4332bcbf9880d13c113cbfe16e43b1e8da',
        }
    ]
  return (
    <View style={{marginTop:10}}>
        <Text style={{margin:10,fontSize:17,fontWeight:'bold',opacity:0.7}}>Recommended for you</Text>
        <FlatList
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('Saloon-page',{saloonInfo:item})} style={{display:'flex',margin:5,backgroundColor:'white',borderRadius:10,elevation:5,shadowColor: '#000',shadowOffset: { width: 0, height: 3 },shadowOpacity:0.5,shadowRadius:7}}>  
                    <Image source={{uri:item.imgUrl}} style={{width:Dimensions.get('screen').width*0.7,height:130,borderRadius:10,margin:8}}/>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{padding:3,paddingLeft:10,fontWeight:'bold',opacity:0.7,fontSize:16}}>{item.name}</Text>
                        <Text style={{padding:4,opacity:0.6}}>⭐{item.rating}</Text>
                    </View>
                    <Text style={{paddingBottom:5,paddingLeft:5,opacity:0.6}}><EvilIcons name="location" size={15} color="black" />{item.location}</Text>
                </TouchableOpacity>
                    
            )}
        />
    </View>
  )
}
