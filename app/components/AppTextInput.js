import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({
  iconName,
  placeholder,
  iconColor = colors.medium,
  size = 20,
  ...otherProps
}) {
  return (
    <View style={styles.inputContainer}>
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
    width: "100%",
    backgroundColor: colors.light,
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default AppTextInput;
