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
  updateQuizScore: (score: number) => ActionType,
  updateUserAnsweredCorrectly: (index: number, answeredCorrectly: string) => ActionType    
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  questions, 
  score,
  updateQuizScore, 
  updateUserAnsweredCorrectly
}) => {  

  console.log('score on quiz', score) // REMOVE
  console.log('questions on quiz', questions) // REMOVE

  // WHAT HAPPENS IF NO QUESTIONS? ADDRESS THIS
  // MOVE THIS BUSINESS LOGIC ELSEWHERE? PERHAPS NOT BECAUSE WE'RE TOYING WITH GLOBAL STATE ...
  const evaluateAnswer = async (index: number, answer: boolean) => {
    let answeredCorrectly = answer === questions[index].correct_answer
    answeredCorrectly = answeredCorrectly ? 'yes' : 'no'
    console.log('answered correctly in evaluate answer', answeredCorrectly)
    await updateUserAnsweredCorrectly(index, answeredCorrectly) // ADDED
    // if (answeredCorrectly === 'yes') updateQuizScore(score + 1)
    updateQuizScore(score + 1)
    
  }
  
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

export default connect(mapStateToProps, { updateQuizScore, updateUserAnsweredCorrectly })(React.memo(QuizScreen)) // ADDED React.Memo
