import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Profile({navigation:{navigate}}) {
	return (
		<View style = {styles.parentLayout}>
			<Text>Profile</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	parentLayout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EBEBEB',

	},
});
