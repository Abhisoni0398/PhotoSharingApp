import React from "react";
import SignIn from "../authScreens/SignIn";
import SignUp from "../authScreens/SignUp";
import NavigationStrings from "../constants/NavigationStrings";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.SIGNIN} component={SignIn} />
      <Stack.Screen name={NavigationStrings.SIGNUP} component={SignUp} />
    </>
  );
}
