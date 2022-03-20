/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import theme from '../../assets/themes';

const Avatars = ({avatar}) => {
  return (
    <View>
      {avatar.map(
        (item, index) => (
          <Image
            key={index}
            source={item.image}
            style={[
              styles.avatarStyle,
              {zIndex: index, marginLeft: index * 16},
              // eslint-disable-next-line react-native/no-inline-styles
              index !== avatar.length - 1 && {position: 'absolute'},
            ]}
          />
        ),
        // console.log(index),
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  avatarStyle: {
    resizeMode: 'cover',
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
});
export default Avatars;
