import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { 
  Swipe, 
  ScoreBoard, 
  Timer, 
  QuizHeadline,
  TimedOut,
  GettingQuestions 
} from '../components'
import { 
  getQuestions,
  updateQuizScore,
  resetQuizScore, 
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut 
} from '../redux/actions'

interface Props {
  navigation: any,
  getQuestions: () => ObjectType,
  isGetting: boolean,
  getQuestionsError: ObjectType,
  questions: ObjectType, 
  score: number,
  currentQuestion: number,
  updateQuizScore: (score: number) => ActionType,
  resetQuizScore: () => ActionType,
  updateUserAnsweredCorrectly: (index: number, answeredCorrectly: boolean) => ActionType,
  resetTimer: () => ActionType,
  updateTimeRemaining: () => ActionType,
  setTimedOut: (timedOut: boolean) => ActionType,
  currentTime: number,
  timedOut: boolean     
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  getQuestions,
  isGetting,
  getQuestionsError,
  questions, 
  score,
  currentQuestion,  
  updateQuizScore,
  resetQuizScore, 
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut,
  currentTime,
  timedOut
}) => {  
    
  // what happens if component receives no questions? address this
  
  let timer: any = useRef(null)

  useEffect( () => { 
    timer.current = setInterval( () => {
      updateTimeRemaining()
    }, 1000)
    return () => clearInterval(timer.current)
  }, [])

  // add JS docs explaining this function and perhaps a try catch?
  // try catch!   
  const evaluateAnswer = (index: number, answer: boolean) => {
    let answeredCorrectly = answer === questions[index].correct_answer 
    const newScore = answeredCorrectly ? score + 1 : score
    updateUserAnsweredCorrectly(index, answeredCorrectly) 
    updateQuizScore(newScore)
    resetTimer()
  }

  // JS Docs?
  // try catch!
  const navToDoneScreen = (): void => {
    clearInterval(timer.current)
    navigation.push('Done')
  }

  // JS Docs
  // duplicate of playAgain() method in DoneScreen
  const retry = async () => {
    try {
      clearInterval(timer.current)
      resetTimer()
      setTimedOut(false)
      resetQuizScore()
      await getQuestions()
      navigation.dispatch(StackActions.pop(1))
    } catch (error) {
      console.log('retry error', error) // keep?
      // add setError here
    }
  }
  
  let content = (
    <SafeAreaView style={STYLES.container}>
      <ScoreBoard questions={questions} />
      <QuizHeadline headline={questions[currentQuestion] ? questions[currentQuestion].category : ''} />
      <Swipe questions={questions} onSwipe={evaluateAnswer} navToDoneScreen={() => navToDoneScreen()} />
      <Timer currentTime={currentTime} />
    </SafeAreaView>
  )
  
  if (currentTime === 0) setTimedOut(true)
  if (timedOut) content = <TimedOut retry={() => retry()} />
  if (isGetting && !getQuestionsError) content = <GettingQuestions />

  return content
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score, currentQuestion } = state.quiz
  const { currentTime, timedOut } = state.timer
  return { isGetting, getQuestionsError, questions, score, currentQuestion, currentTime, timedOut }
}

const actions = {
  getQuestions,
  updateQuizScore,
  resetQuizScore,
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut
}

export default connect(mapStateToProps, actions)(QuizScreen) 