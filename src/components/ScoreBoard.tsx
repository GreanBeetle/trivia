import React, { useState, useEffect } from 'react'
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

  const [questionList, setQuestionList] = useState(questions) // HERE! POSSIBLY HACKERY. POSSIBLY NOT
  useEffect(() => { setQuestionList(questions) }, [questions]) // HERE! POSSIBLY HACKERY. POSSIBLY NOT 
  
  const bubbleColor = (userAnsweredCorrectly: boolean): { backgroundColor: string } => {
    switch(userAnsweredCorrectly) {
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

  const bubbles = questionList.map((q: ObjectType) => (
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