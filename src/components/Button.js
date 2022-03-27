/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';
const {width} = Dimensions.get('window');
const Button = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log('Hello World!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.orange,
    width: width / 1.1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: 20,
    letterSpacing: 0.5,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '500',
  },
});
