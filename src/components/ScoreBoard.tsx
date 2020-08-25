import React from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SCOREBOARD_COMPONENT_STYLES as styles 
} from '../styles'
import { ObjectType } from '../reusableTypes'

interface Props {
  questions: ObjectType
}

const ScoreBoard: React.FC<Props> = ({ questions }) => {
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
      <View style={styles.bubble}></View>
    </View>
  )
}

export default ScoreBoard