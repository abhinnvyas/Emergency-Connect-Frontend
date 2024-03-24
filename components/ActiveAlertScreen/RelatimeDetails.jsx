import { View, Text } from "react-native";
import React from "react";

const RelatimeDetails = ({ UsersNearby, RequestsAccepted }) => {
  return (
    <View className="flex flex-row items-center justify-between space-x-2 mt-5">
      <View className="flex-1 bg-my_accent space-x-2 flex flex-row items-center justify-center px-2 py-4 rounded-lg">
        <Text className="text-5xl font-bold text-white">{UsersNearby}</Text>
        <View className="flex items-start">
          <Text className="text-white text-xl font-bold">Users</Text>
          <Text className="text-white text-md font-semibold">Nearby</Text>
        </View>
      </View>
      <View className="flex-1 bg-my_primary space-x-2 flex flex-row  items-center justify-center px-2 py-4 rounded-lg">
        <Text className="text-5xl font-bold text-white">
          {RequestsAccepted}
        </Text>
        <View className="flex items-start">
          <Text className="text-white text-xl font-bold">Request</Text>
          <Text className="text-white text-md font-semibold">Accepted</Text>
        </View>
      </View>
    </View>
  );
};

export default RelatimeDetails;
