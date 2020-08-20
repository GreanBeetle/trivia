import React from 'react'
import { View, Text } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  SWIPE_COMPONENT_STYLES as styles 
} from '../styles'
import Swiper from 'react-native-swiper'


interface Props {
  // props here 
}

const Swipe: React.FC<Props> = () => {
  return (
    <View style={STYLES.standard}>
      <Swiper style={styles.swiper} showsButtons={true} horizontal={true} removeClippedSubviews={false}>
        <View style={[STYLES.standard, styles.one]}><Text>ONE</Text></View>
        <View style={[STYLES.standard, styles.two]}><Text>TWO</Text></View>
        <View style={[STYLES.standard, styles.tre]}><Text>TRE</Text></View>
      </Swiper>
    </View>
  )
}

export default Swipe