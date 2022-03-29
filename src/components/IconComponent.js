/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import theme from '../../assets/themes';
const {width} = Dimensions.get('window');
// import { TouchableOpacity } from 'react-native-gesture-handler';

const IconComponent = ({iconName, googleLogin}) => {
  return (
    <View>
      <TouchableOpacity style={styles.socialButton} onPress={googleLogin}>
        <Icon
          name={iconName}
          type="font-awesome"
          size={20}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconComponent;
const styles = StyleSheet.create({
  socialButton: {
    marginTop: 20,
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: '12%',
    padding: 10,
    borderRadius: 10,
  },
});
