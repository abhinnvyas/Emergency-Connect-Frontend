import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LocalSvg } from "react-native-svg/css";

const Icons = {
  sosBlackIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/SOS_Black.svg")}
      height={25}
      width={25}
    />
  ),
  sosWhiteIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/SOS_White.svg")}
      height={25}
      width={25}
    />
  ),
  alertsBlackIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/Alerts_Black.svg")}
      height={25}
      width={25}
    />
  ),
  alertsWhiteIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/Alerts_White.svg")}
      height={25}
      width={25}
    />
  ),
  contactsBlackIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/Contacts_Black.svg")}
      height={25}
      width={25}
    />
  ),
  contactsWhiteIcon: (
    <LocalSvg
      asset={require("../assets/BottomTabsIcon/Contacts_White.svg")}
      height={25}
      width={25}
    />
  ),
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="bg-transparent mb-10">
      <View className="bg-transparent w-fit rounded-full flex items-center justify-center">
        <View className="flex flex-row bg-my_gray rounded-full p-2 px-4 space-x-4 transition-all ease-in-out">
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : route.name;

            let iconComponent;

            const isRouteActive = state.index === index;

            if (route.name === "sosTab") {
              iconComponent = isRouteActive
                ? Icons.sosWhiteIcon
                : Icons.sosBlackIcon;
            } else if (route.name === "alertsTab") {
              iconComponent = isRouteActive
                ? Icons.alertsWhiteIcon
                : Icons.alertsBlackIcon;
            } else if (route.name === "contactsTab") {
              iconComponent = isRouteActive
                ? Icons.contactsWhiteIcon
                : Icons.contactsBlackIcon;
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                className={`flex space-x-2 flex-row items-center justify-center ${
                  isRouteActive ? "bg-black rounded-full p-3" : ""
                }`}
                // style={{ flex: 1, alignItems: "center", padding: 20 }}
              >
                {iconComponent}
                {isRouteActive && (
                  <Text
                    className={`text-md ${
                      isRouteActive ? "text-white" : "text-black"
                    }`}
                  >
                    {label}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;
