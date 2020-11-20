import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  const gotoMealsHandler = () => {
    props.navigation.navigate({ routeName: "CategoryMeals" });
  };

  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meals!" onPress={gotoMealsHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
