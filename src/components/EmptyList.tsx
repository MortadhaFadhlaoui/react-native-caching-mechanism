import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { BLUE_SKY } from "../styles/colors";

const EmptyList = () => {
  return <Text style={styles.text}>No Data available</Text>;
};

const styles = StyleSheet.create({
  text: { color: BLUE_SKY, textTransform: "capitalize" },
});
export default EmptyList;
