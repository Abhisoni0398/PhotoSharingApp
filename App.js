import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigation/Index';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists']);
const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};
export default App;
