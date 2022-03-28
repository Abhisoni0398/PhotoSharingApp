import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigation/Index';
import {LogBox} from 'react-native';
import Onboarding from './src/components/OnBoarding';
import SignIn from './src/authScreens/SignIn';
import SignUp from './src/authScreens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['VirtualizedLists']);
const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);
  const onBoardHandleDone = () => {
    setShowOnBoarding(false);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      {/* {showOnBoarding ? <Onboarding handleDone={onBoardHandleDone} /> : <Nav />} */}
    </NavigationContainer>
  );
};
export default App;
