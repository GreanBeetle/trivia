import React from 'react'
import { View } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SCOREBOARD_COMPONENT_STYLES as styles 
} from '../styles'
import { ObjectType } from '../reusableTypes'
import COLORS from '../colors'

interface Props {
  questions: ObjectType
}

const ScoreBoard: React.FC<Props> = ({ questions }) => {
  
  const bubbleColor = (userAnsweredCorrectly: boolean): { backgroundColor: string } => {
    const gray = { backgroundColor: COLORS.textGray }
    const green = { backgroundColor: COLORS.actionGreen }
    const red = { backgroundColor: COLORS.red }
    switch(userAnsweredCorrectly) {
      case null: 
        return gray
      case true: 
        return green
      case false: 
        return red      
      default: 
        return gray
    }
  }

  const bubbles = questions.map((q: ObjectType) => (
    <View style={[styles.bubble, bubbleColor(q.user_answered_correctly)]} key={q.question}></View>
  ))
  
  console.log('rendering bubbles ...')
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      {bubbles} 
    </View>
  )

}

export default ScoreBoard