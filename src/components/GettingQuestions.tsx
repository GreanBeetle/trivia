import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { gettingQuestionsComponentCopy as COPY } from '../copy'

const GettingQuestions: React.FC = () => (
  <SafeAreaView style={STYLES.standard}>
    <View >
      <Text style={[STYLES.regularText, STYLES.red]}>{COPY.gettingQs}</Text>
    </View>
  </SafeAreaView>
)

export default GettingQuestions