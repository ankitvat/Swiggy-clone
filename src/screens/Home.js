import React, {useState} from 'react';
import {
  View,
  StyleSheet,
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
import Icon2 from 'react-native-vector-icons/Entypo';
import t1 from '../assets/images/topSection/t1.png';
import t2 from '../assets/images/topSection/t2.png';
import t3 from '../assets/images/topSection/t3.png';
import t4 from '../assets/images/topSection/t4.png';
import t5 from '../assets/images/topSection/t5.png';
import ProductCard from '../components/home/ProductCard';

const top = [
  {
    id: 1,
    image: t1,
    backColor: '#F5F5F5',
    name: 'Ultra defence hybrid sun fluid - SPF 50',
    oldPrice: '100',
    newPrice: '50',
  },
  {
    id: 2,
    image: t2,
    backColor: '#FDF8F5',
    name: 'Murumuru butter shampoo bar',
    oldPrice: '200',
    newPrice: '150',
  },
  {
    id: 3,
    image: t3,
    backColor: '#E3F4F1',
    name: 'Lip & Cheek tint',
    oldPrice: '300',
    newPrice: '250',
  },
  {
    id: 4,
    image: t4,
    backColor: '#FBFAE6',
    name: 'Phyto-ceramid deep moisturiser',
    oldPrice: '400',
    newPrice: '350',
  },
  {
    id: 5,
    image: t5,
    backColor: 'yellow',
    name: 'Tinted Lippie - SPF 30',
    oldPrice: '100',
    newPrice: '50',
  },
];
const banners = [banner1, banner2, banner3, banner4, banner5];
const categories = [ca1, ca2, ca3, ca4, ca5, ca6];
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Home({navigation: {navigate}}) {
  const [active, setActive] = React.useState(0);
  const [addedNoti, setAddedNoti] = useState(null);
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

  const renderProduct = ({item, index}) => {
    return <ProductCard item={item} setAddedNoti={setAddedNoti} />;
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
        <CustomText
          variant="subtext"
          text="Check out our new line of products"
          style={{letterSpacing: -0.5, paddingHorizontal: '4%'}}
        />
        <Carousel
          data={top}
          renderItem={renderProduct}
          sliderWidth={w}
          itemWidth={w / 2.8}
          slideStyle={{marginLeft: 10}}
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

    marginVertical: '1%',
  },
});
