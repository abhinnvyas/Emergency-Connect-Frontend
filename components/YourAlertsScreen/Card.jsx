import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LocalSvg } from "react-native-svg/css";

const LocationIcon = (
  <LocalSvg
    asset={require("../../assets/Svg/Location_White.svg")}
    width={20}
    height={20}
  />
);

const Card = ({ isCancelled }) => {
  const Name = "Sam Wilson";
  const EmergencyType = "General";
  const updatedAt = "5 minutes ago";
  return (
    <View className="bg-my_gray rounded-2xl p-4 shadow-md shadow-black">
      <View className="flex flex-row items-start justify-between mt-2">
        <View>
          <Text className="text-xl font-semibold">{Name}</Text>
          <Text className="text-md text-my_gray_dark">
            {EmergencyType} Emergency
          </Text>
        </View>
        <Text className="text-xs text-my_gray_dark">{updatedAt}</Text>
      </View>
      <View className="flex-row items-center justify-between space-x-2 mt-4">
        <TouchableOpacity className="bg-my_primary px-4 py-2 rounded-full flex-row items-center justify-center space-x-1">
          {LocationIcon}
          <Text className="text-xs font-semibold text-white">Location</Text>
        </TouchableOpacity>
        {isCancelled ? (
          <Text className="text-red-500 font-semibold">Cancelled</Text>
        ) : (
          <Text className="text-green-500 font-semibold">Completed</Text>
        )}
      </View>
    </View>
  );
};

export default Card;
