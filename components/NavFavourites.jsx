import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    <View>
      <Text>NavFavourites</Text>
    </View>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})