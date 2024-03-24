import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LocalSvg } from "react-native-svg/css";

const Header = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-5 ">
      <View className="flex flex-row items-center space-x-2">
        <LocalSvg asset={require("../../assets/Svg/Location_Icon.svg")} />
        <View>
          <Text className="text-gray-600 text-lg font-semibold">Location</Text>
          <Text className="text-gray-400 text-md font-normal">Area</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
          <Text className="text-gray-500 text-2xl font-semibold">A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
