import React, { useState } from "react";
import Onboarding from "../components/OnBoarding";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "../redux/store";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
const Stack = createNativeStackNavigator();
export default Routes = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onBoardHandleDone = () => {
    setShowOnBoarding(false);
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* {showOnBoarding ? (
          <Onboarding handleDone={onBoardHandleDone} />
        ) : isLoggedIn ? (
          <Tabs />
        ) : (
          <Tabs />
        )} */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito",
              fontWeight: "700",
              fontStyle: "normal",
              fontSize: 18,
              lineHeight: 25,
              color: "#000000",
            },
          }}
        >
          {AuthStack(Stack)}
          {MainStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
