import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const QuizScreen = ({ navigation }) => {
  console.log('navigation', navigation) // REMOVE 
  return (
    <SafeAreaView>
      <View>
        <Text>
          QuizScreen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default QuizScreen
