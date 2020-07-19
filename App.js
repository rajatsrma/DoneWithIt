import React from "react";
import { StyleSheet } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen ";
// import AppButton from "./app/components/AppButton";
// import Card from "./app/components/Card";
// import ViewDetailsScreen from "./app/screens/ViewDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import ListItem from "./app/components/lists/ListItem";
// import ListIcon from "./app/components/lists/ListIcon";
// import Screen from "./app/components/Screen";
// import MyAccountScreen from "./app/screens/MyAccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import AppImageInput from "./app/components/AppImageInput";
// import AppFormImagePicker from "./app/components/forms/AppFormImagePicker";
// import AppForm from "./app/components/forms/AppForm";
// import { color } from "react-native-reanimated";
// import colors from "./app/config/colors";
// import FeedStackNavigator from "./app/navigations/FeedStackNavigator";
// import AuthNavigator from "./app/navigations/AuthNavigator";
import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";

const categories = [
  { category: "camera", value: 1 },
  { category: "vehicles", value: 2 },
  { category: "Fashion", value: 3 },
  { category: "Grooming", value: 4 },
];

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeff",
    padding: 20,
  },
});
