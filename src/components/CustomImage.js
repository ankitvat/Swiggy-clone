import React from 'react';
import {View, Image} from 'react-native';

export default function CustomText(props) {
  return (
    <View
      style={[
        {
          width: props.width,
          height: props.height,
          filter: props.filter,
          aspectRatio: props.aspectRatio,
        },
        props.style || {},
      ]}>
      <Image
        source={props.source}
        onPress={props.onPress}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: props.resizeMode,
        }}
      />
    </View>
  );
}