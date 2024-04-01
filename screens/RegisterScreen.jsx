import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import EmergencyConnectHeading from "../components/EmergencyConnectHeading";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { register } from "../services/auth";
import DefaultModal from "../components/Modal/DefaultModal";

const RegisterScreen = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Age, setAge] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    if (
      !Name ||
      !Email ||
      !Phone ||
      !Age ||
      !BloodGroup ||
      !Gender ||
      !Password
    ) {
      Toast.show({
        type: "error",
        text1: "Required Fields Missing",
        text2: "Please fill all the fields to register.",
      });
      return;
    }

    setIsLoading(true);
    register(Name, Email, Phone, Age, BloodGroup, Gender, Password)
      .then((response) => {
        console.log(response);
        if (!response) {
          Toast.show({
            type: "info",
            text1: "Registration Failed",
            text2: "Something unexpected occured. Please try again.",
          });
          setIsLoading(false);
          return;
        }
        if (response.status) {
          //User Registered
          Toast.show({
            type: "success",
            text1: "Registration Successful",
            text2: response.msg,
          });

          navigation.navigate("login");
        } else {
          // User already exists
          Toast.show({
            type: "error",
            text1: "Login Failed",
            text2: response.msg,
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error at RegisterScreen: ", error);
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: "Please try again.",
        });
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="px-6 ">
      <EmergencyConnectHeading />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "80%" }}
        contentContainerStyle={{ paddingBottom: 50 }}
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
      </ScrollView>
      <View className="w-full mb-10">
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-my_accent mt-4 w-full p-2 rounded-full shadow-lg  flex items-center justify-center "
        >
          <Text className="text-white font-bold text-lg">Register</Text>
        </TouchableOpacity>
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

export default RegisterScreen;
