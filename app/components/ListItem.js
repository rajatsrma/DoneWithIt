import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.profile} source={image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },
  detailsContainer: {
    padding: 15,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
});
export default ListItem;
