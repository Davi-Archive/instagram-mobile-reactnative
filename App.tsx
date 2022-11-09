import React, { useState } from "react";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

import Button from "./src/_components/Button";
import Input from "./src/_components/Input";
import UploadImage from "./src/_components/UploadImage";

const style = StyleSheet.create({
  appContainer: {
    display: "flex",
    margin: 0,
    border: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <SafeAreaView style={style.appContainer}>
      <UploadImage />
      <Button
        onPress={() => {
          console.log("hi");
        }}
        placeholder="Clique Aqui"
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

export default App;
