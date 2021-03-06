import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FAB } from "react-native-paper";
import styles from "./styles";

export default function Infos({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home{"\n"}</Text>
      <FAB
        style={styles.fab}
        icon="square-edit-outline"
        onPress={() => alert("Edit")}
      />
    </View>
  );
}
