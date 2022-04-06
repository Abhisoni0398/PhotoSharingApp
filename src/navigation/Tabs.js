import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabs = createBottomTabNavigator();
import { HomeIcon, ProfileIcon, SettingsIcon } from "../components/SvgIcons";
import ImageGallery from "../components/ImageGallery";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";

const Tabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "bold" },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "ImageGallery") {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === "Profile") {
            return <ProfileIcon color={color} size={size} />;
          }
          if (route.name === "Settings") {
            return <SettingsIcon color={color} size={size} />;
          }
        },
      })}
    >
      <BottomTabs.Screen name="ImageGallery" component={ImageGallery} />
      <BottomTabs.Screen name="Profile" component={Profile} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
};

export default Tabs;
