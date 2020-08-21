import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import CardStack, { Card } from 'react-native-card-stack-swiper'


interface Props {
  // props here 
}

const Swipe: React.FC<Props> = () => {
  
  const swiper = useRef(null)
  
  return (
    <View style={STYLES.container}>
     
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
        ref={swiper}
        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
      >
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
        <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Text style={styles.label}>B</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
        <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>
      </CardStack>
     
    </View>
  )
}

export default Swipe