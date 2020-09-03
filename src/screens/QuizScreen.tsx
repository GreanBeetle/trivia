import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { ObjectType, ActionType } from '../reusableTypes'
import { retry } from '../utilities'
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
  updateUserAnsweredCorrectly: (index: number, answeredCorrectly: boolean) => ActionType,
  resetTimer: () => ActionType,
  updateTimeRemaining: () => ActionType,
  setTimedOut: (timedOut: boolean) => ActionType,
  currentTime: number,
  timedOut: boolean     
}

const QuizScreen: React.FC<Props> = ({ 
  navigation,
  isGetting,
  getQuestionsError,
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
    
  let timer: any = useRef(null)

  useEffect( () => { 
    timer.current = setInterval( () => {
      updateTimeRemaining()
    }, 1000)
    return () => clearInterval(timer.current)
  }, [])

  /**
   * compares user answer to the correct answer and updates
   * both the quiz score and the question property "user answered correctly?"  
   */   
  const evaluateAnswer = (index: number, answer: boolean) => {
    try {
      let answeredCorrectly = answer === questions[index].correct_answer 
      const newScore = answeredCorrectly ? score + 1 : score
      updateUserAnsweredCorrectly(index, answeredCorrectly) 
      updateQuizScore(newScore)
      resetTimer()
    } catch (error) {
      console.log('error in evaluate answer', error) // change to Alert.alert(retry()) 
    }
  }

  const navToDoneScreen = (): void => {
    clearInterval(timer.current)
    navigation.push('Done')
  }

  const tryAgain = async () => {
    try {
      clearInterval(timer.current)
      retry(true)
    } catch (error) {
      console.log('try again error', error) // change to Alert.alert(retry())      
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
  if (timedOut) content = <TimedOut retry={() => tryAgain()} />
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
  updateUserAnsweredCorrectly,
  resetTimer,
  updateTimeRemaining,
  setTimedOut
}

export default connect(mapStateToProps, actions)(QuizScreen) 