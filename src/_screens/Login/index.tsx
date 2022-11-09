import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Button from "../../_components/Button";
import Input from "../../_components/Input";
import styles from "./styles";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={require("../../_assets/images/Logo.png")}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite o seu email"}
        value={email}
        icon={require("../../_assets/images/envelope.png")}
      />
      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Digite sua senha"}
        value={password}
        securityTextEntry={true}
        icon={require("../../_assets/images/key.png")}
      />
      <Button
        onPress={() => console.log("login dude")}
        placeholder="Login"
        loading={false}
        disabled={false}
      />
      <View style={styles.containerWithAccount}>
        <Text style={styles.textAccountSingUp}>Não Possui uma conta?</Text>
        <TouchableOpacity onPressIn={() => navigation.navigate("Register")}>
          <Text style={styles.textSingUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
