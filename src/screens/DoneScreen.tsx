import React from 'react'
import { SafeAreaView, TouchableOpacity, FlatList, Text, View } from 'react-native'
import { GLOBAL_STYLES as STYLES, DONE_SCREEN_STYLES as styles } from '../styles'
import { ObjectType } from '../reusableTypes'
import { connect } from 'react-redux'

interface Props {
  navigation: any,
  questions: ObjectType[],
  score: number,
  totalQuestionsAnswered: number
}

const DoneScreen: React.FC<Props> = ({ navigation, questions, score, totalQuestionsAnswered }) => {

  const header = (
    <View style={STYLES.standard}>
      <Text style={STYLES.headerText}>{((score / questions.length) * 100).toString() + '% correct'}</Text>
    </View>
  )

  const footer = ( // add actual text! 
    <TouchableOpacity onPress={() => navigation.popToTop()}>
      <Text>PLAY AGAIN</Text> 
    </TouchableOpacity>
  )
  
  const renderItem = (item: ObjectType) => {
    const userAnswer = item.user_answered_correctly ? item.correct_answer : !item.correct_answer
    const questionNumber = questions.indexOf(item) + 1
    return (
      <View style={styles.listItemWrapper}>
        <View style={styles.numberWrapper}>
          <Text style={STYLES.largeText}>{questionNumber}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={STYLES.regularText}>{item.question}</Text>
          <Text style={STYLES.smallText}>correct answer: {item.correct_answer.toString()}</Text>
          <Text style={STYLES.smallText}>your answer: {userAnswer.toString()}</Text>
        </View>
      </View>
    )
  }
  
  return (
    <SafeAreaView>
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
