import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

// ADD TYPESCRIPT!!!!
const HomeScreen = ({ navigation, isGetting, getQuestionsError, questions }) => {
  console.log('isGetting', isGetting) // REMOVE
  console.log('getQuestionsError', getQuestionsError) // REMOVE
  console.log('questions') // REMOVE
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

export default connect(mapStateToProps, null)(HomeScreen)

