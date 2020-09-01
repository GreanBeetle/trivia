import React from 'react'
import { SafeAreaView, TouchableOpacity, FlatList, Text, View } from 'react-native'
import { GLOBAL_STYLES as STYLES, DONE_SCREEN_STYLES as styles } from '../styles'
import { ObjectType } from '../reusableTypes'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { isEven } from '../utilities'
import COLORS from '../colors'
import { doneScreenCopy as COPY } from '../copy'

interface Props {
  navigation: any,
  questions: ObjectType[],
  score: number,
  totalQuestionsAnswered: number,
  getQuestions: () => ObjectType,
  isGetting: boolean,
  getQuestionsError: ObjectType
}

const DoneScreen: React.FC<Props> = ({ 
  navigation, 
  questions, 
  score, 
  totalQuestionsAnswered, // no unused vars 
  getQuestions,
  isGetting,
  getQuestionsError 
}) => { 

  const playAgain = async () => {
    try {
      
      console.log('play again! getting new questions') // REMOVE
      console.log('OLD questions', questions[0]) // REMOVE
      await getQuestions()
      console.log('NEW questions', questions[0]) // REMOVE
      navigation.popToTop()
      // ADD CLEAR SCORE METHOD 
      // reset TOTALQUESTIONSANSWERED AS WELL
    } catch (error) {
      console.log('error in play again method', error)
    }
  }

  // HANDLE ISGETTING QUESTIONS SCENARIO! MAKE "GETTING QUESTIONS" COMPONENT FOR THIS SCREEN AND THE HOME SCREEN
  
  const header = (
    <View style={[STYLES.standard, styles.scoreContainer]}>
      <Text style={STYLES.largeHeaderText}>{((score / questions.length) * 100).toString() + '%'}</Text>
      <TouchableOpacity onPress={() => playAgain()}>
        <View style={[STYLES.centered, styles.playAgainButton]}>
          <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.playAgain}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  
  const renderItem = (item: ObjectType) => {
    const userAnswer = item.user_answered_correctly ? item.correct_answer : !item.correct_answer
    const questionNumber = questions.indexOf(item) + 1
    const evenNumber = isEven(questionNumber)
    const backgroundColor = evenNumber ? COLORS.borderGray : COLORS.white 
    return (
      <View style={styles.listItemWrapper}>
        <View style={styles.questionNumberWrapper}>
          <Text style={STYLES.largeText}>{questionNumber}</Text>
        </View>
        <View style={[styles.questionWrapper, { backgroundColor }]}>
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
        />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, totalQuestionsAnswered } = state.quiz
  return { questions, score, totalQuestionsAnswered }
}

export default connect(mapStateToProps, { getQuestions })(DoneScreen)
