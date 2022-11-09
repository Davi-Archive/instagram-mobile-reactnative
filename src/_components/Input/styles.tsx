import { StyleSheet } from "react-native";
import { fonts, colors } from "../../../app.json";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const style = StyleSheet.create({
  containerInput: {
    marginTop: height * 0.03,
    width: width / 1.3,
    height: height / 15,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1
  },
  input: {
    width: width / 1.4,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: fonts.bold,
    fontStyle: "italic"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default style;
