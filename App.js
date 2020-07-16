import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen ";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ViewDetailsScreen from "./app/screens/ViewDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/lists/ListItem";
import ListIcon from "./app/components/lists/ListIcon";
import Screen from "./app/components/Screen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppImageInput from "./app/components/AppImageInput";

const categories = [
  { category: "camera", value: 1 },
  { category: "vehicles", value: 2 },
  { category: "Fashion", value: 3 },
  { category: "Grooming", value: 4 },
];

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleDelete = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  return (
    <Screen>
      <AppImageInput
        imageUris={imageUris}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeff",
    padding: 20,
  },
});
