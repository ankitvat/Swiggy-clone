
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { verticalScale } from '../utils/fonts';
import CustomText from '../components/Text/CustomText';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function OnboardingItem({item}){

	return(
		<View style = {[styles.container,{width:w}]}>
			<Image source = {item.image} style = {styles.image}/>
			<View style ={{flex:0.3, width:'100%',paddingHorizontal:'10%',flexShrink:1}}>
				<CustomText variant = "h2" bold text = {item.text} />
				<CustomText variant= "text" style ={{lineHeight:28}}text = {item.subtext} />
			</View>
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height:verticalScale(450),
		justifyContent:'center',
		alignItems: 'center',
	},
	image: {
		width:w,
		resizeMode:'contain',
		flex:0.7,
		justifyContent:'center',
	},
});