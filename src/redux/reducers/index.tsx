import { combineReducers } from 'redux'
import getQuestionsReducer from './getQuestionsReducer'
import quizReducer from './quizReducer'

export default combineReducers({ 
  getQuestions: getQuestionsReducer, // spread operator instead? try it sometime REMOVE THIS COMMENT
  quiz: quizReducer // spread operator instead? try it sometime REMOVE THIS COMMENT
})