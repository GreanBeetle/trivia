import React from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { ObjectType } from '../reusableTypes'
import { swipeComponentCopy as COPY } from '../copy' 
const Entities = require('html-entities').AllHtmlEntities 

interface Props {
  questions: ObjectType,
  onSwipe: (index: number, answer: boolean) => void
}

const Swipe: React.FC<Props> = ({ questions, onSwipe }) => {
  
  const entities = new Entities()
  const cards = questions.map((q: ObjectType) => (
    <Card style={styles.card} key={Math.random().toString()}>
      <View style={[STYLES.justifiedText, STYLES.container]}>
        <Text style={STYLES.largeText}>
          category: {(entities.decode(q.category)).toLowerCase()}
        </Text>
      </View>
      <View style={[STYLES.justifiedText, {flex: 2}]}>
        <Text style={STYLES.largeText}>
          {(entities.decode(q.question)).toLowerCase()}
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