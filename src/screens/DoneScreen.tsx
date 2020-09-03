import React from 'react'
import { SafeAreaView, FlatList, Text, View } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GettingQuestions } from '../components'
import { GLOBAL_STYLES as STYLES, DONE_SCREEN_STYLES as styles } from '../styles'
import { ObjectType, ActionType } from '../reusableTypes'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/actions'
import { isEven } from '../utilities'
import COLORS from '../colors'
import { doneScreenCopy as COPY } from '../copy'
import { retry } from '../utilities'

interface Props {
  navigation: any,
  questions: ObjectType[],
  score: number,
  currentQuestion: number,
  getQuestions: () => ObjectType,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  resetQuestions: () => ActionType,
  resetQuizScore: () => ActionType
}

const DoneScreen: React.FC<Props> = ({ 
  navigation, 
  questions, 
  score,
  isGetting,
  getQuestionsError
}) => { 

  const playAgain = async () => {
    try {
      retry(false)
      navigation.dispatch(StackActions.pop(2))
    } catch (error) {
      console.log('error in play again method', error) // change to Alert.alert(retry()) 
    }
  }

  /**
   * header used in the FlatList below
   */
  const header = (
    <View style={[STYLES.standard, styles.scoreContainer]}>
      <Text style={STYLES.subHeaderText}>{`score ${score}/${questions.length}`}</Text>
      <TouchableOpacity onPress={() => playAgain()}>
        <View style={[STYLES.centered, STYLES.largeButton, styles.playAgainButton]}>
          <Text style={[STYLES.subHeaderText, STYLES.white]}>{COPY.playAgain}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  
  /**
   * returns the JSX for a question list item
   * @param item this will be a question object 
   */
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

  let content = (
    <SafeAreaView>
      <FlatList
        data={questions}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: ObjectType) => item.question}
        ListHeaderComponent={header}
      />
    </SafeAreaView>
  )
  
  if (isGetting && !getQuestionsError) content = <GettingQuestions />

  return content
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, currentQuestion } = state.quiz
  return { questions, score, currentQuestion, isGetting, getQuestionsError }
}

export default connect(mapStateToProps, { getQuestions })(DoneScreen)
