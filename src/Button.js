import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
  }
});

const Button = () => (
  <View style={style.wrapper}>
    <Text>Button</Text>
  </View>
);

export default Button;
