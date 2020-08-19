import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

interface Props {
  navigation: any 
}

const QuizScreen: React.FC<Props> = ({ navigation }) => {
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
