import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../utils/fonts';

export default function NextButton({percentage, scrollTo}) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    animation(percentage);
  }, [percentage]);
	

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset = circumference - (circumference * value.value) / 100;
			
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset
        });
      }
    });
  }, [percentage]);

	useEffect(()=>{
		progressAnimation.removeAllListeners();
	});

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="white"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="black"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress ={scrollTo} style={styles.button} activeOpacity={0.6}>
        <Icon name="east" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 100,
    padding: 18,
  },
});
