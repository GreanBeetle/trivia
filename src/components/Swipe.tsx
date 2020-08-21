import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { ObjectType } from '../reusableTypes'


interface Props {
  questions: ObjectType
}

const Swipe: React.FC<Props> = ({ questions }) => {
  
  console.log('questions in swipe component!', questions) // REMOVE
  const swiper = useRef(null) // PERHAPS UNNECESSARY 
  const cards = questions.map( (q:ObjectType) => <Card style={styles.card}><Text style={STYLES.smallText}>{q.question}</Text></Card>)

  return (
    <View style={STYLES.container}>
     
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>done</Text>}
        ref={swiper} // PERHAPS UNNECESSARY
        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
      >
        {cards}
      </CardStack>
     
    </View>
  )
}

export default Swipe