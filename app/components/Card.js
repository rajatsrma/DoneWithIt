import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardcontainer}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{"$" + subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardcontainer: {
    width: "100%",
    height: 280,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 5,
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 4,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
