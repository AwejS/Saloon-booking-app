import React from 'react'
import { View ,Text,FlatList,Image, Dimensions} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Services() {

    const categoryList = [
        {
            id:1,
            name:'Haircut',
            component:<Entypo name="scissors" size={28} color="#5493ff" />,
        },
        {
            id:2,
            name:'Shaving',
            component:<MaterialCommunityIcons name="mustache" size={28} color="#5493ff" />
           
        },
        {
            id:3,
            name:'Massage',
            component:<FontAwesome5 name="bed" size={28} color="#5493ff" />
        },
        {
            id:4,
            name:'Manicure',
            component:<MaterialIcons name="spa" size={28} color="#5493ff" />
            
        },
        {
            id:5,
            name:'Makeup',
            component:<Entypo name="flat-brush" size={28} color="#5493ff" />
            
        }
    ]
  return (
    <View style={{marginTop:10}}>
        <Text style={{margin:10,fontSize:17,fontWeight:'bold',opacity:0.7}}>Services</Text>
        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <View style={{display:'flex',margin:2,alignItems:'center'}}>  
                    <View style={{backgroundColor:'#fff',width:60,height:58,margin:8,padding:12,borderRadius:30,alignItems:'center'}}>
                        {item.component}
                    </View>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                    
            )}
        />
    </View>
  )
}
