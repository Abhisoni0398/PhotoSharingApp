import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import SharedAlbum from "../components/SharedAlbum";
import ImageGallery from "../components/ImageGallery";
import TabStack from "./TabStack";
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
