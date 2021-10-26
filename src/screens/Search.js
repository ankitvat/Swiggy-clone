import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import CustomText from '../components/Text/CustomText';
import {scale} from '../utils/fonts';
import theme from '../utils/theme';
import Icon from 'react-native-vector-icons/AntDesign';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Search({navigation: {navigate}}) {
  return (
    <SafeAreaView style={styles.parentLayout}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <CustomText
          style={styles.header}
          variant="h2"
          bold
          text="What are you looking for?"
        />
        <View style={styles.searchBar}>
          <Icon name="search1" size={scale(20)} color="black" />
          <TextInput
            style={{flex: 1}}
            placeholder="Search for a product, brand or category   "
            placeholderTextColor={theme.colors.lightGray}
            underlineColorAndroid="transparent"
            style={{
              fontFamily: 'Circular Std Book',
              fontSize: scale(12),
              color: 'black',
              marginLeft: '2%',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentLayout: {
    flex: 1,

    backgroundColor: '#EBEBEB',
  },
  container: {
    justifyContent: 'flex-start',
    paddingVertical: '10%',
    paddingHorizontal: '4%',
    width: w,
  },
  header: {
    letterSpacing: -1.5,
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: '2%',
    borderWidth: 1,
    borderColor: theme.colors.cream,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: scale(10),
    paddingHorizontal: '3%',
    height: '50%',
    backgroundColor: 'white',
  },
});
