import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../components/Text/CustomText';
import AnimatedLottieView from 'lottie-react-native';
import {scale} from '../utils/fonts';
import theme from '../utils/theme';
import {useSelector} from 'react-redux';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
export default function Wishlist({navigation: {navigate}}) {
  const [carts, setCarts] = React.useState({});
  const cartItems = useSelector(state => state.cart);
  console.log('sd', cartItems);
  //destructure cartItems in objects and set to carts
  useEffect(() => {
    const cart = {};
    cartItems.forEach(item => {
      cart[item.id] = item;
    });
    setCarts(cart);
    console.log('cart', JSON.stringify(carts, null, 2));
  }, [cartItems]);

  // const renderItem = ({item, index}) => {
  //   console.log('item', item);
  //   return (
  //     <View style={styles.itemContainer}>
  //       <View style={styles.item}>
  //         <Image source={item[index].image} styles={item.image} />
  //         <View style={styles.itemInfo}>
  //           <CustomText
  //             variant="text"
  //             text={item.name}
  //             style={styles.itemName}
  //           />
  //           <CustomText
  //             variant="text"
  //             text={item.price}
  //             style={styles.itemPrice}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.parentLayout}>
      <CustomText
        text="Your Cart"
        variant="h2"
        bold
        style={{
          paddingVertical: '8%',
          letterSpacing: -1.5,
          width: w,
          paddingHorizontal: '4%',
        }}
      />
      {/* {cartItems.length > 0 ? (
        <View style={styles.cartItems}>
          <FlatList
            data={carts}
            renderItem={({item, index}) => renderItem(item, index)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <> */}
      <View style={styles.empty}>
        <AnimatedLottieView
          source={require('../assets/json/wishlist.json')}
          autoPlay
          loop
        />

        <CustomText
          gray
          style={{
            width: w / 1.8,
            lineHeight: 18,
            letterSpacing: -0.5,
            textAlign: 'center',
            marginVertical: '20%',
          }}
          variant="small"
          text="Houston, your cart is empty. Add something from the menu."
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <CustomText
          text="Shop Now"
          white
          variant="subtext"
          style={{letterSpacing: -0.5}}
        />
      </TouchableOpacity>
      {/* </>
      )} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parentLayout: {
    padding: '4%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  empty: {
    width: w,
    height: '60%',
    backgroundColor: '#EBEBEB',
    marginTop: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  button: {
    width: w / 2.5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    padding: '3%',
    borderRadius: scale(10),
  },
});
