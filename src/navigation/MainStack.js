/* eslint-disable prettier/prettier */
import React from "react";
import DrawerStack from "./DrawerStack";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Drawers" component={DrawerStack} />
    </>
  );
}
