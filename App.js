import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import React, { useState } from "react";
import * as Font from "expo-font";
import MealsNavigator from "./navigation/MealsNavigator";
import { StatusBar } from "expo-status-bar";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

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
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    </>
  );
}
