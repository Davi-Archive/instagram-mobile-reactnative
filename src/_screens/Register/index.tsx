import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import Button from "../../_components/Button";
import Input from "../../_components/Input";
import UploadImage from "../../_components/UploadImage";
import styles from "./styles";
import communStyles from "../../communStyles";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword
} from "../../_utils/validations";

const Register = ({ navigation }: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [image, setImage] = useState<any | null>();
  const [erro, setErro] = useState<string>("");

  const formIsValid = (): any => {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(
      password,
      confirmPassword
    );
    console.log(
      nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid
    );
    console.log(erro);
    setErro("");
    if (!nameIsValid && name != "") {
      return setErro("Nome Inválido.");
    } else if (!emailIsValid && email != "") {
      return setErro("Email Inválido.");
    } else if (!passwordIsValid && password != "") {
      return setErro("Senha Inválida.");
    } else if (!confirmPasswordIsValid && confirmPassword != "") {
      return setErro("Confirmação de senha não confere.");
    } else {
      setErro("");
    }
  };

  useEffect(() => {
    formIsValid();
  }, [name, email, password, confirmPassword]);

  return (
    <SafeAreaView style={styles.registerContainer}>
      <UploadImage setImage={setImage} image={image} />
      {(password.length > 3 ||
        name.length > 3 ||
        email.length > 3 ||
        confirmPassword.length > 3) &&
        erro && <Text style={communStyles.textError}>{erro}</Text>}
      <Input
        onChangeText={(e: string) => setName(e)}
        placeholder={"Nome completo"}
        value={name}
        icon={require("../../_assets/images/user.png")}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"E-mail"}
        value={email}
        icon={require("../../_assets/images/envelope.png")}
      />
      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Senha"}
        value={password}
        securityTextEntry={true}
        icon={require("../../_assets/images/key.png")}
      />
      <Input
        onChangeText={(e: string) => setConfirmPassword(e)}
        placeholder={"Confirmar Senha"}
        value={confirmPassword}
        securityTextEntry={true}
        icon={require("../../_assets/images/key.png")}
      />
      <Button
        onPress={() => {
          console.log("hi");
        }}
        placeholder="Cadastrar"
        loading={false}
        disabled={
          erro !== "" ||
          name == "" ||
          email == "" ||
          password == "" ||
          confirmPassword == ""
        }
      />
      <View style={styles.containerWithAccount}>
        <Text style={styles.textAccountRegister}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textRegister}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
