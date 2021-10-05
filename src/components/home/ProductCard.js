import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import {scale} from '../../utils/fonts';
import theme from '../../utils/theme';
import CustomText from '../Text/CustomText';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function ProductCard({item, index}) {
  const [heart, setHeart] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <TouchableOpacity activeOpacity={1} style={styles.trendingContainer}>
      <View
        key={index}
        style={[styles.cardBG, {backgroundColor: item.backColor}]}>
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
       
        
          <Icon2 
            name="circle-with-plus"
            size={scale(18)}
            color={ cart ? '#A4D48C' :theme.colors.lightGray}
            style={{marginLeft: '4%'}}
            onPress={() => {
              setCart(!cart);
            }}
          />

       
        
      </View>
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
    width: '90%',
    position: 'absolute',
    right: '5%',
    resizeMode: 'cover',
    height: '90%',
  },
  cardBG: {
    position: 'absolute',
    top: 10,
    width: w / 3,
    height: '50%',
    borderRadius: scale(10),
  },
});
