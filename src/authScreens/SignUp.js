/* eslint-disable prettier/prettier */
import {View, Text, TextInput, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import backgroundImage from '../../assets/backgroundImage/background.jpg';
import theme from '../../assets/themes';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';
import Footer from '../components/Footer';
const SignUp = ({navigation}) => {
  const move = () => {
    navigation.navigate('SignIn');
    console.log('Hello');
  };
  return (
    <ImageBackground source={backgroundImage} style={{flex: 1}}>
      <View style={styles.mainView}>
        <Text style={styles.login}>Sign Up</Text>
        <Input
          type="text"
          placeholder="Enter email"
          placeholderTextColor={theme.colors.gray}
        />
        <Input
          type="text"
          placeholder="Enter Password"
          placeholderTextColor={theme.colors.gray}
        />
        <Input
          type="text"
          placeholder="Confirm Password"
          placeholderTextColor={theme.colors.gray}
        />
        <Button text={'SignUp'} move={move} />
        <SocialLogin />
      </View>
      <Footer
        text1={'Already have an account ?'}
        text2={'SignIn'}
        move={move}
      />
    </ImageBackground>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  login: {
    fontSize: 28,
    fontWeight: '500',
    color: theme.colors.white,
    letterSpacing: 2,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
