import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from "react-redux"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from "./store"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {

const Stack = createStackNavigator()

  return (
    <Provider store={store}>
       <NavigationContainer>
        <SafeAreaProvider>
        <GestureHandlerRootView>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen 
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <HomeScreen />
        </GestureHandlerRootView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
