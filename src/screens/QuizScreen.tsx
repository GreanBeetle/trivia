import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe, ScoreBoard, Timer, QuizHeadline } from '../components'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { 
  updateQuizScore, 
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut 
} from '../redux/actions'

interface Props {
  navigation: any,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType, 
  score: number,
  currentQuestion: number,
  updateQuizScore: (score: number) => ActionType,
  updateUserAnsweredCorrectly: (index: number, answeredCorrectly: boolean) => ActionType,
  resetTimer: () => ActionType,
  updateTimeRemaining: () => ActionType,
  setTimedOut: (timedOut: boolean) => ActionType,
  currentTime: number,
  timedOut: boolean     
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  questions, 
  score,
  currentQuestion,  
  updateQuizScore, 
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut,
  currentTime,
  timedOut
}) => {  
    
  // what happens if component receives no questions? address this
  
  
  // let timer: any
  let interval: any

  useEffect( () => { 
    interval = setInterval( () => {
      updateTimeRemaining()
    } , 1000)
    return () => clearInterval(interval) // componentWillUnmount
  }, [])

  // const startTimer = (): number => timer = setInterval(updateTimeRemaining(), 1000)
  // try catch?
  // add JS docs explaining this function 
  const evaluateAnswer = (index: number, answer: boolean) => {
    let answeredCorrectly = answer === questions[index].correct_answer 
    const newScore = answeredCorrectly ? score + 1 : score // keep until hackery is fixed, then refactor to if (answeredCorrectly) updateQuizScore(score + 1)
    updateUserAnsweredCorrectly(index, answeredCorrectly) 
    updateQuizScore(newScore)
    resetTimer()
  }

  // JS Docs?
  const navToDoneScreen = (): void => {
    clearInterval(interval)
    navigation.push('Done')
  }

  // timer function or functions here
  // should be able to (a) resetTimer and (b) updateTimeRemaining and (c) setTimedOut
  // so we will have 5 values that come from Redux (1) currentTime (2) a method called resetTimer and (3) a method called updateTimeRemaining 
  // and (4) timedOut (5) setTimedOut(true) or setTimedOut(false)
  // finally, we need a <TimedOut /> component that has options (a) try again with same questions or (b) try again with new questions
  
  return (
    <SafeAreaView style={STYLES.container}>
      <ScoreBoard questions={questions} />
      <QuizHeadline headline={questions[currentQuestion] ? questions[currentQuestion].category : ''} />
      <Swipe questions={questions} onSwipe={evaluateAnswer} navToDoneScreen={() => navToDoneScreen()} />
      <Timer currentTime={currentTime} />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, currentQuestion } = state.quiz
  const { currentTime, timedOut } = state.timer
  return { isGetting, getQuestionsError, questions, score, currentQuestion, currentTime, timedOut }
}

const actions = {
  updateQuizScore,
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut
}

export default connect(mapStateToProps, actions)(QuizScreen) 