/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';

const Footer = ({text1, text2, move}) => {
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.footerText}>{text1} </Text>
      <TouchableOpacity onPress={move}>
        <Text style={styles.textColor}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  footerStyle: {
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  footerText: {
    color: theme.colors.white,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textColor: {
    color: theme.colors.orange,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '500',
    letterSpacing: 0.5,
    fontSize: 15,
  },
});
