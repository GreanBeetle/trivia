import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState: { score: number, totalQuestionsAnswered: number } = { score: 0, totalQuestionsAnswered: 0 }

const quizReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_QUIZ_SCORE:
      return { ...state, score: action.payload, totalQuestionsAnswered: state.totalQuestionsAnswered + 1 }
    case RESET_QUIZ_SCORE: 
      return { ...state, score: 0 }
    default: 
      return state 
  }
}

export default quizReducer
