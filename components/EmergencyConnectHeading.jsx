import { View, Text } from "react-native";
import React from "react";

const EmergencyConnectHeading = () => {
  return (
    <View className="flex items-center ">
      <Text className="text-3xl font-bold">Emergency</Text>
      <Text className="text-3xl font-bold">Connect</Text>
      <Text className="text-sm font-semibold text-gray-600">
        Quick Response, Saves Lives
      </Text>
    </View>
  );
};

export default EmergencyConnectHeading;
