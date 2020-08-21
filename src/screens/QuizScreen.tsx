import React from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe } from '../components'

interface Props {
  navigation: any 
}

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={STYLES.container}>
      <Swipe />
    </SafeAreaView>
  )
}

export default QuizScreen
