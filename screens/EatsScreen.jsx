import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const EatsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
    <View style={tw `flex items-center m-auto`}>
      <Image 
        style={{width: 100, height: 100, resizeMode: "contain"}}
        source={require('../assets/salad.png')}
      />
      <Text style={tw `text-xl mt-4`}>Hello! I'm Eats Screen!</Text>
      <Text style={tw `text-lg text-center p-2`}>You've been naughty that's why you can't order food!</Text>
    </View>
    <View style={tw `bg-black p-2 w-40 rounded mx-auto`}>
    <Button
     onPress={() => navigation.goBack()}
     title="GO BACK"
     color="#fff"
    />      
    </View>
  
    </SafeAreaView>
  )
}

export default EatsScreen

const styles = StyleSheet.create({})