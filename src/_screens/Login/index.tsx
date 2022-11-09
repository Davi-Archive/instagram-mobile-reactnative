import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Button from "../../_components/Button";
import Input from "../../_components/Input";
import UploadImage from "../../_components/UploadImage";

const style = StyleSheet.create({
  LoginContainer: {
    display: "flex",
    margin: 0,
    border: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

const Login = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <SafeAreaView style={style.LoginContainer}>

      <Button
        onPress={() => {
          console.log('hi');
        }}
        placeholder="Login"
        loading={false}
        disabled={false}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite o seu email"}
        value={email}
      />
    </SafeAreaView>
  );
};

export default Login;
