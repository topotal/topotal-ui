import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red'
  }
});

const Button = () => React.createElement(
  View,
  { style: style.wrapper },
  React.createElement(
    Text,
    null,
    'Button'
  )
);

export default Button;