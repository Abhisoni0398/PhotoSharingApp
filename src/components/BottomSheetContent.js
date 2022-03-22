/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';

const BottomSheetContent = () => {
  return (
    <View style={styles.contentWrapper}>
      <Text>BottomSheetContent</Text>
    </View>
  );
};

export default BottomSheetContent;
const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 250,
  },
});
