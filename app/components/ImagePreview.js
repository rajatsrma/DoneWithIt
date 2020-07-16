import React from "react";
import { View, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";

function ImagePreview({ imageUri, imageIndex, handleDelete }) {
  const twoButtonAlert = () => {
    Alert.alert(
      "Delete Alert",
      "Are you sure you want to delete this item...",
      [
        { text: "NO" },
        {
          text: "YES",
          onPress: () => handleDelete(imageIndex),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      {imageUri.length && (
        <TouchableOpacity onPress={twoButtonAlert}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});
export default ImagePreview;
