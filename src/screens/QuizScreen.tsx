import React, { useEffect, useState } from 'react'
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

  // const [localQuestions, updateLocalQuestions] = useState(questions)
  // useEffect(() => console.log('local questions updated'), [localQuestions])
  // const [scoreList, setScoreList] = useState(scoreboard) // HERE! POSSIBLY HACKERY. POSSIBLY NOT
  // useEffect(() => { setScoreList(scoreboard) }, [scoreboard]) // HERE! POSSIBLY HACKERY. POSSIBLY NOT
  
  // WHAT HAPPENS IF NO QUESTIONS? ADDRESS THIS

  // MOVE THIS BUSINESS LOGIC ELSEWHERE? PERHAPS NOT BECAUSE WE'RE TOYING WITH GLOBAL STATE ...
  const evaluateAnswer = (index: number, answer: boolean): void => {
    const answeredCorrectly = answer === questions[index].correct_answer
    questions[index].user_answered_correctly = answeredCorrectly
    // console.log('local questions BEFORE update but AFTER change', localQuestions) // REMOVE
    // updateLocalQuestions(localQuestions) 
    // console.log('local questions AFTER update and AFTER local change', localQuestions) // REMOVE
    if (answeredCorrectly) updateQuizScore(score + 1)
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
