import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, QuizScreen, DoneScreen } from './screens'

/**
 * this nifty little binding allows us to reference the navigation container
 * and write nav methods in TypeScript (or JavaScript) modules anywhere in the app
 * for example, in utilities we import { navRef } and do this
 * navToScreen = (screen: string) => navRef.current?.navigate(screen)
 * documentation at reactnavigation.org/docs/navigating-without-navigation-prop/
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