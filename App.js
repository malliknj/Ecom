import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from './src/Components/Layouts/Header';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
//<ScrollView>
//<Header/>
//<HomeScreen />
//</ScrollView>
const App = () => {
  return (
     
      <Provider store={Store}>
        <NavigationContainer>
          <Main/>
        </NavigationContainer>
         
      </Provider>
     
  );
};

export default App;

const styles = StyleSheet.create({});
