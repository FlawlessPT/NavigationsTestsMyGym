import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function MainTabIcon({ focused, color, route }) {
  let iconName;
  let iconSize;

  switch (route) {
    case "ParkList":
      iconName = `${focused ? "ios-home" : "ios-home"}`;
      iconSize = 25;
      break;
    case "Profile":
      iconName = `${focused ? "ios-person" : "ios-person"}`;
      iconSize = 22;
      break;
    case "HistoryList":
      iconName = `${focused ? "ios-list" : "ios-list"}`;
      iconSize = 22;
      break;
    default:
      iconName = "alert-octagram";
      iconSize = 25;
      break;
  }

  return <Ionicons name={iconName} color={color} size={iconSize} />;
}
