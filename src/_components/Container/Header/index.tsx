import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IHeader } from "./types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = (props: IHeader) => {
  const navigation = useNavigation<any>();

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {props.default && (
        <View style={styles.row}>
          <View>
            <Image
              source={require("../../../_assets/images/logoHorizontal.png")}
              style={styles.icon}
            />
          </View>

          <View
            style={
              props?.searchBar?.value.length == 0
                ? styles.containerInputSearch
                : [
                    styles.containerInputSearch,
                    styles.containerInputSearchSecond
                  ]
            }>
            <Image
              source={require("../../../_assets/images/search.png")}
              style={styles.icon}
            />

            <TextInput
              placeholder="Pesquisar"
              style={
                props?.searchBar?.value.length == 0
                  ? styles.input
                  : styles.inputActive
              }
              value={props?.searchBar?.value}
              onChangeText={props?.searchBar?.onChange}
              autoCapitalize={"none"}
            />
          </View>
        </View>
      )}
      {props.profileHeader && (
        <View style={styles.containerProfile}>
          <View style={{ marginHorizontal: 16 }}>
            {props.profileHeader.isExternalProfile && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ alignItems: "flex-start" }}
                  source={require("../../../_assets/images/voltar.png")}
                />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.textName}>{props.profileHeader.userName}</Text>
          <View>
            {props.profileHeader.isExternalProfile && (
              <TouchableOpacity onPress={() => logout()}>
                <Image
                  source={require("../../../_assets/images/log-out.png")}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}

      {props.editProfileHeader && (
        <View style={styles.containerProfile}>
          <View style={{ marginHorizontal: 16 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textName}>Editar Perfil</Text>
          <View style={{ marginHorizontal: 16 }}>
            <TouchableOpacity
              onPress={() =>
                props.editProfileHeader?.submitEnable &&
                props.editProfileHeader.submit()
              }>
              <Text
                style={
                  props.editProfileHeader.submitEnable
                    ? styles.textSubmit
                    : styles.textSubmitDisabled
                }>
                Concluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {props.profileHeader && (
        <View style={styles.containerProfile}>
          <View style={{ marginHorizontal: 16 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textName}>Nova Publicação</Text>
          <View style={{ marginHorizontal: 16 }}>
            <TouchableOpacity
              onPress={() =>
                props.publicationHeader?.submitEnable &&
                props.publicationHeader?.submit()
              }>
              <Text
                style={
                  props.publicationHeader?.submitEnable
                    ? styles.textSubmit
                    : styles.textSubmitDisabled
                }>
                Compartilhar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
