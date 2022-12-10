import {StyleSheet, Text, View, Image, Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
  
  } from 'react-native';
  import React, {useState} from 'react';
  import Icon from 'react-native-vector-icons/Ionicons';
  var {width} = Dimensions.get('window');
  
  export default function ProductCard({products}) {
    const [click, setClick] = useState(false);
    return (
       
      <View style={styles.ProductCard}>
        <Image source={{uri: products.images[0].url}} style={styles.image} />
        <View>
          <Text
            style={{
              color: '#333',
              paddingVertical: 5,
              textAlign: 'center',
            }}>
            {products.name}
          </Text>
        </View>
        <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}></View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:"space-between",
              width: "100%",
              paddingBottom:10
            }}></View>
                     <Text
              style={{
                color: '#333',
                paddingHorizontal: 10,
                fontSize: 16,
              }}>
              ${products.price}
            </Text>
            <Text
              style={{
                color: '#555',
                fontSize: 15,
                textDecorationLine: 'line-through',
                marginLeft: 60,
                marginTop: -30,
              }}>
              {products.offerPrice.length > 0 ? '$' + products.offerPrice : null}
            </Text>
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center', 
                marginTop: 7,             
              }}
             >
             <Icon name='star' color="#C68600" size={18} />
             <Text style={{
               color:"#333",
               paddingHorizontal:15,
               fontSize:16
             }}>({products.numOfReviews})</Text>
  
  <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {click ? (
              <TouchableOpacity>
                <Icon
                  name="heart"
                  size={25}
                  style={{
                    marginRight: 15,
                    color: 'crimson',
                  }}
                  onPress={() => setClick(!click)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Icon
                  name="heart-outline"
                  size={25}
                  style={{
                    marginRight: 15,
                    color: '#333',
                  }}
                  onPress={() => setClick(!click)}
                />
              </TouchableOpacity>
            )}
            {products.Stock !== 0 ? (
              <TouchableOpacity>
                <Icon
                  name="cart-outline"
                  size={25}
                  style={{
                    marginRight: 0,
                    color: '#333',
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View> 
             </View>
            
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    ProductCard: {
      width: width / 2 - 30,
      height: width / 1.7,
      borderRadius: 10,
      elevation: 8,
      backgroundColor: '#e5e5e5',
      flexWrap: 'wrap',
      margin: 10,
    },
    image: {
      width: '100%',
      height: width / 2 - 60,
      resizeMode: 'contain',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    outOfStock: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
      borderRadius: 50,
      position: 'absolute',
      top: -10,
      left: -10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  