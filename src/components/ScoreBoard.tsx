import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { 
  GLOBAL_STYLES as STYLES,
  SCOREBOARD_COMPONENT_STYLES as styles 
} from '../styles'
import { ObjectType } from '../reusableTypes'
import COLORS from '../colors'

interface Props {
  questions: ObjectType
}

// not currently scalable!
// is NOT as performant as could be, update this component, especially selectBubbleType method
const ScoreBoard: React.FC<Props> = ({ questions }) => {
  
  const nullBubble = (key: string) => <View style={styles.bubble} key={key} />
  const thumbsUp = (key: string) => <FontAwesome5 name="thumbs-up" size={24} color={COLORS.actionGreen} key={key} /> 
  const skull = (key: string) => <FontAwesome5 name="skull" size={24} color={COLORS.red} key={key} />
  
  const selectBubbleType = (userAnsweredCorrectly: boolean) => {
    try {
      const key = Math.random().toString()
      if (userAnsweredCorrectly === null) return nullBubble(key)
      else if (userAnsweredCorrectly === true) return thumbsUp(key)
      else if (userAnsweredCorrectly === false) return skull(key)
      else return nullBubble(key) 
    } catch (error) {
      console.log('error in selectBubbleType') // change to Alert.alert(retry()) 
    }
  }

  const bubbles = questions.map( (q: ObjectType) => ( 
    selectBubbleType(q.user_answered_correctly)
  ))
  
  return (
    <View style={[STYLES.standardWidth, styles.container]}>
      {bubbles} 
    </View>
  )

}

export default ScoreBoard