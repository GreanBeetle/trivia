import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState = {
  isGetting: false,
  getQuestionsError: null,
  questions: [] 
}

// ADD TYPESCRIPT RETURN TYPE? 
const getQuestionsReducer = (
  state = initialState, 
  action: ActionType
) => {
  switch(action.type) {
    case GET_QUESTIONS_REQUEST:
      return { ...state, isGetting: true }
    case GET_QUESTIONS_SUCCESS: 
      return { ...state, isGetting: false, questions: action.payload }
    case GET_QUESTIONS_FAILURE: 
      return { ...state, isGetting: false, getQuestionsError: action.payload }
    default: 
      return state
  }
}

export default getQuestionsReducer