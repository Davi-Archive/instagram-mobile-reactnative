import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { IFooter } from "./types";

const Footer = (props: IFooter) => {
  const navigation = useNavigation<any>();

  const menu = [
    {
      title: "Home",
      onPress: () => {
        navigation.navigate("Home");
      },
      icon: require("../../../_assets/images/home.png"),
      iconActivated: require("../../../_assets/images/homeAtivo.png")
    },
    {
      title: "Publication",
      onPress: () => {
        navigation.navigate("Publication");
      },
      icon: require("../../../_assets/images/newPublication.png"),
      iconActivated: require("../../../_assets/images/newPublicationAtivo.png")
    },
    {
      title: "Profile",
      onPress: () => {
        navigation.navigate("Profile");
      },
      icon: require("../../../_assets/images/userNaoAtivo.png"),
      iconActivated: require("../../../_assets/images/user.png")
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menu.map((button, index) => (
          <TouchableOpacity onPress={button.onPress} key={index}>
            <Image
              source={
                (props.currentTab == button.title
                  ? button.iconActivated
                  : button.icon)
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Footer;
