import { TouchableOpacity, View } from "react-native";
import style from "./styles";
import * as React from "react";
import Avatar from "../../_assets/image/avatar";

const UploadImage = () => {
  const pickImage = () => {};
  return (
    <View>
      <TouchableOpacity style={style.containerAvatar} onPress={pickImage}>
        <Avatar />
      </TouchableOpacity>
    </View>
  );
};

export default UploadImage;
