import React from 'react'
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from "react-native-elements"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'


const data = [
    {
        id: "1",
        title: "Get a ride",
        image: require('../assets/car.png'),
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "Order Food",
        image: require('../assets/salad.png'),
        screen: "EatsScreen",
    },
  
]

const NavOptions = () => {

const navigation = useNavigation()
const origin = useSelector(selectOrigin)

  return (
    <FlatList 
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => (
       <TouchableOpacity
         onPress={() => navigation.navigate(item.screen)}
         style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
         disabled={!origin}
       >
        <View style={tw `${!origin && 'opacity-20'}`}>
            <Image 
                style={{width: 100, height: 100, resizeMode: "contain"}}
                source={item.image}
            />
            <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
              style={tw `p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
        </View>
       </TouchableOpacity>
    )}
  />
  )
}

export default NavOptions
