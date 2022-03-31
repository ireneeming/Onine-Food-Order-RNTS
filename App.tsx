import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LandingScreen } from "./src/screens/LandingScreen";
import { HomeScreen } from "./src/screens/HomeScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// const switchNavigator = createSwitchNavigator({
//   landingStack: {
//     screen: createStackNavigator(
//       {
//         Landing: LandingScreen,
//         //search address screen
//       },
//       {
//         defaultNavigationOptions: {
//           headerShown: false,
//         },
//       }
//     ),
//   },
//   homeStack: createBottomTabNavigator({
//     home: {
//       screen: createStackNavigator({
//         HomePage: HomeScreen,
//         //search address screen
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, tintColor }) => {
//           let icon =
//             focused == true
//               ? require("./src/images/home_icon.png")
//               : require("./src/images/home_n_icon.png");
//           return <Image source={icon} style={styles.tabIcon} />;
//         },
//       },
//     },
//   }),
// });

export default function App() {
  return <LandingScreen />;
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
