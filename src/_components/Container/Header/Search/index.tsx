import React, { useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

const Search = (props: { filter: string }) => {
/*   const [users, setUsers] = useState<Array<string>([]); */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
       {/*  {users.length > 0 &&
    <FlatList
    data={users}
    />} */}
    </View>
  );
};

export default Search;
