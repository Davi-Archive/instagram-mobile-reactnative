import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from './Header'
import { IContainer } from './types'


const Container = (props:IContainer) => {
    const [filter,setFilter]=useState<string>('')
  return (
    <SafeAreaView style={styles.container}>
      <Header
        publicationHeader={props.headerProps.publicationHeader}
        editProfileHeader={props.headerProps.publicationHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value)
        }}
      />


    </SafeAreaView>
  );
}

export default Container