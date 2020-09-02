import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { errorComponentCopy as COPY } from '../copy'
import { retry } from '../utilities'

interface Props {
  errorMessage: string
}

const ErrorComponent: React.FC<Props> = ({ errorMessage }) => {
  return (
    <SafeAreaView style={STYLES.standard}>
      <View style={[STYLES.standardWidth, STYLES.centered]}>
        <Text style={STYLES.subHeaderText}>{COPY.error}</Text>
        <Text style={[STYLES.largeText, STYLES.red]}>{`"${errorMessage}"`}</Text>
        <Text style={STYLES.regularText}>{COPY.pleaseEnsureInternet}</Text>
      </View>
      <TouchableOpacity onPress={ async () => await retry() } >
        <View style={[STYLES.centered, STYLES.roundButton, STYLES.textGrayBackground]}>
          <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.retry}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ErrorComponent 
