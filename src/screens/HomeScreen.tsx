import React, { useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { ObjectType } from '../types'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: object,
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
    <SafeAreaView>
      <TouchableOpacity onPress={():void => navigation.push('Quiz')}>
        <View>
          <Text>
            HomeScreen
          </Text>
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

