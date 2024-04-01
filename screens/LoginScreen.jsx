import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import EmergencyConnectHeading from "../components/EmergencyConnectHeading";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import DefaultModal from "../components/Modal/DefaultModal";
import * as SecureStore from "expo-secure-store";
import { login } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/slices/tokenSlice";

const LoginScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // const token = useSelector((state) => state.token.value);
  // dispatch(setToken(""));

  const handleLogin = () => {
    if (!Email || !Password) {
      Toast.show({
        type: "error",
        text1: "Required Fields Missing",
        text2: "Please enter your email and password to login.",
      });
      return;
    }

    setIsLoading(true);
    login(Email, Password)
      .then((response) => {
        console.log("Response: ", response);
        if (!response) {
          Toast.show({
            type: "info",
            text1: "Failed to Log you in.",
            text2: "Something unexpected occured. Please try again.",
          });
          setIsLoading(false);
          return;
        }
        if (response.status) {
          Toast.show({
            type: "success",
            text1: "Login Successful",
            text2: response.msg,
          });
          // Save the token in the Context-API or the Local Storage
          SecureStore.setItemAsync("token", response.token)
            .then(() => {
              dispatch(setToken(response.token));
              setIsLoading(false);
            })
            .catch((err) => {
              Toast.show({
                type: "error",
                text1: "Please Try Again",
              });
            });
        } else {
          // User not Found
          Toast.show({
            type: "error",
            text1: "Login Failed",
            text2: response.msg,
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(
          "Error at screens/LoginScreen.jsx: handleLogin() : ",
          error.message
        );
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: "Please try again.",
        });
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center px-6">
      <EmergencyConnectHeading />

      <View className="flex items-center space-y-2 w-full mt-5 ">
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Email</Text>
          <TextInput
            textContentType="emailAddress"
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your Email"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Password</Text>
          <TextInput
            textContentType="password"
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4 "
            defaultValue={Password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your Password"
          />
        </View>
        <View className="w-full">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-my_accent mt-4 w-full p-2 rounded-full shadow-md shadow-black  flex items-center justify-center "
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            className=" w-full p-2 mt-4 border border-my_accent bg-transparent rounded-full flex items-center justify-center "
          >
            <Text className="text-my_accent font-semibold text-md">
              New here? Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <DefaultModal isVisible={isLoading}>
        <ActivityIndicator size={"medium"} color={"#FF8934"} />
        <Text className="text-my_accent font-bold text-lg mt-2">
          Please Wait
        </Text>
      </DefaultModal>
    </SafeAreaView>
  );
};

export default LoginScreen;
