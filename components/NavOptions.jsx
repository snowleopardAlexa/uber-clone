import React from 'react'
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require('../assets/car.png'),
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: require('../assets/salad.png'),
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
  return (
    <FlatList 
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => (
       <TouchableOpacity>
        <View>
            <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                source={item.image}
            />
        </View>
       </TouchableOpacity>
    )}
  />
  )
}

export default NavOptions
