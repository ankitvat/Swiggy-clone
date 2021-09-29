import React from 'react'
import { View, Animated,Dimensions, StyleSheet } from 'react-native'
import { scale } from '../utils/fonts';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Pagination({data, scrollX}) {
	return (
		<View style = {styles.container}>
			{data.map((_,i) => {
				const inputRange = [(i-1)*w,i*w,(i+1)*w];
				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [8,16,8],
					extrapolate:'clamp',
				});

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3,1,0.3],
					extrapolate:'clamp',
				});
				return <Animated.View style = {[styles.dot,{width:dotWidth, opacity:opacity }]} key ={i.toString()} />;
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		height:64,
		position:'absolute',
		top:'79%',
		left:'41.8%',
	},dot:{
		height:8,
	
		borderRadius:scale(25),
		backgroundColor:'black',
		marginHorizontal:scale(6),
	},

});