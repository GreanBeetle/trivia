import React, { useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { ObjectType } from '../reusableTypes'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { homeScreenCopy as COPY } from '../copy'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType | null | undefined, 
  getQuestions: () => ObjectType,
}

const HomeScreen: React.FC<Props> = ({ 
  navigation, 
  isGetting, 
  getQuestionsError, 
  questions, 
  getQuestions 
}) => {
 
  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <SafeAreaView style={STYLES.container}>
      <TouchableOpacity 
        onPress={(): void => navigation.push('Quiz')} 
        style={STYLES.standard}
      >
        <View >
          <Text style={STYLES.headerText}>{COPY.title}</Text>
          <Text style={STYLES.subHeaderText}>{COPY.title}</Text>
          <Text style={STYLES.regularText}>{COPY.title}</Text>
          <Text style={STYLES.smallText}>{COPY.title}</Text>
          <Text>{COPY.title}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
 
const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  return { isGetting, getQuestionsError, questions }
}

export default connect(mapStateToProps, { getQuestions })(HomeScreen)

