import React from 'react'
import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image 
          style={{width: 100, height: 100, resizeMode: "contain"}}
          source={require('../assets/uber.png')}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?" 
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})