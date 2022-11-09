import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";

import Button from "./src/_components/Button";

const App = () => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          console.log("hi");
        }}
        placeholder="Clique Aqui"
        loading={false}
        disabled={false}
      />
    </SafeAreaView>
  );
};

export default App;
