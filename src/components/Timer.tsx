import React from 'react'
import { View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

interface Props {
  currentTime: number
}

const Timer: React.FC<Props> = ({ currentTime }) => (
  <View style={STYLES.standard}>
    <Text style={STYLES.headerText}>{currentTime}</Text>
  </View>
) 

export default Timer 