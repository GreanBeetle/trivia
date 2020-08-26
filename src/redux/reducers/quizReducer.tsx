import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE,
  UPDATE_SCOREBOARD,
  RESET_SCOREBOARD 
} from '../actions/types'
import { ActionType, ObjectType } from '../../reusableTypes'

const initialState: {score: number, scoreBoard: ObjectType[]} = { score: 0, scoreBoard: [] }

// ADD TYPESCRIPT RETURN TYPE? 
const quizReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_QUIZ_SCORE: 
      return { ...state, score: action.payload }
    case RESET_QUIZ_SCORE: 
      return { ...state, score: 0 }
    case UPDATE_SCOREBOARD:
      const { scoreBoard } = state
      scoreBoard[action.payload.index] = { 
        answeredCorrectly: action.payload.answeredCorrectly 
      } 
      console.log('updated scoreboard', scoreBoard) 
      return { ...state, scoreBoard }
    case RESET_SCOREBOARD: 
      return { ...state, scoreBoard: [] }
    default: 
      return state 
  }
}

export default quizReducer
