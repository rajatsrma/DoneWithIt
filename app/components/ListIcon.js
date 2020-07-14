import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListIcon({
  backgroundColor = "black",
  color = "white",
  name,
  size,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons color={color} name={name} size={size * 0.5} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});

export default ListIcon;
