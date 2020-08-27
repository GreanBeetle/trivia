import React from 'react'
import { SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native'
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


  const header = <><Text style={STYLES.headerText}>{((score / questions.length) * 100).toString() + '%'}</Text></>
  const footer = ( // add actual text! 
    <TouchableOpacity onPress={() => navigation.popToTop()}>
      <Text>PLAY AGAIN</Text> 
    </TouchableOpacity>
  )
  
  const renderItem = (item: ObjectType) => {
    console.log('item.correct_answer', item.correct_answer)
    const userAnswer = item.user_answered_correctly ? item.correct_answer : !item.correct_answer
    return (
      <>
        <Text>{item.question}</Text>
        <Text>correct answer: {item.correct_answer.toString()}</Text>
        <Text>your answer: {userAnswer.toString()}</Text>
      </>
    )
  }
  
  return (
    <SafeAreaView style={STYLES.standard}>
        <FlatList
          data={questions}
          renderItem={({ item }) => renderItem(item)} 
          keyExtractor={(item: ObjectType) => item.question}
          ListHeaderComponent={header}
          ListFooterComponent={footer}

        />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { questions } = state.getQuestions
  const { score, totalQuestionsAnswered } = state.quiz
  return { questions, score, totalQuestionsAnswered }
}

export default connect(mapStateToProps)(DoneScreen)
