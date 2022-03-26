import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigation/Index';
import {LogBox} from 'react-native';
import Onboarding from './src/components/OnBoarding';
LogBox.ignoreLogs(['VirtualizedLists', 'seems like you']);
const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);
  const onBoardHandleDone = () => {
    setShowOnBoarding(false);
  };
  return (
    <NavigationContainer>
      {showOnBoarding ? <Onboarding handleDone={onBoardHandleDone} /> : <Nav />}
    </NavigationContainer>
  );
};
export default App;
