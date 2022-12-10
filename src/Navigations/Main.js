import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreens from '../screens/ProductsScreens';
import Wishlist from '../screens/Wishlist';
import CartScreen from '../screens/CartScreen';
import DrawerItems from '../Components/Layouts/DrawerItems';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { DrawerItem } from '@react-navigation/drawer';
 
const Main = () => {
  
 // const Stack = createNativeStackNavigator();
 const Drawer = createDrawerNavigator();
  
  return (
    
    <Drawer.Navigator initialRouteName='Auth' screenOptions={{
        headerShown:false,
        tabBabShowLabel:false,
       // tabBarHideOnKeyboard:true
    }}
    drawerContent={(props) => < DrawerItems{...props}/>}
    >
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="Products" component={ProductsScreens} />
        <Drawer.Screen name="Wishlist" component={Wishlist} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})