import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import AddContactsModel from "../components/ContactsScreen/AddContactsModal";
import AddContactsForm from "../components/ContactsScreen/AddContactsForm";

const ContactsScreen = () => {
  const [Contacts, setContacts] = useState([
    {
      name: "Abhinn Vyas",
      phone: "9301712345",
    },
    {
      name: "Abhinn Vyas",
      phone: "9301712345",
    },
    {
      name: "Abhinn Vyas",
      phone: "9301712345",
    },
    {
      name: "Abhinn Vyas",
      phone: "9301712345",
    },
    {
      name: "Abhinn Vyas",
      phone: "9301712345",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = (index) => {
    console.log(index);
    let temp = [...Contacts];
    temp.splice(index, 1);
    setContacts(temp);
  };
  return (
    <SafeAreaView className="px-6">
      <Text className="text-xl text-center mt-5">Contacts</Text>

      <View className="w-full mt-5">
        <FlatList
          style={{ height: "80%", paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          data={Contacts}
          renderItem={({ item, index }) => (
            <View className="w-full bg-my_gray p-5 rounded-2xl shadow-sm shadow-black mt-2 flex-row items-center justify-between ">
              <View className="flex-row items-center space-x-3">
                <View className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                  <Text className="text-xl text-white">{item.name.at(0)}</Text>
                </View>
                <View>
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <Text className="text-xs">{item.phone}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* {Contacts.length < 5 && (
      )} */}
      <TouchableOpacity
        disabled={Contacts.length >= 5}
        onPress={() => setIsModalVisible(true)}
        className="flex items-center justify-center border-2 rounded-2xl border-x-my_primary mt-5"
      >
        <Text className="text-lg font-semibold text-my_primary p-2 ">
          + Add Contact
        </Text>
      </TouchableOpacity>

      <AddContactsModel
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <AddContactsForm
          setIsModalVisible={setIsModalVisible}
          setContacts={setContacts}
        />
      </AddContactsModel>
    </SafeAreaView>
  );
};

export default ContactsScreen;
