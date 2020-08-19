import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={():void => navigation.push('Quiz')}>
        <View>
          <Text>
            HomeScreen
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

