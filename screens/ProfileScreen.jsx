import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileImageEdit from "../components/ProfileScreen/ProfileImageEdit";
import ProfileDetails from "../components/ProfileScreen/ProfileDetails";
import { Entypo } from "@expo/vector-icons";
import YourAlerts from "../components/ProfileScreen/YourAlerts";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-toast-message";
import DefaultModal from "../components/Modal/DefaultModal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeToken } from "../redux/slices/tokenSlice";

const ProfileScreen = ({}) => {
  const navigation = useNavigation();
  const Name = "Abhinn Vyas";
  const Phone = "9301712345";
  const BloodGroup = "B+";
  const Email = "abhinnvyas@gmail.com";
  const Age = 20;
  const Gender = "Male";
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // navigation.navigate("login");
    setIsLoading(true);
    SecureStore.deleteItemAsync("token")
      .then(() => {
        setIsLoading(false);

        Toast.show({
          type: "success",
          text1: "Logged out Successfully",
        });
        dispatch(removeToken());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error at ProfileScreen.jsx: handleLogout() : ", err);
        Toast.show({
          type: "error",
          text1: "Please Try Again",
        });
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaView className="px-6 ">
      <Pressable
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center justify-start mt-5"
      >
        <Entypo className="" name="chevron-left" size={25} color={"#676767"} />
      </Pressable>
      <Text className="text-xl text-center mt-5">My Profile</Text>

      <ProfileImageEdit navigation={navigation} />
      <ProfileDetails
        Name={Name}
        Phone={Phone}
        BloodGroup={BloodGroup}
        Email={Email}
        Age={Age}
        Gender={Gender}
      />
      <YourAlerts navigation={navigation} />

      <Pressable
        onPress={handleLogout}
        className="flex items-center justify-center mt-5 bg-my_accent p-2 rounded-full"
      >
        <Text className="text-lg text-white font-semibold ">Logout</Text>
      </Pressable>
      <DefaultModal isVisible={isLoading}>
        <ActivityIndicator size={"medium"} color={"#FF8934"} />
        <Text className="text-my_accent font-bold text-lg mt-2">
          Please Wait
        </Text>
      </DefaultModal>
    </SafeAreaView>
  );
};

export default ProfileScreen;
