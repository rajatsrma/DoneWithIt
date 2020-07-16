import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ViewDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <ListItem
        title="Rajat Sharma"
        subTitle="10"
        image={require("../assets/mosh.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 7,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
export default ViewDetailsScreen;
