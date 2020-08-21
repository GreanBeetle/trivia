import React from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'

interface Props {
  // props here 
}

const Swipe: React.FC<Props> = () => {
  return (
    <View style={STYLES.standard}>
     
        <View style={[STYLES.standard, styles.card, styles.one]}><Text>ONE</Text></View>
      <View style={[STYLES.standard, styles.card, styles.two]}><Text>TWO</Text></View>
      <View style={[STYLES.standard, styles.card, styles.tre]}><Text>TRE</Text></View>
     
    </View>
  )
}

export default Swipe