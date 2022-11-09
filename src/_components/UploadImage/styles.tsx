import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  containerAvatar: {
    marginBottom: height / 35
  },
  avatar: {
    marginTop: height / 24,
    width: width / 3,
    height: height / 5
  }
});

export default style;
