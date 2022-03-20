import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { selectOrigin, selectDestination } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import MapViewDirections from 'react-native-maps-directions'

const Map = () => {
  
const origin = useSelector(selectOrigin)
const destination = useSelector(selectDestination)
const mapRef = useRef(null)

  return (
    <MapView
     ref={mapRef}
     style={tw `flex-1`}
     mapType="mutedStandard"
     initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    >
     {origin && destination && (
       <MapViewDirections 
         origin={origin.description}
         destination={destination.description}
         apikey={GOOGLE_MAPS_APIKEY}
         strokeWidth={3}
         strokeColor="black"
       />
     )}
     {origin?.location && (
         <Marker 
           coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
           }}
           title="Origin"
           description={origin.description}
           identifier="origin"
         />
     )}   
   </MapView>
  );
}

export default Map

const styles = StyleSheet.create({})