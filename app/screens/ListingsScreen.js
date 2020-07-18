import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigations/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data, error, isLoading, requestFunc } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    requestFunc();
  }, []);

  return (
    <Screen style={{ backgroundColor: colors.light, padding: 20 }}>
      {error && (
        <View style={styles.loader}>
          <AppText>Couldn't load the feed. Please retry</AppText>
          <AppButton title="retry" onPress={requestFunc} />
        </View>
      )}
      <AppActivityIndicator visible={isLoading} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            imageUrl={item.images[0].url}
            subTitle={item.price}
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS_SCREEN, {
                item: item,
              });
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    color: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListingsScreen;
