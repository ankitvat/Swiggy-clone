import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Search({navigation:{navigate}}) {
	return (
		<View style = {styles.parentLayout}>
			<Text>Search</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	parentLayout: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EBEBEB'
		
	},
});
