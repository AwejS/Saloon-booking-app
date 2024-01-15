import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import { Entypo } from '@expo/vector-icons';
  import React, { useState,useEffect} from 'react';
  const services = [
    {name: 'HairCut', price:'Rs.200'},
    {name:'Shaving',price:'Rs.100'},
    {name:'Massage',price:'Rs.250'},
    {name:'Shaving',price:'Rs.100'},
    {name:'MakeUp',price:'Rs.200'},
    {name:'Manicure',price:'Rs.300'},
  ];
  export default function ServiceDropdown({SetService}){
   
    const [clicked, setClicked] = useState(false);
    
    const [selectedService, setSelectedService] = useState();
    
    useEffect(() => {
        setSelectedService(selectedService);
        SetService(selectedService);
        // console.log(selectedService);
        
      }, [selectedService]); 
    
  
    return (
      <View >
        <TouchableOpacity
          style={{
            width: '98%',
            height: 50,
            borderRadius: 10,
            
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor:'#dedede'
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{fontWeight:'600',opacity:0.7}}>
            {!selectedService ? 'Select Service' : selectedService.name+'    ('+selectedService.price+')'}
          </Text>
          {clicked ? (
            <Entypo name="chevron-small-up" size={24} color="black" />
          ) : (
            <Entypo name="chevron-small-down" size={24} color="black" />
          )}
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 10,
              height: 300,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            
  
            <FlatList
              data={services}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedService(item);
                      setClicked(!clicked);
                      
                    }}>
                    <Text style={{fontWeight: '500',opacity:0.6}}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };
  