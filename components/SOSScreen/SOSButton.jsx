import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SOSButton = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center bg-gray-200 shadow-lg shadow-black w-fit rounded-full p-3 ">
      <TouchableOpacity
        onPress={() => navigation.navigate("activeAlert")}
        className="flex items-center justify-center active:scale-105 shadow-lg shadow-black bg-my_accent rounded-full w-[150px] h-[150px]"
      >
        <Text className="text-3xl text-white font-bold">SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SOSButton;
