import React, { useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'

// ADD TYPESCRIPT!!!!
const HomeScreen = ({ navigation, isGetting, getQuestionsError, questions, getQuestions }) => {
  console.log('isGetting', isGetting) // REMOVE
  console.log('getQuestionsError', getQuestionsError) // REMOVE
  console.log('questions', questions) // REMOVE

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

const mapStateToProps = state => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  return { isGetting, getQuestionsError, questions }
}

export default connect(mapStateToProps, { getQuestions })(HomeScreen)

