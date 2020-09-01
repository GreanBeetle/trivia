import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, QuizScreen, DoneScreen } from './screens'

const Stack = createStackNavigator()

const InitialStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name='Quiz' component={QuizScreen} options={{headerShown: false, gestureEnabled: false }} />
    <Stack.Screen name='Done' component={DoneScreen} options={{ headerShown: false, gestureEnabled: false }} />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <InitialStackScreens />
  </NavigationContainer>
)

export default Navigation 