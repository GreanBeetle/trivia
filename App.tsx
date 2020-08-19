import 'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/redux/reducers'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { AppLoading } from 'expo'
import { useFonts, LexendGiga_400Regular } from '@expo-google-fonts/lexend-giga'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleWare(reducer)

// ADD TYPESCRIPT HERE!
const App = () => {  
  let [fontsLoaded] = useFonts({ LexendGiga_400Regular })

  if (!fontsLoaded) { // FIX THIS UGLY IF STATEMENT
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }

} 

export default gestureHandlerRootHOC(App)






