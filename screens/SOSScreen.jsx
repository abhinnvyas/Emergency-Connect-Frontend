import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/SOSScreen/Header";
import SelectEmergencyType from "../components/SOSScreen/SelectEmergencyType";
import { SafeAreaView } from "react-native-safe-area-context";
import SOSButton from "../components/SOSScreen/SOSButton";

const SOSScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="px-6">
      <Header navigation={navigation} />

      <View className="flex w-full items-center justify-center mt-[50%]">
        <SOSButton navigation={navigation} />
        <View className="w-full mt-8">
          <SelectEmergencyType />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SOSScreen;
