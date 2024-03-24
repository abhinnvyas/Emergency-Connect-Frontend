import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NearbyCard from "../components/AlertsScreen/NearbyCard";
import ActiveCard from "../components/AlertsScreen/ActiveCard";
import CompletedCard from "../components/AlertsScreen/CompletedCard";

const AlertsScreen = () => {
  const [CurrentTab, setCurrentTab] = useState("Nearby"); // Accepted, Completed
  return (
    <SafeAreaView className="px-6">
      <Text className="text-xl text-center mt-5">Alerts</Text>

      <View className="flex flex-row items-center justify-center space-x-6 mt-2">
        <Pressable
          onPress={() => setCurrentTab("Nearby")}
          className="flex items-center justify-center space-y-1"
        >
          <Text
            className={`text-lg ${
              CurrentTab === "Nearby" ? "text-my_primary" : "text-my_gray_dark"
            }  font-semibold`}
          >
            Nearby
          </Text>
          {CurrentTab === "Nearby" && (
            <View className="h-2 w-2 rounded-full bg-my_accent"></View>
          )}
        </Pressable>
        <Pressable
          onPress={() => setCurrentTab("Active")}
          className="flex items-center justify-center space-y-1"
        >
          <Text
            className={`text-lg ${
              CurrentTab === "Active" ? "text-my_primary" : "text-my_gray_dark"
            }  font-semibold`}
          >
            Active
          </Text>
          {CurrentTab === "Active" && (
            <View className="h-2 w-2 rounded-full bg-my_accent"></View>
          )}
        </Pressable>
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
      </View>
      <View className="mt-5">{CurrentTab === "Nearby" && <NearbyCard />}</View>
      <View className="">{CurrentTab === "Active" && <ActiveCard />}</View>
      <View className="">
        {CurrentTab === "Completed" && <CompletedCard isCompleted={true} />}
      </View>
    </SafeAreaView>
  );
};

export default AlertsScreen;
