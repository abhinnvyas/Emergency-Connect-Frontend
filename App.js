import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
}
