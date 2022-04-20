import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Albums from "../components/Albums";
import SharedAlbum from "../components/SharedAlbum";

export default HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={Albums} />

      <Stack.Screen name="SharedAlbum" component={SharedAlbum} />
    </Stack.Navigator>
  );
};
