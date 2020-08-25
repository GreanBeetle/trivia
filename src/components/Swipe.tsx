import React from 'react'
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
  
  const entities = new Entities()
  const cards = questions.map((q: ObjectType) => (
    <Card style={styles.card} key={Math.random().toString()}>
      <View style={STYLES.standard}>
        <Text style={STYLES.subHeaderText}>
          {entities.decode(q.category)}
        </Text>
      </View>
      <View style={STYLES.standard}>
        <Text style={STYLES.regularText}>
          {entities.decode(q.question)}
        </Text>
      </View>
    </Card>)
  ) 

  return (
    <View style={STYLES.container}>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>done</Text>}
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