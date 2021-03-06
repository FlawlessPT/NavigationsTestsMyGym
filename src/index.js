import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { View } from "react-native";

import Routes from "./navigation/navigation";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Aldrich_Regular: require("../assets/fonts/Aldrich-Regular.ttf"),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <View style={{ flex: 1, backgroundColor: "#2C2C2C" }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </View>
    );
  }
}
