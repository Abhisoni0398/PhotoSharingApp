import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../authScreens/SignIn";
import SignUp from "../authScreens/SignUp";
const Stack = createNativeStackNavigator();
import Tabs from "./Tabs";
import NavigationStrings from "../constants/NavigationStrings";

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationStrings.SIGNIN} component={SignIn} />
      <Stack.Screen name={NavigationStrings.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};
export default Auth;
