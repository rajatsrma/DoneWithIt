import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ImagePreview from "./ImagePreview";

function AppImageInput({ imageUris = [], handleAdd, handleDelete }) {
  const refScrollView = useRef(null);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        handleAdd(result.uri);
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

  return (
    <View>
      <ScrollView
        ref={refScrollView}
        style={styles.container}
        horizontal={true}
        onContentSizeChange={() => refScrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri, index) => (
          <ImagePreview
            key={index}
            imageUri={uri}
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
      </ScrollView>
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
