import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { Swipe } from '../components'
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
  isGetting, // NO USED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  getQuestionsError, // NO UNUSED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  questions, // NO UNUSED VARS, ADD ERROR HANDLING COMPONENT I.E. ERROR.TSX
  score,
  updateQuizScore
}) => {
  
  /* hook to prevent user from swiping back to previous screen
  see react navigation 5 documentation "preventing-going-back"
  kind of an ugly solution but okay for this project */
  useEffect( ():void => {
    navigation.addListener('beforeRemove', (e: any): void => e.preventDefault() )
  }, [navigation])

  const evaluateAnswer = (index: number, answer: boolean): void => {
    const correct_answer = JSON.parse(questions[index].correct_answer.toLowerCase())
    console.log(`question #${index} correct answer ${correct_answer}, actual answer ${answer}`)
    if (answer === correct_answer) updateQuizScore(score + 1)
  } 
  
  console.log('score on quiz screen', score) // REMOVE ME  
  return (
    <SafeAreaView style={STYLES.container}>
      <Swipe questions={questions} onSwipe={evaluateAnswer} />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score } = state.quiz
  return { isGetting, getQuestionsError, questions, score }
}

export default connect(mapStateToProps, { updateQuizScore })(QuizScreen)
