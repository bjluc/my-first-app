import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => (
  <Text style={{ ...Styles.body, ...props.style }}>{props.children}</Text>
);

const Styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;
