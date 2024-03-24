import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import EmergencyConnectHeading from "../components/EmergencyConnectHeading";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Age, setAge] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = () => {
    console.log(
      "Register Pressed: ",
      Name,
      Email,
      Phone,
      Age,
      BloodGroup,
      Gender,
      Password
    );
    navigation.navigate("tabsHome");
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center px-6 ">
      <EmergencyConnectHeading />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="flex w-full space-y-2  mt-5"
      >
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Name</Text>
          <TextInput
            textContentType="name"
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your Full Name"
          />
        </View>
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
          <Text className="font-bold text-lg text-gray-600">Phone</Text>
          <TextInput
            textContentType="telephoneNumber"
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Enter your Phone Number"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Age</Text>
          <TextInput
            // textContentType=""
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Age}
            onChangeText={(text) => setAge(text)}
            placeholder="Enter your Age"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Blood Group</Text>
          <TextInput
            // textContentType=""
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={BloodGroup}
            onChangeText={(text) => setBloodGroup(text)}
            placeholder="Enter your Blood Group"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Gender</Text>
          <TextInput
            // textContentType=""
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Gender}
            onChangeText={(text) => setGender(text)}
            placeholder="Enter your Gender"
          />
        </View>
        <View className="w-full">
          <Text className="font-bold text-lg text-gray-600">Password</Text>
          <TextInput
            textContentType="password"
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your Password"
          />
        </View>
        <View className="w-full">
          <TouchableOpacity
            onPress={handleRegister}
            className="bg-my_accent mt-4 w-full p-2 rounded-full shadow-lg  flex items-center justify-center "
          >
            <Text className="text-white font-bold text-lg">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
