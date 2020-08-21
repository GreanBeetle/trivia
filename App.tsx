import 'react-native-gesture-handler'
import React, { ReactElement } from 'react';
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/redux/reducers'
import { AppLoading } from 'expo'
import { useFonts, LexendGiga_400Regular } from '@expo-google-fonts/lexend-giga'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleWare(reducer)

const App = () => {  
  
  let [fontsLoaded] = useFonts({ LexendGiga_400Regular, Roboto_400Regular })

  let app = (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )

  if (!fontsLoaded) app = <AppLoading />

  return app 

} 

export default gestureHandlerRootHOC(App)






