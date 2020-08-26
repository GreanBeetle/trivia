import React, { useEffect } from 'react'
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

   
  
  const bubbleColor = (correctAnswer: string | null): { backgroundColor: string } => {
    console.log('bubble color correct answer', correctAnswer)
    switch(correctAnswer) {
      case null: 
        return { backgroundColor: COLORS.textGray }
      case 'yes': 
        return { backgroundColor: COLORS.actionGreen }
      case 'no': 
        return { backgroundColor: COLORS.red }      
      default: 
        return { backgroundColor: COLORS.textGray }
    }
  }

  const bubbles = questions.map((q: ObjectType) => (
    <View style={[styles.bubble, bubbleColor(q.user_answered_correctly)]} key={Math.random().toString()}></View>
  ))
  
  console.log('rendering bubbles ...') // REMOVE
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      {bubbles} 
    </View>
  )

}

export default React.memo(ScoreBoard, (prevProps: any, nextProps: any) => { // ADDED REMOVE?
  console.log('prevProps', prevProps)
  console.log('nextProps', nextProps)
  return false // ALWAYS rerender when props change 
})