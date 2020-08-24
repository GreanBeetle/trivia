import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { ObjectType, ActionType } from '../reusableTypes'


interface Props {
  questions: ObjectType,
  onSwipe: (score: number) => ActionType
}

const Swipe: React.FC<Props> = ({ questions, onSwipe }) => {
  
  console.log('swipe component, onSwipe function', onSwipe(3)) // REMOVE
  console.log('questions in swipe component!', questions) // REMOVE
  const swiper = useRef(null) // PERHAPS UNNECESSARY 
  const cards = questions.map( (q: ObjectType) => <Card style={styles.card}><Text style={STYLES.largeText}>{q.question}</Text></Card>)

  return (
    <View style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text style={STYLES.headerText}>{questions[0].category}</Text>
      </View>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>done</Text>}
        ref={swiper} // PERHAPS UNNECESSARY
        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={(index: number) => console.log('onSwipedLeft index', index, false)}
        onSwipedRight={(index: number) => console.log('onSwipedRight index', index, true)}
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