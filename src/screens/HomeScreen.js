import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../Components/Home/Banner'
import Homeproducts from '../Components/Home/Homeproducts'
import Header from '../Components/Layouts/Header'
export default function HomeScreen({navigation}) {
  return (
   
    
       <ScrollView>
        <Header navigation={navigation}/>
        <Banner/>
       <Homeproducts/>
       </ScrollView>
    
    
  )
}

const styles = StyleSheet.create({})