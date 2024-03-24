import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileImageEdit from "../components/ProfileScreen/ProfileImageEdit";
import ProfileDetails from "../components/ProfileScreen/ProfileDetails";
import { Entypo } from "@expo/vector-icons";
import YourAlerts from "../components/ProfileScreen/YourAlerts";

const ProfileScreen = ({ navigation }) => {
  const Name = "Abhinn Vyas";
  const Phone = "9301712345";
  const BloodGroup = "B+";
  const Email = "abhinnvyas@gmail.com";
  const Age = 20;
  const Gender = "Male";

  const handleLogout = () => {
    navigation.navigate("login");
  };
  return (
    <SafeAreaView className="px-6 ">
      <Pressable
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center justify-start mt-5"
      >
        <Entypo className="" name="chevron-left" size={25} color={"#676767"} />
      </Pressable>
      <Text className="text-xl text-center mt-5">My Profile</Text>

      <ProfileImageEdit navigation={navigation} />
      <ProfileDetails
        Name={Name}
        Phone={Phone}
        BloodGroup={BloodGroup}
        Email={Email}
        Age={Age}
        Gender={Gender}
      />
      <YourAlerts navigation={navigation} />

      <Pressable
        onPress={handleLogout}
        className="flex items-center justify-center mt-5 bg-my_accent p-2 rounded-full"
      >
        <Text className="text-lg text-white font-semibold ">Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
