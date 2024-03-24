import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const GetStartedScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <LottieView
          className=""
          width={300}
          height={300}
          autoPlay
          loop
          source={require("../assets/LottieFiles/Get_Started.json")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        className="bg-my_accent mt-8 px-6 py-4 shadow-lg rounded-lg flex items-center justify-center"
      >
        <Text className="text-white font-bold text-lg">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GetStartedScreen;
