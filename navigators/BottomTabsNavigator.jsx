import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SOSScreen from "../screens/SOSScreen";
import AlertsScreen from "../screens/AlertsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="sosTab"
        component={SOSScreen}
        options={{ tabBarLabel: "SOS" }}
      />
      <Tab.Screen
        name="alertsTab"
        component={AlertsScreen}
        options={{ tabBarLabel: "Alerts" }}
      />
      <Tab.Screen
        name="contactsTab"
        component={ContactsScreen}
        options={{ tabBarLabel: "Contacts" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
