import React, { useEffect, useState } from "react";
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

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authenticated = await isAuthenticated();
      setUserAuthenticated(authenticated);
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Non-Authenticated Screens */}
      {!userAuthenticated && (
        <>
          <Stack.Screen name="get_started" component={GetStartedScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
        </>
      )}

      {/* Authenticated Screens */}
      {userAuthenticated && (
        <>
          <Stack.Screen name="activeAlert" component={ActiveAlertScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="editProfile" component={EditProfileScreen} />
          <Stack.Screen name="yourAlerts" component={YourAlertsScreen} />

          {/* Home Screen  */}
          <Stack.Screen name="tabsHome" component={BottomTabsNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
