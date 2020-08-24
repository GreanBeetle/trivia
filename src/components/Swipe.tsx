import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { ObjectType } from '../reusableTypes' 
const Entities = require('html-entities').AllHtmlEntities 


interface Props {
  questions: ObjectType,
  onSwipe: (index: number, answer: boolean) => void
}

const Swipe: React.FC<Props> = ({ questions, onSwipe }) => {
  
  console.log('questions in swipe component!', questions) // REMOVE
  const swiper = useRef(null) // PERHAPS UNNECESSARY 
  const entities = new Entities()
  const cards = questions.map((q: ObjectType) => <Card style={styles.card}><Text style={STYLES.largeText}>{entities.decode(q.question)}</Text></Card>)

  return (
    <View style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text style={STYLES.headerText}>{questions[0].category}</Text>
      </View>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>done</Text>}
        ref={swiper} // PERHAPS UNNECESSARY
        onSwipedLeft={(index: number) => onSwipe(index, false)}
        onSwipedRight={(index: number) => onSwipe(index, true)}
      >
        {cards}
      </CardStack>
      <View style={STYLES.standard}>
        <Text style={STYLES.headerText}>yo yo i am the footer</Text>
      </View>
     
    </View>
  )
}

export default Swipe