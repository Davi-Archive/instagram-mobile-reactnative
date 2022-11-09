import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  containerAvatar: {
    marginBottom: height/35,
  }
});

export default style;
