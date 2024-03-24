import { View, Text, Pressable } from "react-native";
import React from "react";

const ProfileImageEdit = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center mt-5 space-y-2">
      <View className="bg-my_gray w-28 h-28 rounded-full"></View>
      <Pressable onPress={() => navigation.navigate("editProfile")}>
        <Text className="text-my_gray_dark text-md border-b text-center">
          Edit Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileImageEdit;
