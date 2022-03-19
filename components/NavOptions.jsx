import React from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require('../assets/uber.png'),
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: require('../assets/uber.png'),
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
  return (
    <FlatList 
     data={data}
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => (
       <TouchableOpacity>
         <Text>{item.title}</Text>
       </TouchableOpacity>
    )}
  />
  )
}

export default NavOptions
