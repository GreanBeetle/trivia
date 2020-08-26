import React from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe, ScoreBoard, Timer } from '../components'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { updateQuizScore, updateScoreboard } from '../redux/actions'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType,
  score: number,
  updateQuizScore: (score: number) => ActionType,
  updateScoreboard: (index: number, answeredCorrectly: boolean) => ActionType,
  scoreboard: ObjectType[]    
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  questions, 
  score,
  updateQuizScore,
  updateScoreboard,
  scoreboard
}) => {
  
  // WHAT HAPPENS IF NO QUESTIONS? ADDRESS THIS

  // MOVE THIS BUSINESS LOGIC ELSEWHERE? PERHAPS NOT BECAUSE WE'RE TOYING WITH GLOBAL STATE ...
  const evaluateAnswer = (index: number, answer: boolean): void => {
    const answeredCorrectly = answer === questions[index].correct_answer
    // questions[index].user_answered_correctly = answered_correctly
    updateScoreboard(index, answeredCorrectly)
    if (answeredCorrectly) updateQuizScore(score + 1)
  }


  
  console.log('score on quiz screen', score) // REMOVE ME!!!!!  
  return (
    <SafeAreaView style={STYLES.container}>
      <ScoreBoard scoreboard={scoreboard} />
      <Swipe questions={questions} onSwipe={evaluateAnswer} />
      <Timer />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, scoreboard } = state.quiz
  return { isGetting, getQuestionsError, questions, score, scoreboard }
}

export default connect(mapStateToProps, { updateQuizScore, updateScoreboard })(QuizScreen)
