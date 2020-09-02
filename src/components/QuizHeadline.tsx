import React from 'react'
import { View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

interface Props {
  headline: string
}

const QuizHeadline: React.FC<Props> = ({ headline }) => (
  <View style={STYLES.standard}>
    <Text style={[STYLES.largeText, STYLES.darkGreen]}>{headline}</Text>
  </View>
)

export default QuizHeadline