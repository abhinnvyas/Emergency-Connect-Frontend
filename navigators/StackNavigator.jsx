import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SOSScreen from "../screens/SOSScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ActiveAlertScreen from "../screens/ActiveAlertScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import YourAlertsScreen from "../screens/YourAlertsScreen";
import isAuthenticated from "../utils/isAuthenticated";
import LoadingScreen from "../screens/LoadingScreen";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authenticated = await isAuthenticated();
      setUserAuthenticated(authenticated);
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log("Something Rannnnnnn");
    const unsubscribe = navigation.addListener("state", async () => {
      const authenticated = await isAuthenticated();
      setUserAuthenticated(authenticated);
      setIsLoading(false);
    });
    unsubscribe();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={userAuthenticated ? "tabsHome" : "login"}
      screenOptions={{ headerShown: false }}
    >
      {/* Non-Authenticated Screens */}
      {/* {!userAuthenticated && ( */}
      {/* <Stack.Group> */}
      {/* <Stack.Screen name="get_started" component={GetStartedScreen} /> */}
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      {/* </Stack.Group> */}
      {/* )} */}

      {/* Authenticated Screens */}
      {/* {userAuthenticated && ( */}
      {/* <Stack.Group> */}
      <Stack.Screen name="tabsHome" component={BottomTabsNavigator} />

      <Stack.Screen name="activeAlert" component={ActiveAlertScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="editProfile" component={EditProfileScreen} />
      <Stack.Screen name="yourAlerts" component={YourAlertsScreen} />

      {/* Home Screen  */}
      {/* </Stack.Group> */}
      {/* )} */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
