import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from "react-native-maps"
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
  
const origin = useSelector(selectOrigin)

  return (
    <MapView
     style={tw `flex-1`}
     mapType="mutedStandard"
     initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
   />
  );
}

export default Map

const styles = StyleSheet.create({})