import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabs = createBottomTabNavigator();
import { HomeIcon, ProfileIcon, SettingsIcon } from "../components/SvgIcons";
// import ImageGallery from "../components/ImageGallery";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import HomeStack from "./HomeStack";
import NavigationStrings from "../constants/NavigationStrings";
const Tabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // headerTitleAlign: "center",
        // headerTitleStyle: { fontFamily: "bold" },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Nav") {
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
      {/* <BottomTabs.Screen name="Nav" component={Index} /> */}
      <BottomTabs.Screen name="Nav" component={HomeStack} />
      <BottomTabs.Screen name={NavigationStrings.PROFILE} component={Profile} />
      <BottomTabs.Screen
        name={NavigationStrings.SETTINGS}
        component={Settings}
      />
    </BottomTabs.Navigator>
  );
};

export default Tabs;
