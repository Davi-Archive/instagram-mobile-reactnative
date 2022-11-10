import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { IUserData } from "../../../../_services/UserService/types";
import styles from "./styles";
import * as UserService from "../../../../_services/UserService";

const Search = (props: { filter: string }) => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findUsers = async () => {
    try {
      setIsLoading(true);
      setUsers([]);
      const { data } = await UserService.search(props.filter);

      const userForma
    } catch (error) {}
  };

  return <View style={styles.container}></View>;
};

export default Search;
