import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ViewDetailsScreen from "../screens/ViewDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "../navigations/routes";

const Stack = createStackNavigator();
function FeedStackNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTINGS_SCREEN} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS_SCREEN}
        component={ViewDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default FeedStackNavigator;
