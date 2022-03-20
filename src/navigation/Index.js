/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Albums from '../components/Albums';
import SharedAlbum from '../components/SharedAlbum';
const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Nunito',
          fontWeight: '700',
          fontStyle: 'normal',
          fontSize: 18,
          lineHeight: 25,
          color: '#000000',
        },
      }}>
      <Stack.Screen
        name="Albums"
        component={Albums}
        options={
          {
            //   headerRight: () => <Icon name="circle-plus" />,
          }
        }
      />
      <Stack.Screen name="SharedAlbum" component={SharedAlbum} />
    </Stack.Navigator>
  );
};

export default Nav;
