import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
  }
})

const Button: React.FC = () => (
  <View style={style.wrapper}>
    <Text>Button</Text>
  </View>
)

export default Button
