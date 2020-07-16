import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import ListIcon from "../components/lists/ListIcon";

const itemsArr = [
  {
    id: 1,
    size: 40,
    title: "My Listings",
    name: "format-list-bulleted",
    backgroundColor: colors.primary,
  },
  {
    id: 2,
    size: 40,
    title: "My Messages",
    name: "email",
    backgroundColor: colors.secondary,
  },
];

function MyAccountScreen() {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <View style={styles.profileContainer}>
        <ListItem
          title="Rajat Sharma"
          subTitle="test@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.sectionTwo}>
        <FlatList
          data={itemsArr}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => console.log("ListItem clicked")}
              ImageComponent={
                <ListIcon
                  name={item.name}
                  size={item.size}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Logout"
          onPress={() => console.log("Logout clicked")}
          ImageComponent={
            <ListIcon name="logout" backgroundColor="#ffe66d" size={40} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    marginVertical: 30,
  },
  sectionTwo: {
    marginBottom: 30,
  },
});
export default MyAccountScreen;
