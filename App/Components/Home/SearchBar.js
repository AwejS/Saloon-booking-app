import React ,{useState}from 'react'
import { Text, View,TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({setSearchText}) { 
    const [searchInput,setSearchInput] = useState()
  
    return (
     <View style={{marginTop:20,paddingLeft:6}}>
        <View style={{ width:'95%',display:'flex',flexDirection:'row',gap:8,alignItems:'center',borderColor:'#dedede',borderWidth:0.5,padding:3,borderRadius:8,backgroundColor:'#dedede'}} >
        <AntDesign name="search1" size={20} color="#008bfc" style={{padding:6}} />
            <TextInput placeholder='Search...' onChangeText={(value)=>setSearchInput(value)} onSubmitEditing={()=>setSearchText(searchInput)}/>
        </View>
        
      </View>
    )

}


