import React from "react";
import { Modal, ScrollView, StyleSheet } from "react-native";

function DefaultModal({ isVisible, children, onClose }) {
  return (
    <Modal
      className=""
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 100,
        }}
        className="bg-white px-4 py-4 rounded-t-3xl p-4 flex w-full "
        style={Styles.ModalContainer}
      >
        {children}
      </ScrollView>
    </Modal>
  );
}

const Styles = StyleSheet.create({
  ModalContainer: {
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
});

export default DefaultModal;
