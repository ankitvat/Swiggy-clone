import React from 'react';
import {
  View,
  Text,
  StyleSheet,
	SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../components/Text/CustomText';
import {scale} from '../utils/fonts';
import theme from '../utils/theme';

import Icon from 'react-native-vector-icons/MaterialIcons';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import Facebook from '../assets/icons/facebook.svg';
import Google from '../assets/icons/google.svg';
import Phone from '../assets/icons/phone.svg';
import Signup from '../assets/icons/login.svg';
const data = [
  {
    name: 'Facebook',
    image: Facebook,
    color: '#4060B8',
  },
  {
    name: 'Google',
    image: Google,
    color: '#FEFDF8',
  },
  {
    name: 'Phone',
    image: Phone,
    color: '#D4ECD4',
  },
  {
    name: 'Sign up',
    image: Signup,
  },
];
export default function Login({navigation: {navigate}}) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginVertical: '10%',
          marginTop: '12%',
          width: w,
          paddingHorizontal: '6%',
        }}>
        <Text style={styles.heading}>Hello There.</Text>
      </View>
      <View style={styles.loginform}>
        <CustomText
          variant="h4"
          bold
          text="Enter your credentials below."
          style={{paddingHorizontal: '3%'}}
        />
        <CustomText
          variant="text"
          text="Username"
          style={{paddingHorizontal: '3%'}}
        />
        <TextInput
          underlineColorAndroid="rgba(0,0,0,0)"
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit={true}
          placeholder="Enter your username"
          placeholderTextColor="#D4D4D4"
          style={{
            backgroundColor: theme.colors.white,
            paddingHorizontal: '3%',
            paddingVertical: '3%',
            borderRadius: scale(10),
            color: 'black',
            fontFamily: 'Circular Std Book',
            fontSize: scale(16),
          }}
        />
        <CustomText
          variant="text"
          text="Password"
          style={{paddingHorizontal: '3%', marginTop: '4%'}}
        />
        <TextInput
          underlineColorAndroid="rgba(0,0,0,0)"
          spellCheck={false}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit={true}
          placeholder="Enter your password"
          placeholderTextColor="#D4D4D4"
          style={{
            backgroundColor: theme.colors.white,
            paddingHorizontal: '3%',
            paddingVertical: '3%',
            borderRadius: scale(10),
            color: 'black',
            fontFamily: 'Circular Std Book',
            fontSize: scale(16),
          }}
        />
        <CustomText
          variant="small"
          text="Forgot password?"
          style={{paddingLeft: '2%', color: '#0484CC'}}
        />
        <TouchableOpacity onPress={() => navigate('BottomNavigator')} style={styles.button}>
          <CustomText
            onPress={() => navigate('BottomNavigator')}
            variant="text"
            bold
            white
            text="Log In"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomForm}>
        <View style={styles.divider}>
          <View
            style={{
              backgroundColor: '#7C8484',
              height: '2%',
              borderRadius: scale(5),
              width: '25%',
            }}
          />
          <CustomText variant="text" bold text="Or Login Using" />
          <View
            style={{
              backgroundColor: '#7C8484',
              height: '2%',
              borderRadius: scale(5),
              width: '25%',
            }}
          />
        </View>
      </View>
      <StatusBar backgroundColor="#EBEBEB" barStyle="dark-content" />
      <View style={styles.socials}>
        <View style={styles.top}>
          <View style={[styles.box1, {backgroundColor: '#4060B8'}]}>
            <Facebook width={25} height={25} />
            <CustomText variant="text" bold white text="Facebook" />
          </View>
          <View
            style={[
              styles.box1,
              {backgroundColor: '#FEFDF8', paddingHorizontal: '7%'},
            ]}>
            <Google width={25} height={25} />
            <CustomText variant="text" bold text="Google" />
          </View>
        </View>
        <View style={[styles.top, {marginTop: '-15%'}]}>
          <View
            style={[
              styles.box1,
              {backgroundColor: '#04D858', paddingRight: '8%'},
            ]}>
            <Phone width={55} height={55} />
            <CustomText variant="text" bold text="Mobile Number" num />
          </View>
          <View
            style={[
              styles.box1,
              {backgroundColor: '#0F0C14', paddingHorizontal: '6%'},
            ]}>
            <Icon name="person-add" color="#FFF" size={25} />
            <CustomText variant="text" white text="Sign Up" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.back,
  },
  heading: {
    fontSize: scale(55),
    color: 'black',
    width:w/1.5,
    fontFamily: 'Circular Std Black',
  },
  loginform: {flexDirection: 'column', width: w, paddingHorizontal: '2.5%'},
  bottomForm: {
    flexDirection: 'column',
    width: w,
    marginTop: '-6%',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: scale(38),
  },
  button: {
    marginTop: '5%',
    backgroundColor: 'black',
    padding: '2%',
    paddingHorizontal: '2%',
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: w / 3.8,
    marginLeft: w / 2.9,
  },
  socials: {
    flexDirection: 'column',
    alignItems: 'center',
    height: h / 3,
    marginTop: '-4%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: w,
    alignItems: 'center',
    height: '50%',
  },
  box1: {
    height: '40%',
    width: '43%',
    padding: '3%',
    paddingHorizontal: '5%',
    borderRadius: scale(5),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
