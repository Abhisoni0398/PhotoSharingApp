/* eslint-disable prettier/prettier */
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';
const {width} = Dimensions.get('window');
const Input = props => {
  const {placeholder, placeholderTextColor, type} = props;
  return (
    <View style={styles.mainView}>
      <TextInput
        type={type}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.mailInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mailInput: {
    backgroundColor: theme.colors.white,
    width: width / 1.1,
    color: theme.colors.black,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: theme.spacing.m,
  },
});
export default Input;
