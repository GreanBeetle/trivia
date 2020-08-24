import React from 'react'
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
  console.log('questions on quiz screen', questions) // REMOVE
  console.log('score on quiz screen', score)
  return (
    <SafeAreaView style={STYLES.container}>
      <Swipe questions={questions} onSwipe={updateQuizScore} />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: ObjectType) => {
  const { isGetting, getQuestionsError, questions } = state.getQuestions
  const { score } = state.quiz
  return { isGetting, getQuestionsError, questions, score }
}

export default connect(mapStateToProps, { updateQuizScore })(QuizScreen)
