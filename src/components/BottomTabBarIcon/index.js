import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainTabIcon({ focused, color, route }) {
  let iconName;
  let iconSize;

  switch (route) {
    case "ParkList":
      iconName = `${focused ? "home" : "home-outline"}`;
      iconSize = 25;
      break;
    case "Profile":
      iconName = `${focused ? "account" : "account-outline"}`;
      iconSize = 22;
      break;
    case "HistoryList":
      iconName = `${focused ? "account" : "account"}`;
      iconSize = 22;
      break;
    default:
      iconName = "alert-octagram";
      iconSize = 25;
      break;
  }

  return (
    <MaterialCommunityIcons name={iconName} color={color} size={iconSize} />
  );
}
