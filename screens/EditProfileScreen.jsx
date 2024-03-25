import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import ImageUpload from "../components/Edit Profile/ImageUpload";

const EditProfileScreen = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Age, setAge] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [Gender, setGender] = useState("");

  const handleSave = () => {
    navigation.navigate("profile");
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="px-6">
      <Pressable
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center justify-start mt-5"
      >
        <Entypo className="" name="chevron-left" size={25} color={"#676767"} />
      </Pressable>

      <View className="flex items-center justify-center space-y-4">
        <Text className="text-xl text-center mt-5">Edit Profile</Text>
        <ImageUpload />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="flex w-full space-y-2  mt-5 "
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
          <TouchableOpacity
            onPress={handleSave}
            className="bg-my_primary mt-4 w-full p-2 rounded-full shadow-lg  flex items-center justify-center "
          >
            <Text className="text-white font-bold text-lg">Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
