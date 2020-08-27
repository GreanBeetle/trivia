import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe, ScoreBoard, Timer } from '../components'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { updateQuizScore, updateUserAnsweredCorrectly } from '../redux/actions'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType,
  score: number,
  totalQuestionsAnswered: number,
  updateQuizScore: (score: number) => ActionType,
  updateUserAnsweredCorrectly: (index: number, answeredCorrectly: boolean) => ActionType    
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  questions, 
  score,
  totalQuestionsAnswered, // hackery! use this or ensure something else updates every time 
  updateQuizScore, 
  updateUserAnsweredCorrectly
}) => {  
  console.log('questions answered', totalQuestionsAnswered) // keep until hackery is fixed  

  // what happens if component receives no questions? address this
  
  // try catch?
  const evaluateAnswer = (index: number, answer: boolean) => {
    let answeredCorrectly = answer === questions[index].correct_answer 
    const newScore = answeredCorrectly ? score + 1 : score // keep until hackery is fixed, then refactor to if (answeredCorrectly) updateQuizScore(score + 1)
    updateUserAnsweredCorrectly(index, answeredCorrectly) 
    updateQuizScore(newScore)
  }
  
  return (
    <SafeAreaView style={STYLES.container}>
      <ScoreBoard questions={questions} />
      <Swipe questions={questions} onSwipe={evaluateAnswer} navToDoneScreen={() => navigation.push('Done')} />
      <Timer />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, totalQuestionsAnswered } = state.quiz
  return { isGetting, getQuestionsError, questions, score, totalQuestionsAnswered }
}

export default connect(mapStateToProps, { updateQuizScore, updateUserAnsweredCorrectly })(QuizScreen) 