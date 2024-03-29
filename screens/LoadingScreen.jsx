import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function LoadingScreen() {
  return (
    <SafeAreaView className="flex-1 items-center  justify-center ">
      <ActivityIndicator size={"small"} color={"#FF8934"} />
      <Text className="text-my_accent font-bold text-lg mt-2">Please Wait</Text>
      <Text className="text-my_accent font-bold text-md ">
        Confirming Authentication Status
      </Text>
    </SafeAreaView>
  );
}

export default LoadingScreen;
