import React from "react";
import { Image, TextInput, View } from "react-native";
import style from "./styles";
import { IInput } from "./types";

const Input = (props: IInput) => {
  return (
    <View style={style.containerInput}>
      <View style={style.row}>
        {props.icon && <Image source={props.icon} />}
        <TextInput
          placeholder={props.placeholder}
          style={[style.input, props.style]}
          secureTextEntry={props.securityTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default Input;
