import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


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
    image: require('../assets/car.png'),
  },
  {
    id: "Uber-LUX-3",
    title: "UberX",
    multiplier: 1.75,
    image: require('../assets/car.png'),
  },
]


const RideOptionsCard = () => {

  const navigation = useNavigation()

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
        <Text style={tw `text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Text>Car</Text>
          </TouchableOpacity>
        )}
      
      />
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})