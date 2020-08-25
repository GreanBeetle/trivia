import React from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe, ScoreBoard, Timer } from '../components'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { updateQuizScore } from '../redux/actions'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType,
  score: number,
  updateQuizScore: (score: number) => ActionType    
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  questions, 
  score,
  updateQuizScore
}) => {
  
  // WHAT HAPPENS IF NO QUESTIONS? ADDRESS THIS

  const evaluateAnswer = (index: number, answer: boolean): void => {
    // const correct_answer = questions[index].correct_answer
    const answered_correctly = answer === questions[index].correct_answer
    questions[index].user_answered_correctly = answered_correctly
    console.log('EVALUATE ANSWER: USER_ANSWERED_CORRECTLY', questions[index].user_answered_correctly) // REMOVE 
    console.log(`question #${index} correct answer ${questions[index].correct_answer}, actual answer ${answer}`) // PROBABLY REMOVE!    
    if (answered_correctly) updateQuizScore(score + 1)
  } 
  
  console.log('score on quiz screen', score) // REMOVE ME!!!!!  
  return (
    <SafeAreaView style={STYLES.container}>
      <ScoreBoard questions={questions} />
      <Swipe questions={questions} onSwipe={evaluateAnswer} />
      <Timer />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score } = state.quiz
  return { isGetting, getQuestionsError, questions, score }
}

export default connect(mapStateToProps, { updateQuizScore })(QuizScreen)
