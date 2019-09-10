import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => (
  <Text style={{ ...Styles.title, ...props.style }}>{props.children}</Text>
);

const Styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default TitleText;
