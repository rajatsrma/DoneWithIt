import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import FeedStackNavigator from "./FeedStackNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountStackNavigator from "./AccountStackNavigator";
import NewListingButton from "./NewListingButton";
import routes from "../navigations/routes";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName={routes.LISTINGS_SCREEN}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.medium,
      }}
    >
      <Tab.Screen
        name={routes.LISTINGS_SCREEN}
        component={FeedStackNavigator}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ADD_LISTING_SCREEN}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.ADD_LISTING_SCREEN)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_SCREEN}
        component={AccountStackNavigator}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
