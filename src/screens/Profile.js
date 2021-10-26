import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import CustomText from '../components/Text/CustomText';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/EvilIcons';

export default function Profile({navigation: {navigate}}) {
  return (
    <SafeAreaView style={styles.parentLayout}>
      <CustomText variant="h2" bold text="Your Profile" style={styles.title} />
      <View style={styles.profileContainer}>
        <Icon />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentLayout: {
    flex: 1,
    padding: '4%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: '8%',
    paddingVertical: '1%',
    letterSpacing: -1.5,
    width: w,
    paddingHorizontal: '4%',
  },
  profileContainer: {
    width: w,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '4%',

    height: '20%',
  },
});
