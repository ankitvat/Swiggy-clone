import React, {useState, useRef} from 'react';
import { View, Text,Image, StyleSheet, Dimensions, Animated , FlatList, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

import CustomText from '../components/Text/CustomText';
import Pagination from '../components/Pagination';
import OnboardingItem from '../components/OnboardingItem';
import slides from '../utils/slides';
import NextButton from '../components/NextButton';
import { moderateScale, scale } from '../utils/fonts';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;



export default function Onboarding({navigation:{navigate}}){
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);
	
	const scrollTo = () => {
		if(currentIndex < slides.length-1){
			slidesRef.current.scrollToIndex({
				index: currentIndex+1,
		})}
		else{
			console.log('hello');
		}
	
	};
	
	const viewConfig =useRef({viewAreaCoveragePercentThreshold: 50}).current;
	return(
		<SafeAreaView style = {styles.parentLayout}>
			<StatusBar backgroundColor = '#EBEBEB' barStyle = 'dark-content'/>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator = {false}
				data={slides}
				pagingEnabled
				// onViewableItemsChanged={viewableItemsChanged}
				onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
				bounces={false}
				scrollEventThrottle={32}
				ref={slidesRef}
				viewabilityConfig={viewConfig}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => 
				 <OnboardingItem item={item} />
			}
			/>
			<Pagination data ={slides} scrollX ={scrollX}  />
			<TouchableOpacity onPress ={() =>navigate('Login')} style = {styles.button}><CustomText variant = "text" text="Let's get started" style = {{color:'white'}} /></TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	parentLayout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#EBEBEB',
		
	},
	container: {
		
		height: '120%',
		justifyContent:'center',
		alignItems: 'center',
	},
	image: {
		width:w,
		resizeMode:'contain',
		flex:0.7,
		justifyContent:'center',
	},
	button:{
		marginBottom:'10%',
		backgroundColor:'black',
		padding:'3%',
		paddingHorizontal:moderateScale(40),
		borderRadius:scale(50)
	},
});