import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { timedOutComponentCopy as COPY } from '../copy'

interface Props {
  retry: () => void
}

const TimedOut: React.FC<Props> = ({ retry }) => (
  <SafeAreaView style={STYLES.standard}>
    <View>
      <Text style={[STYLES.headerText]}>{COPY.timeout}</Text>
    </View>
    <TouchableOpacity onPress={(): void => retry()} >
      <View style={[STYLES.centered, STYLES.roundButton, STYLES.redBackground]}>
        <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.retry}</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
)

export default TimedOut