import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image,FlatList} from 'react-native';
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
    <SafeAreaView style = {styles.parentLayout}>

		</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  parentLayout: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '5%',
    backgroundColor: '#EBEBEB',
		flexDirection:'column',
		flex:1

  },
 
});
