import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>body</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navigation: {
    flex: 2,
    backgroundColor: "#bbb",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
