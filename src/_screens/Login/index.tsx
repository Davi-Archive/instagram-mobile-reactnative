import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Button from "../../_components/Button";
import Input from "../../_components/Input";
import styles from "./styles";
import * as UserService from "../../_services/UserService";

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    verifyLogged();
  }, []);

  const onLogin = async () => {
    try {
      setLoading(true);
      await UserService.login({ login: email, senha: password });
      setLoading(false);
      navigation.navigate("Home");
    } catch (error) {
     console.log(error);
      setErro("Erro ao efetuar o login, tente novamente");
      Alert.alert("Erro","Erro ao efetuar o login, tente novamente");
      setLoading(false);
    }
  };

  const verifyLogged = useCallback(async () => {
    const user = await UserService.getCurrentUser();
    if (user?.token) {
      navigation.navigate("Home");
    }
  }, []);

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
        onPress={() => onLogin()}
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
