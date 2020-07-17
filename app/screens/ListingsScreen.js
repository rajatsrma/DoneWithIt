import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigations/routes";

const itemsArr = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    subtitle: 500,
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in good condition",
    subtitle: 1000,
  },
];
function ListingsScreen({ navigation }) {
  return (
    <Screen style={{ backgroundColor: colors.light, padding: 20 }}>
      <FlatList
        data={itemsArr}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={item.subtitle}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS_SCREEN, { item: item })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListingsScreen;
