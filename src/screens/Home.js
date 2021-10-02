import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import CustomText from '../components/Text/CustomText';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';
import banner5 from '../assets/images/banner5.png';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {scale} from '../utils/fonts';
import theme from '../utils/theme';
import ca1 from '../assets/images/ca1.png';
import ca2 from '../assets/images/ca2.png';
import ca3 from '../assets/images/ca3.png';
import ca4 from '../assets/images/ca4.png';
import ca5 from '../assets/images/ca5.png';
import ca6 from '../assets/images/ca6.png';
import Icon from 'react-native-vector-icons/EvilIcons';
import t1 from '../assets/images/topSection/t1.png';
import t2 from '../assets/images/topSection/t2.png';
import t3 from '../assets/images/topSection/t3.png';
import t4 from '../assets/images/topSection/t4.png';
import t5 from '../assets/images/topSection/t5.png';

const top = [
  {
    image: t1,
    backColor: '#F5F5F5',
  },
  {
    image: t2,
    backColor: 'red',
  },
  {
    image: t3,
    backColor: 'green',
  },
  {
    image: t4,
    backColor: 'blue',
  },
  {
    image: t5,
    backColor: 'yellow',
  },
];
const banners = [banner1, banner2, banner3, banner4, banner5];
const categories = [ca1, ca2, ca3, ca4, ca5, ca6];
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Home({navigation: {navigate}}) {
  const [active, setActive] = React.useState(0);
  const [carousel, setCarousel] = React.useState(null);
  const renderCategory = ({item, index}) => {
    return (
      <View style={styles.category}>
        <Image source={item} style={styles.categoryImage} />
      </View>
    );
  };
  const renderBanner = ({item, index}) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item} style={styles.banner} />
      </View>
    );
  };

  const renderProduct = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1} style={styles.trendingContainer}>
        <View style={[styles.cardBG, {backgroundColor: item.backColor}]}>
          <Image source={item.image} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      bounces={false}
      bouncesZoom={false}
      contentContainerStyle={styles.parentLayout}>
      <View style={styles.header}>
        <CustomText
          variant="h2"
          bold
          text="Trending Now"
          style={{letterSpacing: -1.5}}
        />
        <View style={styles.icons}>
          <Icon
            name="bell"
            size={scale(32)}
            color={theme.colors.primary}
            style={{paddingRight: '1%'}}
          />
          <Icon name="gear" size={scale(32)} color={theme.colors.primary} />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={top}
          renderItem={renderProduct}
          sliderWidth={w}
          itemWidth={w * 0.55}
          slideStyle={{marginLeft: 20}}
          activeSlideAlignment="start"
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentLayout: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '5%',
    backgroundColor: '#EBEBEB',
    width: w,
    paddingHorizontal: '4%',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: w / 1.1,
  },
  icons: {
    flexDirection: 'row',
    marginTop: '1%',
  },
  trending: {
    width: w,
    height: h / 4,
    marginVertical: '5%',
  },
  carouselContainer: {
    width: w,
    marginVertical: '6%',
  },
  trendingContainer: {
    width: '100%',
    height: h / 4,
    aspectRatio: 0.6,
    paddingHorizontal: '6%',
    paddingTop: '1%',
    paddingBottom: '5%',
    justifyContent: 'space-between',
  },
  image: {
    width: '30%',
    resizeMode: 'contain',
    height: '30%',
  },
  cardBG: {
    position: 'absolute',
    bottom: 0,
    width: w * 0.55,
    height: '90%',
    borderRadius: scale(32),
  },
});
