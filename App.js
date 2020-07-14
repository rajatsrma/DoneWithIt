import React from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen ";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ViewDetailsScreen from "./app/screens/ViewDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeff",
    padding: 20,
  },
});
