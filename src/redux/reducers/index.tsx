import { combineReducers } from 'redux'
import getQuestionsReducer from './getQuestionsReducer'
import quizReducer from './quizReducer'
import timerReducer from './timerReducer'

export default combineReducers({ 
  getQuestions: getQuestionsReducer, 
  quiz: quizReducer, 
  timer: timerReducer
})