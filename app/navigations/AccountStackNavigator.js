import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "../navigations/routes";

const Stack = createStackNavigator();
function AccountStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_SCREEN} component={MyAccountScreen} />
      <Stack.Screen
        name={routes.MESSAGES_SCREEN}
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AccountStackNavigator;
