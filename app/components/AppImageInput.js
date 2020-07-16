import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ImagePreview from "./ImagePreview";

function AppImageInput() {
  const [imageUri, setImageUri] = useState([]);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(imageUri.concat(result.uri));
      }
    } catch (error) {
      console.log("selectedImage", error);
    }
  };

  const takeImageInput = async () => {
    try {
      const result = await ImagePicker.requestCameraRollPermissionsAsync();
      if (!result.granted) {
        alert("Please give camera roll permission");
      } else {
        selectImage();
      }
    } catch (error) {
      console.log("takeImageInput", error);
    }
  };

  const handleDelete = (imageIndex) => {
    const resultArr = imageUri.filter((uri) => uri !== imageUri[imageIndex]);
    setImageUri(resultArr);
  };

  return (
    <View style={styles.container}>
      {imageUri.map((uri, index) => (
        <ImagePreview
          key={index}
          imageUri={uri}
          imageIndex={index}
          handleDelete={handleDelete}
        />
      ))}
      <TouchableOpacity onPress={takeImageInput}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="camera"
            size={50}
            color={colors.medium}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  inputContainer: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 20,
  },
});
export default AppImageInput;
