import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const HomeScreen = ({ navigation }) => {
  console.log('navigation', navigation) // REMOVE 
  return (
    <SafeAreaView>
      <View>
        <Text>
          HomeScreen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

