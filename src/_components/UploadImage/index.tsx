import * as React from "react";
import {
  Image,
  TouchableOpacity,
  View
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import style from "./styles";

const UploadImage = (props: {
  setImage: (image: any | null) => void;
  image: any;
}) => {
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      quality: 1
    });

    if (result.assets) {
      props.setImage(result);
    }
  };
  return (
    <View>
      <TouchableOpacity style={style.containerAvatar} onPress={pickImage}>
        {props.image ? (
          <Image
            style={style.avatar}
            source={{ uri: props.image.assets[0].uri }}
          />
        ) : (
          <Image
            style={style.avatar}
            source={require("../../_assets/images/Avatar_Foto.png")}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UploadImage;
