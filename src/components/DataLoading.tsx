import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { BLUE_SKY } from "../styles/colors";

const DataLoading = () => {
  return (
    <ActivityIndicator
      size="small"
      color={BLUE_SKY}
      style={styles.indicatorLoading}
    />
  );
};

const styles = StyleSheet.create({
  indicatorLoading: {
    flex: 1,
    alignSelf: "center",
  },
});

export default DataLoading;
