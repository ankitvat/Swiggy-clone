import React, {useState, useEffect} from 'react';
import {
  View,
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
import ca1 from '../assets/images/categories/1.png';
import ca2 from '../assets/images/categories/2.png';
import ca3 from '../assets/images/categories/3.png';
import ca4 from '../assets/images/categories/4.png';
import ca5 from '../assets/images/categories/5.png';
import ca6 from '../assets/images/categories/6.png';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import t1 from '../assets/images/topSection/t1.png';
import t2 from '../assets/images/topSection/t2.png';
import t3 from '../assets/images/topSection/t3.png';
import t4 from '../assets/images/topSection/t4.png';
import t5 from '../assets/images/topSection/t5.png';
import ProductCard from '../components/home/ProductCard';
import theme from '../utils/theme';
import {useSelector} from 'react-redux';

const top = [
  {
    id: 1,
    image: t1,
    backColor: '#F5F5F5',
    name: 'Fried Rice - Hakka Noodles Combo',
    oldPrice: '165',
    newPrice: '89',
    quantity: 0,
  },
  {
    id: 2,
    image: t2,
    backColor: '#FDF8F5',
    name: 'Keventers- Chocolate Vanilla Combo',
    oldPrice: '480',
    newPrice: '250',
    quantity: 0,
  },
  {
    id: 3,
    image: t3,
    backColor: '#E3F4F1',
    name: 'Chicken Paranta (Spicy)',
    oldPrice: '200',
    newPrice: '80',
    quantity: 0,
  },
  {
    id: 4,
    image: t4,
    backColor: '#FBFAE6',
    name: 'Veg Lettuce-Coleslaw Burger',
    oldPrice: '129',
    newPrice: '79',
    quantity: 0,
  },
  {
    id: 5,
    image: t5,
    backColor: 'yellow',
    name: 'Chicken Sub with Cookies (Dual Combo)',
    oldPrice: '300',
    newPrice: '169',
    quantity: 0,
  },
];
const banners = [banner1, banner2, banner3, banner4, banner5];
const categories = [ca1, ca2, ca3, ca4, ca5, ca6];
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Home({navigation: {navigate}}) {
  const cartQuantity = useSelector(state => state.cart);

  const [active, setActive] = React.useState(0);
  const [addedNoti, setAddedNoti] = useState(null);
  const [carousel, setCarousel] = React.useState(null);

  // useEffect(() => {
  //   dispatch(
  //     setCartItems({
  //       cartItems: [
  //         {
  //           id: 1,
  //           name: 'KYu',
  //           oldPrice:100,
  //           newPrice: 100,
  //           quantity: 1,
  //         },
  //       ],
  //     }),
  //   );
  // }, []);

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
    return (
      <ProductCard
        item={item}
        quantity={cartQuantity[item.id]}
        setAddedNoti={setAddedNoti}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
        bouncesZoom={false}
        contentContainerStyle={styles.parentLayout}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="location"
              size={scale(24)}
              color="#000"
              style={{marginTop: '8%'}}
            />
            <CustomText
              variant="h4"
              bold
              text="Home"
              style={{letterSpacing: -1.5}}
            />
          </View>
          <View style={styles.icons}>
            <Icon
              name="bell"
              size={scale(30)}
              color={theme.colors.black}
              style={{paddingRight: '1%'}}
            />
            <Icon name="gear" size={scale(30)} color={theme.colors.black} />
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <CustomText
            variant="subtext"
            text="Frequently bought products."
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
        <CustomText
          variant="h4"
          bold
          style={{letterSpacing: -1, width: w, paddingHorizontal: '4%'}}
          text="Just for you"
        />
        <View style={styles.couponContainer}>
          <CustomText
            variant="small"
            bold
            style={{textTransform: 'uppercase'}}
            text="Use code 'OFF50' for Flat 50% off!"
          />
          <CustomText
            variant="terms"
            text="*Valid only on selected products"
            gray
          />
        </View>
        <CustomText
          variant="h4"
          bold
          text="New Releases"
          style={{
            letterSpacing: -1,
            width: w,
            paddingHorizontal: '4%',
            marginVertical: '10%',
          }}
        />
        <View style={[styles.carouselContainer, {marginVertical: '-10%'}]}>
          <CustomText
            variant="subtext"
            text="Check out our new line of products."
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
        <View style={styles.bannerLayout}>
          <Carousel
            data={banners}
            renderItem={renderBanner}
            sliderWidth={w * 0.9}
            itemWidth={w * 0.9}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            onBeforeSnapToItem={index => setActive(index)}
            lockScrollWhileSnapping={true}
            autoplay={true}
            autoplayInterval={3000}
            enableSnap={true}
            loop={true}
          />
        </View>
        <Pagination
          dotsLength={banners.length}
          containerStyle={{
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          activeDotIndex={active}
          dotStyle={{
            width: scale(8),
            height: scale(8),
            backgroundColor: theme.colors.black,
            borderRadius: scale(4),
          }}
          inactiveDotStyle={{
            backgroundColor: theme.colors.lightGray,
          }}
          inactiveDotScale={1}
        />

        <CustomText
          variant="h4"
          bold
          text="Shop by Category"
          style={{
            letterSpacing: -1,
            width: w,
            paddingHorizontal: '4%',
            marginVertical: '10%',
            marginTop: '15%',
          }}
        />
        <CustomText
          variant="subtext"
          text="Browse our wide range of products."
          style={{
            letterSpacing: -1,
            paddingHorizontal: '4%',
            width: w,
            marginTop: '-8%',
          }}
        />
        <View style={styles.categories}>
          {/* <FlatList 
						numColumns={2}
						data={categories}
            nestedScrollEnabled={true}
						renderItem={renderCategory}
            scrollEnabled={false}
						showsVerticalScrollIndicator={false}
					/> */}
          {categories.map((item, index) => {
            return (
              <View style={styles.category} key={index}>
                <Image source={item} style={styles.categoryImage} />
              </View>
            );
          })}
        </View>
        <CustomText
          variant="h3"
          bold
          text="Best Sellers"
          style={{
            letterSpacing: -1,
            width: w,
            paddingHorizontal: '4%',
            marginVertical: '-5%',
          }}
        />
        <View
          style={[
            styles.carouselContainer,
            {marginVertical: '3%', paddingBottom: '10%'},
          ]}>
          <CustomText
            variant="subtext"
            text="Try our best selling products."
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
    marginRight: '5%',
  },
  icons: {
    flexDirection: 'row',
    marginTop: '1%',
    marginRight: '-5%',
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
  couponContainer: {
    marginTop: '5%',
    width: w / 1.2,
    borderRadius: scale(10),
    backgroundColor: '#ffedcf',
    borderColor: '#FCCC8C',
    borderWidth: 1,

    paddingVertical: '3%',
    alignItems: 'center',
  },
  bannerLayout: {
    width: w,
    marginVertical: '10%',
    alignItems: 'center',
    height: h / 3.8,
    overflow: 'hidden',
  },
  bannerContainer: {
    overflow: 'hidden',
  },
  banner: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: scale(5),
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    width: w,
    marginTop: h / 25.8,
    height: h / 1.03,
  },
  category: {
    height: h / 3.9,
    paddingHorizontal: '2%',
  },
  categoryImage: {
    borderRadius: scale(5),
    resizeMode: 'contain',
    marginBottom: '10%',
    width: w / 2.2,
  },
});
