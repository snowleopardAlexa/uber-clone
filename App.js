import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from "react-redux"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from "./store"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EatsScreen from './screens/EatsScreen';

const Stack = createStackNavigator()

function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}} >
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="MapScreen"
            component={MapScreen}
          />
           <Stack.Screen 
            name="EatsScreen"
            component={EatsScreen}
          />
        </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
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

export default App