import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Eldert Street, Brooklyn, New York",
    },
    {
        id: "2",
        icon: "briefcase",
        location: "Work",
        destination: "5th Avenue, Manhattan, New York",
    },
]

const NavFavourites = () => {
  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <TouchableOpacity>
              <Text>Hello</Text>
          </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})