import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <RootNavigator />
    </PaperProvider>
  );
}
