import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SelectEmergencyModal from "./SelectEmergencyModal";

const SelectEmergencyType = ({
  SelectedEmergencyType,
  setSelectedEmergencyType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [SelectedEmergencyType, setSelectedEmergencyType] = useState("General");
  data = [
    { label: "General", value: "General" },
    { label: "Fire", value: "Fire" },
    { label: "Medical", value: "Medical" },
    { label: "Police", value: "Police" },
    { label: "Ambulance", value: "Ambulance" },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onModalListCLick = (item) => {
    setSelectedEmergencyType(item.value);
    setIsModalOpen(false);
  };

  return (
    <View className="w-full">
      <Text className="text-my_gray_dark text-center font-semibold text-md mb-2 px-2">
        Select Emergency Type
      </Text>
      <TouchableOpacity
        onPress={() => setIsModalOpen((prev) => !prev)}
        className="flex flex-row items-center justify-between bg-my_gray w-full px-4 py-2 rounded-full"
      >
        <Text className="text-my_gray_dark text-lg ">
          {SelectedEmergencyType}
        </Text>
        <Ionicons name="chevron-down" size={24} color={"#676767"} />
      </TouchableOpacity>

      <SelectEmergencyModal isVisible={isModalOpen} onClose={closeModal}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onModalListCLick(item)}
            className="w-full py-2 px-4 my-2 bg-my_gray rounded-full flex items-center justify-center"
          >
            <Text className="text-my_gray_dark text-lg">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </SelectEmergencyModal>
    </View>
  );
};

export default SelectEmergencyType;
