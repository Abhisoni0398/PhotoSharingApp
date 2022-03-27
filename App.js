import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigation/Index';
import {LogBox} from 'react-native';
import Onboarding from './src/components/OnBoarding';
import SignIn from './src/Screens/SignIn';
LogBox.ignoreLogs(['VirtualizedLists']);
const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);
  const onBoardHandleDone = () => {
    setShowOnBoarding(false);
  };
  return (
    <NavigationContainer>
      <SignIn />
      {/* {showOnBoarding ? <Onboarding handleDone={onBoardHandleDone} /> : <Nav />} */}
    </NavigationContainer>
  );
};
export default App;
