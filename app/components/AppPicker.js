import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function AppPicker({
  items,
  iconName,
  placeholder,
  iconColor = colors.medium,
  size = 20,
  onSelectItem,
  selectedItem,
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View style={styles.inputContainer}>
          {iconName && (
            <MaterialCommunityIcons
              style={{ marginRight: 10 }}
              name={iconName}
              color={iconColor}
              size={size}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem === null ? placeholder : selectedItem.category}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            color={iconColor}
            size={size}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={isVisible}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelectItem(item);
                setIsVisible(false);
              }}
            >
              <AppText
                style={{
                  width: "100%",
                  marginVertical: 15,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {item.category}
              </AppText>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </>
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
  text: {
    flex: 1,
    fontSize: 16,
  },
});
export default AppPicker;
