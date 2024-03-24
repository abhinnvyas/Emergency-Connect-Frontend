import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const SelectEmergencyModal = ({ isVisible, children, onClose }) => {
  return (
    <Modal
      className=""
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="bg-white px-4 py-4 rounded-t-3xl p-4 flex w-full "
        style={Styles.ModalContainer}
      >
        <TouchableOpacity
          className=" bg-my_primary p-2 rounded-full flex items-center justify-center mt-2 mb-2"
          onPress={onClose}
        >
          <Text className="text-lg text-white font-semibold">Close</Text>
        </TouchableOpacity>
        {children}
      </ScrollView>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  ModalContainer: {
    height: "50%",
    width: "100%",
    // backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
});

export default SelectEmergencyModal;
