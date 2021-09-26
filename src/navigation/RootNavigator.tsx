import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "Dashboard",
            headerTitleStyle: {
              ...styles.headerTitleStyle,
            },
          }}
          name="Dashboard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    alignSelf: "center",
  },
});

export default RootNavigator;
