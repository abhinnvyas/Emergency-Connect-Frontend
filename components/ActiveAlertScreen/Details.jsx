import { View, Text } from "react-native";
import React from "react";

const Details = ({ EmergencyType, Name, Age }) => {
  return (
    <View className="bg-my_gray rounded-lg p-5 mt-5 w-full flex items-center justify-center">
      <Text className="text-md text-my_primary font-semibold">Details</Text>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Emergency Type:</Text>
        <Text className="text-my_primary font-semibold">{EmergencyType}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Name:</Text>
        <Text className="text-my_primary font-semibold">{Name}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-2">
        <Text className="text-my_gray_dark">Age:</Text>
        <Text className="text-my_primary font-semibold">{Age}</Text>
      </View>
    </View>
  );
};

export default Details;
