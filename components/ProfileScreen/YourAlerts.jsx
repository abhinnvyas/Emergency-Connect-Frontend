import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const YourAlerts = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("yourAlerts")}
      className="flex flex-row items-center justify-between mt-4 bg-my_gray w-full px-4 py-2 rounded-full"
    >
      <View className="flex flex-row items-center space-x-2">
        <Text className="text-my_gray_dark text-md ">Your Alerts</Text>
        <View className="bg-my_accent w-2 h-2 rounded-full"></View>
      </View>
      <Entypo name="chevron-right" size={24} color={"#676767"} />
    </TouchableOpacity>
  );
};

export default YourAlerts;
