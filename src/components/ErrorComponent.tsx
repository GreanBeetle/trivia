import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

interface Props {
  errorMessage: string
}

const ErrorComponent: React.FC<Props> = ({ errorMessage }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>{errorMessage}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ErrorComponent 
