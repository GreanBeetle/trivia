import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SCOREBOARD_COMPONENT_STYLES as styles 
} from '../styles'
import { ObjectType } from '../reusableTypes'
import COLORS from '../colors'

interface Props {
  scoreboard: ObjectType[]
}

const ScoreBoard: React.FC<Props> = ({ scoreboard }) => {

  const [scoreList, setScoreList] = useState(scoreboard) // HERE! POSSIBLY HACKERY. POSSIBLY NOT
  useEffect(() => { setScoreList(scoreboard) }, [scoreboard]) // HERE! POSSIBLY HACKERY. POSSIBLY NOT 
  
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

  const bubbles = scoreList.map((s: ObjectType) => (
    <View style={[styles.bubble, bubbleColor(s.answeredCorrectly)]} key={s.index}></View>
  ))
  
  console.log('rendering bubbles ...')
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      {bubbles} 
    </View>
  )

}

export default ScoreBoard