import { View, Text } from "react-native";
import React from "react";

const ProfileDetails = ({ Name, Phone, BloodGroup, Email, Age, Gender }) => {
  return (
    <View className="p-5 mt-4 w-full flex items-center justify-center">
      {/* <Text className="text-md text-my_primary font-semibold">Details</Text> */}
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Name:</Text>
        <Text className="text-my_primary font-semibold">{Name}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Phone:</Text>
        <Text className="text-my_primary font-semibold">{Phone}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Blood Group:</Text>
        <Text className="text-my_primary font-semibold">{BloodGroup}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Email:</Text>
        <Text className="text-my_primary font-semibold">{Email}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Age:</Text>
        <Text className="text-my_primary font-semibold">{Age}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Gender:</Text>
        <Text className="text-my_primary font-semibold">{Gender}</Text>
      </View>
    </View>
  );
};

export default ProfileDetails;
