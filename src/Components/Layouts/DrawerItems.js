import { View, Text,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
const DrawerItems = () => {
  return (
    <View
    style= {{flex: 1,paddingVertical:20,margin:0,}}
    
    >
        <Image
        source={require('../../Assets/BottomTab/user.jpg')}
        style={{width:250,height:100,borderRadius:20,marginLeft:10,}}
        /> 
      <Text>DrawerItems</Text>
    </View>
  )
}

export default DrawerItems