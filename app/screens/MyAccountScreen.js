import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import ListIcon from "../components/lists/ListIcon";
import routes from "../navigations/routes";

const itemsArr = [
  {
    id: 1,
    size: 40,
    title: "My Listings",
    name: "format-list-bulleted",
    backgroundColor: colors.primary,
    targetScreen: routes.MESSAGES_SCREEN,
  },
  {
    id: 2,
    size: 40,
    title: "My Messages",
    name: "email",
    backgroundColor: colors.secondary,
    targetScreen: routes.MESSAGES_SCREEN,
  },
];

function MyAccountScreen({ navigation }) {
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
              onPress={() => navigation.navigate(item.targetScreen)}
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
