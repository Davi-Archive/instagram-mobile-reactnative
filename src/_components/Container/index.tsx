import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'


const Container = (props:{

}) => {
    const [filter,setFilter]=useState<string>('')
  return (
    <SafeAreaView>
      <Header
        /* publicationHeader={props.headerProps.publicationHeader}
        editProfileHeader={props.headerProps.publicationHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default} */
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value)
        }}
      />
      

    </SafeAreaView>
  );
}

export default Container