/* eslint-disable prettier/prettier */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Tabs from "./TabStack";
export default function (Stack) {
  return (
    <>
      {/* <Stack.Screen name="DrawerStack" component={DrawerStack} /> */}
      <Stack.Screen name="Albums" component={Albums} />

      <Stack.Screen name="SharedAlbum" component={SharedAlbum} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </>
  );
}
