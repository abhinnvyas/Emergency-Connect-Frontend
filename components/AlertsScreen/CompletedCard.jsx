import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CompletedCard = ({ isCompleted }) => {
  const Name = "Sam Wilson";
  const EmergencyType = "General";
  const updatedAt = "5 minutes ago";
  return (
    <View className="bg-my_gray rounded-2xl p-4">
      <View className="flex flex-row items-start justify-between mt-2">
        <View>
          <Text className="text-xl font-semibold">{Name}</Text>
          <Text className="text-md text-my_gray_dark">
            {EmergencyType} Emergency
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-xs text-my_gray_dark">
            {isCompleted ? "Completed" : "Cancelled"}
          </Text>
          <Text className="text-xs text-my_gray_dark">{updatedAt}</Text>
        </View>
      </View>
      <View
        className={`flex items-center justify-between space-x-2 mt-4 p-2 rounded-full  ${
          isCompleted ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <Text className="text-white font-semibold text-md">
          {isCompleted ? "Thanks for Helping!" : "This Alert was Cancelled!"}
        </Text>
      </View>
    </View>
  );
};

export default CompletedCard;
