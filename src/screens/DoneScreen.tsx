import React from 'react'
import { SafeAreaView, View, FlatList, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { ObjectType } from '../reusableTypes'
import { connect } from 'react-redux'

interface Props {
  navigation: any,
  questions: ObjectType[],
  score: number,
  totalQuestionsAnswered: number
}

const DoneScreen: React.FC<Props> = ({ navigation, questions, score, totalQuestionsAnswered }) => {

  console.log('done screen questions', questions) // remove

  const renderItem = (item: ObjectType) => {
    console.log('item.correct_answer', item.correct_answer)
    const userAnswer = item.user_answered_correctly ? item.correct_answer : !item.correct_answer
    return (
      <View>
        <Text>question: {item.question}</Text>
        <Text>correct answer: {item.correct_answer.toString()}</Text>
        <Text>your answer: {userAnswer.toString()}</Text>
      </View>
    )
  } 

  return (
    <SafeAreaView style={STYLES.standard}>
      <View> 
        <FlatList
          data={questions}
          renderItem={({ item }) => renderItem(item)} 
          keyExtractor={(item: ObjectType) => item.question}
        />
      </View>

    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { questions } = state.getQuestions
  const { score, totalQuestionsAnswered } = state.quiz
  return { questions, score, totalQuestionsAnswered }
}

export default connect(mapStateToProps)(DoneScreen)
