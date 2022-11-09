import { Dimensions, StyleSheet } from "react-native";
import {colors,fonts} from '../../../app.json'

const {height,width} = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerButton: {
    marginTop: height / 20
  },
  button: {
    width: width / 1.3,
    height: height / 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.whiteColor,
    fontFamily: fonts.bold,
    fontWeight: "600"
  },
  buttonDisabled:{
    backgroundColor: colors.grayColor03
  }
});

export default styles;