import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ActiveAlertScreen from "../screens/ActiveAlertScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import YourAlertsScreen from "../screens/YourAlertsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import * as SecureStore from "expo-secure-store";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/slices/tokenSlice";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.token.value);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(token);
    const fetchFromSecureStore = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Failed to confirm your identity.",
          text2: "Please try again.",
        });
      }
      if (!token) {
        setIsLoading(false);
        return;
      }
      dispatch(setToken(token));
      // Toast.show({
      //   type: "success",
      //   text1: "Token: ",
      //   text2: token,
      // });
      setIsLoading(false);
    };
    fetchFromSecureStore();
    console.log(Boolean(token));
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="tabsHome" component={BottomTabsNavigator} />

          <Stack.Screen name="activeAlert" component={ActiveAlertScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="editProfile" component={EditProfileScreen} />
          <Stack.Screen name="yourAlerts" component={YourAlertsScreen} />
        </>
      )}
      {/* <Stack.Screen name="get_started" component={GetStartedScreen} /> */}
      {/* </Stack.Group> */}
      {/* )} */}

      {/* Authenticated Screens */}
      {/* {userAuthenticated && ( */}
      {/* <Stack.Group> */}

      {/* Home Screen  */}
      {/* </Stack.Group> */}
      {/* )} */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
