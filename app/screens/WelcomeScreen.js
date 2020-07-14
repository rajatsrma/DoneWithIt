import React from "react";
import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";

// import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
