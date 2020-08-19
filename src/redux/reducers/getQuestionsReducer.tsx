import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from '../actions/types'
import { ObjectType } from '../../reusableTypes'

const initialState = {
  isGetting: false,
  getQuestionsError: null,
  questions: [] 
}

const getQuestionsReducer = (
  state = initialState, 
  action: { 
    type: string, 
    payload: ObjectType 
  }
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