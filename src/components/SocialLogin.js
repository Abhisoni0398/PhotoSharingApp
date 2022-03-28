/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';
import IconComponent from './IconComponent';
const SocialLogin = () => {
  return (
    <View>
      <View style={styles.separator}>
        <View style={styles.lineStyle} />
        <Text style={styles.lineText}>Or login with</Text>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.iconStyle}>
        <IconComponent iconName={'google'} />
        <IconComponent iconName={'apple'} />
        <IconComponent iconName={'facebook'} />
      </View>
    </View>
  );
};

export default SocialLogin;
const styles = StyleSheet.create({
  separator: {
    width: '90%',
    paddingTop: 15,
    flexDirection: 'row',
  },
  lineStyle: {
    backgroundColor: 'white',
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  lineText: {
    alignSelf: 'center',
    color: theme.colors.white,
    paddingHorizontal: 5,
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  iconStyle: {flexDirection: 'row', justifyContent: 'space-around'},
});
