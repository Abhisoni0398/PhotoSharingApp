/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import theme from '../../assets/themes';
import Avatars from './Avatars';
import backgroundImages from '../../assets/data/backgroundImages';
import ImageGallery from './ImageGallery';
const SharedAlbum = ({route}) => {
  const {album} = route.params;
  // console.log(album);
  return (
    <ScrollView>
      <View>
        <SharedAlbumTitleCard album={album} />
        <View style={styles.avatarContainer}>
          <Avatars avatar={album.avatars} />
          <Text
            style={
              styles.avatarContainerText
            }>{`${album.avatars.length} people`}</Text>
        </View>
        <ImageGallery images={backgroundImages} />
      </View>
    </ScrollView>
  );
};

export default SharedAlbum;
const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m,
  },
  avatarContainerText: {
    ...theme.textVariants.body3,
    color: theme.colors.gray,
  },
});
