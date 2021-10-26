import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import {scale} from '../../utils/fonts';
import theme from '../../utils/theme';
import CustomText from '../Text/CustomText';
import {useSelector, useDispatch} from 'react-redux';
import {
  setCartItems,
  updateCartItem,
  removeCartItem,
} from '../../redux/reducers/cartReducer';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function ProductCard({item, index, quantity}) {
  const [heart, setHeart] = useState(false);
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  return (
    <TouchableOpacity activeOpacity={1} style={styles.trendingContainer}>
      <View key={index} style={[styles.cardBG]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <CustomText
        variant="small"
        bold
        numberOfLines={2}
        text={item.name}
        style={{marginTop: h / 5.5, lineHeight: 16, width: '90%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: h / 4,
          position: 'absolute',
          margin: '5%',
          marginLeft: '3%',
        }}>
        <CustomText
          variant="sosmall"
          gray
          text={`₹ ${item.oldPrice}`}
          style={{
            textDecorationLine: 'line-through',

            textDecorationStyle: 'dotted',
          }}
        />
        <CustomText
          variant="sosmall"
          bold
          text={`₹ ${item.newPrice}`}
          style={{marginLeft: '10%'}}
        />

        <Icon2
          name="heart"
          size={scale(18)}
          color={heart ? theme.colors.red : theme.colors.lightGray}
          style={{marginLeft: '10%'}}
          onPress={() => {
            setHeart(!heart);
          }}
        />
        {shown == false && (
          <Icon2
            name="circle-with-plus"
            size={scale(18)}
            color={theme.colors.lightGray}
            style={{marginLeft: '4%'}}
            onPress={() => {
              dispatch(setCartItems(item));
              setShown(true);
            }}
          />
        )}
      </View>
      {shown == true && (
        <View
          style={{
            flexDirection: 'row',
            marginTop: h / 3.5,
            position: 'absolute',
            margin: '5%',
            marginLeft: '3%',
            justifyContent: 'space-around',
            width: '90%',
            borderWidth: 1,
            borderRadius: scale(5),
            borderColor: theme.colors.lightGray,
          }}>
          <Icon2
            name="minus"
            size={scale(18)}
            color={theme.colors.lightGray}
            onPress={() => {
              if (cartItem.quantity == 1) {
                setShown(false);
                dispatch(removeCartItem(item));
              } else dispatch(updateCartItem({id: item.id, quantity: -1}));
            }}
          />
          <CustomText
            variant="sosmall"
            bold
            text={cartItem.quantity ? cartItem.quantity : 0}
          />
          <Icon2
            name="plus"
            size={scale(18)}
            color={theme.colors.lightGray}
            onPress={() => dispatch(updateCartItem({id: item.id, quantity: 1}))}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  trendingContainer: {
    width: '100%',
    height: h / 3,
    aspectRatio: 0.6,
    paddingHorizontal: '6%',
    paddingTop: '1%',
    paddingBottom: '5%',

    justifyContent: 'flex-start',
  },

  image: {
    width: '100%',
    position: 'absolute',
    borderRadius: scale(5),
    resizeMode: 'contain',
    height: '100%',
  },
  cardBG: {
    position: 'absolute',
    top: 10,
    width: w / 3,
    height: '50%',
    borderRadius: scale(10),
  },
});
