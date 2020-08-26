import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE,
  UPDATE_SCOREBOARD,
  RESET_SCOREBOARD 
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState = { score: 0 }

// ADD TYPESCRIPT RETURN TYPE? 
const quizReducer = (state = initialState, action: ActionType) => {
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
