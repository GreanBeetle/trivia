import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  UPDATE_USER_ANSWERED_CORRECTLY,
  RESET_QUESTIONS
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState = {
  isGetting: false,
  getQuestionsError: null,
  questions: [] 
}

const getQuestionsReducer = ( state = initialState, action: ActionType ) => {
  switch(action.type) {
    case GET_QUESTIONS_REQUEST:
      return { ...state, isGetting: true }
    case GET_QUESTIONS_SUCCESS: 
      return { ...state, isGetting: false, questions: action.payload }
    case GET_QUESTIONS_FAILURE: 
      return { ...state, isGetting: false, getQuestionsError: action.payload }
    case RESET_QUESTIONS:
      return { questions: [], getQuestionsError: null, isGetting: false}
    case UPDATE_USER_ANSWERED_CORRECTLY: 
      let { questions } = state
      questions[action.payload.index].user_answered_correctly = action.payload.answeredCorrectly // fix 
      return { ...state, questions }  
    default: 
      return state
  }
}

export default getQuestionsReducer