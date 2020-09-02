import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState: { score: number, currentQuestion: number } = { score: 0, currentQuestion: 0 }

const quizReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_QUIZ_SCORE:
      return { 
        score: action.payload, 
        currentQuestion: state.currentQuestion + 1 
      }
    case RESET_QUIZ_SCORE: 
      return { score: 0, currentQuestion: 0 }
    default: 
      return state 
  }
}

export default quizReducer
