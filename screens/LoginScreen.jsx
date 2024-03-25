import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import EmergencyConnectHeading from "../components/EmergencyConnectHeading";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Login Pressed: ", Email, Password);
    navigation.navigate("register");
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
    </SafeAreaView>
  );
};

export default LoginScreen;
