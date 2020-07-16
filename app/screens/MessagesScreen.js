import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListIcon from "../components/lists/ListIcon";

const initialMessages = [
  {
    id: 1,
    title: "Rajat",
    description: "eng..",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Rajat",
    description: "eng..",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Rajat",
    description: "eng..",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <View style={styles.rightActionStyle}>
                <ListIcon
                  backgroundColor="red"
                  name="trash-can"
                  size={50}
                  onPress={() => handleDelete(item)}
                />
              </View>
            )}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("hi")}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Rajat",
              description: "eng..",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  rightActionStyle: {
    backgroundColor: "red",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessagesScreen;
