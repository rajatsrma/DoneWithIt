import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />
      </View>

      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  close: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  delete: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: "80%",
  },
});
