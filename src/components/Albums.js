/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import theme from '../../assets/themes';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Separator from './Separator';

const Albums = ({navigation, navigation: {setOptions}}) => {
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Hello')}>
          <View style={styles.openSheetButton}></View>
        </TouchableOpacity>
      ),
    });
  });
  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} navigation={navigation} />
              {index === 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Albums;
const styles = StyleSheet.create({
  albumContainer: {
    flex: 1,
    marginBottom: theme.spacing.l,
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.sm,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
