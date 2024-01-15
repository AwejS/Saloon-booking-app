import React, { Component } from 'react'
import { Text, View,Scro,ScrollView } from 'react-native'
import Header from '../Components/Home/Header'
import SearchBar from '../Components/Home/SearchBar'
import Slider from '../Components/Home/Slider'
import Services from '../Components/Home/Services'
import Stylists from '../Components/Home/Stylists'


export default function Home() {
    return (
      <ScrollView style={{paddingLeft:10,paddingTop:20,marginTop:25}} showsVerticalScrollIndicator={false}>
        <Header/>
        <SearchBar setSearchText={(value)=>console.log(value)}/>
        <Slider/>
        <Services/>
        <Stylists/>
      </ScrollView>
    )
}


