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

   
  console.log('SCOREBOARD! questions', questions) // REMOVE

  const bubbleColor = (correctAnswer: boolean): { backgroundColor: string } => {
    switch(correctAnswer) {
      case null: 
        return { backgroundColor: COLORS.textGray }
      case true: 
        return { backgroundColor: COLORS.actionGreen }
      case false: 
        return { backgroundColor: COLORS.red }      
      default: 
        return { backgroundColor: COLORS.textGray }
    }
  }

  const bubbles = questions.map((q: ObjectType) => (
    <View style={[styles.bubble, bubbleColor(q.user_answered_correctly)]} key={q.index}></View>
  ))
  
  console.log('rendering bubbles ...') // REMOVE
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      {bubbles} 
    </View>
  )

}

export default ScoreBoard