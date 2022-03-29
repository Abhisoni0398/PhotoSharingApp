/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import theme from '../../assets/themes';
import IconComponent from './IconComponent';
const SocialLogin = () => {
  useEffect(() => {
    GoogleSignin.configure();
  });

  const GoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Error occured', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('Error occured', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('Error occured', error);
      } else {
        // some other error happened
        console.log('Error occured', error);
      }
    }
  };

  return (
    <View>
      <View style={styles.separator}>
        <View style={styles.lineStyle} />
        <Text style={styles.lineText}>Or login with</Text>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.iconStyle}>
        <IconComponent iconName={'google'} googleLogin={GoogleSignIn} />
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
