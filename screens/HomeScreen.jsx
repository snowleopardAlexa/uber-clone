import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import tw from "tailwind-react-native-classnames"


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw`text-red-500 p-10`], {color: "purple"}}>I am a home screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})