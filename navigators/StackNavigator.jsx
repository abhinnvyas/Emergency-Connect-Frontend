import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SOSScreen from "../screens/SOSScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ActiveAlertScreen from "../screens/ActiveAlertScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="get_started" component={GetStartedScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="activeAlert" component={ActiveAlertScreen} />

      {/* Home Screen  */}
      <Stack.Screen name="tabsHome" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
