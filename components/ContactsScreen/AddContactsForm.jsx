import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const AddContactsForm = ({ setIsModalVisible, setContacts }) => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const handleCancel = () => {
    setName("");
    setPhone("");
    setIsModalVisible(false);
  };

  const handleSave = () => {
    console.log("Save Pressed: ", Name, Phone);
    setContacts((prev) => [...prev, { name: Name, phone: Phone }]);
    setIsModalVisible(false);
  };

  return (
    <View className="w-full px-2">
      <Text className="text-xl text-center mt-2">Add Contact</Text>
      <Text className="text-xs text-center mt-2">
        You can only add upto 5 Contacts
      </Text>
      <View className="mt-2">
        <View className="w-full ">
          <Text className="font-bold text-lg text-gray-600">Name</Text>
          <TextInput
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4"
            defaultValue={Name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your Name"
          />
        </View>
        <View className="w-full mt-2">
          <Text className="font-bold text-lg text-gray-600">Phone</Text>
          <TextInput
            className="bg-gray-200 mt-2 rounded-full w-full p-2 px-4 "
            defaultValue={Phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Enter your Contact Number"
          />
        </View>
        <TouchableOpacity
          className=" bg-my_primary p-2 rounded-full flex items-center justify-center mt-6 mb-2"
          onPress={handleSave}
        >
          <Text className="text-lg text-white font-semibold">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" bg-my_gray  p-2 rounded-full flex items-center justify-center mt-2 mb-2"
          onPress={handleCancel}
        >
          <Text className="text-lg text-my_gray_dark font-semibold">
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddContactsForm;
