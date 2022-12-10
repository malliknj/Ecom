import {StyleSheet, Text, View,ScrollView ,Dimensions } from 'react-native';
import React, { useEffect } from 'react';
var {width} = Dimensions.get('window');
import { getProduct } from '../../../Redux/Actions/ProductAction';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeProduct() {
 const dispatch=useDispatch();
 const {products,error,loading}=useSelector(state => state.products)
 useEffect(() => {
   if(error){alert(error)} dispatch(getProduct());
  
 }, [dispatch,error])
  
  return (
    <>
    {loading? <Text>Loading</Text> : (
      <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: '#333',
          textAlign: 'center',
        }}>
        NJ Ecommerce
      </Text>
        
      <View style={styles.productCard}>
        {products &&
          products.map((i) => (
            <ProductCard
            key={i._id} products={i}
            />
          ))}
      </View>
       
    </View>

    )}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
