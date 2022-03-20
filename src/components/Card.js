/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';
import Avatars from './Avatars';

const Card = ({item, navigation}) => {
  return (
    <ImageBackground source={item.background} style={styles.ImageBackground}>
      <Pressable
        onPress={() =>
          navigation.navigate('SharedAlbum', {
            album: item,
          })
        }>
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text
              style={styles.imageSubTitle}>{`Created By ${item.user}`}</Text>
          </View>
          <View style={styles.avatar}>
            <Avatars avatar={item.avatars} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default Card;
const styles = StyleSheet.create({
  ImageBackground: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
  },
  imageContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubTitle: {
    ...theme.textVariants.body1,
    color: theme.colors.white,
  },
});
