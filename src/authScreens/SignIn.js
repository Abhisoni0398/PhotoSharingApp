/* eslint-disable prettier/prettier */
import {View, Text, TextInput, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import backgroundImage from '../../assets/backgroundImage/background.jpg';
import theme from '../../assets/themes';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';
import Footer from '../components/Footer';
// import SignUp from './SignUp';
const SignIn = ({navigation}) => {
  const move = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ImageBackground source={backgroundImage} style={{flex: 1}}>
      <View style={styles.mainView}>
        <Text style={styles.login}>Login</Text>
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
        <Button move={move} text={'Login'} />
        <SocialLogin />
      </View>
      <Footer text1={"Don't have an account"} text2={'SignUp'} move={move} />
    </ImageBackground>
  );
};

export default SignIn;
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
