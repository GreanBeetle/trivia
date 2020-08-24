import { UPDATE_QUIZ_SCORE, RESET_QUIZ_SCORE } from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState = { score: 0 }

// ADD TYPESCRIPT RETURN TYPE? 
const quizReducer = (state = initialState, action: ActionType) => {
  console.log('quiz reducer ACTION', action) // REMOVE
  console.log('quiz reducer STATE', state) // REMOVE
  switch (action.type) {
    case UPDATE_QUIZ_SCORE: 
      return { ...state, score: action.payload }
    case RESET_QUIZ_SCORE: 
      return { ...state, score: 0 }
    default: 
      return state 
  }
}

export default quizReducer
