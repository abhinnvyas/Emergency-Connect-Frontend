import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import Toast from "react-native-toast-message";
import StoreProvider from "./redux/store/StoreProvider";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/slices/tokenSlice";

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigator />
      </NavigationContainer>
      <Toast />
    </StoreProvider>
  );
}
