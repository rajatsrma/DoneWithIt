import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({
  width = "100%",
  iconName,
  placeholder,
  iconColor = colors.medium,
  size = 20,
  ...otherProps
}) {
  return (
    <View style={[styles.inputContainer, { width: width }]}>
      {iconName && (
        <MaterialCommunityIcons
          style={{ marginRight: 10 }}
          name={iconName}
          color={iconColor}
          size={size}
        />
      )}

      <TextInput
        style={(defaultStyles.text, { flex: 1 })}
        {...otherProps}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default AppTextInput;
