import React, { useState } from "react";
// import Auth from "./src/navigation/Auth";
import { LogBox } from "react-native";
import Onboarding from "./src/components/OnBoarding";
import Routes from "./src/navigation/Routes";
LogBox.ignoreLogs(["VirtualizedLists"]);
const App = () => {
  return <Routes />;
};
export default App;
