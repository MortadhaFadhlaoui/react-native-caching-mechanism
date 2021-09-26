import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { WHITE } from "./colors";

const DefaultStyles = StyleSheet.create({
  itemStyle: {
    justifyContent: "center",
    paddingTop: hp(2),
  },
  rowStyle: { height: hp(10) },
  tableStyle: { backgroundColor: WHITE, flex: 1 },
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: hp("2"),
  },
});
export default DefaultStyles;
