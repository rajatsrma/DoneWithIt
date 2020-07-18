import React from "react";
import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../animations/loader.json")}
      autoPlay={true}
      loop={true}
    />
  );
}

export default AppActivityIndicator;
