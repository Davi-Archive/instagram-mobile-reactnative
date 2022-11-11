import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Header from "./Header";
import { IContainer } from "./types";
import Search from "./Header/Search";
import { View } from "react-native";
import Loading from "./Loading";
import Footer from "./Footer";

const Container = (props: IContainer) => {
  const [filter, setFilter] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Header
        publicationHeader={props.headerProps.publicationHeader}
        editProfileHeader={props.headerProps.editProfileHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value)
        }}
      />
      <Search filter={filter} />
      <View style={styles.content}>
        {!props.isLoading && props.children}
        <Loading isLoading={props.isLoading} />
      </View>
      <Footer currentTab={props.footerProps.currentTab} />
    </SafeAreaView>
  );
};

export default Container;
