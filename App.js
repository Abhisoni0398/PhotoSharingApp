import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './src/navigation/Index';
import {LogBox} from 'react-native';
import Onboarding from './src/components/OnBoarding';
import SignIn from './src/authScreens/SignIn';
import SignUp from './src/authScreens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/redux/store';
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['VirtualizedLists']);
const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);
  const onBoardHandleDone = () => {
    setShowOnBoarding(false);
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        {/* {showOnBoarding ? <Onboarding handleDone={onBoardHandleDone} /> : <Nav />} */}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
