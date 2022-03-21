import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'


const data = [
  {
    id: "Uber-X-1",
    title: "UberX",
    multiplier: 1,
    image: require('../assets/car.png'),
  },
  {
    id: "Uber-XL-2",
    title: "Uber XL",
    multiplier: 1.2,
    image: require('../assets/suv.png'),
  },
  {
    id: "Uber-LUX-3",
    title: "UberX",
    multiplier: 1.75,
    image: require('../assets/limousine.png'),
  },
]


const RideOptionsCard = () => {

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={tw `absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon 
            name="chevron-left"
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw `text-center py-5 text-xl`}>Select a Ride - 
         {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw `flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"}`}
            >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={image}
            />
            <View style={tw `-ml-6`}>
              <Text style={tw `text-xl font-semibold`}>{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw `text-xl`}>$44</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw `bg-black py-3 m-3 ${!selected && "bg-gray"}`}>
          <Text style={tw `text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})