import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, QuizScreen, DoneScreen } from './screens'

/**
 * reference to nav container to allow construction of nav 
 * methods in JS or TS modules anywhere in app
 * docs at reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export const navRef: any = React.createRef() 

const Stack = createStackNavigator()

const InitialStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name='Quiz' component={QuizScreen} options={{headerShown: false, gestureEnabled: false }} />
    <Stack.Screen name='Done' component={DoneScreen} options={{ headerShown: false, gestureEnabled: false }} />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer ref={navRef}>
    <InitialStackScreens />
  </NavigationContainer>
)

export default Navigation 