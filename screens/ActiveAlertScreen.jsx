import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "../components/ActiveAlertScreen/Details";
import RelatimeDetails from "../components/ActiveAlertScreen/RelatimeDetails";

const ActiveAlertScreen = ({ navigation }) => {
  const emergencyType = "Fire";
  const name = "Abhinn Vyas";
  const age = 20;
  const UsersNearby = 10;
  const RequestsAccepted = 5;

  const handleCancel = () => {
    navigation.navigate("tabsHome");
  };

  const handleCoompleted = () => {};

  return (
    <SafeAreaView className="px-6 flex-1 items-center justify-between pb-10">
      <View>
        <View className="flex flex-row items-center justify-center space-x-2 mt-5">
          <Text className="text-xl font-bold text-my_primary">Alert</Text>
          <Text className="text-xl text-my_accent font-bold">Generated</Text>
        </View>

        <Details EmergencyType={emergencyType} Name={name} Age={age} />

        <RelatimeDetails
          UsersNearby={UsersNearby}
          RequestsAccepted={RequestsAccepted}
        />
      </View>
      <View className="flex flex-row items-center justify-between space-x-2">
        <TouchableOpacity
          onPress={handleCancel}
          className="flex-1 items-center justify-center bg-my_gray p-4 rounded-full"
        >
          <Text className="text-my_gray_dark font-semibold">Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleCoompleted}
          className="flex-1 items-center justify-center bg-my_primary p-4 rounded-full"
        >
          <Text className="text-white font-semibold">Completed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ActiveAlertScreen;
