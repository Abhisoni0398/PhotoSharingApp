import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../authScreens/SignIn";
import SignUp from "../authScreens/SignUp";
const Stack = createNativeStackNavigator();
import Tabs from "./Tabs";

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default Auth;
