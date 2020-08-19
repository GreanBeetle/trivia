import 'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/redux/reducers'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleWare(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
} 

export default gestureHandlerRootHOC(App)






