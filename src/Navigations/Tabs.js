import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Image, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from "../screens/ProductsScreens";
import Wishlist from '../screens/Wishlist';
import CartScreen from '../screens/CartScreen';
const Tab = createBottomTabNavigator();
export default function Tabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBabShowLabel:false,
        tabBarHideOnKeyboard:true,
        tabBarStyle:  { height: 100 }
      }}>
        
        <Tab.Screen name="Home" component={HomeScreen}
         options={({route}) => ({
          //tabBarStyle: {display: Visibility(route)},
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../Assets/BottomTab/home.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 15,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                Home
              </Text>
            </View>
          ),
        })}
        />
        <Tab.Screen name="products" component={ProductsScreen} 
        options={({route}) => ({
          //tabBarStyle: {display: Visibility(route)},
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../Assets/BottomTab/shop.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 15,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                Products
              </Text>
            </View>
          ),
        })}
        />

<Tab.Screen name="wishlist" component={Wishlist} 
        options={({route}) => ({
          //tabBarStyle: {display: Visibility(route)},
          tabBarBadge:1,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../Assets/BottomTab/heart.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 15,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                Wishlist
              </Text>
            </View>
          ),
        })}
        />
        <Tab.Screen name="ShoppingCart" component={CartScreen} 
        options={({route}) => ({
          //tabBarStyle: {display: Visibility(route)},
          tabBarBadge:1,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../Assets/BottomTab/cart.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 15,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
               Shopping Cart
              </Text>
            </View>
          ),
        })}
        />
      </Tab.Navigator>
    );
  }