import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Image,FlatList} from 'react-native';
import {Settings, Bell} from 'react-native-feather';
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
				<Image source={item} style={styles.banner}/>
			</View>
		);
	};
  return (
    <ScrollView
      contentContainerStyle={styles.parentLayout}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
      <View style={styles.topHeader}>
        <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <CustomText variant="h0" bold text="Trending" />
          <CustomText
            variant="h0"
            text="these days."
            style={{marginTop: '-5%'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '7%',
            width: w / 5,
            justifyContent: 'space-around',
          }}>
          <Bell width={25} height={25} color="#000" />
          <Settings width={25} height={25} color="#000" />
        </View>
      </View>
			<View style={styles.carouselContainer}>
				<Carousel 
					data={banners}
					inactiveSlideOpacity={1}
					inactiveSlideScale={1}
					onBeforeSnapToItem={(index) => setActive(index)}
					renderItem={renderBanner}
					sliderWidth={w*0.95}
					itemWidth={w*0.95}
					loop={true}
					enableSnap={true}
					autoplayInterval={3000}
					autoplay={true}
				/>
				<Pagination 
					dotsLength={banners.length}
					activeDotIndex={active}
					containerStyle={{
						paddingHorizontal: 0,
            paddingVertical: 0,
            marginVertical: '4%',
					}}
					dotStyle={{
            width: scale(8),
            height: scale(8),
            backgroundColor: theme.colors.black,
            borderRadius: scale(4),
          }}
          inactiveDotStyle={{
            backgroundColor: '#000',
          }}
				/>
				</View>
				<View style = {styles.categories}>
					<CustomText variant="h1"  text="Shop by Category"  />
					<CustomText variant = "subtext" text="Curated just for you" style = {{marginTop:'-1%',marginLeft:'0.2%'}} />
					<FlatList 
						numColumns={2}
						data={categories}
						renderItem={renderCategory}
						
						showsVerticalScrollIndicator={false}
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
		flexDirection:'column',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
		position:'absolute',
    flexShrink: 1,
		paddingTop:'7%',
    paddingHorizontal: '5%',
  },
	bannerContainer: {
		width: w*0.95,
		height: '100%',
		flexDirection:'column',
		marginTop:'5%',
		
	},
	carouselContainer:{
		height:'28%',
		marginTop:'28%',

	},
	banner:{
		resizeMode:'cover',
		width:w*0.95,
		height:'100%',
		borderRadius:scale(10),
	},
	categories:{
		width:w,
		height:h,
		paddingHorizontal:'4%',
		flexDirection:'column',
		
	},
	category:{
		
		flex:1,
		height:h/4.2,
		paddingBottom:'5%',
	},
	categoryImage:{
		borderRadius:scale(10),
		resizeMode:'contain',
		width:w/2.2,
		
		
	},
});
