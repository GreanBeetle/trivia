import React from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { ObjectType } from '../reusableTypes'
import { swipeComponentCopy as COPY } from '../copy' 

interface Props {
  questions: ObjectType,
  onSwipe: (index: number, answer: boolean) => void
}

const Swipe: React.FC<Props> = ({ questions, onSwipe }) => {
  
  const cards = questions.map((q: ObjectType) => ( // TURN INTO COMPONENT!! MAYBE ... DEFINITELY
    <Card style={styles.card} key={Math.random().toString()}>
      <View style={[STYLES.justifiedText, STYLES.container]}>
        <Text style={STYLES.largeText}>
          category: {q.category} 
        </Text>
      </View>
      <View style={[STYLES.justifiedText, {flex: 2}]}>
        <Text style={STYLES.largeText}>
          {q.question}
        </Text>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={[STYLES.red, STYLES.subHeaderText]}>&larr;</Text>
        <Text style={[STYLES.red, STYLES.largeText]}>{COPY.false}</Text>
        <Text style={[STYLES.green, STYLES.largeText]}>{COPY.true}</Text>
        <Text style={[STYLES.green, STYLES.subHeaderText]}>&rarr;</Text>
      </View>
    </Card>)
  ) 

  return (
    <View style={styles.swipeContainer}>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>done</Text>}
        onSwipedLeft={(index: number) => onSwipe(index, false)}
        onSwipedRight={(index: number) => onSwipe(index, true)}
      >
        {cards}
      </CardStack>     
    </View>
  )

}

export default Swipe