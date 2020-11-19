import { AppLoading } from "expo";
import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }

  return (
    <View>
      <Text>Open up App.js to start working on your App!</Text>
    </View>
  );
}
