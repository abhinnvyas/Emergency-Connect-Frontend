import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/YourAlertsScreen/Card";

const YourAlertsScreen = ({ navigation }) => {
  const [CurrentTab, setCurrentTab] = useState("Completed"); // Cancelled
  return (
    <SafeAreaView className="px-6">
      <Pressable
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center justify-start mt-5"
      >
        <Entypo className="" name="chevron-left" size={25} color={"#676767"} />
      </Pressable>
      <Text className="text-xl text-center mt-5">Your Alerts</Text>

      <View className="flex flex-row items-center justify-center space-x-6 mt-4">
        <Pressable
          onPress={() => setCurrentTab("Completed")}
          className="flex items-center justify-center space-y-1"
        >
          <Text
            className={`text-lg ${
              CurrentTab === "Completed"
                ? "text-my_primary"
                : "text-my_gray_dark"
            }  font-semibold`}
          >
            Completed
          </Text>
          {CurrentTab === "Completed" && (
            <View className="h-2 w-2 rounded-full bg-my_accent"></View>
          )}
        </Pressable>
        <Pressable
          onPress={() => setCurrentTab("Cancelled")}
          className="flex items-center justify-center space-y-1"
        >
          <Text
            className={`text-lg ${
              CurrentTab === "Cancelled"
                ? "text-my_primary"
                : "text-my_gray_dark"
            }  font-semibold`}
          >
            Cancelled
          </Text>
          {CurrentTab === "Cancelled" && (
            <View className="h-2 w-2 rounded-full bg-my_accent"></View>
          )}
        </Pressable>
      </View>
      <View className="mt-5">{CurrentTab === "Completed" && <Card />}</View>
      <View className="">
        {CurrentTab === "Cancelled" && <Card isCancelled={true} />}
      </View>
    </SafeAreaView>
  );
};

export default YourAlertsScreen;
