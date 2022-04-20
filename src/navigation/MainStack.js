/* eslint-disable prettier/prettier */
import React from "react";
import Tabs from "./TabStack";
import SharedAlbum from "../components/SharedAlbum";
import Albums from "../components/Albums";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Tabs" component={Tabs} />
    </>
  );
}
